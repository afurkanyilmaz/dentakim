/**
 * Temsili stok görseller — Unsplash License (ticari kullanım serbest,
 * atıf zorunlu değil; yine de kaynak ve fotoğrafçı burada kayıtlıdır).
 *
 * Bu görseller hasta sonucu DEĞİLDİR; sitede "Temsili görsel" notuyla
 * kullanılır. Öncesi-sonrası veya hasta fotoğrafı izlenimi verecek
 * görsel eklenmez (sağlık tanıtım kuralları).
 */
export type StockPhoto = { src: string; alt: string; credit: string; source: string };

const u = (id: string) => `https://unsplash.com/photos/${id}`;

/** Tedavi görselleri — anahtar: hizmet slug'ı. */
export const TREATMENT_PHOTOS: Record<string, StockPhoto> = {
  "gulus-tasarimi": { src: "/images/tedaviler/gulus-tasarimi.jpg", alt: "Gülümseyen kadın — gülüş tasarımı temsili görseli", credit: "Street Og'", source: u("DDO0Cv4U9Gs") },
  "implant-tedavisi": { src: "/images/tedaviler/implant-tedavisi.jpg", alt: "Diş implantı, kök ve çene kemiği modeli", credit: "Harold Hisona", source: u("IFL9Hj6os0U") },
  "protez-zirkonyum": { src: "/images/tedaviler/protez-zirkonyum.jpg", alt: "Eldivenli elde implant ve kron parçası", credit: "Katarzyna Zygnerska", source: u("eHwRLpfHSKY") },
  "lamina-veneer": { src: "/images/tedaviler/lamina-veneer.jpg", alt: "Gülümseyen ağız ve ön dişler — lamina temsili görseli", credit: "Kamal Hoseinianzade", source: u("RCQnbyQsnUg") },
  "all-on-4-implant": { src: "/images/tedaviler/all-on-4-implant.jpg", alt: "Çene modelinde implant ve kron", credit: "Platinum Dental Care", source: u("iW6UZIPTFxU") },
  "all-on-6-implant": { src: "/images/tedaviler/all-on-6-implant.jpg", alt: "İmplant destekli protez modeli", credit: "Quang Tri Nguyen", source: u("VxVO1zrY5F8") },
  "hibrit-protez": { src: "/images/tedaviler/hibrit-protez.jpg", alt: "Elde tutulan tam çene protezi", credit: "Unsplash", source: u("U1gvhqVQ2kQ") },
  "dis-beyazlatma": { src: "/images/tedaviler/dis-beyazlatma.jpg", alt: "Gülümseyen kadın — diş beyazlatma temsili görseli", credit: "Lesly Juarez", source: u("1AhGNGKuhR0") },
  "seffaf-plak-tedavisi": { src: "/images/tedaviler/ortodonti.jpg", alt: "Şeffaf plak takan kişi", credit: "Diana Polekhina", source: u("fmB7IdFjhTM") },
  ortodonti: { src: "/images/blog/braket.jpg", alt: "Braketli diş modeli", credit: "Unsplash", source: u("P8ernb_Ht-M") },
  "kemik-grefti-sinus-lifting": { src: "/images/tedaviler/kemik-grefti-sinus-lifting.jpg", alt: "Panoramik diş röntgeni", credit: "Harold Hisona", source: u("QWgq6Rjw0SE") },
  "agiz-dis-cene-cerrahisi": { src: "/images/tedaviler/agiz-dis-cene-cerrahisi.jpg", alt: "Koruyucu ekipmanla işlem yapan diş hekimleri", credit: "Jonathan Borba", source: u("hl6uG9cHW5A") },
  "kanal-tedavisi": { src: "/images/tedaviler/kanal-tedavisi.jpg", alt: "Diş röntgenlerini inceleyen hekim", credit: "Jonathan Borba", source: u("v_2FRXEba94") },
  "dis-dolgusu": { src: "/images/tedaviler/dis-dolgusu.jpg", alt: "Ayna ve aletle diş muayenesi", credit: "Caroline LM", source: u("8BkF0sTC6Uo") },
  "gece-plagi-bruksizm": { src: "/images/tedaviler/gece-plagi-bruksizm.jpg", alt: "Şeffaf diş plağı ve saklama kabı", credit: "Candid", source: u("WFsNCIn8OF4") },
  "cocuk-dis-hekimligi": { src: "/images/tedaviler/cocuk-dis-hekimligi.jpg", alt: "Çocuğun dişlerini muayene eden hekim", credit: "Navy Medicine", source: u("Y_D9bmeX1V0") },
};

/** Ek blog görselleri — kategoriye göre seçilir. */
export const BLOG_PHOTOS: Record<string, StockPhoto> = {
  muayene: { src: "/images/blog/muayene.jpg", alt: "Diş hekimi muayenesi", credit: "Unsplash", source: u("z8BIWPwV3zo") },
  "hekim-hasta": { src: "/images/blog/hekim-hasta.jpg", alt: "Hastasıyla konuşan diş hekimi", credit: "Unsplash", source: u("Bg81yWKZlMg") },
  "seffaf-plak": { src: "/images/blog/seffaf-plak.jpg", alt: "Şeffaf plak takan kişi", credit: "Unsplash", source: u("uTUsnv_UCSQ") },
  rontgen: { src: "/images/blog/rontgen.jpg", alt: "Ekranda diş röntgeni", credit: "Unsplash", source: u("DwlC4fija6o") },
  unit: { src: "/images/blog/unit.jpg", alt: "Diş ünitesi ve muayene odası", credit: "Unsplash", source: u("XJptUS8nbhs") },
  gulumseme: { src: "/images/blog/gulumseme.jpg", alt: "Gülümseyen kadın", credit: "Unsplash", source: u("mEZ3PoFGs_k") },
  "dis-modeli": { src: "/images/blog/dis-modeli.jpg", alt: "Diş kesit modeli gösteren hekim", credit: "Unsplash", source: u("SU6EGDd-ySQ") },
  "dis-fircasi": { src: "/images/blog/dis-fircasi.jpg", alt: "Diş modeli ve fırça", credit: "Unsplash", source: u("FCWGwXH55xo") },
  braket: { src: "/images/blog/braket.jpg", alt: "Braketli diş modeli", credit: "Unsplash", source: u("P8ernb_Ht-M") },
};
