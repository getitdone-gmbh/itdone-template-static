#!/usr/bin/env node
/**
 * Static-site check — the "build" of this template. There is nothing to
 * compile, but exit codes must still mean something: this validates every
 * HTML page and the local references between files, so a broken link or a
 * typo'd asset path fails the build instead of shipping.
 *
 * Checks per .html file:
 *  - starts with <!doctype html>
 *  - has a non-empty <title>
 *  - every local href/src (not http(s):, mailto:, tel:, #, data:) points to
 *    a file that exists
 */
const fs = require("node:fs");
const path = require("node:path");

const ROOT = __dirname;
const SKIP_DIRS = new Set(["node_modules", ".git"]);

function htmlFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) out.push(...htmlFiles(path.join(dir, entry.name)));
    } else if (entry.name.endsWith(".html")) {
      out.push(path.join(dir, entry.name));
    }
  }
  return out;
}

const EXTERNAL = /^(https?:|mailto:|tel:|data:|#|\/\/)/i;
const errors = [];
const files = htmlFiles(ROOT);

if (files.length === 0) errors.push("no .html files found — the site has no pages");

for (const file of files) {
  const rel = path.relative(ROOT, file);
  const html = fs.readFileSync(file, "utf8");

  if (!/^\s*<!doctype html>/i.test(html)) errors.push(`${rel}: missing <!doctype html>`);
  if (!/<title>\s*\S[^<]*<\/title>/i.test(html)) errors.push(`${rel}: missing or empty <title>`);

  for (const m of html.matchAll(/(?:href|src)\s*=\s*["']([^"']+)["']/gi)) {
    const url = m[1].trim();
    if (!url || EXTERNAL.test(url)) continue;
    const clean = url.split(/[?#]/)[0];
    if (!clean) continue;
    const target = clean.startsWith("/")
      ? path.join(ROOT, clean)
      : path.resolve(path.dirname(file), clean);
    if (!fs.existsSync(target)) errors.push(`${rel}: broken reference "${url}"`);
  }
}

if (errors.length) {
  console.error(`check failed (${errors.length}):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`check passed: ${files.length} page(s), all local references resolve`);
