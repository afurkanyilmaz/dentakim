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

Panoramik röntgen ve gerektiğinde bir görüntüleme merkezinde üç boyutlu tomografi istenir. Tomografi implant planlamasının en kritik verisidir: kemiğin genişliği, yüksekliği, yoğunluğu ve alt çene siniri ile sinüs tabanına uzaklık milimetrik olarak ölçülür. Bu ölçüm olmadan verilen implant kararı tahmine dayanır.

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
          "Ağız içi muayene, panoramik röntgen; gerekirse görüntüleme merkezinde çekilen üç boyutlu tomografi. Sistemik hastalık veya düzenli ilaç kullanımı varsa güncel kan tahlili ve hekim raporu istenebilir.",
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

  {
    slug: "dis-protezi-cesitleri",
    title: "Diş Protezi Çeşitleri: Sabit mi, Hareketli mi? Hangisi Size Uygun?",
    excerpt:
      "Zirkonyum köprü, implant üstü protez, tam ve bölümlü damak: protez türlerinin farkları, ömürleri ve hangi durumda hangisinin tercih edildiği.",
    date: "2026-08-20",
    readTime: "8 dk",
    category: "Protez",
    authorSlug: "dr-musa-burak-sakar",
    serviceSlug: "protez-zirkonyum",
    whatsappMessage:
      "Merhaba, diş protezi seçenekleri hakkında bilgi almak ve muayene randevusu oluşturmak istiyorum.",
    content: `
Eksik dişlerin tamamlanmasında tek bir doğru yöntem yok. Seçim; kaç dişin eksik olduğuna, çene kemiğinizin durumuna, komşu dişlerin sağlamlığına ve günlük yaşam alışkanlıklarınıza göre değişir. Bu yazıda protez türlerini yan yana koyuyoruz.

## Protezler ikiye ayrılır

- **Sabit protezler:** Ağızda çıkarılmadan kalır. Kron, köprü ve implant üstü protezler bu gruptadır. Kendi dişiniz gibi kullanılır.
- **Hareketli protezler:** Hasta tarafından takılıp çıkarılır. Tam damak ve bölümlü protezler bu gruptadır. Temizliği kolaydır ama alışma süresi gerektirir.

Kararı belirleyen ilk soru şudur: destek alınacak sağlam diş veya kemik var mı?

## Zirkonyum kron ve köprü

Tek diş eksikliğinde veya birkaç dişin yan yana kaybedildiği durumlarda, komşu dişlerden destek alınarak köprü yapılabilir. Zirkonyum altyapı ışığı doğal diş minesine benzer şekilde geçirdiği için görünüm canlıdır; metal içermediğinden dişetinde gri hat oluşturmaz.

Dezavantajı: köprü için komşu dişlerin aşındırılması gerekir. O dişler sağlamsa, bu durum implanta göre bir kayıptır.

> Komşu dişleriniz sağlamsa ve tek diş eksikse, köprü yerine implant çoğu vakada daha koruyucu bir seçenektir; karar tomografi sonrası verilir.

## İmplant üstü protez

Çene kemiğine yerleştirilen implantlardan destek alan sabit veya çıkarılabilir protezlerdir. Komşu dişlere dokunulmaz, çiğneme kuvveti doğrudan kemiğe aktarılır.

Tam dişsizlikte özellikle alt çenede "overdenture" adı verilen çözüm sık tercih edilir: 2-4 implant üzerine oturan, hasta tarafından çıkarılabilen ama yerinden oynamayan protez. Alt tam damağın kaymasından şikâyet eden hastalarda konfor farkı belirgindir.

## Tam damak protezi

Hiç dişi kalmamış hastalarda uygulanır. Emme etkisiyle tutunur; üst çenede damak yüzeyi geniş olduğu için tutuculuk genellikle iyidir, alt çenede dil hareketleri nedeniyle daha zordur.

Alışma süreci gerçektir: ilk haftalarda konuşma ve çiğnemede zorlanma normaldir. Kemik zamanla eriyeceği için birkaç yılda bir besleme (rebazaj) veya yenileme gerekir.

## Bölümlü protez

Bazı dişleri duran hastalarda, kalan dişlere kancalarla tutunan çıkarılabilir protezdir. Ekonomik ve hızlı bir çözümdür; ancak kancaların görünürlüğü ve destek dişler üzerindeki yük dezavantajlarıdır. Hassas tutuculu (precision attachment) tasarımlarda kanca görünmez.

## Karşılaştırma

- **Konfor:** İmplant üstü sabit protez > zirkonyum köprü > bölümlü protez > tam damak
- **Komşu dişi koruma:** İmplant üstü protez, diğer tüm seçeneklerden üstündür
- **Tedavi süresi:** Köprü ve hareketli protezler haftalar; implantlı çözümler aylar sürer
- **Bakım:** Sabit protezlerde ara yüz fırçası ve düzenli profesyonel temizlik; hareketli protezlerde günlük çıkarıp temizleme
- **Ömür:** Zirkonyum kron/köprü ortalama 10-15 yıl; implant gövdesi düzenli bakımla çok daha uzun; hareketli protezler kemik değişimine bağlı olarak birkaç yılda bir yenilenir

## Bakım her seçenekte belirleyici

Sabit protezlerde en sık karşılaşılan sorun, kron kenarındaki dişeti iltihabıdır. Ara yüz fırçası ve altı aylık profesyonel temizlik, protezin ömrünü doğrudan uzatır. Hareketli protezlerde ise gece çıkarılıp temiz suda bekletilmesi, hem dokunun dinlenmesini hem de protezin deforme olmamasını sağlar.

> Diş sıkma (bruksizm) varsa gece plağı önerilir; aksi hâlde protez üzerindeki aşırı yük kırılmalara yol açabilir.

## Karar nasıl veriliyor?

Muayenede kalan dişlerin sağlamlığı, dişeti durumu, kapanış ilişkisi ve çene kemiği hacmi değerlendirilir; gerekirse panoramik röntgen alınır veya tomografi istenir. Ardından uygun seçenekler ömür, süre ve maliyet açısından yan yana anlatılır. Çoğu hastada birden fazla seçenek uygundur; tercih birlikte yapılır.

Protez tedavilerimizi [Protez ve Zirkonyum sayfamızda](/hizmetler/protez-zirkonyum), implant seçeneklerini ise [İmplant Tedavisi sayfamızda](/hizmetler/implant-tedavisi) ayrıntılı anlatıyoruz.

Size hangi protezin uygun olduğunu öğrenmek için WhatsApp'tan yazabilir ya da doğrudan arayabilirsiniz.
    `.trim(),
    faqs: [
      {
        question: "Sabit protez mi hareketli protez mi daha iyi?",
        answer:
          "Genel bir üstünlük sıralaması yapılamaz. Sabit protezler konfor ve doğallık açısından öndedir ancak yeterli destek dişi veya kemik gerektirir. Hareketli protezler daha geniş vakada uygulanabilir ve maliyeti düşüktür. Karar; kalan diş sayısı, kemik hacmi ve beklentinize göre muayenede verilir.",
      },
      {
        question: "Protez alışma süreci ne kadar sürer?",
        answer:
          "Sabit protezlerde birkaç gün içinde alışma sağlanır. Hareketli protezlerde, özellikle ilk kez kullanılıyorsa konuşma ve çiğnemeye alışma 2-4 hafta sürebilir. Bu dönemde birkaç kontrol randevusu ile bası noktaları düzeltilir.",
      },
      {
        question: "Protez kaç yılda bir yenilenir?",
        answer:
          "Zirkonyum kron ve köprüler doğru bakımla ortalama 10-15 yıl kullanılır. Hareketli protezler ise çene kemiğindeki değişime bağlı olarak birkaç yılda bir besleme veya yenileme gerektirir. Altı aylık kontroller bu süreyi uzatır.",
      },
      {
        question: "Protez yaptırırken komşu dişlerim kesilir mi?",
        answer:
          "Köprü planlanıyorsa destek alınacak komşu dişlerin aşındırılması gerekir. İmplant üstü protezde ise komşu dişlere dokunulmaz. Bu, sağlam komşu dişi olan hastalarda implantın en önemli avantajıdır.",
      },
    ],
  },
  {
    slug: "estetik-dis-hekimligi-nedir",
    title: "Estetik Diş Hekimliği Nedir? Lamina, Zirkonyum ve Gülüş Tasarımı",
    excerpt:
      "Lamina veneer, zirkonyum kaplama, bonding ve gülüş tasarımı arasındaki farklar; hangi durumda hangisi uygulanır, diş kesilmesi şart mı?",
    date: "2026-08-20",
    readTime: "8 dk",
    category: "Estetik Diş Hekimliği",
    authorSlug: "dr-berna-kalkan-yardim",
    serviceSlug: "protez-zirkonyum",
    whatsappMessage:
      "Merhaba, estetik diş tedavileri ve gülüş tasarımı hakkında bilgi almak istiyorum.",
    content: `
Estetik diş hekimliği tek bir işlem değil, dişlerin rengini, formunu ve dizilimini yüz hatlarıyla uyumlu hâle getirmeyi amaçlayan bir planlama yaklaşımıdır. Aynı sonuca birden çok yoldan ulaşılabilir; hangisinin uygun olduğu dişin mevcut durumuna bağlıdır.

## En az müdahaleden en fazlasına

Estetik planlamada temel ilke, hedefe ulaştıran en az müdahaleli yöntemi seçmektir. Sıralama genellikle şöyledir:

1. Diş beyazlatma: Yalnızca renk sorunu varsa hiçbir aşındırma gerekmez.
2. Bonding (kompozit düzenleme): Küçük kırık, aralık veya şekil bozukluğu kompozit ile tek seansta düzeltilir.
3. Lamina veneer: Dişin yalnızca ön yüzüne ince porselen yaprakçık uygulanır; minimal aşındırma gerekir.
4. Zirkonyum kron: Diş büyük ölçüde madde kaybetmiş veya kanal tedavili ise tam kaplama yapılır.

> Sıra atlanmamalıdır. Renk sorunu beyazlatma ile çözülebilecekken doğrudan kaplamaya geçmek, geri dönüşü olmayan diş dokusu kaybı demektir.

## Lamina veneer

Ön dişlerin görünen yüzeyine uygulanan, yaklaşık 0,3-0,7 mm kalınlığında porselen yaprakçıklardır. Renk, form ve küçük diziliş bozukluklarını düzeltir.

Avantajı: diş dokusundan çok az aşındırma gerektirir, ışık geçirgenliği doğala yakındır, leke tutmaz.

Uygun olmadığı durumlar: dişte ileri düzey madde kaybı, kanal tedavisi görmüş kırılgan dişler, şiddetli diş sıkma alışkanlığı. Bu vakalarda tam kaplama daha güvenlidir.

## Zirkonyum kaplama

Metal içermeyen, beyaz ve yarı geçirgen zirkonyum oksit altyapı üzerine porselen uygulanır. Dişin tamamını sarar.

Metal destekli porselene göre farkı: ışığı geçirdiği için görünüm daha canlıdır ve yıllar içinde dişeti çekildiğinde kaplamanın dibinde gri hat oluşmaz. Metal içermediğinden alerji riski de yoktur.

## Bonding — tek seanslık çözüm

Kompozit dolgu maddesinin diş yüzeyine şekillendirilerek uygulanmasıdır. Diş aralıkları, küçük kırıklar ve kenar düzensizlikleri tek seansta düzeltilebilir. Aşındırma gerekmez veya çok azdır.

Sınırı: kompozit porselen kadar leke tutmaz değildir; çay, kahve ve sigara kullanımında birkaç yılda bir parlatma veya yenileme gerekebilir.

## Gülüş tasarımı ne demek?

Yukarıdaki işlemlerden birini ya da birkaçını, tek tek dişler yerine gülüşün bütünü düşünülerek planlamaktır. Diş boyu, orta hat, dişeti seviyesi, dudak hareketi ve yüz simetrisi birlikte değerlendirilir.

Dijital gülüş tasarımında fotoğraf, video ve ağız içi tarama verileri bilgisayarda birleştirilir; sonuç tedaviye başlamadan önce ekranda modellenir. İstenirse bu model geçici bir prova olarak dişlerin üzerine uygulanır ve aynada gerçek boyutta değerlendirilir.

## Diş kesilmesi şart mı?

Hayır. Bazı vakalarda beyazlatma ve şeffaf plak tedavisiyle hiç aşındırma yapılmadan sonuç alınır. Lamina veneer uygulanacaksa minimal düzeyde aşındırma gerekir; tam kaplama ise yalnızca diş zaten madde kaybetmişse gündeme gelir.

Ne kadar müdahale gerektiği planlama aşamasında netleşir ve sizden onay alınmadan hiçbir işlem yapılmaz.

## Doğal görünüm nasıl sağlanır?

Doğal sonucun anahtarı dişleri olabildiğince beyaz ve simetrik yapmak değil, oranları yüze uydurmaktır. Yaş, cinsiyet, dudak yapısı ve mesleki beklenti seçilecek tonu ve formu doğrudan etkiler.

> Aşırı beyaz ve tamamen simetrik dişler ilk bakışta çarpıcı görünse de yapay algılanır; hafif asimetri ve doğal yüzey dokusu tasarımın bilinçli parçasıdır.

## Öncesinde çözülmesi gerekenler

Estetik işlemler öncesinde dişeti sağlığı, çürükler ve kapanış bozuklukları giderilir. Aktif dişeti iltihabı varken yapılan kaplamalar kısa sürede kenar uyumsuzluğu ve renklenme gösterir. Diş sıkma varsa gece plağı planlanır.

Estetik tedavilerimizi [Protez ve Zirkonyum sayfamızda](/hizmetler/protez-zirkonyum) ve [Diş Beyazlatma sayfamızda](/hizmetler/dis-beyazlatma) ayrıntılı bulabilirsiniz. Uygulamaları [hekimlerimiz](/hekimler) yürütmektedir.

Kendi gülüşünüz için hangi yöntemin uygun olduğunu öğrenmek isterseniz WhatsApp'tan yazabilir ya da telefonla ulaşabilirsiniz.
    `.trim(),
    faqs: [
      {
        question: "Lamina mı zirkonyum mu tercih edilmeli?",
        answer:
          "Diş büyük ölçüde sağlamsa ve sorun renk ya da hafif form bozukluğuysa lamina veneer daha koruyucudur; çok az aşındırma gerektirir. Diş madde kaybetmiş, kanal tedavisi görmüş veya kırılgansa zirkonyum tam kaplama daha güvenlidir.",
      },
      {
        question: "Estetik tedavi sonrası dişlerim hassas olur mu?",
        answer:
          "Aşındırma yapılan vakalarda ilk günlerde geçici sıcak-soğuk hassasiyeti görülebilir; genellikle birkaç gün içinde geçer. Geçici kaplama döneminde hassasiyet daha belirgin olabilir, kalıcı kaplama sonrası azalır.",
      },
      {
        question: "Gülüş tasarımı kaç seansta biter?",
        answer:
          "Yalnızca kaplama içeren vakalar genellikle 1-2 hafta içinde tamamlanır. Ortodonti, dişeti düzenlemesi veya implant gerektiren kapsamlı planlar aylar sürebilir. Süre, ilk planlamada takvimle birlikte paylaşılır.",
      },
      {
        question: "Sonucu önceden görebilir miyim?",
        answer:
          "Evet. Dijital tasarımda yeni gülüşünüz ekranda modellenir; istenirse geçici bir prova (mock-up) olarak dişlerinizin üzerine uygulanır ve aynada gerçek boyutta değerlendirirsiniz. Onayınızdan sonra kalıcı işleme geçilir.",
      },
    ],
  },
  /*
   * Popüler tedavi rehberleri (29.10.2026). Hekim adına yazılmadı; yazar
   * kurum olarak işaretlenir. KLİNİSYEN ONAYI BEKLİYOR.
   */
  {
    slug: "hollywood-smile-nedir",
    title: "Hollywood Smile Nedir? Kimlere Uygulanır, Süreç Nasıl İşler?",
    excerpt:
      "Hollywood Smile’ın ne olduğu, lamina ve zirkonyum seçenekleri, kimler için uygun olduğu, kaç günde tamamlandığı ve doğal görünüm için dikkat edilmesi gerekenler.",
    date: "2026-10-29",
    readTime: "7 dk",
    category: "Gülüş Tasarımı",
    serviceSlug: "gulus-tasarimi",
    whatsappMessage: "Merhaba, Hollywood Smile ve gülüş tasarımı hakkında bilgi almak istiyorum.",
    content: `
Hollywood Smile, ön bölgede gülerken görünen dişlerin (genellikle üst ve alt çenede 8–10 diş) lamina veneer veya zirkonyum kaplamalarla aynı plan içinde yenilendiği kapsamlı gülüş tasarımına verilen addır. Tıbbi bir terim değil, gülüş tasarımının en bilinen uygulama biçimini anlatan yaygın bir ifadedir.

## Hollywood Smile ile gülüş tasarımı arasındaki fark

Gülüş tasarımı; dişlerin rengini, boyunu, formunu ve dizilimini yüz hatlarıyla birlikte planlayan genel yaklaşımdır. Bu plan bazen yalnızca beyazlatma ve birkaç dişte bonding ile tamamlanır. Hollywood Smile ise planın ön dişlerin tamamına porselen veya zirkonyum uygulanarak hayata geçirildiği halidir.

> Her gülüş tasarımı Hollywood Smile değildir. Daha az müdahaleyle aynı uyum sağlanabiliyorsa önce o seçenek değerlendirilir.

## Hangi materyaller kullanılır?

- Lamina veneer: Dişin yalnızca ön yüzüne yapıştırılan ince porselen yaprakçıklar. Diş dokusu büyük ölçüde sağlamsa tercih edilir; aşındırma minimaldir.
- Zirkonyum kaplama: Dişi tamamen saran, metal içermeyen kron. Dişte büyük dolgu, kırık veya kanal tedavisi varsa daha uygundur.
- Karma planlar: Aynı gülüşte bazı dişlere lamina, bazılarına zirkonyum uygulanabilir; renk uyumu laboratuvarda birlikte ayarlanır.

## Kimler için uygundur?

Renk değişikliği beyazlatmaya yanıt vermeyen, dişlerinde form bozukluğu, aralık, aşınma veya eski ve renklenmiş kaplamaları olan yetişkinler değerlendirilebilir. Aktif diş eti iltihabı, tedavi edilmemiş çürükler veya ileri kapanış bozuklukları varsa bunlar önce tedavi edilir. Ciddi diş sıkma alışkanlığı olanlarda gece plağı planlanır.

## Süreç adım adım

1. Muayene, fotoğraf ve ölçü: Beklentiniz dinlenir, yüz ve gülüş oranları değerlendirilir.
2. Dijital tasarım: Yeni gülüş bilgisayarda modellenir.
3. Prova (mock-up): Tasarım geçici materyalle dişlerinize uygulanır; aynada gerçek boyutta görürsünüz.
4. Hazırlık ve ölçü: Onayınızdan sonra dişler hazırlanır, geçici kaplamalar takılır.
5. Uygulama: Kalıcı lamina veya zirkonyumlar prova edilip yapıştırılır.

Yalnızca kaplama içeren planlar çoğu vakada 1–3 hafta içinde tamamlanır. Ortodonti veya implant gerekiyorsa süre uzar.

## Doğal görünüm için nelere dikkat edilir?

Aşırı beyaz tonlar ve birbirinin aynısı formlar yapay algılanabilir. Doğal bir sonuç için renk cilt ve göz tonuna, diş boyu dudak hareketine, form yüz tipine göre seçilir. Hafif asimetri ve yüzey dokusu tasarımın bilinçli parçalarıdır.

## Bakım

Lamina ve zirkonyum çürümez; ancak altındaki diş ve diş eti çürüyebilir veya iltihaplanabilir. Günde iki kez fırçalama, diş ipi veya ara yüz fırçası ve 6 ayda bir kontrol önerilir. Sert cisimleri (kalem, çekirdek, buz) ısırmaktan kaçınılmalıdır.

Ayrıntılar için [Gülüş Tasarımı sayfamıza](/hizmetler/gulus-tasarimi) ve [Lamina Veneer sayfamıza](/hizmetler/lamina-veneer) göz atabilirsiniz.
    `.trim(),
    faqs: [
      {
        question: "Hollywood Smile kaç günde yapılır?",
        answer:
          "Yalnızca lamina veya zirkonyum içeren planlar çoğu vakada 1–3 hafta içinde, genellikle 3–4 randevuda tamamlanır. Ön tedavi gerekiyorsa süre uzar.",
      },
      {
        question: "Hollywood Smile için dişler kesilir mi?",
        answer:
          "Lamina veneerde dişin ön yüzünden minimal, zirkonyum kaplamada daha fazla aşındırma yapılır. Bazı uygun vakalarda aşındırmasız lamina değerlendirilebilir.",
      },
      {
        question: "Hollywood Smile herkese uygun mu?",
        answer:
          "Hayır. Diş eti hastalığı, tedavi edilmemiş çürük veya ileri kapanış bozukluğu olanlarda önce bu sorunlar giderilir. Uygunluk muayene sonrası belirlenir.",
      },
    ],
  },
  {
    slug: "gulus-tasarimi-nasil-yapilir",
    title: "Gülüş Tasarımı Nasıl Yapılır? Dijital Planlama ve Prova",
    excerpt:
      "Dijital gülüş tasarımında fotoğraf, ölçü ve prova (mock-up) aşamaları; hangi tedavilerin plana girebileceği ve sonucu önceden görmenin yolu.",
    date: "2026-10-29",
    readTime: "6 dk",
    category: "Gülüş Tasarımı",
    serviceSlug: "gulus-tasarimi",
    whatsappMessage: "Merhaba, gülüş tasarımı için bilgi almak istiyorum.",
    content: `
Gülüş tasarımı, tek tek dişler yerine gülüşün bütününü yüzünüzle birlikte planlamaktır. Amaç dişleri olabildiğince beyaz veya simetrik yapmak değil; renk, form ve oranı yüz hatlarınıza uygun hale getirmektir.

## Planlamada neler değerlendirilir?

- Orta hat: Ön dişlerin ortası ile yüzün orta çizgisinin uyumu.
- Diş boyu ve genişlik oranı: Ön dişlerin birbirine ve yüze oranı.
- Diş eti çizgisi: Gülerken görünen diş eti miktarı ve seviyesi.
- Dudak hareketi: Konuşurken ve gülerken dişlerin ne kadar göründüğü.
- Renk: Cilt ve göz tonu, yaş ve kişisel beklenti.

## Dijital tasarım

Yüz ve gülüş fotoğrafları, gerektiğinde kısa bir video ve ağız içi ölçüler birleştirilerek yeni gülüş bilgisayarda modellenir. Bu aşamada farklı diş formları ve boyları karşılaştırılabilir.

## Prova (mock-up)

Tasarım, dişlerinize herhangi bir aşındırma yapılmadan geçici bir materyalle uygulanabilir. Böylece yeni gülüşünüzü aynada, konuşurken ve gülerken gerçek boyutta değerlendirirsiniz. Değişiklik istenirse tasarım bu aşamada güncellenir.

> Kalıcı işleme, yalnızca prova sonrası onayınızla geçilir.

## Hangi tedaviler plana girebilir?

Gülüş tasarımı bir tedavi paketi değil, bir plandır. Plana; [diş beyazlatma](/hizmetler/dis-beyazlatma), kompozit bonding, [lamina veneer](/hizmetler/lamina-veneer), [zirkonyum kaplama](/hizmetler/protez-zirkonyum), diş eti düzenlemesi, [ortodonti](/hizmetler/ortodonti) veya eksik dişler için [implant](/hizmetler/implant-tedavisi) girebilir. En az müdahaleyle hedefe ulaşan seçenek önceliklidir.

## Ön tedaviler

Çürükler, diş taşı ve diş eti iltihabı estetik işlemlerden önce tedavi edilir. Aktif iltihap varken yapılan kaplamalarda kenar uyumu ve renk bozulabilir. Diş sıkma varsa [gece plağı](/hizmetler/gece-plagi-bruksizm) planlanır.

## Ne kadar sürer?

Yalnızca kaplama içeren planlar çoğu vakada 1–3 hafta sürer. Ortodonti veya implant içeren kapsamlı planlar aylar alabilir; takvim muayene sonrası yazılı olarak paylaşılır.
    `.trim(),
    faqs: [
      {
        question: "Gülüş tasarımı sonucunu önceden görebilir miyim?",
        answer:
          "Evet. Dijital tasarım ekranda gösterilir ve istenirse aşındırma yapılmadan geçici bir prova (mock-up) olarak dişlerinize uygulanır.",
      },
      {
        question: "Gülüş tasarımı için kaplama şart mı?",
        answer:
          "Hayır. Bazı vakalarda beyazlatma ve bonding yeterli olabilir. Kaplama gerekip gerekmediği muayene ve tasarım sonrası belirlenir.",
      },
    ],
  },
  {
    slug: "lamina-mi-zirkonyum-mu",
    title: "Lamina mı Zirkonyum mu? Farkları ve Hangisi Size Uygun",
    excerpt:
      "Lamina veneer ile zirkonyum kaplama arasındaki farklar: aşındırma miktarı, dayanıklılık, estetik, hangi durumda hangisinin tercih edildiği.",
    date: "2026-10-29",
    readTime: "6 dk",
    category: "Estetik Diş Hekimliği",
    serviceSlug: "lamina-veneer",
    whatsappMessage: "Merhaba, lamina ve zirkonyum seçenekleri hakkında bilgi almak istiyorum.",
    content: `
Lamina veneer ve zirkonyum kaplama, gülüş tasarımında en sık kullanılan iki yöntemdir. İkisi de estetik sonuç verebilir; aralarındaki temel fark, dişin ne kadarını kapladıkları ve ne kadar aşındırma gerektirdikleridir.

## Kısa karşılaştırma

- Kapsadığı alan: Lamina yalnızca dişin ön yüzünü, zirkonyum dişin tamamını kaplar.
- Aşındırma: Lamina minimal (çoğunlukla mine sınırında), zirkonyum daha fazla aşındırma gerektirir.
- Uygun diş: Lamina büyük ölçüde sağlam dişler için, zirkonyum madde kaybı olan, kırık veya kanal tedavili dişler için uygundur.
- Kullanım bölgesi: Lamina daha çok ön dişlerde, zirkonyum ön ve arka dişlerde kullanılabilir.
- Köprü: Eksik diş varsa lamina ile köprü yapılamaz; zirkonyum köprü veya implant üstü kron gerekir.

## Ne zaman lamina?

Renk değişikliği beyazlatmaya yanıt vermiyorsa, dişlerde küçük kırık, aralık veya form bozukluğu varsa ve diş dokusu büyük ölçüde sağlamsa lamina daha koruyucu bir seçenektir. Lamina genellikle lityum disilikat (E-max gibi) veya feldspatik cam seramikten üretilir.

## Ne zaman zirkonyum?

Dişte büyük dolgular, kırıklar, kanal tedavisi veya eski kaplamalar varsa; arka dişlerde yüksek çiğneme kuvveti söz konusuysa ya da eksik diş köprüyle tamamlanacaksa zirkonyum tercih edilebilir.

> Aynı gülüş planında bazı dişlere lamina, bazılarına zirkonyum uygulanabilir. Laboratuvarda renk uyumu birlikte ayarlanır.

## Diş sıkma ve dayanıklılık

Ciddi diş sıkma (bruksizm) hem lamina hem zirkonyum için risk oluşturur; laminada kırılma riski daha belirgin olabilir. Bu hastalarda [gece plağı](/hizmetler/gece-plagi-bruksizm) önerilir.

## Karar nasıl verilir?

Seçim; dişlerin mevcut durumu, kapanış, diş eti sağlığı ve estetik beklentiye göre muayenede yapılır. Dijital tasarım ve prova, iki seçeneğin görünümünü karşılaştırmaya yardımcı olur. Ayrıntılar için [Lamina Veneer](/hizmetler/lamina-veneer) ve [Zirkonyum Kaplama](/hizmetler/protez-zirkonyum) sayfalarımıza bakabilirsiniz.
    `.trim(),
    faqs: [
      {
        question: "Lamina mı daha dayanıklı zirkonyum mu?",
        answer:
          "Zirkonyum daha yüksek kırılma direncine sahiptir ve tam kaplama olduğu için arka dişlerde de kullanılabilir. Lamina ise doğru vakada, uygun bakım ve kontrollerle uzun süre kullanılabilir.",
      },
      {
        question: "Lamina ile zirkonyum aynı gülüşte kullanılabilir mi?",
        answer:
          "Evet. Dişlerin durumuna göre bazılarına lamina, bazılarına zirkonyum uygulanabilir; renk uyumu laboratuvarda sağlanır.",
      },
    ],
  },
  {
    slug: "all-on-4-mu-all-on-6-mi",
    title: "All-on-4 mü All-on-6 mı? Dişsiz Çenede Sabit Diş Seçenekleri",
    excerpt:
      "Tamamen dişsiz çenede dört veya altı implant üzerine sabit protez: farkları, kemik gereksinimi, süreç ve hibrit protez seçenekleri.",
    date: "2026-10-29",
    readTime: "7 dk",
    category: "İmplant",
    serviceSlug: "all-on-4-implant",
    whatsappMessage: "Merhaba, All-on-4 ve All-on-6 hakkında bilgi almak istiyorum.",
    content: `
All-on-4 ve All-on-6, tamamen dişsiz veya dişleri kurtarılamayacak durumdaki bir çenede, sırasıyla dört veya altı implant üzerine hasta tarafından çıkarılmayan sabit bir protez yapılmasıdır. İkisi de hareketli takma dişe alternatif olarak değerlendirilir.

## Temel fark

- İmplant sayısı: All-on-4’te 4, All-on-6’da 6 implant kullanılır.
- Yük dağılımı: Altı implant, çiğneme kuvvetini daha fazla noktaya dağıtır.
- Kemik gereksinimi: All-on-4’te arka implantlar açılı yerleştirildiği için, arka bölgede kemik sınırlı olsa bile ek kemik işlemine gerek kalmayabilir. All-on-6 için arka bölgelerde de yeterli kemik gerekir.
- Ek işlem: Kemik yetersizse All-on-6 öncesinde [kemik grefti veya sinüs lifting](/hizmetler/kemik-grefti-sinus-lifting) gerekebilir.

## Hangisi daha iyi?

Biri diğerinden her durumda daha iyi değildir. Üst çene mi alt çene mi olduğu, kemik hacmi, kapanış kuvvetleri, diş sıkma alışkanlığı ve protez tasarımı birlikte değerlendirilir. Karar muayene ve görüntüleme sonrası verilir.

## Süreç

1. Muayene ve röntgen yapılır; gerekirse görüntüleme merkezinde tomografi çektirilerek kemik ölçülür, genel sağlık değerlendirilir.
2. Gerekli çekimler ve implantların yerleştirilmesi genellikle tek cerrahi seansta yapılır.
3. İmplantların başlangıç stabilitesi yeterliyse kısa sürede geçici sabit protez takılabilir. Bu, önceden garanti edilemez.
4. Kemik kaynaşması için birkaç aylık iyileşme sonrası kalıcı protez yapılır.

## Kalıcı protez seçenekleri

Kalıcı üst yapı, akrilik veya kompozit dişli [hibrit protez](/hizmetler/hibrit-protez) ya da zirkonyum esaslı köprü olabilir. Hibrit protez kayıp diş eti dokusunu da tamamlar; zirkonyum farklı bir estetik, dayanıklılık ve onarım profiline sahiptir.

## Bakım

Protezin altı ara yüz fırçası veya ağız duşu ile temizlenmeli, düzenli kontrollerde profesyonel temizlik yapılmalıdır. Sigara ve kontrolsüz diyabet implant sağlığını olumsuz etkileyebilir.

Ayrıntılar: [All-on-4](/hizmetler/all-on-4-implant), [All-on-6](/hizmetler/all-on-6-implant), [Hibrit Protez](/hizmetler/hibrit-protez).
    `.trim(),
    faqs: [
      {
        question: "All-on-4 ile aynı gün diş takılır mı?",
        answer:
          "Bazı vakalarda implantlar yerleştirildikten sonra kısa sürede geçici sabit protez takılabilir. Bu, implantların başlangıç stabilitesine bağlıdır ve önceden garanti edilemez.",
      },
      {
        question: "Kemiğim az, All-on-6 yapılabilir mi?",
        answer:
          "Kemik grefti veya sinüs lifting ile kemik hacmi artırılabilir ya da açılı implantlarla All-on-4 değerlendirilebilir. Karar tomografi sonrası verilir.",
      },
    ],
  },
  {
    slug: "dis-sikma-bruksizm-gece-plagi",
    title: "Diş Sıkma (Bruksizm): Belirtiler, Zararları ve Gece Plağı",
    excerpt:
      "Gece diş sıkma ve gıcırdatmanın belirtileri, dişlere ve kaplamalara etkisi, gece plağının ne işe yaradığı ve nasıl kullanıldığı.",
    date: "2026-10-29",
    readTime: "5 dk",
    category: "Genel Diş Sağlığı",
    serviceSlug: "gece-plagi-bruksizm",
    whatsappMessage: "Merhaba, diş sıkma ve gece plağı hakkında bilgi almak istiyorum.",
    content: `
Bruksizm, dişlerin farkında olmadan sıkılması veya gıcırdatılmasıdır. Gündüz de görülebilir; ancak en sık uykuda ortaya çıkar ve çoğu kişi bunu fark etmez.

## Belirtiler

- Sabahları çene, şakak veya kulak çevresinde ağrı ve yorgunluk
- Dişlerde düzleşme, aşınma ve minede çatlaklar
- Sıcak-soğuk hassasiyeti
- Çene ekleminde ses veya ağzı açarken zorlanma
- Yanak içinde ve dil kenarında diş izleri
- Eşinizin gece gıcırdatma sesi duyması

## Neden olur?

Stres ve kaygı, uyku düzensizlikleri, bazı ilaçlar, kafein ve alkol tüketimi ile kapanış bozuklukları ilişkili faktörler arasında sayılır. Nedenler kişiden kişiye değişir.

## Dişlere ve kaplamalara etkisi

Sıkma sırasında oluşan kuvvet normal çiğnemenin çok üzerine çıkabilir. Uzun dönemde minede aşınma, dolgu ve kaplamalarda kırılma, lamina veneerlerde çatlama görülebilir. [Gülüş tasarımı](/hizmetler/gulus-tasarimi) veya [lamina](/hizmetler/lamina-veneer) yaptıracak hastalarda bu nedenle diş sıkma muayenede mutlaka değerlendirilir.

## Gece plağı ne işe yarar?

Kişiye özel ölçüyle hazırlanan gece plağı (oklüzal splint) diş sıkmayı tamamen ortadan kaldırmaz; ancak kuvveti dağıtarak dişleri ve restorasyonları korur, çene kaslarındaki yükü azaltmaya yardımcı olur. Hazır plaklar kapanışa uymayabileceği için hekim tarafından ayarlanan plak daha uygundur.

## Kullanım ve temizlik

Plak her gece takılır, sabah ılık su ve yumuşak fırçayla temizlenir, sıcak suya konmaz ve havalandırmalı kabında saklanır. Kontrol randevularında aşınma ve uyum kontrol edilir.

Ayrıntılar için [Diş Sıkma ve Gece Plağı sayfamıza](/hizmetler/gece-plagi-bruksizm) bakabilirsiniz.
    `.trim(),
    faqs: [
      {
        question: "Diş sıktığımı nasıl anlarım?",
        answer:
          "Sabah çene ağrısı, dişlerde düzleşme, hassasiyet veya yakınlarınızın duyduğu gıcırdatma sesi işaret olabilir. Muayenede dişlerdeki aşınma bulguları değerlendirilir.",
      },
      {
        question: "Gece plağı kaç yıl kullanılır?",
        answer:
          "Süre, sıkma şiddetine ve bakıma göre değişir. Aşınma ve uyum kontrol randevularında değerlendirilir; gerekirse yenilenir.",
      },
    ],
  },
  {
    slug: "sinus-lifting-nedir",
    title: "Sinüs Lifting Nedir? İmplant İçin Kemik Yetersizse",
    excerpt:
      "Üst çene arka bölgede implant için kemik yetersizse uygulanan sinüs lifting (sinüs yükseltme): açık ve kapalı yöntem, iyileşme ve dikkat edilmesi gerekenler.",
    date: "2026-10-29",
    readTime: "5 dk",
    category: "İmplant",
    serviceSlug: "kemik-grefti-sinus-lifting",
    whatsappMessage: "Merhaba, sinüs lifting ve kemik grefti hakkında bilgi almak istiyorum.",
    content: `
Üst çenenin arka bölgesinde dişler kaybedildikten sonra kemik zamanla erir ve üzerindeki sinüs boşluğu aşağı doğru genişleyebilir. Bu durumda implant için yeterli kemik yüksekliği kalmayabilir. Sinüs lifting, sinüs zarının nazikçe yükseltilip altına greft materyali yerleştirilerek kemik yüksekliğinin artırılmasıdır.

## Ne zaman gerekir?

İhtiyaç, üç boyutlu tomografi ile ölçülen kemik yüksekliğine göre belirlenir. Kemik yeterliyse sinüs lifting gerekmez. Kısa implantlar veya açılı implantlarla yapılan All-on-4 gibi alternatifler de bazı vakalarda değerlendirilebilir.

## Kapalı ve açık yöntem

- Kapalı (krestal) yöntem: Sinüs zarı implant yuvasından az miktarda yükseltilir. Daha az kemik ihtiyacında uygulanır ve çoğu zaman implant aynı seansta yerleştirilir.
- Açık (lateral) yöntem: Yandan küçük bir pencere açılarak daha fazla kemik kazanılır. İmplant aynı seansta veya iyileşme sonrası yerleştirilebilir.

## İyileşme

Greftin kemikle kaynaşması için genellikle birkaç aylık süre gerekir. İlk günlerde şişlik, hassasiyet ve burunda hafif kanama görülebilir. Bir süre burun sümkürmekten, pipetle içmekten, uçak yolculuğundan ve ağır egzersizden kaçınılması önerilir. Sigara iyileşmeyi olumsuz etkiler.

## Riskler

Sinüs zarında yırtılma, enfeksiyon veya greftin yeterli kaynaşmaması gibi riskler vardır. Riskler işlem öncesinde ayrıntılı olarak anlatılır ve tomografi ile planlama bu riskleri azaltmayı amaçlar.

Ayrıntılar için [Kemik Grefti ve Sinüs Lifting](/hizmetler/kemik-grefti-sinus-lifting) ve [İmplant Tedavisi](/hizmetler/implant-tedavisi) sayfalarımıza bakabilirsiniz.
    `.trim(),
    faqs: [
      {
        question: "Sinüs lifting sonrası implant ne zaman yapılır?",
        answer:
          "Kapalı yöntemde çoğu zaman aynı seansta, açık yöntemde vakaya göre aynı seansta veya birkaç aylık iyileşme sonrasında yapılır.",
      },
      {
        question: "Sinüs lifting ağrılı mı?",
        answer:
          "İşlem lokal anestezi altında yapılır. Sonrasında birkaç gün şişlik ve hassasiyet olabilir; önerilen ilaçlarla kontrol altına alınır.",
      },
    ],
  },
  /*
   * Yüksek arama hacimli genel sorular (29.10.2026). Yazar kurum olarak
   * işaretlenir. KLİNİSYEN ONAYI BEKLİYOR.
   */
  {
    slug: "implant-mi-kopru-mu",
    title: "İmplant mı Köprü mü? Eksik Diş İçin Hangisi Daha Uygun",
    excerpt:
      "Tek veya birkaç eksik dişte implant ile köprünün farkları: komşu dişlere etkisi, süre, bakım ve hangi durumda hangisinin önerildiği.",
    date: "2026-10-29",
    readTime: "6 dk",
    category: "İmplant",
    serviceSlug: "implant-tedavisi",
    content: `
Eksik bir dişi tamamlamanın en yaygın iki sabit yolu implant ve köprüdür. İkisi de çiğneme ve estetiği geri kazandırabilir; aralarındaki temel fark, komşu dişlere ne kadar dokunulduğu ve kemiğin nasıl etkilendiğidir.

## Köprü nasıl yapılır?

Köprüde eksik dişin iki yanındaki dişler küçültülür ve üç parçalı (veya daha uzun) bir kaplama bu dişlere yapıştırılır. Ortadaki parça eksik dişin yerini alır.

## İmplant nasıl yapılır?

İmplantta eksik dişin yerine çene kemiğine titanyum bir vida yerleştirilir. Kemikle kaynaştıktan sonra üzerine kron yapılır. Komşu dişlere dokunulmaz.

## Karşılaştırma

- Komşu dişler: Köprüde sağlam komşu dişler aşındırılır; implantta dokunulmaz.
- Kemik: Diş kaybından sonra kemik zamanla erir. İmplant bu bölgeye yük aktararak kemiğin korunmasına yardımcı olabilir; köprüde eksik dişin altındaki kemik yüklenmez.
- Süre: Köprü genellikle 1–2 haftada tamamlanır. İmplantta kemik kaynaşması için birkaç ay beklenir.
- Cerrahi: Köprü cerrahi gerektirmez; implant küçük bir cerrahi işlemdir.
- Temizlik: Köprünün altı özel diş ipi veya ara yüz fırçasıyla temizlenmelidir; implant kendi dişiniz gibi fırçalanır.

## Hangi durumda hangisi?

Komşu dişler zaten büyük dolgulu veya kaplamalıysa köprü mantıklı olabilir. Komşu dişler sağlamsa ve kemik uygunsa implant daha koruyucudur. Kemik yetersizse [kemik grefti](/hizmetler/kemik-grefti-sinus-lifting) gerekebilir. Kontrolsüz diyabet ve yoğun sigara kullanımı implant planını etkileyebilir.

Ayrıntılar için [İmplant Tedavisi](/hizmetler/implant-tedavisi) ve [Zirkonyum Kaplama](/hizmetler/protez-zirkonyum) sayfalarımıza bakabilirsiniz.
    `.trim(),
    faqs: [
      {
        question: "İmplant mı köprü mü daha uzun ömürlü?",
        answer:
          "Süre; ağız hijyeni, kemik ve diş eti sağlığı, diş sıkma alışkanlığı ve kontrollere göre değişir. Doğru vakada ve iyi bakımla her ikisi de uzun yıllar kullanılabilir.",
      },
      {
        question: "Köprü için sağlam dişler kesilir mi?",
        answer:
          "Evet, köprünün dayanak olacağı iki komşu diş kaplama için küçültülür. Komşu dişler sağlamsa bu nedenle implant daha koruyucu bir seçenek olabilir.",
      },
    ],
  },
  {
    slug: "zirkonyum-mu-porselen-mi",
    title: "Zirkonyum mu Metal Destekli Porselen mi? Farkları Nelerdir",
    excerpt:
      "Zirkonyum ve metal destekli porselen kaplamaların estetik, dayanıklılık ve diş eti uyumu açısından farkları; hangisinin hangi dişte tercih edildiği.",
    date: "2026-10-29",
    readTime: "5 dk",
    category: "Protez",
    serviceSlug: "protez-zirkonyum",
    content: `
Kaplama (kron) yaptıracak hastaların en sık sorduğu sorulardan biri, zirkonyum ile metal destekli porselen arasındaki farktır. İkisinde de dişin üzeri tamamen kaplanır; fark alt yapının malzemesindedir.

## Metal destekli porselen

Alt yapı metal alaşımdır, üzerine porselen pişirilir. Uzun yıllardır kullanılan, dayanıklı bir yöntemdir. Ancak metal ışığı geçirmediği için görünüm daha opak olabilir ve diş eti zamanla çekildiğinde kaplamanın kenarında koyu bir çizgi görülebilir.

## Zirkonyum

Alt yapı beyaz renkli zirkonyum oksit seramiktir; metal içermez. Işığı kısmen geçirdiği için doğal dişe daha yakın görünür ve diş eti kenarında koyu çizgi oluşturmaz. Metal alerjisi olanlar için de bir seçenektir. Monolitik (tek parça) zirkonyum arka dişlerde yüksek dayanım sağlar.

## Karşılaştırma

- Estetik: Zirkonyum ışık geçirgenliği nedeniyle genellikle daha doğal görünür.
- Diş eti uyumu: Zirkonyumda kenarda metal görünümü oluşmaz.
- Dayanıklılık: Her ikisi de dayanıklıdır; arka dişlerde monolitik zirkonyum sık tercih edilir.
- Alerji: Zirkonyum metal içermez.

## Hangisi seçilmeli?

Ön dişlerde estetik öncelikliyse zirkonyum veya [lamina veneer](/hizmetler/lamina-veneer) değerlendirilir. Seçim; dişin durumu, kapanış, diş sıkma alışkanlığı ve beklentiye göre muayenede yapılır. Ayrıntılar için [Zirkonyum Kaplama](/hizmetler/protez-zirkonyum) sayfamıza bakabilirsiniz.
    `.trim(),
    faqs: [
      {
        question: "Zirkonyum kaplama kararır mı?",
        answer:
          "Zirkonyum porselen yüzey leke tutmaya dirençlidir ve metal içermediği için kenarda koyu çizgi oluşturmaz. Diş eti sağlığı ve ağız hijyeni görünümün korunmasında önemlidir.",
      },
      {
        question: "Eski metal destekli kaplamalar zirkonyumla değiştirilebilir mi?",
        answer:
          "Evet. Eski kaplamalar çıkarılıp altındaki dişler kontrol edildikten sonra zirkonyum kaplama yapılabilir. Gerekirse önce çürük veya kanal tedavisi yapılır.",
      },
    ],
  },
  {
    slug: "dis-hassasiyeti-neden-olur",
    title: "Diş Hassasiyeti Neden Olur? Soğuk ve Sıcakta Diş Sızlaması",
    excerpt:
      "Soğuk, sıcak veya tatlıyla dişlerin sızlamasının nedenleri, evde dikkat edilmesi gerekenler ve diş hekimine ne zaman gidilmeli.",
    date: "2026-10-29",
    readTime: "5 dk",
    category: "Genel Diş Sağlığı",
    serviceSlug: "dis-dolgusu",
    content: `
Diş hassasiyeti; soğuk, sıcak, tatlı veya ekşi bir şeyle temas edildiğinde dişte kısa süreli, keskin bir sızlama hissidir. Genellikle dişin iç tabakası olan dentinin açığa çıkmasıyla ilişkilidir.

## Sık nedenler

- Diş eti çekilmesi: Kök yüzeyi açığa çıkar ve kök yüzeyi minedeki gibi korunmaz.
- Mine aşınması: Sert fırçalama, asitli içecekler ve diş sıkma mineyi aşındırabilir.
- Çürük ve kırık dolgular: Hassasiyet tek bir dişte belirginse çürük veya çatlak düşünülmelidir.
- Beyazlatma sonrası: Geçici hassasiyet görülebilir; genellikle kısa sürede geçer.
- Diş taşı temizliği sonrası: Taşın altında kalan yüzeyler açığa çıkınca birkaç gün hassasiyet olabilir.

## Evde neler yapılabilir?

- Yumuşak kıllı fırça kullanın ve dişleri bastırmadan, dairesel hareketlerle fırçalayın.
- Hassasiyet karşıtı diş macunlarını düzenli kullanın.
- Asitli içecekleri pipetle için ve hemen ardından fırçalamak yerine su ile çalkalayın.
- Diş sıkıyorsanız [gece plağı](/hizmetler/gece-plagi-bruksizm) için hekiminize danışın.

## Ne zaman diş hekimine gidilmeli?

Hassasiyet tek bir dişte, uzun süreli veya giderek artıyorsa; uyaran kalktıktan sonra ağrı devam ediyorsa ya da kendiliğinden ağrı başladıysa çürük veya sinir iltihabı olabilir. Bu durumda muayene gerekir. Tedavi nedene göre [dolgu](/hizmetler/dis-dolgusu), flor uygulaması, diş eti tedavisi veya [kanal tedavisi](/hizmetler/kanal-tedavisi) olabilir.
    `.trim(),
    faqs: [
      {
        question: "Diş hassasiyeti kendiliğinden geçer mi?",
        answer:
          "Beyazlatma veya diş taşı temizliği sonrası geçici hassasiyet genellikle kendiliğinden geçer. Uzun süren veya artan hassasiyet çürük, çatlak ya da diş eti çekilmesine bağlı olabileceği için muayene önerilir.",
      },
      {
        question: "Hassasiyet macunu işe yarar mı?",
        answer:
          "Düzenli kullanıldığında dentin kanallarını kapatarak birçok kişide hassasiyeti azaltabilir. Etki genellikle birkaç haftalık kullanımdan sonra belirginleşir.",
      },
    ],
  },
  {
    slug: "yirmilik-dis-cekimi-sonrasi",
    title: "Yirmilik Diş Çekimi Sonrası: Şişlik, Beslenme ve Dikkat Edilecekler",
    excerpt:
      "Gömülü yirmilik diş çekiminden sonra ilk 24 saat, şişlik ve ağrı yönetimi, ne yenir, ne zaman fırçalanır ve hangi belirtilerde hekime başvurulur.",
    date: "2026-10-29",
    readTime: "6 dk",
    category: "Ağız Cerrahisi",
    serviceSlug: "agiz-dis-cene-cerrahisi",
    content: `
Yirmilik (üçüncü büyük azı) diş çekimi, özellikle gömülü dişlerde küçük bir cerrahi işlemdir. İyileşmenin rahat geçmesi büyük ölçüde ilk günlerde yapılanlara bağlıdır.

## İlk 24 saat

- Isırmanız için verilen gazlı bezi 30–45 dakika sıkıca tutun.
- Tükürmeyin, ağzınızı çalkalamayın ve pipetle içmeyin; pıhtının yerinden oynaması iyileşmeyi geciktirebilir.
- İlk gün aralıklı olarak yanağın dışından soğuk uygulama yapın.
- Sigara içmeyin; sigara kuru soket riskini artırır.
- Anestezi geçene kadar sıcak yiyecek ve içeceklerden kaçının.

## Şişlik ve ağrı

Şişlik genellikle ikinci-üçüncü günde en belirgin hale gelir, sonra azalır. Hekiminizin önerdiği ağrı kesici ve varsa diğer ilaçları düzenli kullanın. Başınızı biraz yüksekte tutarak uyumak şişliği azaltmaya yardımcı olabilir.

## Beslenme

İlk günlerde ılık veya soğuk, yumuşak yiyecekler tercih edin: yoğurt, çorba (ılık), püre, muhallebi gibi. Çekim tarafıyla çiğnemeyin. Sert, çıtır ve baharatlı yiyeceklerden birkaç gün uzak durun.

## Ağız bakımı

Çekimden sonraki gün dişlerinizi fırçalayabilirsiniz; çekim bölgesine dokunmadan, nazikçe. Hekiminiz önerdiyse ertesi günden itibaren tuzlu ılık su veya gargarayla çok hafif çalkalama yapılabilir.

## Ne zaman hekime başvurmalı?

Kanama durmuyorsa, ağrı 3–4. günden sonra azalmak yerine artıyorsa, ateş, kötü koku veya tat, belirgin yutkunma veya ağız açma güçlüğü varsa hekiminize başvurun. Ayrıntılar için [Ağız, Diş ve Çene Cerrahisi](/hizmetler/agiz-dis-cene-cerrahisi) sayfamıza bakabilirsiniz.
    `.trim(),
    faqs: [
      {
        question: "Yirmilik diş çekimi sonrası şişlik kaç gün sürer?",
        answer:
          "Şişlik genellikle 2–3. günde en belirgin olur ve çoğu kişide bir hafta içinde belirgin şekilde azalır. Artan şişlik, ateş veya kötü koku varsa hekime başvurulmalıdır.",
      },
      {
        question: "Kuru soket nedir?",
        answer:
          "Çekim yerindeki kan pıhtısının erken kaybolmasıyla oluşan ağrılı bir durumdur. Genellikle 2–4. günde artan ağrı ile kendini gösterir. Sigara, pipet kullanımı ve sık çalkalama riski artırır.",
      },
    ],
  },
  {
    slug: "dis-eti-kanamasi-neden-olur",
    title: "Diş Eti Kanaması Neden Olur? Fırçalarken Kanayan Diş Etleri",
    excerpt:
      "Fırçalarken veya diş ipi kullanırken diş etlerinin kanamasının en sık nedenleri, diş taşının rolü, evde bakım ve tedavi seçenekleri.",
    date: "2026-10-29",
    readTime: "5 dk",
    category: "Genel Diş Sağlığı",
    content: `
Diş eti kanaması çoğunlukla diş etinde iltihap (gingivitis) olduğunu gösterir. Sık görülür ve erken dönemde genellikle geri döndürülebilir; ancak ihmal edildiğinde diş eti çekilmesine ve kemik kaybına (periodontitis) ilerleyebilir.

## En sık nedenler

- Bakteri plağı ve diş taşı: Diş eti kenarında biriken plak iltihaba yol açar; sertleşip diş taşına dönüşünce fırçayla temizlenemez.
- Yetersiz veya yanlış fırçalama: Ara yüzlerin temizlenmemesi en sık nedendir.
- Hormonal değişiklikler: Gebelik ve ergenlikte diş etleri daha hassas olabilir.
- Sigara: Kanamayı gizleyebilir ve diş eti hastalığını ilerletebilir.
- Bazı ilaçlar ve sistemik hastalıklar: Kan sulandırıcılar ve diyabet gibi durumlar etkileyebilir.

## Evde ne yapılmalı?

Kanıyor diye fırçalamayı bırakmayın; aksine nazik ama düzenli fırçalamaya devam edin. Günde iki kez yumuşak fırçayla fırçalayın, günde bir kez diş ipi veya ara yüz fırçası kullanın. İlk günlerde kanama artabilir, iltihap azaldıkça kanama da azalır.

## Tedavi

Diş taşı varsa profesyonel temizlik (diş taşı temizliği) gerekir. Daha ileri durumlarda diş eti cebi temizliği gibi diş eti tedavileri planlanır. Diş eti sağlığı; [gülüş tasarımı](/hizmetler/gulus-tasarimi), [zirkonyum](/hizmetler/protez-zirkonyum) ve [implant](/hizmetler/implant-tedavisi) gibi tedavilerden önce mutlaka sağlanmalıdır.

## Ne zaman acil?

Kendiliğinden ve durmayan kanama, diş etinde belirgin şişlik ve ağrı, apse veya sallanan dişler varsa vakit kaybetmeden muayene olun.
    `.trim(),
    faqs: [
      {
        question: "Diş eti kanaması kendiliğinden geçer mi?",
        answer:
          "Hafif diş eti iltihabı düzenli fırçalama ve diş ipi ile birkaç haftada gerileyebilir. Diş taşı varsa profesyonel temizlik gerekir; sürekli kanama muayene gerektirir.",
      },
      {
        question: "Diş taşı temizliği diş etine zarar verir mi?",
        answer:
          "Hayır. Temizlik sonrası birkaç gün hassasiyet olabilir; ancak diş taşının uzaklaştırılması diş eti iltihabının azalmasına yardımcı olur.",
      },
    ],
  },
  {
    slug: "agiz-kokusu-neden-olur",
    title: "Ağız Kokusu Neden Olur? Kalıcı Ağız Kokusuna Ne İyi Gelir",
    excerpt:
      "Ağız kokusunun ağız içi ve ağız dışı nedenleri, dil temizliği, diş eti hastalığının rolü ve kalıcı ağız kokusunda yapılması gerekenler.",
    date: "2026-10-29",
    readTime: "5 dk",
    category: "Genel Diş Sağlığı",
    content: `
Ağız kokusunun (halitozis) büyük çoğunluğu ağız içi kaynaklıdır. Bakterilerin ürettiği kükürtlü bileşikler kokunun ana nedenidir; bu yüzden çözüm çoğunlukla ağız içinden başlar.

## Ağız içi nedenler

- Dil sırtında biriken bakteri tabakası
- Diş eti iltihabı ve diş eti cepleri
- Çürük dişler, kırık dolgular ve temizlenemeyen eski kaplamalar
- Köprü veya protez altında biriken yiyecek artıkları
- Ağız kuruluğu: Tükürük azaldığında koku artar (uyku sonrası, az su içme, bazı ilaçlar)

## Ağız dışı nedenler

Sinüzit, bademcik taşları, reflü ve bazı sistemik hastalıklar da ağız kokusuna yol açabilir. Diş hekimi muayenesinde ağız içi neden bulunmazsa ilgili hekime yönlendirme yapılır.

## Ne iyi gelir?

- Günde iki kez fırçalama ve günde bir kez diş ipi veya ara yüz fırçası
- Dil temizleyici veya fırçayla dil sırtının nazikçe temizlenmesi
- Bol su içmek, şekersiz sakız
- Sigara ve alkolü azaltmak
- 6 ayda bir diş hekimi kontrolü ve gerekirse diş taşı temizliği

Gargaralar kokuyu geçici olarak maskeleyebilir; altta yatan neden tedavi edilmedikçe koku geri döner.

## Muayenede neler yapılır?

Diş eti sağlığı, çürükler, eski dolgu ve kaplamaların uyumu kontrol edilir. Gerekirse diş taşı temizliği, [dolgu](/hizmetler/dis-dolgusu) yenilemesi veya [kanal tedavisi](/hizmetler/kanal-tedavisi) planlanır.
    `.trim(),
    faqs: [
      {
        question: "Sabahları ağız kokusu normal mi?",
        answer:
          "Uyku sırasında tükürük azaldığı için sabah ağız kokusu sık görülür ve fırçalama ile geçer. Gün boyu süren koku başka bir nedene işaret edebilir.",
      },
      {
        question: "Ağız kokusu için gargara yeterli mi?",
        answer:
          "Gargara kokuyu geçici olarak azaltabilir ancak dil sırtındaki bakteri tabakası, diş eti iltihabı veya çürük gibi nedenler tedavi edilmeden kalıcı çözüm sağlamaz.",
      },
    ],
  },
  {
    slug: "bonding-nedir",
    title: "Bonding Nedir? Kompozit ile Diş Aralığı ve Kırık Düzeltme",
    excerpt:
      "Bonding (kompozit estetik) ile diş aralıkları, küçük kırıklar ve şekil bozukluklarının tek seansta düzeltilmesi; avantajları, sınırları ve bakım.",
    date: "2026-10-29",
    readTime: "4 dk",
    category: "Estetik Diş Hekimliği",
    serviceSlug: "gulus-tasarimi",
    content: `
Bonding, diş renginde kompozit dolgu maddesinin diş yüzeyine katman katman şekillendirilerek uygulanmasıdır. Küçük estetik sorunları çoğu zaman tek seansta ve diş aşındırmadan veya çok az aşındırarak düzeltmeyi amaçlar.

## Hangi durumlarda kullanılır?

- Ön dişlerdeki küçük aralıklar (diastema)
- Küçük kırık ve çentikler
- Hafif şekil ve boy farklılıkları
- Lokal renk değişiklikleri

## Avantajları

- Çoğu zaman tek seansta tamamlanır.
- Diş dokusundan aşındırma gerekmez veya çok azdır.
- Gerektiğinde onarılabilir veya yenilenebilir.

## Sınırları

Kompozit, porselen kadar leke tutmaya dirençli değildir; çay, kahve ve sigara kullanımında birkaç yılda bir parlatma veya yenileme gerekebilir. Büyük form değişiklikleri ve tüm gülüşü kapsayan düzenlemelerde [lamina veneer](/hizmetler/lamina-veneer) veya [zirkonyum](/hizmetler/protez-zirkonyum) daha uygun olabilir.

## Bakım

Normal fırçalama ve diş ipi yeterlidir. Tırnak yeme, kalem ısırma gibi alışkanlıklardan kaçınılmalıdır. Kontrol randevularında yüzey parlatılabilir.

Bonding, çoğu zaman [gülüş tasarımı](/hizmetler/gulus-tasarimi) planının en az müdahaleli seçeneklerinden biridir; sizin için uygun olup olmadığı muayenede belirlenir.
    `.trim(),
    faqs: [
      {
        question: "Bonding kaç yıl dayanır?",
        answer:
          "Süre; bölgeye, alışkanlıklara ve bakıma göre değişir. Renklenme veya küçük kırıklarda parlatma ya da onarımla yenilenebilir.",
      },
      {
        question: "Bonding mi lamina mı?",
        answer:
          "Küçük aralık ve kırıklarda bonding hızlı ve koruyucu bir seçenektir. Renk ve formun kapsamlı değiştirilmesi gerekiyorsa lamina veneer daha dayanıklı ve leke tutmaya dirençli bir alternatiftir.",
      },
    ],
  },
  {
    slug: "dis-tasi-temizligi-zararli-mi",
    title: "Diş Taşı Temizliği Zararlı mı? Ne Sıklıkla Yaptırılmalı",
    excerpt:
      "Diş taşı temizliğinin mineye zarar verip vermediği, temizlik sonrası hassasiyet ve kanama, ne sıklıkla yaptırılması gerektiği.",
    date: "2026-10-29",
    readTime: "4 dk",
    category: "Genel Diş Sağlığı",
    content: `
Diş taşı, diş yüzeyinde biriken bakteri plağının tükürükteki minerallerle sertleşmesiyle oluşur. Sertleştikten sonra fırçayla temizlenemez ve diş eti iltihabının en önemli nedenlerinden biridir.

## Temizlik mineye zarar verir mi?

Hayır. Diş taşı temizliği ultrasonik aletler ve el aletleriyle taşın dişten ayrılmasıdır; sağlam mineyi aşındırmaz. Temizlik sonrası yapılan parlatma yüzeyi pürüzsüzleştirerek plak birikimini azaltmaya yardımcı olur.

## Neden sonrasında aralık varmış gibi gelir?

Taş, dişler arasındaki boşlukları doldurmuş olabilir. Taş alındığında aslında var olan aralıklar hissedilir. Diş eti iltihabı azaldıkça diş etleri sıkılaşır.

## Hassasiyet ve kanama

Temizlik sonrası birkaç gün sıcak-soğuk hassasiyeti ve hafif kanama görülebilir. Genellikle kısa sürede geçer. Hassasiyet macunu bu dönemde rahatlatabilir.

## Ne sıklıkla yaptırılmalı?

Çoğu kişi için 6 ayda bir kontrol ve gerektiğinde temizlik yeterlidir. Diş taşı birikimi hızlı olanlarda, sigara kullananlarda veya diş eti hastalığı geçirenlerde daha sık kontrol önerilebilir.

Diş taşı temizliği; [gülüş tasarımı](/hizmetler/gulus-tasarimi), [beyazlatma](/hizmetler/dis-beyazlatma) ve [implant](/hizmetler/implant-tedavisi) gibi tedavilerden önce de genellikle ilk adımdır.
    `.trim(),
    faqs: [
      {
        question: "Diş taşı temizliği ağrılı mı?",
        answer:
          "Çoğu kişi için ağrısızdır; hassas diş etlerinde hafif rahatsızlık hissedilebilir. Gerekirse lokal anestezi uygulanabilir.",
      },
      {
        question: "Diş taşı temizliği dişleri beyazlatır mı?",
        answer:
          "Taş ve yüzeysel lekeleri temizlediği için dişler daha açık görünebilir; ancak dişin kendi rengini değiştirmez. Renk açmak için beyazlatma gerekir.",
      },
    ],
  },
];
