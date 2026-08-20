import { GEO_BY_SLUG } from "@/lib/geo-content";
import type { GeoPageDef } from "@/lib/geo-content";

/**
 * Bölge kaydı — /bolgeler hub'ının kaynağı.
 *
 * Kliniğin fiziksel adresi Küçükçekmece Fevzi Çakmak Mahallesi'ndedir.
 * Diğer bölgeler şube değil, hizmet verilen ve ulaşımı kolay olan alanlardır;
 * sayfalarda bu ayrım açıkça belirtilir.
 */

export type RegionGroup = "ilce-ici" | "cevre-ilce";

export type Region = {
  slug: string;
  /** Gösterim adı — "Sefaköy", "Bağcılar". */
  name: string;
  group: RegionGroup;
  /** Kliniğe göre konum açıklaması — kartlarda ve SSS'de kullanılır. */
  proximity: string;
  /** Öne çıkan bölge mi? Hub'da ve anasayfada üstte gösterilir. */
  featured?: boolean;
};

export const REGIONS: Region[] = [
  // ── Küçükçekmece ilçesi içi ─────────────────────────────
  {
    slug: "kucukcekmece-dis-klinigi",
    name: "Küçükçekmece",
    group: "ilce-ici",
    proximity: "Kliniğimizin bulunduğu ilçe",
    featured: true,
  },
  {
    slug: "fevzi-cakmak-dis-klinigi",
    name: "Fevzi Çakmak Mahallesi",
    group: "ilce-ici",
    proximity: "Kliniğimizin bulunduğu mahalle — yürüme mesafesi",
    featured: true,
  },
  {
    slug: "halkali-dis-klinigi",
    name: "Halkalı",
    group: "ilce-ici",
    proximity: "Marmaray bağlantısı ile yaklaşık 10 dakika",
    featured: true,
  },
  {
    slug: "sefakoy-dis-klinigi",
    name: "Sefaköy",
    group: "ilce-ici",
    proximity: "Ana arterlerle yaklaşık 10 dakika",
    featured: true,
  },
  {
    slug: "atakent-dis-klinigi",
    name: "Atakent",
    group: "ilce-ici",
    proximity: "İlçe içi bağlantılarla yaklaşık 10 dakika",
  },
  {
    slug: "cennet-mahallesi-dis-klinigi",
    name: "Cennet Mahallesi",
    group: "ilce-ici",
    proximity: "İlçe içi bağlantılarla kısa mesafe",
  },
  {
    slug: "inonu-mahallesi-dis-klinigi",
    name: "İnönü Mahallesi",
    group: "ilce-ici",
    proximity: "İlçe içi bağlantılarla kısa mesafe",
  },

  // ── Çevre ilçeler ───────────────────────────────────────
  {
    slug: "avcilar-dis-klinigi",
    name: "Avcılar",
    group: "cevre-ilce",
    proximity: "E-5 ve metrobüs bağlantısı",
  },
  {
    slug: "bagcilar-dis-klinigi",
    name: "Bağcılar",
    group: "cevre-ilce",
    proximity: "Tramvay ve metro aktarmalarıyla ulaşım",
  },
  {
    slug: "esenyurt-dis-klinigi",
    name: "Esenyurt",
    group: "cevre-ilce",
    proximity: "E-5 ve TEM bağlantısı",
  },
  {
    slug: "gunesli-dis-klinigi",
    name: "Güneşli",
    group: "cevre-ilce",
    proximity: "Ana arterler üzerinden ulaşım",
  },
  {
    slug: "mahmutbey-dis-klinigi",
    name: "Mahmutbey",
    group: "cevre-ilce",
    proximity: "TEM ve E-5 bağlantısı",
  },
];

export const GROUP_LABEL: Record<RegionGroup, string> = {
  "ilce-ici": "Küçükçekmece ve mahalleleri",
  "cevre-ilce": "Çevre ilçeler",
};

export function getRegion(slug: string): Region | undefined {
  return REGIONS.find((r) => r.slug === slug);
}

export function getRegionsByGroup(group: RegionGroup): Region[] {
  return REGIONS.filter((r) => r.group === group);
}

export function getFeaturedRegions(): Region[] {
  return REGIONS.filter((r) => r.featured);
}

/** Bölge kaydı ile içerik tanımını birleştirir. */
export function getRegionWithContent(
  slug: string
): (Region & { content: GeoPageDef }) | undefined {
  const region = getRegion(slug);
  const content = GEO_BY_SLUG[slug];
  if (!region || !content) return undefined;
  return { ...region, content };
}
