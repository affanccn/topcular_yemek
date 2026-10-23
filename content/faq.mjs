import { site } from '../site.config.mjs';

/**
 * GENEL SIK SORULAN SORULAR
 * Ana sayfa (ilk 6) ve /sss/ sayfasında gösterilir; FAQPage şemasına eklenir.
 */
export const faq = [
  {
    q: 'Gebze’de toplu yemek siparişi için minimum kaç kişi gerekiyor?',
    a: site.minOrder
      ? `Toplu yemek siparişlerini ${site.minOrder} kişiden itibaren alıyoruz. Daha küçük ekipler için de bizi arayın, birlikte çözüm bulalım.`
      : 'Minimum kişi sayısı servis şekline ve teslimat noktasına göre değişir. Bizi arayın, birlikte çözüm bulalım.',
  },
  {
    q: 'Hangi bölgelere yemek servisi yapıyorsunuz?',
    a: 'Gebze merkez ve tüm mahalleleri, Darıca, Çayırova (Şekerpınar), Dilovası, Tuzla ile GOSB, TOSB, Dilovası OSB, İMES OSB gibi organize sanayi bölgelerine servis yapıyoruz.',
  },
  {
    q: 'Merkezinizde oturup yemek yeme imkanı var mı?',
    a: 'Evet! Sultan Orhan Mahallesi 1141. Sokak No: 10 Gebze adresindeki merkez binamızda ferah ve hijyenik bir yemek salonumuz bulunmaktadır. Sabah kahvaltısında ve öğle yemeğinde misafirlerimiz, çevre esnafı ve çalışanlar salonumuza gelerek sıcak ev yemeklerimizi ve 4 çeşit tabldot menümüzü yerinde oturup yiyebilir.',
  },
  {
    q: 'Sabah kahvaltısı hizmetiniz bulunuyor mu?',
    a: 'Evet. Hem Sultan Orhan merkez yemek salonumuzda misafirlerimize hem de fabrikaların sabah vardiyaları, şantiyeler ve şirketler için sıcak börek, poğaça, yumurta, zengin peynir, zeytin, bal ve taze çaydan oluşan kurumsal kahvaltı servisi sunuyoruz.',
  },
  {
    q: 'Tabldot ile toplu taşımalı yemek arasındaki fark nedir?',
    a: 'Tabldotta yemekler porsiyonlanmış olarak, tabak veya tepsilerle gelir. Toplu taşımalı serviste ise yemekler ısı yalıtımlı gastronom küvetlerle işletmenizin yemekhanesine sevk edilir ve yerinde taze taze porsiyonlanır. Kalabalık fabrikalar için toplu taşımalı servis oldukça ekonomiktir.',
  },
  {
    q: 'Toplu yemek fiyatları nasıl belirleniyor?',
    a: 'Fiyat; günlük kişi sayısı, menü içeriği (et oranı, tatlı/salata tercihi), servis modeli ve teslimat lokasyonuna göre şeffaf bir şekilde belirlenir. Bize ulaşın, ihtiyacınıza özel ücretsiz teklif hazırlayalım.',
  },
  {
    q: 'Menüler nasıl hazırlanıyor?',
    a: 'Menülerimizi aylık olarak planlıyoruz. Etli, tavuklu, bakliyat ve zeytinyağlı yemekleri dengeli dağıtıyor, mevsiminde taze malzeme kullanıyoruz. Menüyü firmanızın çalışan profiline göre birlikte şekillendirebiliyoruz.',
  },
  {
    q: 'Yemekler taşınırken soğumuyor mu?',
    a: 'Yemeklerimiz mutfaktan çıktığı anda endüstriyel çift cidarlı termobox kaplara mühürlenir. Gıda taşımaya uygun özel araçlarımızla sevk edilir ve servis anında 70°C+ sıcaklığını eksiksiz korur.',
  },
  {
    q: 'Diyet veya vejetaryen menü hazırlıyor musunuz?',
    a: 'Evet, talebe göre az yağlı, diyabetik veya vejetaryen çalışanlarınız için özel porsiyonlar hazırlayabiliyoruz.',
  },
  {
    q: 'Vardiyalı çalışan fabrikalara ve kurumlara hizmet veriyor musunuz?',
    a: 'Evet. KOBİ ve büyük ölçekli fabrikalara 3 vardiya düzeninde kahvaltı, öğle, akşam ve gece mesaisi sıcak yemek teslimatı planlıyoruz.',
  },
  {
    q: 'Özel davet, düğün ve nişan organizasyonlarına yemek veriyor musunuz?',
    a: 'Evet. Düğün, nişan, kına, sünnet, mevlit ve şirket açılışları için toplu sıcak yemek, çafing dish açık büfe ve servis personeli desteği sağlıyoruz.',
  },
  {
    q: 'Nasıl teklif alabilirim?',
    a: 'Telefonla arayabilir, WhatsApp’tan yazabilir ya da iletişim sayfamızdaki teklif formunu doldurabilirsiniz. Kişi sayısı, adres ve servis şeklini bildirmeniz yeterli; aynı gün içinde teklifinizi hazırlıyoruz.',
  },
];
