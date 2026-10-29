/**
 * NOT: İşletme bilgileri lib/business.ts'e taşındı; hekim kadrosu lib/doctors.ts'te.
 * Bu dosya yalnızca SERVICES listesi ve geriye dönük uyumluluk için duruyor.
 */
export const CLINIC = {
  name: "Dentakim Ağız ve Diş Sağlığı Polikliniği",
  shortName: "Dentakim",
  address: {
    street: "Fevzi Çakmak, Sultan Murat Cd. No:86 A",
    district: "Küçükçekmece",
    city: "İstanbul",
    postalCode: "34295",
    country: "TR",
    full: "Fevzi Çakmak, Sultan Murat Cd. No:86 A, 34295 Küçükçekmece/İstanbul, Türkiye",
  },
  phone: "+90 553 313 78 88",
  phoneRaw: "905533137888",
  whatsapp: "905533137888",
  email: "info@dentakim.com",
  website: "https://dentakim.com",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Fevzi+Çakmak,+Sultan+Murat+Cd.+no:86+A,+34295+Küçükçekmece&output=embed",
  googleMapsUrl: "https://maps.google.com/?cid=13753686715599366941",
  coordinates: { lat: 40.9935, lng: 28.7851 },
  hours: {
    weekdays: "09:00 - 19:00",
    saturday: "09:00 - 17:00",
    sunday: "Kapalı",
  },
  social: {
    instagram: "https://instagram.com/dentakim.istanbul",
    facebook: "https://facebook.com/dentakim",
  },
} as const;

export type ServiceGroup = "estetik" | "implant" | "genel";

export const SERVICE_GROUP_LABEL: Record<ServiceGroup, string> = {
  estetik: "Estetik ve Gülüş",
  implant: "İmplant ve Cerrahi",
  genel: "Genel Tedaviler",
};

/**
 * Tedavi listesi — en çok aranan tedaviler başta. Bu sıra menüde,
 * footer'da, /hizmetler sayfasında ve llms.txt'te kullanılır.
 * URL'ler değiştirilmez (bkz. lib/hizmetler-routes.ts).
 */
export const SERVICES = [
  { slug: "gulus-tasarimi", title: "Gülüş Tasarımı (Hollywood Smile)", icon: "smile", group: "estetik", desc: "Dijital planlama ve prova ile kişiye özel gülüş" },
  { slug: "implant-tedavisi", title: "İmplant Tedavisi", icon: "implant", group: "implant", desc: "Eksik dişlerinizi kalıcı olarak tamamlayın" },
  { slug: "protez-zirkonyum", title: "Zirkonyum Kaplama", icon: "crown", group: "estetik", desc: "Metal içermeyen estetik ve dayanıklı kaplamalar" },
  { slug: "lamina-veneer", title: "Lamina Veneer", icon: "zirconia", group: "estetik", desc: "Minimal aşındırmalı porselen yaprakçıklar" },
  { slug: "all-on-4-implant", title: "All-on-4 İmplant", icon: "all-on-4", group: "implant", desc: "Dişsiz çenede dört implant üzerine sabit protez" },
  { slug: "all-on-6-implant", title: "All-on-6 İmplant", icon: "all-on-6", group: "implant", desc: "Dişsiz çenede altı implant üzerine sabit protez" },
  { slug: "hibrit-protez", title: "Hibrit Protez", icon: "hybrid", group: "implant", desc: "İmplantlara vidalı sabit tam çene protezi" },
  { slug: "seffaf-plak-tedavisi", title: "Şeffaf Plak (Aligner)", icon: "aligner", group: "estetik", desc: "Görünmez, çıkarılabilir plaklarla diş hizalama" },
  { slug: "ortodonti", title: "Ortodonti (Diş Teli)", icon: "ortho", group: "estetik", desc: "Metal, seramik braket ve şeffaf plak seçenekleri" },
  { slug: "dis-beyazlatma", title: "Diş Beyazlatma", icon: "whitening", group: "estetik", desc: "Aşındırmasız klinik ve ev tipi beyazlatma" },
  { slug: "kemik-grefti-sinus-lifting", title: "Kemik Grefti ve Sinüs Lifting", icon: "bone", group: "implant", desc: "İmplant için yetersiz kemiğin desteklenmesi" },
  { slug: "agiz-dis-cene-cerrahisi", title: "Ağız, Diş ve Çene Cerrahisi", icon: "surgery", group: "implant", desc: "Gömülü 20'lik diş çekimi ve cerrahi işlemler" },
  { slug: "kanal-tedavisi", title: "Kanal Tedavisi", icon: "root-canal", group: "genel", desc: "Lokal anestezi ile kanal tedavisi" },
  { slug: "dis-dolgusu", title: "Diş Dolgusu", icon: "filling", group: "genel", desc: "Renk uyumlu kompozit dolgular" },
  { slug: "gece-plagi-bruksizm", title: "Diş Sıkma ve Gece Plağı", icon: "moon", group: "genel", desc: "Bruksizme karşı kişiye özel koruyucu plak" },
  { slug: "cocuk-dis-hekimligi", title: "Çocuk Diş Hekimliği", icon: "child", group: "genel", desc: "Çocuklarınız için güvenli tedavi" },
] as const;

export const WHATSAPP_URL =
  "https://wa.me/905533137888?text=Merhaba%2C%20randevu%20almak%20istiyorum.";
