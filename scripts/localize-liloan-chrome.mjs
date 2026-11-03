// One-off (localize-to-liloan): replace Solano shared chrome on every page under public/.
// Idempotent: re-running on already-converted pages changes nothing.
// Usage: node scripts/localize-liloan-chrome.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('../public/', import.meta.url).pathname;

// Verified in docs/liloan-data-research.md §2 / §3 (LGU poster, contact page).
const HOTLINES = [
  ['tel:09985986385', 'bi-shield-fill', 'hotline-police', 'Police: 0998 598 6385'],
  ['tel:09053503109', 'bi-fire', 'hotline-fire', 'Fire: 0905 350 3109'],
  ['tel:09562711967', 'bi-exclamation-triangle-fill', 'hotline-mdrrmo', 'MDRRMO: 0956 271 1967'],
  ['tel:09322932853', 'bi-heart-fill', 'hotline-mswdo', 'MSWDO: 0932 293 2853'],
  ['tel:0324251388', 'bi-telephone-fill', 'hotline-lgu', 'LGU: (032) 425 1388'],
];

function hotlineBlock(indent) {
  const items = HOTLINES.map(
    ([href, icon, key, text]) =>
      `${indent}  <a href="${href}" class="hotline-item">\n` +
      `${indent}    <i class="bi ${icon}" aria-hidden="true"></i>\n` +
      `${indent}    <span data-i18n="${key}">${text}</span>\n` +
      `${indent}  </a>`
  ).join('\n');
  return `<div class="hotline-items">\n${items}\n${indent}</div>`;
}

