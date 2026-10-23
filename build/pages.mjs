import { site } from '../site.config.mjs';
import { services } from '../content/services.mjs';
import { regions } from '../content/regions.mjs';
import { weeklyMenus, menuTypes, foodCatalog, clientSectors } from '../content/menu.mjs';
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

const clientsBand = () => `
  <section class="section-clients" aria-label="Çalıştığımız Kurumlar ve Referanslarımız">
    <div class="container">
      <div class="clients-head">
        <span class="clients-label">Gebze &amp; OSB Sanayisinde Güvenle Hizmet Verdiğimiz Sektör Öncüleri</span>
      </div>
      <div class="clients-grid">
        <div class="client-badge reveal">
          <span class="client-name">Aslan Otomotiv</span>
          <span class="client-sector">Otomotiv Yan Sanayi</span>
        </div>
        <div class="client-badge reveal">
          <span class="client-name">CRN Boya</span>
          <span class="client-sector">Endüstriyel Kaplama &amp; Kimya</span>
        </div>
        <div class="client-badge reveal">
          <span class="client-name">Mikroteknik</span>
          <span class="client-sector">Hassas İmalat &amp; Makine</span>
        </div>
        <div class="client-badge reveal">
          <span class="client-name">Teknik Fren</span>
          <span class="client-sector">Ağır Vasıta Fren Sistemleri</span>
        </div>
        <div class="client-badge reveal">
          <span class="client-name">Tümpa Elektrik</span>
          <span class="client-sector">Endüstriyel Elektrik Tesisleri</span>
        </div>
        <div class="client-badge reveal">
          <span class="client-name">Özel Eğitim Kurumları</span>
          <span class="client-sector">Kolej &amp; Kampüs Yemekleri</span>
        </div>
        <div class="client-badge reveal">
          <span class="client-name">Özel Sağlık Merkezleri</span>
          <span class="client-sector">7/24 Kesintisiz Sıcak Servis</span>
        </div>
        <div class="client-badge reveal">
          <span class="client-name">Özel Davet &amp; Organizasyon</span>
          <span class="client-sector">Düğün, Nişan &amp; Açılışlar</span>
        </div>
      </div>
    </div>
  </section>`;

const sectorsSection = () => `
  <section class="section" id="sektorler" aria-labelledby="sektorler-baslik">
    <div class="container">
      ${sectionHead(
        'Hizmet Verdiğimiz Alanlar & Sektörler',
        'KOBİ’lerden Sanayi Devlerine <em>Geniş Hizmet Ağı</em>',
        'Gebze, Dilovası, Çayırova ve Kocaeli sanayisinde farklı sektörlerin çalışma tempolarına, vardiya saatlerine ve hijyen ihtiyaçlarına özel yemek çözümleri sunuyoruz.',
        'sektorler-baslik'
      )}
      <div class="sectors-grid">
        ${clientSectors
          .map(
            (sec, i) => `
        <article class="sector-card reveal" style="--d:${i * 70}ms">
          <div>
            <div class="sector-card-top">
              <span class="sector-icon-wrap">${icon(sec.icon)}</span>
              <div>
                <span class="sector-badge">${esc(sec.badge)}</span>
                <h3>${esc(sec.title)}</h3>
              </div>
            </div>
            <p>${esc(sec.desc)}</p>
          </div>
          <ul class="sector-features">
            ${sec.features.map((f) => `<li>${icon('check')} <span>${esc(f)}</span></li>`).join('')}
          </ul>
        </article>`
          )
          .join('')}
      </div>
    </div>
  </section>`;

