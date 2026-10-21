import { site } from '../site.config.mjs';
import { images } from '../content/images.mjs';

/* ---------------- Genel yardımcılar ---------------- */

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const abs = (path = '/') => site.url + path;

export const telHref = `tel:${site.phoneIntl}`;

export const waHref = (text = 'Merhaba, toplu yemek siparişi için teklif almak istiyorum.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const fullAddress = () => {
  const a = site.address;
  return `${a.street}, ${a.postalCode} ${a.district} / ${a.city}`;
};

/* ---------------- Görseller ---------------- */

let imageMeta = {};
/** build.mjs, görselleri işledikten sonra boyut bilgilerini buraya verir. */
export const setImageMeta = (meta) => (imageMeta = meta);

/**
 * Duyarlı (srcset) ve lazy-load WebP görsel üretir.
 * @param {string} slot  content/images.mjs içindeki anahtar
 */
export function img(slot, alt, { sizes = '100vw', eager = false, cls = '', pos = '' } = {}) {
  const name = images[slot] || slot;
  const m = imageMeta[name];
  if (!m) throw new Error(`Görsel bulunamadı: ${slot} → ${name}`);
  const srcset = m.widths.map((w) => `/assets/img/${name}-${w}.webp ${w}w`).join(', ');
  const fallback = m.widths[Math.min(1, m.widths.length - 1)];
  const style = pos ? ` style="object-position:${pos}"` : '';
  return `<img src="/assets/img/${name}-${fallback}.webp" srcset="${srcset}" sizes="${sizes}" width="${m.width}" height="${m.height}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ''}${style} ${
    eager ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"'
  }>`;
}

export const imgUrl = (slot, w = 1200) => {
  const name = images[slot] || slot;
  const m = imageMeta[name];
  const width = m ? m.widths.filter((x) => x <= w).pop() || m.widths[0] : w;
  return abs(`/assets/img/${name}-${width}.webp`);
};

/* ---------------- İkonlar (inline SVG, harici istek yok) ---------------- */

const paths = {
  tray: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M12 5v14M2.5 12h9.5"/>',
  pot: '<path d="M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6Z"/><path d="M2 10h20M9 6c0-1 1-1.5 1-2.5M14 6c0-1 1-1.5 1-2.5"/>',
  factory: '<path d="M3 21V10l5 3V10l5 3V10l5 3V4h3v17H3Z"/><path d="M7 17h2M12 17h2M17 17h1"/>',
  celebration: '<path d="M4 20 9 7l8 8-13 5Z"/><path d="M14 4c1 1 1 2.5 0 3.5M18 8c1-1 2.5-1 3.5 0M17 3l.5 1.5M21 12l-1.5-.5"/>',
  leaf: '<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15Z"/><path d="M5 19 14 10"/>',
  truck: '<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chef: '<path d="M7 14a4 4 0 0 1-1-7.9A5 5 0 0 1 12 3a5 5 0 0 1 6 3.1A4 4 0 0 1 17 14v6H7v-6Z"/><path d="M7 17h10"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
  phone: '<path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  chat: '<path d="M4 5h16v11H8l-4 4V5Z"/><path d="M8 10h8M8 13h5"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
};

export const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ''}</svg>`;

export const waIcon = (cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z"/></svg>`;

/* ---------------- Logo ---------------- */

export const logoImg = (size = 46, cls = 'logo-img') =>
  `<img class="${cls}" src="/assets/logo.png" width="${size}" height="${size}" alt="Topçular Yemek Logo" loading="eager" decoding="async">`;

export const logoSvg = `<svg class="logo-mark" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="24" fill="var(--paprika)"/><path d="M12 24h24v5a7 7 0 0 1-7 7H19a7 7 0 0 1-7-7v-5Z" fill="#FFF6EA"/><path d="M9.5 24h29" stroke="#FFF6EA" stroke-width="2.4" stroke-linecap="round"/><path d="M19 19c0-2 2-2.6 2-4.6M24.5 19c0-2 2-2.6 2-4.6M30 19c0-2 2-2.6 2-4.6" stroke="#FFD58A" stroke-width="2" stroke-linecap="round" fill="none"/></svg>`;

/* ---------------- Schema.org (JSON-LD) ---------------- */

export const jsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

export const BUSINESS_ID = `${site.url}/#isletme`;

export function businessSchema(areaNames = []) {
  const sameAs = Object.values(site.social).filter(Boolean);
  if (site.mapsUrl) sameAs.push(site.mapsUrl);
  if (site.googleShareUrl) sameAs.push(site.googleShareUrl);
  return {
    '@context': 'https://schema.org',
    '@type': ['FoodEstablishment', 'LocalBusiness', 'CateringService'],
    '@id': BUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    slogan: site.slogan,
    description:
      'Topçular Yemek, Gebze merkezli toplu yemek ve tabldot firmasıdır. Fabrikalara, organize sanayi bölgelerine (GOSB, TOSB, Dilovası İMES, GEPOSB), ofis ve şantiyelere günlük taze tabldot, kazan yemek ve kurumsal catering servisi sunar.',
    url: site.url + '/',
    image: imgUrl('hero', 1600),
    logo: abs('/assets/logo.png'),
    telephone: site.phoneIntl,
    email: site.email,
    priceRange: '₺₺',
    currenciesAccepted: 'TRY',
    paymentAccepted: 'Nakit, Havale/EFT, Kurumsal Fatura',
    servesCuisine: ['Türk Mutfağı', 'Ev Yemekleri', 'Tabldot Yemek', 'Toplu Yemek', 'Catering'],
    acceptsReservations: false,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
    openingHoursSpecification: site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: areaNames.map((n) => ({ '@type': 'Place', name: n })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '48',
      bestRating: '5',
      worstRating: '1',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 22000:2018 Gıda Güvenliği Yönetim Sistemi',
        credentialCategory: 'certificate',
        url: abs('/belgeler/topcular-yemek-iso-22000-2018.pdf'),
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 9001:2015 Kalite Yönetim Sistemi',
        credentialCategory: 'certificate',
        url: abs('/belgeler/topcular-yemek-iso-9001-2015.pdf'),
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 45001:2018 İş Sağlığı ve Güvenliği Yönetim Sistemi',
        credentialCategory: 'certificate',
        url: abs('/belgeler/topcular-yemek-iso-45001-2018.pdf'),
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Gebze Toplu Yemek ve Catering Hizmetleri',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gebze Tabldot Yemek Servisi',
            description: 'Günlük 4 çeşit taze, kalori ve besin değeri dengeli kurumsal tabldot yemek servisi.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Taşımalı / Kazan Yemek Servisi',
            description: 'Isı yalıtımlı termobox kaplarla 70°C+ sıcak teslimat garantili dökme yemekhane servisi.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fabrika & OSB Kurumsal Yemekhane Hizmeti',
            description: 'Vardiyalı üretim tesislerine, OSB fabrikalarına zamanında ve kesintisiz sıcak yemek servisi.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Düğün, Davet, Mevlüt & Organizasyon Yemeği',
            description: 'Açık büfe, çafing dish ve porsiyon menü seçenekleriyle toplu davet yemeği hizmeti.',
          },
        },
      ],
    },
    sameAs,
  };
}

export const breadcrumbSchema = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});

export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceSchema = ({ name, description, path, area = 'Gebze', image }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  name,
  description,
  url: abs(path),
  image,
  provider: { '@id': BUSINESS_ID },
  areaServed: { '@type': 'City', name: area },
});
