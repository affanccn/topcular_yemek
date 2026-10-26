/**
 * HİZMET SAYFALARI
 * Her hizmet /hizmetler/<slug>/ adresinde ayrı, anahtar kelime odaklı bir sayfa üretir.
 * Tabldot Yemek, Toplu Yemek, Fabrika Yemeği, Kahvaltı Servisi, Restoran & Oturup Yeme ve Organizasyon Yemeği.
 */
export const services = [
  {
    slug: 'tabldot-yemek',
    icon: 'tray',
    image: 'tabldot',
    imageAlt: 'Gebze tabldot yemek servisi: Profesyonel aşçı 4 çeşit dengeli tabldot tepsisine sıcak ev yemeği servisi yapıyor',
    navTitle: 'Tabldot Yemek',
    cardTitle: 'Tabldot Yemek',
    cardText: 'Çorba, ana yemek, yardımcı yemek ve salata/tatlı/içecekten oluşan 4 çeşit dengeli tabldot menü; tabak ya da tepside servis.',
    metaTitle: 'Gebze Tabldot Yemek Siparişi | Günlük Taze Tabldot – Topçular Yemek',
    metaDesc: 'Gebze tabldot yemek siparişi için Topçular Yemek: her gün taze pişen, 4 çeşit dengeli tabldot menü. KOBİ, fabrika, okul, hastane ve şantiyelere zamanında servis. Hemen teklif alın.',
    h1: 'Gebze Tabldot Yemek Servisi',
    lead: 'Her gün sabah erken saatlerde mutfağımızda taze pişen, ev lezzetinde 4 çeşit tabldot menüyü işletmenize sıcak sıcak ulaştırıyoruz.',
    body: [
      'Tabldot yemek; çorba, etli veya tavuklu ana yemek, yardımcı yemek (pilav, makarna) ve salata, tatlı ya da içecekten oluşan, kalori ve besin değeri dengelenmiş günlük menüdür. Topçular Yemek olarak Gebze ve çevresindeki fabrikalara, KOBİ\'lere, okullara, yurtlara ve şantiyelere tabldot yemek servisi sunuyoruz.',
      'Menülerimizi aylık olarak planlıyor; mevsim sebzeleri, taze et ve kaliteli bakliyatlar kullanıyoruz. Et sote, tas kebabı, sac kavurma, tavuk sote, fırında köfte gibi zengin ana yemeklerimizi şehriyeli pirinç pilavı, sebzeli makarna ve taze çorbalarla buluşturarak çalışanlarınızın her gün zevkle tüketmesini sağlıyoruz.',
      'Yemekler, porsiyonlanmış şekilde tabak/tepside ya da firmanızın yemekhanesinde servis edilmek üzere ısı yalıtımlı termobox kaplarla teslim edilir. Vardiya saatlerinize tam uyum sağlayan dakik lojistik filomuzla hizmet veriyoruz.',
    ],
    features: [
      'Günlük 4 çeşit, aylık dengeli planlanmış menü',
      'Tabak, tepsi veya yemekhane servisi imkanı',
      'Vardiya ve mola saatlerine göre dakik teslimat',
      'Diyet, vejetaryen ve kuruma özel menü opsiyonları',
      'Isı yalıtımlı termobox kaplarla 70°C+ sıcak sevkiyat',
      'KOBİ ve kurumsal firmalara özel esnek fiyatlandırma',
    ],
    faq: [
      {
        q: 'Tabldot menüde kaç çeşit yemek bulunuyor?',
        a: 'Standart tabldot menümüz 4 çeşittir: 1. Çeşit sıcak çorba, 2. Çeşit etli veya tavuklu ana yemek, 3. Çeşit pilav veya makarna, 4. Çeşit ise salata, yoğurt, tatlı veya meyvedir. Talebe göre 3 veya 5 çeşit opsiyonu da sunulmaktadır.',
      },
      {
        q: 'Tabldot yemek fiyatları nasıl belirlenir?',
        a: 'Fiyatlandırma; günlük kişi sayısı, tercih edilen menü gramajı, et dağılımı ve teslimat lokasyonuna göre şeffaf bir şekilde hesaplanır. İhtiyacınızı bize ilettiğinizde aynı gün içinde teklif sunuyoruz.',
      },
      {
        q: 'Aylık tabldot menüsünü değiştirebilir miyiz?',
        a: 'Evet. Aylık menülerimiz firmanızın İK ve idari birimleriyle paylaşılır; çalışanlarınızın beğeni ve talepleri doğrultusunda menü içeriğinde esnek düzenlemeler yapılır.',
      },
    ],
  },
  {
    slug: 'toplu-yemek',
    aliasSlug: 'kazan-yemek-servisi',
    icon: 'pot',
    image: 'kazan',
    imageAlt: 'Gebze toplu yemek ve taşımalı yemek lojistiği: Isı yalıtımlı termobox taşıma kapları ve Topçular Yemek servis araçları',
    navTitle: 'Toplu Yemek',
    cardTitle: 'Toplu Yemek & Taşımalı Servis',
    cardText: 'Merkez mutfağımızda pişen sıcak yemeklerin ısı yalıtımlı termoboxlarla işletmenizin yemekhanesine ulaştırıldığı esnek toplu yemek modeli.',
    metaTitle: 'Gebze Toplu Yemek & Taşımalı Yemek Servisi | Topçular Yemek',
    metaDesc: 'Gebze toplu yemek ve taşımalı yemek servisi. Termobox kaplarla sıcak teslimat. KOBİ, büyük fabrika, şantiye, okul ve hastanelere ekonomik toplu yemek. Teklif alın.',
    h1: 'Gebze Toplu Yemek ve Taşımalı Servis Hizmeti',
    lead: 'Kendi yemekhanesi olan ya da kalabalık çalışan kadrosuna sahip işletmeler için yemekleri merkez mutfağımızda pişirip sıcaklığını koruyarak kapınıza getiriyoruz.',
    body: [
      'Toplu yemek (taşımalı servis), yemeklerin Sultan Orhan Mahallesi\'ndeki hijyenik merkez mutfağımızda usta aşçılarımız tarafından hazırlanıp, çift cidarlı ısı yalıtımlı termobox ve gastronom küvetlerle doğrudan işletmenizin yemekhanesine sevk edilmesi esasına dayanır.',
      'Özellikle çalışan sayısı 50 ve üzerinde olan fabrikalar, büyük sanayi kuruluşları, şantiyeler, hastaneler ve eğitim kurumları için en ekonomik ve verimli toplu yemek çözümüdür. Yemekler yerinde sıcak sıcak porsiyonlandığı için israf en aza iner, çalışan memnuniyeti yükselir.',
      'Gıda taşımacılığına uygun özel araçlarımız, ISO 22000 gıda güvenliği standartlarımız ve zamanında teslimat disiplinimiz ile Gebze, Dilovası, Çayırova, Darıca ve organize sanayi bölgelerine (GOSB, TOSB, İMES) kesintisiz hizmet sunuyoruz.',
    ],
    features: [
      'Isı yalıtımlı termobox ve gastronom küvetlerle sıcak teslimat',
      'İşletmenizin yemekhanesinde yerinde porsiyonlama kolaylığı',
      'Kalabalık ekipler ve fabrikalar için en ekonomik birim maliyet',
      'T.C. Tarım Bakanlığı ve ISO standartlarında hijyenik üretim',
      'İsteğe bağlı tecrübeli yemek dağıtım personeli temini',
      'Vardiya mola saatinden önce tam zamanında hazır edilme garantisi',
    ],
    faq: [
      {
        q: 'Toplu taşımalı yemek ile tabldot servis arasındaki fark nedir?',
        a: 'Tabldot serviste yemekler önceden porsiyonlanmış kap veya tepsilerle gelir. Toplu taşımalı yemekte ise yemekler toplu ısı korumalı gastronom küvetlerle işletmenizin yemekhanesine gelir ve yerinde taze taze servis edilir.',
      },
      {
        q: 'Taşıma esnasında yemekler soğur mu?',
        a: 'Hayır. Yemeklerimiz mutfaktan çıktığı anda endüstriyel çift cidarlı termoboxlara mühürlenir. Bu kaplar yemeğin sıcaklığını saatlerce 75°C üzerinde muhafaza eder.',
      },
      {
        q: 'Yemekhanemize servis personeli sağlıyor musunuz?',
        a: 'Evet. Firmanızın talebine göre yemeklerin dağıtımı, servisi ve yemekhane temizliği için eğitimli servis personeli görevlendirebilmekteyiz.',
      },
    ],
  },
  {
    slug: 'fabrika-yemek',
    icon: 'factory',
    image: 'fabrika',
    imageAlt: 'Gebze fabrika ve kurumsal yemek üretimi: Endüstriyel mutfakta aşçıbaşı ve taze hazırlanan sıcak yemek küvetleri',
    navTitle: 'Fabrika & Kurumsal Yemek',
    cardTitle: 'Fabrika & Kurumsal Yemek',
    cardText: 'GOSB, TOSB, Dilovası ve Kocaeli sanayisindeki KOBİ ve büyük ölçekli fabrikalar için vardiyalı, planlı toplu yemek hizmeti.',
    metaTitle: 'Gebze Fabrika Yemeği & Kurumsal Yemek Firması | Topçular Yemek',
    metaDesc: 'Gebze fabrika yemeği ve kurumsal yemek hizmeti: GOSB, TOSB, Dilovası OSB ve çevresindeki işletmelere vardiyalı toplu yemek. Günlük taze, doyurucu menüler. Teklif alın.',
    h1: 'Gebze Fabrika Yemeği ve Kurumsal Yemek Hizmeti',
    lead: 'Çalışanlarınızın enerjisi, verdiğiniz yemekle başlar. Vardiyalı çalışan sanayi devlerinden KOBİ\'lere, işletmenize özel kesintisiz yemek hizmeti sunuyoruz.',
    body: [
      'Gebze, Türkiye sanayisinin kalbidir. Bölgedeki fabrikaların ve sanayi tesislerinin en büyük ihtiyacı; her gün aynı lezzet standardında, doyurucu, besleyici ve mola düdüğü çaldığında masada hazır olan yemektir.',
      'Ağır sanayi ve imalat sektöründe çalışan personelin yüksek kalori ihtiyacını karşılayan doyurucu etli ve tavuklu yemekler, zengin çorbalar, pilav ve makarnalar hazırlıyoruz. 3 vardiya çalışan işletmeler için gece vardiyası ve sabah kahvaltısı çözümleri üretiyoruz.',
      'KOBİ\'lerden uluslararası üretim tesislerine kadar her ölçekte işletmeye sözleşmeli, şeffaf faturalandırmalı ve tam kurumsal hizmet sunuyoruz.',
    ],
    features: [
      '3 vardiyaya uygun öğle, akşam ve gece menüleri',
      'Ağır sanayi personeline özel bol porsiyonlu protein dengeli menüler',
      'GOSB, TOSB, İMES ve tüm organize sanayi bölgelerine doğrudan sevkiyat',
      'Aylık düzenli kurumsal sözleşme ve şeffaf faturalandırma',
      'Tabldot veya yemekhanede yerinde servis seçenekleri',
      'Düzenli müşteri memnuniyeti anketleri ve menü güncellemeleri',
    ],
    faq: [
      {
        q: 'Gece vardiyası ve mesailer için yemek getiriyor musunuz?',
        a: 'Evet. 2. ve 3. vardiyalarda çalışan personeliniz için vardiya başlangıç ve mola saatlerine göre özel sıcak teslimat planlaması yapıyoruz.',
      },
      {
        q: 'Hangi organize sanayi bölgelerine düzenli servisiniz var?',
        a: 'Gebze OSB (GOSB), TOSB Otomotiv Tedarik OSB, Dilovası OSB, İMES OSB, GEPOSB, Güzeller OSB ve Plastikçiler OSB dahil tüm Kocaeli sanayi hatlarına her gün servisimiz vardır.',
      },
      {
        q: 'Fabrikamız için numune menü tadımı yapabilir miyiz?',
        a: 'Elbette. İşletmenizi ziyaret ederek veya merkez mutfağımızda sizi ağırlayarak örnek menümüzü tattırıyor ve lezzet kalitemizi yerinde gösteriyoruz.',
      },
    ],
  },
  {
    slug: 'kahvalti-servisi',
    icon: 'coffee',
    image: 'bufe',
    imageAlt: 'Gebze kurumsal kahvaltı servisi: Taze poğaça, börek, peynir, zeytin ve sıcak çay ikramı',
    navTitle: 'Kahvaltı Servisi',
    cardTitle: 'Kurumsal Kahvaltı Servisi',
    cardText: 'Fabrika vardiyaları, şirketler, şantiyeler ve okullar için sıcak poğaça, börek, yumurta, peynir-zeytin ve taze çaydan oluşan zengin sabah kahvaltısı.',
    metaTitle: 'Gebze Kurumsal Kahvaltı Servisi | Şirket & Fabrika Sabah Kahvaltısı – Topçular Yemek',
    metaDesc: 'Gebze kurumsal kahvaltı servisi: fabrikalar, ofisler, şantiyeler ve yurtlar için günlük taze poğaça, börek, peynir, zeytin, yumurta ve taze demleme çay. Teklif alın.',
    h1: 'Gebze Kurumsal Kahvaltı Servisi',
    lead: 'Güne zinde ve enerjik bir başlangıç! Fabrikalar, şantiyeler, ofisler ve kurumlar için her sabah taze hazırlanan zengin kahvaltı servisi.',
    body: [
      'Topçular Yemek olarak yalnızca öğle ve akşam yemeklerinde değil; çalışanlarınızın güne yüksek motivasyonla başlamasını sağlayan kurumsal sabah kahvaltısı hizmeti de sunuyoruz.',
      'Menülerimizde; fırından yeni çıkmış sıcacık peynirli/kıymalı börekler, taze poğaçalar, haşlanmış veya sahanda yumurta, kaliteli beyaz peynir, kaşar peyniri, Gemlik siyah ve yeşil zeytin, tereyağı, süzme bal, reçel çeşitleri, taze domates-salatalık söğüş ve sınırsız taze demleme çay yer almaktadır.',
      'İster fabrikanızın sabah vardiyasına sıcak teslimat olarak, ister Sultan Orhan\'daki merkez salonumuzda oturup yeme şeklinde kahvaltı çözümlerimizden yararlanabilirsiniz.',
    ],
    features: [
      'Fırından yeni çıkmış sıcak börek ve poğaça çeşitleri',
      'Birinci sınıf beyaz peynir, kaşar ve yöresel peynirler',
      'Doğal Gemlik siyah ve yeşil zeytin çeşitleri',
      'Taze domates, salatalık ve mevsim yeşillikleri',
      'Bal, tereyağı, reçel ve haşlanmış taze yumurta',
      'Kurumlara özel paket kahvaltı veya açık büfe sunum',
    ],
    faq: [
      {
        q: 'Kahvaltı servisi hangi saatlerde teslim ediliyor?',
        a: 'Fabrikanızın veya ofisinizin mesai başlama saatine göre (örneğin 06:30, 07:00 veya 08:00) sıcak ve taze olarak teslim edilir.',
      },
      {
        q: 'Kahvaltı tek kullanımlık paketlerde mi geliyor?',
        a: 'Talebinize göre hijyenik kapalı bireysel kahvaltı tabaklarında veya yemekhanenizde açık büfe kahvaltı düzeninde servis sağlanır.',
      },
      {
        q: 'Haftalık veya aylık kahvaltı aboneliği mümkün mü?',
        a: 'Evet. İşletmenizin haftalık mesai günlerine göre düzenli kahvaltı tedarik anlaşması yapabilirsiniz.',
      },
    ],
  },
  {
    slug: 'yerinde-yemek-salonu',
    icon: 'utensils',
    image: 'hero',
    imageAlt: 'Topçular Yemek Sultan Orhan Gebze restoran salonunda sıcak tabldot ve ev yemeği oturup yeme imkanı',
    navTitle: 'Restoran & Oturup Yeme',
    cardTitle: 'Salonumuzda Oturup Yeme İmkanı',
    cardText: 'Sultan Orhan Mahallesindeki ferah mutfak salonumuzda esnaf, fabrika çalışanları ve tüm misafirlerimiz için yerinde oturup yeme imkanı.',
    metaTitle: 'Gebze Restoran & Yemek Salonu | Yerinde Sıcak Tabldot – Topçular Yemek',
    metaDesc: 'Gebze Sultan Orhan Mahallesi\'ndeki ferah yemek salonumuzda her gün taze pişen sıcak ev yemekleri, 4 çeşit tabldot ve sabah kahvaltısını oturup yeme imkanı.',
    h1: 'Merkezimizde Restoran & Oturup Yeme İmkanı',
    lead: 'Topçular Yemek yalnızca paket servis değil; Sultan Orhan Mahallesi\'ndeki ferah merkez salonunda konuklarını ağırlayan sıcak bir mutfaktır.',
    body: [
      'Topçular Yemek; Gebze Sultan Orhan Mahallesi 1141. Sokak No: 10 adresindeki merkez binasında, endüstriyel üretim mutfağının yanı sıra misafirlerini ağırladığı nezih ve ferah bir yemek salonuna sahiptir.',
      'Bölgemizde faaliyet gösteren KOBİ çalışanları, saha personeli, çevre esnafı ve lezzetli ev yemeği arayan tüm ziyaretçilerimiz; öğle molalarında veya sabah saatlerinde salonumuza gelerek sıcacık yemeklerimizi doğrudan masada afiyetle tüketebilir.',
      'Her gün değişen 4 çeşit tabldot menümüz, lokum gibi et ve tavuk yemeklerimiz, taze çorbalarımız, pilav ve makarnalarımız hijyenik servis tezgâhımızdan anında sıcak servis edilir.',
    ],
    features: [
      'Sultan Orhan merkezde ferah, klimalı ve hijyenik yemek salonu',
      'Her sabah sıcak kahvaltı ve taze çay servisi',
      'Öğle saatlerinde günlük çıkan 4 çeşit sıcak tabldot menü',
      'Et sote, tas kebabı, köfte ve tavuk çeşitlerinde zengin alternatif',
      'Hızlı ve güler yüzlü servis, öğle molasında vakit kazandıran düzen',
      'Nakit, kredi kartı ve kurumsal fiş/fatura ile ödeme kolaylığı',
    ],
    faq: [
      {
        q: 'Yemek salonunuz hangi saatler arasında açık?',
        a: 'Salonumuz Pazartesi – Cumartesi günleri 07:00 – 19:00 saatleri arasında sabah kahvaltısı ve öğle/akşam yemekleri için hizmetinizdedir.',
      },
      {
        q: 'Bireysel olarak gelip yemek yiyebilir miyiz?',
        a: 'Evet, kesinlikle! İster tek başınıza, ister çalışma arkadaşlarınızla birlikte gelip günlük sıcak menülerimizden faydalanabilirsiniz.',
      },
      {
        q: 'Salonunuzun konumu nerededir, otopark imkanı var mı?',
        a: 'Sultan Orhan Mahallesi, 1141. Sokak No: 10 Gebze adresindeyiz. Konumumuza kolayca ulaşabilir, kısa süreli araç parkı yapabilirsiniz.',
      },
    ],
  },
  {
    slug: 'organizasyon-yemek',
    icon: 'celebration',
    image: 'organizasyon',
    imageAlt: 'Gebze organizasyon ve davet yemeği: Açık hava davetinde çafing dish büfe servisi ve Topçular Yemek araçları',
    navTitle: 'Özel Davet & Düğün Yemeği',
    cardTitle: 'Özel Davet, Düğün & Nişan Yemeği',
    cardText: 'Özel davetler, düğün, nişan, kına, sünnet, mevlit, açılış ve kurumsal etkinlikler için sıcak toplu yemek ve ikram servisi.',
    metaTitle: 'Gebze Organizasyon Yemeği | Düğün, Nişan, Mevlit, Davet Toplu Yemek – Topçular Yemek',
    metaDesc: 'Gebze organizasyon yemeği ve toplu yemek siparişi: özel davetler, düğün, nişan, mevlit, açılış, şirket etkinlikleri ve hayır yemekleri için tabldot ve açık büfe servis. Teklif alın.',
    h1: 'Gebze Organizasyon, Düğün ve Davet Yemeği',
    lead: 'Özel davetler, düğün, nişan, kına, sünnet, mevlit, şirket açılışları ve kurumsal toplantılar… Kalabalık misafirleriniz için lezzetli yemeği biz hazırlıyoruz.',
    body: [
      'Özel günlerde davetlileri en iyi şekilde ağırlamak ve kusursuz bir sofra kurmak büyük bir organizasyon tecrübesi gerektirir. Topçular Yemek olarak Gebze ve çevre ilçelerde düğün, nişan, kına, sünnet merasimleri, mevlit davetleri, fabrika açılışları ve şirket etkinlikleri için anahtar teslim toplu yemek hizmeti sağlıyoruz.',
      'Etli pilav, kuzu/dana tas kebabı, sac kavurma, piliç ızgara, çorba çeşitleri, taze börekler, zeytinyağlılar ve geleneksel tatlılardan oluşan zengin menü alternatifleri sunuyoruz.',
      'Yemekler etkinlik alanınıza sıcak zincir kırılmadan ulaştırılır; arzu edilmesi halinde çafing dish ısıtıcılı açık büfe ekipmanları, servis personeli ve tek kullanımlık şık servis setleri ile eksiksiz destek verilir.',
    ],
    features: [
      'Düğün, nişan, kına ve sünnet organizasyonlarına özel menüler',
      'Geleneksel mevlit, taziye ve hayır yemekleri',
      'Şirket açılışları, bayramlaşmalar ve personel piknikleri',
      'Isıtıcılı çafing dish büfe veya tabak servis seçeneği',
      'Deneyimli servis personeli ve garson desteği',
      'Kişi sayısına ve bütçenize göre esnek menü alternatifleri',
    ],
    faq: [
      {
        q: 'Düğün veya nişan yemeği için ne kadar önceden sipariş vermeliyiz?',
        a: 'Organizasyonun eksiksiz planlanması için en az 3-5 gün önceden bizimle iletişime geçmenizi rica ediyoruz.',
      },
      {
        q: 'Mevlit ve düğün menülerinde en çok hangi yemekler tercih edilir?',
        a: 'Geleneksel etli pilav, tas kebabı, etli nohut, tavuk sote, mercimek/düğün çorbası, mevsim salata, ayran ve fıstıklı irmik helvası en popüler menümüzdür.',
      },
      {
        q: 'Servis ekipmanı ve garson hizmeti sağlıyor musunuz?',
        a: 'Evet. Talep etmeniz durumunda porselen/melamin tabaklar, çatal-kaşık setleri, ısıtıcılı servis kapları ve servis personeli temin ediyoruz.',
      },
    ],
  },
];
