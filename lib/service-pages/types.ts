export type ServiceFAQ = { question: string; answer: string };

export type ServicePageContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  paragraphs: string[];
  steps: string[];
  faqs: ServiceFAQ[];
  relatedSlugOrder: string[];
  /**
   * Soruya doğrudan yanıt veren 2-3 cümlelik özet. Sayfanın en üstünde
   * "Kısaca" bloğunda gösterilir; arama motorları ve yapay zekâ
   * asistanlarının alıntılayabileceği net bir tanım sağlar.
   */
  summary?: string;
  /**
   * "Bir bakışta" tablosu — süre, seans, anestezi gibi genel bilgiler.
   * Değerler genel aralıktır; kişiye özel plan muayenede belirlenir.
   */
  facts?: { label: string; value: string }[];
  /** schema.org MedicalProcedure türü. */
  procedureType?: "SurgicalProcedure" | "NoninvasiveProcedure";
  /** Konuyu derinleştiren blog yazıları (slug). */
  guideSlugs?: string[];
  /** Diğer adlar — ör. "Hollywood Smile"; şemada alternateName olarak kullanılır. */
  alternateNames?: string[];
};
