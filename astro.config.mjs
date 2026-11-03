// @ts-check
import { existsSync } from 'node:fs';
import { defineConfig } from 'astro/config';

// Dev only: mirror wrangler's html_handling "auto-trailing-slash" so `/`, `dir/` and `page` resolve to public/*.html.
/** @type {import('vite').Plugin} */
const publicCleanUrls = {
  name: 'public-clean-urls',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const { pathname, search } = new URL(req.url ?? '/', 'http://localhost');
      if (!/\.[^/]*$/.test(pathname)) {
        const file = pathname.endsWith('/') ? `${pathname}index.html` : `${pathname}.html`;
        if (existsSync(new URL(`./public${decodeURIComponent(file)}`, import.meta.url))) req.url = file + search;
      }
      next();
    });
  },
};

// Legacy pages live in public/ and are copied verbatim to dist/ (see openspec astro-cloudflare-migration).
export default defineConfig({
  output: 'static',
  outDir: 'dist',
  vite: { plugins: [publicCleanUrls] },
});
