// Fails if Solano, Nueva Vizcaya content or the retired Ilocano language remains in public/.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

const ROOT = new URL('../public/', import.meta.url).pathname;
const TEXT_EXT = new Set(['.html', '.js', '.json', '.css', '.svg', '.txt', '.xml', '.webmanifest', '.md']);

const PATTERNS = [
  /solano/i,
  /solane(?:ñ|n)[oa]s?/i,
  /nueva\s*vizcaya/i,
  /bettersolano/i,
  /\b(bayombong|bambang|magat|aggub|bagahabag|bascaran|curifang|lactawan|uddiawan|wacal|tucal|r2tmc|nuvelco|vizcayano)\b/i,
  /cagayan valley/i,
  // Solano figures that appear without the town name: population, land area, ZIP codes.
  /\b69,?296\b|\b162\.7\d?\b|\b370[89]\b|\b16\.5[0-3]\d*|\b121\.[12]\d*/,
  /data-lang="ilo"|hreflang="ilo"|supportedLangs[^\n]*'ilo'|^\s*ilo:\s*\{/,
];

// Every PH phone number on the site must be a verified Liloan line (docs/liloan-data-research.md §2–§3).
const VERIFIED_PHONES = new Set([
  '09985986385', '09989673845', // PNP Liloan
  '09053503109', // BFP Liloan
  '09562711967', '09193307442', // MDRRMO / ambulance, floods
  '09322932853', // MSWDO
  '0324251388', '0324135400', '0322608328', '0322635451', // LGU trunk lines
  '0325643131', // Mayor's Office
  '0325033930', // Engineering / OBO
  '0323497573', // Traffic
  '09334757911', '09973713316', // Garbage collection & drainage
  '0324241376', // COMELEC Liloan
]);
const PHONE = /(?<![\w.,-])(?:\+63|0)[\d\s()-]{8,14}\d/g;

function unverifiedPhones(line) {
  return (line.match(PHONE) || [])
    .map((m) => m.replace(/\D/g, '').replace(/^63/, '0'))
    .filter((d) => (d.length === 10 || d.length === 11) && !VERIFIED_PHONES.has(d));
}

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (TEXT_EXT.has(extname(entry.name)) || entry.name === '_headers') yield path;
  }
}

test('the leftover guard recognizes the former demonym', () => {
  for (const demonym of ['Solaneños', 'solaneñas', 'Solanenos', 'SOLANENAS']) {
    assert.ok(PATTERNS.some((re) => re.test(demonym)), `missed ${demonym}`);
  }
});

test('public/ has no Solano, Ilocano or unverified phone leftovers', () => {
  const hits = [];
  for (const file of walk(ROOT)) {
    readFileSync(file, 'utf8')
      .split('\n')
      .forEach((line, i) => {
        if (PATTERNS.some((re) => re.test(line)) || (!file.endsWith(".svg") && unverifiedPhones(line).length)) {
          hits.push(`${relative(ROOT, file)}:${i + 1}: ${line.trim().slice(0, 120)}`);
        }
      });
  }
  assert.equal(hits.length, 0, `${hits.length} leftover reference(s):\n${hits.join('\n')}`);
});
