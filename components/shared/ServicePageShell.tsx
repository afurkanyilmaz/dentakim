import Link from "next/link";
import { SERVICES, WHATSAPP_URL } from "@/lib/constants";
import { BUSINESS } from "@/lib/business";
import { getServiceIcon } from "@/lib/service-icons";
import type { ServicePageContent } from "@/lib/service-pages";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { MedicalDisclaimer } from "@/components/shared/MedicalDisclaimer";
import { ImplantBrands } from "@/components/shared/ImplantBrands";
import Image from "next/image";
import { getDoctorsForService } from "@/lib/doctors";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  getBreadcrumbSchema,
  getFAQPageSchema,
  getMedicalWebPageSchema,
} from "@/lib/schema";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export function ServicePageShell({ content }: { content: ServicePageContent }) {
  const doctors = getDoctorsForService(content.slug);
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

      <div className="border-b border-brand-line bg-brand-primary-light">
        <div className="container mx-auto max-w-[1240px] px-6 py-10">
          <BreadcrumbNav
            items={[
              { label: "Anasayfa", href: "/" },
              { label: "Hizmetler", href: "/hizmetler" },
              { label: content.h1.replace(/^Küçükçekmece\s+/, "") },
            ]}
          />
          <h1 className="mt-5 font-heading text-[clamp(32px,4.6vw,50px)] font-medium leading-[1.12] text-brand-dark [text-wrap:pretty]">
            {content.h1}
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid [text-wrap:pretty]">{content.lead}</p>
        </div>
      </div>

      <div className="container mx-auto max-w-[1240px] px-6 py-14">
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
                className="font-heading text-[26px] font-semibold leading-[1.22] text-brand-dark"
              >
                Tedavi süreci
              </h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-brand-mid marker:font-semibold marker:text-brand-primary">
                {content.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </section>

            {content.slug === "implant-tedavisi" ? <ImplantBrands /> : null}

            <MedicalDisclaimer />

            <section aria-labelledby="sss-baslik">
              <h2
                id="sss-baslik"
                className="font-heading text-[26px] font-semibold leading-[1.22] text-brand-dark"
              >
                Sık sorulan sorular
              </h2>
              <div className="mt-4">
                <FAQAccordion items={content.faqs} />
              </div>
            </section>

            <div className="rounded-card border border-brand-primary/25 bg-brand-primary-light/60 p-6">
              <h3 className="font-heading text-[22px] font-semibold text-brand-dark">
                Ön Görüşme
              </h3>
              <p className="mt-2 text-sm text-brand-mid">
                {BUSINESS.brandName} ekibi, ihtiyacınızı dinleyerek size özel bir
                yol haritası çıkarır. Hemen arayın veya WhatsApp üzerinden yazın.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={BUSINESS.phone.href}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "bg-brand-accent text-brand-dark hover:bg-brand-accent/90"
                  )}
                >
                  {BUSINESS.phone.display}
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

            {doctors.length > 0 ? (
              <section aria-labelledby="hekim-baslik">
                <h2
                  id="hekim-baslik"
                  className="font-heading text-[clamp(24px,3.2vw,32px)] font-semibold leading-[1.25] text-brand-dark"
                >
                  Bu tedaviyi uygulayan hekimlerimiz
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {doctors.map((doctor) => (
                    <Link
                      key={doctor.slug}
                      href={`/hekimler/${doctor.slug}`}
                      className="flex items-center gap-4 rounded-panel border border-brand-line bg-white p-4 transition-colors hover:border-brand-line-strong"
                    >
                      {doctor.photo ? (
                        <Image
                          src={doctor.photo}
                          alt={`${doctor.name} — ${doctor.title}`}
                          width={64}
                          height={64}
                          className="size-16 shrink-0 rounded-full object-cover object-top"
                        />
                      ) : null}
                      <span className="min-w-0">
                        <span className="block font-heading text-[20px] font-semibold text-brand-dark">
                          {doctor.name}
                        </span>
                        <span className="block text-[13px] text-brand-mid">
                          {doctor.specialization}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            <section aria-labelledby="ilgili-baslik">
              <h2
                id="ilgili-baslik"
                className="font-heading text-[26px] font-semibold leading-[1.22] text-brand-dark"
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
            <ContactCTA
              variant="panel"
              title={`${content.h1} hakkında bilgi alın`}
              description="Muayene sonrası size özel, yazılı tedavi planı ve fiyat teklifi sunuyoruz. İlk muayene muayene sonrasında yapılır."
              message={`Merhaba, ${content.h1} hakkında bilgi almak istiyorum.`}
            />
          </aside>
        </div>
      </div>
    </>
  );
}
