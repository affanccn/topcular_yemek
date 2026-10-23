/**
 * TOPÇULAR YEMEK – MENÜ VE YEMEK KATALOĞU
 * Müşterilerimizin talepleri doğrultusunda zenginleştirilmiş gerçek mutfak kataloğu,
 * 4 haftalık örnek tabldot menüsü ve hizmet verilen sektörler.
 */

/** Mutfak Yemek Kataloğu (Kategorize edilmiş lezzetler) */
export const foodCatalog = {
  corbalar: {
    key: 'corba',
    title: 'Çorba Çeşitlerimiz',
    tag: 'Sıcak Başlangıç',
    icon: '🍲',
    desc: 'Her sabah erken saatlerde tereyağı ve taze malzemelerle hazırlanan iç ısıtan çorbalarımız:',
    items: [
      { name: 'Ezogelin Çorbası', badge: 'Geleneksel', desc: 'Kırmızı mercimek, pirinç, bulgur ve nane sosu' },
      { name: 'Süzme Mercimek Çorbası', badge: 'Klasik', desc: 'İpeksi kıvam, limon ve tereyağlı pul biber ile' },
      { name: 'Kremalı Domates Çorbası', badge: 'Özel Lezzet', desc: 'Taze domates püresi ve kaşar peyniri eşliğinde' },
      { name: 'Kremalı Mantar Çorbası', badge: 'Şefin Seçimi', desc: 'Taze kültür mantarı ve kıvamında süt kreması' },
      { name: 'Geleneksel Düğün Çorbası', badge: 'Özel Tarif', desc: 'Kuzu/dana eti terbiyesi ve süzme yoğurt ile' },
      { name: 'Taze Sebze Çorbası', badge: 'Hafif & Sağlıklı', desc: 'Mevsim sebzeleriyle hazırlanan vitamin deposu' },
    ],
  },
  etYemekleri: {
    key: 'et',
    title: 'Et Yemeklerimiz',
    tag: 'Zengin Protein',
    icon: '🥩',
    desc: 'Yerli besi, güvenilir kasap etiyle usta aşçılarımızın hazırladığı doyurucu ana yemekler:',
    items: [
      { name: 'Lokum Et Sote', badge: 'Çok Tercih Edilen', desc: 'Kuşbaşı dana eti, renkli biberler ve domates sos' },
      { name: 'Geleneksel Tas Kebabı', badge: 'Klasik Usta İşi', desc: 'Arpacık soğan, küp patates ve özel baharat harmanı' },
      { name: 'Sac Kavurma', badge: 'Geleneksel', desc: 'Kızgın sac üzerinde kekik ve domatesle pişen dana eti' },
      { name: 'Fırında İzmir Köfte', badge: 'Ev Lezzeti', desc: 'Hakiki kıymadan yoğrulmuş köfte, patates ve biber' },
      { name: 'Güveçte Etli Nohut', badge: 'Ağır Ateşte', desc: 'Et parçalarıyla helmelenmiş geleneksel nohut yemeği' },
      { name: 'Fırın Hasanpaşa Köfte', badge: 'Ziyafet Menüsü', desc: 'Köfte çanağında tereyağlı patates püresi ve erimiş kaşar' },
      { name: 'Özel Terbiyeli Dana Şiş', badge: 'Izgara Lezzeti', desc: 'Özel sosla marine edilmiş yumuşacık dana şiş' },
    ],
  },
  tavukYemekleri: {
    key: 'tavuk',
    title: 'Tavuk Yemeklerimiz',
    tag: 'Dengeli Enerji',
    icon: '🍗',
    desc: 'Taze piliç etinden hazırlanan, çalışanların en sevdiği lezzetli tavuk menüleri:',
    items: [
      { name: 'Özel Soslu Tavuk Sote', badge: 'Favori Menü', desc: 'Jülyen tavuk göğsü, kapya biber ve domates sos' },
      { name: 'Izgara Tavuk (Pirzola & Göğüs)', badge: 'Hafif & Izgara', desc: 'Marine edilmiş yumuşacık ızgara piliç' },
      { name: 'Sebzeli Tavuk Haşlama', badge: 'Şifa Kaynağı', desc: 'Havuç, patates ve taze kereviz yapraklarıyla' },
      { name: 'Taze Sebzeli Tavuk Güveç', badge: 'Fırın Lezzeti', desc: 'Mevsim sebzeleri ve tavuk parçalarıyla fırınlanmış' },
      { name: 'Kremalı Mantarlı Tavuk', badge: 'Özel Spesiyal', desc: 'Taze mantar, krema ve kekikli enfes sos' },
      { name: 'Yaprak Tavuk Döner', badge: 'Vardiya Gözdesi', desc: 'Özel sosuyla terbiye edilmiş taze yaprak tavuk döner' },
    ],
  },
  pilavlar: {
    key: 'pilav',
    title: 'Pilav Çeşitlerimiz',
    tag: 'Tane Tane',
    icon: '🍚',
    desc: 'Mis gibi tereyağı ile tane tane pişen yardımcı yemek seçeneklerimiz:',
    items: [
      { name: 'Etli Pirinç Pilavı', badge: 'Özel Gün & Davet', desc: 'Ağır ateşte pişen dana etiyle harmanlanmış baldo pirinç' },
      { name: 'Sebzeli Pilav (Bulgur & Pirinç)', badge: 'Lif Kaynağı', desc: 'Renkli biber, mısır ve bezelyeli nefis lezzet' },
      { name: 'Şehriyeli Pirinç Pilavı', badge: 'Geleneksel', desc: 'Kavrulmuş tel/arpa şehriye ve tereyağlı tane pirinç' },
      { name: 'Taze Mantarlı Pilav', badge: 'Farklı Tat', desc: 'Karamelize mantar ve taze baharatlarla zenginleşen pilav' },
      { name: 'Tavuklu Pirinç Pilavı', badge: 'Doyurucu', desc: 'Didiklenmiş piliç eti ve karabiberli baldo pirinç pilavı' },
    ],
  },
  makarnalar: {
    key: 'makarna',
    title: 'Makarna Çeşitlerimiz',
    tag: 'İtalyan Kıvamında',
    icon: '🍝',
    desc: 'Özel ev yapımı soslarla zenginleştirilmiş taze makarna alternatiflerimiz:',
    items: [
      { name: 'Domatesli Fesleğenli Makarna', badge: 'Klasik', desc: 'Közlenmiş domates, sızma zeytinyağı ve taze fesleğen' },
      { name: 'Kremalı Soslu Penne', badge: 'Zengin Sos', desc: 'Taze krema ve kaşar peyniri harmanıyla nefis lezzet' },
      { name: 'Mantarlı Kremalı Makarna', badge: 'Şef Tavsiyesi', desc: 'Sote kültür mantarları ve kremalı sarımsaklı sos' },
      { name: 'Özel Tavuklu Makarna', badge: 'Protein & Karbonhidrat', desc: 'Tavuk dilimleri ve sebzelerle zengin makarna' },
      { name: 'Mevsim Sebzeli Burgu Makarna', badge: 'Hafif & Renkli', desc: 'Zeytinyağında sotelenmiş taze mevsim sebzeleri' },
    ],
  },
  kahvalti: {
    key: 'kahvalti',
    title: 'Kurumsal Kahvaltı Menümüz',
    tag: 'Güne Zinde Başlangıç',
    icon: '🥐',
    desc: 'Vardiya başlangıçları, şirketler ve salonumuzda oturup yiyen misafirler için zengin kahvaltı:',
    items: [
      { name: 'Sıcak Poğaça & Börek Çeşitleri', badge: 'Fırından Taze', desc: 'Peynirli, patatesli ve kıymalı çıtır börekler' },
      { name: 'Haşlanmış & Sahanda Yumurta', badge: 'Taze Protein', desc: 'Köy yumurtası tazeliğinde hazırlanır' },
      { name: 'Beyaz Peynir & Kaşar Peyniri', badge: 'Birinci Sınıf', desc: 'Tam yağlı kaliteli kahvaltılık peynirler' },
      { name: 'Gemlik Siyah & Yeşil Zeytin', badge: 'Doğal Lezzet', desc: 'Özel marinasyonlu sofralık zeytinler' },
      { name: 'Bal, Tereyağı & Reçel Çeşitleri', badge: 'Tatlı Enerji', desc: 'Doğal süzme bal ve nefis meyve reçelleri' },
      { name: 'Söğüş Tabağı & Taze Demleme Çay', badge: 'Sınırsız Keyif', desc: 'Taze domates, salatalık ve tavşankanı çay' },
    ],
  },
};

