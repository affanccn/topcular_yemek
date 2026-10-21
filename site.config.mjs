/**
 * ============================================================
 *  TOPÇULAR YEMEK – SİTE AYARLARI (TEK KAYNAK)
 * ============================================================
 *  Telefon, adres, domain vb. TÜM işletme bilgileri buradan yönetilir.
 *  Burayı değiştirip `npm run build` çalıştırınca bütün sayfalar,
 *  Schema.org (Google yapılandırılmış veri), sitemap ve footer güncellenir.
 *
 *  ⚠️  "TODO" yazan alanları müşteriden aldığınız GERÇEK bilgilerle doldurun.
 *  ⚠️  Adres / telefon, Google Haritalar (Business Profile) kaydıyla
 *      BİREBİR aynı yazılmalı (NAP tutarlılığı = yerel SEO'nun temeli).
 * ============================================================
 */
export const site = {
  name: 'Topçular Yemek',
  legalName: 'Topçular Emlak İnşaat Spor Tesisleri Otopark Lokanta Sanayi ve Ticaret Limited Şirketi',
  slogan: 'Her Gün Taze, Her Gün Lezzetli – Gebze’nin Toplu Yemek Mutfağı',

  /** Canlı domain (sonunda / olmadan). Canonical, sitemap ve OG için kullanılır. */
  url: process.env.SITE_URL || 'https://topcularyemek.vercel.app',

  /** Telefon: görünen format + tel: linki için uluslararası format */
  phone: '0 (532) 499 92 41',
  phoneIntl: '+905324999241',
  altPhone: '0 (533) 719 69 11',
  altPhoneIntl: '+905337196911',
  /** WhatsApp numarası: başında + olmadan, ülke koduyla */
  whatsapp: '905324999241',
  email: 'iletisim@topcularyemek.com',

  address: {
    street: 'Sultan Orhan Mahallesi, 1141. Sokak No: 10',
    district: 'Gebze',
    city: 'Kocaeli',
    postalCode: '41400',
    country: 'TR',
  },

  /** Haritadaki kesin konum (Google Maps koordinatları) */
  geo: { lat: 40.8016053, lng: 29.4473255 },

  /** Google Haritalar kısa linki ve İşletme Paylaşım bağlantısı */
  mapsUrl: 'https://maps.app.goo.gl/14qpTCyjTi3kZgk49',
  googleShareUrl: 'https://share.google/JlrYk5VACr8a8jMdX',

  /** Çalışma saatleri (Schema.org için İngilizce gün adları) */
  hours: [
    {
      label: 'Pazartesi – Cumartesi',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
  ],

  /** Minimum sipariş (kişi). null yaparsanız sitede gösterilmez. */
  minOrder: 20,

  /** Ana sayfadaki rakamlar */
  stats: [
    { value: '10+', label: 'Yıllık Sektör Tecrübesi' },
    { value: '2.500+', label: 'Günlük Sıcak Porsiyon' },
    { value: '60+', label: 'Fabrika & Kurumsal Firma' },
    { value: '%100', label: 'Günlük Taze Pişirme' },
  ],

  /** Sosyal medya linkleri */
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
  },

  /** Google Search Console doğrulama kodu (meta etiketi içeriği) */
  googleSiteVerification: '',
};
