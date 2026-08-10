#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const catalogPath = path.resolve(__dirname, "..", "external-skills", "catalog.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const target = args.find((arg) => !arg.startsWith("--"));
const skills = (catalog.skills || []).filter((skill) => target ? skill.id === target : skill.qualityTier === "recommended");
if (skills.length === 0) {
  console.error("No external skills matched.");
  process.exit(1);
}
for (const skill of skills) {
  const command = "npx skills add " + skill.package + " -g -y";
  console.log((dryRun ? "DRY-RUN " : "INSTALL ") + command);
}
if (!dryRun) {
  console.log("Installation is intentionally not executed by this generated helper. Run the printed commands after user approval.");
}
