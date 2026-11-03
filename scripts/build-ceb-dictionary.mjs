// Builds the `ceb` (Cebuano) block of public/assets/js/translations.js.
// Scope (localize-to-liloan): navigation, header/footer chrome, hotline labels and the standard
// placeholder. Every other key falls back to English.
// The strings below are the single source for `ceb`: edit them here (native-speaker review) and re-run.
// Usage: node scripts/build-ceb-dictionary.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PUBLIC = new URL('../public/', import.meta.url).pathname;
const DICT = join(PUBLIC, 'assets/js/translations.js');

// Keys used as-is on every page.
const SHARED = {
  'nav-home': 'Panguna',
  'nav-services': 'Mga Serbisyo',
  'nav-government': 'Gobyerno',
  'nav-statistics': 'Estadistika',
  'nav-legislative': 'Lehislatibo',
  'nav-transparency': 'Transparency',
  'nav-contact': 'Kontaka Kami',
  'nav-budget': 'Badyet',
  'nav-news': 'Balita',
  'nav-faq': 'FAQ',
  'nav-sitemap': 'Sitemap',
  'nav-privacy': 'Privacy',
  'nav-terms': 'Mga Termino',
  'nav-accessibility': 'Accessibility',
  'hotline-police': 'Pulis: 0998 598 6385',
  'hotline-fire': 'Bombero: 0905 350 3109',
  'hotline-mdrrmo': 'MDRRMO: 0956 271 1967',
  'hotline-mswdo': 'MSWDO: 0932 293 2853',
  'hotline-lgu': 'LGU: (032) 425 1388',
  'hotline-full-mdrrmo': 'MDRRMO / Ambulansya 0956 271 1967',
  'hotline-full-mdrrmo-alt': 'MDRRMO / Ambulansya 0919 330 7442',
  'hotline-full-pnp': 'PNP Liloan 0998 598 6385',
  'hotline-full-pnp-alt': 'PNP Liloan 0998 967 3845',
  'hotline-full-bfp': 'BFP Liloan 0905 350 3109',
  'hotline-full-mswdo': 'MSWDO Liloan 0932 293 2853',
  'hotline-full-mayor': 'Opisina sa Mayor (032) 564 3131',
  'hotline-full-traffic': 'Trapiko (032) 349 7573',
  'hotline-full-garbage': 'Basura ug Kanal 0933 475 7911',
  'hotline-full-garbage-alt': 'Basura ug Kanal 0997 371 3316',
  'hotline-full-comelec': 'COMELEC Liloan (032) 424 1376',
  'placeholder-coming-soon': 'Ipahibalo ra sa dili madugay',
  'placeholder-visit-lgu': 'Para sa pinakabag-ong detalye, bisitaha ang opisyal nga website sa LGU Liloan',
  'contact-hours': 'Oras sa opisina: ipahibalo ra sa dili madugay',
  'officials-pending-bske': 'Naghulat sa resulta sa BSKE 2026',
  'gov-captain-pending-bske': 'Punong Barangay: i-update human sa BSKE 2026',
};

// Page-prefixed header/footer keys (e.g. `err404-quick-links`), matched by the part after the prefix.
const CHROME = {
  home: 'Panguna',
  services: 'Mga Serbisyo',
  government: 'Gobyerno',
  statistics: 'Estadistika',
  legislative: 'Lehislatibo',
  transparency: 'Transparency',
  contact: 'Kontaka Kami',
  agriculture: 'Agrikultura',
  business: 'Negosyo',
  certificates: 'Mga Sertipiko',
  education: 'Edukasyon',
  environment: 'Kinaiyahan',
  health: 'Panglawas',
  infrastructure: 'Imprastraktura',
  'public-safety': 'Kaluwasan sa Publiko',
  'social-services': 'Serbisyong Sosyal',
  'tax-payments': 'Pagbayad sa Buhis',
  'ordinance-framework': 'Mga Ordinansa',
  'resolution-framework': 'Mga Resolusyon',
  'quick-links': 'Dali nga mga Link',
  resources: 'Mga Kapanguhaan',
  sitemap: 'Sitemap',
  'terms-of-use': 'Mga Termino sa Paggamit',
  'privacy-policy': 'Palisiya sa Privacy',
  accessibility: 'Accessibility',
  'volunteer-with-us': 'Pagboluntaryo uban kanamo',
  'contribute-code-with-us': 'Pag-amot og code uban kanamo',
  'empowering-the-people-of-liloan-with-transparent':
    'Gihatagan og gahom ang katawhan sa Liloan pinaagi sa tin-aw nga access sa mga serbisyo, programa, ug pundo publiko sa LGU Liloan.',
  'official-lgu-liloan-portal': 'Opisyal nga Portal sa LGU Liloan',
  'sangguniang-bayan': 'Sangguniang Bayan',
  'freedom-of-information': 'Kagawasan sa Impormasyon',
  'open-data-philippines': 'Open Data Philippines',
  'blgf-portal': 'BLGF Portal',
  'cmci-dti-portal': 'CMCI DTI Portal',
};

function* walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

const entries = new Map(Object.entries(SHARED));
for (const file of walk(PUBLIC)) {
  const html = readFileSync(file, 'utf8');
  const chrome = [...html.matchAll(/<header[\s\S]*?<\/header>|<footer[\s\S]*?<\/footer>/g)].map((m) => m[0]).join('\n');
  for (const [, key] of chrome.matchAll(/data-i18n="([^"]+)"/g)) {
    const suffix = key.replace(/^[a-z0-9]+-/, '');
    if (!entries.has(key) && CHROME[suffix]) entries.set(key, CHROME[suffix]);
  }
}

const quote = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const body = [...entries]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([k, v]) => `    ${quote(k)}: ${quote(v)},`)
  .join('\n');

const src = readFileSync(DICT, 'utf8');
const next = src.replace(/^ {2}ceb: \{[\s\S]*?^ {2}\},$/m, `  ceb: {\n${body}\n  },`);
if (next === src && !src.includes(body)) throw new Error('ceb block not found');
writeFileSync(DICT, next);
console.log(`ceb entries: ${entries.size}`);
