import type { Metadata } from "next";
import Link from "next/link";
import { HOME_FAQ } from "@/lib/faq";
import { BUSINESS } from "@/lib/business";
import { generateMeta } from "@/lib/seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { getBreadcrumbSchema, getFAQPageSchema } from "@/lib/schema";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { MedicalDisclaimer } from "@/components/shared/MedicalDisclaimer";

export const metadata: Metadata = generateMeta({
  title: "Sık Sorulan Sorular",
  description:
    "İmplant süresi, zirkonyum kaplama ömrü, tedavi ücretleri, randevu ve ulaşım hakkında en çok sorulan sorular ve yanıtları. Küçükçekmece Dentakim.",
  slug: "sss",
});

export default function SSSPage() {
  return (
    <main className="pb-16">
      <JsonLd data={getFAQPageSchema(HOME_FAQ)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Anasayfa", item: `${BUSINESS.website}/` },
          { name: "Sık Sorulan Sorular", item: `${BUSINESS.website}/sss` },
        ])}
      />

      <div className="page-hero">
        <div className="mx-auto max-w-[944px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
          <BreadcrumbNav
            items={[{ label: "Anasayfa", href: "/" }, { label: "Sık Sorulan Sorular" }]}
          />
          <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-accent">
            Merak Ettikleriniz
          </p>
          <h1 className="mt-3 font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.02] tracking-display text-white [text-wrap:pretty]">
            Sık Sorulan Sorular
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid">
            Tedavi süreçleri, randevu ve ulaşım hakkında en çok aldığımız soruları
            derledik. Aradığınızı bulamazsanız WhatsApp&apos;tan yazabilirsiniz.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[944px] px-5 sm:px-8 py-14">
        <FAQAccordion items={HOME_FAQ} />

        <p className="mt-10 text-[15px] text-brand-mid">
          Tedaviye özel sorular için{" "}
          <Link href="/hizmetler" className="font-bold text-brand-link hover:text-brand-dark">
            tedavi sayfalarımıza
          </Link>{" "}
          göz atabilirsiniz; her tedavinin kendi soru-cevap bölümü vardır.
        </p>

        <MedicalDisclaimer className="mt-10" />

        <div className="mt-8">
          <ContactCTA
            title="Sorunuzun yanıtını bulamadınız mı?"
            description="WhatsApp'tan yazın ya da doğrudan arayın; sorunuzu hekimlerimize iletelim."
            message="Merhaba, bir sorum var:"
          />
        </div>
      </div>
    </main>
  );
}
