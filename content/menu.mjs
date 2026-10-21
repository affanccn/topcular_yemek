/**
 * GERÇEK MÜŞTERİ TABLDOT MENÜLERİ (4 HAFTALIK DÖNGÜ)
 * Aslan Otomotiv, Mikroteknik, CRN Boya, Tümpa, Şantiye ve Okul menülerimizden derlenmiştir.
 */
export const weeklyMenus = [
  {
    title: '1. Hafta (Fabrika & Otomotiv Standart Menüsü)',
    days: [
      { day: 'Pazartesi', items: ['Süzme Mercimek Çorbası', 'Özel Terbiyeli Tavuk Şiş', 'Arpa Şehriyeli Pirinç Pilavı', 'Mevsim Salata & Ayran'] },
      { day: 'Salı', items: ['Tavuksuyu Çorbası', 'Geleneksel Tas Kebabı', 'Tereyağlı Pirinç Pilavı', 'Süzme Yoğurt / Cacık'] },
      { day: 'Çarşamba', items: ['Kremalı Domates Çorbası', 'Etli Hünkâr Beğendi', 'Meyhane Bulgur Pilavı', 'Fıstıklı İrmik Helvası'] },
      { day: 'Perşembe', items: ['Ezogelin Çorbası', 'Tavuk Sote & Mantar', 'Garnitürlü Pirinç Pilavı', 'Mevsim Salata & Tatlı'] },
      { day: 'Cuma', items: ['Düğün Çorbası', 'Izgara Tekirdağ Köfte', 'Domatesli Fırın Penne Makarna', 'Taze Yayık Ayran'] },
      { day: 'Cumartesi', items: ['Yayla Çorbası', 'Kıymalı Karnıyarık', 'Tel Şehriyeli Pirinç Pilavı', 'Mevsim Meyvesi'] },
    ],
  },
  {
    title: '2. Hafta (Organize Sanayi & İmalat Menüsü)',
    days: [
      { day: 'Pazartesi', items: ['Yayla Çorbası', 'Kekikli Et Sote', 'Nohutlu Pirinç Pilavı', 'Zeytinyağlı Mevsim Salata'] },
      { day: 'Salı', items: ['Ezogelin Çorbası', 'Tavuklu Sultan Kebabı', 'Tereyağlı Bulgur Pilavı', 'Ev Yapımı Cacık'] },
      { day: 'Çarşamba', items: ['Süzme Mercimek Çorbası', 'Köz Patlıcanlı Beyti Kebap', 'Peynirli Fırın Makarna', 'Kemalpaşa Tatlısı'] },
      { day: 'Perşembe', items: ['Tarhana Çorbası', 'Tavuklu Çökertme Kebabı', 'Soslu Makarna', 'Kuru Cacık / Haydari'] },
      { day: 'Cuma', items: ['Kremalı Domates Çorbası', 'Fırında Kaşarlı Köfte', 'Pirinç Pilavı', 'Fırın Sütlaç'] },
      { day: 'Cumartesi', items: ['Şehriye Çorbası', 'Etli Orman Kebabı', 'Bulgur Pilavı', 'Mevsim Meyvesi / Ayran'] },
    ],
  },
  {
    title: '3. Hafta (Ağır Sanayi & Şantiye Menüsü)',
    days: [
      { day: 'Pazartesi', items: ['Ezogelin Çorbası', 'Fırında Antep Tava', 'Tereyağlı Bulgur Pilavı', 'Kuru Cacık'] },
      { day: 'Salı', items: ['Süzme Mercimek Çorbası', 'Güveçte Etli Kuru Fasulye', 'Pirinç Pilavı', 'Karışık Turşu'] },
      { day: 'Çarşamba', items: ['Tarhana Çorbası', 'Fırında Soslu Tavuk Baget', 'Sebzeli Bulgur Pilavı', 'Mevsim Salata'] },
      { day: 'Perşembe', items: ['Tavuksuyu Çorbası', 'Fırın Kağıt Kebabı', 'Peynirli Erişte', 'Mevsim Meyvesi'] },
      { day: 'Cuma', items: ['Düğün Çorbası', 'Özel Soslu Tavuk Döner', 'Şehriyeli Pirinç Pilavı', 'Buz Gibi Yayık Ayran'] },
      { day: 'Cumartesi', items: ['Yayla Çorbası', 'Kıymalı Biber Dolması', 'Fırın Makarna', 'Yoğurt'] },
    ],
  },
  {
    title: '4. Hafta (Kurumsal Firma & Eğitim Kurumu Menüsü)',
    days: [
      { day: 'Pazartesi', items: ['Mercimek Çorbası', 'Fırında İzmir Köfte', 'Sebzeli Bulgur Pilavı', 'Kuru Cacık'] },
      { day: 'Salı', items: ['Tavuksuyu Çorbası', 'Beşamel Soslu Tavuk Graten', 'Pirinç Pilavı', 'Taze Meyve'] },
      { day: 'Çarşamba', items: ['Ezogelin Çorbası', 'Zeytinyağlı Barbunya Pilaki', 'Bulgur Pilavı', 'Mevsim Salata & Ayran'] },
      { day: 'Perşembe', items: ['Tarhana Çorbası', 'Kadınbudu Köfte', 'Kremalı Fırın Patates', 'Ev Baklavası / Tatlı'] },
      { day: 'Cuma', items: ['Sultan Çorbası', 'Karışık Izgara & Köfte', 'Nohutlu Pilav', 'Şalgam / Yayık Ayran'] },
      { day: 'Cumartesi', items: ['Domates Çorbası', 'Tavuk Sote', 'Pirinç Pilavı', 'Süzme Yoğurt'] },
    ],
  },
];

/** Menü türleri (/menu/ sayfası) */
export const menuTypes = [
  {
    title: 'Standart Fabrika Tabldot',
    text: 'Çorba + etli/tavuklu ana yemek + yardımcı yemek (pilav/makarna) + salata, tatlı ya da yoğurt. Fabrikaların en çok tercih ettiği 4 çeşit dengeli menü.',
  },
  {
    title: 'Ağır Sanayi & Şantiye Menüsü',
    text: 'Ağır efor sarf eden personelin enerji ihtiyacını karşılayan, yüksek kalorili, et oranı yüksek ve bol porsiyonlu doyurucu menüler.',
  },
  {
    title: 'Taşımalı Kazan Yemek Servisi',
    text: 'Yemeklerin mutfağımızda büyük kazanlarda pişip işletmenizin yemekhanesine ısı korumalı termobox kaplarla taşındığı ekonomik model.',
  },
  {
    title: 'Vardiya (Gece/Akşam) & Kumanya',
    text: '3 vardiya çalışan tesisler için sıcak akşam/gece yemeği ve şantiye kumanya paketleri servisi.',
  },
];