const foodCatalogSection = () => `
  <section class="section section-food-catalog" id="lezzetler" aria-labelledby="lezzetler-baslik">
    <div class="container">
      ${sectionHead(
        'Zengin Mutfak & Yemek Yelpazemiz',
        'Her Gün Taze Pişen <em>Usta Lezzetler</em>',
        'Ezogelin, mercimek, domates, mantar ve düğün çorbalarından; lokum gibi et sote, tas kebabı, sac kavurma ve köftelere; şehriyeli pilavdan taze makarna ve kurumsal kahvaltıya kadar zengin lezzetlerimiz:',
        'lezzetler-baslik'
      )}
      <div class="catalog-categories">
        ${Object.values(foodCatalog)
          .map(
            (cat, i) => `
        <div class="catalog-category-block reveal" style="--d:${i * 80}ms">
          <div class="category-header-wrap">
            <span class="category-emoji" aria-hidden="true">${cat.icon}</span>
            <h3>${esc(cat.title)}</h3>
            <span class="category-tag">${esc(cat.tag)}</span>
          </div>
          <p class="category-desc">${esc(cat.desc)}</p>
          <div class="catalog-grid">
            ${cat.items
              .map(
                (dish) => `
            <div class="dish-item-card">
              <div class="dish-card-header">
                <h4 class="dish-name">${esc(dish.name)}</h4>
                <span class="dish-pill">${esc(dish.badge)}</span>
              </div>
              <p class="dish-desc">${esc(dish.desc)}</p>
            </div>`
              )
              .join('')}
          </div>
        </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`;

const certsSection = () => `
  <section class="section section-certs" id="sertifikalar" aria-labelledby="certs-baslik">
    <div class="container">
      <header class="section-head reveal center">
        <span class="eyebrow">Resmi Kalite &amp; Gıda Güvenliği Belgelerimiz</span>
        <h2 id="certs-baslik">Uluslararası Akredite <em>ISO Sertifikalarımız</em></h2>
        <p>Topçular Yemek; gıda güvenliği, iş sağlığı ve kurumsal yönetimde uluslararası standartlara sahiptir. Aşağıdaki sertifika görsellerine veya butonlara tıklayarak resmi PDF belgelerimizi yüksek çözünürlükte inceleyebilirsiniz.</p>
      </header>
      <div class="certs-grid">
        <div class="cert-card reveal">
          <a href="/belgeler/topcular-yemek-iso-22000-2018.pdf" target="_blank" rel="noopener" class="cert-doc-preview" aria-label="ISO 22000:2018 Resmi Sertifika PDF Belgesini İncele">
            <div class="cert-doc-frame">
              ${img('certIso22000', 'Topçular Yemek ISO 22000:2018 Gıda Güvenliği Yönetim Sistemi Resmi Sertifikası', { sizes: '(max-width: 768px) 100vw, 380px' })}
              <div class="cert-doc-overlay">
                <span class="cert-overlay-btn">
                  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  PDF Olarak Büyüt
                </span>
              </div>
            </div>
            <span class="cert-doc-badge">Gıda Güvenliği</span>
          </a>
          <div class="cert-card-body">
            <div class="cert-code-tag">ISO 22000:2018</div>
            <h3>Gıda Güvenliği Yönetim Sistemi</h3>
            <p class="cert-desc">Hammadde kabulünden hijyenik pişirme ve termobox sıcak sevkiyata kadar her aşamada uluslararası standartlarda sıfır risk gıda güvenliği güvencesi.</p>
            <div class="cert-meta">
              <span class="meta-label">Tescilli Firma:</span>
              <strong>Topçular Emlak İnşaat Spor Tesisleri Otopark Lokanta San. Tic. Ltd. Şti.</strong>
            </div>
            <a href="/belgeler/topcular-yemek-iso-22000-2018.pdf" target="_blank" rel="noopener" class="btn btn-primary btn-sm btn-block">
              Orijinal Sertifikayı İncele (PDF) ${icon('arrow')}
            </a>
          </div>
        </div>

        <div class="cert-card reveal">
          <a href="/belgeler/topcular-yemek-iso-9001-2015.pdf" target="_blank" rel="noopener" class="cert-doc-preview" aria-label="ISO 9001:2015 Resmi Sertifika PDF Belgesini İncele">
            <div class="cert-doc-frame">
              ${img('certIso9001', 'Topçular Yemek ISO 9001:2015 Kalite Yönetim Sistemi Resmi Sertifikası', { sizes: '(max-width: 768px) 100vw, 380px' })}
              <div class="cert-doc-overlay">
                <span class="cert-overlay-btn">
                  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  PDF Olarak Büyüt
                </span>
              </div>
            </div>
            <span class="cert-doc-badge">Kalite Standardı</span>
          </a>
          <div class="cert-card-body">
            <div class="cert-code-tag">ISO 9001:2015</div>
            <h3>Kalite Yönetim Sistemi</h3>
            <p class="cert-desc">Müşteri memnuniyeti, reçete standardizasyonu, kurumsal süreç disiplini ve kesintisiz zamanında teslimat kalitesi güvencesi.</p>
            <div class="cert-meta">
              <span class="meta-label">Tescilli Firma:</span>
              <strong>Topçular Emlak İnşaat Spor Tesisleri Otopark Lokanta San. Tic. Ltd. Şti.</strong>
            </div>
            <a href="/belgeler/topcular-yemek-iso-9001-2015.pdf" target="_blank" rel="noopener" class="btn btn-primary btn-sm btn-block">
              Orijinal Sertifikayı İncele (PDF) ${icon('arrow')}
            </a>
          </div>
        </div>

        <div class="cert-card reveal">
          <a href="/belgeler/topcular-yemek-iso-45001-2018.pdf" target="_blank" rel="noopener" class="cert-doc-preview" aria-label="ISO 45001:2018 Resmi Sertifika PDF Belgesini İncele">
            <div class="cert-doc-frame">
              ${img('certIso45001', 'Topçular Yemek ISO 45001:2018 İş Sağlığı ve Güvenliği Yönetim Sistemi Resmi Sertifikası', { sizes: '(max-width: 768px) 100vw, 380px' })}
              <div class="cert-doc-overlay">
                <span class="cert-overlay-btn">
                  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  PDF Olarak Büyüt
                </span>
              </div>
            </div>
            <span class="cert-doc-badge">İş Sağlığı &amp; Güvenliği</span>
          </a>
          <div class="cert-card-body">
            <div class="cert-code-tag">ISO 45001:2018</div>
            <h3>İş Sağlığı ve Güvenliği</h3>
            <p class="cert-desc">Endüstriyel mutfak güvenliği, çalışan sağlığı koruma protokolleri, emniyetli ekipmanlar ve kusursuz lojistik operasyonu.</p>
            <div class="cert-meta">
              <span class="meta-label">Tescilli Firma:</span>
              <strong>Topçular Emlak İnşaat Spor Tesisleri Otopark Lokanta San. Tic. Ltd. Şti.</strong>
            </div>
            <a href="/belgeler/topcular-yemek-iso-45001-2018.pdf" target="_blank" rel="noopener" class="btn btn-primary btn-sm btn-block">
              Orijinal Sertifikayı İncele (PDF) ${icon('arrow')}
            </a>
          </div>
        </div>
      </div>
      <div class="certs-trust-banner reveal">
        <div class="trust-pill">${icon('shield')} T.C. Tarım ve Orman Bakanlığı Standartlarında Üretim</div>
        <div class="trust-pill">${icon('leaf')} Düzenli Mikrobiyolojik Numune &amp; Laboratuvar Takibi</div>
        <div class="trust-pill">${icon('truck')} 70°C+ Sıcaklığı Koruyan Termobox Taşıma Garantisi</div>
      </div>
    </div>
  </section>`;

const menuTabs = (week, idPrefix = 'gun') => {
  const courseMeta = [
    { type: '1. Çeşit: Çorba', tag: 'Sıcak Başlangıç', icon: '🍲' },
    { type: '2. Çeşit: Ana Yemek', tag: 'Protein Dengesi', icon: '🥩' },
    { type: '3. Çeşit: Yardımcı Yemek', tag: 'Geleneksel Lezzet', icon: '🍚' },
    { type: '4. Çeşit: Salata / Tatlı / İçecek', tag: 'Taze Vitamin', icon: '🥗' },
  ];
  return `
  <div class="menu-tabs" data-tabs>
    <div class="menu-card-topbar">
      <span class="nutrition-badge">${icon('fire')} <strong>~850 Kcal</strong> · Ağır Sanayi Standardı Dengeli Menü</span>
      <span class="fresh-badge">${icon('leaf')} Günlük Taze Pişirim</span>
    </div>
    <div class="tab-list-wrap">
      <div class="tab-list" role="tablist" aria-label="${esc(week.title)} günleri">
        ${week.days
          .map(
            (d, i) =>
              `<button role="tab" id="${idPrefix}-tab-${i}" aria-controls="${idPrefix}-panel-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-day="${i}">${esc(d.day)}</button>`
          )
          .join('')}
      </div>
    </div>
    ${week.days
      .map(
        (d, i) => `
    <div class="tab-panel" role="tabpanel" id="${idPrefix}-panel-${i}" aria-labelledby="${idPrefix}-tab-${i}"${i === 0 ? '' : ' hidden'}>
      <ol class="menu-courses">
        ${d.items
          .map(
            (it, j) =>
              `<li>
                <span class="course-no">0${j + 1}</span>
                <div class="course-body">
                  <span class="course-name">${esc(it)}</span>
                  <span class="course-subtag">${courseMeta[j]?.tag || ''}</span>
                </div>
                <span class="course-type">${courseMeta[j]?.type || ''}</span>
              </li>`
          )
          .join('')}
      </ol>
    </div>`
      )
      .join('')}
  </div>`;
};

/* ---------------- GÜNLÜK MUTFAK VE SEVKİYAT BÜLTENİ ---------------- */
const dailyShowcaseSection = () => `
  <section class="section section-showcase" id="gunluk-bulten" aria-labelledby="showcase-baslik">
    <div class="container">
      <header class="section-head reveal center">
        <span class="eyebrow">${icon('sparkles')} Canlı Mutfak &amp; Sevkiyat Günlüğü</span>
        <h2 id="showcase-baslik">Bugün Mutfağımızdan: <em>Taze Lezzet &amp; Termobox</em> Güvencesi</h2>
        <p>Her sabah Sultan Orhan Mahallesindeki merkez mutfağımızda pişen sıcak menüler ve fabrikalara ulaştırılan termobox sevkiyatından gerçek kareler.</p>
      </header>
      <div class="showcase-grid">
        <article class="showcase-card reveal" style="--d:0ms">
          <div class="showcase-media">
            ${img('dailyMenu', 'Günün 4 Kap Sıcak Menüsü: Süzme mercimek çorbası, sebzeli dana tas kebabı, şehriyeli pirinç pilavı, taze cacık ve somun ekmek', { sizes: '(max-width: 900px) 100vw, 50vw' })}
            <span class="showcase-badge badge-flavor">${icon('fire')} 1. Lezzet &amp; Doyuruculuk Odaklı</span>
          </div>
          <div class="showcase-body">
            <span class="showcase-label">Görsel 1: Günün 4 Kap Sıcak Menüsü</span>
            <h3>Öğle Vardiyası Enerji Menüsü</h3>
            <p class="showcase-desc">Taze süzme mercimek çorbası, sebzeli dana tas kebabı, tereyağlı şehriyeli pirinç pilavı, taze cacık ve çıtır somun ekmek sunumu.</p>
            <div class="showcase-quote">
              <span class="quote-icon">${icon('chat')}</span>
              <blockquote>“Bugün Topçular Yemek mutfağından fabrikalarınıza ev sıcaklığı taşıyoruz! Usta ellerden çıkan sıcacık mercimek çorbamız, lokum kıvamında tas kebabımız ve dengeli menümüz vardiyanıza enerji katmaya hazır. Afiyet olsun!”</blockquote>
            </div>
          </div>
        </article>

        <article class="showcase-card reveal" style="--d:120ms">
          <div class="showcase-media">
            ${img('termoboxKitchen', 'Endüstriyel Mutfak Hijyeni ve 70°C+ Termobox Sıcak Sevkiyatı', { sizes: '(max-width: 900px) 100vw, 50vw' })}
            <span class="showcase-badge badge-hygiene">${icon('shield')} 2. Güven &amp; Kurumsallık Odaklı</span>
          </div>
          <div class="showcase-body">
            <span class="showcase-label">Görsel 2: Endüstriyel Hijyen ve Termobox Sevkiyatı</span>
            <h3>ISO Standartlarında Üretim &amp; Lojistik</h3>
            <p class="showcase-desc">Paslanmaz çelik endüstriyel mutfak, ISO standartlarında bone/eldiven/önlük hijyeni, buharı üstünde tüten yemeklerin ısı yalıtımlı Termobox küvetlerine aktarılması.</p>
            <div class="showcase-quote">
              <span class="quote-icon">${icon('chat')}</span>
              <blockquote>“Sultan Orhan Mahallesindeki merkez mutfağımızda her sabah aynı titizlikle üretiyoruz. Yemekleriniz fabrikasyon değil, %100 taze malzemelerle hazırlanıp özel Termobox taşıma sistemimizle masanıza ilk anki sıcaklığında ulaşıyor.”</blockquote>
            </div>
          </div>
        </article>
      </div>

      <div class="showcase-blog-cta reveal">
        <div class="cta-blog-inner">
          <div class="cta-blog-text">
            <span class="blog-tag">📚 Yeni SEO Rehberimiz</span>
            <h4>Gebze Fabrika ve İşletmeleri İçin Tabldot Yemek Rehberi: Lezzet, Hijyen ve Zamanında Teslimat</h4>
            <p>GOSB, TOSB ve İMES sanayi bölgelerindeki fabrikalar için tabldot yemek seçiminde 5 altın kuralı ve fason yemekçilere karşı entegre mutfak farklarını inceleyin.</p>
          </div>
          <a class="btn btn-primary" href="/blog/gebze-fabrika-tabldot-yemek-rehberi/">Rehberi Oku ${icon('arrow')}</a>
        </div>
      </div>
    </div>
  </section>`;

/* ---------------- 04:30'DAN MASANIZA 4 AŞAMALI SICAK ZİNCİR KRONOLOJİSİ ---------------- */
const hotChainTimeline = () => `
  <section class="section section-dark section-timeline" aria-labelledby="surec-baslik">
    <div class="container">
      <header class="section-head reveal center light-head">
        <span class="eyebrow eyebrow-saffron">Mutfaktan Masaya Sıcak Zincir Güvencesi</span>
        <h2 id="surec-baslik">04:30’dan Vardiyanıza <em>Kusursuz Lezzet Yolculuğu</em></h2>
        <p>Toplu yemekte en büyük risk soğuma ve vardiya gecikmesidir. Topçular Yemek’te her dakika matematiksel hassasiyetle yönetilir.</p>
      </header>
      <div class="timeline-grid">
        <div class="timeline-card reveal" style="--d:0ms">
          <div class="timeline-time-badge">
            <span class="t-pulse"></span>
            <strong>04:30</strong>
            <small>ŞAFAK KABUL</small>
          </div>
          <div class="timeline-body">
            <span class="t-icon">${icon('leaf')}</span>
            <h3>Taze Malzeme Kabulü</h3>
            <p>Her sabah yerel halden günlük taze sebzeler ve veteriner onaylı yerli etler merkez mutfağımıza girer. Donuk hazır gıda oranı: %0.</p>
            <div class="timeline-metric"><span>Tazelik Kriteri:</span> <strong>%100 Günlük</strong></div>
          </div>
        </div>
        <div class="timeline-card reveal" style="--d:100ms">
          <div class="timeline-time-badge">
            <span class="t-pulse"></span>
            <strong>06:00</strong>
            <small>USTA ATEŞİ</small>
          </div>
          <div class="timeline-body">
            <span class="t-icon">${icon('chef')}</span>
            <h3>Kazanlarda Pişirim</h3>
            <p>Usta aşçılarımızın gözetiminde dev sanayi kazanlarında anne eli lezzetiyle, katkısız sızma zeytinyağı ve tereyağı ile pişirme başlar.</p>
            <div class="timeline-metric"><span>Reçete:</span> <strong>Geleneksel Ev Usulü</strong></div>
          </div>
        </div>
        <div class="timeline-card reveal" style="--d:200ms">
          <div class="timeline-time-badge">
            <span class="t-pulse"></span>
            <strong>09:30</strong>
            <small>ISI MÜHRÜ</small>
          </div>
          <div class="timeline-body">
            <span class="t-icon">${icon('pot')}</span>
            <h3>75°C Termobox Kilitleme</h3>
            <p>Yemekler kazandan çıktığı anda çift cidarlı ısı yalıtımlı gastronom küvetlere mühürlenir. Dumanı ve lezzeti hapsedilir.</p>
            <div class="timeline-metric"><span>Sıcaklık:</span> <strong>75°C+ Sabit Isı</strong></div>
          </div>
        </div>
        <div class="timeline-card reveal" style="--d:300ms">
          <div class="timeline-time-badge">
            <span class="t-pulse"></span>
            <strong>11:30</strong>
            <small>DAKİK SERVİS</small>
          </div>
          <div class="timeline-body">
            <span class="t-icon">${icon('truck')}</span>
            <h3>Vardiyadan 15 Dk Önce Masada</h3>
            <p>Fabrikanızın öğle molası sireninden 15 dakika önce teslimat tamamlanır. Çalışanlarınız yemekhaneye girdiğinde yemek sıcacıktır.</p>
            <div class="timeline-metric"><span>Zamanlama:</span> <strong>0 Dk Gecikme</strong></div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

