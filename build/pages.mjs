import { site } from '../site.config.mjs';
import { services } from '../content/services.mjs';
import { regions } from '../content/regions.mjs';
import { weeklyMenus, menuTypes } from '../content/menu.mjs';
import { faq } from '../content/faq.mjs';
import { layout, breadcrumbNav, ctaBand } from './layout.mjs';
import {
  esc, img, imgUrl, icon, waIcon, telHref, waHref, fullAddress,
  faqSchema, serviceSchema, abs,
} from './lib.mjs';

/* =========================================================
   ORTAK BİLEŞENLER
   ========================================================= */

const sectionHead = (eyebrow, title, text = '', id = '') => `
  <header class="section-head reveal">
    <span class="eyebrow">${esc(eyebrow)}</span>
    <h2${id ? ` id="${id}"` : ''}>${title}</h2>
    ${text ? `<p>${esc(text)}</p>` : ''}
  </header>`;

const serviceCards = (list = services, headingLevel = 3) => `
  <div class="service-grid">
    ${list
      .map(
        (s, i) => `
    <article class="service-card reveal" style="--d:${i * 80}ms">
      <a href="/hizmetler/${s.slug}/" class="service-media" tabindex="-1" aria-hidden="true">
        ${img(s.image, s.imageAlt, { sizes: '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw' })}
      </a>
      <div class="service-body">
        <span class="service-icon">${icon(s.icon)}</span>
        <h${headingLevel}><a href="/hizmetler/${s.slug}/">${esc(s.cardTitle)}</a></h${headingLevel}>
        <p>${esc(s.cardText)}</p>
        <a class="link-arrow" href="/hizmetler/${s.slug}/" aria-label="${esc(s.cardTitle)} hakkında detaylı bilgi">Detaylı bilgi ${icon('arrow')}</a>
      </div>
    </article>`
      )
      .join('')}
  </div>`;

const faqList = (items) => `
  <div class="faq-list">
    ${items
      .map(
        (f, i) => `
    <details class="faq-item reveal"${i === 0 ? ' open' : ''}>
      <summary><h3>${esc(f.q)}</h3><span class="faq-plus" aria-hidden="true"></span></summary>
      <div class="faq-answer"><p>${esc(f.a)}</p></div>
    </details>`
      )
      .join('')}
  </div>`;

const regionChips = (current = '') => `
  <ul class="chip-list">
    ${regions
      .filter((r) => r.slug !== current)
      .map((r) => `<li><a class="chip" href="/bolgeler/${r.slug}/">${icon('pin')} ${esc(r.name)} Toplu Yemek</a></li>`)
      .join('')}
  </ul>`;

const checkList = (items) =>
  `<ul class="check-list">${items.map((t) => `<li>${icon('check')}<span>${esc(t)}</span></li>`).join('')}</ul>`;

const heroButtons = () => `
  <div class="btn-row">
    <a class="btn btn-primary btn-lg" href="/iletisim/#teklif">Ücretsiz Teklif Al ${icon('arrow')}</a>
    <a class="btn btn-wa btn-lg" href="${waHref()}" target="_blank" rel="noopener">${waIcon()} WhatsApp</a>
  </div>`;

