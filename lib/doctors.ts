import { DOCTOR_PHOTOS } from "@/lib/doctor-photos.generated";

/**
 * Hekim kadrosu — klinik tarafından doğrulanmış sıra.
 *
 * ÜNVAN KULLANIMI HAKKINDA
 * Türkiye'de "uzman" ibaresi, uzmanlık eğitimi tamamlanıp Sağlık Bakanlığı
 * tescilli uzmanlık belgesi alınmış hekimler için kullanılabilir. Belge
 * olmadan kullanılması tanıtım kurallarına aykırıdır.
 *
 * Bu nedenle sitede korunan ünvan yerine ÇALIŞMA ALANI yazılır
 * ("Protez ve Estetik Diş Hekimliği"). Hekimlerin tescilli uzmanlık belgesi
 * varsa aşağıdaki `certifiedTitle` alanı doldurulup CERTIFIED_TITLES sabiti
 * true yapılarak resmi ünvana geçilebilir.
 *
 * SOYADI DÜZELTMESİ: Tasarım dosyasında ve eski içerikte "Kırıkcı" yazıyordu.
 * Hekimin önlüğündeki isim etiketi "Dr. Ahmet Emin KIRIKTAŞ" olduğu için
 * doğru yazım Kırıktaş olarak alındı.
 */

export type Doctor = {
  slug: string;
  name: string;
  /** Ünvan — ör. "Diş Hekimi". */
  title: string;
  /** Uzmanlık alanı; bilinmiyorsa NEEDS_CONTENT. */
  specialization: string;
  /** Başlık etiketinde kullanılan kısa biçim (65 karakter sınırı için). */
  titleShort: string;
  /** schema.org eşlemesi için iç kullanım — klinik düğümünde değerlendirilir. */
  medicalSpecialty: "Prosthodontic" | "OralSurgery" | "Dentistry";
  /**
   * Tescilli uzmanlık ünvanı. Yalnızca belge varsa doldurulur ve
   * CERTIFIED_TITLES true iken gösterilir.
   */
  certifiedTitle?: string;
  /** Bu hekimin bilgi alanları — schema.org knowsAbout, yerel aramada konu sinyali. */
  knowsAbout: string[];
  /** Kısa tanıtım — meta description ve kartlarda kullanılır. */
  summary: string;
  /** Uzun biyografi paragrafları. Boş dizi = içerik bekleniyor. */
  bio: string[];
  /** İlgi alanları / sık uyguladığı tedaviler. */
  focusAreas: string[];
  /** Mezuniyet, uzmanlık eğitimi, sertifikalar. */
  education: string[];
  /**
   * Fotoğraf yolu — public/images/hekimler/ klasöründen OTOMATİK bulunur.
   * Elle doldurulmaz; dosyayı klasöre koymanız yeterlidir.
   */
  photo: string | null;
  /** Bu hekimin öne çıkan hizmet slug'ları — iç bağlantı için. */
  serviceSlugs: string[];
  /**
   * Klinikten beklenen bilgiler — SİTEDE GÖSTERİLMEZ, yalnızca ekip içi not.
   * Bilgi geldiğinde ilgili alan doldurulup bu listeden çıkarılır.
   */
  pending: string[];
};

