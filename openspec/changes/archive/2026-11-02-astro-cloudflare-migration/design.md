## Context

- 53 standalone HTML pages at the repo root, vanilla JS in `assets/js/`, JSON in `data/` fetched at runtime with relative paths.
- Production is cPanel/Apache. `.htaccess` handles HTTPS, `.html` ⇄ clean URL redirects/rewrites, CSP + security headers, per-type cache rules, `ErrorDocument`s.
- `build.sh` rsyncs to `dist/`, overlays a Next.js export (`react-app/`, a template leftover the owner does not maintain) onto `services/health.html`, then minifies HTML/CSS and Babel+terser-transpiles JS.
- `facebook-sync.yml` FTPS-uploads `data/news.json` to cPanel every 20 min when it changes. It is dormant without a Page token.
- `betterliloan.org` is already a Cloudflare zone. There is a single maintainer.
- Follow-up changes: `astro-layouts` (convert pages to Astro layouts/components) and `i18n-routing` (build-time `/fil/`, `/ilo/`).

## Goals / Non-Goals

**Goals:**
- Same pages, same URLs, same headers, served from Cloudflare Workers Static Assets.
- `astro build` is the only build. A push to `main` deploys.
- Remove the React app and every cPanel/FTP/`build.sh` artifact.
- Leave the repo shaped so `astro-layouts` can move pages from `public/` to `src/pages/` one at a time.

**Non-Goals:**
- Converting any page to `.astro`, or deduplicating chrome.
- Content changes (Solano body text stays), i18n changes, design changes.
- Minification or asset hashing (deferred to `astro-layouts`).
- A Worker script. This is pure static assets with no `main` entry.

## Decisions

### D1. Passthrough via `public/`, not converting pages now
All legacy files move to `public/` with `git mv`. Astro copies `public/` verbatim to `dist/`, so output is byte-identical to the source.
- *Alternative*: convert all 53 pages to `.astro` in one go. Rejected: two migrations in one, and every page would need a diff review.
- *Alternative*: `publicDir: '.'`. Rejected: it would ship `node_modules`, `openspec/`, `scripts/` unless the excludes are perfect, which is the same fragility as `build.sh`'s exclude list.
- `src/pages/` stays empty except where Astro requires a placeholder (verify in task 2. If Astro needs one, add nothing that collides with a `public/` path).

### D2. Cloudflare Workers Static Assets over Pages
`wrangler.jsonc` with `assets.directory: "./dist"`, `html_handling: "auto-trailing-slash"`, `not_found_handling: "404-page"`, and no `main`. The custom domain is attached as a Worker custom domain on the existing zone. Deploys come from **Workers Builds** connected to the GitHub repo (build: `pnpm install --frozen-lockfile && pnpm run build`, deploy: `pnpm exec wrangler deploy`).
- *Alternative*: Cloudflare Pages. Rejected per the owner's choice: Cloudflare's new investment is in Workers, and the config lives in the repo.
- *Alternative*: deploy from a GitHub Action with an API token. Rejected for now: Workers Builds needs no secrets in GitHub, and it is triggered by pushes made with `GITHUB_TOKEN` (which would *not* trigger another Actions workflow). That matters for D5.

`auto-trailing-slash` serves `/services/health` from `services/health.html` and redirects `/services/health.html` → `/services/health`, matching current `.htaccess` behaviour. Directory-index pages (`/government/` → `government/index.html`) keep their trailing slash, as today.

### D3. `.htaccess` → `public/_headers`
| `.htaccess` | Replacement |
|---|---|
| HTTPS redirect, HSTS | Zone "Always Use HTTPS". HSTS kept as an explicit header in `_headers` |
| `.html` ⇄ clean URL | `html_handling: auto-trailing-slash` |
| Security headers + CSP | `/*` block in `_headers`, CSP copied verbatim |
| Cache-Control by extension | `_headers` path globs (`/assets/*`, `/data/*`). HTML gets the `/*` default |
| `sw.js` no-cache + `Service-Worker-Allowed` | `/sw.js` block |
| `_next/static` immutable | dropped (React removed) |
| `ErrorDocument 404` | `not_found_handling: 404-page` → `/404.html` |
| `ErrorDocument 400/401/403/500/502/503` | dropped. No origin can produce them; `403.html`/`500.html` stay as static files |
| MIME/charset, brotli/deflate, `Header unset Server` | platform defaults |

