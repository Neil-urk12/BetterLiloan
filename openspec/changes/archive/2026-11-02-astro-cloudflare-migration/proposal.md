## Why

The site is 53 hand-duplicated HTML pages built by a bespoke `build.sh` (rsync + minify + Babel + a Next.js overlay) and deployed to cPanel over FTP, with routing and security living in Apache `.htaccess`. `betterliloan.org` is already on Cloudflare, and moving to Astro is the prerequisite for collapsing the duplicated header/nav/footer into layouts. This change does the platform move only, with zero visible change to pages, so the later layout and i18n work lands on a stable base.

## What Changes

- Add an Astro project at the repo root. All legacy pages, `assets/`, `data/`, `sw.js`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml` and error pages move into `public/` unchanged and are emitted as-is by `astro build`.
- Deploy to **Cloudflare Workers Static Assets** (`wrangler.jsonc`, Workers Builds git integration on `main`), custom domain `betterliloan.org`.
- Port `.htaccess` security headers, CSP and cache rules to `public/_headers`. Clean URLs, HTTPS and the 404 page are handled by the platform.
- Rewrite runtime data fetches (`../data/...`, `search.js` `getBasePath()`) to absolute `/data/...`.
- `facebook-sync.yml`: replace the FTPS deploy with committing `data/news.json` on change, which triggers a redeploy.
- Point Lighthouse CI and Playwright at `astro build` + `wrangler dev`.
- `bump-version.js` stops syncing to `react-app/` and stamps HTML under `public/`.
- **BREAKING (dev workflow)**: remove `react-app/` (template leftover), `build.sh`, `serve.py`, `.htaccess`, `babel.config.json`, `MIGRATION.md`, `scripts/package-cpanel.sh`, `scripts/copy-dist.js`, and the cPanel/FTP deploy path. `services/health.html` is the static version only.
- Not changed: page markup and body content (still Solano's), runtime i18n (`translations.js`, `data-i18n`, `localStorage.selectedLang`), `sw.js` precache logic.

## Capabilities

### New Capabilities
- `static-hosting`: how the site is served in production: URL handling, 404, security headers/CSP, cache policy, service worker headers.
- `build-pipeline`: how the site is built, previewed, tested and deployed (Astro build, local preview, CI, versioning).
- `news-sync-deploy`: how Facebook-synced `news.json` reaches production.

### Modified Capabilities
<!-- none: openspec/specs/ is empty -->

## Impact

- **Files moved**: every root HTML page and static dir → `public/` (git renames). Docs and CLAUDE.md paths change.
- **Files removed**: `react-app/`, `build.sh`, `serve.py`, `.htaccess`, `babel.config.json`, `MIGRATION.md`, `docs/migration/`, cPanel scripts.
- **Dependencies**: add `astro`, `wrangler` (dev). Remove the Babel/terser/minifier devDeps used only by `build.sh`.
- **JS**: `assets/js/search.js`, `officials`/`ordinances`/`resolutions`/`dpwh-projects` fetchers (absolute paths).
- **CI**: `lighthouse.yml`, `facebook-sync.yml` (needs `contents: write`), `playwright.config.js`.
- **External**: Cloudflare Worker project + Workers Builds connection + custom domain route; the cPanel host is retired once DNS cuts over.
- **Perf**: `build.sh` minification goes away (Cloudflare Auto Minify is deprecated). Brotli is still applied at the edge. Accepted for this change; revisit in `astro-layouts`, when assets move into the Vite pipeline.
