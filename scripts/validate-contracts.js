#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const SKIP_DIRS = new Set([".git", "node_modules", "dist", "build", "coverage"]);
const riskControls = {
  "domainRiskLevel": "medium",
  "requiredDisclaimers": [
    "性能结论仅适用于报告记录的代码版本、用户旅程、运行环境、数据窗口和测量条件。",
    "实验室测量不等同真实用户表现；缺少现场数据时必须明确标记为实验室结论。",
    "本团队只交付分析、方案和落地节奏，不直接执行代码、配置或生产环境变更。"
  ],
  "blockedClaims": [
    "不得在没有真实浏览器证据时声称运行时性能已验证。",
    "不得把单次采样、综合评分、静态代码气味或现场相关性写成确定性根因。",
    "不得承诺未经实施、复测和现场观测的确定性性能收益或交付工期。",
    "不得在未获用户批准时调用 ai-work-team 修改代码或触发生产副作用。"
  ],
  "evidenceRules": [
    "所有性能结论必须关联来源、版本、环境、时间、指标单位、适用范围和证据 ID。",
    "P0/P1 根因必须包含支持证据、反向证据、替代解释、置信度和失效条件。",
    "浏览器对比必须记录缓存、网络、CPU、设备、浏览器、数据状态和重复次数。",
    "现场指标必须记录口径、窗口、样本量、分位数、版本和关键分群。",
    "所有推荐方案必须映射根因，并包含上下文影响范围、验证方式、回归面、停止和回滚条件。"
  ],
  "humanReview": {
    "required": false,
    "accountableRole": "",
    "requiredWhen": [],
    "blockedWithoutApproval": false
  }
};
const memberIds = [
  "performance-lead",
  "source-performance-analyst",
  "browser-performance-engineer",
  "rendering-performance-specialist",
  "loading-performance-specialist",
  "field-performance-analyst",
  "performance-solution-architect",
  "performance-evidence-reviewer"
];
const results = [];
function record(ok, message) { results.push({ ok, message }); }
function read(relativePath) { return fs.readFileSync(path.join(ROOT, relativePath), "utf8"); }
function parseJson(relativePath) {
  try { return JSON.parse(read(relativePath)); }
  catch (error) { record(false, relativePath + " is valid JSON (" + error.message + ")"); return null; }
}
function listMarkdownFiles(relativeDir) {
  const absoluteDir = path.join(ROOT, relativeDir);
  if (!fs.existsSync(absoluteDir)) return [];
  return fs.readdirSync(absoluteDir).filter((file) => file.endsWith(".md")).map((file) => path.join(relativeDir, file));
}
function parseFrontmatter(content) {
  const lines = content.split(/\r?\n/);
  if (lines[0] !== "---") return null;
  const data = {};
  let currentKey = null;
  for (let index = 1; index < lines.length; index += 1) {
    const line = lines[index];
    if (line === "---") break;
    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      data[currentKey] = keyMatch[2].trim() === "" ? [] : keyMatch[2].trim().replace(/^[\"']|[\"']$/g, "");
      continue;
    }
    const arrayMatch = line.match(/^\s+-\s+(.+)$/);
    if (arrayMatch && currentKey && Array.isArray(data[currentKey])) {
      data[currentKey].push(arrayMatch[1].trim().replace(/^[\"']|[\"']$/g, ""));
    }
  }
  return data;
}
function parseStageRows(content) {
  const rows = [];
  for (const line of content.split(/\r?\n/)) {
    if (!line.startsWith("|")) continue;
    if (line.includes("---") || line.includes("阶段 | 负责人")) continue;
    const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
    if (cells.length < 5) continue;
    rows.push({
      owner: cells[1],
      gates: cells[4].split(/[,，]/).map((gate) => gate.trim()).filter(Boolean)
    });
  }
  return rows;
}
function hasHollowContent(content) {
  if (content.includes("待执行时按当前团队上下文补齐") || content.includes("尚未声明")) return true;
  return content.split(/\r?\n/).some((line) => line.trim() === "-");
}
function schemaIsDeep(schema) {
  return schema && Array.isArray(schema.required) && schema.required.length > 0 && schema.properties && Object.keys(schema.properties).length > 0;
}
function collectFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const absolutePath = path.join(dir, entry.name);
    if (entry.isDirectory()) collectFiles(absolutePath, files);
    else if (entry.isFile() && [".md", ".json", ".js"].includes(path.extname(entry.name))) files.push(absolutePath);
  }
  return files;
}
const readme = read("README.md");
const readmeEn = read("README_EN.md");
const skill = read("SKILL.md");
record(readme.includes("[English](./README_EN.md)"), "README links to README_EN.md");
record(readmeEn.includes("[简体中文](./README.md)"), "README_EN links to README.md");
record(readme.includes("默认中文用户文档"), "README states Simplified Chinese responsibility");
record(readmeEn.includes("English user documentation"), "README_EN states English responsibility");
record(skill.includes("Agent"), "SKILL states Agent-facing responsibility");
const roleActivation = read("docs/role-activation-methodology.md");
record(roleActivation.includes("rolePlan"), "role activation methodology defines rolePlan");
record(["active", "consulted", "not_applicable"].every((mode) => roleActivation.includes(mode)), "role activation methodology defines participation modes");
record(roleActivation.includes("N/A") && /重新评估|re-?evaluate/i.test(roleActivation), "role activation methodology defines N/A and reassessment");
const executionMethodology = read("docs/execution-methodology.md");
record(["lightweight", "standard", "assurance"].every((profile) => executionMethodology.includes(profile)), "execution methodology defines all profiles");
const verificationMethodology = read("docs/verification-methodology.md");
record(["V0", "V1", "V2", "V3", "V4"].every((level) => verificationMethodology.includes(level)), "verification methodology defines V0-V4");
const runtime = parseJson("skill-runtime.json");
record(Boolean(runtime && runtime.agentHints && runtime.agentHints.executionPolicy), "runtime defines execution policy");
record(Boolean(runtime && runtime.agentHints && runtime.agentHints.roleActivationPolicy), "runtime defines role activation policy");
record(Boolean(runtime && runtime.agentHints && runtime.agentHints.verificationPolicy), "runtime defines verification boundary");
const workflowStatus = parseJson("assets/templates/workflow-status.json");
const rolePlan = workflowStatus && workflowStatus.rolePlan;
record(["lightweight", "standard", "assurance"].includes(workflowStatus && workflowStatus.executionProfile), "workflow-status has valid executionProfile");
record(/^V[0-4]$/.test(String(workflowStatus && workflowStatus.verificationLevel)), "workflow-status has valid verificationLevel");
record(/^V[0-4]$/.test(String(workflowStatus && workflowStatus.targetVerificationLevel)), "workflow-status has valid targetVerificationLevel");
record(Array.isArray(rolePlan) && rolePlan.length === memberIds.length, "workflow-status rolePlan covers every member");
for (const item of rolePlan || []) {
  record(memberIds.includes(item.role), "workflow-status rolePlan references a declared member: " + (item.role || "unknown"));
  record(["active", "consulted", "not_applicable"].includes(item.mode), "workflow-status rolePlan mode is valid: " + (item.mode || "missing"));
  record(Boolean(item.reason), "workflow-status rolePlan has a reason: " + (item.role || "unknown"));
  record(Array.isArray(item.stages), "workflow-status rolePlan stages is an array: " + (item.role || "unknown"));
}
const allRiskText = [skill, read("docs/quality-gates.md"), read("docs/quality-rubrics.md")].join("\n");
for (const item of riskControls.requiredDisclaimers || []) record(allRiskText.includes(item), "risk disclaimer present: " + item);
for (const item of riskControls.blockedClaims || []) record(allRiskText.includes(item), "blocked claim present: " + item);
for (const item of riskControls.evidenceRules || []) record(allRiskText.includes(item), "evidence rule present: " + item);
for (const workflowFile of listMarkdownFiles("workflows").filter((file) => !file.endsWith("README.md") && !file.endsWith("route-table.md") && !file.endsWith("execution-protocol.md"))) {
  const content = read(workflowFile);
  const data = parseFrontmatter(content);
  const stageRows = parseStageRows(content);
  record(Boolean(data), workflowFile + " has frontmatter");
  record(stageRows.length > 0, workflowFile + " has executable stage rows");
  const stageOwners = new Set(stageRows.map((row) => row.owner));
  const stageGates = new Set(stageRows.flatMap((row) => row.gates));
  for (const owner of stageOwners) record(((data && data.members) || []).includes(owner), workflowFile + " stage owner is a candidate member: " + owner);
  for (const gate of (data && data.quality_gates) || []) record(stageGates.has(gate), workflowFile + " declared quality gate appears in stage rows: " + gate);
}
for (const file of [
  ...listMarkdownFiles("docs/methodologies"),
  ...listMarkdownFiles("docs/engineering-standards"),
  ...listMarkdownFiles("docs/integrations"),
  ...listMarkdownFiles("assets/templates")
]) {
  if (file.endsWith("workflow-status.json")) continue;
  record(!hasHollowContent(read(file)), file + " has non-hollow generated content");
}
for (const schemaFile of [
  "schemas/member.schema.json",
  "schemas/workflow.schema.json",
  "schemas/command.schema.json",
  "schemas/status.schema.json",
  "schemas/skill-runtime.schema.json"
]) {
  const schema = parseJson(schemaFile);
  record(schemaIsDeep(schema), schemaFile + " has required fields and properties");
  if (schemaFile === "schemas/status.schema.json") {
    record(Array.isArray(schema && schema.required) && schema.required.includes("rolePlan"), "status schema requires rolePlan");
    record(Boolean(schema && schema.properties && schema.properties.rolePlan), "status schema defines rolePlan");
    record(Array.isArray(schema && schema.required) && schema.required.includes("executionProfile"), "status schema requires executionProfile");
    record(Array.isArray(schema && schema.required) && schema.required.includes("verificationLevel"), "status schema requires verificationLevel");
  }
  if (schemaFile === "schemas/skill-runtime.schema.json") {
    const agentHints = schema && schema.properties && schema.properties.agentHints;
    record(Array.isArray(schema && schema.required) && schema.required.includes("agentHints"), "runtime schema requires agentHints");
    record(Boolean(agentHints && agentHints.properties && agentHints.properties.verificationPolicy), "runtime schema defines verificationPolicy");
  }
}
const adapters = parseJson("external-skills/adapters.json");
const catalog = parseJson("external-skills/catalog.json");
const catalogSkillIds = new Set(((catalog && catalog.skills) || []).map((item) => item.id));
for (const adapter of ((adapters && adapters.adapters) || [])) {
  record(Boolean(adapter.id), "adapter has id: " + (adapter.id || "unknown"));
  record(catalogSkillIds.has(adapter.skill), "adapter " + (adapter.id || "unknown") + " references catalog skill: " + (adapter.skill || "unknown"));
  record(Boolean(adapter.provider), "adapter " + (adapter.id || "unknown") + " has provider");
  record(Array.isArray(adapter.inputSchema) && adapter.inputSchema.length > 0, "adapter " + (adapter.id || "unknown") + " has inputSchema");
  record(Array.isArray(adapter.outputSchema) && adapter.outputSchema.length > 0, "adapter " + (adapter.id || "unknown") + " has outputSchema");
  record(Boolean(adapter.auth), "adapter " + (adapter.id || "unknown") + " has auth");
  record(Boolean(adapter.fallback), "adapter " + (adapter.id || "unknown") + " has fallback");
  record(Boolean(adapter.verifyCommand), "adapter " + (adapter.id || "unknown") + " has verifyCommand");
}
for (const file of collectFiles(ROOT)) {
  const relativePath = path.relative(ROOT, file);
  const content = fs.readFileSync(file, "utf8");
  record(!content.includes(String.fromCharCode(123, 123)), relativePath + " has no unresolved template opener");
  record(!content.includes(String.fromCharCode(125, 125)), relativePath + " has no unresolved template closer");
}
const failed = results.filter((result) => !result.ok);
for (const result of results) console.log((result.ok ? "PASS" : "FAIL") + " " + result.message);
if (failed.length > 0) {
  console.error("\n" + failed.length + " contract validation check(s) failed.");
  process.exit(1);
}
console.log("\nAll " + results.length + " contract validation checks passed.");
