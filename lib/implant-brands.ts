/**
 * İmplant sistemleri.
 *
 * AMAÇ: "Medigma implant nedir", "Implant Direct fiyat", "hangi implant
 * markası" gibi aramalarda görünmek ve hastaya şeffaf bilgi vermek.
 *
 * KURAL: `usedInClinic` yalnızca klinikte gerçekten uygulanan sistemler için
 * true yapılır. Sitede "kliniğimizde kullanılan sistemler" bloğu SADECE bu
 * bayrak açık olan markaları gösterir; onaylanmamış marka yayınlanmaz.
 *
 * TANITIM KURALLARI: Markalar arasında üstünlük iddiası kurulmaz. Metinler
 * bilgilendirme niteliğindedir; hangi sistemin uygun olduğu muayene sonrası
 * belirlenir.
 */

export type ImplantBrand = {
  slug: string;
  name: string;
  origin: string;
  /** Sistemin öne çıkan teknik özellikleri — nesnel, karşılaştırmasız. */
  characteristics: string[];
  /** Klinikte uygulanıyor mu? Onaylanana kadar false. */
  usedInClinic: boolean;
};

/*
 * Klinikte kullanılan sistemler 29.10.2026'da klinik tarafından teyit edildi:
 * Medigma, Nucleoss, Bilim İmplant, Osstem. Teknik özellikler genel ve
 * karşılaştırmasızdır.
 */
export const IMPLANT_BRANDS: ImplantBrand[] = [
  {
    slug: "medigma",
    name: "Medigma",
    origin: "Almanya",
    characteristics: [
      "Titanyum grade 4 gövde",
      "Konik bağlantı (conical connection) platformu",
      "Kumlanmış ve asitlenmiş yüzey işlemi",
    ],
    usedInClinic: true,
  },
  {
    slug: "nucleoss",
    name: "Nucleoss",
    origin: "Türkiye",
    characteristics: [
      "Yerli üretim titanyum implant sistemi",
      "Farklı çap ve boy seçenekleri",
      "Protetik bileşen tedariki yurt içinden",
    ],
    usedInClinic: true,
  },
  {
    slug: "bilim-implant",
    name: "Bilim İmplant",
    origin: "Türkiye",
    characteristics: [
      "Yerli üretim titanyum implant sistemi",
      "Farklı kemik yapılarına yönelik boy ve çap seçenekleri",
      "Yedek parça ve protetik bileşen tedariki yurt içinden",
    ],
    usedInClinic: true,
  },
  {
    slug: "osstem",
    name: "Osstem",
    origin: "Güney Kore",
    characteristics: [
      "Uluslararası pazarda yaygın kullanılan implant sistemi",
      "Farklı kemik tiplerine yönelik implant serileri",
      "Geniş protetik bileşen yelpazesi",
    ],
    usedInClinic: true,
  },
  {
    slug: "implant-direct",
    name: "Implant Direct",
    origin: "ABD",
    characteristics: [
      "Geniş protetik parça çeşitliliği",
      "Farklı platform çaplarında seçenek",
      "Uzun süredir kullanımda olan sistem ailesi",
    ],
    usedInClinic: false,
  },
  {
    slug: "zeramex",
    name: "Zeramex",
    origin: "İsviçre",
    characteristics: [
      "Metal içermeyen zirkonyum implant",
      "Titanyum alerjisi bildiren hastalar için alternatif",
      "Beyaz renk nedeniyle dişeti altında gri yansıma oluşturmaz",
    ],
    usedInClinic: false,
  },
  {
    slug: "inclusive",
    name: "Inclusive Implant",
    origin: "ABD",
    characteristics: [
      "Cerrahi ve protetik bileşenleri bir arada sunan set yapısı",
      "Standart platform ölçüleri",
    ],
    usedInClinic: false,
  },
  {
    slug: "aon",
    name: "AON",
    origin: "İtalya",
    characteristics: ["Titanyum implant sistemi", "Farklı boy ve çap seçenekleri"],
    usedInClinic: false,
  },
  {
    slug: "venus",
    name: "Venüs",
    origin: "Türkiye",
    characteristics: [
      "Yerli üretim titanyum implant",
      "Yedek parça ve protetik bileşen tedariki yurt içinden",
    ],
    usedInClinic: false,
  },
];

/** Klinikte uygulandığı onaylanmış sistemler. */
export function getUsedBrands(): ImplantBrand[] {
  return IMPLANT_BRANDS.filter((b) => b.usedInClinic);
}
