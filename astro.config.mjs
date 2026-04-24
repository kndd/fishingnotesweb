import { defineConfig } from 'astro/config';

// Update SITE + BASE when you know final GitHub Pages URL.
// Example: https://<user>.github.io/<repo>/  -> site: 'https://<user>.github.io', base: '/<repo>'
const SITE = process.env.SITE_URL || 'https://fishingnotes.mojaryba.com';
const BASE = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  build: {
    assets: 'assets',
  },
});
