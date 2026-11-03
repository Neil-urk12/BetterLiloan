## 1. Guard first

- [x] 1.1 Write `tests/no-solano.test.mjs` (node:test) scanning `public/` text files for the D10 term list and `ilo` in `data-lang` / `hreflang` / `supportedLangs`, reporting file:line; add `"test:content": "node --test tests/no-solano.test.mjs"` to `package.json`
- [x] 1.2 Run it and save the baseline hit count (2,592 hits at start); use it to track progress through the remaining groups

## 2. Dead code and data

- [x] 2.1 Confirm no consumer, then delete `public/data/officials.json`, `public/assets/js/officials.js` and its `<script>` tag in `government/officials.html`
- [x] 2.2 Confirm no consumer, then delete `competitive-index.json`, `fiscal_transparency.json`, `demographics.json`, plus the unused `assets/js/statistics.js`
- [x] 2.3 Remove any deleted file from the `sw.js` precache list

## 3. Facts: officials

- [x] 3.1 Replace mayor and vice mayor (name, photo alt, email → general email or placeholder) in `index.html`, `government/index.html`, `government/officials.html`, incl. `<head>` meta descriptions/keywords; rename their translation keys to role-based keys in `en`/`fil`
- [x] 3.2 Replace the SB list in `government/index.html` and `government/officials.html` with the 8 elected councilors and 2 ex-officio members (Sanchez – LNMB, Comendador – PPSK) with a "pending 2026 BSKE results" note
- [x] 3.3 Replace the departments section with the placeholder (no department heads are verified)

## 4. Facts: hotlines and contacts

- [x] 4.1 Script: replace the hotline bar on every page with Police 0998-598-6385, Fire 0905-350-3109, MDRRMO 0956-271-1967, MSWDO 0932-293-2853, LGU 032-425-1388 (matching `tel:` links, `data-i18n` label keys); drop DILG and R2TMC
- [x] 4.2 Update full hotline listings (contact, public-safety, offline pages and their translation keys) with both Police and both MDRRMO numbers, Traffic 032-349-7573, Garbage/Drainage 0933-475-7911 / 0997-371-3316; rename value-derived keys (e.g. `contact-pnp-solano-0927-400-8033` → `contact-pnp-hotline`)
- [x] 4.3 Contact page: address "Poblacion, Liloan, Cebu 6002", trunk lines, general email, official website https://liloan.gov.ph and Facebook https://www.facebook.com/municipalityliloancebu; office hours → placeholder
- [x] 4.4 Script: replace all `@solano.gov.ph` and `lgusolanonv@gmail.com` addresses per D7 (general email or placeholder); add office locals/direct lines where verified
- [x] 4.5 Script: replace the 271 `solano.gov.ph` links with https://liloan.gov.ph (or remove where the target page has no Liloan equivalent)

## 5. Facts: places and data

- [x] 5.1 Replace the 22 Solano barangays in `government/index.html` with Liloan's 14 (names, 2020 population credited to PSA via PhilAtlas), captain shown as "To be updated after BSKE 2026"; update related translation keys
- [x] 5.2 Update the municipal profile and statistics pages: 1st class, 45.92 km², ZIP 6002, Cebu 5th district, Cebuano, 2020 population 153,197, 2024 population 158,387 (citypopulation.de)
- [x] 5.3 Rewrite the history page from liloan.gov.ph facts in `docs/liloan-research-2/profile-demographics.md` (founding "1840s", separation from Mandaue, name from "lilo", lighthouse 1857 / landmark 2004)
- [x] 5.4 Replace the CMCI series in `statistics-new.js` with Liloan 2016–2024 from `cmci-fiscal.md`, 2018 = `null`; add the DTI source line; check the chart shows a gap for 2018 and 2024 overall = rank 24, 37.0244
- [x] 5.5 `weather-map.js`: coordinates 10.3996021, 123.999612; rename `SOLANO_CENTER`; recompute the OSM embed bbox and marker

## 6. Placeholders

- [x] 6.1 Add the `placeholder-coming-soon` key (en, fil) and a placeholder snippet with the liloan.gov.ph link
- [x] 6.2 Empty `ordinances.json`, `resolutions.json`, `dpwh-projects.json`, `news.json`; verify each renderer shows the placeholder on an empty list, fixing the empty state only where needed
- [x] 6.3 Fiscal transparency section → placeholder
- [x] 6.4 `services.json` and `service-details/*.html`: keep national-standard procedures; replace Solano fees, office locations, staff names and Filipizen `nuevavizcaya_solano` URLs with office contact or placeholder; drop the Filipizen claim from meta descriptions
- [x] 6.5 Remove `quiz.bettersolano.org` links and the BetterSolano LinkedIn link from all pages and translation values

## 7. Generic name swap

- [x] 7.1 Script: replace remaining generic references (Solano → Liloan, Nueva Vizcaya → Cebu, Region 2 / Cagayan Valley → Region VII / Central Visayas, Ilocano → Cebuano as the local language) in HTML, `translations.js` values, JS, CSS, `favicon.svg`; rename remaining keys containing `solano` in all dictionaries and `data-i18n*` attributes together
- [x] 7.2 Review the swap diff for any line that now pairs a Liloan label with a Solano fact

## 8. Languages

- [x] 8.1 Delete the `ilo` dictionary; set `supportedLangs` to `['en','fil','ceb']`; map `ceb*` in `detectBrowserLanguage`
- [x] 8.2 Add the `ceb` dictionary for nav, header/footer chrome, hotline labels, switcher and placeholder keys
- [x] 8.3 Script: change the ILO switcher button to CEB (`data-lang="ceb"`, `aria-label="Switch to Cebuano"`) on all pages and swap `hreflang="ilo"` for `hreflang="ceb"`
- [ ] 8.4 User (native Cebuano speaker) reviews every `ceb` string; apply corrections

## 9. Verify and ship

- [x] 9.1 `pnpm run test:content` passes with zero hits
- [x] 9.2 `pnpm test` (volunteer popup) passes (98/98 on mobile-chrome; other browser projects not installed locally)
- [x] 9.3 Bump `sw.js` `CACHE_VERSION`; run `pnpm run version:minor`
- [x] 9.4 `pnpm run preview`: walk every page in en, fil and ceb; confirm no Solano facts, no blank elements, working links, hotline `tel:` links dial the shown numbers (scripted: 51 pages × 3 languages, no page errors, blank i18n elements or tel mismatches; visual review still open)
- [ ] 9.5 User spot-checks hotlines against the LGU poster and officials against the 14th SB page
- [x] 9.6 Update `CLAUDE.md` (Liloan content is no longer Solano's; languages en/fil/ceb; `test:content`) and `.env.example` if values changed
