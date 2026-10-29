/** Slug list mirrors app/hizmetler/<slug>/page.tsx routes */
export const HIZMET_SLUGS = [
  "implant-tedavisi",
  "all-on-4-implant",
  "all-on-6-implant",
  "hibrit-protez",
  "gulus-tasarimi",
  "lamina-veneer",
  "kemik-grefti-sinus-lifting",
  "gece-plagi-bruksizm",
  "dis-beyazlatma",
  "ortodonti",
  "cocuk-dis-hekimligi",
  "kanal-tedavisi",
  "protez-zirkonyum",
  "dis-dolgusu",
  "agiz-dis-cene-cerrahisi",
] as const;

export type HizmetSlug = (typeof HIZMET_SLUGS)[number];
