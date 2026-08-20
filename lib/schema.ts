import {
  BUSINESS,
  ENTITY_ID,
  getOpeningHoursSpecification,
  getPostalAddress,
  getVerifiedProfiles,
} from "@/lib/business";
import type { Doctor } from "@/lib/doctors";

/**
 * Schema.org yapılandırılmış verisi.
 *
 * KURAL: Doğrulanmamış hiçbir bilgi buraya yazılmaz.
 *   • priceRange     — kaldırıldı, doğrulanmış bir fiyat aralığı yok
 *   • aggregateRating— yazılmaz; kendi puanını kendi sitesinde işaretlemek
 *                      Google'ın kurallarına aykırıdır
 *   • employee       — yalnızca doğrulanmış kadro (lib/doctors.ts)
 */

/** Klinik entity'si — tüm sayfalar bu @id'ye referans verir. */
export function getClinicSchema(doctors: Doctor[] = [], areaServed: string[] = []) {
  const openingHours = getOpeningHoursSpecification();

  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalClinic"],
    "@id": ENTITY_ID.clinic,
    name: BUSINESS.displayName,
    legalName: BUSINESS.legalName,
    alternateName: [BUSINESS.brandName, BUSINESS.legalName],
    url: BUSINESS.website,
    telephone: BUSINESS.phone.display,
    email: BUSINESS.email,
    address: getPostalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.coordinates.lat,
      longitude: BUSINESS.coordinates.lng,
    },
    hasMap: BUSINESS.google.profileUrl,
    sameAs: getVerifiedProfiles(),
    ...(openingHours ? { openingHoursSpecification: openingHours } : {}),
    ...(doctors.length
      ? {
          employee: doctors.map((d) => ({
            "@type": "Person",
            "@id": `${BUSINESS.website}/hekimler/${d.slug}#kisi`,
            name: d.name,
            jobTitle: `${d.title} — ${d.specialization}`,
          })),
          // schema.org MedicalSpecialty yalnızca tanımlı enum değerlerini kabul eder.
          // "Prosthodontic" / "OralSurgery" geçerli değer değildir.
          medicalSpecialty: Array.from(
            new Set([
              "Dentistry",
              ...doctors
                .filter((d) => d.medicalSpecialty === "OralSurgery")
                .map(() => "Surgical"),
            ])
          ),
        }
      : {}),
    areaServed: (areaServed.length
      ? areaServed
      : [BUSINESS.address.district]
    ).map((name) => ({ "@type": "AdministrativeArea", name })),
  };
}

/** Site entity'si — arama kutusu ve marka eşlemesi için. */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ENTITY_ID.website,
    url: BUSINESS.website,
    name: BUSINESS.brandName,
    inLanguage: "tr-TR",
    publisher: { "@id": ENTITY_ID.clinic },
  };
}

/**
 * Hekim entity'si.
 *
 * NOT: schema.org'da "Physician" bir Organization alt tipidir, Person değil;
 * medicalSpecialty ve areaServed de Person üzerinde tanımlı değildir. Bu yüzden
 * hekim yalnızca Person olarak işaretlenir, uzmanlık knowsAbout ve hasOccupation
 * ile bildirilir. medicalSpecialty klinik (Dentist) düğümünde yer alır.
 */
export function getDoctorSchema(doctor: Doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BUSINESS.website}/hekimler/${doctor.slug}#kisi`,
    name: doctor.name,
    jobTitle: `${doctor.title} — ${doctor.specialization}`,
    url: `${BUSINESS.website}/hekimler/${doctor.slug}`,
    // knowsAbout Person üzerinde geçerlidir; uzmanlık konularını bildirir.
    knowsAbout: doctor.knowsAbout,
    hasOccupation: {
      "@type": "Occupation",
      name: doctor.specialization,
      occupationalCategory: doctor.title,
    },
    worksFor: { "@id": ENTITY_ID.clinic },
    workLocation: { "@id": ENTITY_ID.clinic },
    ...(doctor.photo ? { image: `${BUSINESS.website}${doctor.photo}` } : {}),
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

export function getFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function getMedicalWebPageSchema(input: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: input.name,
    description: input.description,
    url: input.url,
    isPartOf: { "@id": ENTITY_ID.website },
    about: { "@id": ENTITY_ID.clinic },
  };
}

/**
 * Bölge sayfası şeması.
 *
 * ÖNEMLİ: Bu sayfalar klinik düğümünü (@id #klinik) YENİDEN TANIMLAMAZ.
 * Daha önce her bölge sayfası aynı @id ile farklı bir description yazıyordu;
 * bu, Google'ın tek bir düğüm için 14 çelişkili tanım görmesine yol açıyordu.
 * Artık sayfa kendi WebPage düğümünü üretir ve klinik düğümüne referans verir.
 */
export function getRegionPageSchema(input: {
  name: string;
  areaServed: string[];
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${input.url}#sayfa`,
    url: input.url,
    name: input.name,
    description: input.description,
    inLanguage: "tr-TR",
    isPartOf: { "@id": ENTITY_ID.website },
    about: { "@id": ENTITY_ID.clinic },
    primaryImageOfPage: `${BUSINESS.website}/images/klinik/resepsiyon.jpg`,
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `İletişim — ${BUSINESS.brandName}`,
    url: `${BUSINESS.website}/iletisim`,
    mainEntity: { "@id": ENTITY_ID.clinic },
  };
}

/**
 * Blog yazısı. Yazar doğrulanmış bir hekimse Person, değilse kurum olarak
 * işaretlenir — uydurma yazar adı üretilmez.
 */
export function getBlogPostingSchema(input: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: Doctor;
  /** Yazıya ait görsel yolu; yoksa klinik fotoğrafı kullanılır. */
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    mainEntityOfPage: input.url,
    url: input.url,
    inLanguage: "tr-TR",
    image: `${BUSINESS.website}${input.image ?? "/images/klinik/resepsiyon.jpg"}`,
    author: input.author
      ? {
          "@type": "Person",
          "@id": `${BUSINESS.website}/hekimler/${input.author.slug}#kisi`,
          name: input.author.name,
        }
      : { "@id": ENTITY_ID.clinic },
    publisher: { "@id": ENTITY_ID.clinic },
  };
}
