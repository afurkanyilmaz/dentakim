import { CLINIC } from "@/lib/constants";

export function getDentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist"],
    name: "Dentakim Ağız ve Diş Sağlığı Polikliniği",
    url: "https://dentakim.com",
    telephone: "+90 553 313 78 88",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fevzi Çakmak, Sultan Murat Cd. No:86 A",
      addressLocality: "Küçükçekmece",
      addressRegion: "İstanbul",
      postalCode: "34295",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.9935,
      longitude: 28.7851,
    },
    openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-17:00"],
    priceRange: "₺₺",
    hasMap: "https://maps.google.com/?cid=13753686715599366941",
    employee: {
      "@type": "Person",
      name: "Dr. Musa Burak Sakar",
      jobTitle: "Diş Hekimi",
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; item: string }[]
) {
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

export function getFAQPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
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
    isPartOf: {
      "@type": "WebSite",
      name: CLINIC.name,
      url: CLINIC.website,
    },
    about: {
      "@type": "MedicalClinic",
      name: CLINIC.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC.address.street,
        addressLocality: CLINIC.address.district,
        addressRegion: CLINIC.address.city,
        postalCode: CLINIC.address.postalCode,
        addressCountry: CLINIC.address.country,
      },
    },
  };
}

export function getLocalBusinessAreaServedSchema(input: {
  areaServed: string[];
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist"],
    name: CLINIC.name,
    url: CLINIC.website,
    telephone: CLINIC.phone,
    description: input.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.address.street,
      addressLocality: CLINIC.address.district,
      addressRegion: CLINIC.address.city,
      postalCode: CLINIC.address.postalCode,
      addressCountry: CLINIC.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC.coordinates.lat,
      longitude: CLINIC.coordinates.lng,
    },
    areaServed: input.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    hasMap: CLINIC.googleMapsUrl,
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "İletişim — Dentakim",
    url: "https://dentakim.com/iletisim",
    mainEntity: {
      "@type": "LocalBusiness",
      name: CLINIC.name,
      telephone: CLINIC.phone,
      email: CLINIC.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC.address.street,
        addressLocality: CLINIC.address.district,
        addressRegion: CLINIC.address.city,
        postalCode: CLINIC.address.postalCode,
        addressCountry: CLINIC.address.country,
      },
    },
  };
}

export function getBlogPostingSchema(input: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    mainEntityOfPage: input.url,
    author: {
      "@type": "Organization",
      name: CLINIC.name,
      url: CLINIC.website,
    },
    publisher: {
      "@type": "Organization",
      name: CLINIC.name,
      url: CLINIC.website,
    },
  };
}
