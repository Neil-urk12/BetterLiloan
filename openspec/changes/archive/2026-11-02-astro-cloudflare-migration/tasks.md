## 1. Remove template leftovers

- [x] 1.1 Delete `react-app/`, `build.sh`, `serve.py`, `babel.config.json`, `MIGRATION.md`, `docs/migration/`, `scripts/package-cpanel.sh`, `scripts/copy-dist.js`, and `dist/` (untracked output)
- [x] 1.2 Remove the `react-app` sync block from `scripts/bump-version.js`, and any `build.sh` call from `scripts/version.sh`
- [x] 1.3 Remove devDeps used only by `build.sh` (`@babel/*`, `core-js`, `clean-css-cli`, `html-minifier-terser`, `terser`); drop `.next/`, `react-app/out/`, `out/` from `.gitignore`

## 2. Astro skeleton + passthrough move

- [x] 2.1 Add `astro` and `wrangler` devDeps; create `astro.config.mjs` (static output, `outDir: 'dist'`, defaults otherwise)
- [x] 2.2 Spike: confirm `astro build` works with no files in `src/pages/`; if a page is required, add one at a path that doesn't collide (record the outcome in design.md Open Questions)
- [x] 2.3 In a dedicated commit with no content edits: `git mv` every root HTML page and page directory, `assets/`, `data/`, `sw.js`, `manifest.webmanifest`, `offline.html`, `403.html`, `404.html`, `500.html`, `robots.txt`, `sitemap.xml`, `version.json` into `public/`. Keep `admin/`, `tests/`, `docs/`, `scripts/`, `openspec/` at the root
- [x] 2.4 Update `scripts/bump-version.js` (VERSION_FILE, HTML dirs → `public/`) and `scripts/sync-facebook.js` default `newsPath` → `public/data/news.json`
- [x] 2.5 Fix `admin/news-editor.html` paths to `public/data/news.json` (or the dev-server URL) so the local curation tool still works
- [x] 2.6 Verify passthrough: `pnpm run build`, then diff `public/` against `dist/` (no differences expected)

## 3. Absolute data paths

- [x] 3.1 Replace `fetch('../data/…')` with `/data/…` in `officials.js`, `ordinances.js`, `resolutions.js`, `dpwh-projects.js`
- [x] 3.2 `search.js`: fetch `/data/services.json`; delete `getBasePath()` if nothing else uses it (grep first)

## 4. Cloudflare Workers config

- [x] 4.1 Create `wrangler.jsonc`: name, `compatibility_date`, `assets: { directory: "./dist", html_handling: "auto-trailing-slash", not_found_handling: "404-page" }`, no `main`
- [x] 4.2 Create `public/_headers`: `/*` security headers + verbatim CSP + HTML cache; `/assets/*`, `/data/*`, `/sw.js` blocks with `! Cache-Control` detach where they override
- [x] 4.3 Delete `.htaccess`
- [x] 4.4 Bump `CACHE_VERSION` in `public/sw.js`
- [x] 4.5 Verify with `pnpm run preview` + `curl -I`: `/`, `/services/health`, `/services/health.html` (redirect), `/government/`, `/does-not-exist` (404 body), `/assets/js/main.js`, `/data/news.json`, `/sw.js` all match the `static-hosting` spec, each with exactly one `Cache-Control`

## 5. Scripts, tests, CI

- [x] 5.1 `package.json` scripts: `dev` → `astro dev`, `build` → `astro build`, `preview` → `astro build && wrangler dev`; remove `serve`, `serve:dist`, `build:major/minor`, `package`, `package:only`
- [x] 5.2 `playwright.config.js` `webServer`: run `pnpm run preview` with the wrangler port; update `url`; run `pnpm test` for chromium and firefox
- [x] 5.3 `lighthouse.yml`: replace the `cd dist && python3 -m http.server` step with the preview server; keep `.lighthouserc.json` thresholds; check the URLs it audits
- [x] 5.4 `facebook-sync.yml`: `permissions: contents: write`; replace the FTPS/no-target/artifact steps with a commit-and-push of `public/data/news.json` on `changed == 'true'` (bot identity, message `chore(news): sync Facebook posts`); remove the `FTP_*` env

## 6. Docs

- [x] 6.1 Update `CLAUDE.md`, `README.md`, `CONTRIBUTING.md`, `docs/facebook-sync.md`, `.env.example` for the `public/` layout, new commands, and Cloudflare deploy; remove cPanel/React references
- [x] 6.2 Grep for `build.sh|react-app|serve.py|package-cpanel|cPanel|\.htaccess` outside `openspec/` and fix the remaining hits

## 7. Deploy and cutover (manual, Cloudflare dashboard)

- [ ] 7.1 Create a Worker connected to the GitHub repo via Workers Builds (build `pnpm install --frozen-lockfile && pnpm run build`, deploy `pnpm exec wrangler deploy`, branch `main`)
- [ ] 7.2 Smoke-test on `*.workers.dev`: rerun the 4.5 checks plus a manual click-through (language switch, search, officials, weather map, offline page)
- [ ] 7.3 Attach custom domain `betterliloan.org` (and decide on `www`); recheck headers on the live domain
- [ ] 7.4 Keep cPanel intact for two weeks as rollback; then retire it and delete FTP secrets from the repo
