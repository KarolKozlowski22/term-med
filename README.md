# Term-Med

Website of **Term-Med** — a Polish supplier of single-use medical devices (since 2005).

Static, bilingual (PL / EN) site built with [Astro](https://astro.build), deployed to GitHub Pages.

- Preview: https://karolkozlowski22.github.io/term-med/
- Production domain: https://term-med.pl

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check
npm run build    # -> dist/
npm run preview
```

Requires Node.js 20.3+ (CI uses Node 22).

## Deployment

Every push to `master` builds and deploys the site via GitHub Actions
(`.github/workflows/deploy.yml`) to GitHub Pages.

The preview build is **not indexable** (`noindex` + `Disallow: /`). To build for the production
domain, set:

```sh
SITE_URL=https://term-med.pl BASE_PATH=/ INDEXABLE=true npm run build
```

## Editing content

- Company data and product catalogue: `src/config/site.ts`
- All copy (both languages) and localized routes: `src/i18n/ui.ts`
- Product photos: `src/assets/products/` (optimized to AVIF/WebP at build time)
