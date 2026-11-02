# BetterLiloan.org

A civic-tech initiative providing transparent access to municipal services, programs, and public funds of LGU Solano, Nueva Vizcaya, Philippines.

![Version](https://img.shields.io/badge/version-1.1.15-green)
![License](https://img.shields.io/badge/license-MIT%20%7C%20CC%20BY%204.0-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare%20Workers-F38020?logo=cloudflare&logoColor=white)

## Open Source for LGUs

This repository is open source under the **MIT License** and **CC BY 4.0** and is freely available for use, modification, redistribution, and publication by any individual or organization that wishes to implement it in their respective local government unit (LGU) across the Philippines.

We encourage adoption by other municipalities in support of:

- **Transparency** - Making government information accessible to citizens
- **Accessibility** - Ensuring services are available to all, including persons with disabilities
- **Modernization** - Bringing local government services to digital platforms
- **Public Service** - Improving the delivery of government services to the community

To adapt this project for your LGU, fork the repository and customize the content, styling, and data sources to match your municipality's requirements.

## About

BetterLiloan.org is a volunteer-driven, open-source project that empowers the people of Solano with easy access to local government information. The platform aggregates public data from official government portals and presents it in a user-friendly, accessible format.

**Cost to the People of Solano = ₱0**

## Live Demo

Visit the live website: [https://betterliloan.org](https://betterliloan.org)

## Technology Stack

| Category            | Technologies                                                                                             |
| ------------------- | -------------------------------------------------------------------------------------------------------- |
| **Frontend**        | HTML5, CSS3, JavaScript (ES6+)                                                                           |
| **Styling**         | Custom CSS, CSS Variables, Flexbox, CSS Grid, Responsive Design                                          |
| **Icons**           | Bootstrap Icons (CDN)                                                                                    |
| **Fonts**           | Google Fonts (Inter)                                                                                     |
| **Maps**            | Leaflet.js, OpenStreetMap                                                                                |
| **Charts**          | Chart.js (Canvas-based)                                                                                  |
| **Animations**      | Lottie (dotlottie-player web component)                                                                  |
| **Data Format**     | JSON                                                                                                     |
| **APIs**            | Open-Meteo (Weather), ExchangeRate API (Currency)                                                        |
| **Build Tools**     | Node.js, pnpm, Astro (static passthrough of `public/`)                                                   |
| **Code Formatting** | Prettier                                                                                                 |
| **Version Control** | Git, GitHub                                                                                              |
| **Hosting**         | Cloudflare Workers Static Assets (`wrangler.jsonc`, `public/_headers`)                                   |
| **PWA**             | Service Worker (versioned caching, install prompt, seamless updates), Web App Manifest, offline fallback |
| **SEO**             | Open Graph, Twitter Cards, XML Sitemap, robots.txt                                                       |
| **Security**        | HTTPS, CSP Headers, HSTS, X-Frame-Options                                                                |
| **Analytics**       | Google Analytics (gtag.js)                                                                               |
| **Accessibility**   | WCAG 2.1, ARIA, Semantic HTML                                                                            |
| **Performance**     | Edge Brotli/GZIP Compression, Browser Caching                                                            |

## Key Features

| Feature                          | Description                                                                                                                                                                                                                            |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Municipal Services Directory** | Comprehensive guide to all LGU services with requirements, fees, and processing times                                                                                                                                                  |
| **Government Officials**         | Directory of elected officials and department heads with contact information                                                                                                                                                           |
| **Budget Transparency**          | Financial reports, income/expenditure breakdowns, and infrastructure projects                                                                                                                                                          |
| **Legislative Documents**        | Searchable database of ordinances and resolutions from Sangguniang Bayan                                                                                                                                                               |
| **Municipal Statistics**         | Demographics, economic data, and competitive index rankings                                                                                                                                                                            |
| **Appointment Services**         | Online appointment scheduling integration with the Mayor's Office (OASYS), featuring branded Lottie animation                                                                                                                          |
| **Solano Quiz**                  | Interactive quiz about Solano history and culture, linked from homepage CTA and footer across all pages                                                                                                                                |
| **Real-time Information**        | Live weather updates, currency exchange rates, and Philippine time                                                                                                                                                                     |
| **Emergency Hotline Marquee**    | Clickable scrolling marquee for emergency contacts on tablet and mobile viewports, with pause-on-hover/focus accessibility                                                                                                             |
| **Progressive Web App**          | Installable PWA with "Install App" prompt, seamless auto-updates via skipWaiting (no manual refresh), versioned service worker caching (static + runtime), offline fallback page with emergency hotlines, push notification foundation |
| **Auto Version Management**      | Dynamic version display from `public/version.json`, bumped with `pnpm run version:*` and synced across all 51+ HTML files and `package.json`                                                                                           |
| **Multi-language Support**       | Full i18n coverage in English, Filipino, and Ilocano (5,546 keys per language with perfect parity)                                                                                                                                     |
| **Clean URLs**                   | SEO-friendly URLs without `.html` extensions, served by Cloudflare Workers `html_handling: auto-trailing-slash`                                                                                                                        |
| **Brief History of Solano**      | Interactive timeline (1760–1957) with fully translated cards in all three languages                                                                                                                                                    |
| **Mobile Navigation**            | Responsive menu with GPU-accelerated open/close transitions, body scroll lock, animation guard against rapid toggles, debounced resize handling, touch-safe hover scoping, click-outside-to-close, and focus trap                      |
| **Accessibility**                | WCAG 2.1 compliant with skip links, ARIA labels, keyboard navigation, and semantic HTML                                                                                                                                                |
| **SEO Optimized**                | Meta tags, Open Graph, Twitter Cards, structured data, and XML sitemap                                                                                                                                                                 |
| **Performance**                  | Edge compression and per-resource-class browser caching                                                                                                                                                                                |

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Neil-urk12/BetterLiloan.git

# Navigate to project directory
cd BetterLiloan

# Install dependencies
pnpm install

# Production-equivalent local server (clean URLs, headers, 404 page)
pnpm run preview

# Open in browser
# http://localhost:8787
```

## Installation

### Prerequisites

| Requirement | Version | Purpose                            |
| ----------- | ------- | ---------------------------------- |
| Node.js     | v22+    | Build tools and package management |
| pnpm        | v12+    | Dependency management              |
| Git         | Latest  | Version control                    |

### Setup Steps

1. **Clone the repository**

```bash
git clone https://github.com/Neil-urk12/BetterLiloan.git
cd BetterLiloan
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start the development server**

```bash
pnpm run dev
```

4. **Open in browser**
   - Development (`pnpm run dev`): http://localhost:4321
   - Production preview (`pnpm run preview`): http://localhost:8787

## Usage

### Development Commands

| Command                  | Description                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| `pnpm run dev`           | `astro dev` (port 4321; extensionless URLs may not resolve)        |
| `pnpm run build`         | `astro build`: copies `public/` to `dist/` (no version bump)       |
| `pnpm run preview`       | Build, then `wrangler dev` (port 8787) with production URL/headers |
| `pnpm test`              | Playwright tests against the preview server                        |
| `pnpm run version:check` | Display current version                                            |
| `pnpm run version:patch` | Bump patch version only                                            |
| `pnpm run version:minor` | Bump minor version only                                            |
| `pnpm run version:major` | Bump major version only                                            |
| `pnpm run format`        | Format all files with Prettier                                     |
| `pnpm run format:check`  | Check formatting without writing changes                           |

### Production Deployment

Every push to `main` is built and deployed by **Cloudflare Workers Builds**
(build `pnpm install --frozen-lockfile && pnpm run build`, deploy `pnpm exec wrangler deploy`). `wrangler.jsonc` serves
`dist/` as static assets (no Worker script). Security headers, CSP and cache rules live in
`public/_headers`; add any new third-party origin to the CSP there.

## Multi-language Support (i18n)

The site supports three languages with full translation coverage:

| Language | Code  | Status                |
| -------- | ----- | --------------------- |
| English  | `en`  | Complete (5,546 keys) |
| Filipino | `fil` | Complete (5,546 keys) |
| Ilocano  | `ilo` | Complete (5,546 keys) |

The site uses a `TranslationEngine` in `public/assets/js/translations.js` with `data-i18n` attributes on HTML elements, falling back to English for any missing keys.

## Project Structure

```
BetterLiloan/
├── public/                   # The whole site, copied verbatim to dist/ by astro build
│   ├── assets/
│   │   ├── css/              # Stylesheets
│   │   ├── js/               # JavaScript modules
│   │   ├── images/           # Images, icons, banners, partner logos
│   │   └── animation/        # Lottie JSON animation files
│   ├── data/                 # JSON data files (fetched at /data/*.json)
│   ├── services/             # Service category pages
│   ├── service-details/      # Individual service pages
│   ├── government/ legislative/ budget/ statistics/ news/ contact/ faq/ sitemap/ ...
│   ├── index.html            # Homepage
│   ├── sw.js                 # Service worker (versioned caching, offline support)
│   ├── manifest.webmanifest  # PWA web app manifest
│   ├── offline.html          # Offline fallback page with emergency hotlines
│   ├── _headers              # Security headers, CSP, cache rules (Cloudflare)
│   └── version.json          # Version source of truth
├── admin/news-editor.html    # Local news curation tool (not deployed)
├── scripts/                  # Version, Facebook sync, and one-off maintenance scripts
├── tests/                    # Playwright tests
├── astro.config.mjs          # Astro config (static output to dist/)
├── wrangler.jsonc            # Cloudflare Workers Static Assets config
├── package.json              # Node.js configuration
└── README.md                 # Project documentation
```

## Recent Changes

### v1.1.15 — Header, PWA, Version Automation & Code Quality

#### PWA Install Prompt & Seamless Updates

- Added "Install App" prompt banner using the `beforeinstallprompt` API with Install/Dismiss buttons, respecting standalone mode and session dismissal
- Replaced manual-refresh update flow with seamless `skipWaiting` + `controllerchange` auto-reload pattern
- Service worker now accepts `SKIP_WAITING` message from clients to activate waiting worker on demand
- Install banner goes full-width (no border-radius, no margins) on mobile viewports (<=575px) with slide-up animation
- Created `PWAManager.tsx` React component handling both install prompt and SW update lifecycle
- Added `.pwa-install-banner` CSS styles to both static and React versions

#### Footer Mobile Alignment

- Added `text-align: center` for `.footer-tagline` in the <=575px mobile breakpoint, overriding the tablet `text-align: left` rule
- Synced footer CSS fix to React version

#### CI/CD Cleanup

- Removed CodeQL Advanced workflow (`.github/workflows/codeql.yml`) as it is no longer required

#### Responsive Header & Hotline Marquee

- Standardized header vertical spacing (padding, min-height, logo size) across desktop (12px/48px), tablet (10px/40px), mobile (8px/36px), and small mobile (6px/32px) breakpoints
- Raised tablet breakpoint from 991px to 1024px to properly capture iPad Pro portrait (1024px) and iPad Air landscape
- Converted emergency hotline bar into a clickable scrolling marquee on all tablet and mobile viewports (≤1024px) with pause-on-hover/focus for accessibility
- Centered hamburger menu icon between logo and language toggle on tablet viewports using flexbox ordering (logo → hamburger → lang toggle)
- Tablet footer: left-aligned BetterLiloan logo, tagline, and social icons to match the visual hierarchy of the brand column

#### Progressive Web App (PWA)

- Rewrote `sw.js` with dual-cache architecture: `STATIC_CACHE` (precached app shell) and `RUNTIME_CACHE` (dynamic content, 80-item FIFO, 7-day TTL)
- Navigation uses network-first with offline fallback; static assets use stale-while-revalidate; data/API uses network-first with cache fallback
- Added push notification and background sync foundations
- Enhanced SW registration with 30-minute update polling and non-intrusive refresh banner on new version activation
- Upgraded `manifest.webmanifest` with maskable icons, app shortcuts (Services, Contact, Government, Transparency), and `orientation: any`
- Added iOS PWA meta tags (`apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`, `apple-mobile-web-app-title`)
- Fixed theme-color from old green (#1a5f2a) to brand blue (#0032a0) across all files
- Updated offline fallback page colors to match brand

#### Automatic Version Management

- Created cross-platform `scripts/bump-version.js` (Node.js) replacing the bash-only `version.sh` for Windows compatibility
- Version bump updates `version.json`, `package.json`, all 51+ HTML files, and syncs to `react-app/public/version.json`
- Git pre-commit hook auto-bumps patch version on every commit (skips version-only commits to prevent loops)
- Footer version displayed dynamically at runtime via `version.js` fetching from `version.json`

#### React App Sync

- Created `HotlineBar.tsx` component with tablet/mobile marquee matching static site behavior
- Created `InfoBar.tsx` component with live exchange rates, weather, and Philippine time
- Created `SearchAutocomplete.tsx` component with service search dropdown
- Created `PWAManager.tsx` component handling install prompt and seamless SW updates
- Updated `Footer.tsx` to dynamically fetch version from `/version.json` instead of hardcoded value
- Updated `Header.tsx` breakpoint from 991px to 1024px, fixed ARIA attribute string values
- Updated `layout.tsx` with corrected theme-color, manifest link, Apple PWA meta tags, and PWAManager integration
- Synced `manifest.webmanifest`, `version.json`, `sw.js`, and all CSS to react-app

#### Code Quality & Tooling

- Installed Prettier as dev dependency with project-wide configuration (`.prettierrc`, `.prettierignore`)
- Formatted entire codebase (120+ files) for consistent code style
- Git pre-commit hook auto-formats staged files with Prettier before each commit
- Fixed `privacy/index.html` malformed HTML (duplicate `</body></html>` closing tags)
- Resolved all npm vulnerabilities: upgraded `@lhci/cli` to ^0.15.1, added `tmp` override to 0.2.5 (0 vulnerabilities)
- Added `pnpm run format` and `pnpm run format:check` scripts

### Previous Changes

### Content & Features

- Added Solano Quiz CTA section on homepage with branded Lottie animation (brand blue `#0032A0`)
- Added Solano Quiz link to footer Quick Links across all 51 HTML pages and React Footer
- Added Brief History of Solano interactive timeline section on homepage (1760–1957)
- Added quiz entry to HTML sitemap page
- Added Abakada education tools CTA on services/education page with local SVG logo

### Internationalization (i18n)

- Upgraded translation engine to 5,546 keys per language with perfect en/fil/ilo parity
- Fixed Brief History timeline cards — full paragraph translations now applied via `data-i18n` on `<p>` elements (previously only proper nouns inside `<strong>` tags were translated, leaving surrounding English text intact)
- Corrected Filipino translations: proper religious title "Padre" (not "Ama"), fully translated historical paragraphs (no half-English)
- Corrected Ilocano translations: proper Ilocano vocabulary ("Ababa a Pakasaritaan" not Filipino "Maikling Kasaysayan", "Dimteng" not "Dumating", "Ili" not "Lungsod"), fully translated paragraphs
- Added 54 translation keys for Solano Quiz footer link across all page contexts

### Footer & Copyright

- Standardized copyright across all 51 HTML files and React Footer: three styled spans (`footer-copyright-text`, `footer-copyright-license`, `footer-copyright-disclaimer`)
- Updated copyright year to 2026, name to "BetterLiloan.org"
- Footer copyright uses `flex-wrap: wrap; gap: 6px` layout with version badge right-aligned via `margin-left: auto`
- Removed trailing period after "BetterLiloan.org" from all pages and all 3 translation languages

### Clean URLs

- Removed `.html` extensions from 621 navigation links across 48 HTML files
- Apache `.htaccess` rewrite rules handle clean URL resolution on cPanel

### Build & Deployment

- Updated `build.sh` rsync excludes to filter out dev artifacts (`.backup`, `.md`, `package*.json`, `scripts/`, `docs/`, etc.)
- Production dist: 52 HTML pages, 106 total files, 3.9MB, zero dev artifacts
- Updated CSP headers: added `worker-src 'self' blob:`, `blob:` to `connect-src`, CDN domains to `connect-src` for dotlottie-player and Bootstrap Icons compatibility

### Cross-Version Sync

- All CSS files synced between legacy and React: `footer.css`, `style.css`, `responsive.css`, `accessibility.css`
- All image and animation assets synced between legacy and React
- React LanguageContext updated with matching translation keys for homepage sections

## Contributing

We welcome contributions from everyone! Whether you're a developer, designer, data researcher, content writer, translator, or a concerned citizen of Solano, your participation helps shape this project for all.

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make** your changes
4. **Test** thoroughly on multiple browsers
5. **Commit** with a descriptive message
   ```bash
   git commit -m "Add: description of your changes"
   ```
6. **Push** to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open** a Pull Request with detailed description

### Contribution Areas

| Area                   | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| **Bug Fixes**          | Report issues or submit fixes for existing bugs               |
| **Features**           | Propose or implement new functionality                        |
| **Content**            | Update service information, add missing municipal data        |
| **Translations**       | Help translate content to Filipino or Ilocano                 |
| **Design**             | Improve UI/UX, accessibility, and visual consistency          |
| **Data**               | Verify and update municipal statistics and records            |
| **Documentation**      | Enhance README, code comments, and guides                     |
| **API Integration**    | Propose or implement API connections for real-time data feeds |
| **Data Visualization** | Enhance charts, graphs, and interactive presentations         |

### Code Style Guidelines

| Guideline         | Description                                                               |
| ----------------- | ------------------------------------------------------------------------- |
| **Formatting**    | Prettier auto-formats on commit; run `pnpm run format` to format manually |
| **HTML**          | Use semantic HTML5 elements; validate before committing                   |
| **CSS**           | Follow BEM naming conventions; use CSS custom properties                  |
| **JavaScript**    | Keep vanilla JS unless proposing framework for data visualization         |
| **Naming**        | Use meaningful, descriptive variable and function names                   |
| **Comments**      | Add comments for complex logic and non-obvious implementations            |
| **Accessibility** | Ensure WCAG 2.1 compliance (alt text, ARIA, keyboard navigation)          |
| **Performance**   | Optimize images; minimize DOM manipulation                                |
| **Testing**       | Test on Chrome, Firefox, Safari, Edge; test mobile responsiveness         |
| **Validation**    | Validate HTML/CSS before pull requests                                    |

## Data Sources

All public information is sourced from official government portals:

| Source                             | URL                                                                       | Data Type                 |
| ---------------------------------- | ------------------------------------------------------------------------- | ------------------------- |
| LGU Solano Official Website        | [solano.gov.ph](https://solano.gov.ph/)                                   | Services, Officials       |
| Sangguniang Bayan ng Solano        | [sangguniangbayan.solano.gov.ph](https://sangguniangbayan.solano.gov.ph/) | Ordinances, Resolutions   |
| Bureau of Local Government Finance | [blgf.gov.ph](https://blgf.gov.ph/)                                       | Budget, Financial Reports |
| Philippine Statistics Authority    | [psa.gov.ph](https://psa.gov.ph/)                                         | Demographics, Census      |
| DTI CMCI Portal                    | [cmci.dti.gov.ph](https://cmci.dti.gov.ph/)                               | Competitive Index         |

## License

This project is dual-licensed:

| License     | Applies To  | Details                                |
| ----------- | ----------- | -------------------------------------- |
| MIT License | Source Code | Free to use, modify, and distribute    |
| CC BY 4.0   | Content     | Attribution required for content reuse |

See [LICENSE](LICENSE) for full details.

## Contact

| Channel  | Link                                                                  |
| -------- | --------------------------------------------------------------------- |
| Website  | [betterliloan.org](https://betterliloan.org)                          |
| Email    | volunteer@betterliloan.org                                            |
| LinkedIn | [BetterLiloan](https://www.linkedin.com/company/bettersolano/)        |
| Discord  | [Join Community](https://discord.com/invite/qeSu7RJkjQ)               |
| GitHub   | [Neil-urk12/BetterLiloan](https://github.com/Neil-urk12/BetterLiloan) |

## Acknowledgments

- [BetterGov.ph](https://bettergov.ph) for the civic-tech initiative in the Philippines
- [Abakada.org](https://abakada.org) for supporting civic technology efforts
- LGU Solano for public data availability and transparency
- All volunteers and contributors who dedicate their time
- Open-source community for the tools and libraries used
- Citizens of Solano for their feedback and support

---

Made for the people of Solano, Nueva Vizcaya

## Developer

[Ramon Logan Jr.](https://ramonloganjr.com/) is a UAE-based full-stack developer and IT professional specializing in web development, design, cloud services, and cybersecurity. He is the developer behind BetterLiloan.org, [Abakada.org](https://abakada.org), and the founder of the small cloud-based solutions initiative, [HelloPinas.com](https://hellopinas.com). Ramon actively contributes to civic-tech efforts like [BetterGov.ph](https://bettergov.ph) and is an individual participant in the [OpenJS Foundation](https://openjsf.org/).
