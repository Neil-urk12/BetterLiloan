## Why

The site is branded BetterLiloan, but almost all of its content still describes Solano, Nueva Vizcaya: officials, hotlines, offices, barangays, history, data and the Ilocano language option. A Liloan resident who dials a "Liloan" hotline today reaches a Solano number. Verified Liloan data now exists (`docs/liloan-data-research.md`, human-verified 2026-11-02, and `docs/liloan-research-2/verification.md`), so the Solano content can be replaced without guessing.

## What Changes

- Replace generic place references (Solano → Liloan, Nueva Vizcaya → Cebu, Region 2 → Region VII) across HTML, `translations.js`, JS and `public/data/*.json`, without relabelling Solano-specific facts (phone numbers, emails, names) as Liloan's.
- Apply the verified Liloan facts: mayor, vice mayor, 8 councilors, 2 ex-officio seats (marked pending the 2026 BSKE results), the hotline bar on every page, trunk lines and office locals, the general email, the address, ZIP 6002, coordinates, the municipal profile, history ("1840s"), 14 barangays with PSGC codes and 2020 populations, and DTI CMCI 2016–2024 (2018 shown as no data).
- Replace content with no verified Liloan source with a standard placeholder ("Information coming soon" + link to liloan.gov.ph): department heads, barangay captains, fiscal transparency, DPWH projects, ordinances, resolutions, news, per-office emails, office hours, Solano-specific service fees, and Solano Filipizen links.
- Remove links to Solano-only properties: `solano.gov.ph`, `quiz.bettersolano.org`, the BetterSolano LinkedIn.
- **BREAKING** (for visitors with `selectedLang=ilo` saved): remove the Ilocano (`ilo`) language and add Cebuano (`ceb`) with a small reviewed dictionary (navigation, header/footer chrome, hotline labels). Other keys fall back to English. Language switcher buttons and `hreflang` tags change on every page.
- Rename translation keys whose names contain Solano values (e.g. `contact-pnp-solano-0927-400-8033`) to role-based keys (e.g. `contact-pnp-hotline`).
- Delete the unused `public/data/officials.json` (no page renders it).
- Add an automated check that fails if Solano references or the `ilo` language code remain under `public/`.
- Bump the service worker `CACHE_VERSION` so returning visitors don't get cached Solano pages.

## Capabilities

### New Capabilities

- `local-content`: the site's municipal content describes Liloan, Cebu, comes only from verified sources, uses a standard placeholder where no verified source exists, and contains no Solano references (enforced by a test).
- `site-languages`: the set of offered languages (en, fil, ceb), the English fallback for untranslated keys, and how the switcher and `hreflang` present them.

### Modified Capabilities

(none: `build-pipeline`, `static-hosting` and `news-sync-deploy` requirements don't change)

## Impact

- **HTML:** all 52 pages under `public/` (hotline bar, `<head>` meta, language switcher, `hreflang`, body content), especially `index.html`, `government/`, `contact/`, `services/`, `service-details/`, `statistics/`, `history/`.
- **JS:** `assets/js/translations.js` (en/fil values and keys, `ilo` removed, `ceb` added, `supportedLangs`, browser-language mapping), `weather-map.js` (coordinates), `statistics-new.js` (hardcoded CMCI series), `info-bar.js`, `news.js`, `search.js`, `fb-feed.js`, `version.js`, `sw.js`.
- **Data:** `public/data/*.json`; `officials.json` deleted.
- **Other:** `public/assets/css/style.css` and `assets/images/logo/favicon.svg` (Solano strings). Note that `statistics-new.js` holds Solano CMCI numbers without the word "Solano", so a text search alone won't find all Solano data.
- **Tests:** new Playwright or Node check for leftover Solano references; existing volunteer-popup tests must still pass.
- **People:** the user (a native Cebuano speaker) reviews the `ceb` strings before release.
- No new dependencies or third-party origins; CSP unchanged.
