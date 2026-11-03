## Context

The site is a fork of BetterSolano. After `scripts/rebrand-liloan.py`, the brand chrome says Liloan but the content is Solano's. Solano data lives in four layers:

| Layer | Where | Notes |
|---|---|---|
| Translation dictionaries | `assets/js/translations.js` (`en`, `fil`, `ilo`; ~830 "Solano" values) | `TranslationEngine.init()` applies the dictionary on every load, including English, so these values are what visitors see. Keys are often made from the value (`contact-pnp-solano-0927-400-8033`). |
| HTML | 52 pages under `public/` | Fallback text for crawlers and no-JS; `<head>` meta; hotline bar (plain text, no `data-i18n`, copied on every page); 271 `solano.gov.ph` links; language switcher. |
| JS with inline data | `statistics-new.js` (CMCI series, no "Solano" string), `weather-map.js` (coordinates, OSM bbox), `fb-feed.js`, `info-bar.js`, `news.js`, `search.js`, `version.js` | |
| JSON | `public/data/*.json` | Fetched: `dpwh-projects`, `news`, `ordinances`, `resolutions`, `services`. **Not fetched by anything**: `officials`, `competitive-index`, `fiscal_transparency`, `demographics`. |

`officials.js` renders into `#officials-container`, which no page has, so it and `officials.json` are dead. Officials are hardcoded in `index.html`, `government/index.html` and `government/officials.html`.

Verified inputs: `docs/liloan-data-research.md` (human-verified 2026-11-02) and the "Safe to publish" list in `docs/liloan-research-2/verification.md`. The user is a native Cebuano speaker and reviews the `ceb` strings.

## Goals / Non-Goals

**Goals:**
- No Solano fact or reference remains under `public/`, enforced by a check.
- Every Liloan fact traces to a verified source; everything else shows the standard placeholder.
- Languages become en / fil / ceb, with a small reviewed `ceb` dictionary.

**Non-Goals:**
- Full Cebuano translation (English fallback covers the rest).
- Templating or moving pages into `src/pages/` (the separate `astro-layouts` change).
- Publishing barangay captains, department heads, fiscal, DPWH, ordinance or resolution data (needs a later human-verified research pass).
- Fixing the existing `hreflang` `?lang=` URLs, which the engine doesn't read (pre-existing; unchanged except swapping `ilo` for `ceb`).

## Decisions

### D1. Facts first, then the name swap
Replace or remove every fact-bearing string (phones, emails, names, officials, barangays, data) **before** running the generic `Solano → Liloan` / `Nueva Vizcaya → Cebu` replacement. If the name swap ran first, `PNP Solano 0927 400 8033` would become `PNP Liloan 0927 400 8033`, a Solano number under a Liloan label, and the leftover-reference check could no longer find it.
*Alternative:* one combined pass with skip rules for phones and emails. Rejected: skip rules miss personal names and figures.

### D2. Rename keys that contain "solano"
Every translation key containing `solano` is renamed (in all dictionaries and every `data-i18n*` attribute) in the same script that changes its value. Where the value changes to a different fact, the new key names the role, not the value (`contact-pnp-solano-0927-400-8033` → `contact-pnp-hotline`), so the next data update is only a value edit. Other keys keep their names.
*Alternative:* keep the old keys. Rejected: they contain "solano" and fail the check, and they mislead the next editor.

### D3. One-off scripts, the house pattern
Bulk edits go in one-off scripts under `scripts/` (like `rebrand-liloan.py`), run from a file, each idempotent and checked by `git diff` review. Small single-file edits are made by hand.

### D4. Standard placeholder
One translation key `placeholder-coming-soon` ("Information coming soon"), plus a link to https://liloan.gov.ph, using existing CSS classes. The data-driven views (`ordinances.js`, `resolutions.js`, `dpwh-projects.js`, `news.js`) get empty arrays in their JSON and render the placeholder when the list is empty. Check each renderer's empty-state path; change it only if it shows nothing or an error. Static sections (department heads, fiscal) get the placeholder in HTML.

### D5. Delete dead data and code
Delete `officials.json` and `officials.js` (and its `<script>` tag), and the unfetched `competitive-index.json`, `fiscal_transparency.json` and `demographics.json`, unless the implementer finds a consumer. Liloan values go where the page actually reads them (HTML, `statistics-new.js`).

