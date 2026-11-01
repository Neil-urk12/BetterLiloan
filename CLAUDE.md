# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static civic-tech portal for an LGU (Local Government Unit, a Philippine municipal government), deployed to cPanel/Apache. It is a fork of upstream **BetterSolano** (LGU Solano, Nueva Vizcaya), mid-transition to **BetterLiloan** (Liloan, Cebu; `betterliloan.org`). Done so far (`scripts/rebrand-liloan.py`): project name/domain, logo filenames, `<head>` meta, footer chrome, removal of the Solano GA tag and Facebook links. Page body content and `data/*.json` (officials, offices, hotlines, addresses, history, `solano.gov.ph` links, `quiz.bettersolano.org`) are still Solano's and must not be assumed correct for Liloan. `.env.example` lists the values that are hardcoded into the HTML.

## Commands

```bash
npm install
npm run dev                  # python3 http.server :8000 (no clean URLs)
python3 serve.py --port 8000 --directory .   # dev server that mimics .htaccess clean-URL rewrites
npm run build                # bash build.sh → dist/ (BUMPS PATCH VERSION; use `npm run build -- --no-bump` to avoid)
bash build.sh --no-bump --no-react   # fast build without Next.js
npm run serve:dist           # preview dist/ on :8080
npm run format / format:check        # Prettier
npm run package              # cPanel release archive (scripts/package-cpanel.sh)

# Playwright (starts its own server on :8321; chrome/edge projects need the real browsers installed)
npm test
npm run test:chrome
npx playwright test tests/volunteer-modal.behavior.spec.js --project=chrome
npx playwright test -g "appears on a first visit" --project=firefox
```

There is no linter or typecheck script.

## Architecture

**The static HTML at the repo root is the source of truth.** Every page (`index.html`, `services/*.html`, `service-details/*.html`, `government/`, `legislative/`, `budget/`, etc.) is a standalone, hand-written HTML file. There is no templating, so the header, nav, footer, hotline bar, `<head>` meta, and script tags are duplicated in every page. A change to shared chrome has to be applied across all ~52 HTML files. Earlier changes were bulk-applied with one-off scripts in `scripts/*.py`.

- **Pages + JS**: vanilla JS in `assets/js/`, loaded per page with `defer` and relative paths (`../assets/js/...`). Feature scripts fetch JSON from `data/` with relative paths (e.g. `fetch('../data/officials.json')`), so the page's directory depth matters.
- **i18n**: `assets/js/translations.js` (~20k lines) holds one object with `en`, `fil`, `ilo` dictionaries plus the engine. Elements use `data-i18n="<key>"`. Keys are usually page-prefixed (e.g. `health-skip-to-main-content`). Missing keys fall back to English. Selected language is stored in `localStorage.selectedLang`. Keep the three languages at key parity, and add every new key to all three.
- **Clean URLs**: internal links omit `.html`. `.htaccess` rewrites them in production (and also sets the CSP, so any new third-party origin must be added there). `serve.py` reproduces the rewrites locally.
- **PWA**: root `sw.js` (bump `CACHE_VERSION` when changing precached assets), `manifest.webmanifest`, `offline.html`.
- **Versioning**: `version.json` is the single source. `scripts/bump-version.js` propagates it to `package.json`, every HTML file, and `react-app/public/version.json`. The footer reads it at runtime through `assets/js/version.js`. The README mentions a pre-commit hook that auto-bumps and formats, but no hook is installed in this checkout.
- **Build (`build.sh`)**: rsyncs the root into `dist/` (dev files excluded via a long `--exclude` list, so add new dev-only files there), runs the Next.js static export, merges **only** `react-app/out/_next` and `services/health.html` into dist, then minifies HTML/CSS and Babel+terser-transpiles `assets/js`. Minification errors are swallowed (`|| true`).

**React app (`react-app/`): out of scope for now.** Work on the static site only, and don't edit or sync files under `react-app/` unless asked. One thing to know: a default `build.sh` run still builds it and overwrites `dist/services/health.html` with the React version. Use `bash build.sh --no-bump --no-react` to get the pure static build.

**Data**: `data/*.json` drives officials, ordinances, resolutions, services search, news, DPWH projects, and statistics. `data/news.json` is also written by `scripts/sync-facebook.js` through the `facebook-sync.yml` workflow (cron every 20 min, dormant without a Page token, see `docs/facebook-sync.md`). `admin/news-editor.html` is a local curation tool and is excluded from dist.

**CI**: `lighthouse.yml` runs the build and `lhci` (`.lighthouserc.json`). Playwright tests currently cover only the volunteer popup (`assets/js/volunteer-popup.js`).