/* ---------------- GELENEKSEL CATERING VS TOPÇULAR YEMEK KARŞILAŞTIRMA MATRİSİ ---------------- */
const comparisonSection = () => `
  <section class="section section-comparison" aria-labelledby="karsilastirma-baslik">
    <div class="container">
      <header class="section-head reveal center">
        <span class="eyebrow">Fark Yaratan Standartlarımız</span>
        <h2 id="karsilastirma-baslik">Sıradan Yemekçiler ile <em>Topçular Yemek</em> Arasındaki Fark</h2>
        <p>Fabrika yöneticilerinin ve çalışanların en çok şikayet ettiği 5 temel yemek sorununu nasıl kökünden çözdüğümüzü inceleyin.</p>
      </header>
      <div class="comparison-card reveal">
        <div class="comparison-row comparison-header">
          <div class="col-criteria">Hizmet Kriteri</div>
          <div class="col-bad">Piyasadaki Sıradan Yemekçiler</div>
          <div class="col-good">🏆 Topçular Yemek Standartları</div>
        </div>
        <div class="comparison-row">
          <div class="col-criteria"><strong>Servis Sıcaklığı</strong></div>
          <div class="col-bad"><span class="bad-mark">✕</span> Ilık veya soğuk teslimat, personelin yemekhanede ısıtma derdi</div>
          <div class="col-good"><span class="good-mark">✓</span> <strong>75°C Termobox Garantisi:</strong> İlk piştiği tazelikte ve sıcacık</div>
        </div>
        <div class="comparison-row">
          <div class="col-criteria"><strong>Porsiyon Doyuruculuğu</strong></div>
          <div class="col-bad"><span class="bad-mark">✕</span> Gramajı kısılmış az porsiyonlar, personeli aç bırakan menüler</div>
          <div class="col-good"><span class="good-mark">✓</span> <strong>Ağır Sanayi Standardı:</strong> Bol etli, doyurucu ve yüksek besin dengeli</div>
        </div>
        <div class="comparison-row">
          <div class="col-criteria"><strong>Hammadde &amp; Malzeme</strong></div>
          <div class="col-bad"><span class="bad-mark">✕</span> Donuk hazır köfteler, bulyonlar ve ucuz endüstriyel katkılar</div>
          <div class="col-good"><span class="good-mark">✓</span> <strong>%100 Taze &amp; Yerli:</strong> Her sabah hal sebzesi, yerli kasap eti, kemik suyu</div>
        </div>
        <div class="comparison-row">
          <div class="col-criteria"><strong>Teslimat Disiplini</strong></div>
          <div class="col-bad"><span class="bad-mark">✕</span> Trafiğe takılan, mola düdüğünü kaçıran gecikmeli servisler</div>
          <div class="col-good"><span class="good-mark">✓</span> <strong>15 Dk Önce Masada:</strong> Mola sireninden önce eksiksiz hazır</div>
        </div>
        <div class="comparison-row">
          <div class="col-criteria"><strong>Kalite &amp; Resmi Belgeler</strong></div>
          <div class="col-bad"><span class="bad-mark">✕</span> Ruhsatsız merdiven altı üretim, eksik hijyen ve numune takipsizliği</div>
          <div class="col-good"><span class="good-mark">✓</span> <strong>ISO 9001, 22000, 45001:</strong> Düzenli laboratuvar ve mikrobiyolojik testler</div>
        </div>
      </div>
    </div>
  </section>`;

