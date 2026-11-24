import { preload } from "react-dom";

/** İç sayfa başlık bandının (.page-hero) CSS arka plan görseli. */
export const PAGE_HERO_IMAGE = "/images/klinik/sayfa-zemini.jpg";

/**
 * Başlık bandı görseli CSS'te tanımlı olduğu için tarayıcı onu geç keşfeder
 * ve sayfanın en büyük öğesi (LCP) gecikir. Bu çağrı <head>'e yüksek
 * öncelikli bir preload ekler. .page-hero kullanan her sayfada çağrılır
 * (BreadcrumbNav bunu otomatik yapar).
 */
export function preloadPageHero() {
  preload(PAGE_HERO_IMAGE, { as: "image", fetchPriority: "high" });
}
