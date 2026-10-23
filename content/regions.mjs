/**
 * HİZMET BÖLGESİ (YEREL SEO) SAYFALARI
 * Her bölge /bolgeler/<slug>/ adresinde özgün içerikli bir sayfa üretir.
 * Google'da "<bölge> toplu yemek" aramalarında üst sıralar için her sayfanın
 * metni birbirinden FARKLI olmalı (kopya içerik cezası almamak için).
 */
export const regions = [
  {
    slug: 'gebze-toplu-yemek',
    name: 'Gebze',
    featured: true,
    metaTitle: 'Gebze Toplu Yemek Siparişi | Gebze Yemek Firması – Topçular Yemek',
    metaDesc: 'Gebze toplu yemek siparişi için yerel yemek firması Topçular Yemek. Fabrika, ofis, okul ve şantiyelere tabldot ve toplu yemek servisi. Gebze’nin her mahallesine teslimat.',
    h1: 'Gebze Toplu Yemek Siparişi',
    lead: 'Mutfağımız Gebze’de. Bu yüzden Gebze’nin her noktasına yemeklerimizi en kısa sürede, sıcak ve taze olarak ulaştırıyoruz.',
    body: [
      'Topçular Yemek, Gebze merkezli bir toplu yemek firmasıdır. Gebze’deki fabrikalar, atölyeler, plazalar, okullar, hastaneler ve şantiyeler için günlük tabldot ve toplu yemek servisi yapıyoruz. Yerel bir firma olmanın avantajıyla teslimat sürelerimiz kısa, iletişimimiz hızlıdır.',
      'Gebze’de toplu yemek siparişi verirken en önemli konular; yemeğin her gün aynı kalitede olması, zamanında gelmesi ve çalışanların doyması. Menülerimizi bu üç kurala göre hazırlıyor, her sabah taze malzemeyle pişiriyoruz.',
      'Güzeller, Sultan Orhan, Mustafapaşa, Hacıhalil, Osman Yılmaz, Beylikbağı, Mimar Sinan, Tatlıkuyu, Pelitli ve Muallimköy başta olmak üzere Gebze’nin tüm mahallelerine ve sanayi bölgelerine servis veriyoruz.',
    ],
    places: ['Güzeller', 'Sultan Orhan', 'Mustafapaşa', 'Hacıhalil', 'Osman Yılmaz', 'Beylikbağı', 'Mimar Sinan', 'Tatlıkuyu', 'Pelitli', 'Muallimköy', 'Arapçeşme', 'Yenikent'],
    faq: [
      {
        q: 'Gebze’de toplu yemek siparişi nasıl verilir?',
        a: 'Telefon veya WhatsApp üzerinden bize ulaşıp kişi sayısını, teslimat adresini ve servis şeklini (tabldot/toplu taşımalı) iletmeniz yeterli. Size özel teklifi hazırlayıp menüyü birlikte planlıyoruz.',
      },
      {
        q: 'Gebze’de hangi mahallelere servis yapıyorsunuz?',
        a: 'Gebze’nin tüm mahallelerine ve sanayi bölgelerine servis yapıyoruz. Mutfağımız Gebze’de olduğu için teslimatlar kısa sürede tamamlanır.',
      },
    ],
  },
  {
    slug: 'gebze-osb-yemek',
    name: 'Gebze OSB’ler',
    featured: true,
    metaTitle: 'GOSB ve Gebze OSB Fabrika Yemeği | Toplu Yemek Firması – Topçular Yemek',
    metaDesc: 'GOSB, Gebze Güzeller OSB, GEPOSB, TOSB, Dilovası OSB ve İMES OSB’deki fabrikalara toplu yemek ve tabldot servisi. Vardiyalı fabrika yemeği için teklif alın.',
    h1: 'Gebze Organize Sanayi Bölgeleri Fabrika Yemeği',
    lead: 'Gebze ve çevresindeki organize sanayi bölgelerinde faaliyet gösteren fabrikalara her gün planlı saatlerde toplu yemek teslim ediyoruz.',
    body: [
      'Gebze, onlarca organize sanayi bölgesi ve binlerce fabrikasıyla Türkiye’nin sanayi kalbidir. Bu bölgelerdeki işletmeler için düzenli, doyurucu ve uygun maliyetli fabrika yemeği hizmeti sunuyoruz.',
      'OSB’lerdeki fabrikaların çoğu vardiyalı çalışır. Bu nedenle teslimat planlamamızı vardiya giriş-çıkış saatlerine göre yapıyor, yemeklerin tam servis saatinde sıcak olarak yemekhanede olmasını sağlıyoruz.',
      'Kendi yemekhanesi olan fabrikalara toplu taşımalı yemek, yemekhanesi olmayan küçük ve orta ölçekli işletmelere ise porsiyonlanmış tabldot servis öneriyoruz.',
    ],
    places: ['GOSB – Gebze OSB', 'Gebze Güzeller OSB', 'GEPOSB – Plastikçiler OSB', 'TOSB – Taysad OSB', 'Dilovası OSB', 'İMES OSB', 'Kocaeli Bilişim Vadisi', 'TÜBİTAK MAM çevresi'],
    faq: [
      {
        q: 'GOSB’deki fabrikamıza yemek servisi yapar mısınız?',
        a: 'Evet. Gebze Organize Sanayi Bölgesi (GOSB) başta olmak üzere bölgedeki tüm OSB’lere düzenli toplu yemek servisi yapıyoruz.',
      },
      {
        q: 'OSB’lerde minimum kişi sayısı var mı?',
        a: 'Minimum kişi sayısı servis şekline ve teslimat noktasına göre değişir. İhtiyacınızı iletin, size uygun bir çözüm sunalım.',
      },
    ],
  },
  {
    slug: 'darica-toplu-yemek',
    name: 'Darıca',
    metaTitle: 'Darıca Toplu Yemek Siparişi | Tabldot Yemek Servisi – Topçular Yemek',
    metaDesc: 'Darıca toplu yemek ve tabldot yemek siparişi. İşletme, atölye, okul ve şantiyelere günlük taze toplu yemek servisi. Darıca’nın tüm mahallelerine teslimat. Teklif alın.',
    h1: 'Darıca Toplu Yemek ve Tabldot Servisi',
    lead: 'Gebze’deki mutfağımızdan Darıca’ya kısa sürede ulaşıyor; işletmenize her gün taze ve sıcak toplu yemek getiriyoruz.',
    body: [
      'Darıca’da faaliyet gösteren atölyeler, mağazalar, özel okullar, klinikler ve şantiyeler için tabldot ve toplu yemek servisi veriyoruz. Gebze’ye komşu olması sayesinde Darıca’ya yaptığımız teslimatlar hızlı ve dakiktir.',
      'Küçük ekipler için porsiyonlanmış tabldot, daha kalabalık işletmeler için toplu taşımalı yemek seçeneği sunuyoruz. Menüler her gün değişir; çalışanlarınız haftanın her günü farklı bir yemekle karşılaşır.',
      'Bayramoğlu, Osmangazi, Nenehatun, Kazım Karabekir, Abdi İpekçi, Fevzi Çakmak ve Bağlarbaşı başta olmak üzere Darıca’nın tüm mahallelerine servis yapıyoruz.',
    ],
    places: ['Bayramoğlu', 'Osmangazi', 'Nenehatun', 'Kazım Karabekir', 'Abdi İpekçi', 'Fevzi Çakmak', 'Bağlarbaşı', 'Emek'],
    faq: [
      {
        q: 'Darıca’ya yemek servisi yapıyor musunuz?',
        a: 'Evet, Darıca’nın tüm mahallelerine günlük tabldot ve toplu yemek servisi yapıyoruz.',
      },
      {
        q: 'Darıca’da küçük ekiplere tabldot servis var mı?',
        a: 'Evet. Küçük ve orta ölçekli işletmelere porsiyonlanmış tabldot servis sunuyoruz. Minimum kişi sayısı için bizimle iletişime geçebilirsiniz.',
      },
    ],
  },
  {
    slug: 'cayirova-toplu-yemek',
    name: 'Çayırova',
    metaTitle: 'Çayırova Toplu Yemek | Şekerpınar Fabrika Yemeği – Topçular Yemek',
    metaDesc: 'Çayırova ve Şekerpınar toplu yemek siparişi. TOSB ve lojistik merkezlerindeki fabrikalara tabldot ve toplu yemek servisi. Günlük taze menüler, zamanında teslimat.',
    h1: 'Çayırova ve Şekerpınar Toplu Yemek Servisi',
    lead: 'Çayırova’daki fabrikalar, lojistik depoları ve ofisler için günlük, sıcak ve doyurucu toplu yemek servisi.',
    body: [
      'Çayırova; Şekerpınar’daki TOSB (Taysad Organize Sanayi Bölgesi), büyük lojistik merkezleri ve çok sayıda üretim tesisiyle yoğun bir iş bölgesidir. Bu bölgedeki işletmelere tabldot ve toplu yemek servisi sunuyoruz.',
      'Lojistik ve depo çalışanları gibi yoğun tempoda çalışan ekipler için doyurucu, enerji veren menüler hazırlıyoruz. Teslimat saatlerini vardiya ve mola saatlerinize göre planlıyoruz.',
      'Şekerpınar, Akse, Özgürlük, Atatürk, İnönü, Emek ve Yeni Mahalle başta olmak üzere Çayırova’nın tüm bölgelerine servis veriyoruz.',
    ],
    places: ['Şekerpınar', 'TOSB', 'Akse', 'Özgürlük', 'Atatürk', 'İnönü', 'Emek', 'Yeni Mahalle'],
    faq: [
      {
        q: 'Şekerpınar’daki lojistik merkezine yemek getiriyor musunuz?',
        a: 'Evet. Şekerpınar ve TOSB bölgesindeki lojistik merkezleri ve fabrikalara düzenli toplu yemek servisi yapıyoruz.',
      },
      {
        q: 'Çayırova’da gece vardiyasına yemek servisi var mı?',
        a: 'Vardiya saatlerinize göre planlama yapıyoruz. Gece vardiyası ihtiyacınızı teklif görüşmesinde iletmeniz yeterli.',
      },
    ],
  },
  {
    slug: 'dilovasi-toplu-yemek',
    name: 'Dilovası',
    metaTitle: 'Dilovası Toplu Yemek | Dilovası OSB Fabrika Yemeği – Topçular Yemek',
    metaDesc: 'Dilovası toplu yemek ve fabrika yemeği servisi. Dilovası OSB, İMES OSB ve Diliskelesi’ndeki işletmelere tabldot ve toplu yemek. Taze, doyurucu menüler için teklif alın.',
    h1: 'Dilovası Toplu Yemek ve Fabrika Yemeği',
    lead: 'Dilovası’ndaki ağır sanayi ve üretim tesisleri için doyurucu, sıcak ve düzenli fabrika yemeği.',
    body: [
      'Dilovası; Dilovası OSB, İMES OSB ve Diliskelesi liman bölgesiyle Kocaeli’nin en önemli sanayi merkezlerinden biridir. Bu bölgedeki fabrikalara ve tersane/liman işletmelerine toplu yemek servisi veriyoruz.',
      'Ağır sanayide çalışan personelin enerji ihtiyacını karşılayacak, protein ve karbonhidrat dengesi iyi kurulmuş menüler hazırlıyoruz. Yemekler ısı yalıtımlı kaplarla Gebze’deki mutfağımızdan sıcak olarak yola çıkar.',
      'Tavşancıl, Diliskelesi, Kayapınar, Orhangazi ve Turgut Özal mahalleleri ile Dilovası’ndaki tüm sanayi bölgelerine servis veriyoruz.',
    ],
    places: ['Dilovası OSB', 'İMES OSB', 'Diliskelesi', 'Tavşancıl', 'Kayapınar', 'Orhangazi', 'Turgut Özal'],
    faq: [
      {
        q: 'Dilovası OSB’ye fabrika yemeği servisi yapıyor musunuz?',
        a: 'Evet. Dilovası OSB ve İMES OSB başta olmak üzere Dilovası’ndaki fabrikalara düzenli toplu yemek servisi yapıyoruz.',
      },
      {
        q: 'Ağır sanayi çalışanları için menüleriniz yeterince doyurucu mu?',
        a: 'Menülerimizi ağır işte çalışan personelin kalori ihtiyacını dikkate alarak hazırlıyoruz. Porsiyon miktarlarını ihtiyacınıza göre ayarlayabiliyoruz.',
      },
    ],
  },
  {
    slug: 'tuzla-toplu-yemek',
    name: 'Tuzla',
    metaTitle: 'Tuzla Toplu Yemek Siparişi | Tuzla Fabrika Yemeği – Topçular Yemek',
    metaDesc: 'Tuzla toplu yemek ve fabrika yemeği servisi. Tuzla OSB, İDOSB, Aydınlı ve tersaneler bölgesindeki işletmelere tabldot ve toplu yemek servisi. Teklif alın.',
    h1: 'Tuzla Toplu Yemek ve Fabrika Yemeği',
    lead: 'Gebze sınırındaki Tuzla’ya; organize sanayi bölgeleri ve tersaneler başta olmak üzere düzenli toplu yemek servisi.',
    body: [
      'Gebze’ye komşu olan Tuzla; organize sanayi bölgeleri, deri sanayi bölgesi ve tersaneleriyle İstanbul’un en büyük üretim merkezlerinden biridir. Tuzla’daki işletmelere de günlük tabldot ve toplu yemek servisi sunuyoruz.',
      'Tersane ve fabrika çalışanları için doyurucu, sıcak ve her gün değişen menüler hazırlıyoruz. Teslimat planlamamızı Gebze-Tuzla arasındaki kısa mesafe sayesinde dakik şekilde yapıyoruz.',
      'Tuzla OSB, İDOSB (Deri OSB), Aydınlı, Orhanlı, Şifa ve tersaneler bölgesindeki işletmeler hizmet verdiğimiz başlıca noktalardır.',
    ],
    places: ['Tuzla OSB', 'İDOSB', 'Aydınlı', 'Orhanlı', 'Şifa', 'Tersaneler Bölgesi'],
    faq: [
      {
        q: 'Tuzla’ya toplu yemek servisi yapıyor musunuz?',
        a: 'Evet. Gebze’ye komşu olan Tuzla’daki fabrikalara, tersanelere ve işletmelere toplu yemek servisi yapıyoruz.',
      },
      {
        q: 'Tuzla tersaneler bölgesine yemek getiriyor musunuz?',
        a: 'Evet, tersaneler bölgesindeki işletmelere de tabldot ve toplu yemek servisi sunuyoruz.',
      },
    ],
  },
  {
    slug: 'gosb-toplu-yemek',
    name: 'GOSB (Gebze OSB)',
    featured: true,
    metaTitle: 'GOSB Toplu Yemek Siparişi | Gebze OSB Fabrika Yemeği – Topçular Yemek',
    metaDesc: 'GOSB (Gebze Organize Sanayi Bölgesi) fabrikalarına günlük 4 çeşit sıcak tabldot ve toplu taşımalı yemek servisi. ISO 22000 belgeli, vardiyalı dakik teslimat. Teklif alın.',
    h1: 'GOSB Toplu Yemek & Fabrika Yemeği Servisi',
    lead: 'Gebze Organize Sanayi Bölgesi’ndeki (GOSB) ulusal ve uluslararası fabrikalara her gün dakik, hijyenik ve sıcak kurumsal yemek servisi sunuyoruz.',
    body: [
      'GOSB (Gebze Organize Sanayi Bölgesi), Türkiye’nin en gelişmiş sanayi kümelenmelerinden biridir. Yüksek teknoloji, otomotiv yan sanayi, kimya, elektronik ve makine sektörlerinde faaliyet gösteren GOSB fabrikalarının yemek ihtiyaçlarını kurumsal standartlarda karşılıyoruz.',
      'Sultan Orhan Mahallesi’ndeki mutfağımız GOSB’a yalnızca 8-10 dakika mesafededir. Bu coğrafi yakınlık, yemeklerin pişirildikten hemen sonra ısı kaybı yaşamadan, termobox kaplarla 70°C+ servis sıcaklığında fabrikaya ulaşmasını garanti eder.',
      'GOSB’da 3 vardiya çalışan tesisler için kahvaltı, öğle ve akşam yemeği planlaması yapıyoruz. ISO 22000 Gıda Güvenliği ve ISO 9001 Kalite standartlarımızla, fabrika denetimlerinde tam uyumlu kurumsal yemek ortağınızız.',
    ],
    places: ['GOSB 1000. Cadde', 'GOSB İhsan Dede Caddesi', 'GOSB Teknopark', 'Güzeller OSB Bağlantı Yolu', 'Tembelova Sanayi', 'Kirazpınar Sanayi Hattı'],
    faq: [
      {
        q: 'GOSB’daki fabrikamıza yemekler saat kaçta teslim edilir?',
        a: 'Fabrikanızın yemek mola saatine göre özel rota oluşturulur. Genellikle mola saatinden 20-30 dakika önce yalıtımlı termobox kaplarla yemekhanenize teslim edilir.',
      },
      {
        q: 'GOSB için numune ve deneme yemeği alabilir miyiz?',
        a: 'Evet. Teklif sürecinde firmanızın yönetim ve çalışan temsilcilerinin lezzetimizi test etmesi için ücretsiz deneme yemeği organize ediyoruz.',
      },
    ],
  },
  {
    slug: 'tosb-toplu-yemek',
    name: 'TOSB (Otomotiv OSB)',
    featured: true,
    metaTitle: 'TOSB Toplu Yemek & Tabldot Servisi | Şekerpınar Yemek Firması – Topçular Yemek',
    metaDesc: 'TOSB (Otomotiv Tedarik Sanayi İhtisas OSB) ve Şekerpınar fabrikalarına günlük taze tabldot yemek servisi. Otomotiv yan sanayi işletmelerine özel menüler. Teklif alın.',
    h1: 'TOSB Otomotiv OSB Toplu Yemek Servisi',
    lead: 'TOSB ve Şekerpınar üretim hatlarında çalışan personel için yüksek enerjili, doyurucu ve vardiyalı saatlere dakik sıcak yemek servisi.',
    body: [
      'TOSB (Otomotiv Tedarik Sanayi İhtisas Organize Sanayi Bölgesi) ve Şekerpınar aksındaki fabrikalar, yüksek tempolu ve titiz üretim süreçlerine sahiptir. Çalışanların motivasyonu ve iş verimliliği doğrudan doğruya öğle yemeğinin kalitesine bağlıdır.',
      'Topçular Yemek olarak, otomotiv yan sanayisi ve lojistik merkezlerinde çalışan teknik personelin kalori ve protein ihtiyacını karşılayan 4 kap zengin tabldot menüleri hazırlıyoruz. Etli ana yemekler, taze mevsim sebzeleri ve dengeli garnitürlerle zenginleştirilmiş menüler sunuyoruz.',
      'Şekerpınar ve TOSB bölgesine her gün düzenli servis araçlarımızla kesintisiz ulaşıyor; hem tabldot hem de yemekhanenizde porsiyonlanacak toplu taşımalı servis çözümleri sağlıyoruz.',
    ],
    places: ['TOSB 1. Cadde', 'TOSB 2. Cadde', 'Şekerpınar Sanayi Bölgesi', 'Çayırova Lojistik Tesisleri', 'Marmara Geri Dönüşümcüler Sanayi'],
    faq: [
      {
        q: 'TOSB bölgesine minimum kaç kişilik servis yapıyorsunuz?',
        a: 'TOSB ve Şekerpınar bölgesindeki işletmeler için 20 kişiden itibaren tabldot ve toplu yemek servisi sağlıyoruz.',
      },
      {
        q: 'Gece vardiyasında çalışan personele yemek veriyor musunuz?',
        a: 'Evet. Fabrikanızın çalışma takvimine göre 2. ve 3. vardiya (akşam ve gece) yemek ihtiyaçlarını planlıyoruz.',
      },
    ],
  },
  {
    slug: 'dilovasi-imes-yemek',
    name: 'İMES OSB',
    featured: true,
    metaTitle: 'Dilovası İMES OSB Toplu Yemek & Fabrika Tabldot Servisi | Topçular Yemek',
    metaDesc: 'Dilovası İMES Makine İhtisas OSB ve KOBİ OSB fabrikalarına toplu yemek servisi. Ağır sanayi personeline doyurucu, sıcacık termobox taşımalı yemek. Teklif alın.',
    h1: 'Dilovası İMES Makineciler OSB Toplu Yemek Servisi',
    lead: 'İMES OSB ve Dilovası sanayi bölgesindeki makine, döküm ve imalat fabrikaları için 4 kap dengeli, doyurucu günlük tabldot yemek.',
    body: [
      'Dilovası İMES Organize Sanayi Bölgesi, makine imalatı ve ağır sanayi alanında faaliyet gösteren dev fabrikalara ev sahipliği yapar. Bu tesislerde çalışan emektar iş gücünün en büyük beklentisi doyurucu, lezzetli ve taze yemektir.',
      'Topçular Yemek, ağır sanayi çalışanlarının ihtiyaç duyduğu besin değerlerini ve porsiyon büyüklüklerini çok iyi bilir. Menülerimizde bol proteinli et yemekleri, bakliyatlar, taze salatalar ve geleneksel Türk mutfağı tatlıları yer alır.',
      'Yemeklerimiz Gebze merkez mutfağımızda pişer, endüstriyel termobox kaplarla İMES OSB’deki fabrikanıza taşınır. Taşıma sırasında yemek ısısı korunur, ilk piştiği tazelikle personelinize sunulur.',
    ],
    places: ['İMES OSB 1. Cadde', 'İMES OSB 5. Cadde', 'Makineciler OSB', 'Kömürcüler OSB', 'Mermerciler Sanayi Sitesi', 'Dilovası D-100 Sanayi Aksı'],
    faq: [
      {
        q: 'İMES OSB’deki yemek teslimatında gecikme yaşanır mı?',
        a: 'Kesinlikle hayır. Servis güzergahlarımız D-100 ve Kuzey Marmara Otoyolu bağlantıları kullanılarak trafiğe göre optimize edilir; yemeğiniz tam mola düdüğünde hazır olur.',
      },
      {
        q: 'Gıda güvenliği belgeleriniz var mı?',
        a: 'Evet. Topçular Yemek ISO 22000 Gıda Güvenliği, ISO 9001 Kalite ve ISO 45001 İSG belgelerine sahiptir. Belgelerimizi sitemizden doğrudan inceleyebilirsiniz.',
      },
    ],
  },
];
