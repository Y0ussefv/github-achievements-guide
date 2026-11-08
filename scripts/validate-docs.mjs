#!/usr/bin/env node
// Documentation validation for github-achievements-guide.
// Checks:
//   1. Every achievement tutorial has the required numbered sections.
//   2. Every achievement tutorial is linked from README.md and achievements/README.md.
//   3. Every achievement tutorial has a Sources section with at least one https link.
//   4. Every requirement table row in a tutorial carries a status label.
//   5. Badge images only come from GitHub's asset server (no copied artwork).
// Uses only Node.js built-ins so it runs without installing anything.

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const achievementsDir = join(root, "achievements");
const NON_TUTORIALS = new Set(["README.md", "other-achievements.md"]);
const REQUIRED_SECTIONS = [
  /^## 1\. What it represents/m,
  /^## 2\. Requirements/m,
  /^## 3\. Step by step/m,
  /^## 4\. Check whether it was awarded/m,
  /^## 5\. Restrictions/m,
  /^## 6\. Sources/m,
];
const STATUS = /(✅|🧪|❓)/u;
const ALLOWED_IMG = /^(https:\/\/github\.githubassets\.com\/images\/modules\/profile\/achievements\/|assets\/|\.\.\/assets\/)/;

const errors = [];
const read = (p) => readFileSync(p, "utf8");

const tutorials = readdirSync(achievementsDir).filter(
  (f) => f.endsWith(".md") && !NON_TUTORIALS.has(f),
);
const rootReadme = read(join(root, "README.md"));
const indexReadme = read(join(achievementsDir, "README.md"));

for (const file of tutorials) {
  const text = read(join(achievementsDir, file));
  const where = `achievements/${file}`;

  for (const re of REQUIRED_SECTIONS) {
    if (!re.test(text)) errors.push(`${where}: missing section matching ${re}`);
  }

  if (!rootReadme.includes(`achievements/${file}`)) {
    errors.push(`${where}: not linked from README.md`);
  }
  if (!indexReadme.includes(`(${file})`)) {
    errors.push(`${where}: not linked from achievements/README.md`);
  }

  const sources = text.split(/^## 6\. Sources/m)[1] ?? "";
  if (!/https:\/\//.test(sources)) {
    errors.push(`${where}: Sources section has no https link`);
  }

  // Requirement tables: rows between "## 2." and "## 3." that start with "|" and are not header/separator rows.
  const reqSection = (text.split(/^## 2\. Requirements/m)[1] ?? "").split(/^## 3\./m)[0];
  const rows = reqSection
    .split("\n")
    .filter((l) => l.startsWith("|") && !/^\|\s*-/.test(l) && !/^\|\s*(Tier|Requirement|Detail)\s*\|/.test(l));
  for (const row of rows) {
    if (!STATUS.test(row)) errors.push(`${where}: requirement row without status label: ${row.trim()}`);
  }
}

// Image sources across all Markdown files.
const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    if (d.name === "node_modules" || d.name === ".git") return [];
    const p = join(dir, d.name);
    return d.isDirectory() ? walk(p) : d.name.endsWith(".md") ? [p] : [];
  });

for (const file of walk(root)) {
  const text = read(file);
  for (const m of text.matchAll(/<img[^>]*\ssrc="([^"]+)"/g)) {
    if (!ALLOWED_IMG.test(m[1])) {
      errors.push(`${file.replace(root, "")}: image from unexpected source ${m[1]}`);
    }
  }
}

if (errors.length) {
  console.error(`❌ Documentation validation failed (${errors.length} problem(s)):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`✅ Documentation validation passed (${tutorials.length} achievement tutorials checked).`);
