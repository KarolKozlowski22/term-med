import type { APIRoute } from 'astro';
import { site } from '../config/site';

// Preview builds (GitHub Pages) block crawlers; the production build (INDEXABLE=true) allows them.
export const GET: APIRoute = ({ site: siteUrl }) => {
  const body = site.indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, siteUrl).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
