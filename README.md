# Topçular Yemek – Gebze Toplu Yemek & Tabldot Web Sitesi

Gebze ve çevresindeki (GOSB, TOSB, Dilovası OSB, Darıca, Çayırova) fabrikalara, ofislere ve şantiyelere toplu yemek, tabldot ve kazan servisi yapan **Topçular Yemek** için hazırlanmış, **iştah açıcı tasarıma ve %100 yerel SEO odaklı mimariye** sahip web sitesi.

> **Canlı Önizleme:** Yerel geliştirme sunucusu `http://localhost:4321` adresinde çalışır.

---

## 🚀 Hızlı Başlangıç

```bash
# Bağımlılıkları yükle (yalnızca derleme sırasında WebP optimizasyonu yapan 'sharp')
npm install

# Statik siteyi derle (dist/ klasörüne üretir)
npm run build

# Yerel önizleme sunucusunu başlat (http://localhost:4321)
npm run serve

# Hem derle hem başlat
npm run dev
```

---

## 📂 Proje Yapısı

```
topcular_yemek/
├── site.config.mjs          ← ⭐️ TEK MERKEZİ AYAR DOSYASI (Telefon, adres, harita, saatler)
├── package.json
│
├── content/                 ← İÇERİK YÖNETİMİ
│   ├── images.mjs           ← Görsel slotları (fotoğrafları tek satırda değiştirme)
│   ├── services.mjs         ← Hizmet sayfaları (Tabldot, Kazan, Fabrika, Organizasyon)
│   ├── regions.mjs          ← Yerel SEO sayfaları (Gebze, OSB'ler, Darıca, Çayırova, Dilovası, Tuzla)
│   ├── menu.mjs             ← Haftalık örnek tabldot menüleri
│   └── faq.mjs              ← Sık sorulan sorular
│
├── src/
│   ├── assets/
│   │   ├── css/style.css    ← Sıcak gourmet tasarım sistemi (Krem / Paprika / Safran)
│   │   ├── js/main.js       ← Sekmeler, mobil menü, WhatsApp teklif formu (~3KB, bağımlılıksız)
│   │   └── img/             ← Kaynak fotoğraflar (.jpg)
│   └── public/              ← Statik dosyalar
│
├── build/                   ← STATİK SİTE DERLEYİCİSİ (Framework gerektirmez)
│   ├── build.mjs            ← sharp ile duyarlı WebP üretimi, HTML oluşturma, sitemap, manifest
│   ├── pages.mjs            ← Sayfa şablonları
│   ├── layout.mjs           ← Ortak iskelet, SEO meta, JSON-LD şemaları, header/footer
│   ├── lib.mjs              ← SVG ikonlar, Schema.org yardımcıları
│   └── serve.mjs            ← Sıfır bağımlılıklı HTTP sunucusu
│
└── dist/                    ← YAYINA HAZIR KLASÖR (Hosting veya sunucuya doğrudan yüklenir)
    ├── index.html
    ├── sitemap.xml
    ├── robots.txt
    ├── site.webmanifest
    ├── .htaccess            ← Apache sıkıştırma, önbellek ve 404 yönlendirmesi
    ├── assets/              ← Optimize edilmiş WebP görseller, CSS, JS
    ├── hizmetler/           ← 4 adet özgün hizmet sayfası
    ├── bolgeler/            ← 6 adet özgün yerel SEO sayfası
    ├── menu/
    ├── hakkimizda/
    ├── sss/
    └── iletisim/
```

---

## 🛠️ Müşteri Bilgilerini Güncelleme Rehberi

