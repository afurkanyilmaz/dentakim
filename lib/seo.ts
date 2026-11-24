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
/** Google'ın başlıkları kestiği yaklaşık sınır. */
const TITLE_MAX = 65;
/** Arama sonucunda gösterilen açıklama sınırı. */
const DESC_MAX = 160;

/**
 * Başlık uzunsa marka son eki düşülür: anahtar kelime ve konum korunur,
 * marka adı Google'da site adı olarak zaten ayrıca gösterilir.
 */
function fitTitle(title: string, omitSuffix?: boolean) {
  if (omitSuffix) return title;
  const withBrand = `${title} | ${SITE_SUFFIX}`;
  return withBrand.length <= TITLE_MAX ? withBrand : title;
}

/** Uzun açıklamayı kelime sınırında kısaltır (arama sonucunda yarım kalmasın). */
function fitDescription(text: string) {
  if (text.length <= DESC_MAX) return text;
  const cut = text.slice(0, DESC_MAX - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,.;:—-]+$/, "")}…`;
}

export function generateMeta({ title, description: rawDescription, slug, image, omitSuffix }: MetaProps): Metadata {
  const fullTitle = fitTitle(title, omitSuffix);
  const description = fitDescription(rawDescription);
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