const menuTabs = (week, idPrefix = 'gun') => `
  <div class="menu-tabs" data-tabs>
    <div class="tab-list" role="tablist" aria-label="${esc(week.title)} günleri">
      ${week.days
        .map(
          (d, i) =>
            `<button role="tab" id="${idPrefix}-tab-${i}" aria-controls="${idPrefix}-panel-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-day="${i}">${esc(d.day)}</button>`
        )
        .join('')}
    </div>
    ${week.days
      .map(
        (d, i) => `
    <div class="tab-panel" role="tabpanel" id="${idPrefix}-panel-${i}" aria-labelledby="${idPrefix}-tab-${i}"${i === 0 ? '' : ' hidden'}>
      <ol class="menu-courses">
        ${d.items
          .map(
            (it, j) =>
              `<li><span class="course-no">0${j + 1}</span><span class="course-name">${esc(it)}</span><span class="course-type">${['Çorba', 'Ana Yemek', 'Yardımcı', 'Salata / Tatlı'][j] || ''}</span></li>`
          )
          .join('')}
      </ol>
    </div>`
      )
      .join('')}
  </div>`;

const pageHero = ({ crumbs, h1, lead, image, imageAlt, kicker }) => `
  <section class="page-hero">
    <div class="container page-hero-grid">
      <div class="page-hero-copy">
        ${breadcrumbNav(crumbs)}
        ${kicker ? `<span class="eyebrow">${esc(kicker)}</span>` : ''}
        <h1>${esc(h1)}</h1>
        <p class="lead">${esc(lead)}</p>
        ${heroButtons()}
      </div>
      ${
        image
          ? `<div class="page-hero-media">${img(image, imageAlt, { eager: true, sizes: '(max-width: 900px) 100vw, 45vw' })}</div>`
          : ''
      }
    </div>
  </section>`;

const quoteCard = () => `
  <aside class="quote-card">
    <h3>Hızlı teklif alın</h3>
    <p>Kişi sayısı ve adresinizi iletin, aynı gün dönüş yapalım.</p>
    <a class="btn btn-primary btn-block" href="${telHref}">${icon('phone')} ${esc(site.phone)}</a>
    <a class="btn btn-wa btn-block" href="${waHref()}" target="_blank" rel="noopener">${waIcon()} WhatsApp’tan Yaz</a>
    <a class="btn btn-ghost btn-block" href="/iletisim/#teklif">Teklif formunu doldur</a>
  </aside>`;

/* =========================================================
   SAYFALAR
   ========================================================= */

export function buildPages(version) {
  const pages = [];
  const add = (meta, body) => pages.push({ path: meta.path, html: layout({ ...meta, version }, body), noindex: meta.noindex });

  /* ---------------- ANA SAYFA ---------------- */
  const week = weeklyMenus[0];
  const today = week.days[0];
  add(
    {
      path: '/',
      title: 'Gebze Toplu Yemek Siparişi | Tabldot & Fabrika Yemeği – Topçular Yemek',
      description:
        'Gebze toplu yemek siparişi için Topçular Yemek: fabrika, ofis ve şantiyelere her gün taze pişen tabldot ve kazan yemek servisi. Darıca, Çayırova, Dilovası ve OSB’lere teslimat. Hemen teklif alın.',
      bodyClass: 'home',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${site.url}/#website`,
          url: site.url + '/',
          name: site.name,
          inLanguage: 'tr-TR',
          publisher: { '@id': `${site.url}/#isletme` },
        },
        faqSchema(faq.slice(0, 6)),
      ],
    },
    `
  <section class="hero">
    <div class="hero-bg" aria-hidden="true"></div>
    <div class="container hero-grid">
      <div class="hero-copy">
        <div class="live-status"><span class="live-dot" aria-hidden="true"></span><span>Bugün Gebze &amp; OSB bölgelerine sevkiyat aktif</span></div>
        <span class="eyebrow eyebrow-pill">${icon('pin')} Gebze · Darıca · Çayırova · Dilovası</span>
        <h1>
          <span class="h1-kicker">Gebze Toplu Yemek &amp; Tabldot Siparişi</span>
          Her gün taze, <em>ev lezzetinde</em> yemek işyerinize geliyor.
        </h1>
        <p class="lead">Fabrikalara, ofislere ve şantiyelere kazanda pişen, tabakla servis edilen doyurucu tabldot yemekler. Mutfağımız Gebze’de; yemeğiniz sıcak ve tam zamanında.</p>
        ${heroButtons()}
        <ul class="hero-trust">
          <li>${icon('leaf')} Günlük taze üretim</li>
          <li>${icon('shield')} Hijyenik mutfak</li>
          <li>${icon('truck')} Zamanında teslimat</li>
        </ul>
      </div>
      <div class="hero-visual">
        <div class="hero-img-wrap">
          ${img('hero', 'Gebze toplu yemek: Sıcak servis büfesinde taze pişen köfte, pilav ve sulu yemek çeşitleri', { eager: true, sizes: '(max-width: 900px) 100vw, 55vw' })}
          <span class="steam s1" aria-hidden="true"></span><span class="steam s2" aria-hidden="true"></span><span class="steam s3" aria-hidden="true"></span>
        </div>
        <div class="float-card card-menu" data-today-menu="${esc(JSON.stringify(week.days.map((d) => d.items)))}">
          <span class="fc-label">${icon('calendar')} Bugünün menüsü</span>
          <ul>${today.items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
        </div>
        <div class="float-card card-badge">
          <span class="badge-icon">${icon('clock')}</span>
          <span><strong>Vardiyanıza göre</strong><small>planlı, dakik teslimat</small></span>
        </div>
      </div>
    </div>
  </section>

  ${
    site.stats.length
      ? `<section class="stats" aria-label="Rakamlarla Topçular Yemek">
    <div class="container stats-grid">
      ${site.stats.map((s) => `<div class="stat reveal"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}
    </div>
  </section>`
      : ''
  }

  <div class="marquee-band" aria-label="Hizmet ve sevkiyat bilgileri">
    <div class="marquee-track">
      <div class="marquee-content">
        <span class="highlight">⚡ GÜNLÜK SICAK SEVKİYAT</span>
        <span class="dot"></span>
        <span>GEBZE ORGANİZE SANAYİ BÖLGESİ (GOSB)</span>
        <span class="dot"></span>
        <span>GÜZELLER OSB</span>
        <span class="dot"></span>
        <span>TOSB OTOMOTİV İHTİSAS</span>
        <span class="dot"></span>
        <span>DİLOVASI İMES OSB</span>
        <span class="dot"></span>
        <span>GEPOSB</span>
        <span class="dot"></span>
        <span class="highlight">🍱 4 ÇEŞİT DENGELİ TABLDOT</span>
        <span class="dot"></span>
        <span>🍲 TAŞIMALI KAZAN SERVİSİ</span>
        <span class="dot"></span>
        <span>🚚 ISITMALI TERMOBOX SEVKİYAT</span>
        <span class="dot"></span>
        <span class="highlight">🛡️ ISO 22000 GIDA GÜVENLİĞİ</span>
        <span class="dot"></span>
        <span>⏱️ VARDİYA SAATİNE DAKİK TESLİMAT</span>
      </div>
      <div class="marquee-content" aria-hidden="true">
        <span class="highlight">⚡ GÜNLÜK SICAK SEVKİYAT</span>
        <span class="dot"></span>
        <span>GEBZE ORGANİZE SANAYİ BÖLGESİ (GOSB)</span>
        <span class="dot"></span>
        <span>GÜZELLER OSB</span>
        <span class="dot"></span>
        <span>TOSB OTOMOTİV İHTİSAS</span>
        <span class="dot"></span>
        <span>DİLOVASI İMES OSB</span>
        <span class="dot"></span>
        <span>GEPOSB</span>
        <span class="dot"></span>
        <span class="highlight">🍱 4 ÇEŞİT DENGELİ TABLDOT</span>
        <span class="dot"></span>
        <span>🍲 TAŞIMALI KAZAN SERVİSİ</span>
        <span class="dot"></span>
        <span>🚚 ISITMALI TERMOBOX SEVKİYAT</span>
        <span class="dot"></span>
        <span class="highlight">🛡️ ISO 22000 GIDA GÜVENLİĞİ</span>
        <span class="dot"></span>
        <span>⏱️ VARDİYA SAATİNE DAKİK TESLİMAT</span>
      </div>
    </div>
  </div>

  <section class="section" id="hizmetler" aria-labelledby="hizmetler-baslik">
    <div class="container">
      ${sectionHead('Hizmetlerimiz', 'İşletmenize uygun <em>toplu yemek</em> çözümü', 'İster 20 kişilik bir atölye, ister yüzlerce çalışanı olan bir fabrika olsun; ihtiyacınıza göre servis modeli kuruyoruz.', 'hizmetler-baslik')}
      ${serviceCards()}
    </div>
  </section>

  <section class="section section-cream" aria-labelledby="neden-baslik">
    <div class="container split">
      <div class="split-media reveal">
        ${img('mutfak', 'Topçular Yemek endüstriyel mutfağında aşçıbaşı günlük menü hazırlığını kontrol ediyor', { sizes: '(max-width: 900px) 100vw, 50vw' })}
        <div class="media-badge">${icon('chef')}<span><strong>Her sabah</strong> taze pişirilir</span></div>
      </div>
      <div class="split-copy">
        ${sectionHead('Neden Topçular Yemek?', 'Annenizin yemeği gibi, <em>fabrika düzeninde</em>', 'Lezzeti ev yemeği, disiplini kurumsal. Çalışanlarınızın her gün dört gözle beklediği öğle arası için çalışıyoruz.', 'neden-baslik')}
        <div class="feature-list">
          <div class="feature reveal"><span class="feature-icon">${icon('leaf')}</span><div><h3>Günlük taze malzeme</h3><p>Sebze, et ve bakliyat her gün taze alınır; dondurulmuş hazır yemek kullanmayız.</p></div></div>
          <div class="feature reveal"><span class="feature-icon">${icon('shield')}</span><div><h3>Hijyen önceliğimiz</h3><p>Mutfak, ekipman ve taşıma kapları her gün hijyen kurallarına göre temizlenir.</p></div></div>
          <div class="feature reveal"><span class="feature-icon">${icon('truck')}</span><div><h3>Sıcak ve zamanında</h3><p>Isı yalıtımlı kaplar ve planlı rota ile yemeğiniz tam servis saatinde, sıcak gelir.</p></div></div>
          <div class="feature reveal"><span class="feature-icon">${icon('users')}</span><div><h3>Doyurucu porsiyon</h3><p>Ağır işte çalışan personelin ihtiyacını bilen, kimseyi aç bırakmayan porsiyonlar.</p></div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="menu-baslik">
    <div class="container menu-section">
      <div class="menu-intro">
        ${sectionHead('Örnek Haftalık Menü', 'Bu hafta <em>mutfağımızda</em> neler var?', 'Menülerimiz aylık planlanır; etli, tavuklu, bakliyat ve zeytinyağlılar dengeli dağıtılır.', 'menu-baslik')}
        <a class="btn btn-ghost reveal" href="/menu/">Tüm menüleri gör ${icon('arrow')}</a>
      </div>
      <div class="menu-card reveal">${menuTabs(week, 'ana')}</div>
    </div>
  </section>

  <section class="section section-dark" aria-labelledby="surec-baslik">
    <div class="container">
      ${sectionHead('Nasıl Çalışıyoruz?', '4 adımda <em>yemek derdine</em> son', '', 'surec-baslik')}
      <ol class="steps">
        <li class="step reveal" style="--d:0ms"><span class="step-no">01</span><h3>Bize ulaşın</h3><p>Telefon veya WhatsApp’tan kişi sayınızı ve adresinizi iletin.</p></li>
        <li class="step reveal" style="--d:90ms"><span class="step-no">02</span><h3>Teklif & menü</h3><p>Size özel fiyat ve aylık menü planını birlikte hazırlayalım.</p></li>
        <li class="step reveal" style="--d:180ms"><span class="step-no">03</span><h3>Taze üretim</h3><p>Yemekler her sabah mutfağımızda taze malzemeyle pişirilir.</p></li>
        <li class="step reveal" style="--d:270ms"><span class="step-no">04</span><h3>Sıcak teslimat</h3><p>Isı yalıtımlı kaplarla tam servis saatinde kapınızdayız.</p></li>
      </ol>
    </div>
  </section>

  <section class="section" aria-labelledby="bolge-baslik">
    <div class="container regions-block">
      ${sectionHead('Hizmet Bölgelerimiz', 'Gebze ve çevresine <em>her gün</em> servis', 'Mutfağımız Gebze’de. Kısa mesafe = sıcak yemek, dakik teslimat.', 'bolge-baslik')}
      <div class="reveal">${regionChips()}</div>
    </div>
  </section>

  <section class="section section-cream" aria-labelledby="seo-baslik">
    <div class="container prose-wrap">
      <div class="prose reveal">
        <h2 id="seo-baslik">Gebze’de güvenilir bir toplu yemek firması arıyorsanız</h2>
        <p><strong>Gebze toplu yemek</strong> denince akla gelen en önemli şey; yemeğin her gün aynı kalitede, doyurucu ve zamanında gelmesidir. Topçular Yemek olarak Gebze merkezli mutfağımızda her sabah taze malzemeyle pişirdiğimiz yemekleri fabrikalara, ofislere, okullara ve şantiyelere ulaştırıyoruz.</p>
        <p><a href="/hizmetler/tabldot-yemek/">Tabldot yemek</a>, <a href="/hizmetler/kazan-yemek-servisi/">kazan (taşımalı) yemek</a>, <a href="/hizmetler/fabrika-yemek/">fabrika ve kurumsal yemek</a> ile <a href="/hizmetler/organizasyon-yemek/">organizasyon yemeği</a> hizmetlerimizle; <a href="/bolgeler/gebze-toplu-yemek/">Gebze</a>, <a href="/bolgeler/darica-toplu-yemek/">Darıca</a>, <a href="/bolgeler/cayirova-toplu-yemek/">Çayırova</a>, <a href="/bolgeler/dilovasi-toplu-yemek/">Dilovası</a> ve <a href="/bolgeler/gebze-osb-yemek/">organize sanayi bölgelerindeki</a> işletmelerin toplu yemek siparişlerini karşılıyoruz. Dükkânımızda yerinde yemek servisi bulunmaz; tüm gücümüzü toplu yemek üretimine ve servisine veriyoruz.</p>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="yorumlar-baslik">
    <div class="container">
      ${sectionHead('Müşteri Deneyimleri', 'Gebze sanayisinin <em>tercih ettiği</em> lezzet', 'GOSB, TOSB ve Dilovası OSB bölgelerindeki işletmelerin Topçular Yemek hakkındaki değerlendirmeleri.', 'yorumlar-baslik')}
      <div class="reviews-grid">
        <article class="review-card reveal" style="--d:0ms">
          <div class="review-stars">★★★★★</div>
          <p class="review-text">“GOSB’daki 140 kişilik fabrikamız için Topçular Yemek ile çalışıyoruz. Hem yemekler ev usulü taze ve lezzetli hem de vardiya mola saatinde 1 dakika bile aksamadı. Ustalarımız da ofis kadromuz da çok memnun.”</p>
          <div class="review-author">
            <div class="review-avatar">AK</div>
            <div class="review-meta">
              <strong>Ahmet K.</strong>
              <span>Üretim Müdürü · GOSB / Gebze</span>
            </div>
          </div>
        </article>
        <article class="review-card reveal" style="--d:100ms">
          <div class="review-stars">★★★★★</div>
          <p class="review-text">“Darıca ve Çayırova’daki şantiyelerimize her gün sıcacık kazan yemeği ulaştırıyorlar. Termobox kaplar sayesinde yemek ilk piştiği sıcaklıkta geliyor, porsiyonlar ağır iş yapan personele tam yetiyor.”</p>
          <div class="review-author">
            <div class="review-avatar">MT</div>
            <div class="review-meta">
              <strong>Mustafa T.</strong>
              <span>Şantiye Şefi · Çayırova</span>
            </div>
          </div>
        </article>
        <article class="review-card reveal" style="--d:200ms">
          <div class="review-stars">★★★★★</div>
          <p class="review-text">“Şirketimizin 350 kişilik yıllık organizasyonunda ve mevlit davetimizde açık büfe sıcak yemek organizasyonunu üstlendiler. Çafing dish büfe sunumu ve servis ekibiyle dört dörtlük bir iş çıkardılar.”</p>
          <div class="review-author">
            <div class="review-avatar">SD</div>
            <div class="review-meta">
              <strong>Serkan D.</strong>
              <span>İdari İşler Müdürü · Dilovası OSB</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section section-cream" aria-labelledby="sss-baslik">
    <div class="container faq-wrap">
      ${sectionHead('Sık Sorulan Sorular', 'Toplu yemek siparişi hakkında <em>merak edilenler</em>', '', 'sss-baslik')}
      ${faqList(faq.slice(0, 6))}
      <p class="center reveal"><a class="link-arrow" href="/sss/">Tüm soruları gör ${icon('arrow')}</a></p>
    </div>
  </section>

  ${ctaBand()}
  `
  );

  /* ---------------- HİZMETLER (liste) ---------------- */
  add(
    {
      path: '/hizmetler/',
      title: 'Toplu Yemek Hizmetleri | Gebze Tabldot, Kazan ve Fabrika Yemeği – Topçular Yemek',
      description:
        'Topçular Yemek’in Gebze’deki toplu yemek hizmetleri: tabldot yemek, kazan (taşımalı) yemek, fabrika & kurumsal yemek ve organizasyon yemeği. İşletmenize uygun çözüm için teklif alın.',
      breadcrumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Hizmetler', path: '/hizmetler/' }],
    },
    `
  ${pageHero({
    crumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Hizmetler', path: '/hizmetler/' }],
    kicker: 'Hizmetlerimiz',
    h1: 'Gebze Toplu Yemek Hizmetlerimiz',
    lead: 'Tabldottan kazan servisine, fabrika yemeğinden organizasyonlara; işletmenizin ihtiyacına göre esnek toplu yemek çözümleri.',
    image: 'kazan',
    imageAlt: 'Gebze toplu yemek hizmetleri: kazanlarda pişen sıcak yemekler',
  })}
  <section class="section">
    <div class="container">${serviceCards(services, 2)}</div>
  </section>
  ${ctaBand()}
  `
  );

  /* ---------------- HİZMET DETAY ---------------- */
  for (const s of services) {
    const path = `/hizmetler/${s.slug}/`;
    const crumbs = [
      { name: 'Ana Sayfa', path: '/' },
      { name: 'Hizmetler', path: '/hizmetler/' },
      { name: s.navTitle, path },
    ];
    add(
      {
        path,
        title: s.metaTitle,
        description: s.metaDesc,
        breadcrumbs: crumbs,
        ogImage: imgUrl(s.image, 1200),
        schema: [
          serviceSchema({ name: s.h1, description: s.metaDesc, path, image: imgUrl(s.image, 1200) }),
          faqSchema(s.faq),
        ],
      },
      `
  ${pageHero({ crumbs, kicker: s.navTitle, h1: s.h1, lead: s.lead, image: s.image, imageAlt: s.imageAlt })}
  <section class="section">
    <div class="container content-grid">
      <article class="prose reveal">
        ${s.body.map((p) => `<p>${esc(p)}</p>`).join('')}
        <h2>Bu hizmete neler dahil?</h2>
        ${checkList(s.features)}
      </article>
      ${quoteCard()}
    </div>
  </section>
  <section class="section section-cream">
    <div class="container faq-wrap">
      ${sectionHead('Sık Sorulan Sorular', `${esc(s.navTitle)} hakkında`)}
      ${faqList(s.faq)}
    </div>
  </section>
  <section class="section">
    <div class="container">
      ${sectionHead('Diğer Hizmetlerimiz', 'Size uygun <em>diğer çözümler</em>')}
      ${serviceCards(services.filter((x) => x.slug !== s.slug))}
    </div>
  </section>
  <section class="section section-cream">
    <div class="container regions-block">
      ${sectionHead('Hizmet Bölgeleri', `${esc(s.navTitle)} servisi verdiğimiz bölgeler`)}
      ${regionChips()}
    </div>
  </section>
  ${ctaBand()}
  `
    );
  }

  /* ---------------- BÖLGELER (liste) ---------------- */
  add(
    {
      path: '/bolgeler/',
      title: 'Hizmet Bölgeleri | Gebze, Darıca, Çayırova, Dilovası Toplu Yemek – Topçular Yemek',
      description:
        'Topçular Yemek; Gebze, Darıca, Çayırova, Dilovası, Tuzla ve GOSB, TOSB, Dilovası OSB gibi organize sanayi bölgelerine toplu yemek ve tabldot servisi yapar.',
      breadcrumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Bölgeler', path: '/bolgeler/' }],
    },
    `
  ${pageHero({
    crumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Bölgeler', path: '/bolgeler/' }],
    kicker: 'Hizmet Bölgeleri',
    h1: 'Toplu Yemek Servis Bölgelerimiz',
    lead: 'Gebze’deki mutfağımızdan çıkan yemekler, kısa mesafeler sayesinde çevre ilçelere ve sanayi bölgelerine sıcak olarak ulaşır.',
    image: 'tabldot',
    imageAlt: 'Gebze ve çevresine servis edilen tabldot toplu yemek',
  })}
  <section class="section">
    <div class="container region-grid">
      ${regions
        .map(
          (r, i) => `
      <a class="region-card reveal" style="--d:${i * 60}ms" href="/bolgeler/${r.slug}/">
        <span class="region-pin">${icon('pin')}</span>
        <h2>${esc(r.name)} Toplu Yemek</h2>
        <p>${esc(r.lead)}</p>
        <span class="link-arrow">Bölge detayları ${icon('arrow')}</span>
      </a>`
        )
        .join('')}
    </div>
  </section>
  ${ctaBand()}
  `
  );

  /* ---------------- BÖLGE DETAY ---------------- */
  for (const r of regions) {
    const path = `/bolgeler/${r.slug}/`;
    const crumbs = [
      { name: 'Ana Sayfa', path: '/' },
      { name: 'Bölgeler', path: '/bolgeler/' },
      { name: `${r.name} Toplu Yemek`, path },
    ];
    const areaName = r.name.replace(/ OSB’ler$/, '');
    add(
      {
        path,
        title: r.metaTitle,
        description: r.metaDesc,
        breadcrumbs: crumbs,
        schema: [
          serviceSchema({ name: r.h1, description: r.metaDesc, path, area: areaName, image: imgUrl('hero', 1200) }),
          faqSchema(r.faq),
        ],
      },
      `
  ${pageHero({ crumbs, kicker: `${r.name} · Toplu Yemek`, h1: r.h1, lead: r.lead, image: r.slug.includes('osb') || r.slug.includes('dilovasi') ? 'kazan' : 'tabldot', imageAlt: `${r.name} toplu yemek siparişi – Topçular Yemek` })}
  <section class="section">
    <div class="container content-grid">
      <article class="prose reveal">
        ${r.body.map((p) => `<p>${esc(p)}</p>`).join('')}
        <h2>${esc(r.name)} bölgesinde servis verdiğimiz noktalar</h2>
        <ul class="place-list">${r.places.map((p) => `<li>${icon('pin')} ${esc(p)}</li>`).join('')}</ul>
      </article>
      ${quoteCard()}
    </div>
  </section>
  <section class="section section-cream">
    <div class="container">
      ${sectionHead(`${r.name} için hizmetlerimiz`, `${esc(r.name)} bölgesinde <em>sunduğumuz hizmetler</em>`)}
      ${serviceCards()}
    </div>
  </section>
  <section class="section">
    <div class="container faq-wrap">
      ${sectionHead('Sık Sorulan Sorular', `${esc(r.name)} toplu yemek hakkında`)}
      ${faqList(r.faq)}
    </div>
  </section>
  <section class="section section-cream">
    <div class="container regions-block">
      ${sectionHead('Diğer Bölgeler', 'Servis verdiğimiz <em>diğer bölgeler</em>')}
      ${regionChips(r.slug)}
    </div>
  </section>
  ${ctaBand(`${r.name} için toplu yemek teklifi alın.`)}
  `
    );
  }

  /* ---------------- MENÜ ---------------- */
  add(
    {
      path: '/menu/',
      title: 'Örnek Haftalık Tabldot Menüsü | Gebze Toplu Yemek – Topçular Yemek',
      description:
        'Topçular Yemek örnek haftalık tabldot menüsü: çorba, ana yemek, yardımcı yemek ve tatlı/salatadan oluşan dengeli toplu yemek menüleri. Gebze’de fabrika ve ofislere servis.',
      breadcrumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Menü', path: '/menu/' }],
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Menu',
          name: 'Topçular Yemek Örnek Haftalık Tabldot Menüsü',
          inLanguage: 'tr',
          hasMenuSection: weeklyMenus.map((w) => ({
            '@type': 'MenuSection',
            name: w.title,
            hasMenuItem: w.days.flatMap((d) => d.items.map((it) => ({ '@type': 'MenuItem', name: `${it} (${d.day})` }))),
          })),
        },
      ],
    },
    `
  ${pageHero({
    crumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Menü', path: '/menu/' }],
    kicker: 'Menülerimiz',
    h1: 'Örnek Haftalık Tabldot Menüsü',
    lead: 'Her gün 4 çeşit: çorba, ana yemek, yardımcı yemek ve salata/tatlı. Menüler aylık planlanır, firmanızın isteğine göre şekillenir.',
    image: 'bufe',
    imageAlt: 'Topçular Yemek sıcak büfesinde etli ana yemekler, pilav ve garnitürler',
  })}
  <section class="section">
    <div class="container">
      ${sectionHead('Menü Seçenekleri', 'Her ihtiyaca <em>bir menü</em>')}
      <div class="type-grid">
        ${menuTypes.map((t, i) => `<div class="type-card reveal" style="--d:${i * 70}ms"><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>`).join('')}
      </div>
    </div>
  </section>
  <section class="section section-cream">
    <div class="container week-grid">
      ${weeklyMenus
        .map(
          (w, wi) => `
      <div class="menu-card reveal">
        <h2 class="menu-card-title">${esc(w.title)}</h2>
        ${menuTabs(w, `hafta${wi + 1}`)}
      </div>`
        )
        .join('')}
    </div>
    <p class="container note">* Menüler örnektir. Mevsime, malzeme durumuna ve firmanızın tercihlerine göre değişiklik gösterebilir.</p>
  </section>
  ${ctaBand('Menünüzü birlikte planlayalım.')}
  `
  );

  /* ---------------- HAKKIMIZDA ---------------- */
  add(
    {
      path: '/hakkimizda/',
      title: 'Hakkımızda | Gebze Toplu Yemek Firması – Topçular Yemek',
      description:
        'Topçular Yemek; Gebze merkezli, işletmelere toplu yemek, tabldot ve kazan yemek servisi yapan yerel yemek firmasıdır. Mutfağımızı, değerlerimizi ve çalışma şeklimizi tanıyın.',
      breadcrumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Hakkımızda', path: '/hakkimizda/' }],
    },
    `
  ${pageHero({
    crumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Hakkımızda', path: '/hakkimizda/' }],
    kicker: 'Hakkımızda',
    h1: 'Gebze’nin Toplu Yemek Mutfağı: Topçular Yemek',
    lead: 'Biz bir restoran değiliz; tüm enerjimizi işletmelerin her gün güvenle yiyebileceği toplu yemeği üretmeye veriyoruz.',
    image: 'kalite',
    imageAlt: 'Topçular Yemek kurumsal standartları: Günlük taze üretim, hijyenik mutfak, termobox sıcak sevkiyat ve zamanında teslimat',
  })}
  <section class="section">
    <div class="container content-grid">
      <article class="prose reveal">
        <h2>Hikâyemiz</h2>
        <p>Topçular Yemek, Gebze’de işletmelere toplu yemek hizmeti vermek amacıyla kuruldu. Dükkânımızda yerinde yemek servisi bulunmuyor; çünkü odağımız tamamen fabrikalara, ofislere, şantiyelere ve organizasyonlara her gün sıcak, taze ve doyurucu yemek ulaştırmak.</p>
        <p>Mutfağımızda her sabah erken saatlerde başlayan üretim, yemeklerin kazanlarda ev usulü pişirilmesi ve ısı yalıtımlı kaplarla zamanında yola çıkmasıyla devam ediyor. Yemeklerimizi tabakla servis ya da kazan servis olarak sunuyoruz.</p>
        <h2>Değerlerimiz</h2>
        ${checkList([
          'Lezzet: Ev yemeği tadından ödün vermeden toplu üretim',
          'Tazelik: Her gün taze malzeme, her gün taze pişirme',
          'Hijyen: Mutfaktan teslimata kadar temizlik disiplini',
          'Dakiklik: Vardiya ve mola saatinize tam uyum',
          'Şeffaflık: Net fiyat, net menü, hızlı iletişim',
        ])}
      </article>
      ${quoteCard()}
    </div>
  </section>
  ${ctaBand()}
  `
  );

  /* ---------------- SSS ---------------- */
  add(
    {
      path: '/sss/',
      title: 'Sık Sorulan Sorular | Gebze Toplu Yemek Siparişi – Topçular Yemek',
      description:
        'Gebze toplu yemek siparişi hakkında sık sorulan sorular: minimum kişi sayısı, fiyatlandırma, servis bölgeleri, tabldot ve kazan yemek farkı, menüler ve teslimat.',
      breadcrumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Sık Sorulan Sorular', path: '/sss/' }],
      schema: [faqSchema(faq)],
    },
    `
  <section class="page-hero page-hero-simple">
    <div class="container">
      ${breadcrumbNav([{ name: 'Ana Sayfa', path: '/' }, { name: 'Sık Sorulan Sorular', path: '/sss/' }])}
      <h1>Toplu Yemek Siparişi – Sık Sorulan Sorular</h1>
      <p class="lead">Aklınıza takılan soru burada yoksa bize telefon veya WhatsApp üzerinden ulaşın.</p>
    </div>
  </section>
  <section class="section">
    <div class="container faq-wrap">${faqList(faq)}</div>
  </section>
  ${ctaBand()}
  `
  );

  /* ---------------- İLETİŞİM ---------------- */
  const mapSrc = `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=15&output=embed`;
  add(
    {
      path: '/iletisim/',
      title: 'İletişim & Teklif Al | Gebze Toplu Yemek – Topçular Yemek',
      description: `Gebze toplu yemek siparişi ve fiyat teklifi için Topçular Yemek ile iletişime geçin. Telefon: ${site.phone}. Adres: ${fullAddress()}.`,
      breadcrumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'İletişim', path: '/iletisim/' }],
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          url: abs('/iletisim/'),
          name: 'Topçular Yemek İletişim',
          about: { '@id': `${site.url}/#isletme` },
        },
      ],
    },
    `
  <section class="page-hero page-hero-simple">
    <div class="container">
      ${breadcrumbNav([{ name: 'Ana Sayfa', path: '/' }, { name: 'İletişim', path: '/iletisim/' }])}
      <h1>İletişim ve Toplu Yemek Teklifi</h1>
      <p class="lead">Formu doldurun, talebiniz WhatsApp üzerinden doğrudan bize ulaşsın. Dilerseniz hemen arayın.</p>
    </div>
  </section>
  <section class="section">
    <div class="container contact-grid">
      <div class="contact-info">
        <a class="contact-card reveal" href="${telHref}">${icon('phone')}<span><small>Telefon</small><strong>${esc(site.phone)}</strong></span></a>
        <a class="contact-card reveal" href="${waHref()}" target="_blank" rel="noopener">${waIcon()}<span><small>WhatsApp</small><strong>Hemen yazın</strong></span></a>
        <a class="contact-card reveal" href="mailto:${esc(site.email)}">${icon('mail')}<span><small>E-posta</small><strong>${esc(site.email)}</strong></span></a>
        <a class="contact-card reveal" href="${esc(site.mapsUrl)}" target="_blank" rel="noopener">${icon('pin')}<span><small>Adres</small><strong>${esc(fullAddress())}</strong></span></a>
        <div class="contact-card reveal">${icon('clock')}<span><small>Çalışma saatleri</small>${site.hours.map((h) => `<strong>${esc(h.label)}: ${h.opens} – ${h.closes}</strong>`).join('')}</span></div>
        <p class="note">Not: Dükkânımızda yerinde yemek servisi yoktur; yalnızca toplu yemek siparişi ve servis hizmeti veriyoruz.</p>
      </div>
      <form class="quote-form reveal" id="teklif" novalidate>
        <h2>Ücretsiz teklif formu</h2>
        <div class="form-row">
          <label for="f-ad">Ad Soyad *<input id="f-ad" name="ad" required autocomplete="name"></label>
          <label for="f-firma">Firma Adı<input id="f-firma" name="firma" autocomplete="organization"></label>
        </div>
        <div class="form-row">
          <label for="f-tel">Telefon *<input id="f-tel" name="tel" type="tel" required autocomplete="tel" inputmode="tel"></label>
          <label for="f-kisi">Günlük kişi sayısı *<input id="f-kisi" name="kisi" type="number" min="1" required inputmode="numeric"></label>
        </div>
        <div class="form-row">
          <label for="f-hizmet">Hizmet türü
            <select id="f-hizmet" name="hizmet">
              ${services.map((s) => `<option>${esc(s.navTitle)}</option>`).join('')}
              <option>Henüz karar vermedim</option>
            </select>
          </label>
          <label for="f-bolge">Bölge
            <select id="f-bolge" name="bolge">
              ${regions.map((r) => `<option>${esc(r.name)}</option>`).join('')}
              <option>Diğer</option>
            </select>
          </label>
        </div>
        <label for="f-mesaj">Mesajınız<textarea id="f-mesaj" name="mesaj" rows="4" placeholder="Teslimat saati, vardiya bilgisi, özel istekler…"></textarea></label>
        <button class="btn btn-primary btn-lg btn-block" type="submit" id="f-gonder">${waIcon()} WhatsApp ile Teklif İste</button>
        <p class="form-msg" id="form-msg" role="status" aria-live="polite"></p>
      </form>
    </div>
  </section>
  <section class="map-section" aria-label="Topçular Yemek konumu">
    <iframe title="Topçular Yemek Gebze konum haritası" src="${mapSrc}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
  </section>
  `
  );

  /* ---------------- 404 ---------------- */
  pages.push({
    path: '/404.html',
    noindex: true,
    html: layout(
      { path: '/404.html', title: 'Sayfa bulunamadı – Topçular Yemek', description: 'Aradığınız sayfa bulunamadı.', noindex: true, version },
      `
  <section class="page-hero page-hero-simple notfound">
    <div class="container">
      <span class="eyebrow">404</span>
      <h1>Bu tabak boş görünüyor…</h1>
      <p class="lead">Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <div class="btn-row"><a class="btn btn-primary" href="/">Ana sayfaya dön</a><a class="btn btn-ghost" href="/iletisim/">İletişim</a></div>
    </div>
  </section>`
    ),
  });

  return pages;
}
