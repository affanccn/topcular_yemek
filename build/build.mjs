/**
 * Statik site üreticisi.
 *   npm run build  →  dist/ klasörüne yayına hazır site üretir.
 * dist/ klasörünü herhangi bir hostinge (cPanel, Netlify, Vercel, Cloudflare Pages) yükleyebilirsiniz.
 */
import { mkdir, writeFile, rm, cp, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { site } from '../site.config.mjs';
import { images } from '../content/images.mjs';
import { setImageMeta, logoSvg } from './lib.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'src');
const DIST = join(root, 'dist');
const WIDTHS = [480, 800, 1200, 1600];
const version = Date.now().toString(36);

const t0 = Date.now();
await rm(DIST, { recursive: true, force: true });
await mkdir(join(DIST, 'assets', 'img'), { recursive: true });

/* ---------- 1) Görseller → duyarlı WebP ---------- */
const imgDir = join(SRC, 'assets', 'img');
const meta = {};
for (const file of await readdir(imgDir)) {
  const m = file.match(/^(.+)\.(jpe?g|png|webp)$/i);
  if (!m) continue;
  const name = m[1];
  const input = join(imgDir, file);
  const { width, height } = await sharp(input).metadata();
  const widths = WIDTHS.filter((w) => w <= width);
  if (!widths.length) widths.push(width);
  await Promise.all(
    widths.map((w) =>
      sharp(input).resize({ width: w }).webp({ quality: 78, effort: 5 }).toFile(join(DIST, 'assets', 'img', `${name}-${w}.webp`))
    )
  );
  meta[name] = { width, height, widths };
}
setImageMeta(meta);

// Sosyal medya (OG) görseli 1200x630 JPG
await sharp(join(imgDir, `${images.og}.jpg`))
  .resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(join(DIST, 'assets', 'img', 'og-image.jpg'));

/* ---------- 2) Logo / favicon ---------- */
const markSvg = logoSvg
  .replace('class="logo-mark" ', 'xmlns="http://www.w3.org/2000/svg" ')
  .replace('var(--paprika)', '#B5401B');
await writeFile(join(DIST, 'favicon.svg'), markSvg);

const logoFile = join(imgDir, 'topcular-yemek-logo.png');
if (existsSync(logoFile)) {
  await sharp(logoFile).resize(512, 512).png().toFile(join(DIST, 'assets', 'logo.png'));
  await sharp(logoFile).resize(32, 32).png().toFile(join(DIST, 'favicon-32.png'));
  await sharp(logoFile).resize(180, 180).flatten({ background: '#FBF6EE' }).png().toFile(join(DIST, 'apple-touch-icon.png'));
  await sharp(logoFile).resize(192, 192).png().toFile(join(DIST, 'icon-192.png'));
  await sharp(logoFile).resize(512, 512).png().toFile(join(DIST, 'icon-512.png'));
} else {
  const markBuf = Buffer.from(markSvg.replace('viewBox="0 0 48 48"', 'viewBox="0 0 48 48" width="512" height="512"'));
  await sharp(markBuf).resize(32, 32).png().toFile(join(DIST, 'favicon-32.png'));
  await sharp(markBuf).resize(180, 180).flatten({ background: '#FBF6EE' }).png().toFile(join(DIST, 'apple-touch-icon.png'));
  await sharp(markBuf).resize(192, 192).png().toFile(join(DIST, 'icon-192.png'));
  await sharp(markBuf).resize(512, 512).png().toFile(join(DIST, 'icon-512.png'));
  await sharp(markBuf).resize(512, 512).png().toFile(join(DIST, 'assets', 'logo.png'));
}

/* ---------- 3) CSS / JS ---------- */
await cp(join(SRC, 'assets', 'css'), join(DIST, 'assets', 'css'), { recursive: true });
await cp(join(SRC, 'assets', 'js'), join(DIST, 'assets', 'js'), { recursive: true });
if (existsSync(join(SRC, 'public'))) await cp(join(SRC, 'public'), DIST, { recursive: true });

/* ---------- 4) Sayfalar ---------- */
const { buildPages } = await import('./pages.mjs');
const pages = buildPages(version);
for (const p of pages) {
  const out = p.path.endsWith('.html') ? join(DIST, p.path) : join(DIST, p.path, 'index.html');
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, p.html.replace(/\n\s*\n/g, '\n'));
}

/* ---------- 5) sitemap.xml / robots.txt / manifest ---------- */
const today = new Date().toISOString().slice(0, 10);
const priority = (path) =>
  path === '/' ? '1.0' : path.includes('gebze') || path.startsWith('/hizmetler/') ? '0.9' : path.startsWith('/bolgeler/') ? '0.8' : '0.6';
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .filter((p) => !p.noindex)
  .map((p) => `  <url><loc>${site.url}${p.path}</loc><lastmod>${today}</lastmod><priority>${priority(p.path)}</priority></url>`)
  .join('\n')}
</urlset>
`;
await writeFile(join(DIST, 'sitemap.xml'), sitemap);
await writeFile(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
await writeFile(
  join(DIST, 'site.webmanifest'),
  JSON.stringify(
    {
      name: site.name,
      short_name: 'Topçular',
      lang: 'tr',
      start_url: '/',
      display: 'standalone',
      background_color: '#FBF6EE',
      theme_color: '#B5401B',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    null,
    2
  )
);
// Apache (cPanel) için: 404 sayfası, sıkıştırma ve önbellek
await writeFile(
  join(DIST, '.htaccess'),
  `ErrorDocument 404 /404.html
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml application/xml text/plain
</IfModule>
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
`
);

console.log(`✔ ${pages.length} sayfa, ${Object.keys(meta).length} görsel üretildi → dist/  (${Date.now() - t0} ms)`);