### 1. Telefon, Adres ve Harita (`site.config.mjs`)
Müşteriden aldığınız gerçek bilgileri [site.config.mjs](file:///c:/Users/Cucen_Home/Desktop/Emirhan/topcular_yemek/site.config.mjs) dosyasına yazın:
- `phone`: Görünen numara (örn. `0 (262) XXX XX XX`)
- `phoneIntl`: Tıklanınca arama formatı (`+90262XXXXXXX`)
- `whatsapp`: WhatsApp numarası (`905XXXXXXXXX`)
- `address`: **Google Haritalar (Business Profile) kaydındaki adresle BİREBİR AYNI olmalıdır.**
- `geo`: Haritadaki enlem/boylam koordinatları.
- `hours`: Çalışma gün ve saatleri.

Bilgileri güncelledikten sonra `npm run build` komutunu çalıştırın. Bütün sayfalardaki telefonlar, harita linkleri, footer ve Google'a sunulan Schema.org yapılandırılmış verileri otomatik olarak güncellenir.

### 2. Gerçek Fotoğrafları Yükleme (`src/assets/img/` ve `content/images.mjs`)
Müşterinizden mutfak, yemek veya araç fotoğrafları geldiğinde:
1. Fotoğrafı `src/assets/img/` içine atın (örn. `mutfak-yeni.jpg`).
2. [content/images.mjs](file:///c:/Users/Cucen_Home/Desktop/Emirhan/topcular_yemek/content/images.mjs) dosyasındaki ilgili slotu güncelleyin:
   ```javascript
   export const images = {
     hero: 'gebze-toplu-yemek-tabldot',
     mutfak: 'mutfak-yeni', // ← Sadece adını yazın
     // ...
   };
   ```
3. `npm run build` çalıştırın. Sistem otomatik olarak:
   - 4 farklı boyutta (480px, 800px, 1200px, 1600px) WebP üretir,
   - `srcset` ve `sizes` etiketlerini bağlar,
   - Sosyal medya paylaşım görselini (1200x630) keser.

### 3. Menü Değişiklikleri (`content/menu.mjs`)
Haftalık güncellenen tabldot menülerini [content/menu.mjs](file:///c:/Users/Cucen_Home/Desktop/Emirhan/topcular_yemek/content/menu.mjs) içinden düzenleyebilirsiniz. Ana sayfadaki "Bugünün Menüsü" kartı ve sekme sistemi otomatik güncellenir.

---

## 🎯 Google'da Gebze'de 1. Sıraya Çıkma (SEO) Stratejisi

Web sitesi kodlama ve içerik tarafında Google'ın en sevdiği tüm standartları karşılamaktadır:

1. **Sayfa Hızı (Core Web Vitals):** 
   - 0 harici kütüphane/framework (saf HTML, CSS, JS).
   - Tüm fotoğraflar modern WebP formatında ve boyutlandırılmış (`srcset`).
   - İlk ekran yüklemesinde harici ikon fontu veya ağır script yoktur.
2. **Yapılandırılmış Veri (Schema.org / JSON-LD):**
   - Her sayfada Google için `LocalBusiness`, `FoodEstablishment`, `Service`, `Menu`, `FAQPage` ve `BreadcrumbList` şemaları mevcuttur. Google Haritalar işletme profili `@id` üzerinden bağlanmıştır.
3. **Özgün Yerel SEO Sayfaları:**
   - `/bolgeler/gebze-toplu-yemek/`
   - `/bolgeler/gebze-osb-yemek/` (GOSB, TOSB, Dilovası OSB, GEPOSB hedefli)
   - `/bolgeler/darica-toplu-yemek/`
   - `/bolgeler/cayirova-toplu-yemek/`
   - `/bolgeler/dilovasi-toplu-yemek/`
   - `/bolgeler/tuzla-toplu-yemek/`
   Her sayfa kopya içerik cezası almaması için kendine has metinlerle hazırlanmıştır.
4. **Hizmet Odaklı Alt Sayfalar:**
   - `/hizmetler/tabldot-yemek/`
   - `/hizmetler/kazan-yemek-servisi/`
   - `/hizmetler/fabrika-yemek/`
   - `/hizmetler/organizasyon-yemek/`

### 💡 Canlıya Aldıktan Sonra Yapılması Gereken 3 Adım (Kritik):
1. **Google Haritalar (Business Profile) Eşleşmesi:** Google Business Profile'daki dükkân adı, telefon ve adres, sitedeki `site.config.mjs` ile **harfi harfine aynı** olmalıdır. Web sitesi linki olarak bu site eklenmelidir.
2. **Google Search Console Kaydı:** Sitenin `sitemap.xml` adresi Search Console'a gönderilmelidir.
3. **Müşteri Yorumları:** Müşterilerin Google Haritalar profilinde *"Gebze fabrikamıza tabldot yemek alıyoruz, çok memnunuz"* gibi anahtar kelimeli gerçek yorumlar yapması sıralamayı çok hızlı yükseltir.

---

## 🌐 Yayına Alma (Deploy)

`npm run build` çalıştırıldığında `dist/` klasöründe oluşan dosyaları:
- **cPanel Hosting:** `public_html` içine `dist/` içindeki tüm dosya ve klasörleri sürükleyip bırakmanız yeterlidir. `.htaccess` dosyası gzip sıkıştırma ve önbellek ayarlarını otomatik yapacaktır.
- **Vercel / Netlify / Cloudflare Pages:**
  - Build command: `npm run build`
  - Output directory: `dist`