/** Hizmet Verilen Sektörler ve Kurumlar */
export const clientSectors = [
  {
    id: 'kobi-kurumsal',
    title: 'KOBİ ve Büyük Ölçekli Şirketler',
    desc: 'Fabrikalar, sanayi kuruluşları (GOSB, TOSB, Dilovası, İMES vb.), plazalar ve üretim tesisleri için vardiyalı toplu yemek ve tabldot çözümleri.',
    badge: 'Sanayi & Fabrikalar',
    icon: 'building',
    features: ['3 Vardiyaya Uygun Teslimat', 'Isı Yalıtımlı Termobox', 'Aylık Kurumsal Faturalama'],
  },
  {
    id: 'okul-yurt',
    title: 'Özel Okullar ve Öğrenci Yurtları',
    desc: 'Kolejler, kampüsler, anaokulları ve öğrenci yurtları için gençlerin ve çocukların gelişimine uygun, besin değeri yüksek, hijyenik ve dengeli yemek menüleri.',
    badge: 'Eğitim & Kampüs',
    icon: 'school',
    features: ['Diyetisyen Onaylı Reçeteler', 'Vitamin & Mineral Dengesi', '%100 Hijyen ve Gıda Güvenliği'],
  },
  {
    id: 'saglik-kurumlari',
    title: 'Hastaneler ve Sağlık Kurumları',
    desc: 'Tıp merkezleri, özel hastaneler, klinikler ve 7/24 nöbet tutan sağlık çalışanları için hijyen sertifikalı, diyetisyen kontrollü ve kesintisiz sıcak yemek servisi.',
    badge: 'Sağlık & Tıp Merkezleri',
    icon: 'hospital',
    features: ['7/24 Nöbete Uygun Servis', 'Tuzsuz/Hafif Menü Seçeneği', 'Laboratuvar Onaylı Numuneler'],
  },
  {
    id: 'davet-organizasyon',
    title: 'Özel Davetler, Düğün & Nişan Organizasyonları',
    desc: 'Düğün, nişan, kına, sünnet merasimleri, mevlit davetleri, taziye, şirket açılışları ve kurumsal davetler için sıcak toplu yemek ve açık büfe catering hizmeti.',
    badge: 'Düğün · Nişan · Mevlit',
    icon: 'heart',
    features: ['Çafing Dish Sıcak Büfe', 'Kişi Sayısına Özel İkramlar', 'Eksiksiz Servis Ekipmanı Temini'],
  },
  {
    id: 'santiye-altyapi',
    title: 'İnşaat ve Altyapı Şantiyeleri',
    desc: 'Ağır iş gücü gerektiren şantiye ve saha projeleri için yüksek kalorili, doyurucu ve vardiya saatlerine özel sıcak yemek & kumanya desteği.',
    badge: 'Saha & Şantiyeler',
    icon: 'truck',
    features: ['Bol Porsiyon & Yüksek Kalori', 'Zorlu Saha Koşullarına Sevkiyat', 'Kumanya ve Gece Mesaisi Desteği'],
  },
  {
    id: 'salon-restoran',
    title: 'Restoran & Salonumuzda Oturup Yeme İmkanı',
    desc: 'Sultan Orhan Mahallesi\'ndeki ferah merkez salonumuzda esnaf, bölge çalışanları ve misafirlerimiz için sabah kahvaltısı ve öğle yemeğinde oturup yeme imkanı.',
    badge: 'Sultan Orhan Yemek Salonu',
    icon: 'utensils',
    features: ['Ferah & Klimalı Yemek Salonu', 'Her Sabah Sıcak Kahvaltı', 'Günlük Değişen Sıcak Tabldot'],
  },
];

