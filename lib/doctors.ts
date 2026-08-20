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
    ],
    summary:
      "Protez ve estetik diş hekimliği alanında çalışmaktadır. Küçükçekmece'deki kliniğimizde zirkonyum kaplama, implant üstü protez ve gülüş tasarımı uygulamalarını yürütür.",
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
    ],
    education: [],
    serviceSlugs: ["protez-zirkonyum", "implant-tedavisi", "dis-beyazlatma", "dis-dolgusu"],
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
    ],
    summary:
      "Protez ve estetik diş hekimliği alanında çalışmaktadır. Küçükçekmece'deki kliniğimizde zirkonyum kaplama, lamina veneer ve implant üstü protez uygulamalarını yürütür.",
    bio: [
      "Dr. Berna Kalkan Yardım, Dentakim Ağız ve Diş Sağlığı Polikliniği'nde protez ve estetik diş hekimliği alanında çalışmaktadır. Zirkonyum kaplama, lamina veneer ve implant üstü protez uygulamaları başlıca çalışma alanlarıdır.",
      "Estetik vakalarda hedefi, dişleri olduğundan beyaz veya büyük göstermek yerine oranları hastanın yüz hatlarıyla uyumlu hale getirmektir. Renk ve form seçimi muayenede birlikte kararlaştırılır.",
    ],
    focusAreas: [
      "Zirkonyum ve porselen kaplama",
      "Lamina veneer",
      "İmplant üstü protezler",
      "Diş beyazlatma",
    ],
    education: [],
    serviceSlugs: ["protez-zirkonyum", "dis-beyazlatma"],
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
      "Her cerrahi işlem öncesinde radyolojik değerlendirme yapılır; panoramik röntgen veya gerektiğinde üç boyutlu tomografi ile dişin konumu, kök şekli ve alt çene siniri ile sinüs tabanına uzaklığı ölçülür. Riskler ve iyileşme süreci hastaya işlem öncesinde ayrıntılı biçimde anlatılır.",
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
    serviceSlugs: ["agiz-dis-cene-cerrahisi", "implant-tedavisi"],
    pending: ["Mezuniyet ve eğitim bilgileri", "Deneyim yılı", "Sertifikalar"],
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
