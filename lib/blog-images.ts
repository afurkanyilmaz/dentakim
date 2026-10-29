import type { BlogPost } from "@/lib/blog";
import { BLOG_PHOTOS, TREATMENT_PHOTOS, type StockPhoto } from "@/lib/stock-photos";

/**
 * Blog kapak görselleri (temsili stok görseller). Her yazıya ayrı görsel
 * atanır; listede aynı fotoğrafın art arda tekrarlanması önlenir.
 */
const T = TREATMENT_PHOTOS;
const B = BLOG_PHOTOS;

const BY_SLUG: Record<string, StockPhoto> = {
  "kucukcekmece-dis-fiyatlari": B["hekim-hasta"],
  "kanal-tedavisi-sonrasi-agri-normal-mi": B["dis-modeli"],
  "zirkonyum-kaplama-kac-gun-surer": T["protez-zirkonyum"],
  "cocuklarda-dis-curugu-nasil-onlenir": T["cocuk-dis-hekimligi"],
  "seffaf-plak-mi-tel-mi": B["seffaf-plak"],
  "implant-sonrasi-bakim": B["dis-fircasi"],
  "implant-ne-kadar-surer": T["implant-tedavisi"],
  "dis-beyazlatma-evde-mi-klinik-mi": B.gulumseme,
  "dis-agrisi-nasil-gecer": B.muayene,
  "acil-dis-hekimi-kucukcekmece": B.unit,
  "implant-yaptirmak-istiyorum-nereden-baslamali": B.rontgen,
  "kanal-tedavisi-nedir": T["kanal-tedavisi"],
  "dis-beyazlatma-nasil-yapilir": T["dis-beyazlatma"],
  "implant-markalari-arasindaki-fark": T["all-on-4-implant"],
  "dis-protezi-cesitleri": T["hibrit-protez"],
  "estetik-dis-hekimligi-nedir": T["lamina-veneer"],
  "hollywood-smile-nedir": T["gulus-tasarimi"],
  "gulus-tasarimi-nasil-yapilir": B.gulumseme,
  "lamina-mi-zirkonyum-mu": T["lamina-veneer"],
  "all-on-4-mu-all-on-6-mi": T["all-on-6-implant"],
  "dis-sikma-bruksizm-gece-plagi": T["gece-plagi-bruksizm"],
  "sinus-lifting-nedir": T["kemik-grefti-sinus-lifting"],
  "implant-mi-kopru-mu": T["implant-tedavisi"],
  "zirkonyum-mu-porselen-mi": T["protez-zirkonyum"],
  "dis-hassasiyeti-neden-olur": T["dis-dolgusu"],
  "yirmilik-dis-cekimi-sonrasi": T["agiz-dis-cene-cerrahisi"],
  "dis-eti-kanamasi-neden-olur": B["dis-fircasi"],
  "agiz-kokusu-neden-olur": B.muayene,
  "bonding-nedir": B["dis-modeli"],
  "dis-tasi-temizligi-zararli-mi": B.unit,
};

const FALLBACK = Object.values(B);

export function getPostImage(post: BlogPost, index = 0): StockPhoto {
  return (
    BY_SLUG[post.slug] ??
    (post.serviceSlug ? T[post.serviceSlug] : undefined) ??
    FALLBACK[index % FALLBACK.length]
  );
}
