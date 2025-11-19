/* Simple sitemap generator for static SPA routes.
  Usage: node scripts/generate-sitemap.js <siteUrl>
  It will write ./public/sitemap.xml with the listed routes.
  This file is ESM-compatible (uses import) because the project uses "type": "module".
*/
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = process.argv[2] || 'http://pradip-chaudhary.com.np/';
const routes = ['/', '/portfolio', '/biography', '/media', '/contact'];

// Image list for portfolio page (keeps sitemap in sync with portfolio posters)
const portfolioImages = [
  '/images/barista-balaram_2.jpg',
  '/images/hostel_return2.jpg',
  '/images/maun_2013.jpg',
  '/images/jhimkey_mama.jpg',
  '/images/masantaar.jpg',
  '/images/kaalaa_pathar_mathi.jpg',
  '/images/aakashkobato.webp',
  '/images/Final_sunkeshari-poster-KTM.jpg',
];

const urls = routes.map((r) => `${siteUrl.replace(/\/$/, '')}${r}`);

const today = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls
  .map((u) => {
    if (u.endsWith('/portfolio')) {
      const imagesXml = portfolioImages
        .map((img) => `      <image:image>\n        <image:loc>${siteUrl.replace(/\/$/, '')}${img}</image:loc>\n      </image:image>`)
        .join('\n');

      return `  <url>\n    <loc>${u}</loc>\n    <lastmod>${today}</lastmod>\n${imagesXml}\n  </url>`;
    }
    return `  <url>\n    <loc>${u}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`;
  })
  .join('\n')}\n</urlset>`;

const outDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');
console.log('sitemap.xml written to', path.join(outDir, 'sitemap.xml'));
