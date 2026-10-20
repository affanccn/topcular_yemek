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
    q: 'Dükkânınızda oturup yemek yiyebilir miyiz?',
    a: 'Hayır. Topçular Yemek bir toplu yemek üretim mutfağıdır; yerinde yemek servisimiz yoktur. Yemeklerimizi yalnızca işletmelere ve organizasyonlara teslimat/servis olarak sunuyoruz.',
  },
  {
    q: 'Tabldot ile kazan (taşımalı) yemek arasındaki fark nedir?',
    a: 'Tabldotta yemekler porsiyonlanmış olarak, tabak veya tepside gelir. Kazan serviste yemekler ısı yalıtımlı toplu kaplarla gelir ve yemekhanede porsiyonlanır. Kalabalık ekipler için kazan servisi daha ekonomiktir.',
  },
  {
    q: 'Toplu yemek fiyatları nasıl belirleniyor?',
    a: 'Fiyat; günlük kişi sayısı, menü içeriği, servis şekli (tabldot/kazan) ve teslimat noktasına göre belirlenir. Bize ulaşın, ihtiyacınıza özel ücretsiz teklif hazırlayalım.',
  },
  {
    q: 'Menüler nasıl hazırlanıyor?',
    a: 'Menülerimizi aylık olarak planlıyoruz. Etli, tavuklu, bakliyat ve zeytinyağlı yemekleri dengeli dağıtıyor, mevsiminde ve taze malzeme kullanıyoruz. Menüyü firmanızla birlikte şekillendirebiliyoruz.',
  },
  {
    q: 'Yemekler nasıl taşınıyor, soğumuyor mu?',
    a: 'Yemekler pişirildikten kısa süre sonra ısı yalıtımlı kazan ve termoboxlarla, gıda taşımaya uygun araçlarımızla yola çıkar ve servis anında sıcaklığını korur.',
  },
  {
    q: 'Diyet veya vejetaryen menü hazırlıyor musunuz?',
    a: 'Evet, talebe göre az yağlı, diyabetik veya vejetaryen çalışanlarınız için özel porsiyonlar hazırlayabiliyoruz.',
  },
  {
    q: 'Vardiyalı çalışan fabrikalara hizmet veriyor musunuz?',
    a: 'Evet. Vardiya saatlerinize göre kahvaltı, öğle ve akşam yemeği teslimatı planlıyoruz.',
  },
  {
    q: 'Nasıl teklif alabilirim?',
    a: 'Telefonla arayabilir, WhatsApp’tan yazabilir ya da iletişim sayfamızdaki teklif formunu doldurabilirsiniz. Kişi sayısı, adres ve servis şeklini bildirmeniz yeterli.',
  },
];