const RULES = [
  // Hotline bar: items contain no nested <div>, so the first </div> closes the list.
  [/^([ \t]*)<div class="hotline-items">[\s\S]*?<\/div>/m, (_, indent) => indent + hotlineBlock(indent)],

  // Language switcher and hreflang: Ilocano -> Cebuano.
  [/(data-lang=")ilo("[^>]*>\s*)ILO/g, '$1ceb$2CEB'],
  [/data-lang="ilo"/g, 'data-lang="ceb"'],
  [/Switch to Ilocano/g, 'Switch to Cebuano'],
  [/hreflang="ilo"/g, 'hreflang="ceb"'],
  [/\?lang=ilo\b/g, '?lang=ceb'],

  // Footer social: BetterSolano LinkedIn -> official LGU Liloan Facebook page (human-verified).
  [
    /href="https:\/\/www\.linkedin\.com\/company\/bettersolano\/"([\s\S]*?)aria-label="LinkedIn"([\s\S]*?)bi-linkedin/g,
    'href="https://www.facebook.com/municipalityliloancebu"$1aria-label="LGU Liloan on Facebook"$2bi-facebook',
  ],

  // Footer quick links with no Liloan equivalent: quiz site and Solano Citizen's Charter PDF.
  [/[ \t]*<li>\s*<a\s+href="https:\/\/quiz\.bettersolano\.org\/"[\s\S]*?<\/li>\n/g, ''],
  [/[ \t]*<li>\s*<a\s+href="https:\/\/solano\.gov\.ph\/wp-content\/uploads\/2025\/10\/[^"]*"[\s\S]*?<\/li>\n/g, ''],

  // LGU portal and Sangguniang Bayan links.
  [/https:\/\/sangguniangbayan\.solano\.gov\.ph\/(?!index\.php)/g, 'https://liloan.gov.ph/sangguniang-bayan-members/'],
  [/https:\/\/solano\.gov\.ph\/?(?=")/g, 'https://liloan.gov.ph/'],

  // Solano downloadable forms -> standard placeholder (one per list).
  [
    /^([ \t]*)<li>\s*<i class="bi bi-file-earmark-pdf"><\/i>\s*<a\s+href="https:\/\/solano\.gov\.ph\/wp-content\/uploads\/[\s\S]*?<\/li>/gm,
    (_, i) =>
      `${i}<li>\n${i}  <i class="bi bi-info-circle"></i>\n` +
      `${i}  <span data-i18n="placeholder-coming-soon">Information coming soon</span>.\n` +
      `${i}  <a href="https://liloan.gov.ph/" target="_blank" rel="noopener noreferrer" data-i18n="placeholder-visit-lgu"\n` +
      `${i}    >For the latest details, visit the official LGU Liloan website</a\n${i}  >\n${i}</li>`,
  ],
  [/(<li>\s*<i class="bi bi-info-circle"><\/i>\s*<span data-i18n="placeholder-coming-soon">[\s\S]*?<\/li>)(\s*<li>\s*<i class="bi bi-info-circle"><\/i>\s*<span data-i18n="placeholder-coming-soon">[\s\S]*?<\/li>)+/g, '$1'],

  // Solano SB legislative portal -> LGU Liloan website.
  [/https:\/\/sangguniangbayan\.solano\.gov\.ph\/index\.php\?page=legislative_framework_(?:ord|reso)/g, 'https://liloan.gov.ph/'],

  // Office emails: Liloan publishes only a general address (docs/liloan-data-research.md §3).
  [/<span data-i18n="[a-z0-9-]*(?:solanogovph|gmailcom)"(\s*)>/g, '<span$1>'],
  [/[a-z]+@solano\.gov\.ph|lgusolanonv@gmail\.com/g, 'liveloveliloan@liloan.gov.ph'],

  // Office phones -> verified Liloan trunk line + local, or the office's direct line.
  [/tel:0783265002"><i class="bi bi-telephone"><\/i> \(078\) 326-5002/g, 'tel:0325643131"><i class="bi bi-telephone"></i> (032) 564-3131'],
  [/(Business permits[\s\S]{0,300}?)\(078\) 326-5002/g, '$1(032) 425-1388 loc. 112'],
  [/\(078\) 326-5011/g, '(032) 425-1388 loc. 115'],
  [/\(078\) 326-5012/g, '(032) 425-1388 loc. 11'],
  [/\(078\) 326-5013/g, '(032) 503-3930'],
  [/\(078\) 326-5014/g, '0932 293 2853'],
  [/\(078\) 326-5015/g, '(032) 425-1388 loc. 113'],
  [/\(078\) 326-5017/g, '(032) 425-1388 loc. 114'],
  [/\(078\) (?:326-50(?:0[0-3]|1[06])|805-3581)/g, '(032) 425-1388'],
  [/tel:0783265013/g, 'tel:0325033930'],
  [/tel:0783265014/g, 'tel:09322932853'],
  [/tel:078(?:32650\d\d|8053581)/g, 'tel:0324251388'],

  // Same-role emergency lines, Solano -> Liloan (DILG and R2TMC have no Liloan equivalent; removed by hand).
  // Keep the source's separator so tel: links stay digits-only and keys stay hyphenated.
  ...[
    ['0927', '400', '8033', '0998', '598', '6385'],
    ['0916', '284', '0885', '0932', '293', '2853'],
    ['0936', '062', '0305', '0905', '350', '3109'],
    ['0926', '383', '3744', '0956', '271', '1967'],
  ].map(([a, b, c, x, y, z]) => [new RegExp(`${a}([ -]?)${b}[ -]?${c}`, 'g'), (_, sep) => [x, y, z].join(sep)]),

  // Officials named in meta tags and text (2025–2028 term, docs/liloan-data-research.md §1).
  [/Philip A\. Dacayo/g, 'Aljew Fernando J. Frasco'],
  [/Mayor (?:Philip )?Dacayo/g, 'Mayor Aljew Frasco'],
  [/Eduardo D\. Tiongson/g, 'Margarita D. Frasco'],
  [/Vice Mayor Tiongson/g, 'Vice Mayor Margarita Frasco'],
  [/22 barangay captains/g, '14 barangays'],
  [/Nueva Vizcaya District Engineering Office/g, 'Cebu 5th District Engineering Office'],

  // Office hours are not published by LGU Liloan (docs/liloan-data-research.md §3).
  [/Mon(?:day)?\s*-\s*Fri(?:day)?:?,?\s*8:?0?0?\s*AM\s*-\s*5:?0?0?\s*PM/gi, 'Office hours: information coming soon'],
  [/8AM - 5PM \(Mon-Fri\)/g, 'Office hours: information coming soon'],
  [/<p(?: data-i18n="[a-z]+-8am-5pm")?>8AM - 5PM<\/p>/g, '<p data-i18n="placeholder-coming-soon">Information coming soon</p>'],
  [/<p>Monday - Friday<\/p>/g, '<p data-i18n="placeholder-coming-soon">Information coming soon</p>'],
  [/<p>Mon-Fri<\/p>(\s*)<small>8AM - 5PM<\/small>/g, '<p data-i18n="placeholder-coming-soon">Information coming soon</p>'],
  [/<p>Mon-Fri<\/p>/g, '<p data-i18n="placeholder-coming-soon">Information coming soon</p>'],
  [/Monday - Friday<br \/>8:00 AM - 5:00 PM/g, 'Office hours: information coming soon'],
  [/Lunes-Biyernes: 8:00 AM - 5:00 PM/g, 'Oras ng opisina: malapit nang ilabas'],

  // Address and location (municipal hall pin, human-verified 2026-11-02; ZIP 6002).
  [/Solano Municipal Hall, Nueva Vizcaya 3708/g, 'Liloan Municipal Hall, Poblacion, Liloan, Cebu 6002'],
  [/Solano Pangmunisipyo Hall, Nueva Vizcaya 3708/g, 'Munisipyo ng Liloan, Poblacion, Liloan, Cebu 6002'],
  [/Municipal Hall<\/strong><br>Nueva Vizcaya 3708/g, 'Municipal Hall</strong><br>Poblacion, Liloan, Cebu 6002'],
  [/Solano, Nueva Vizcaya 3708/g, 'Poblacion, Liloan, Cebu 6002'],
  [/16\.5167°N, 121\.1833°E/g, '10.3996°N, 123.9996°E'],
  [/content="16\.5167, 121\.1833"/g, 'content="10.3996021, 123.999612"'],
  [/content="16\.5167;121\.1833"/g, 'content="10.3996021;123.999612"'],
  [
    /bbox=121\.1633%2C16\.5017%2C121\.2033%2C16\.5317&layer=mapnik&marker=16\.5167%2C121\.1833/g,
    'bbox=123.9796%2C10.3846%2C124.0196%2C10.4146&layer=mapnik&marker=10.3996%2C123.9996',
  ],

  // Office locations: Liloan publishes no floor/building per office, only "Poblacion, Liloan, Cebu".
  [/,?\s*(?:2nd|Ground)\s+Floor(?=\s*(?:,|<br|Solano|Poblacion))/g, ''],
  [/(?:Unang|Ikalawang)\s+Palapag,?\s*/g, ''],
  [/Municipal Hall,?\s*(?:<br \/>)?\s*Solano,\s+Nueva\s+Vizcaya/g, 'Municipal Hall, Poblacion, Liloan, Cebu'],
  [/Municipal Hall, Solano(?=<|\s*<|")/g, 'Municipal Hall, Poblacion, Liloan, Cebu'],

  // Fees: Solano's schedule of fees; none of Liloan's are in the verified sources. "₱0" (footer) is kept.
  [
    /₱[1-9][\d,]*(?:\.\d+)?\+?(?:\s*-\s*(?:₱)?[\d,]+(?:\.\d+)?)?(?:\/day|\s+cash per copy|\s+per (?:certified )?copy|\s+per quarter|\s+per ₱1,000 income)?/g,
    'ask the office',
  ],
];

function* walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

let changed = 0;
for (const file of [...walk(ROOT), join(ROOT, "assets/js/translations.js"), join(ROOT, "data/services.json")]) {
  const before = readFileSync(file, 'utf8');
  const after = RULES.reduce((s, [re, rep]) => s.replace(re, rep), before);
  if (after !== before) {
    writeFileSync(file, after);
    changed++;
  }
}
console.log(`updated ${changed} page(s)`);
