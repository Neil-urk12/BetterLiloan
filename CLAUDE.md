# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static civic-tech portal for an LGU (Local Government Unit, a Philippine municipal government), built with Astro and deployed to Cloudflare Workers Static Assets. It is a fork of upstream **BetterSolano** (LGU Solano, Nueva Vizcaya), mid-transition to **BetterLiloan** (Liloan, Cebu; `betterliloan.org`). Done so far (`scripts/rebrand-liloan.py`): project name/domain, logo filenames, `<head>` meta, footer chrome, removal of the Solano GA tag and Facebook links. Page body content and `public/data/*.json` (officials, offices, hotlines, addresses, history, `solano.gov.ph` links, `quiz.bettersolano.org`) are still Solano's and must not be assumed correct for Liloan. `.env.example` lists the values that are hardcoded into the HTML.

## Commands

```bash
pnpm install                  # Node 22 (.node-version)
pnpm run dev                  # astro dev :4321 (serves public/; extensionless URLs and _headers NOT applied)
pnpm run build                # astro build → dist/ (copies public/ verbatim; does not bump the version)
pnpm run preview              # astro build && wrangler dev :8787 (production-equivalent: clean URLs, _headers, 404)
pnpm run version:patch|minor|major    # bump public/version.json, package.json, HTML footer stamps
pnpm run format / format:check        # Prettier

# Playwright (runs `pnpm preview --port 8321`; chrome/edge projects need the real browsers installed)
pnpm test
pnpm run test:chrome
pnpm exec playwright test tests/volunteer-modal.behavior.spec.js --project=firefox
pnpm exec playwright test -g "appears on a first visit" --project=mobile-chrome
```

There is no linter or typecheck script.

Package manager is pnpm (version pinned in `package.json` `packageManager`; `corepack enable`). Dependency `overrides` and the build-script allowlist (`allowBuilds`) live in `pnpm-workspace.yaml`: pnpm ignores an `overrides` block in `package.json`.

## Architecture

**The static HTML in `public/` is the source of truth.** Astro copies `public/` to `dist/` unchanged; `src/pages/` does not exist yet (the planned `astro-layouts` change moves pages there). Every page (`public/index.html`, `public/services/*.html`, `public/service-details/*.html`, `public/government/`, etc.) is a standalone, hand-written HTML file. There is no templating, so the header, nav, footer, hotline bar, `<head>` meta, and script tags are duplicated in every page. A change to shared chrome has to be applied across all ~52 HTML files. Earlier changes were bulk-applied with one-off scripts in `scripts/*.py` (written for the pre-`public/` layout).

- **Pages + JS**: vanilla JS in `public/assets/js/`, loaded per page with `defer` and relative paths (`../assets/js/...`). Feature scripts fetch JSON with root-absolute paths (`fetch('/data/officials.json')`). No minification or transpilation: files ship as authored.
- **i18n**: `public/assets/js/translations.js` (~20k lines) holds one object with `en`, `fil`, `ilo` dictionaries plus the engine. Elements use `data-i18n="<key>"`. Keys are usually page-prefixed (e.g. `health-skip-to-main-content`). Missing keys fall back to English. Selected language is stored in `localStorage.selectedLang`. Keep the three languages at key parity, and add every new key to all three.
- **Hosting**: `wrangler.jsonc` (assets only, no `main`). `html_handling: auto-trailing-slash` serves `/services/health` from `services/health.html` and redirects `.html` URLs; `not_found_handling: 404-page` serves `404.html`. `public/_headers` holds the security headers, CSP and cache rules, so any new third-party origin must be added to the CSP there. More specific `_headers` blocks use `! Cache-Control` to drop the `/*` default.
- **PWA**: `public/sw.js` (bump `CACHE_VERSION` when changing precached assets), `manifest.webmanifest`, `offline.html`.
- **Versioning**: `public/version.json` is the single source. `scripts/bump-version.js` propagates it to `package.json` and every HTML file under `public/`. The footer reads it at runtime through `assets/js/version.js`.
- **Deploy**: Cloudflare Workers Builds builds and deploys every push to `main` (`pnpm install --frozen-lockfile && pnpm run build`, `pnpm exec wrangler deploy`).

**Data**: `public/data/*.json` drives officials, ordinances, resolutions, services search, news, DPWH projects, and statistics. `public/data/news.json` is also written by `scripts/sync-facebook.js` through the `facebook-sync.yml` workflow (cron every 20 min, dormant without a Page token, see `docs/facebook-sync.md`), which commits it to `main` to trigger a deploy. `admin/news-editor.html` is a local curation tool outside `public/` (never deployed); serve the repo root to use it.

**CI**: `lighthouse.yml` builds, starts `wrangler dev` and runs `lhci` (`.lighthouserc.json`). Playwright tests currently cover only the volunteer popup (`public/assets/js/volunteer-popup.js`).
