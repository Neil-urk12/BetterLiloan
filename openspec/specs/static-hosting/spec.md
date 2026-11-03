# static-hosting Specification

## Purpose
How the site is served in production on Cloudflare Workers Static Assets: URL handling, 404, security headers and CSP, cache policy, and service worker headers.
## Requirements
### Requirement: Clean URLs
The production host SHALL serve every page at its extensionless URL and SHALL redirect `.html` URLs to the extensionless form.

#### Scenario: Extensionless page request
- **WHEN** a client requests `/services/health`
- **THEN** the host responds 200 with the contents of `services/health.html`

#### Scenario: Legacy .html URL
- **WHEN** a client requests `/services/health.html`
- **THEN** the host responds with a permanent or temporary redirect to `/services/health`

#### Scenario: Directory index page
- **WHEN** a client requests `/government/`
- **THEN** the host responds 200 with the contents of `government/index.html`

### Requirement: Not-found page
The host SHALL respond with status 404 and the body of `/404.html` for any path that matches no asset.

#### Scenario: Unknown path
- **WHEN** a client requests `/does-not-exist`
- **THEN** the response status is 404 and the body is the `404.html` page

### Requirement: Security headers
Every response SHALL carry the same security headers as the previous Apache configuration: `Content-Security-Policy` (identical policy string), `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy: geolocation=(self), microphone=(), camera=(), payment=(), usb=()`.

#### Scenario: Headers on a page
- **WHEN** a client requests `/`
- **THEN** the response includes each listed header with the listed value

#### Scenario: Headers on a static asset
- **WHEN** a client requests `/assets/js/main.js`
- **THEN** the response includes the same `Content-Security-Policy` and `X-Content-Type-Options` headers

### Requirement: Cache policy
The host SHALL send `Cache-Control` by resource class: HTML `public, max-age=3600, must-revalidate`; files under `/assets/` `public, max-age=2592000`; files under `/data/` `public, max-age=86400, must-revalidate`; `/sw.js` `no-cache, no-store, must-revalidate`. Each response SHALL carry exactly one effective `Cache-Control` value.

#### Scenario: Asset caching
- **WHEN** a client requests `/assets/css/style.css`
- **THEN** `Cache-Control` is `public, max-age=2592000`

#### Scenario: Data caching
- **WHEN** a client requests `/data/news.json`
- **THEN** `Cache-Control` is `public, max-age=86400, must-revalidate`

#### Scenario: Page caching
- **WHEN** a client requests `/contact`
- **THEN** `Cache-Control` is `public, max-age=3600, must-revalidate`

### Requirement: Service worker scope
`/sw.js` SHALL be served uncached with header `Service-Worker-Allowed: /` so it can control the whole origin.

#### Scenario: Service worker fetch
- **WHEN** a client requests `/sw.js`
- **THEN** the response has `Cache-Control: no-cache, no-store, must-revalidate` and `Service-Worker-Allowed: /`

### Requirement: Origin-independent data fetches
Client scripts SHALL fetch JSON from `data/` with root-absolute paths (`/data/<file>.json`), independent of the page's URL depth.

#### Scenario: Nested page loads data
- **WHEN** `/government/officials` (or any page at any depth) loads and requests officials data
- **THEN** the request URL is `/data/officials.json` and it returns 200

### Requirement: Unchanged page output
The deployed HTML, CSS, JS, JSON and image files SHALL be byte-identical to their sources in `public/`, except for the version stamping done by `bump-version.js`.

#### Scenario: Build passthrough
- **WHEN** `astro build` runs
- **THEN** every file in `public/` appears at the same relative path in `dist/` with identical contents

