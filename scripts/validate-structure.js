#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const requiredDirs = [
  "assets/templates",
  "commands",
  "docs",
  "docs/methodologies",
  "docs/engineering-standards",
  "docs/integrations",
  "external-cli",
  "external-skills",
  "members",
  "schemas",
  "scripts",
  "workflows",
  "workspace"
];
const requiredFiles = [
  "SKILL.md",
  "README.md",
  "README_EN.md",
  "evaluation-report.md",
  "package.json",
  "skill-runtime.json",
  "commands/README.md",
  "commands/perf-team.md",
  "docs/README.md",
  "docs/quality-gates.md",
  "docs/quality-rubrics.md",
  "docs/handoff-contract.md",
  "docs/team-operating-model.md",
  "docs/execution-methodology.md",
  "docs/verification-methodology.md",
  "docs/role-activation-methodology.md",
  "docs/capability-matrix.md",
  "docs/acceptance-scenarios.md",
  "docs/integrations/data-contracts.md",
  "assets/templates/decision-log.md",
  "assets/templates/risk-register.md",
  "assets/templates/role-handoff.md",
  "assets/templates/evidence-index.md",
  "assets/templates/delivery-summary.md",
  "members/README.md",
  "workflows/README.md",
  "workflows/route-table.md",
  "workflows/execution-protocol.md",
  "external-skills/README.md",
  "external-skills/catalog.json",
  "external-skills/adapters.json",
  "external-skills/install-policy.md",
  "external-skills/role-map.md",
  "external-cli/README.md",
  "workspace/README.md",
  "scripts/run-acceptance-scenarios.js",
  "generation-report.json",
  "members/performance-lead.md",
  "members/source-performance-analyst.md",
  "members/browser-performance-engineer.md",
  "members/rendering-performance-specialist.md",
  "members/loading-performance-specialist.md",
  "members/field-performance-analyst.md",
  "members/performance-solution-architect.md",
  "members/performance-evidence-reviewer.md",
  "workflows/performance-intake.md",
  "workflows/full-performance-assessment.md",
  "workflows/performance-regression-diagnosis.md",
  "workflows/performance-solution-design.md",
  "workflows/performance-analysis-delivery.md"
];
const results = [];
function record(ok, message) { results.push({ ok, message }); }
function existsFile(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  return fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile();
}
function existsDir(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  return fs.existsSync(absolutePath) && fs.statSync(absolutePath).isDirectory();
}
for (const dir of requiredDirs) record(existsDir(dir), "required directory exists: " + dir);
for (const file of requiredFiles) record(existsFile(file), "required file exists: " + file);
const failed = results.filter((result) => !result.ok);
for (const result of results) console.log((result.ok ? "PASS" : "FAIL") + " " + result.message);
if (failed.length > 0) {
  console.error("\n" + failed.length + " structure validation check(s) failed.");
  process.exit(1);
}
console.log("\nAll " + results.length + " structure validation checks passed.");