/**
 * GERÇEK MÜŞTERİ TABLDOT MENÜLERİ (4 HAFTALIK DÖNGÜ)
 * Kullanıcının belirttiği çorba, et, tavuk, pilav ve makarna çeşitleri ile zenginleştirilmiştir.
 */
export const weeklyMenus = [
  {
    title: '1. Hafta (KOBİ & Fabrika Dengeli Menüsü)',
    days: [
      { day: 'Pazartesi', items: ['Süzme Mercimek Çorbası', 'Lokum Et Sote', 'Şehriyeli Pirinç Pilavı', 'Mevsim Salata & Ayran'] },
      { day: 'Salı', items: ['Ezogelin Çorbası', 'Tavuk Izgara (Pirzola)', 'Domatesli Fırın Penne Makarna', 'Ev Yapımı Cacık'] },
      { day: 'Çarşamba', items: ['Kremalı Domates Çorbası', 'Geleneksel Tas Kebabı', 'Sebzeli Bulgur Pilavı', 'Fıstıklı İrmik Helvası'] },
      { day: 'Perşembe', items: ['Kremalı Mantar Çorbası', 'Özel Soslu Tavuk Sote', 'Etli Pirinç Pilavı', 'Mevsim Salata & Meyve'] },
      { day: 'Cuma', items: ['Geleneksel Düğün Çorbası', 'Fırında İzmir Köfte', 'Mantarlı Kremalı Makarna', 'Buz Gibi Yayık Ayran'] },
      { day: 'Cumartesi', items: ['Taze Sebze Çorbası', 'Sebzeli Tavuk Haşlama', 'Tane Pirinç Pilavı', 'Kemalpaşa Tatlısı'] },
    ],
  },
  {
    title: '2. Hafta (Organize Sanayi & İmalat Menüsü)',
    days: [
      { day: 'Pazartesi', items: ['Ezogelin Çorbası', 'Sac Kavurma', 'Şehriyeli Pirinç Pilavı', 'Zeytinyağlı Mevsim Salata'] },
      { day: 'Salı', items: ['Süzme Mercimek Çorbası', 'Kremalı Mantarlı Tavuk', 'Sebzeli Burgu Makarna', 'Süzme Yoğurt'] },
      { day: 'Çarşamba', items: ['Kremalı Domates Çorbası', 'Fırın Hasanpaşa Köfte', 'Mantarlı Pirinç Pilavı', 'Mevsim Meyvesi'] },
      { day: 'Perşembe', items: ['Taze Sebze Çorbası', 'Yaprak Tavuk Döner', 'Pirinç Pilavı', 'Yayık Ayran & Turşu'] },
      { day: 'Cuma', items: ['Geleneksel Düğün Çorbası', 'Güveçte Etli Nohut', 'Tane Bulgur Pilavı', 'Fırın Sütlaç'] },
      { day: 'Cumartesi', items: ['Kremalı Mantar Çorbası', 'Taze Sebzeli Tavuk', 'Kremalı Makarna', 'Mevsim Salata'] },
    ],
  },
  {
    title: '3. Hafta (Ağır Sanayi & Şantiye Menüsü)',
    days: [
      { day: 'Pazartesi', items: ['Ezogelin Çorbası', 'Özel Terbiyeli Dana Şiş', 'Şehriyeli Pirinç Pilavı', 'Kuru Cacık'] },
      { day: 'Salı', items: ['Süzme Mercimek Çorbası', 'Tavuklu Pirinç Pilavı', 'Fırında İzmir Köfte', 'Karışık Turşu & Ayran'] },
      { day: 'Çarşamba', items: ['Kremalı Mantar Çorbası', 'Lokum Et Sote', 'Domatesli Soslu Makarna', 'Mevsim Salata'] },
      { day: 'Perşembe', items: ['Geleneksel Düğün Çorbası', 'Tavuk Izgara & Patates', 'Sebzeli Bulgur Pilavı', 'Mevsim Meyvesi'] },
      { day: 'Cuma', items: ['Kremalı Domates Çorbası', 'Geleneksel Tas Kebabı', 'Etli Pirinç Pilavı', 'Buz Gibi Yayık Ayran'] },
      { day: 'Cumartesi', items: ['Taze Sebze Çorbası', 'Özel Soslu Tavuk Sote', 'Mantarlı Kremalı Makarna', 'Yoğurt'] },
    ],
  },
  {
    title: '4. Hafta (Kurumsal Firma, Okul & Sağlık Menüsü)',
    days: [
      { day: 'Pazartesi', items: ['Süzme Mercimek Çorbası', 'Fırında İzmir Köfte', 'Sebzeli Pirinç Pilavı', 'Kuru Cacık'] },
      { day: 'Salı', items: ['Kremalı Domates Çorbası', 'Kremalı Mantarlı Tavuk', 'Kremalı Penne Makarna', 'Taze Meyve'] },
      { day: 'Çarşamba', items: ['Ezogelin Çorbası', 'Güveçte Etli Nohut', 'Şehriyeli Pirinç Pilavı', 'Mevsim Salata & Ayran'] },
      { day: 'Perşembe', items: ['Kremalı Mantar Çorbası', 'Fırın Hasanpaşa Köfte', 'Sebzeli Burgu Makarna', 'Ev Baklavası / Tatlı'] },
      { day: 'Cuma', items: ['Geleneksel Düğün Çorbası', 'Yaprak Tavuk Döner', 'Tavuklu Pirinç Pilavı', 'Yayık Ayran'] },
      { day: 'Cumartesi', items: ['Taze Sebze Çorbası', 'Sebzeli Tavuk Haşlama', 'Pirinç Pilavı', 'Süzme Yoğurt'] },
    ],
  },
];

