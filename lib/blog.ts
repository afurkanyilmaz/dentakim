export type BlogFAQ = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Yayın tarihi — ISO (YYYY-MM-DD). */
  date: string;
  /** Son güncelleme; SEO için dateModified olarak kullanılır. */
  updatedAt?: string;
  readTime: string;
  /** Kategori — blog listesinde ve kartlarda gösterilir. */
  category?: string;
  /** lib/doctors.ts içindeki hekim slug'ı; yazar Person şemasına bağlanır. */
  authorSlug?: string;
  /** İlgili hizmet sayfası slug'ı — yazıdan hizmete iç bağlantı. */
  serviceSlug?: string;
  /** Yazıya özel WhatsApp mesajı; boşsa varsayılan kullanılır. */
  whatsappMessage?: string;
  /** Yazı sonunda gösterilen ve FAQPage şemasına giren sorular. */
  faqs?: BlogFAQ[];
  /**
   * İçerik. Satır başına bir blok:
   *   "## Başlık"  → h2
   *   "- Madde"    → liste maddesi
   *   diğer        → paragraf
   */
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "kucukcekmece-dis-fiyatlari",
    title: "Küçükçekmece Diş Fiyatları: Planlama ve Şeffaflık Rehberi",
    excerpt:
      "Küçükçekmece’de diş tedavisi maliyetlerini anlamak için nelere dikkat etmelisiniz? Dentakim’de ön görüşme ve net planlama ile bütçenizi netleştirin.",
    date: "2026-04-12",
    readTime: "7 dk",
    content: `
Küçükçekmece’de diş tedavisi fiyatları; yapılacak işlemin kapsamı, kullanılan malzeme (örneğin implant sistemi veya aparey tipi), anestezi ihtiyacı ve süre üzerinden belirlenir. Amacımız hastalarımıza süreci saklamadan, ihtiyaçlarına göre sade bir plan sunmak ve her adımı yazılı olarak aktarmaktır.

## Nelere Göre Değişir?

İlk muayenede eksik görüntüleri, kemik yapısı, dişeti sağlığı ve kapanış ilişkisini değerlendiririz. Bu bulgular, ortodontik tedavi mi, cerrahi bir müdahale mi ya da daha muhafazakâr bir restoratif çözüm mü gerektiğini belirler. Aynı “implant veya dolgu” görünüm altında bile farklı klinik senaryolar vardır; bu yüzden internette gördüğünüz tek rakamı doğrudan kendi durumunuza uygun saymak doğru olmaz.

## Şeffaf Planlama

Dentakim’de ön görüşme ile hedefleri netleştirir, gerekiyorsa röntgen veya fotoğraf çekimleriyle tanı tamamlarız. Ortaya çıkan plan; randevular, beklenen süre ve ara kontroller dahil olarak adım adım yazılır. Böylece “sürpriz maliyet” riskini minimize edersiniz.

## Kurumsal Süreçler ve Ödeme Seçenekleri

Kurumsal anlaşmalar işveren politikalarına bağlı olarak değişebilir; yine de fatura ve plan özetimiz ile çoğu kurum başvurusunda gereken belgelere hızlıca ulaşırsınız. Taksit seçenekleri hakkında en güncel bilgi için iletişim hattımızdan veya yüz yüze randevu sırasında detayları paylaşıyoruz.

## Küçükçekmece’de Konfor Maliyeti

Sultan Murat Caddesi’ne yakın konumumuz sayesinde yol zamanını azaltarak randevunuza daha rahat yetişebilirsiniz. Aynı gün içinde birkaç küçük işlemi birleştirerek toplam seans sayısını düşürmek de hem zaman hem de ulaşım maliyetini optimize eder.

## Sonuç

Küçükçekmece diş fiyatları konusunda en doğru bilgi, size özel muayene sonrası oluşan plandır. Telefon veya WhatsApp üzerinden “ön görüşme” talep ederek süreci risksiz şekilde başlatabilirsiniz.
    `.trim(),
  },
  {
    slug: "kanal-tedavisi-sonrasi-agri-normal-mi",
    title: "Kanal Tedavisi Sonrası Ağrı Normal mi? Ne Zaman Kontrol Gerekir?",
    excerpt:
      "Kanal tedavisi sonrası hassasiyet, ısırırken ağrı ve şişlik: normal iyileşme ile uyarı işaretlerini ayırt edin. Küçükçekmece Dentakim rehberi.",
    date: "2026-05-01",
    readTime: "6 dk",
    content: `
Kanal tedavisi sonrası “biraz ağrı olur mu?” sorusu çok yaygındır. Kısa süreli hassasiyet genellikle normal iyileşme sürecinin parçasıdır; ancak bazı belirtiler kontrol gerektirebilir. Bu yazıda, Küçükçekmece’de Dentakim’e başvuran hastalarda en sık gördüğümüz şikayetleri ve ne zaman randevu almanız gerektiğini özetliyoruz.

## İlk 24–72 Saat: Hafif Hassasiyet Normaldir

Kanal tedavisinde kök kanalı temizlenirken çevre dokular hassaslaşabilir. Özellikle işlem sonrası ilk günlerde, ısırma sırasında “basınç ağrısı” ve sıcak-soğuk hassasiyeti görülebilir. Bu durum çoğu vakada birkaç gün içinde azalır.

## Ağrı Ne Zaman “Uyarı” Olur?

Aşağıdaki durumlar varsa kliniğinizle görüşmek iyi olur:

- Şiddeti giderek artan ağrı ve gece uykudan uyandırma
- Yüzde şişlik, dişetinde apse (sivilce gibi) oluşması
- Isırınca sanki diş “uzamış” hissi ve kapanışta erken temas
- Ateş veya genel halsizlik gibi sistemik bulgular

Bu belirtiler; yüksek kontak, kanal sisteminde kalan enfekte doku, çatlak diş veya geçici dolgunun sızdırması gibi nedenlerle ilişkili olabilir.

## Tedavi Sonrası Bakım İpuçları

İlk günlerde ilgili dişle sert gıdaları kırmamak, bölgeyi fazla zorlamamak ve hekimin önerdiği şekilde ağız bakımını sürdürmek önemlidir. Geçici dolgu varsa, “çok sert” veya “yapışkan” yiyeceklerle düşme riski artabilir.

## Dentakim’de Kontrol Yaklaşımı

Küçükçekmece Sultan Murat Caddesi’ndeki kliniğimizde, kanal tedavisi sonrası ağrıda önce kapanış (oklüzyon) kontrol edilir; gerekiyorsa dolgu yüzeyi ayarlanır. Şikayet devam ediyorsa radyolojik kontrol ile kök ucu bölgesi değerlendirilir. Hedef, dişi uzun vadeli fonksiyonla korumaktır.

## Sonuç

Kanal tedavisi sonrası kısa süreli hassasiyet çoğu zaman normaldir; ancak artan ağrı, şişlik veya ısırma ile keskin ağrı gibi belirtilerde kontrol önemlidir. Randevu için telefon veya WhatsApp üzerinden hızlıca ulaşabilirsiniz.
    `.trim(),
  },
  {
    slug: "zirkonyum-kaplama-kac-gun-surer",
    title: "Zirkonyum Kaplama Kaç Gün Sürer? Süreç ve Randevu Planı",
    excerpt:
      "Zirkonyum kaplama kaç seans sürer, ölçü ve prova aşamaları nasıl ilerler? Küçükçekmece Dentakim’de planlı protez süreci.",
    date: "2026-04-22",
    readTime: "6 dk",
    content: `
Zirkonyum kaplama; estetik, dayanıklılık ve doğal ışık geçirgenliği nedeniyle sık tercih edilir. “Kaç günde biter?” sorusunun yanıtı; yapılacak diş sayısı, mevcut kronların sökülmesi, dişeti sağlığı ve laboratuvar süresine göre değişir. Bu yazıda süreci pratik bir şekilde anlatıyoruz.

## 1) Muayene ve Planlama

İlk randevuda dişeti sağlığı, kapanış ilişkisi ve restorasyon sınırları değerlendirilir. Gerekirse röntgen alınır. Eğer dişetinde iltihap varsa önce tedavi edilmesi, kaplama uyumunu ve uzun ömrü artırır.

## 2) Preparasyon ve Ölçü

Dişler minimal invaziv prensiple hazırlanır, ardından dijital tarama veya hassas ölçü alınır. Ön bölgede estetik önemli olduğundan, renk seçimi ve fotoğraf rehberliği yapılabilir.

## 3) Geçici Kaplama Dönemi

Laboratuvar aşamasında geçici kaplamalarla günlük yaşantınıza devam edersiniz. Bu dönemde kapanış ayarları ve konfor kontrol edilir.

## 4) Prova ve Yapıştırma

Zirkonyumların prova seansında kenar uyumu, renk, kontur ve temaslar kontrol edilir. Sonrasında uygun simantasyon ile kalıcı olarak yapıştırılır.

## Süreyi Uzatan Faktörler

Çok dişli köprü planları, dişeti seviyesinin düzenlenmesi, bruksizm (diş sıkma) veya ek tedavi ihtiyacı (kanal tedavisi/dolgu) süreyi uzatabilir. Bu nedenle muayenede adım adım takvim paylaşmak en doğrusudur.

## Dentakim’de Planlama

Küçükçekmece’de Dentakim’de hedefimiz, randevuların sayısını azaltacak şekilde süreci planlamak ve kontrol seanslarını netleştirmektir. Muayene ön görüşme ile size özel yol haritası oluşturabiliriz.
    `.trim(),
  },
  {
    slug: "cocuklarda-dis-curugu-nasil-onlenir",
    title: "Çocuklarda Diş Çürüğü Nasıl Önlenir? 7 Pratik Alışkanlık",
    excerpt:
      "Biberon çürüğü, ara öğün şekeri ve fırçalama rutini: çocuklarda çürüğü önlemek için günlük pratikler. Küçükçekmece Dentakim.",
    date: "2026-04-05",
    readTime: "7 dk",
    content: `
Çocuklarda diş çürüğü, sadece “şeker yedi” ile açıklanamaz; beslenme sıklığı, gece rutini, florid kullanımı ve fırçalama alışkanlığı birlikte belirleyicidir. Küçükçekmece’de Dentakim’e gelen aileler için pratik bir kontrol listesi hazırladık.

## 1) Gece Şekerli Sıvıları Bırakın

Uyku öncesi süt/ meyve suyu gibi şekerli içecekler ağızda uzun süre kaldığında çürük riski artar. Su ile bitirmek iyi bir adımdır.

## 2) Atıştırmayı “Sürekli” Yapmayın

Gün boyu sık sık atıştırmak, ağız pH’ının sürekli asidik kalmasına neden olur. Ara öğün sayısını azaltmak büyük fark yaratır.

## 3) Fırçalamayı Ebeveyn Yönetsin

Özellikle küçük yaşlarda motor beceriler tam gelişmediği için fırçalama ebeveyn kontrolünde olmalıdır. Düzenli rutin, davranışı kalıcı kılar.

## 4) Flor Uygulamalarını İhmal Etmeyin

Hekim kontrolünde flor vernik, mineyi güçlendirir ve başlangıç lezyonlarını stabilize edebilir. Yaşa göre protokol değişir.

## 5) Fissür Örtücü Düşünün

Azı dişlerinin çiğneme yüzeyi girintili çıkıntılıdır. Fissür örtücü, bu bölgelerde çürüğü azaltır.

## 6) Çürük Erken Yakalanırsa Dolgu Daha Küçük Olur

Erken muayene, minimal müdahale demektir. Ağrı oluşmadan önce tespit edilen lezyonlar çok daha kolay yönetilir.

## 7) İlk Muayeneyi Ertelemeyin

İlk dişler çıktıktan sonra veya en geç 1 yaş civarında kontrol, risk haritası oluşturmak için idealdir.

Dentakim’de çocuk dostu iletişimle, hem çocuğun kliniği güvenli bir alan olarak görmesini hem de ebeveynin net bir bakım planı almasını hedefliyoruz.
    `.trim(),
  },
  {
    slug: "seffaf-plak-mi-tel-mi",
    title: "Şeffaf Plak mı Tel mi? Ortodontide Doğru Seçim Nasıl Yapılır?",
    excerpt:
      "Şeffaf plak (aligner) ve braket karşılaştırması: uygun vaka, süre, hijyen ve yaşam tarzı. Küçükçekmece Dentakim rehberi.",
    date: "2026-03-10",
    readTime: "6 dk",
    content: `
Ortodontide iki popüler seçenek vardır: braket (tel) sistemleri ve şeffaf plaklar. Hangisinin “daha iyi” olduğu değil, hangisinin sizin vakanıza ve yaşam tarzınıza daha uygun olduğu önemlidir.

## Şeffaf Plak Avantajları

- Estetik görünüm
- Yemek yerken çıkarılabildiği için daha kolay hijyen
- Kontrollerin daha planlı ilerlemesi

Ancak plakların etkili olabilmesi için günlük önerilen süreyle takılması gerekir. Uyumsuz kullanım, sürenin uzamasına ve hedefin değişmesine yol açabilir.

## Braket (Tel) Avantajları

- Uyumu hastaya daha az bağlıdır (sabit sistem)
- Karmaşık hareketlerde güçlü kontrol sağlar
- Bazı vakalarda daha öngörülebilir mekanik avantaj sunar

Dezavantajı ise hijyenin daha fazla özen istemesidir; arayüz fırçaları ve düzenli temizlik şarttır.

## Kararı Ne Belirler?

Kapanış bozukluğu, dişlerin rotasyonu, yer darlığı ve çene ilişkisi kararın temelidir. Ayrıca iş/okul temposu, konuşma hassasiyeti ve estetik beklenti de değerlendirilir.

Küçükçekmece Dentakim’de muayenede fotoğraf ve ölçü analizi ile iki yöntemin artı-eksi yönlerini net şekilde anlatır, size uygun planı birlikte belirleriz.
    `.trim(),
  },
  {
    slug: "implant-sonrasi-bakim",
    title: "İmplant Sonrası Bakım: İyileşme Döneminde 10 Altın Kural",
    excerpt:
      "İmplant sonrası şişlik, hijyen, sigara, beslenme ve kontrol randevuları: uzun ömürlü implant için bakım rehberi. Dentakim Küçükçekmece.",
    date: "2026-02-25",
    readTime: "7 dk",
    content: `
İmplant tedavisinin başarısı sadece cerrahi günle sınırlı değildir; iyileşme döneminde bakım ve kontrol randevuları kritik rol oynar. Bu yazıda en sık sorulan konuları kısa ve uygulanabilir şekilde derledik.

## 1) İlk 24 Saat Sert Gıda ve Sıcak İçecekten Kaçının

Kanama ve ödem riskini azaltmak için yumuşak ve ılık gıdalar tercih edilir.

## 2) Sigara İyileşmeyi Zorlaştırır

Sigara, dolaşımı ve doku iyileşmesini olumsuz etkileyebilir. Özellikle ilk haftalar kritik dönemdir.

## 3) Hijyeni “Nazik” Şekilde Sürdürün

Diş fırçalama tamamen bırakılmamalı; cerrahi bölgeyi travmatize etmeyecek şekilde uygulanmalıdır. Hekimin önerdiği solüsyonlar kullanılabilir.

## 4) Şişlik İçin Soğuk Uygulama

İlk gün aralıklı soğuk kompres ödemi azaltabilir.

## 5) Kontrolleri Aksatmayın

Erken dönemde dikiş/dişeti kontrolü; sonraki dönemde osseointegrasyon takibi önemlidir.

## 6) Geçici Protez Varsa Dikkat

Geçici diş veya geçici protez, bölgeye aşırı yük bindirmeyecek şekilde planlanır.

## 7) Ağrı Yönetimi İçin Hekim Önerisine Uyun

Gereksiz antibiyotik kullanımından kaçınılır; ağrı kesici protokolü hekiminize göre değişir.

## 8) Diş Sıkma Varsa Gece Plağı

Bruksizm, implant üst yapılarına aşırı yük bindirebilir. Gece plağı önerilebilir.

## 9) Ara Yüz Temizliğini Öğrenin

İmplant çevresinde ara yüz fırçası ve ip kullanımı uzun vadede peri-implant dokuyu korur.

## 10) Düzenli Profesyonel Bakım

6 ayda bir profesyonel temizlik, implant çevresi sağlığı için iyi bir alışkanlıktır.

Küçükçekmece Dentakim’de implant sürecini adım adım planlar, bakım protokolünü yazılı olarak paylaşırız.
    `.trim(),
  },
  {
    slug: "implant-ne-kadar-surer",
    title: "İmplant Ne Kadar Sürer? Adım Adım Süreç",
    excerpt:
      "Osseointegrasyon, geçici protez ve kalıcı restorasyon: implant tedavisinde süre tablosu ve kontrol randevuları.",
    date: "2026-03-28",
    readTime: "6 dk",
    content: `
İmplant tedavisinin toplam süresi; çene kemiği hacmi, sindirim (osseointegrasyon) süresi, üst yapı (abutment-kron) planı ve varsa ek cerrahiler (sinüs lift, greft) gibi faktörlere bağlıdır. Bu yazıda tipik bir zaman çizelgesini ve her aşamada ne beklemeniz gerektiğini özetliyoruz.

## Planlama ve İyileşme

İlk hafta muayene, röntgen ve dijital ölçü ile cerrahi plan hazırlanır. Uygulama günü lokal anestezi ile konforlu ilerler; çoğu hasta aynı gün rutinine dönebilir. İmplantın kemiğe oturması genellikle birkaç ay sürer; bu dönemde kontrol randevuları ile iyileşme takip edilir.

## Geçici ve Kalıcı Diş

Ön bölgede estetik ihtiyaç varsa geçici bir çözüm planlanabilir; arka bölgede fonksiyon ön plandadır. Osseointegrasyon tamamlandığında abutment ve kron/ köprü aşamasına geçilir. Malzeme seçimi (zirkonyum, metal destekli porselen) estetik ve çiğneme kuvvetine göre belirlenir.

## Komplikasyon Riskleri

Sigara kullanımı, kontrolsüz diyabet veya yetersiz ağız hijyeni iyileşmeyi olumsuz etkileyebilir. Bu nedenle takip randevularına gelmek ve önerilen bakım protokolünü uygulamak sürenin sağlıklı ilerlemesi için kritiktir.

## Dentakim Yaklaşımı

Küçükçekmece’de implant sürecini adım adım yazılı planla paylaşıyor, her kontrolde dişeti ve kapanışı değerlendiriyoruz. Sorularınız için randevu veya WhatsApp hattımızdan hızlıca ulaşabilirsiniz.
    `.trim(),
  },
  {
    slug: "dis-beyazlatma-evde-mi-klinik-mi",
    title: "Diş Beyazlatma: Evde mi, Klinikte mi Daha İyi?",
    excerpt:
      "Ofis tipi beyazlatma ve ev hekim kontrolünde tray sistemlerinin farkları, hassasiyet yönetimi ve kalıcılık.",
    date: "2026-02-15",
    readTime: "5 dk",
    content: `
Diş beyazlatmada iki ana yaklaşım vardır: klinikte hekim kontrolünde ofis tipi uygulama ve evde tray ile ev tipi protokol. Hangisinin sizin için uygun olduğu; diş minesinin kalınlığı, hassasiyet, mevcut dolgular ve estetik beklentiye göre belirlenir.

## Ofis Tipi Beyazlatma

Yüksek konsantrasyonlu ajanlar kısa sürede belirgin açılım sağlayabilir. Diş hekimi yanak-dudak koruyucu ve dişeti bariyeri ile yumuşak dokuları izole ederek işlemi güvenli tamamlar. Mine yüzeyinde geçici hassasiyet görülebilir; fluoride ve remineralizasyon önerileri ile yönetilir.

## Evde Tray Sistemleri

Ölçü alınarak kişiye özel plak hazırlanır ve hekimin önerdiği süre-konsantrasyon ile evde kullanılır. Daha kademeli açılım isteyenler için uygundur. Kendi başınıza kutudan tray kullanmak ise dişeti sınırına oturmayan kalıplar nedeniyle riskli olabilir.

## Beklenti Yönetimi

Doğal diş yapısı, mine renkleri ve translüsen davranış farkları nedeniyle her vaka aynı “Hollywood beyazına” gelmeyebilir. Gerçekçi hedef, sağlıklı ve doğal bir parlaklık kazanmaktır.

## Özet ve Randevu

Küçükçekmece Dentakim’de önce kontrol yapıyor, çatlak/abrazyon ve dolgu sınırlarını değerlendiriyoruz. Ardından size özel kombine veya tekli protokoller öneriyoruz.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────
  // Yüksek niyetli arama hedefli yazılar (19.08.2026)
  // Her yazıda WhatsApp ve telefon yönlendirmesi bulunur.
  // ─────────────────────────────────────────────────────────────
  {
    slug: "dis-agrisi-nasil-gecer",
    title: "Diş Ağrısı Nasıl Geçer? Gece Başlayan Ağrıda Ne Yapmalı?",
    excerpt:
      "Diş ağrısını geçici olarak azaltan yöntemler, kesinlikle yapılmaması gerekenler ve hangi ağrının acil müdahale istediği. Küçükçekmece Dentakim rehberi.",
    date: "2026-08-04",
    readTime: "7 dk",
    category: "Acil Diş Tedavisi",
    serviceSlug: "kanal-tedavisi",
    whatsappMessage:
      "Merhaba, diş ağrım var. En kısa sürede randevu alabilir miyim?",
    content: `
Diş ağrısı çoğu zaman gece, yani hekime ulaşmanın en zor olduğu saatte şiddetlenir. Bunun nedeni yatar pozisyonda baş bölgesine kan akışının artması ve iltihaplı dokudaki basıncın yükselmesidir. Bu yazıda ağrıyı geçici olarak nasıl kontrol altına alabileceğinizi, nelerden kesinlikle uzak durmanız gerektiğini ve hangi belirtilerde beklemeden kliniğe ulaşmanız gerektiğini anlatıyoruz.

## Diş ağrısının en sık nedenleri

- Derin çürük: Çürük mine ve dentini geçip pulpaya yaklaştığında sıcak-soğuk hassasiyeti ve zonklayan ağrı başlar.
- Pulpa iltihabı (pulpitis): Ağrı kendiliğinden gelir, gece artar ve ağrı kesiciye giderek daha az yanıt verir.
- Apse: Dişin kökünde iltihap birikir; yüzde şişlik, ateş ve dişe dokunulduğunda keskin ağrı görülür.
- Dişeti iltihabı: Kanama, hassasiyet ve baskı hissi ön plandadır.
- Kırık veya çatlak diş: Isırma anında bıçak gibi saplanan, bırakınca geçen ağrı tipiktir.
- Gömülü yirmilik diş: Çevresindeki dişetinde tekrarlayan iltihap ve çene açmada zorluk yapar.

## Ağrıyı geçici olarak azaltan yöntemler

> Bunlar tedavi değildir; hekime ulaşana kadar geçen süreyi rahatlatmak içindir.

- Başınızı yüksekte tutun. Yatarken ekstra bir yastık kullanmak bölgedeki basıncı azaltır.
- Yanağınıza dışarıdan soğuk kompres uygulayın; 15 dakika uygulayıp 15 dakika ara verin.
- Ilık tuzlu su ile nazikçe çalkalayın. Bir bardak ılık suya yarım çay kaşığı tuz yeterlidir.
- Ağrıyan tarafla çiğnemekten kaçının, çok sıcak ve çok soğuk gıdalardan uzak durun.
- Daha önce kullandığınız ve alerjiniz olmayan bir ağrı kesiciyi, kutusundaki doza uyarak alabilirsiniz.

## Kesinlikle yapmayın

- Aspirini diş üzerine koymayın. Doğrudan temas dişetinde kimyasal yanık oluşturur.
- Ağrıyan bölgeye sıcak uygulama yapmayın; iltihap varsa sıcak yayılmayı hızlandırır.
- Kendi kararınızla antibiyotik başlamayın. Antibiyotik ağrının nedenini ortadan kaldırmaz, yalnızca tabloyu maskeler ve gereksiz kullanım direnç oluşturur.
- Ağrıyan dişi kürdan, iğne veya sert cisimle karıştırmayın.
- Alkol, karanfil yağı gibi yöntemleri dişeti üzerine uzun süre uygulamayın.

## Bu belirtilerde bekleyemezsiniz

Aşağıdaki durumlar acil değerlendirme gerektirir:

- Yüzde, göz altında veya boyunda yayılan şişlik
- Ateş ile birlikte seyreden diş ağrısı
- Yutkunmakta veya ağzı açmakta zorluk
- Ağrı kesiciye hiç yanıt vermeyen, uykudan uyandıran ağrı
- Darbe sonrası kırılan veya yerinden oynayan diş
- Durmayan kanama

> Bu tablolar enfeksiyonun yayıldığını gösterebilir; erken müdahale hem dişi kurtarma şansını artırır hem de daha ciddi komplikasyonların önüne geçer.

## Klinikte ne yapılır?

Muayenede önce ağrının kaynağı belirlenir: çürük derinliği, pulpa canlılığı, kapanış ilişkisi ve dişeti durumu değerlendirilir; gerekirse röntgen alınır. Kaynağa göre plan değişir. Yüzeysel çürükte dolgu yeterli olurken, pulpaya ulaşmış iltihapta kanal tedavisi gündeme gelir. Apse varsa önce drenaj ve ağrı kontrolü sağlanır, ardından kalıcı tedavi planlanır.

Amacımız çekim değil, mümkün olduğunca dişi korumaktır. Erken gelen hastalarda tedavi çoğu zaman tek seansta çözülür; ertelenen vakalarda ise seans sayısı ve maliyet artar.

## Küçükçekmece'de ağrılı hasta randevusu

Kliniğimiz Fevzi Çakmak Mahallesi Sultan Murat Caddesi üzerindedir; Halkalı, Atakent, Sefaköy ve Cennet Mahallesi'nden kısa sürede ulaşabilirsiniz. Ağrılı hastalara günlük programda öncelik açmaya çalışıyoruz.

Ağrınız varsa beklemeyin: WhatsApp'tan yazarak veya doğrudan arayarak durumu anlatın, aynı gün için uygun saat bakalım.
    `.trim(),
    faqs: [
      {
        question: "Diş ağrısı kendiliğinden geçer mi?",
        answer:
          "Ağrı bir süre azalabilir ancak bu iyileştiği anlamına gelmez. Pulpa dokusu tamamen öldüğünde ağrı kesilir, buna karşılık iltihap kök ucunda sessizce ilerler. Ağrının geçmesi tedaviye gerek kalmadığı anlamına gelmez.",
      },
      {
        question: "Diş ağrısında hangi ağrı kesici kullanılmalı?",
        answer:
          "Daha önce kullandığınız ve alerjiniz olmayan bir ağrı kesiciyi kutusundaki doza uyarak alabilirsiniz. Kan sulandırıcı kullanıyorsanız, mide rahatsızlığınız veya kronik hastalığınız varsa önce hekiminize danışın. Ağrı kesici çözüm değil, hekime ulaşana kadar geçici bir köprüdür.",
      },
      {
        question: "Gece başlayan diş ağrısı için sabahı bekleyebilir miyim?",
        answer:
          "Şişlik, ateş, yutkunma güçlüğü yoksa ve ağrı kontrol altına alınabiliyorsa sabahı bekleyebilirsiniz. Bu belirtilerden biri varsa beklemeden acil servise veya nöbetçi diş hekimine başvurun.",
      },
      {
        question: "Ağrılı dişe hemen kanal tedavisi mi yapılır?",
        answer:
          "Her ağrıda kanal tedavisi gerekmez. Yüzeysel çürükte dolgu, dişeti kaynaklı ağrıda temizlik ve bakım yeterli olabilir. Kanal tedavisi, iltihabın pulpaya ulaştığı vakalarda gündeme gelir; karar muayene ve röntgen sonrası verilir.",
      },
    ],
  },
  {
    slug: "acil-dis-hekimi-kucukcekmece",
    title: "Küçükçekmece'de Acil Diş Hekimi: Hangi Durumlar Gerçekten Acildir?",
    excerpt:
      "Kırılan diş, düşen dolgu, apse ve travma: hangi durum bekleyebilir, hangisi aynı gün müdahale ister? Küçükçekmece ve çevresi için acil diş rehberi.",
    date: "2026-08-11",
    readTime: "6 dk",
    category: "Acil Diş Tedavisi",
    whatsappMessage:
      "Merhaba, acil bir diş sorunum var. Bugün için randevu alabilir miyim?",
    content: `
"Acil" kelimesi diş hekimliğinde herkes için aynı şeyi ifade etmiyor. Bazı durumlar birkaç gün bekleyebilirken bazıları saatler içinde müdahale gerektirir. Bu yazıda ikisini ayırt etmenize yardımcı oluyoruz.

## Aynı gün müdahale gerektiren durumlar

- Yüzde veya boyunda yayılan şişlik: Enfeksiyonun doku aralıklarına ilerlediğini gösterir. Ateş ve yutkunma güçlüğü eklendiyse acil servise başvurulmalıdır.
- Yerinden çıkan daimi diş: Zaman en kritik faktördür. Dişi taç kısmından tutun, kökünü ovalamayın, süt veya serum fizyolojik içinde saklayın ve otuz dakika içinde kliniğe ulaşın.
- Durmayan kanama: Çekim sonrası veya travma sonrası gazlı bez ile yirmi dakika baskıya rağmen duran kanama yoksa değerlendirme gerekir.
- Ağrı kesiciye yanıt vermeyen, uykudan uyandıran ağrı.
- Çene travması, açma-kapamada kilitlenme.

## Birkaç gün bekleyebilen ama ertelenmemesi gerekenler

- Düşen dolgu veya kaplama: Diş hassaslaşır ama acil değildir. Bölgeyi temiz tutun, sert gıdadan kaçının.
- Kırılan diş köşesi: Ağrı yoksa birkaç gün beklenebilir; keskin kenar dili rahatsız ediyorsa daha erken bakılmalıdır.
- Hafif dişeti kanaması ve hassasiyet.
- Ortodontik telin batması: Mumla geçici olarak kapatılabilir.

## Travmada ilk 30 dakika

Özellikle çocuklarda düşme sonrası diş yaralanmaları sık görülür. Daimi diş tamamen yerinden çıktıysa:

- Dişi kron kısmından tutun, köke asla dokunmayın.
- Kirliyse serum fizyolojik veya süt ile yalnızca birkaç saniye durulayın; fırçalamayın.
- Mümkünse dişi yerine geri yerleştirip hastanın gazlı bez ısırmasını sağlayın.
- Yerleştiremiyorsanız süt, serum fizyolojik veya hastanın kendi tükürüğü içinde saklayın. Musluk suyunda bekletmeyin.
- Vakit kaybetmeden kliniğe ulaşın. İlk otuz dakikada müdahale edilen dişlerde tutunma şansı belirgin biçimde yüksektir.

> Süt dişi yerinden çıktıysa geri yerleştirilmez; altındaki daimi diş germine zarar verebilir. Yine de değerlendirme için hekime başvurulmalıdır.

## Apse belirtileri

Dişetinde sivilceye benzeyen kabarcık, kötü tat, dişin uzamış gibi hissedilmesi ve ısırınca keskin ağrı apse işaretidir. Antibiyotik tek başına apseyi çözmez; iltihabın kaynağı temizlenmeden tablo tekrarlar. Klinikte önce drenaj ve ağrı kontrolü sağlanır, ardından kanal tedavisi veya gerekiyorsa çekim planlanır.

## Küçükçekmece ve çevresinden ulaşım

Kliniğimiz Fevzi Çakmak Mahallesi, Sultan Murat Caddesi No:86 A adresindedir. Halkalı, Atakent, Sefaköy, Cennet Mahallesi ve İnönü Mahallesi'nden kısa sürede; Avcılar, Bağcılar ve Esenyurt'tan E-5 ve metrobüs bağlantılarıyla ulaşabilirsiniz.

Hafta içi 09:00-19:00, cumartesi 09:00-17:00 arasında hizmet veriyoruz. Acil durumunuzu WhatsApp'tan kısaca yazarsanız, kliniğe gelmeden önce ne yapmanız gerektiğini de söyleyebiliriz.
    `.trim(),
    faqs: [
      {
        question: "Yerinden çıkan dişimi nasıl saklamalıyım?",
        answer:
          "Süt, serum fizyolojik veya hastanın kendi tükürüğü içinde saklayın. Musluk suyunda bekletmeyin, kökünü ovalamayın ve kuru bırakmayın. En geç otuz dakika içinde kliniğe ulaşmaya çalışın.",
      },
      {
        question: "Apse için antibiyotik yeterli mi?",
        answer:
          "Hayır. Antibiyotik yayılmayı sınırlayabilir ancak iltihabın kaynağı temizlenmediği sürece tablo tekrarlar. Kalıcı çözüm için kanal tedavisi veya gerekiyorsa çekim yapılmalıdır.",
      },
      {
        question: "Düşen dolgu acil midir?",
        answer:
          "Genellikle acil değildir. Ancak diş hassaslaşacağı ve boşluk kolayca çürüyeceği için birkaç gün içinde randevu alınması önerilir. O döneme kadar bölgeyi temiz tutun ve sert gıdalardan kaçının.",
      },
    ],
  },
  {
    slug: "implant-yaptirmak-istiyorum-nereden-baslamali",
    title: "İmplant Yaptırmak İstiyorum: Nereden Başlamalıyım?",
    excerpt:
      "İlk muayeneden kalıcı dişe kadar implant sürecinin tamamı: hangi tetkikler yapılır, kimler uygundur, süre ve maliyeti ne belirler? Küçükçekmece Dentakim.",
    date: "2026-08-18",
    readTime: "8 dk",
    category: "İmplant",
    authorSlug: "dr-musa-burak-sakar",
    serviceSlug: "implant-tedavisi",
    whatsappMessage:
      "Merhaba, implant tedavisi hakkında bilgi almak ve muayene randevusu oluşturmak istiyorum.",
    content: `
"İmplant yaptırmak istiyorum ama nereden başlayacağımı bilmiyorum" cümlesini kliniğimizde çok sık duyuyoruz. Bu yazı, ilk adımdan kalıcı dişe kadar süreci sırasıyla anlatıyor.

## Adım 1: Muayene ilk muayene

Süreç muayene ile başlar. Ağız içi incelemede eksik diş bölgesindeki dişeti kalınlığı, komşu dişlerin durumu ve kapanış ilişkisi değerlendirilir. Bu aşamada henüz hiçbir işlem yapılmaz; amaç mevcut tabloyu görmektir. Dentakim'de tedavi planlaması muayene sonrasında yapılır.

## Adım 2: Görüntüleme

Panoramik röntgen ve gerektiğinde üç boyutlu tomografi çekilir. Tomografi implant planlamasının en kritik verisidir: kemiğin genişliği, yüksekliği, yoğunluğu ve alt çene siniri ile sinüs tabanına uzaklık milimetrik olarak ölçülür. Bu ölçüm olmadan verilen implant kararı tahmine dayanır.

## Adım 3: Planlama ve yazılı teklif

Görüntüler üzerinde implantın hangi açı ve derinlikte yerleştirileceği dijital olarak planlanır. Kemik hacmi yetersizse greft veya sinüs yükseltme ihtiyacı bu aşamada belirlenir. Ardından size kalem kalem yazılı bir plan sunulur: kaç implant, hangi marka, üst yapı türü, tahmini süre ve toplam maliyet.

## Adım 4: Cerrahi uygulama

İmplant yerleştirme lokal anestezi altında yapılır ve tek implant için ortalama 30-45 dakika sürer. Hasta işlem sırasında ağrı duymaz; genellikle basınç hissi tarif edilir. Kliniğimizde cerrahi fazı ağız-diş-çene cerrahımız yürütür.

## Adım 5: İyileşme

İmplantın kemikle kaynaşması (osseointegrasyon) alt çenede yaklaşık 2 ay, üst çenede 3 aya kadar sürebilir. Bu dönemde estetik kaygı varsa geçici protez uygulanır, böylece sosyal hayatınız etkilenmez.

## Adım 6: Protez aşaması

Kaynaşma tamamlandığında ölçü alınır ve kalıcı kaplama hazırlanır. Renk ve form komşu dişlerle uyumlu seçilir. Bu fazı protez ve estetik diş hekimliği alanında çalışan hekimimiz yürütür; cerrahi ve protez aşamalarının aynı klinikte planlanması toplam randevu sayısını azaltır.

## Kimler implant yaptırabilir?

Çene kemiği gelişimini tamamlamış, genel sağlığı uygun her yetişkin adaydır. Bazı durumlar önce düzenlenmelidir:

- Kontrolsüz şeker hastalığı: Kan şekeri regülasyonu sağlanmalıdır.
- Tedavi edilmemiş dişeti hastalığı: Önce periodontal tedavi yapılır.
- Ağır sigara kullanımı: İyileşmeyi olumsuz etkiler, en azından iyileşme döneminde bırakılması önerilir.
- Yetersiz kemik hacmi: Greftleme veya sinüs yükseltme ile uygun zemin oluşturulabilir.

> "Kemiğim yok, bende olmaz" yorumu çoğu vakada doğru değildir; karar ancak tomografi sonrası verilebilir.

## Süre ve maliyeti ne belirler?

Toplam süre kemik durumuna, ek cerrahi ihtiyacına ve üst yapı planına göre değişir; basit vakalarda 3-4 ay, greft gerektiren vakalarda 6-9 ay olabilir. Maliyeti ise implant sayısı, kullanılan sistemin kalite sınıfı, greft ihtiyacı ve üst yapı türü belirler. Bu nedenle muayene yapılmadan verilen net rakam gerçekçi değildir.

## İlk adımı atmak

Eksik dişiniz için implantın uygun olup olmadığını öğrenmenin tek yolu muayenedir ve bu sizi hiçbir şeye mecbur bırakmaz. WhatsApp'tan yazın ya da arayın; uygun bir gün belirleyip görüntülemeyi tamamlayalım, ardından yazılı planınızı elinize verelim.
    `.trim(),
    faqs: [
      {
        question: "İmplant tedavisi ağrılı mıdır?",
        answer:
          "Uygulama lokal anestezi altında yapıldığı için işlem sırasında ağrı hissedilmez. Sonrasında ilk iki gün hafif şişlik ve hassasiyet olabilir; reçete edilen ağrı kesici ve soğuk uygulama ile rahatlıkla kontrol altına alınır. Çoğu hasta ertesi gün günlük yaşamına döner.",
      },
      {
        question: "İmplant kaç yıl kullanılır?",
        answer:
          "Düzenli bakım ve altı aylık kontrollerle implantın kemikteki kısmı çok uzun yıllar kullanılabilir. Üzerindeki kaplama kullanıma bağlı olarak 10-15 yılda yenilenebilir. Ömrü kısaltan en önemli faktör implant çevresindeki dişeti iltihabıdır.",
      },
      {
        question: "Tek seansta bitirilebilir mi?",
        answer:
          "Uygun vakalarda implant yerleştirildiği gün geçici diş uygulanabilir, ancak kalıcı üst yapı için kemikle kaynaşmanın tamamlanması beklenir. Tamamen tek seansta biten bir implant tedavisi gerçekçi bir beklenti değildir.",
      },
      {
        question: "İmplant öncesi hangi tetkikler gerekir?",
        answer:
          "Ağız içi muayene, panoramik röntgen ve çoğu vakada üç boyutlu tomografi. Sistemik hastalık veya düzenli ilaç kullanımı varsa güncel kan tahlili ve hekim raporu istenebilir.",
      },
    ],
  },
  {
    slug: "kanal-tedavisi-nedir",
    title: "Kanal Tedavisi Nedir, Ağrılı mıdır? Adım Adım Süreç",
    excerpt:
      "Kanal tedavisi hangi durumlarda gerekir, kaç seans sürer, ağrılı mıdır ve sonrasında dişin ömrü ne kadardır? Küçükçekmece Dentakim rehberi.",
    date: "2026-07-28",
    readTime: "7 dk",
    category: "Kanal Tedavisi",
    serviceSlug: "kanal-tedavisi",
    whatsappMessage:
      "Merhaba, kanal tedavisi hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    content: `
Kanal tedavisi, adı geçtiğinde çoğu hastanın gerildiği bir işlemdir. Oysa modern anestezi ve tekniklerle bugün dolgudan çok farklı bir konfor sunmaz. Bu yazıda ne olduğunu, ne zaman gerektiğini ve süreci adım adım anlatıyoruz.

## Kanal tedavisi nedir?

Dişin ortasında, kökün içine uzanan kanallarda pulpa adı verilen canlı doku bulunur; damar ve sinir içerir. Derin çürük, kırık veya tekrarlayan işlemler nedeniyle bu doku iltihaplandığında ya da öldüğünde ağrı ve enfeksiyon başlar. Kanal tedavisi, bu dokunun kanal sisteminden temizlenmesi, kanalların şekillendirilip dezenfekte edilmesi ve dolgu maddesiyle sızdırmaz biçimde kapatılması işlemidir.

Amaç dişi çekmek yerine ağızda tutmaktır. Doğal dişin korunması, protetik alternatiflere göre öncelikli hedeftir.

## Hangi durumlarda gerekir?

- Kendiliğinden başlayan, gece artan zonklayıcı ağrı
- Sıcak-soğuk hassasiyetinin uyaran ortadan kalktıktan sonra da uzun süre devam etmesi
- Dişte renk değişimi (koyulaşma)
- Dişetinde apse kabarcığı, ısırınca keskin ağrı
- Röntgende kök ucunda iltihap görüntüsü
- İleri derecede madde kaybı veya kırık nedeniyle pulpanın açığa çıkması

## Adım adım süreç

1. Muayene ve röntgen ile tanı konur, kanal sayısı ve kök anatomisi değerlendirilir.
2. Lokal anestezi uygulanır. Bu aşamadan sonra hasta ağrı hissetmez.
3. Diş, tükürükten izole edilir. İzolasyon tedavinin başarısını doğrudan etkiler.
4. Çürük temizlenir ve pulpa odasına ulaşılır.
5. Kanallar eğelerle şekillendirilir, dezenfektan solüsyonlarla yıkanır.
6. Kanallar dolgu maddesiyle doldurulur ve üst kısım kapatılır.
7. Kalıcı restorasyon uygulanır; arka dişlerde çoğu zaman kron veya overlay önerilir.

## Kaç seans sürer?

Basit vakalarda tek seansta tamamlanabilir. İltihap fazlaysa, apse varsa veya kanal anatomisi karmaşıksa iki-üç seans gerekebilir. Seans süresi ortalama 45-60 dakikadır.

## Ağrılı mıdır?

İşlemin kendisi lokal anestezi altında ağrısızdır. Asıl ağrı, tedavi öncesindeki iltihaptan kaynaklanır ve tedavi bu ağrıyı ortadan kaldırır. İşlemden sonra ilk birkaç gün ısırırken hafif hassasiyet olabilir; bu normaldir ve giderek azalır.

> Şu belirtilerde hekiminize dönmelisiniz: giderek artan ve gece uyandıran ağrı, yüzde şişlik, dişin uzamış gibi hissedilmesi, ateş.

## Kanal tedavisi görmüş diş ne kadar dayanır?

Doğru yapılmış ve uygun şekilde restore edilmiş bir diş ömür boyu kullanılabilir. Başarıyı düşüren en yaygın neden, kanal tedavisi sonrası dişin kron ile korunmaması ve zamanla kırılmasıdır. Bu yüzden özellikle arka dişlerde koruyucu restorasyon ihmal edilmemelidir.

## Randevu

Ağrınız varsa veya "kanal tedavisi gerekiyor" dendiyse ikinci bir görüş almak sizin hakkınızdır. Muayene muayene için WhatsApp'tan yazabilir ya da doğrudan arayabilirsiniz; röntgen sonrası size hangi seçeneklerin bulunduğunu yazılı olarak paylaşıyoruz.
    `.trim(),
    faqs: [
      {
        question: "Kanal tedavisi kaç seans sürer?",
        answer:
          "Basit vakalarda tek seans yeterlidir. İltihap fazlaysa veya kanal anatomisi karmaşıksa iki-üç seans gerekebilir. Her seans ortalama 45-60 dakika sürer.",
      },
      {
        question: "Kanal tedavisi sırasında ağrı duyar mıyım?",
        answer:
          "Hayır. İşlem lokal anestezi altında yapılır. Tedaviden önceki ağrı iltihaptan kaynaklanır ve tedavi bu ağrıyı ortadan kaldırır.",
      },
      {
        question: "Kanal tedavisi yerine çekim yaptırsam olmaz mı?",
        answer:
          "Doğal dişin korunması her zaman önceliklidir. Çekilen dişin yerine implant veya köprü gerekir; bu hem daha maliyetli hem daha uzun bir süreçtir. Diş kurtarılabiliyorsa kanal tedavisi tercih edilir.",
      },
      {
        question: "Kanal tedavisinden sonra kaplama şart mı?",
        answer:
          "Özellikle arka dişlerde büyük ölçüde önerilir. Kanal tedavisi görmüş diş kırılganlaşır; kron veya overlay ile korunmadığında yıllar içinde kırılma riski belirgin biçimde artar.",
      },
    ],
  },
  {
    slug: "dis-beyazlatma-nasil-yapilir",
    title: "Diş Beyazlatma Nasıl Yapılır? Kaç Seans Sürer, Zarar Verir mi?",
    excerpt:
      "Ofis tipi beyazlatmanın seans sayısı, kalıcılığı, hassasiyet riski ve marketten alınan ürünlerin gerçek etkisi. Küçükçekmece Dentakim.",
    date: "2026-08-01",
    readTime: "6 dk",
    category: "Diş Beyazlatma",
    authorSlug: "dr-berna-kalkan-yardim",
    serviceSlug: "dis-beyazlatma",
    whatsappMessage:
      "Merhaba, diş beyazlatma hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    content: `
Diş beyazlatma, doğru uygulandığında dişe zarar vermeyen ve sonucu öngörülebilir bir işlemdir. Yanlış uygulandığında ise kalıcı hassasiyet ve mine hasarı bırakabilir. Farkı belirleyen şey yöntem değil, öncesinde yapılan değerlendirmedir.

## Dişler neden sararır?

- Yaşla birlikte mine incelir, altındaki sarımsı dentin daha görünür hale gelir.
- Çay, kahve, kola, kırmızı şarap ve sigara yüzeyde renklenme bırakır.
- Bazı antibiyotikler ve aşırı flor alımı diş yapısında iç renklenme oluşturur.
- Kanal tedavisi görmüş dişler zamanla tek başına koyulaşabilir.

Bu nedenlerin hangisinin baskın olduğu, beyazlatmanın işe yarayıp yaramayacağını belirler. Yüzey renklenmesi kolay açılırken, iç yapıdan gelen renklenmede sonuç sınırlı olabilir ve kaplama gündeme gelebilir.

## Klinikte (ofis tipi) beyazlatma

Hekim kontrolünde, yüksek konsantrasyonlu jel ile uygulanır. Dişeti koruyucu bariyerle kapatıldığı için yumuşak dokular korunur. Ortalama 45-60 dakika sürer ve genellikle tek seansta 2-4 ton açılma sağlanır. Başlangıç rengi koyu olan hastalarda ikinci seans önerilebilir.

En büyük avantajı hız ve öngörülebilirliktir; özel bir gün öncesinde öngörülebilirliği yüksek bir yöntemdir.

## Evde (hekim kontrollü) beyazlatma

Ağzınıza özel hazırlanan şeffaf plaklara düşük konsantrasyonlu jel uygulanır ve günde birkaç saat, 10-14 gün taşınır. Daha kademeli sonuç verir ve hassasiyeti olan hastalar için daha konforludur. Ofis tipi beyazlatmadan sonra sonucu korumak için de kullanılır.

## Marketten alınan ürünler işe yarar mı?

Beyazlatıcı macun ve bantlar yalnızca yüzeydeki lekeleri azaltır; dokunun kendi rengini değiştirmez. Kutudan çıkan hazır plaklar dişeti sınırına oturmadığı için jel taşabilir ve dişetinde yanık oluşturabilir. > Karbonat, limon ve kömür gibi ev yöntemleri mineyi aşındırır; bu hasar geri dönüşsüzdür.

## Zarar verir mi?

Hekim kontrolünde, doğru konsantrasyonda ve süreyle yapılan beyazlatma mineye kalıcı zarar vermez. İşlem sonrası birkaç gün süren geçici hassasiyet görülebilir; florür uygulaması ve hassasiyet giderici macunlarla yönetilir.

Şu durumlarda önce başka bir tedavi gerekir: tedavi edilmemiş çürük, dişeti iltihabı, kırık veya çatlak diş, ileri düzey mine aşınması.

## Kalıcılık ve koruma

Beslenme alışkanlıklarına göre ortalama 1-3 yıl. İşlemden sonraki ilk 48 saat en kritik dönemdir; bu sürede çay, kahve, kola ve kırmızı şaraptan uzak durmak sonucu belirgin biçimde uzatır. Yılda bir kez yapılan kısa tazeleme seansıyla beyazlık uzun yıllar korunabilir.

## Önemli bir not

> Kaplama, dolgu ve laminalar beyazlamaz. Ön dişlerinizde dolgu varsa beyazlatma sonrası renk uyumsuzluğu oluşabilir; bu ayrıntı muayenede önceden konuşulmalıdır.

## Randevu

Beyazlatmanın sizin diş yapınıza uygun olup olmadığını muayenede netleştirebiliriz. WhatsApp'tan yazın veya arayın; mevcut renginizi ölçüp gerçekçi bir sonuç beklentisi oluşturalım.
    `.trim(),
    faqs: [
      {
        question: "Diş beyazlatma kaç seans sürer?",
        answer:
          "Ofis tipi beyazlatma çoğu hastada tek seansta tamamlanır ve 45-60 dakika sürer. Başlangıç rengi çok koyu olan vakalarda ikinci bir seans önerilebilir.",
      },
      {
        question: "Beyazlatma dişe zarar verir mi?",
        answer:
          "Hekim kontrolünde doğru konsantrasyon ve süreyle yapıldığında mineye kalıcı zarar vermez. Birkaç gün süren geçici hassasiyet görülebilir ve florür uygulamasıyla yönetilir.",
      },
      {
        question: "Etkisi ne kadar sürer?",
        answer:
          "Beslenme alışkanlıklarına göre ortalama 1-3 yıl. Çay, kahve ve sigara süreyi kısaltır. Yılda bir tazeleme seansı ile beyazlık uzun süre korunabilir.",
      },
      {
        question: "Kaplamalarım da beyazlar mı?",
        answer:
          "Hayır. Kaplama, dolgu ve laminalar beyazlatma jelinden etkilenmez. Ön bölgede dolgunuz varsa beyazlatma sonrası renk uyumu için yenilenmeleri gerekebilir.",
      },
    ],
  },

  {
    slug: "implant-markalari-arasindaki-fark",
    title: "İmplant Markaları Arasındaki Fark Nedir? Nasıl Seçilir?",
    excerpt:
      "Titanyum mu zirkonyum mu, Alman mı Amerikan mı? İmplant sistemi seçiminde gerçekten belirleyici olan kriterler ve markanın neden tek başına yeterli olmadığı.",
    date: "2026-08-20",
    readTime: "8 dk",
    category: "İmplant",
    authorSlug: "dr-musa-burak-sakar",
    serviceSlug: "implant-tedavisi",
    whatsappMessage:
      "Merhaba, implant sistemleri ve bana uygun seçenek hakkında bilgi almak istiyorum.",
    content: `
"Hangi implant markası daha iyi?" sorusunun tek bir doğru cevabı yok. Marka, seçimin yalnızca bir parçası; asıl belirleyici olan sistemin sizin ağız yapınıza uygunluğu ve yıllar sonra parça bulabilme ihtimalidir. Bu yazıda seçimde gerçekten neye bakıldığını anlatıyoruz.

## İmplant neyden yapılır?

Piyasadaki sistemler malzeme olarak iki gruba ayrılır:

- **Titanyum implantlar:** Kullanımda en yaygın grup. Titanyum, kemik dokusuyla doğrudan kaynaşabilen (osseointegrasyon) ender malzemelerden biridir. Grade 4 saf titanyum ve titanyum-alüminyum alaşımları en sık kullanılan formlardır.
- **Zirkonyum implantlar:** Metal içermez. Titanyuma karşı hassasiyet bildiren veya dişeti çekilmesi durumunda gri yansıma istemeyen hastalar için alternatif oluşturur. Beyaz renklidir.

Malzeme farkı estetik ve biyolojik uyum açısından anlam taşır; "biri diğerinden üstündür" şeklinde genel bir sıralama yapılamaz. Karar, hastanın klinik tablosuna göre verilir.

## Seçimde gerçekten belirleyici olan beş kriter

1. Yüzey işlemi: İmplantın kemikle kaynaşma hızını doğrudan etkiler. Kumlanmış ve asitlenmiş yüzeyler, pürüzsüz yüzeylere göre daha geniş temas alanı sağlar.
2. Bağlantı tipi: İmplant ile üst yapı arasındaki birleşim (konik, iç altıgen, morse taper gibi) uzun vadede vida gevşemesi ve dişeti sağlığı açısından fark yaratır.
3. Platform çeşitliliği: Farklı çap ve boy seçeneği olan sistemler, dar kemikli bölgelerde daha esnek planlama imkânı verir.
4. Yedek parça sürekliliği: En kritik ve en çok atlanan başlık. Aşağıda ayrıca ele alıyoruz.
5. Belgelendirme: CE işareti ve ürünün Türkiye'de ÜTS (Ürün Takip Sistemi) kaydının bulunması, izlenebilirlik açısından gereklidir.

## En önemli soru: 10 yıl sonra parça bulunacak mı?

İmplant tedavisi bittiğinde iş bitmez. Yıllar içinde üst yapıdaki vida gevşeyebilir, kaplama yenilenebilir, abutman değişmesi gerekebilir. Bunun için o sistemin protetik parçalarının hâlâ tedarik edilebiliyor olması gerekir.

Piyasadan çekilen veya Türkiye'de temsilciliği kalmayan bir sistemde, on yıl sonra basit bir vida değişimi için implantın tamamen çıkarılması gerekebilir. Bu yüzden muayenede hangi sistemin kullanılacağını ve o sistemin parça tedarikinin nasıl sağlandığını sormanız hakkınızdır.

## Fiyat farkı nereden geliyor?

Sistemler arasındaki fiyat farkı genellikle şu kalemlerden oluşur: üretim standardı ve belgelendirme maliyeti, yüzey işleme teknolojisi, protetik parça çeşitliliği, üreticinin ürün için sağladığı teminat kapsamı ve ithalat maliyetleri.

Buna karşılık toplam tedavi ücretini belirleyen tek şey implantın kendisi değildir. Kaç implant yerleştirileceği, greft veya sinüs yükseltme gerekip gerekmediği, üst yapının türü (zirkonyum, porselen, monolitik) ve seans sayısı toplamı doğrudan etkiler. Bu nedenle yalnızca marka üzerinden yapılan fiyat karşılaştırması yanıltıcı olur.

## "Ucuz implant" neden risklidir?

Düşük maliyetli sistemlerde en sık karşılaşılan sorunlar; belgelendirmesi izlenemeyen ürünler, sınırlı protetik parça seçeneği ve tedarikçinin piyasadan çekilmesi durumunda parça bulunamamasıdır. > Yerleştirme anındaki tasarruf, yıllar sonra tedavinin baştan yapılması anlamına gelebilir.

Bunun tersi de doğru değildir: en pahalı sistem her hasta için en uygun sistem demek değildir. Doğru sistem, sizin kemik yapınıza ve protetik planınıza uyan sistemdir.

## Hastanın sorması gereken sorular

- Hangi sistem kullanılacak, üretici ülkesi ve belgeleri nedir?
- Bu sistemin Türkiye'de tedarikçisi kim, parça temini nasıl sağlanıyor?
- Bana yerleştirilen implantın barkod ve seri numarası dosyama işlenecek mi?
- Üst yapı hangi malzemeden yapılacak?
- Kontrol randevuları hangi aralıklarla planlanıyor?

Bu soruların yazılı olarak cevaplanması, yıllar sonra başka bir hekime gitmeniz gerekse bile tedavinin devamını mümkün kılar.

## Dentakim'de yaklaşım

Kliniğimizde kullanılan sistemin bilgisi, barkodu ve seri numarası hasta dosyasına işlenir; talep ettiğinizde size de verilir. Sistem seçimi tomografi sonrası kemik hacminiz ve protetik planınız değerlendirilerek yapılır, kararı birlikte veririz.

İmplant tedavisi düşünüyorsanız ve hangi sistemin size uygun olduğunu öğrenmek istiyorsanız WhatsApp'tan yazabilir veya doğrudan arayabilirsiniz.
    `.trim(),
    faqs: [
      {
        question: "Hangi implant markası en iyisi?",
        answer:
          "Tüm hastalar için geçerli bir 'en iyi marka' yoktur. Seçim; kemik hacminiz, eksik diş bölgesi, protetik plan ve varsa titanyum hassasiyetiniz değerlendirilerek yapılır. Marka kadar önemli olan, o sistemin protetik parçalarının yıllar sonra da tedarik edilebilmesidir.",
      },
      {
        question: "Titanyum implant mı, zirkonyum implant mı?",
        answer:
          "Titanyum implantlar en yaygın kullanılan gruptur ve uzun vadeli klinik verisi geniştir. Zirkonyum implantlar metal içermez; titanyuma hassasiyet bildiren veya dişeti bölgesinde gri yansıma istemeyen hastalarda alternatif olarak değerlendirilir. Karar klinik muayene sonrasında verilir.",
      },
      {
        question: "Ucuz implant yaptırmakta sakınca var mı?",
        answer:
          "Riskli olan fiyatın kendisi değil, belgelendirmesi izlenemeyen ve protetik parça tedariki güvence altında olmayan sistemlerdir. Yıllar sonra basit bir vida değişimi için parça bulunamazsa tedavinin baştan yapılması gerekebilir. Sistemin CE ve ÜTS kaydını sormanız önerilir.",
      },
      {
        question: "İmplantımın markasını öğrenebilir miyim?",
        answer:
          "Evet, bu hakkınızdır. Yerleştirilen implantın markası, barkodu ve seri numarası hasta dosyanıza işlenir. Talep ettiğinizde size de verilir; ileride başka bir hekime başvurmanız gerekirse bu bilgi tedavinin devamı için gereklidir.",
      },
      {
        question: "İmplant fiyatını sadece marka mı belirler?",
        answer:
          "Hayır. Uygulanacak implant sayısı, greft veya sinüs yükseltme ihtiyacı, üst yapı türü ve seans sayısı toplam ücreti doğrudan etkiler. Bu nedenle yalnızca marka üzerinden yapılan karşılaştırma yanıltıcı olur; net bilgi muayene sonrasında verilir.",
      },
    ],
  },
];
