# build-pipeline Specification

## Purpose
How the site is built, previewed, tested and deployed: Astro build of `public/`, `wrangler dev` preview, CI quality gates, Workers Builds deploys, and versioning.
## Requirements
### Requirement: Single build command
`pnpm run build` SHALL run `astro build` and produce the complete deployable site in `dist/`. It SHALL NOT modify the version or any tracked file.

#### Scenario: Clean build
- **WHEN** `pnpm install --frozen-lockfile && pnpm run build` runs on a fresh checkout
- **THEN** it exits 0, `dist/index.html` exists, and `git status` shows no changes to tracked files

### Requirement: Production-equivalent local preview
`pnpm run preview` SHALL build and serve `dist/` with the same asset handling and `_headers` as production (via `wrangler dev`).

#### Scenario: Preview applies headers and clean URLs
- **WHEN** `pnpm run preview` is running and `/services/health` is requested
- **THEN** it responds 200 with the `Content-Security-Policy` header present

### Requirement: Continuous deployment
Every push to `main` SHALL build and deploy the site to the Cloudflare Worker serving `betterliloan.org`, including pushes made by GitHub Actions bots.

#### Scenario: Push deploys
- **WHEN** a commit is pushed to `main`
- **THEN** Workers Builds runs the build and the new `dist/` is live on `betterliloan.org`

#### Scenario: Failed build does not deploy
- **WHEN** `pnpm run build` fails on a pushed commit
- **THEN** the previously deployed version stays live

### Requirement: CI quality gates run against the built site
Lighthouse CI and Playwright SHALL test the output of `pnpm run build`, served through the production-equivalent preview.

#### Scenario: Playwright web server
- **WHEN** `pnpm test` runs
- **THEN** Playwright starts the preview server and the volunteer-popup tests pass against it

#### Scenario: Lighthouse workflow
- **WHEN** `lighthouse.yml` runs
- **THEN** it builds with `pnpm run build`, audits the preview server, and keeps the existing assertion thresholds

### Requirement: Single version source
`public/version.json` SHALL be the single version source. `pnpm run version:patch|minor|major` SHALL update it, `package.json`, and the version stamps in HTML files under `public/`, and nothing under `react-app/`.

#### Scenario: Patch bump
- **WHEN** `pnpm run version:patch` runs
- **THEN** `public/version.json`, `package.json` and stamped HTML files show the same incremented version

### Requirement: No legacy build or React artifacts
The repository SHALL NOT contain `react-app/`, `build.sh`, `serve.py`, `.htaccess`, `babel.config.json`, cPanel packaging scripts, or package scripts that reference them.

#### Scenario: Legacy references removed
- **WHEN** the repo is searched for `build.sh`, `react-app`, `serve.py`, `package-cpanel` outside `openspec/` and git history
- **THEN** there are no matches

