// @ts-check
import { defineConfig } from 'astro/config';

// Legacy pages live in public/ and are copied verbatim to dist/ (see openspec astro-cloudflare-migration).
export default defineConfig({
  output: 'static',
  outDir: 'dist',
});
