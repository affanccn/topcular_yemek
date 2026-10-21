import { site } from '../site.config.mjs';
import { services } from '../content/services.mjs';
import { regions } from '../content/regions.mjs';
import {
  esc, abs, icon, waIcon, logoImg, logoSvg, telHref, waHref, fullAddress, jsonLd,
  businessSchema, breadcrumbSchema, imgUrl,
} from './lib.mjs';

const areaNames = ['Gebze', 'Darıca', 'Çayırova', 'Dilovası', 'Tuzla', 'Kocaeli'];

/* ---------------- HEAD ---------------- */
function head(page) {
  const canonical = abs(page.path);
  const ogImage = page.ogImage || abs('/assets/img/og-image.jpg');
  return `<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>document.documentElement.classList.add('js')</script>
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">
<meta name="theme-color" content="#B5401B">
<meta name="author" content="${esc(site.name)}">
<meta name="geo.region" content="TR-41">
<meta name="geo.placename" content="Gebze, Kocaeli">
<meta name="geo.position" content="${site.geo.lat};${site.geo.lng}">
<meta name="ICBM" content="${site.geo.lat}, ${site.geo.lng}">
${site.googleSiteVerification ? `<meta name="google-site-verification" content="${esc(site.googleSiteVerification)}">` : ''}
<meta property="og:type" content="${page.path === '/' ? 'website' : 'article'}">
<meta property="og:locale" content="tr_TR">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${ogImage}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap">
${page.preloadImage ? `<link rel="preload" as="image" href="${page.preloadImage}" fetchpriority="high">` : ''}
<link rel="stylesheet" href="/assets/css/style.css?v=${page.version}">
${jsonLd(businessSchema(areaNames))}
${page.breadcrumbs ? jsonLd(breadcrumbSchema(page.breadcrumbs)) : ''}
${(page.schema || []).map(jsonLd).join('\n')}
</head>`;
}

/* ---------------- HEADER ---------------- */
function header(page) {
  const is = (p) => (page.path === p || (p !== '/' && page.path.startsWith(p)) ? ' aria-current="page"' : '');
  const serviceLinks = services
    .map((s) => `<li><a href="/hizmetler/${s.slug}/">${icon(s.icon)}<span>${esc(s.navTitle)}</span></a></li>`)
    .join('');
  const regionLinks = regions
    .map((r) => `<li><a href="/bolgeler/${r.slug}/">${icon('pin')}<span>${esc(r.name)} Toplu Yemek</span></a></li>`)
    .join('');

  return `<a class="skip-link" href="#icerik">İçeriğe geç</a>
<header class="site-header" id="site-header">
  <div class="container header-inner">
    <a class="logo" href="/" aria-label="${esc(site.name)} – Ana sayfa">
      ${logoImg(44)}
      <span class="logo-text"><strong>Topçular</strong><small>YEMEK · GEBZE</small></span>
    </a>
    <nav class="main-nav" id="main-nav" aria-label="Ana menü">
      <ul class="nav-list">
        <li><a href="/"${page.path === '/' ? ' aria-current="page"' : ''}>Ana Sayfa</a></li>
        <li class="has-sub">
          <a href="/hizmetler/"${is('/hizmetler/')}>Hizmetler ${icon('chevron', 'icon chev')}</a>
          <ul class="sub">${serviceLinks}</ul>
        </li>
        <li><a href="/menu/"${is('/menu/')}>Menü</a></li>
        <li class="has-sub">
          <a href="/bolgeler/"${is('/bolgeler/')}>Bölgeler ${icon('chevron', 'icon chev')}</a>
          <ul class="sub">${regionLinks}</ul>
        </li>
        <li><a href="/hakkimizda/"${is('/hakkimizda/')}>Hakkımızda</a></li>
        <li><a href="/iletisim/"${is('/iletisim/')}>İletişim</a></li>
      </ul>
      <div class="nav-cta-mobile">
        <a class="btn btn-primary" href="/iletisim/#teklif">Ücretsiz Teklif Al</a>
        <a class="btn btn-ghost" href="${telHref}">${icon('phone')} ${esc(site.phone)}</a>
      </div>
    </nav>
    <div class="header-actions">
      <a class="header-phone" href="${telHref}" aria-label="Telefonla arayın">${icon('phone')}<span>${esc(site.phone)}</span></a>
      <a class="btn btn-primary btn-sm" href="/iletisim/#teklif">Teklif Al</a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Menüyü aç" aria-expanded="false" aria-controls="main-nav">
        ${icon('menu', 'icon i-open')}${icon('close', 'icon i-close')}
      </button>
    </div>
  </div>
</header>`;
}

/* ---------------- BREADCRUMB (görünür) ---------------- */
export function breadcrumbNav(crumbs) {
  return `<nav class="breadcrumb" aria-label="Sayfa yolu"><ol>${crumbs
    .map((c, i) =>
      i === crumbs.length - 1
        ? `<li aria-current="page">${esc(c.name)}</li>`
        : `<li><a href="${c.path}">${esc(c.name)}</a></li>`
    )
    .join('')}</ol></nav>`;
}