const DOCTOR_RECORDS: Omit<Doctor, "photo">[] = [
  {
    slug: "dr-musa-burak-sakar",
    name: "Dr. Musa Burak Sakar",
    title: "Diş Hekimi",
    specialization: "Protez ve Estetik Diş Hekimliği",
    titleShort: "Protez ve Estetik Diş Hekimi",
    medicalSpecialty: "Prosthodontic",
    certifiedTitle: undefined, // belge temin edilirse: "Protez Uzmanı"
    knowsAbout: [
      "Zirkonyum kaplama",
      "Porselen ve lamina veneer",
      "İmplant üstü protez",
      "Sabit ve hareketli protez",
      "Gülüş tasarımı",
      "Diş beyazlatma",
      "Gömülü yirmilik diş çekimi",
    ],
    summary:
      "Protez ve estetik diş hekimliği alanında çalışmaktadır. Küçükçekmece'deki kliniğimizde zirkonyum kaplama, implant üstü protez ve gülüş tasarımı uygulamalarını yürütür; gömülü yirmilik diş çekimi de uyguladığı işlemler arasındadır.",
    bio: [
      "Dr. Musa Burak Sakar, Dentakim Ağız ve Diş Sağlığı Polikliniği'nde protez ve estetik diş hekimliği alanında çalışmaktadır. Zirkonyum kaplama, lamina veneer, implant üstü protez ve gülüş tasarımı başlıca çalışma alanlarıdır.",
      "Protez planlamasında öncelik, mevcut sağlam diş dokusunun korunmasıdır. Kapanış ilişkisi, dişeti seviyesi ve dudak desteği birlikte değerlendirilir; hangi dişte tam kaplama, hangisinde lamina veya kompozit düzenleme gerektiği muayenede netleştirilir.",
      "İmplant vakalarında cerrahi fazı Dr. Ahmet Emin Kırıktaş ile birlikte planlar; cerrahi ve protez aşamalarının aynı takvimde ilerlemesi hastanın toplam randevu sayısını azaltır. Tedavi adımlarını, alternatifleri ve riskleri sade bir dille aktarmayı önemser.",
    ],
    focusAreas: [
      "Zirkonyum ve porselen kaplama",
      "Lamina veneer ile estetik düzenleme",
      "İmplant üstü sabit ve hareketli protezler",
      "Dijital gülüş tasarımı",
      "Bruksizm (diş sıkma) için gece plağı",
      "Gömülü yirmilik diş çekimi",
    ],
    education: [],
    serviceSlugs: [
      "protez-zirkonyum",
      "implant-tedavisi",
      "all-on-4-implant",
      "all-on-6-implant",
      "hibrit-protez",
      "gulus-tasarimi",
      "lamina-veneer",
      "gece-plagi-bruksizm",
      "dis-beyazlatma",
      "dis-dolgusu",
      "agiz-dis-cene-cerrahisi",
    ],
    pending: ["Mezuniyet ve eğitim bilgileri", "Deneyim yılı", "Sertifikalar"],
  },
  {
    slug: "dr-berna-kalkan-yardim",
    name: "Dr. Berna Kalkan Yardım",
    title: "Diş Hekimi",
    specialization: "Protez ve Estetik Diş Hekimliği",
    titleShort: "Protez ve Estetik Diş Hekimi",
    medicalSpecialty: "Prosthodontic",
    certifiedTitle: undefined, // belge temin edilirse: "Protez Uzmanı"
    knowsAbout: [
      "Zirkonyum kaplama",
      "Lamina veneer",
      "İmplant üstü protez",
      "Sabit ve hareketli protez",
      "Diş beyazlatma",
      "Çocuk diş hekimliği",
      "Kanal tedavisi",
      "Kompozit dolgu",
    ],
    summary:
      "Protez ve estetik diş hekimliği alanında çalışmaktadır. Zirkonyum kaplama ve lamina veneer uygulamalarının yanı sıra çocuk diş hekimliği, kanal tedavisi ve dolgu işlemlerini de yürütür.",
    bio: [
      "Dr. Berna Kalkan Yardım, Dentakim Ağız ve Diş Sağlığı Polikliniği'nde protez ve estetik diş hekimliği alanında çalışmaktadır. Zirkonyum kaplama, lamina veneer ve implant üstü protez uygulamaları başlıca çalışma alanlarıdır.",
      "Estetik vakalarda hedefi, dişleri olduğundan beyaz veya büyük göstermek yerine oranları hastanın yüz hatlarıyla uyumlu hale getirmektir. Renk ve form seçimi muayenede birlikte kararlaştırılır.",
      "Protez ve estetik uygulamaların yanı sıra çocuk diş hekimliği, kanal tedavisi ve dolgu işlemlerini de yürütür. Çocuk hastalarda kısa seanslar ve olumlu ilk deneyim, ileriki tedavilerin konforunu doğrudan etkiler.",
    ],
    focusAreas: [
      "Zirkonyum ve porselen kaplama",
      "Lamina veneer",
      "İmplant üstü protezler",
      "Diş beyazlatma",
      "Çocuk diş hekimliği ve koruyucu uygulamalar",
      "Kanal tedavisi",
      "Kompozit dolgu",
    ],
    education: [],
    serviceSlugs: [
      "protez-zirkonyum",
      "lamina-veneer",
      "dis-beyazlatma",
      "cocuk-dis-hekimligi",
      "kanal-tedavisi",
      "dis-dolgusu",
    ],
    pending: [
      "Ayrıntılı biyografi metni",
      "Mezuniyet ve eğitim bilgileri",
      "İlgi alanları / uyguladığı tedaviler",
      "Profil fotoğrafı",
      "Deneyim yılı",
    ],
  },
  {
    slug: "dr-ahmet-emin-kiriktas",
    name: "Dr. Ahmet Emin Kırıktaş",
    title: "Diş Hekimi",
    specialization: "Ağız, Diş ve Çene Cerrahisi",
    titleShort: "Ağız ve Çene Cerrahisi",
    medicalSpecialty: "OralSurgery",
    knowsAbout: [
      "Gömülü yirmilik diş çekimi",
      "Cerrahi diş çekimi",
      "İmplant cerrahisi",
      "Kemik grefti ve sinüs yükseltme",
      "Kist ve apse operasyonları",
    ],
    summary:
      "Ağız, diş ve çene cerrahisi alanında çalışmaktadır. Gömülü yirmilik diş çekimi, cerrahi çekimler ve implant cerrahisi başlıca uygulama alanlarıdır.",
    bio: [
      "Dr. Ahmet Emin Kırıktaş, Dentakim'de ağız, diş ve çene cerrahisi kapsamındaki işlemleri yürütmektedir. Gömülü yirmilik diş çekimi, cerrahi diş çekimleri, implant cerrahisi ve kemik greftleme başlıca çalışma alanlarıdır.",
      "Her cerrahi işlem öncesinde radyolojik değerlendirme yapılır; panoramik röntgen ve gerektiğinde görüntüleme merkezinde çekilen üç boyutlu tomografi ile dişin konumu, kök şekli ve alt çene siniri ile sinüs tabanına uzaklığı ölçülür. Riskler ve iyileşme süreci hastaya işlem öncesinde ayrıntılı biçimde anlatılır.",
      "İmplant vakalarında cerrahi fazı üstlenir; protez aşaması Dr. Musa Burak Sakar ile birlikte planlanır. İşlem sonrası hastaların doğrudan ulaşabileceği bir WhatsApp hattı açılır, iyileşme dönemi takip edilir.",
    ],
    focusAreas: [
      "Gömülü yirmilik diş çekimi",
      "Cerrahi diş çekimleri",
      "İmplant cerrahisi ve güdümlü cerrahi",
      "Kemik grefti ve sinüs yükseltme",
      "İşlem sonrası takip ve iyileşme yönetimi",
    ],
    education: [],
    serviceSlugs: [
      "agiz-dis-cene-cerrahisi",
      "implant-tedavisi",
      "all-on-4-implant",
      "all-on-6-implant",
      "kemik-grefti-sinus-lifting",
    ],
    pending: ["Mezuniyet ve eğitim bilgileri", "Deneyim yılı", "Sertifikalar"],
  },
  {
    /*
     * Ortodontist — klinik tarafından 29.10.2026'da bildirildi. Ünvan
     * "Dt." olarak yazıldı; uzmanlık belgesi veya doktora ünvanı teyit
     * edilirse certifiedTitle / ad alanı güncellenir.
     */
    slug: "dt-selin-erginer",
    name: "Dt. Selin Erginer",
    title: "Diş Hekimi",
    specialization: "Ortodonti",
    titleShort: "Ortodonti",
    medicalSpecialty: "Dentistry",
    knowsAbout: [
      "Ortodonti",
      "Şeffaf plak (clear aligner) tedavisi",
      "Metal ve seramik braket tedavisi",
      "Pekiştirme plağı (retainer)",
    ],
    summary:
      "Dentakim Ağız ve Diş Sağlığı Polikliniği'nde ortodonti alanında çalışmaktadır. Şeffaf plak ve braket tedavilerini yürütür.",
    bio: [
      "Dt. Selin Erginer, Dentakim Ağız ve Diş Sağlığı Polikliniği'nde ortodonti alanında çalışmaktadır. Çapraşık dişler, diş aralıkları ve kapanış bozuklukları için şeffaf plak ve braket tedavilerini planlar ve yürütür.",
    ],
    focusAreas: [
      "Şeffaf plak (clear aligner) tedavisi",
      "Metal ve seramik braket tedavisi",
      "Tedavi sonrası pekiştirme (retainer)",
    ],
    education: [],
    serviceSlugs: ["ortodonti", "seffaf-plak-tedavisi"],
    pending: [
      "Profil fotoğrafı",
      "Ünvan teyidi (Dt. / Dr. / Uzm.)",
      "Mezuniyet ve eğitim bilgileri",
      "Ayrıntılı biyografi",
    ],
  },
];

