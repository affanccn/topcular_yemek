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
  legalName: 'Topçular Yemek', // TODO: Ticari unvan (örn. "Topçular Yemek Gıda San. Tic. Ltd. Şti.")
  slogan: 'Gebze’nin Toplu Yemek Mutfağı',

  /** Canlı domain (sonunda / olmadan). Canonical, sitemap ve OG için kullanılır. */
  url: 'https://www.topcularyemek.com', // TODO: gerçek domain

  /** Telefon: görünen format + tel: linki için uluslararası format */
  phone: '0 (5XX) XXX XX XX', // TODO
  phoneIntl: '+905000000000', // TODO
  /** WhatsApp numarası: başında + olmadan, ülke koduyla */
  whatsapp: '905000000000', // TODO
  email: 'info@topcularyemek.com', // TODO

  address: {
    street: 'TODO Mahallesi, TODO Sokak No: X', // TODO: Google Haritalar’daki adresin aynısı
    district: 'Gebze',
    city: 'Kocaeli',
    postalCode: '41400', // TODO: kontrol edin
    country: 'TR',
  },

  /** Haritadaki konum (Google Maps’te pine sağ tık → koordinatı kopyala) */
  geo: { lat: 40.8028, lng: 29.4307 }, // TODO: işletmenin gerçek koordinatı

  /** Google Haritalar kısa linki */
  mapsUrl: 'https://maps.app.goo.gl/14qpTCyjTi3kZgk49',

  /** Çalışma saatleri (Schema.org için İngilizce gün adları) */
  hours: [
    {
      label: 'Pazartesi – Cumartesi',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    }, // TODO: gerçek saatler
  ],

  /** Minimum sipariş (kişi). null yaparsanız sitede gösterilmez. */
  minOrder: 20, // TODO

  /** Ana sayfadaki rakamlar. Boş dizi [] bırakırsanız bölüm gizlenir. */
  stats: [
    { value: '10+', label: 'Yıllık tecrübe' }, // TODO: gerçek değerler
    { value: '2.000+', label: 'Günlük porsiyon' },
    { value: '50+', label: 'Kurumsal müşteri' },
    { value: '%100', label: 'Günlük taze üretim' },
  ],

  /** Sosyal medya linkleri (boş olanlar gösterilmez, sameAs’a eklenmez) */
  social: {
    instagram: '', // TODO: https://instagram.com/...
    facebook: '',
    linkedin: '',
  },

  /** Google Search Console doğrulama kodu (meta etiketi içeriği) */
  googleSiteVerification: '', // TODO
};
