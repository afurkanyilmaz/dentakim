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
};