### D6. CMCI lives in `statistics-new.js`
Replace the inline Solano series with Liloan's 2016–2024 DTI CMCI values from `docs/liloan-research-2/cmci-fiscal.md`, with 2018 as `null`. The series already uses `null` for 2016 gaps, so the chart already renders `null` as a gap. Add a "Source: DTI CMCI, retrieved 2026-11-01" line.

### D7. Office contacts
Offices get the verified trunk line plus their local (Mayor 102, Agriculture 113, Assessor 114, Business/BPLO 112, Civil Registrar 115, MENRO 106), the direct lines (Mayor 032-564-3131, Engineering/OBO 032-503-3930, MSWDO 0932-293-2853), and the general email `liveloveliloan@liloan.gov.ph`. Offices with nothing verified get the placeholder. Treasurer's local "11" is printed as published.

### D8. Services and Filipizen
Keep descriptions of nationally standard procedures (PSA birth certificate, RPT basics). Replace LGU-specific facts (fees, office locations, staff names, Solano Filipizen partner URLs `filipizen.com/partners/nuevavizcaya_solano/...`) with the placeholder or the office contact. Remove the "online transactions via Filipizen" claim from meta descriptions unless Liloan's Filipizen use is verified.

### D9. Languages
Delete the `ilo` dictionary, add a `ceb` dictionary limited to navigation, header/footer chrome, hotline labels (the hotline bar gains `data-i18n` keys), the switcher and the placeholder. Set `supportedLangs` to `['en','fil','ceb']` and map `ceb*` in `detectBrowserLanguage`. A saved `ilo` already fails the `supportedLangs.includes` check in `init()`, so returning Ilocano visitors fall back without new code. The ILO switcher button becomes CEB (`aria-label="Switch to Cebuano"`) on all pages.

### D10. Leftover-reference check
`tests/no-solano.test.mjs`, run with `node --test` via a new `pnpm run test:content` script. It scans `public/` (text files) for `solano`, `nueva vizcaya`, `nuevavizcaya`, `bettersolano`, distinctive Solano place names (`bayombong`, `bambang`, `magat`, `aggub`, `bagahabag`, `bascaran`, `curifang`, `lactawan`, `uddiawan`, `wacal`, `tucal`, `r2tmc`, `cagayan valley`) and the language code `ilo` in `data-lang`, `hreflang` and `supportedLangs`. It prints file:line for each hit. It is not a build gate, so a Facebook news sync that happens to mention Solano can't block deploys.
*Alternative:* Playwright spec. Rejected: it would start the preview server and run 5 browser projects for a file scan.

### D11. Location and cache
`weather-map.js` uses 10.3996021, 123.999612, and the OSM embed bbox/marker is recomputed around it. `sw.js` `CACHE_VERSION` is bumped and any deleted file is removed from its precache list. Run `pnpm run version:minor`.

## Risks / Trade-offs

- [Solano facts without the word "Solano" (numbers in `statistics-new.js`, history prose, landmarks, service fees)] → D10 lists distinctive Solano terms, and the tasks include a page-by-page walkthrough of all 52 pages in the preview.
- [The generic swap hits a legitimate non-place use of "Solano"] → the swap runs after D1 and its diff is reviewed; none expected.
- [The `fil` dictionary holds Filipino sentences that mention Solano facts] → the same key-by-key replacement applies to `fil`; a Filipino sentence whose fact becomes a placeholder takes the placeholder key.
- [Ex-officio seats and barangay captains change after BSKE 2026] → labelled pending; a follow-up change applies certified results.
- [Large diff, hard to review] → split into commits by layer (facts, placeholders, name swap, languages, check); the check plus the walkthrough are the gate.
- [Cebuano strings are wrong or stiff] → native-speaker review by the user before merge.

## Migration Plan

1. Implement on a branch, committing by layer.
2. `pnpm run test:content` passes; `pnpm test` (volunteer popup) still passes; `pnpm run preview` walkthrough of every page in en, fil and ceb.
3. User reviews the `ceb` strings and spot-checks the hotlines against the poster.
4. Merge to `main`; Cloudflare Workers Builds deploys. The new `CACHE_VERSION` evicts old pages from returning visitors.
5. Rollback: `git revert` the merge; the next deploy restores the previous site.

## Open Questions

- Does LGU Liloan use Filipizen (or any online payment portal)? If yes, it needs a verified URL to replace the Solano links.
- Should `test:content` also run in CI (e.g. a step in `lighthouse.yml`)?
- The Facebook sync (`docs/facebook-sync.md`) needs the Liloan page token to show real news; until then the news view shows the placeholder.
