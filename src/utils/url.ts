/**
 * Prefixes an internal path with the configured base path,
 * so links work both locally ("/") and on GitHub Pages ("/term-med/").
 * Always use url('/oferta/') instead of a raw "/oferta/" for internal links/assets.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Absolute URL (for canonical, hreflang, Open Graph and JSON-LD). */
export function absoluteUrl(path: string, site: URL | undefined): string {
  return new URL(url(path), site).href;
}
