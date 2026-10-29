/**
 * Dentakim işletme bilgileri — TEK DOĞRULUK KAYNAĞI.
 *
 * Adres, telefon veya çalışma saati hiçbir bileşende elle yazılmaz; buradan okunur.
 * Google Business Profile ile tutarlılık (NAP) bu dosyada korunur.
 *
 * Doğrulama durumu:
 *   verified: true  → Google Business Profile'dan teyit edildi (19.08.2026)
 *   verified: false → teyit bekliyor, schema'ya ve siteye çıkarılmaz
 */

export const NEEDS_CONTENT = "[NEEDS_CONTENT]" as const;

export const BUSINESS = {
  /** Marka adı — başlıklarda ve gezinmede kullanılır. */
  brandName: "Dentakim",

  /** Google Business Profile'daki resmi kayıt. */
  legalName: "Dent Akım Ağız ve Diş Sağlığı Polikliniği",

  /** Sitede kullanılan tam ad. */
  displayName: "Dentakim Ağız ve Diş Sağlığı Polikliniği",

  category: "Diş Kliniği",
  website: "https://dentakim.com",

  address: {
    street: "Fevzi Çakmak, Sultan Murat Cd. No:86 A",
    district: "Küçükçekmece",
    city: "İstanbul",
    region: "TR-34",
    postalCode: "34295",
    country: "TR",
    /** Tek satır gösterim — her yerde bu biçim kullanılır. */
    full: "Fevzi Çakmak, Sultan Murat Cd. No:86 A, 34295 Küçükçekmece/İstanbul",
  },

  coordinates: { lat: 40.9935, lng: 28.7851 },
  plusCode: "2Q3R+78 Küçükçekmece, İstanbul",

  phone: {
    /** Ekranda görünen biçim. */
    display: "+90 553 313 78 88",
    /** tel: bağlantısı — E.164, başında + ile. */
    href: "tel:+905533137888",
  },

  whatsapp: {
    number: "905533137888",
    defaultMessage: "Merhaba, randevu ve tedaviler hakkında bilgi almak istiyorum.",
  },

  email: "info@dentakim.com",

  /**
   * Klinikteki toplam hekim sayısı (klinik teyidi, 29.10.2026): 4 hekim,
   * biri ortodontist. Profili yayınlanan hekimler lib/doctors.ts'tedir;
   * ortodontistin adı ve bilgileri geldiğinde oraya eklenecek.
   */
  team: { doctorCount: 4, areas: "protez, estetik, cerrahi ve ortodonti" },

  /** Google Business Profile'da yayınlanan saatler. */
  hours: {
    verified: true,
    weekdays: { days: "Pazartesi – Cuma", opens: "09:00", closes: "19:00" },
    saturday: { days: "Cumartesi", opens: "09:00", closes: "17:00" },
    sunday: { days: "Pazar", closed: true },
  },

  google: {
    /** Google Business Profile bağlantısı — schema'da sameAs olarak kullanılır. */
    profileUrl: "https://maps.google.com/?cid=13753686715599366941",
    embedUrl:
      "https://maps.google.com/maps?q=Fevzi+Çakmak,+Sultan+Murat+Cd.+no:86+A,+34295+Küçükçekmece&output=embed",
    /**
     * GBP'de görünen puan. Sitede kaynağı belirtilerek ve profile bağlanarak
     * gösterilir; aggregateRating olarak schema'ya YAZILMAZ (kendi sitesinde
     * kendi puanını işaretlemek Google'ın yapılandırılmış veri kurallarına aykırıdır).
     */
    rating: { value: 5.0, count: 18, checkedAt: "2026-08-19" },
  },

  /**
   * Kuruluş künyesi. Alanlar null olduğu sürece sitede GÖSTERİLMEZ.
   *
   * İleride mesul müdür ve faaliyet izin bilgisi eklenmek istenirse buraya
   * yazılması yeterlidir; footer ve iletişim sayfası otomatik gösterir.
   */
  legal: {
    /**
     * Mesul müdür (sorumlu diş hekimi) adı.
     * null bırakılırsa sitede künye bloğu hiç gösterilmez.
     */
    responsibleManager: null as string | null,
    /** İl Sağlık Müdürlüğü faaliyet izin / ruhsat numarası. */
    licenseNumber: null as string | null,
    /** Ruhsatı veren kurum. */
    licenseAuthority: "İstanbul İl Sağlık Müdürlüğü",
  },

  /**
   * Sosyal hesaplar teyit edilmedi — eski koddan devralınan tahmini adresler.
   * Teyit edilene kadar sitede gösterilmez ve sameAs'e eklenmez.
   */
  social: {
    instagram: { url: "https://instagram.com/dentakim.istanbul", verified: false },
    facebook: { url: "https://facebook.com/dentakim", verified: false },
  },
} as const;

/** Schema.org sameAs listesi — yalnızca doğrulanmış profiller. */
export function getVerifiedProfiles(): string[] {
  const urls: string[] = [BUSINESS.google.profileUrl];
  for (const p of Object.values(BUSINESS.social)) {
    if (p.verified) urls.push(p.url);
  }
  return urls;
}

/** WhatsApp derin bağlantısı. Sayfaya özel mesaj geçilebilir. */
export function whatsappUrl(message: string = BUSINESS.whatsapp.defaultMessage): string {
  return `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Schema.org PostalAddress. */
export function getPostalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.district,
    addressRegion: BUSINESS.address.city,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  };
}

/** Schema.org OpeningHoursSpecification — yalnızca doğrulanmışsa. */
export function getOpeningHoursSpecification() {
  if (!BUSINESS.hours.verified) return undefined;
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: BUSINESS.hours.weekdays.opens,
      closes: BUSINESS.hours.weekdays.closes,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: BUSINESS.hours.saturday.opens,
      closes: BUSINESS.hours.saturday.closes,
    },
  ];
}

/** Kanonik entity kimlikleri — schema graph'ı bunlarla bağlanır. */
export const ENTITY_ID = {
  clinic: `${BUSINESS.website}/#klinik`,
  website: `${BUSINESS.website}/#website`,
  organization: `${BUSINESS.website}/#kurum`,
} as const;