/* ---------------- İNTERAKTİF OSB LOJİSTİK VE ROTA RADARI ---------------- */
const osbRadarSection = () => `
  <div class="osb-radar-wrap reveal">
    <div class="osb-radar-head">
      <span class="osb-radar-badge">${icon('truck')} CANLI LOJİSTİK VE VARIŞ SÜRELERİ</span>
      <h3>Sultan Orhan Mutfağımızdan Sanayi Bölgelerine Transit Zamanları</h3>
      <p>Isı yalıtımlı termobox filomuz ile Gebze ve çevresindeki tüm OSB'lere sıfır sıcaklık kaybıyla ulaşıyoruz.</p>
    </div>
    <div class="osb-radar-grid">
      <div class="osb-node">
        <div class="osb-node-top">
          <span class="osb-node-pin">${icon('pin')}</span>
          <h4>GOSB</h4>
          <span class="osb-node-name">Gebze Organize Sanayi</span>
        </div>
        <div class="osb-node-metrics">
          <span class="m-time">⏱️ ~12 Dakika</span>
          <span class="m-heat">🔥 Isı Kaybı: 0°C</span>
        </div>
      </div>
      <div class="osb-node">
        <div class="osb-node-top">
          <span class="osb-node-pin">${icon('pin')}</span>
          <h4>TOSB</h4>
          <span class="osb-node-name">Otomotiv İhtisas OSB</span>
        </div>
        <div class="osb-node-metrics">
          <span class="m-time">⏱️ ~18 Dakika</span>
          <span class="m-heat">🔥 Isı Kaybı: 0°C</span>
        </div>
      </div>
      <div class="osb-node">
        <div class="osb-node-top">
          <span class="osb-node-pin">${icon('pin')}</span>
          <h4>İMES OSB</h4>
          <span class="osb-node-name">Dilovası Makineciler</span>
        </div>
        <div class="osb-node-metrics">
          <span class="m-time">⏱️ ~22 Dakika</span>
          <span class="m-heat">🔥 Isı Kaybı: 0°C</span>
        </div>
      </div>
      <div class="osb-node">
        <div class="osb-node-top">
          <span class="osb-node-pin">${icon('pin')}</span>
          <h4>Güzeller OSB</h4>
          <span class="osb-node-name">Gebze Güzeller OSB</span>
        </div>
        <div class="osb-node-metrics">
          <span class="m-time">⏱️ ~10 Dakika</span>
          <span class="m-heat">🔥 Isı Kaybı: 0°C</span>
        </div>
      </div>
      <div class="osb-node">
        <div class="osb-node-top">
          <span class="osb-node-pin">${icon('pin')}</span>
          <h4>Çayırova &amp; Darıca</h4>
          <span class="osb-node-name">Sanayi Siteleri &amp; Şantiyeler</span>
        </div>
        <div class="osb-node-metrics">
          <span class="m-time">⏱️ ~14 Dakika</span>
          <span class="m-heat">🔥 Isı Kaybı: 0°C</span>
        </div>
      </div>
      <div class="osb-node">
        <div class="osb-node-top">
          <span class="osb-node-pin">${icon('pin')}</span>
          <h4>Tuzla &amp; Kocaeli</h4>
          <span class="osb-node-name">Tersaneler &amp; Fabrikalar</span>
        </div>
        <div class="osb-node-metrics">
          <span class="m-time">⏱️ ~20 Dakika</span>
          <span class="m-heat">🔥 Isı Kaybı: 0°C</span>
        </div>
      </div>
    </div>
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
      title: 'Gebze Toplu Yemek & Tabldot Servisi | Fabrika Yemek Şirketi – Topçular Yemek',
      description:
        'Gebze toplu yemek ve tabldot siparişi için Topçular Yemek: fabrikalara, organize sanayi bölgelerine (GOSB, TOSB, Dilovası OSB) ve şantiyelere her gün 4 çeşit taze, sıcak ev yemeği servisi. Sultan Orhan Mah. mutfağımızdan dakik teslimat. Hemen teklif alın.',
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
        <div class="live-status"><span class="live-dot" aria-hidden="true"></span><span>Bugün tüm bölgelere sevkiyat aktif</span></div>
        <span class="eyebrow eyebrow-pill">${icon('pin')} Sultan Orhan Mah. · Gebze · GOSB · TOSB · Darıca</span>
        <h1>
          <span class="h1-kicker">Gebze Toplu Yemek &amp; Tabldot Mutfağı</span>
          Her gün taze, <em>ev lezzetinde</em> yemek fabrikanıza geliyor.
        </h1>
        <p class="lead">KOBİ’lerden büyük sanayi fabrikalarına, okullardan hastane ve şantiyelere her gün 4 çeşit taze tabldot ve toplu yemek servisi. İster firmanıza termobox sıcak teslimat, ister Sultan Orhan merkez salonumuzda oturup yeme imkanı.</p>
        ${heroButtons()}
        <ul class="hero-trust">
          <li>${icon('leaf')} Günlük taze üretim</li>
          <li>${icon('shield')} ISO 22000 &amp; HACCP hijyen</li>
          <li>${icon('truck')} Termobox sıcak sevkiyat</li>
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
        <span>TOSB OTOMOTİV İHTİSAS</span>
        <span class="dot"></span>
        <span>DİLOVASI İMES OSB</span>
        <span class="dot"></span>
        <span class="highlight">🍱 4 ÇEŞİT TABLDOT YEMEK</span>
        <span class="dot"></span>
        <span>🍲 TOPLU TAŞIMALI YEMEK</span>
        <span class="dot"></span>
        <span>🥐 KURUMSAL SABAH KAHVALTISI</span>
        <span class="dot"></span>
        <span class="highlight">🍽️ SALONUMUZDA OTURUP YEME İMKANI</span>
        <span class="dot"></span>
        <span>🏢 KOBİ &amp; BÜYÜK SANAYİ</span>
        <span class="dot"></span>
        <span>🎓 OKULLAR &amp; YURTLAR</span>
        <span class="dot"></span>
        <span>🏥 HASTANELER &amp; SAĞLIK</span>
        <span class="dot"></span>
        <span>🎉 ÖZEL DAVET &amp; DÜĞÜN YEMEĞİ</span>
        <span class="dot"></span>
        <span class="highlight">🛡️ ISO 22000 GIDA GÜVENLİĞİ</span>
      </div>
      <div class="marquee-content" aria-hidden="true">
        <span class="highlight">⚡ GÜNLÜK SICAK SEVKİYAT</span>
        <span class="dot"></span>
        <span>GEBZE ORGANİZE SANAYİ BÖLGESİ (GOSB)</span>
        <span class="dot"></span>
        <span>TOSB OTOMOTİV İHTİSAS</span>
        <span class="dot"></span>
        <span>DİLOVASI İMES OSB</span>
        <span class="dot"></span>
        <span class="highlight">🍱 4 ÇEŞİT TABLDOT YEMEK</span>
        <span class="dot"></span>
        <span>🍲 TOPLU TAŞIMALI YEMEK</span>
        <span class="dot"></span>
        <span>🥐 KURUMSAL SABAH KAHVALTISI</span>
        <span class="dot"></span>
        <span class="highlight">🍽️ SALONUMUZDA OTURUP YEME İMKANI</span>
        <span class="dot"></span>
        <span>🏢 KOBİ &amp; BÜYÜK SANAYİ</span>
        <span class="dot"></span>
        <span>🎓 OKULLAR &amp; YURTLAR</span>
        <span class="dot"></span>
        <span>🏥 HASTANELER &amp; SAĞLIK</span>
        <span class="dot"></span>
        <span>🎉 ÖZEL DAVET &amp; DÜĞÜN YEMEĞİ</span>
        <span class="dot"></span>
        <span class="highlight">🛡️ ISO 22000 GIDA GÜVENLİĞİ</span>
      </div>
    </div>
  </div>

  ${clientsBand()}

  <section class="section" id="hizmetler" aria-labelledby="hizmetler-baslik">
    <div class="container">
      ${sectionHead('Hizmetlerimiz', 'İşletmenize uygun <em>toplu yemek</em> çözümü', 'İster 20 kişilik bir atölye, ister yüzlerce çalışanı olan bir fabrika olsun; ihtiyacınıza göre esnek servis modeli kuruyoruz.', 'hizmetler-baslik')}
      ${serviceCards()}
    </div>
  </section>

  <!-- HİZMET VERİLEN SEKTÖRLER VE KURUMLAR -->
  ${sectorsSection()}

  <!-- CANLI TEKLİF VE SİPARİŞ HESAPLAYICI -->
  <section class="section section-calculator" id="hizli-teklif" aria-labelledby="calc-title">
    <div class="container">
      <div class="calc-card reveal">
        <div class="calc-header">
          <span class="eyebrow">${icon('calculator')} Canlı Fiyat &amp; Teklif Aracı</span>
          <h2 id="calc-title">İşletmeniz İçin <em>30 Saniyede</em> Teklif Alın</h2>
          <p>Kişi sayınızı ve hizmet türünü seçin, anında WhatsApp üzerinden firmanıza özel fiyat ve menü teklifini iletelim.</p>
        </div>
        <div class="calc-body">
          <div class="calc-step">
            <span class="calc-label">1. Günlük Kişi Sayısı Seçin:</span>
            <div class="calc-options" data-group="kisi">
              <button type="button" class="calc-chip active" data-val="20-50 Kişi">20 – 50 Kişi</button>
              <button type="button" class="calc-chip" data-val="50-100 Kişi">50 – 100 Kişi</button>
              <button type="button" class="calc-chip" data-val="100-250 Kişi">100 – 250 Kişi</button>
              <button type="button" class="calc-chip" data-val="250+ Kişi">250+ Kişi (Büyük Fabrika)</button>
            </div>
          </div>
          <div class="calc-step">
            <span class="calc-label">2. İhtiyacınız Olan Hizmet Türü:</span>
            <div class="calc-options" data-group="hizmet">
              <button type="button" class="calc-chip active" data-val="4 Çeşit Tabldot">🍱 4 Çeşit Tabldot</button>
              <button type="button" class="calc-chip" data-val="Toplu Taşımalı Yemek">🍲 Toplu Taşımalı Servis</button>
              <button type="button" class="calc-chip" data-val="Fabrika &amp; Kurumsal Yemek">🏭 Fabrika &amp; Kurumsal Yemek</button>
              <button type="button" class="calc-chip" data-val="Kurumsal Sabah Kahvaltısı">🥐 Sabah Kahvaltısı</button>
              <button type="button" class="calc-chip" data-val="Salonumuzda Oturup Yeme">🍽️ Salonumuzda Oturup Yeme</button>
              <button type="button" class="calc-chip" data-val="Davet, Düğün &amp; Nişan Yemeği">🎉 Düğün &amp; Davet Yemeği</button>
            </div>
          </div>
          <div class="calc-step">
            <span class="calc-label">3. Teslimat Lokasyonu:</span>
            <div class="calc-options" data-group="bolge">
              <button type="button" class="calc-chip active" data-val="Gebze Merkez">📍 Gebze Merkez</button>
              <button type="button" class="calc-chip" data-val="GOSB / Organize Sanayi">🏭 GOSB / Güzeller OSB</button>
              <button type="button" class="calc-chip" data-val="TOSB Otomotiv OSB">🚗 TOSB OSB</button>
              <button type="button" class="calc-chip" data-val="Dilovası / İMES OSB">🏗️ Dilovası / İMES</button>
              <button type="button" class="calc-chip" data-val="Çayırova / Darıca">🏢 Çayırova / Darıca</button>
              <button type="button" class="calc-chip" data-val="Tuzla / Kocaeli">🚚 Tuzla / Kocaeli</button>
            </div>
          </div>
          <div class="calc-footer">
            <div class="calc-summary">
              <span class="calc-summary-label">Seçilen Hizmet Özeti:</span>
              <strong id="calc-summary-text">20-50 Kişi · 4 Çeşit Tabldot · Gebze Merkez</strong>
            </div>
            <a id="calc-wa-btn" class="btn btn-wa btn-lg" href="${waHref('Merhaba Topçular Yemek, 20-50 Kişi için 4 Çeşit Tabldot yemek teklifi almak istiyoruz. Bölge: Gebze Merkez.')}" target="_blank" rel="noopener">
              ${waIcon()} WhatsApp ile Özel Fiyat Al
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- GÜNLÜK MUTFAK VE SEVKİYAT BÜLTENİ -->
  ${dailyShowcaseSection()}

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

  <!-- GELENEKSEL CATERING VS TOPÇULAR YEMEK KARŞILAŞTIRMA MATRİSİ -->
  ${comparisonSection()}

  <!-- RESMİ KALİTE BELGELERİ VE ISO SERTİFİKALARI -->
  ${certsSection()}

  <section class="section" aria-labelledby="menu-baslik">
    <div class="container menu-section">
      <div class="menu-intro">
        ${sectionHead('Örnek Haftalık Menü', 'Bu hafta <em>mutfağımızda</em> neler var?', 'Menülerimiz aylık planlanır; etli, tavuklu, bakliyat ve zeytinyağlılar dengeli dağıtılır.', 'menu-baslik')}
        <a class="btn btn-ghost reveal" href="/menu/">Tüm menüleri gör ${icon('arrow')}</a>
      </div>
      <div class="menu-card reveal">${menuTabs(week, 'ana')}</div>
    </div>
  </section>

  <!-- ZENGİN YEMEK YELPAZESİ (ÇORBA, ET, TAVUK, PİLAV, MAKARNA, KAHVALTI) -->
  ${foodCatalogSection()}

  <!-- 04:30'DAN MASANIZA 4 AŞAMALI SICAK ZİNCİR KRONOLOJİSİ -->
  ${hotChainTimeline()}

  <section class="section" aria-labelledby="bolge-baslik">
    <div class="container regions-block">
      ${sectionHead('Hizmet Bölgelerimiz', 'Gebze ve çevresine <em>her gün</em> servis', 'Mutfağımız Gebze Sultan Orhan Mahallesinde. Kısa mesafe = sıcak yemek, dakik teslimat.', 'bolge-baslik')}
      <div class="reveal">${regionChips()}</div>
      ${osbRadarSection()}
    </div>
  </section>

  <section class="section section-cream" aria-labelledby="seo-baslik">
    <div class="container prose-wrap">
      <div class="prose reveal">
        <h2 id="seo-baslik">Gebze’de Güvenilir Bir Toplu Yemek &amp; Tabldot Firması Arıyorsanız</h2>
        <p><strong>Gebze toplu yemek</strong> ve <strong>tabldot yemek servisi</strong> denince sanayi kuruluşlarının aradığı en temel gereksinim; yemeğin her gün aynı yüksek lezzette, bol porsiyonlu ve mola düdüğü çaldığında masada hazır olmasıdır. Topçular Yemek olarak, Sultan Orhan Mahallesi 1141. Sokak’taki merkez mutfağımızda her sabah erken saatlerde üretime başlıyor, Gebze ve tüm organize sanayi bölgelerine (GOSB, TOSB, Dilovası İMES, GEPOSB) sıcak zinciri koruyarak ulaşıyoruz.</p>
        <p><a href="/hizmetler/tabldot-yemek/">Gebze tabldot yemek</a>, <a href="/hizmetler/toplu-yemek/">toplu yemek ve taşımalı servis</a>, <a href="/hizmetler/fabrika-yemek/">fabrika yemek servisi</a>, <a href="/hizmetler/kahvalti-servisi/">kurumsal kahvaltı</a>, <a href="/hizmetler/yerinde-yemek-salonu/">salonumuzda oturup yeme imkanı</a> ve <a href="/hizmetler/organizasyon-yemek/">özel davet, düğün &amp; nişan yemeği</a> çözümlerimizle KOBİ'lerden sanayi devlerine, okullardan sağlık kurumlarına ve şantiyelere kadar Gebze ve çevre ilçelerin güvenilir mutfağıyız. Sultan Orhan Mahallesi'ndeki ferah merkez yemek salonumuzda misafirlerimize sabah kahvaltısı ve öğle yemeğinde yerinde oturup taze ev yemeği tüketme imkanı sunarken; donanımlı araç filomuzla organize sanayi bölgelerine dakik sıcak yemek ulaştırıyoruz.</p>
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
        'Topçular Yemek’in Gebze’deki toplu yemek hizmetleri: tabldot yemek, toplu taşımalı yemek, kurumsal kahvaltı, fabrika yemeği, restoran salonumuzda oturup yeme ve özel davet organizasyonları. Teklif alın.',
      breadcrumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Hizmetler', path: '/hizmetler/' }],
    },
    `
  ${pageHero({
    crumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Hizmetler', path: '/hizmetler/' }],
    kicker: 'Hizmetlerimiz',
    h1: 'Gebze Toplu Yemek Hizmetlerimiz',
    lead: 'Tabldottan toplu taşımalı servise, sabah kahvaltısından salonumuzda oturup yemeğe kadar işletmenize uygun esnek yemek çözümleri.',
    image: 'tabldot',
    imageAlt: 'Gebze toplu yemek hizmetleri: taze tabldot ve sıcak servis yemekleri',
  })}
  <section class="section">
    <div class="container">${serviceCards(services, 2)}</div>
  </section>
  ${sectorsSection()}
  ${ctaBand()}
  `
  );

  /* ---------------- HİZMET DETAY ---------------- */
  for (const s of services) {
    const renderServicePage = (pagePath) => {
      const crumbs = [
        { name: 'Ana Sayfa', path: '/' },
        { name: 'Hizmetler', path: '/hizmetler/' },
        { name: s.navTitle, path: pagePath },
      ];
      add(
        {
          path: pagePath,
          title: s.metaTitle,
          description: s.metaDesc,
          breadcrumbs: crumbs,
          ogImage: imgUrl(s.image, 1200),
          schema: [
            serviceSchema({ name: s.h1, description: s.metaDesc, path: pagePath, image: imgUrl(s.image, 1200) }),
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
    };

    renderServicePage(`/hizmetler/${s.slug}/`);
    if (s.aliasSlug) {
      renderServicePage(`/hizmetler/${s.aliasSlug}/`);
    }
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
        'Topçular Yemek örnek haftalık tabldot menüsü: çorba, ana yemek, yardımcı yemek ve salata / tatlı / içecekten oluşan dengeli toplu yemek menüleri. Gebze’de fabrika ve ofislere servis.',
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
    lead: 'Her gün 4 çeşit: çorba, ana yemek, yardımcı yemek ve salata / tatlı / içecek. Menüler aylık planlanır, firmanızın isteğine göre şekillenir.',
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

  <!-- ZENGİN YEMEK YELPAZESİ & LEZZET KATALOĞU -->
  ${foodCatalogSection()}

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
      title: 'Hakkımızda | Gebze Toplu Yemek Firması & Restoran – Topçular Yemek',
      description:
        'Topçular Yemek; Gebze merkezli, KOBİ, fabrika, okul ve hastanelere toplu yemek ve tabldot servisi sunan, aynı zamanda Sultan Orhan merkez salonunda oturup yeme imkanı sağlayan yerel yemek firmasıdır.',
      breadcrumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Hakkımızda', path: '/hakkimizda/' }],
    },
    `
  ${pageHero({
    crumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Hakkımızda', path: '/hakkimizda/' }],
    kicker: 'Hakkımızda',
    h1: 'Gebze’nin Toplu Yemek Mutfağı: Topçular Yemek',
    lead: 'Gebze’nin güvenilir toplu yemek mutfağı: İşletmelere dakik tabldot ve sıcak toplu yemek sağlarken, Sultan Orhan merkezimizdeki ferah yemek salonumuzda oturup yeme imkanı sunuyoruz.',
    image: 'kalite',
    imageAlt: 'Topçular Yemek kurumsal standartları: Günlük taze üretim, hijyenik mutfak, termobox sıcak sevkiyat ve zamanında teslimat',
  })}
  <section class="section">
    <div class="container content-grid">
      <article class="prose reveal">
        <h2>Hikâyemiz</h2>
        <p>Topçular Yemek, Gebze ve Kocaeli sanayisindeki KOBİ ve büyük ölçekli fabrikalara, organize sanayi bölgelerine, okullara, yurtlara, sağlık kurumlarına ve şantiyelere profesyonel tabldot ve toplu yemek sağlamak amacıyla kuruldu. Sultan Orhan Mahallesi 1141. Sokak No: 10 adresindeki merkez binamızda hem yüksek kapasiteli hijyenik endüstriyel mutfağımız hem de konuklarımızı ağırladığımız ferah bir yemek salonumuz bulunmaktadır.</p>
        <p>Her sabah erken saatlerde başlayan taze üretimimiz; zengin çorbalar, lokum gibi et ve tavuk yemekleri, tane tane pilavlar ve taze makarnalarla donatılır. Dileyen misafirlerimiz merkez salonumuza gelerek sabah kahvaltısını ve öğle yemeğini yerinde oturup afiyetle tüketebilir; dileyen işletmelere ise özel termobox filomuzla 70°C+ sıcak teslimat sağlıyoruz.</p>
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
  ${sectorsSection()}
  ${certsSection()}
  ${clientsBand()}
  ${ctaBand()}
  `
  );

  /* ---------------- BLOG LİSTESİ ---------------- */
  add(
    {
      path: '/blog/',
      title: 'Blog & Sektörel Rehberler | Gebze Toplu Yemek – Topçular Yemek',
      description:
        'Gebze, GOSB, TOSB ve Kocaeli sanayisi için tabldot yemek rehberleri, kurumsal beslenme ipuçları ve güncel mutfak bültenlerimiz.',
      breadcrumbs: [{ name: 'Ana Sayfa', path: '/' }, { name: 'Blog', path: '/blog/' }],
    },
    `
  <section class="page-hero page-hero-simple">
    <div class="container">
      ${breadcrumbNav([{ name: 'Ana Sayfa', path: '/' }, { name: 'Blog', path: '/blog/' }])}
      <span class="eyebrow">${icon('sparkles')} Güncel Makaleler &amp; Sektörel Rehberler</span>
      <h1>Toplu Yemek &amp; Tabldot Rehberi</h1>
      <p class="lead">Gebze sanayisindeki fabrikalar, OSB işletmeleri ve şantiyeler için doğru yemek seçimi, gıda güvenliği ve maliyet avantajları üzerine uzman içeriklerimiz.</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="blog-grid">
        <article class="blog-card blog-card-featured reveal">
          <a href="/blog/gebze-fabrika-tabldot-yemek-rehberi/" class="blog-media">
            ${img('dailyMenu', 'Gebze Fabrika ve İşletmeleri İçin Tabldot Yemek Rehberi: Lezzet, Hijyen ve Zamanında Teslimat', { sizes: '(max-width: 900px) 100vw, 45vw' })}
            <span class="blog-badge">${icon('fire')} Öne Çıkan Rehber</span>
          </a>
          <div class="blog-body">
            <div class="blog-meta">
              <span>📅 21 Ekim 2026</span>
              <span>⏱️ 6 Dk Okuma</span>
              <span>🏷️ Fabrika &amp; OSB Yemek Rehberi</span>
            </div>
            <h2><a href="/blog/gebze-fabrika-tabldot-yemek-rehberi/">Gebze Fabrika ve İşletmeleri İçin Tabldot Yemek Rehberi: Lezzet, Hijyen ve Zamanında Teslimat</a></h2>
            <p>GOSB, TOSB, Dilovası İMES ve Gebze sanayisindeki fabrikalar için tabldot yemek seçiminin çalışan motivasyonuna etkisi, termobox sıcaklık garantisi ve 5 altın kuralı inceleyin.</p>
            <div class="blog-tags">
              <span class="tag-pill">Gebze tabldot yemek</span>
              <span class="tag-pill">GOSB catering</span>
              <span class="tag-pill">Taşımalı yemek Gebze</span>
            </div>
            <a class="btn btn-primary btn-sm" href="/blog/gebze-fabrika-tabldot-yemek-rehberi/">Rehberi Okuyun ${icon('arrow')}</a>
          </div>
        </article>
      </div>
    </div>
  </section>
  ${ctaBand('Fabrikanız için özel menü ve teklif hazırlayalım.')}
  `
  );

  /* ---------------- BLOG DETAY: GEBZE FABRİKA TABLDOT YEMEK REHBERİ ---------------- */
  add(
    {
      path: '/blog/gebze-fabrika-tabldot-yemek-rehberi/',
      title: 'Gebze Fabrika ve İşletmeleri İçin Tabldot Yemek Rehberi | Topçular Yemek',
      description:
        'Gebze, GOSB, TOSB ve Dilovası İMES fabrikaları için tabldot yemek seçim rehberi: 70°C+ termobox sıcaklığı, 4 kap besin dengesi, ISO standartları ve doğru catering seçimi.',
      keywords:
        'gebze tabldot yemek, gebze toplu yemek firmaları, gebze fabrika yemek servisi, gosb catering, taşımalı yemek gebze, tosb yemek firması, dilovası imes yemek',
      breadcrumbs: [
        { name: 'Ana Sayfa', path: '/' },
        { name: 'Blog', path: '/blog/' },
        { name: 'Gebze Fabrika Tabldot Yemek Rehberi', path: '/blog/gebze-fabrika-tabldot-yemek-rehberi/' },
      ],
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Gebze Fabrika ve İşletmeleri İçin Tabldot Yemek Rehberi: Lezzet, Hijyen ve Zamanında Teslimat',
          description:
            'Gebze fabrika ve işletmelerinde tabldot yemek seçiminde dikkat edilmesi gereken 5 altın kural, termobox sıcaklık garantisi ve menü besin dengesi analizi.',
          image: [imgUrl('dailyMenu', 1200), imgUrl('termoboxKitchen', 1200)],
          datePublished: '2026-10-21T08:00:00+03:00',
          dateModified: '2026-10-21T08:00:00+03:00',
          author: { '@type': 'Organization', name: 'Topçular Yemek', url: site.url },
          publisher: { '@id': `${site.url}/#isletme` },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${site.url}/blog/gebze-fabrika-tabldot-yemek-rehberi/`,
          },
        },
      ],
    },
    `
  <section class="page-hero page-hero-article">
    <div class="container">
      ${breadcrumbNav([
        { name: 'Ana Sayfa', path: '/' },
        { name: 'Blog', path: '/blog/' },
        { name: 'Gebze Fabrika Tabldot Yemek Rehberi', path: '/blog/gebze-fabrika-tabldot-yemek-rehberi/' },
      ])}
      <span class="eyebrow eyebrow-saffron">${icon('sparkles')} Kapsamlı Sektörel Rehber</span>
      <h1>Gebze Fabrika ve İşletmeleri İçin Tabldot Yemek Rehberi: Lezzet, Hijyen ve Zamanında Teslimat</h1>
      <div class="article-meta">
        <span>✍️ <strong>Topçular Yemek Editör Ekibi</strong></span>
        <span>📅 21 Ekim 2026</span>
        <span>⏱️ 6 Dakika Okuma</span>
        <span>🏭 Gebze · GOSB · TOSB · Dilovası İMES</span>
      </div>
    </div>
  </section>

  <article class="section article-content-wrap">
    <div class="container article-grid">
      <div class="article-body prose">
        <p class="article-lead">Sanayi kenti Gebze’de yüzlerce fabrika, organize sanayi bölgesindeki tesisler ve şantiyeler için öğle yemeği yalnızca bir yemek molası değildir; <strong>çalışan memnuniyetini, iş güvenliğini ve öğleden sonraki vardiya verimliliğini doğrudan belirleyen en kritik operasyonel süreçtir</strong>.</p>
        
        <p>GOSB (Gebze Organize Sanayi Bölgesi), TOSB Otomotiv İhtisas, Dilovası İMES OSB, Güzeller OSB ve Çayırova sanayi kuşaklarında faaliyet gösteren sanayi kuruluşlarının İK yöneticileri ve satın alma sorumluları her gün aynı soruyla karşılaşır: <em>"Yemekler her gün taze, sıcak ve doyurucu mu gelecek, yoksa vardiya mola saatinde aksamalar mı yaşanacak?"</em></p>

        <p>Bu rehberde, Gebze'deki fabrikalar için doğru <strong>tabldot yemek</strong> ve <strong>taşımalı kazan yemek servisi</strong> seçerken dikkat edilmesi gereken 5 altın kuralı, Termobox sıcaklık zincirinin önemini ve mutfak standartlarımızı detaylarıyla ele alıyoruz.</p>

        <hr>

        <h2>1. Çalışan Motivasyonu ve Vardiya Verimliliğinde Yemeğin Rolü</h2>
        <p>Ağır sanayi, metal, otomotiv, plastik ve kimya sektörlerinde fiziksel ve zihinsel efor sarf eden personelin günlük 850 ila 1.100 kcal arasında temiz ve dengeli enerjiye ihtiyacı vardır. Yetersiz porsiyonlar, bayat malzemeler veya mikrodalgada ısıtılmış soğuk yemekler; personelde halsizlik, memnuniyetsizlik ve dolaylı olarak iş kazası riskini artırır.</p>
        <p>Topçular Yemek olarak Sultan Orhan Mahallesi'ndeki merkez mutfağımızda her sabah erken saatlerde üretime başlarken temel felsefemiz; <strong>"Annenizin yemeği gibi ev lezzetinde, kurumsal fabrika disiplininde bol porsiyonlu servis"</strong> sunmaktır.</p>

        <!-- GÖRSEL 1 KARTI: GÜNÜN 4 KAP SICAK MENÜSÜ -->
        <div class="article-visual-card reveal">
          <div class="article-visual-media">
            ${img('dailyMenu', 'Günün 4 Kap Sıcak Menüsü: Süzme mercimek çorbası, sebzeli dana tas kebabı, pirinç pilavı, cacık ve somun ekmek', { sizes: '(max-width: 900px) 100vw, 760px' })}
            <span class="visual-tag">${icon('fire')} Günün 4 Kap Sıcak Menüsü</span>
          </div>
          <div class="article-visual-caption">
            <h3>Görsel 1: Günün 4 Kap Sıcak Menüsü (Lezzet ve Doyuruculuk Odaklı)</h3>
            <p><strong>Görselin Öne Çıkardığı Değerler:</strong> Taze süzme mercimek çorbası, lokum kıvamında sebzeli dana tas kebabı, tereyağlı şehriyeli pirinç pilavı, taze ferahlatıcı cacık ve çıtır somun ekmek sunumu.</p>
            <div class="quote-box">
              <span class="quote-icon">${icon('chat')}</span>
              <p><strong>Müşteriye Atılacak Örnek Mesaj:</strong> “Bugün Topçular Yemek mutfağından fabrikalarınıza ev sıcaklığı taşıyoruz! Usta ellerden çıkan sıcacık mercimek çorbamız, lokum kıvamında tas kebabımız ve dengeli menümüz vardiyanıza enerji katmaya hazır. Afiyet olsun!”</p>
            </div>
          </div>
        </div>

        <h2>2. Tabldot Yemek Seçiminde 5 Altın Kural</h2>
        <p>Fabrikanız için bir yemek şirketiyle anlaşmadan önce mutlaka şu 5 teknik ve operasyonel kriteri sorgulayın:</p>

        <div class="rules-stack">
          <div class="rule-box reveal">
            <span class="rule-no">01</span>
            <div>
              <h3>Termobox Sıcaklık Garantisi (70°C+ Sabit Isı)</h3>
              <p>Yemekler mutfaktan çıktığı anda çift cidarlı, poliüretan yalıtımlı gastronom küvetlere mühürlenmelidir. Termobox teknolojisi sayesinde yemekler mikrodalga veya benmaride tekrar ısıtılmaya gerek kalmadan, ilk piştiği sıcaklık ve buharıyla fabrikanızın masasında hazır olur.</p>
            </div>
          </div>

          <div class="rule-box reveal">
            <span class="rule-no">02</span>
            <div>
              <h3>4 Kap Besin ve Kalori Dengesi</h3>
              <p>Gerçek bir tabldot menüsü rastgele yemeklerden oluşmaz. 1. Çeşit sıcak çorba ile sindirim hazırlanır; 2. Çeşit ana yemekle protein (et, tavuk, hindi) ihtiyacı karşılanır; 3. Çeşit pilav/makarna ile karbonhidrat dengelenir; 4. Çeşit salata/tatlı/meyve veya ayran ile vitamin-mineral dengesi tamamlanır.</p>
            </div>
          </div>

          <div class="rule-box reveal">
            <span class="rule-no">03</span>
            <div>
              <h3>Uluslararası Akredite ISO 22000, 9001 ve 45001 Standartları</h3>
              <p>Merdiven altı, denetimsiz catering şirketleri yerine; T.C. Tarım ve Orman Bakanlığı üretim izinli ve uluslararası akredite ISO 22000 (Gıda Güvenliği), ISO 9001 (Kalite Yönetimi) ve ISO 45001 (İş Sağlığı) belgelerine sahip mutfakları tercih edin. Bu belgeler her lokmanın güvencesidir.</p>
            </div>
          </div>

          <div class="rule-box reveal">
            <span class="rule-no">04</span>
            <div>
              <h3>72 Saatlik Şahit Numune Saklama Disiplini</h3>
              <p>Profesyonel endüstriyel mutfaklarda, o gün pişen her partiden steril cam kavanozlara şahit numune alınır ve özel numune buzdolabında 72 saat boyunca muhafaza edilir. Olası tüm sağlık kontrollerinde bu numuneler laboratuvar incelemesine hazırdır.</p>
            </div>
          </div>

          <div class="rule-box reveal">
            <span class="rule-no">05</span>
            <div>
              <h3>Sıfır Donuk Ürün Politikası</h3>
              <p>Endüstriyel hazır donuk köfteler, toz soslar ve yapay bulyonlar mide yanması ve halsizlik yapar. Mutfağa giren et yerli kasap eti olmalı; sebzeler her sabah halden taze alınmalı ve yemekler doğal kemik suyu ve tereyağı ile tatlandırılmalıdır.</p>
            </div>
          </div>
        </div>

        <!-- GÖRSEL 2 KARTI: ENDÜSTRİYEL HİJYEN VE TERMOBOX SEVKİYATI -->
        <div class="article-visual-card reveal">
          <div class="article-visual-media">
            ${img('termoboxKitchen', 'Endüstriyel Hijyen ve Termobox Sevkiyatı: Paslanmaz çelik mutfakta aşçılar yemekleri termobox küvetlerine aktarıyor', { sizes: '(max-width: 900px) 100vw, 760px' })}
            <span class="visual-tag tag-blue">${icon('shield')} Endüstriyel Hijyen &amp; Sevkiyat</span>
          </div>
          <div class="article-visual-caption">
            <h3>Görsel 2: Endüstriyel Hijyen ve Termobox Sevkiyatı (Güven ve Kurumsallık Odaklı)</h3>
            <p><strong>Görselin Öne Çıkardığı Değerler:</strong> Paslanmaz çelik endüstriyel mutfak ekipmanları, ISO standartlarında bone, eldiven, maske ve önlük hijyeni; buharı üstünde tüten taze yemeklerin ısı yalıtımlı Termobox küvetlerine aktarılması.</p>
            <div class="quote-box">
              <span class="quote-icon">${icon('chat')}</span>
              <p><strong>Müşteriye Atılacak Örnek Mesaj:</strong> “Sultan Orhan Mahallesindeki merkez mutfağımızda her sabah aynı titizlikle üretiyoruz. Yemekleriniz fabrikasyon değil, %100 taze malzemelerle hazırlanıp özel Termobox taşıma sistemimizle masanıza ilk anki sıcaklığında ulaşıyor.”</p>
            </div>
          </div>
        </div>

        <h2>3. Geleneksel Fason Yemekçiler ile Topçular Yemek Karşılaştırması</h2>
        <p>Fabrikaların en sık yaşadığı operasyonel sorunlar ve Topçular Yemek yaklaşımı:</p>
        
        <div class="article-table-wrap reveal">
          <table class="article-table">
            <thead>
              <tr>
                <th>Hizmet Özelliği</th>
                <th>Sıradan Fason Yemekçiler</th>
                <th>Topçular Yemek Entegre Standartları</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Yemek Sıcaklığı</strong></td>
                <td>Ilık / Soğuk teslimat, lezzet kaybı</td>
                <td>70°C+ Termobox ile ilk piştiği sıcaklıkta</td>
              </tr>
              <tr>
                <td><strong>Porsiyon Doyuruculuğu</strong></td>
                <td>Gramajı kısılmış, aç bırakan menüler</td>
                <td>Ağır sanayiye özel bol etli, doyurucu porsiyon</td>
              </tr>
              <tr>
                <td><strong>Malzeme Kalitesi</strong></td>
                <td>Donuk hazır köfte, bulyon ve hazır sos</td>
                <td>Günlük hal sebzesi, yerli kasap eti, doğal et suyu</td>
              </tr>
              <tr>
                <td><strong>Teslimat Dakikliği</strong></td>
                <td>Vardiya saatini kaçıran gecikmeler</td>
                <td>Mola sireninden 15 dakika önce masada hazır</td>
              </tr>
              <tr>
                <td><strong>Resmi Belgeler</strong></td>
                <td>Eksik veya denetimsiz merdiven altı</td>
                <td>ISO 9001, ISO 22000, ISO 45001 akredite tesis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>4. Gebze ve OSB Bölgelerine Hızlı Lojistik Hatlarımız</h2>
        <p>Toplu yemekte mesafe ve lojistik, yemek kalitesinin en büyük belirleyicisidir. Sultan Orhan Mahallesi 1141. Sokak No: 10 Gebze adresindeki merkez mutfağımız; ana otoyol ve sanayi bağlantı yollarının tam kalbinde yer alır.</p>
        <ul>
          <li><a href="/bolgeler/gosb-toplu-yemek/"><strong>GOSB (Gebze Organize Sanayi Bölgesi):</strong></a> ~12 Dakika ring süresi ile sıfır ısı kaybı.</li>
          <li><a href="/bolgeler/tosb-toplu-yemek/"><strong>TOSB (Otomotiv Yan Sanayi İhtisas OSB):</strong></a> ~18 Dakikada vardiya saatlerine özel dakik teslimat.</li>
          <li><a href="/bolgeler/dilovasi-imes-yemek/"><strong>Dilovası İMES &amp; Makineciler OSB:</strong></a> ~22 Dakikada ağır sanayi doyurucu menüleri.</li>
          <li><a href="/bolgeler/gebze-osb-yemek/"><strong>Güzeller OSB &amp; Plastikçiler OSB:</strong></a> ~10-15 Dakikada taze ve sıcak teslimat.</li>
          <li><a href="/bolgeler/cayirova-toplu-yemek/"><strong>Çayırova, Darıca &amp; Tuzla Sanayi:</strong></a> Atölye, şantiye ve fabrikalara planlı ring seferi.</li>
        </ul>

        <div class="article-cta-box reveal">
          <h3>Fabrikanız İçin Ücretsiz Teklif Alın</h3>
          <p>Kişi sayınızı, vardiya saatlerinizi ve adresinizi iletin; işletmenize en uygun aylık menü planını ve avantajlı kurumsal fiyat teklifimizi aynı gün hazırlayalım.</p>
          <div class="btn-row">
            <a class="btn btn-wa btn-lg" href="${waHref('Merhaba Topçular Yemek, fabrikamız için tabldot yemek teklifi ve örnek menü almak istiyoruz.')}" target="_blank" rel="noopener">${waIcon()} WhatsApp ile Teklif İste</a>
            <a class="btn btn-primary btn-lg" href="${telHref}">${icon('phone')} ${esc(site.phone)}</a>
          </div>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-card reveal">
          <h3>Hızlı İletişim</h3>
          <p>Gebze merkez mutfağımızdan işletmenize her gün taze ve sıcak yemek servisi.</p>
          <ul class="sidebar-links">
            <li><a href="${telHref}">${icon('phone')} ${esc(site.phone)}</a></li>
            <li><a href="${waHref()}" target="_blank" rel="noopener">${waIcon()} WhatsApp Canlı Destek</a></li>
            <li><a href="${esc(site.mapsUrl)}" target="_blank" rel="noopener">${icon('pin')} Sultan Orhan Mah. 1141. Sokak No: 10, Gebze</a></li>
          </ul>
        </div>

        <div class="sidebar-card reveal">
          <h3>Hizmetlerimiz</h3>
          <ul class="sidebar-menu">
            <li><a href="/hizmetler/tabldot-yemek/">🍱 Tabldot Yemek Servisi</a></li>
            <li><a href="/hizmetler/kazan-yemek-servisi/">🍲 Kazan Yemek (Taşımalı)</a></li>
            <li><a href="/hizmetler/fabrika-yemek/">🏭 Fabrika Yemekhane Hizmeti</a></li>
            <li><a href="/hizmetler/organizasyon-yemek/">🎉 Organizasyon &amp; Davet</a></li>
            <li><a href="/menu/">📋 Örnek Haftalık Menü</a></li>
          </ul>
        </div>

        <div class="sidebar-card reveal">
          <h3>Kalite Sertifikalarımız</h3>
          <p>Topçular Yemek, ISO 22000 gıda güvenliği ve ISO 9001 kalite yönetim sistemleriyle akreditedir.</p>
          <a class="link-arrow" href="/hakkimizda/#sertifikalar">Sertifikaları İnceleyin ${icon('arrow')}</a>
        </div>
      </aside>
    </div>
  </article>
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
        <a class="contact-card reveal" href="${telHref}">
          ${icon('phone')}
          <span><small>1. Telefon Hattı (Sipariş &amp; Bilgi)</small><strong>${esc(site.phone)}</strong></span>
        </a>
        ${site.altPhone ? `
        <a class="contact-card reveal" href="tel:${site.altPhoneIntl}">
          ${icon('phone')}
          <span><small>2. Telefon Hattı (Sevkiyat &amp; Lojistik)</small><strong>${esc(site.altPhone)}</strong></span>
        </a>` : ''}
        <a class="contact-card reveal" href="${waHref()}" target="_blank" rel="noopener">
          ${waIcon()}
          <span><small>WhatsApp Canlı Destek</small><strong>Anında Mesaj Yazın (7/24)</strong></span>
        </a>
        <a class="contact-card reveal" href="mailto:${esc(site.email)}">
          ${icon('mail')}
          <span><small>Kurumsal E-posta</small><strong>${esc(site.email)}</strong></span>
        </a>
        <a class="contact-card reveal" href="${esc(site.mapsUrl)}" target="_blank" rel="noopener">
          ${icon('pin')}
          <span><small>Merkez Mutfak Adresi</small><strong>${esc(fullAddress())}</strong><small class="link-sub">Google Haritalar'da Aç &amp; Yol Tarifi Al ➔</small></span>
        </a>
        <div class="contact-card reveal">
          ${icon('clock')}
          <span><small>Üretim &amp; Sevkiyat Saatleri</small>${site.hours.map((h) => `<strong>${esc(h.label)}: ${h.opens} – ${h.closes}</strong>`).join('')}</span>
        </div>
        <p class="note">⚠️ <strong>Önemli Bilgilendirme:</strong> İşletmemiz endüstriyel toplu yemek mutfağıdır; oturmalı restoran/lokanta servisi bulunmamaktadır. Tüm üretimimiz Gebze ve OSB fabrikalarına, ofislere ve şantiyelere özel ısı yalıtımlı termobox araçlarımızla teslim edilmektedir.</p>
      </div>
      <form class="quote-form reveal" id="teklif" novalidate>
        <h2>Ücretsiz Teklif Formu</h2>
        <div class="form-row">
          <label for="f-ad">Ad Soyad *<input id="f-ad" name="ad" required autocomplete="name" placeholder="Adınız ve Soyadınız"></label>
          <label for="f-firma">Firma Adı<input id="f-firma" name="firma" autocomplete="organization" placeholder="Fabrika / Şirket Adı"></label>
        </div>
        <div class="form-row">
          <label for="f-tel">Telefon *<input id="f-tel" name="tel" type="tel" required autocomplete="tel" inputmode="tel" placeholder="0 (5XX) XXX XX XX"></label>
          <label for="f-kisi">Günlük Kişi Sayısı *<input id="f-kisi" name="kisi" type="number" min="1" required inputmode="numeric" placeholder="Örn: 50"></label>
        </div>
        <div class="form-row">
          <label for="f-hizmet">Hizmet Türü
            <select id="f-hizmet" name="hizmet">
              ${services.map((s) => `<option>${esc(s.navTitle)}</option>`).join('')}
              <option>Henüz karar vermedim</option>
            </select>
          </label>
          <label for="f-bolge">Teslimat Bölgesi
            <select id="f-bolge" name="bolge">
              ${regions.map((r) => `<option>${esc(r.name)}</option>`).join('')}
              <option>Diğer</option>
            </select>
          </label>
        </div>
        <label for="f-mesaj">Özel Notlarınız<textarea id="f-mesaj" name="mesaj" rows="4" placeholder="Teslimat saati, vardiya mola saatleri, özel menü istekleri…"></textarea></label>
        <button class="btn btn-primary btn-lg btn-block" type="submit" id="f-gonder">${waIcon()} WhatsApp ile Teklif İste</button>
        <p class="form-msg" id="form-msg" role="status" aria-live="polite"></p>
      </form>
    </div>
  </section>
  <section class="map-section" aria-label="Topçular Yemek konumu">
    <div class="map-overlay-card reveal">
      <div class="map-overlay-content">
        <div class="map-pin-icon">${icon('pin')}</div>
        <div>
          <strong>Topçular Yemek Mutfak Merkezi</strong>
          <p>Sultan Orhan Mah. 1141. Sokak No: 10, Gebze / Kocaeli</p>
          <a href="${esc(site.mapsUrl)}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Google Haritada Aç ${icon('arrow')}</a>
        </div>
      </div>
    </div>
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
