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

export const SERVICES = [
  {
    slug: "implant-tedavisi",
    title: "İmplant Tedavisi",
    icon: "implant",
    desc: "Eksik dişlerinizi kalıcı olarak tamamlayın",
  },
  {
    slug: "dis-beyazlatma",
    title: "Diş Beyazlatma",
    icon: "whitening",
    desc: "Profesyonel beyazlatma ile parlak gülüş",
  },
  {
    slug: "ortodonti",
    title: "Ortodonti",
    icon: "ortho",
    desc: "Metal ve şeffaf aparey seçenekleri",
  },
  {
    slug: "cocuk-dis-hekimligi",
    title: "Çocuk Diş Hekimliği",
    icon: "child",
    desc: "Çocuklarınız için güvenli tedavi",
  },
  {
    slug: "kanal-tedavisi",
    title: "Kanal Tedavisi",
    icon: "root-canal",
    desc: "Lokal anestezi ile kanal tedavisi",
  },
  {
    slug: "protez-zirkonyum",
    title: "Protez & Zirkonyum",
    icon: "crown",
    desc: "Estetik ve dayanıklı restorasyonlar",
  },
  {
    slug: "dis-dolgusu",
    title: "Diş Dolgusu",
    icon: "filling",
    desc: "Renk uyumlu kompozit dolgular",
  },
  {
    slug: "agiz-dis-cene-cerrahisi",
    title: "Ağız, Diş ve Çene Cerrahisi",
    icon: "surgery",
    desc: "Gömülü 20'lik diş çekimi ve cerrahi işlemler",
  },
] as const;

export const WHATSAPP_URL =
  "https://wa.me/905533137888?text=Merhaba%2C%20randevu%20almak%20istiyorum.";
