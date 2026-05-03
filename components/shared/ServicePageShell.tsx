import Link from "next/link";
import { CLINIC, SERVICES, WHATSAPP_URL } from "@/lib/constants";
import { getServiceIcon } from "@/lib/service-icons";
import type { ServicePageContent } from "@/lib/service-pages";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { AppointmentForm } from "@/components/shared/AppointmentForm";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  getBreadcrumbSchema,
  getFAQPageSchema,
  getMedicalWebPageSchema,
} from "@/lib/schema";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export function ServicePageShell({ content }: { content: ServicePageContent }) {
  const related = content.relatedSlugOrder
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean) as (typeof SERVICES)[number][];

  const faqSchema = getFAQPageSchema(content.faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Anasayfa", item: "https://dentakim.com/" },
    { name: "Hizmetler", item: "https://dentakim.com/hizmetler" },
    {
      name: content.h1,
      item: `https://dentakim.com/hizmetler/${content.slug}`,
    },
  ]);
  const medicalSchema = getMedicalWebPageSchema({
    name: content.metaTitle,
    description: content.metaDescription,
    url: `https://dentakim.com/hizmetler/${content.slug}`,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={medicalSchema} />

      <div className="border-b border-border/60 bg-brand-primary-light/40">
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <BreadcrumbNav
            items={[
              { label: "Anasayfa", href: "/" },
              { label: "Hizmetler", href: "/hizmetler" },
              { label: content.h1.replace(/^Küçükçekmece\s+/, "") },
            ]}
          />
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            {content.h1}
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-brand-mid">{content.lead}</p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_min(100%,380px)] lg:items-start">
          <article className="min-w-0 space-y-8">
            <div className="prose prose-neutral max-w-none text-brand-mid prose-p:leading-relaxed">
              {content.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>

            <section aria-labelledby="surec-baslik">
              <h2
                id="surec-baslik"
                className="font-heading text-xl font-bold text-brand-dark"
              >
                Tedavi süreci
              </h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-brand-mid marker:font-semibold marker:text-brand-primary">
                {content.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="sss-baslik">
              <h2
                id="sss-baslik"
                className="font-heading text-xl font-bold text-brand-dark"
              >
                Sık sorulan sorular
              </h2>
              <div className="mt-4">
                <FAQAccordion items={content.faqs} />
              </div>
            </section>

            <div className="rounded-2xl border border-brand-primary/25 bg-brand-primary-light/60 p-6">
              <h3 className="font-heading text-lg font-bold text-brand-dark">
                Ücretsiz Konsültasyon
              </h3>
              <p className="mt-2 text-sm text-brand-mid">
                {CLINIC.shortName} ekibi, ihtiyacınızı dinleyerek size özel bir
                yol haritası çıkarır. Hemen arayın veya WhatsApp üzerinden yazın.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:${CLINIC.phoneRaw}`}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "bg-brand-accent text-brand-dark hover:bg-brand-accent/90"
                  )}
                >
                  {CLINIC.phone}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "border-brand-primary text-brand-primary"
                  )}
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <section aria-labelledby="ilgili-baslik">
              <h2
                id="ilgili-baslik"
                className="font-heading text-xl font-bold text-brand-dark"
              >
                İlgili hizmetler
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map((s) => (
                  <ServiceCard
                    key={s.slug}
                    href={`/hizmetler/${s.slug}`}
                    title={s.title}
                    description={s.desc}
                    Icon={getServiceIcon(s.icon)}
                  />
                ))}
              </div>
              <p className="mt-6 text-sm text-brand-mid">
                Tüm hizmetler için{" "}
                <Link href="/hizmetler" className="font-medium text-brand-primary underline">
                  hizmetler sayfamıza
                </Link>{" "}
                göz atın.
              </p>
            </section>
          </article>

          <aside className="lg:sticky lg:top-24">
            <AppointmentForm defaultServiceSlug={content.slug} />
          </aside>
        </div>
      </div>
    </>
  );
}
