// One-off (localize-to-liloan): delete translation keys that pages referenced at git HEAD
// but no page or script references any more (the Solano content they held was removed).
// Keys never referenced at HEAD are left alone, so keys used only via dynamic lookups survive.
// Usage: node scripts/prune-orphan-i18n.mjs
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const REPO = new URL('../', import.meta.url).pathname;
const PUBLIC = join(REPO, 'public');
const DICT = join(PUBLIC, 'assets/js/translations.js');
const ATTR = /data-i18n(?:-[a-z]+)?="([^"]+)"/g;
// Quoted strings in JS that look like keys, e.g. t('nav-home') or data-i18n="..." inside template strings.
const JS_KEY = /['"`]([a-z0-9]+(?:-[a-z0-9]+)+)['"`]/g;

const keysIn = (text, re) => new Set([...text.matchAll(re)].map((m) => m[1]));
const union = (sets) => new Set(sets.flatMap((s) => [...s]));

function* walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

const git = (...args) => execFileSync('git', args, { cwd: REPO, encoding: 'utf8', maxBuffer: 1 << 28 });
const headHtml = git('ls-tree', '-r', '--name-only', 'HEAD', 'public').split('\n').filter((p) => p.endsWith('.html'));
const usedAtHead = union(headHtml.map((p) => keysIn(git('show', `HEAD:${p}`), ATTR)));

const files = [...walk(PUBLIC)];
const usedNow = union([
  ...files.filter((f) => f.endsWith('.html')).map((f) => keysIn(readFileSync(f, 'utf8'), ATTR)),
  ...files
    .filter((f) => f.endsWith('.js') && f !== DICT)
    .flatMap((f) => [keysIn(readFileSync(f, 'utf8'), JS_KEY), keysIn(readFileSync(f, 'utf8'), ATTR)]),
]);
const orphaned = new Set([...usedAtHead].filter((k) => !usedNow.has(k)));

// Entries look like `    'key': 'value',` or `    'key':\n      'long value',`.
const lines = readFileSync(DICT, 'utf8').split('\n');
const out = [];
let removed = 0;
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^ {4}'([^']+)':/);
  if (m && orphaned.has(m[1])) {
    removed++;
    while (i + 1 < lines.length && !/^ {4}['/]|^ {2}\}/.test(lines[i + 1])) i++;
    continue;
  }
  out.push(lines[i]);
}
writeFileSync(DICT, out.join('\n'));
console.log(`orphaned keys: ${orphaned.size}, dictionary entries removed: ${removed}`);
