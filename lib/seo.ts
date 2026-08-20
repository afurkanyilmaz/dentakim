import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";

export type MetaProps = {
  title: string;
  description: string;
  /** Kök için boş string; diğerleri için baştaki eğik çizgi olmadan. */
  slug: string;
  image?: string;
  /**
   * Marka son ekini ekleme. Hekim sayfalarında olduğu gibi başlığın kendisi
   * zaten kimliği taşıyorsa 65 karakter sınırında kalmak için kullanılır.
   */
  omitSuffix?: boolean;
};

/**
 * Son ek kısa tutulur: Google başlıkları ~65 karakterde kesiyor; uzun bir son ek
 * sayfanın kendi anahtar kelimesini görünmez yapıyordu.
 */
const SITE_SUFFIX = BUSINESS.brandName;

/**
 * Sayfa metadata'sı.
 *
 * title.absolute kullanılır: aksi halde app/layout.tsx'teki
 * `%s | Dentakim` şablonu son ekin üzerine ikinci kez eklenir ve başlıklar
 * "KVKK | Küçükçekmece Diş Kliniği — Dentakim | Dentakim" gibi çift son ekle
 * çıkardı. Semt sayfalarında son ek dört kez tekrarlanıyordu.
 */
export function generateMeta({ title, description, slug, image, omitSuffix }: MetaProps): Metadata {
  const fullTitle = omitSuffix ? title : `${title} | ${SITE_SUFFIX}`;
  const path = slug ? `/${slug}` : "/";
  const url = `${BUSINESS.website}${path}`;

  return {
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(BUSINESS.website),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BUSINESS.displayName,
      images: [{ url: image || "/og/default.jpg", width: 1200, height: 630 }],
      locale: "tr_TR",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}