/**
 * Tescilli uzmanlık belgeleri temin edildiğinde true yapılır; o zaman
 * certifiedTitle alanı gösterime girer.
 */
export const CERTIFIED_TITLES = false;

/** Sitede gösterilecek ünvan — belge yoksa çalışma alanı döner. */
export function getDisplayTitle(doctor: Doctor): string {
  return CERTIFIED_TITLES && doctor.certifiedTitle
    ? doctor.certifiedTitle
    : doctor.specialization;
}

/**
 * Hekim listesi. Fotoğraf alanı public/images/hekimler/ klasöründen
 * otomatik doldurulur (bkz. scripts/sync-doctor-photos.mjs).
 */
export const DOCTORS: Doctor[] = DOCTOR_RECORDS.map((d) => {
  const photo = DOCTOR_PHOTOS[d.slug] ?? null;
  return {
    ...d,
    photo,
    // Fotoğraf klasöre konduğunda "Profil fotoğrafı" bekleyen içerik
    // listesinden otomatik düşer.
    pending: photo ? d.pending.filter((x) => x !== "Profil fotoğrafı") : d.pending,
  };
});

export function getDoctor(slug: string): Doctor | undefined {
  return DOCTORS.find((d) => d.slug === slug);
}

/** Kadronun ilk hekimi — anasayfa ve schema'da öne çıkar. */
export function getPrimaryDoctor(): Doctor {
  return DOCTORS[0];
}

/** Belirli bir hizmeti uygulayan hekimler — hizmet sayfasından iç bağlantı için. */
export function getDoctorsForService(serviceSlug: string): Doctor[] {
  return DOCTORS.filter((d) => d.serviceSlugs.includes(serviceSlug));
}

export function isProfileComplete(doctor: Doctor): boolean {
  return doctor.pending.length === 0;
}
