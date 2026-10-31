// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH are set in CI (.github/workflows/deploy.yml) for GitHub Pages.
// For the production domain build with SITE_URL=https://term-med.pl BASE_PATH=/ INDEXABLE=true.
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // Prefetch internal pages on hover/tap so navigation feels instant.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
