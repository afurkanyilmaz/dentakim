import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/business";
import { SERVICES } from "@/lib/constants";
import { DOCTORS } from "@/lib/doctors";
import type { GeoPageDef } from "@/lib/geo-content";
import { GEO_BY_SLUG } from "@/lib/geo-content";
import { getRegion } from "@/lib/regions";
import { getServiceIcon } from "@/lib/service-icons";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  getBreadcrumbSchema,
  getFAQPageSchema,
  getRegionPageSchema,
} from "@/lib/schema";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { MedicalDisclaimer } from "@/components/shared/MedicalDisclaimer";

/**
 * Bölge sayfası kabuğu.
 *
 * Her bölge için SSS, hekim kadrosu ve ulaşım bilgisi gösterilir. SSS
 * cevapları bölgenin kendi ulaşım notundan üretildiği için sayfalar arasında
 * kopya içerik oluşmaz.
 */
export function GeoPageShell({ geo }: { geo: GeoPageDef }) {
  const region = getRegion(geo.slug);
  const regionName = region?.name ?? geo.h1.replace(/\s*\|\s*Dentakim\s*$/, "");
  const url = `${BUSINESS.website}/${geo.slug}`;

  const nearby = (geo.nearbySlugs || []).map((s) => GEO_BY_SLUG[s]).filter(Boolean);

  const faqs = [
    {
      question: `Dentakim ${regionName}'de mi bulunuyor?`,
      answer: `Kliniğimiz ${BUSINESS.address.full} adresindedir. ${regionName} bölgesinde ayrı bir şubemiz bulunmamaktadır; bu bölgeden gelen hastalarımızı Küçükçekmece'deki kliniğimizde ağırlıyoruz. ${region?.proximity ? region.proximity + "." : ""}`,
    },
    {
      question: `${regionName}'den kliniğe nasıl ulaşırım?`,
      answer: geo.transportNote,
    },
    {
      question: "Randevu nasıl alınır, ilk muayene ücretli mi?",
      answer: `En hızlı yol WhatsApp: ${BUSINESS.phone.display} numarasına yazın, aynı gün içinde dönüş yapalım. İlk muayene ve tedavi planlaması muayene sonrasında yapılır; muayene sonrası size yazılı bir fiyat teklifi sunulur.`,
    },
    {
      question: "Hafta sonu açık mısınız?",
      answer: `Cumartesi günleri ${BUSINESS.hours.saturday.opens} – ${BUSINESS.hours.saturday.closes} saatleri arasında hizmet veriyoruz. Hafta içi ${BUSINESS.hours.weekdays.opens} – ${BUSINESS.hours.weekdays.closes} arası açığız, pazar günü kapalıyız.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={getRegionPageSchema({
          name: geo.h1,
          areaServed: geo.areaServed,
          description: geo.metaDescription,
          url,
        })}
      />
      <JsonLd data={getFAQPageSchema(faqs)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Anasayfa", item: `${BUSINESS.website}/` },
          { name: "Bölgeler", item: `${BUSINESS.website}/bolgeler` },
          { name: regionName, item: url },
        ])}
      />

      <div className="border-b border-brand-line bg-brand-primary-light">
        <div className="container mx-auto max-w-[1240px] px-6 py-12">
          <BreadcrumbNav
            items={[
              { label: "Anasayfa", href: "/" },
              { label: "Bölgeler", href: "/bolgeler" },
              { label: regionName },
            ]}
          />
          <h1 className="mt-5 font-heading text-[clamp(32px,4.6vw,50px)] font-medium leading-[1.12] text-brand-dark [text-wrap:pretty]">
            {geo.h1}
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid [text-wrap:pretty]">
            {geo.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(
                `Merhaba, ${regionName}'den yazıyorum. Randevu almak istiyorum.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-full bg-brand-whatsapp px-7 text-[15px] font-bold text-white transition-colors hover:bg-brand-whatsapp-dark"
            >
              WhatsApp&apos;tan Randevu
            </a>
            <a
              href={BUSINESS.phone.href}
              className="inline-flex min-h-12 items-center rounded-full border border-brand-line-strong px-7 text-[15px] font-semibold text-brand-dark transition-colors hover:border-brand-dark"
            >
              Hemen Ara · {BUSINESS.phone.display}
            </a>
          </div>
        </div>
      </div>

      <article className="container mx-auto max-w-[1240px] px-6 py-14">
        <div className="flex max-w-[880px] flex-col gap-5">
          {geo.paragraphs.map((p, i) => (
            <p key={i} className="text-[17px] leading-[1.78] text-brand-mid [text-wrap:pretty]">
              {p}
            </p>
          ))}
        </div>

        {/* Hekim kadrosu */}
        <section className="mt-14" aria-labelledby="geo-hekimler">
          <h2
            id="geo-hekimler"
            className="font-heading text-[clamp(26px,3.4vw,36px)] font-semibold leading-[1.2] text-brand-dark"
          >
            Tedavinizi yapacak hekimler
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOCTORS.map((doctor) => (
              <Link
                key={doctor.slug}
                href={`/hekimler/${doctor.slug}`}
                className="flex items-center gap-4 rounded-panel border border-brand-line bg-white p-4 transition-colors hover:border-brand-line-strong"
              >
                {doctor.photo ? (
                  <Image
                    src={doctor.photo}
                    alt={`${doctor.name} — ${doctor.specialization}`}
                    width={64}
                    height={64}
                    className="size-16 shrink-0 rounded-full object-cover object-top"
                  />
                ) : (
                  <span className="size-16 shrink-0 rounded-full border border-dashed border-brand-line-strong bg-brand-primary-light" />
                )}
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

        {/* Tedaviler */}
        <section className="mt-14" aria-labelledby="geo-hizmetler">
          <h2
            id="geo-hizmetler"
            className="font-heading text-[clamp(26px,3.4vw,36px)] font-semibold leading-[1.2] text-brand-dark"
          >
            {regionName}&apos;den gelen hastalarımıza uyguladığımız tedaviler
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                title={s.title}
                description={s.desc}
                Icon={getServiceIcon(s.icon)}
              />
            ))}
          </div>
        </section>

        {/* Ulaşım + harita */}
        <section className="mt-14" aria-labelledby="geo-ulasim">
          <h2
            id="geo-ulasim"
            className="font-heading text-[clamp(26px,3.4vw,36px)] font-semibold leading-[1.2] text-brand-dark"
          >
            {regionName}&apos;den ulaşım
          </h2>
          <p className="mt-4 max-w-[880px] text-[17px] leading-[1.78] text-brand-mid">
            {geo.transportNote}
          </p>
          <p className="mt-3 text-[15px] text-brand-mid">
            <span className="font-semibold text-brand-dark">Adres:</span>{" "}
            {BUSINESS.address.full}
          </p>
          <div className="mt-6 overflow-hidden rounded-card border border-brand-line">
            <iframe
              title={`Dentakim harita — ${regionName}'den ulaşım`}
              src={BUSINESS.google.embedUrl}
              className="h-[320px] w-full md:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* SSS */}
        <section className="mt-14 max-w-[880px]" aria-labelledby="geo-sss">
          <h2
            id="geo-sss"
            className="mb-6 font-heading text-[clamp(26px,3.4vw,36px)] font-semibold leading-[1.2] text-brand-dark"
          >
            {regionName} için sık sorulan sorular
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* Yakın bölgeler */}
        {nearby.length > 0 ? (
          <section className="mt-14" aria-labelledby="geo-yakin">
            <h2
              id="geo-yakin"
              className="font-heading text-[clamp(26px,3.4vw,36px)] font-semibold leading-[1.2] text-brand-dark"
            >
              Yakın bölgeler
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/${n.slug}`}
                  className="rounded-panel border border-brand-line bg-white p-5 transition-colors hover:border-brand-line-strong"
                >
                  <p className="font-heading text-[20px] font-semibold text-brand-dark">
                    {getRegion(n.slug)?.name ?? n.h1}
                  </p>
                  <p className="mt-1 text-[14px] text-brand-mid">
                    {getRegion(n.slug)?.proximity}
                  </p>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-brand-mid">
              Tüm hizmet bölgelerimiz için{" "}
              <Link href="/bolgeler" className="font-bold text-brand-link hover:text-brand-dark">
                bölgeler sayfamıza
              </Link>{" "}
              göz atabilirsiniz.
            </p>
          </section>
        ) : (
          <p className="mt-14 text-sm text-brand-mid">
            Tüm hizmet bölgelerimiz için{" "}
            <Link href="/bolgeler" className="font-bold text-brand-link hover:text-brand-dark">
              bölgeler sayfamıza
            </Link>{" "}
            göz atabilirsiniz.
          </p>
        )}

        <MedicalDisclaimer className="mt-14 max-w-[880px]" />

        <div className="mt-10">
          <ContactCTA
            title={`${regionName}'den randevu oluşturun`}
            description="Durumunuza uygun tedavi ancak muayene sonrasında belirlenebilir. WhatsApp'tan yazabilir veya telefonla ulaşabilirsiniz."
            message={`Merhaba, ${regionName}'den yazıyorum. Randevu almak istiyorum.`}
          />
        </div>
      </article>
    </>
  );
}
