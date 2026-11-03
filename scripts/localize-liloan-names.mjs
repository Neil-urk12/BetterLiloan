// One-off (localize-to-liloan): generic place-name swap, Solano, Nueva Vizcaya -> Liloan, Cebu.
// Run only after every Solano *fact* (numbers, emails, names, data) was replaced or removed
// (design D1); otherwise this would put Liloan's name on Solano's facts.
// Renames translation keys and data-i18n attributes in the same pass, so they stay in sync.
// Usage: node scripts/localize-liloan-names.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';

const ROOT = new URL('../public/', import.meta.url).pathname;
const TEXT_EXT = new Set(['.html', '.js', '.json', '.css', '.svg', '.txt', '.xml', '.webmanifest', '.md']);

const RULES = [
  [/Solano,\s+Nueva\s+Vizcaya/g, 'Liloan, Cebu'],
  [/solano-nueva-vizcaya/g, 'liloan-cebu'],
  [/Nueva\s+Vizcaya/g, 'Cebu'],
  [/nueva-?vizcaya/g, 'cebu'],
  [/N\. ?Vizcaya/g, 'Cebu'],
  [/(Better)( ?)Solano/g, '$1$2Liloan'],
  [/SOLANO/g, 'LILOAN'],
  [/Solano/g, 'Liloan'],
  [/solano/g, 'liloan'],
  [/-3708\b/g, '-6002'],
];

function* walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (TEXT_EXT.has(extname(e.name)) || e.name === '_headers') yield p;
  }
}

let changed = 0;
for (const file of walk(ROOT)) {
  const before = readFileSync(file, 'utf8');
  const after = RULES.reduce((s, [re, rep]) => s.replace(re, rep), before);
  if (after !== before) {
    writeFileSync(file, after);
    changed++;
  }
}
console.log(`updated ${changed} file(s)`);
