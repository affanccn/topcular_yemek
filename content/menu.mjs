/**
 * ÖRNEK HAFTALIK MENÜLER
 * Ana sayfada 1. hafta, /menu/ sayfasında tüm haftalar gösterilir.
 */
export const weeklyMenus = [
  {
    title: '1. Hafta',
    days: [
      { day: 'Pazartesi', items: ['Mercimek Çorbası', 'Etli Kuru Fasulye', 'Şehriyeli Pirinç Pilavı', 'Turşu'] },
      { day: 'Salı', items: ['Ezogelin Çorbası', 'Fırında Tavuk Baget', 'Bulgur Pilavı', 'Cacık'] },
      { day: 'Çarşamba', items: ['Yayla Çorbası', 'İzmir Köfte', 'Peynirli Makarna', 'Mevsim Salata'] },
      { day: 'Perşembe', items: ['Tarhana Çorbası', 'Etli Nohut', 'Pirinç Pilavı', 'Fırın Sütlaç'] },
      { day: 'Cuma', items: ['Domates Çorbası', 'Tavuk Sote', 'Patates Püresi', 'İrmik Helvası'] },
      { day: 'Cumartesi', items: ['Sebze Çorbası', 'Karnıyarık', 'Pirinç Pilavı', 'Ayran'] },
    ],
  },
  {
    title: '2. Hafta',
    days: [
      { day: 'Pazartesi', items: ['Tavuk Suyu Çorbası', 'Orman Kebabı', 'Bulgur Pilavı', 'Yoğurt'] },
      { day: 'Salı', items: ['Mercimek Çorbası', 'Etli Taze Fasulye', 'Pirinç Pilavı', 'Revani'] },
      { day: 'Çarşamba', items: ['Ezogelin Çorbası', 'Tavuk Şiş', 'Sebzeli Bulgur', 'Çoban Salata'] },
      { day: 'Perşembe', items: ['Yayla Çorbası', 'Etli Kuru Fasulye', 'Şehriyeli Pilav', 'Turşu'] },
      { day: 'Cuma', items: ['Düğün Çorbası', 'Hünkar Beğendi', 'Pirinç Pilavı', 'Kemalpaşa Tatlısı'] },
      { day: 'Cumartesi', items: ['Domates Çorbası', 'Fırın Makarna', 'Mevsim Salata', 'Meyve'] },
    ],
  },
];

/** Menü türleri (/menu/ sayfası) */
export const menuTypes = [
  {
    title: 'Standart Tabldot',
    text: 'Çorba + ana yemek + yardımcı yemek + salata/tatlı. Çoğu işletmenin tercih ettiği dengeli 4’lü menü.',
  },
  {
    title: 'Ekonomik Menü',
    text: 'Bütçe dostu 3 çeşitlik menü. Kalabalık ekipler ve kazan servisi için ideal.',
  },
  {
    title: 'Kahvaltı & Akşam',
    text: 'Vardiyalı çalışan işletmeler için kahvaltı ve akşam yemeği seçenekleri.',
  },
  {
    title: 'Diyet & Özel Menü',
    text: 'Az yağlı, diyabetik ya da vejetaryen çalışanlar için talebe göre özel porsiyonlar.',
  },
];
