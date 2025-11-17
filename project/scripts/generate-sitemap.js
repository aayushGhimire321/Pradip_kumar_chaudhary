/* Simple sitemap generator for static SPA routes.
   Usage: node scripts/generate-sitemap.js <siteUrl>
   It will write ./public/sitemap.xml with the listed routes.
*/
const fs = require('fs');
const path = require('path');

const siteUrl = process.argv[2] || 'https://example.com';
const routes = ['/', '/portfolio', '/biography', '/media', '/contact'];

const urls = routes.map((r) => `${siteUrl.replace(/\/$/, '')}${r}`);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>\n    <loc>${u}</loc>\n  </url>`,
  )
  .join('\n')}
</urlset>`;

const outDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');
console.log('sitemap.xml written to', path.join(outDir, 'sitemap.xml'));