HTML cache: `_headers` cannot match by extension. `/*` sets `public, max-age=3600, must-revalidate` (the HTML policy), and more specific blocks for `/assets/*` (30 days) and `/data/*` (1 day) override it. Matching rules merge, so overridden `Cache-Control` must use the `! Cache-Control` detach syntax in specific blocks. Verify the merge behaviour in the spike task.

CSP stays identical, including Facebook/GA origins, even if they are now unused. Tightening is a separate change.

### D4. Absolute data paths
Replace `fetch('../data/X.json')` in `officials.js`, `ordinances.js`, `resolutions.js`, `dpwh-projects.js` and `search.js` `getBasePath()` + `${basePath}data/services.json` with `/data/X.json`. Pages keep their relative `../assets/...` tags. They resolve correctly under `auto-trailing-slash` because file pages are served without a trailing slash, the same as on Apache today. Absolute paths remove the URL-depth coupling ahead of `astro-layouts`.

### D5. News sync = commit on change
`facebook-sync.yml` gets `permissions: contents: write`. On `changed == 'true'` it commits `data/news.json` (now `public/data/news.json`) as `github-actions[bot]` with a fixed message (`chore(news): sync Facebook posts`). No `[skip ci]` marker: Cloudflare's git integrations honour it and would skip the deploy and pushes to `main`. The FTP and artifact-fallback steps are removed. `scripts/sync-facebook.js` output path is updated.
- *Alternative*: KV/R2 + Worker. Rejected: adds a runtime component for a dormant feature.
- Build budget: commits only happen on change, so at most a few deploys/day while active. That is well within Workers Builds free limits.

### D6. Local dev = `wrangler dev` against `dist/`
`astro dev` serves `public/` files but does not reproduce `auto-trailing-slash` or `_headers`. Scripts:
- `dev`: `astro dev` (fast edits, extensionless URLs may not resolve)
- `build`: `astro build` (no version bump. Bumping is explicit via `version:*`)
- `preview`: `astro build && wrangler dev` (prod-equivalent: clean URLs, headers, 404)

Playwright `webServer` and Lighthouse CI use `preview` (Lighthouse `staticDistDir` is replaced by a `wrangler dev` server, so headers are exercised).

### D7. Versioning
`version.json` stays the single source (moves to `public/version.json`, which `version.js` fetches at runtime). `bump-version.js`: update the HTML dir list to `public/`, drop the `react-app` sync. Default `pnpm run build` no longer bumps. `scripts/version.sh` is updated if it calls `build.sh`.

### D8. Dropped transpilation
Babel + core-js targeted older browsers. Without it, `assets/js` ships as authored (ES2017+ features like `async`/template literals are already in source). Accepted: Workers' audience is evergreen mobile browsers. Revisit if analytics show otherwise.

## Risks / Trade-offs

- [Unminified `translations.js` (~20k lines) increases transfer] → brotli at the edge recovers most of it. Lighthouse perf is `warn`-level only. Minify properly in `astro-layouts`.
- [`_headers` merge semantics differ from Apache `FilesMatch`] → spike task verifies effective headers on `/`, `/services/health`, `/assets/js/main.js`, `/data/news.json`, `/sw.js` with `curl -I` against `wrangler dev`.
- [`_headers` limits: 100 rules, 2000 chars/line] → the CSP is ~1.3k chars. There are about 6 rules.
- [Old browsers break without Babel] → accepted (D8).
- [Search engines / bookmarks hitting `.html` URLs] → `auto-trailing-slash` 307/308-redirects to the clean URL, as Apache did with 301. Status code difference is acceptable.
- [Repo-wide `git mv` makes blame noisy] → do the move in its own commit with no content edits, so `git log --follow` works.
- [Lost cPanel-only behaviours (e.g. `ErrorDocument 500`)] → none reachable on a static host.
- [Service worker caches old `bettersolano-*` caches on returning visitors] → bump `CACHE_VERSION` once at cutover so stale caches are cleared on activate.

## Migration Plan

1. Land the change on `main` with Workers Builds connected but **no custom domain**. Verify on the `*.workers.dev` URL.
2. Attach the `betterliloan.org` custom domain to the Worker. Cloudflare swaps the DNS record on the zone.
3. Rollback: detach the custom domain and restore the previous DNS record pointing to cPanel. Keep cPanel untouched for two weeks after cutover.

## Open Questions

- ~~Does `astro build` succeed with an empty `src/pages/`, or does it need a placeholder?~~ Resolved (astro 7.4): it succeeds with no `src/pages/` at all, logs `[WARN] Missing pages directory`, builds 0 pages and copies `public/` to `dist/`. No placeholder added.
- Is `www.betterliloan.org` in use? If so, add a redirect rule at the zone level.
