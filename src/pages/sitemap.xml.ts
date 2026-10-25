import { site } from '../data/site';
export const GET = () => new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${['/', '/ko/'].map(path => `<url><loc>${site.origin}${path}</loc>${[['en', '/'], ['ko', '/ko/'], ['x-default', '/']].map(([lang, href]) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${site.origin}${href}"/>`).join('')}</url>`).join('\n')}
</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
