#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const catalogPath = path.resolve(__dirname, "..", "external-skills", "catalog.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const args = process.argv.slice(2);
const roleIndex = args.indexOf("--role");
const queryIndex = args.indexOf("--query");
const role = roleIndex >= 0 ? args[roleIndex + 1] : "";
const query = queryIndex >= 0 ? args[queryIndex + 1] : "";
const normalizedQuery = String(query || "").toLowerCase();
const skills = (catalog.skills || []).filter((skill) => {
  const roleMatched = role ? (skill.roles || []).includes(role) : true;
  const queryMatched = normalizedQuery
    ? [skill.id, skill.name, ...(skill.keywords || [])].join(" ").toLowerCase().includes(normalizedQuery)
    : true;
  return roleMatched && queryMatched;
});
for (const skill of skills) {
  console.log([skill.id, skill.qualityTier, skill.package].join("\t"));
}