/** Menü türleri (/menu/ sayfası) */
export const menuTypes = [
  {
    title: '4 Çeşit Standart Tabldot',
    text: 'Çorba + etli/tavuklu ana yemek + pilav/makarna + salata, tatlı ya da içecek. KOBİ ve fabrikaların en çok tercih ettiği dengeli günlük menü.',
  },
  {
    title: 'Toplu Taşımalı Yemek Servisi',
    text: 'Yemeklerin merkez mutfağımızda pişip firmanızın yemekhanesine ısı yalıtımlı termoboxlarla taşındığı ekonomik ve pratik çözüm.',
  },
  {
    title: 'Kurumsal Sabah Kahvaltısı',
    text: 'Fabrika vardiyaları ve ofisler için sıcak poğaça, börek, taze yumurta, peynir, zeytin, bal ve taze çaydan oluşan sabah servisi.',
  },
  {
    title: 'Restoranımızda Oturup Yeme',
    text: 'Sultan Orhan Mahallesindeki ferah mutfak salonumuzda esnaf, çalışanlar ve misafirler için yerinde oturup yeme imkanı.',
  },
  {
    title: 'Ağır Sanayi & Şantiye Menüsü',
    text: 'Ağır efor sarf eden personelin enerji ihtiyacını karşılayan, yüksek kalorili, et oranı yüksek ve bol porsiyonlu doyurucu menüler.',
  },
  {
    title: 'Özel Davet & Düğün Menüsü',
    text: 'Düğün, nişan, kına, mevlit ve şirket açılışları için sıcak kazan/tabldot ve açık büfe sıcak yemek organizasyonu.',
  },
];