/* ---------------- CTA BANDI ---------------- */
export function ctaBand(title = 'Yarın öğlen yemeğini biz getirelim.', text = 'Kişi sayınızı ve adresinizi iletin, aynı gün içinde size özel toplu yemek teklifimizi hazırlayalım.') {
  return `<section class="cta-band" aria-labelledby="cta-title">
  <div class="container cta-inner reveal">
    <div>
      <h2 id="cta-title">${esc(title)}</h2>
      <p>${esc(text)}</p>
    </div>
    <div class="cta-actions">
      <a class="btn btn-light" href="${telHref}">${icon('phone')} Hemen Ara</a>
      <a class="btn btn-wa" href="${waHref()}" target="_blank" rel="noopener">${waIcon()} WhatsApp’tan Yaz</a>
    </div>
  </div>
</section>`;
}

/* ---------------- FOOTER ---------------- */
function footer() {
  const year = new Date().getFullYear();
  const social = Object.entries(site.social)
    .filter(([, v]) => v)
    .map(([k, v]) => `<a href="${esc(v)}" target="_blank" rel="noopener">${k[0].toUpperCase() + k.slice(1)}</a>`)
    .join('');
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a class="logo logo-light" href="/" aria-label="${esc(site.name)} – Ana sayfa">${logoImg(52, 'logo-img logo-img-footer')}<span class="logo-text"><strong>Topçular</strong><small>YEMEK · GEBZE</small></span></a>
      <p>Gebze merkezli toplu yemek firması. Fabrika, ofis, şantiye ve organizasyonlara her gün taze pişen tabldot ve kazan yemek servisi.</p>
      ${social ? `<div class="footer-social">${social}</div>` : ''}
    </div>
    <div>
      <h3>Hizmetler</h3>
      <ul>${services.map((s) => `<li><a href="/hizmetler/${s.slug}/">${esc(s.navTitle)}</a></li>`).join('')}
        <li><a href="/menu/">Örnek Haftalık Menü</a></li></ul>
    </div>
    <div>
      <h3>Hizmet Bölgeleri</h3>
      <ul>${regions.map((r) => `<li><a href="/bolgeler/${r.slug}/">${esc(r.name)} Toplu Yemek</a></li>`).join('')}</ul>
    </div>
    <div>
      <h3>İletişim</h3>
      <address class="footer-contact">
        <a href="${esc(site.mapsUrl)}" target="_blank" rel="noopener">${icon('pin')}<span>${esc(fullAddress())}</span></a>
        <a href="${telHref}">${icon('phone')}<span>${esc(site.phone)}</span></a>
        ${site.altPhone ? `<a href="tel:${site.altPhoneIntl}">${icon('phone')}<span>${esc(site.altPhone)} (2. Hat)</span></a>` : ''}
        <a href="mailto:${esc(site.email)}">${icon('mail')}<span>${esc(site.email)}</span></a>
        ${site.hours.map((h) => `<span>${icon('clock')}<span>${esc(h.label)}: ${h.opens} – ${h.closes}</span></span>`).join('')}
      </address>
      <div class="footer-google-card">
        <a href="${esc(site.mapsUrl)}" target="_blank" rel="noopener" class="google-badge-link">
          <span class="stars">★★★★★</span>
          <strong>Google Haritalar İşletme Kaydı</strong>
          <small>Yol tarifi al &amp; Haritada aç ${icon('arrow')}</small>
        </a>
      </div>
    </div>
  </div>
  <div class="container footer-bottom">
    <p>© ${year} ${esc(site.legalName)}. Tüm hakları saklıdır.</p>
    <p>Gebze toplu yemek · Gebze tabldot yemek · Gebze fabrika yemeği · GOSB &amp; TOSB Catering</p>
  </div>
</footer>
<div class="float-actions" aria-label="Hızlı iletişim">
  <a class="float-btn float-call" href="${telHref}" aria-label="Telefonla ara">
    ${icon('phone')}
    <span class="float-tooltip">Ara: ${esc(site.phone)}</span>
  </a>
  <a class="float-btn float-wa" href="${waHref()}" target="_blank" rel="noopener" aria-label="WhatsApp’tan yazın">
    ${waIcon()}
    <span class="float-tooltip">WhatsApp Teklif Al</span>
  </a>
</div>`;
}

/* ---------------- TAM SAYFA ---------------- */
export function layout(page, body) {
  return `<!doctype html>
<html lang="tr">
${head(page)}
<body class="${page.bodyClass || ''}">
${header(page)}
<main id="icerik">
${body}
</main>
${footer()}
<script>window.SITE={wa:${JSON.stringify(site.whatsapp)}};</script>
<script src="/assets/js/main.js?v=${page.version}" defer></script>
</body>
</html>`;
}

export { imgUrl };
