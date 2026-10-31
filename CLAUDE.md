# CLAUDE.md — Term-Med website

## What this is
Bilingual (Polish default at `/`, English at `/en/`) marketing site for Term-Med, a B2B supplier of
single-use medical devices from Mysłowice. Rebuild of the original 2023 vanilla HTML/JS site, keeping
its visual identity: Montserrat, logo blue `#51A5DB` + green `#69C292` gradients, rounded 1rem panels,
italic uppercase gradient headings, white product cards with a blue top border, dark footer.

## Stack
- **Astro 5** static output (pinned to 5.x — local machine runs Node 20). Near-zero client JS:
  mobile menu toggle, click-to-load map, Astro hover prefetch.
- Plain CSS: tokens in `src/styles/global.css`, component styles scoped in `.astro` files.
- Montserrat self-hosted via `@fontsource-variable/montserrat` (Latin subsets preloaded).
- Images through `astro:assets` `<Picture>` (AVIF + WebP, responsive `srcset`).

## Structure
```
src/
  config/site.ts      company data (contact, founding year) + product catalogue (PL/EN names)
  i18n/ui.ts          ALL copy for both languages + localized routes (`routes`)
  layouts/BaseLayout  <head>: SEO (canonical, hreflang, OG, JSON-LD Organization), fonts, robots
  views/              page bodies taking `lang` — HomePage, OfferPage, ContactPage
  pages/              thin routes: / /oferta /kontakt, /en/ /en/offer /en/contact, 404, robots.txt
  components/         Header, LangSwitch, Footer, MobileCTA, SectionHeading, CtaBand,
                      ProductCard, Icon (inline Font Awesome SVGs), MapEmbed (click-to-load),
                      TileIcon (gradient icon tiles + hover animations: contact rows, footer)
  utils/url.ts        url() / absoluteUrl() — prefix BASE_URL
```

## Conventions
- **Internal links/assets must use `url('/path/')`** — the preview is served from `/term-med/`.
- New page: add the key to `routes` in `src/i18n/ui.ts`, a view in `src/views/`, and one route file
  per language in `src/pages/`.
- Copy lives in `src/i18n/ui.ts`, never hard-coded in markup. Both languages must stay in sync.
- Brand colors (`--blue`, `--green`) are for backgrounds/borders/icons only; text and buttons use
  the darker `--blue-ink` / `--green-ink` (WCAG AA contrast).
- Dark mode: follows the OS, overridable via ThemeToggle (saved in localStorage, applied pre-paint by an
  inline script in BaseLayout). Dark values live in `global.css` twice — under the
  `prefers-color-scheme` media query and `:root[data-theme='dark']` — keep both blocks in sync.
  Never hard-code colors in components; use the tokens (`--surface`, `--text`, `--photo-bg`, ...).
  Filled buttons/bands use the fixed `--btn-grad` (white text in both themes).
- MotifMarquee (scrolling icon strip in the home band) takes its labels from `marquee` in ui.ts.
- CSS is inlined into every page (`build.inlineStylesheets: 'always'`): GitHub Pages caches HTML for
  10 min and each deploy deletes the previous hashed CSS, so external stylesheets could leave cached
  pages unstyled. Don't switch this back.
- Product photos sit on white tiles (`--photo-bg`) in both themes; no `mix-blend-mode` on images and no
  `backdrop-filter` on the sticky header / mobile bar (cheaper compositing on phones).
- Indexing is opt-in: `INDEXABLE=true` at build time (production only).
- Product descriptions are short and factual — verify any new claims with the client.
