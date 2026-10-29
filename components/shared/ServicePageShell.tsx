import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, ClipboardList, MapPin, Stethoscope } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { BUSINESS } from "@/lib/business";
import type { ServicePageContent } from "@/lib/service-pages";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { MedicalDisclaimer } from "@/components/shared/MedicalDisclaimer";
import { ImplantBrands } from "@/components/shared/ImplantBrands";
import { TREATMENT_BLURBS, TreatmentCard } from "@/components/shared/TreatmentCard";
import { getDoctorsForService } from "@/lib/doctors";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  getBreadcrumbSchema,
  getFAQPageSchema,
  getMedicalProcedureSchema,
  getMedicalWebPageSchema,
  procedureId,
} from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/blog";
import { TREATMENT_PHOTOS } from "@/lib/stock-photos";
import { formatPostDate } from "@/components/shared/BlogCard";

/** Tedavi sayfası içeriklerinin son gözden geçirilme tarihi. */
const CONTENT_UPDATED = "2026-10-29";

const TOC = [
  { id: "kisaca", label: "Kısaca" },
  { id: "genel-bilgi", label: "Genel bilgi" },
  { id: "surec-baslik", label: "Tedavi süreci" },
  { id: "sss-baslik", label: "Sık sorulan sorular" },
  { id: "hekim-baslik", label: "Hekimlerimiz" },
  { id: "rehber-baslik", label: "Rehber yazılar" },
  { id: "ilgili-baslik", label: "İlgili tedaviler" },
];

const BLOCK = "rounded-[22px] border border-brand-line bg-brand-card p-6 sm:p-8";
const H2 = "font-heading text-[clamp(24px,2.4vw,30px)] font-bold leading-[1.15] tracking-[-0.03em] text-brand-light";

/**
 * Tedavi sayfası şablonu — kompakt hero + bilgi şeridi, solda yapışkan
 * içindekiler ve iletişim kartı, sağda kart düzeninde içerik.
 */
export function ServicePageShell({ content }: { content: ServicePageContent }) {
  const doctors = getDoctorsForService(content.slug);
  const related = content.relatedSlugOrder
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean) as (typeof SERVICES)[number][];
  const shortTitle = content.h1.replace(/^Küçükçekmece\s+/, "");
  const url = `${BUSINESS.website}/hizmetler/${content.slug}`;
  const heroPhoto = TREATMENT_PHOTOS[content.slug] ?? {
    src: "/images/klinik/tedavi-odasi-1.jpg",
    alt: "Dentakim tedavi odası",
  };

  const guides = (content.guideSlugs ?? [])
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter(Boolean) as typeof BLOG_POSTS;
  const toc = TOC.filter(
    (t) =>
      (t.id !== "hekim-baslik" || doctors.length > 0) &&
      (t.id !== "rehber-baslik" || guides.length > 0) &&
      (t.id !== "kisaca" || content.summary)
  );

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Anasayfa", item: `${BUSINESS.website}/` },
          { name: "Hizmetler", item: `${BUSINESS.website}/hizmetler` },
          { name: content.h1, item: url },
        ])}
      />
      <JsonLd data={getFAQPageSchema(content.faqs)} />
      <JsonLd
        data={getMedicalWebPageSchema({
          name: content.metaTitle,
          description: content.metaDescription,
          url,
          procedureId: procedureId(content.slug),
          dateModified: CONTENT_UPDATED,
        })}
      />
      <JsonLd
        data={getMedicalProcedureSchema({
          slug: content.slug,
          name: shortTitle,
          description: content.summary ?? content.lead,
          alternateNames: content.alternateNames,
          procedureType: content.procedureType,
          steps: content.steps,
          doctors,
        })}
      />

      <div className="page-hero overflow-hidden">
        {/* Sağda tedavi görseli (temsili), sola doğru eriyerek */}
        <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            sizes="52vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#090C13_0%,rgba(9,12,19,0.75)_35%,rgba(9,12,19,0.15)_100%)]" />
          {TREATMENT_PHOTOS[content.slug] ? (
            <span className="absolute bottom-3 right-4 text-[10px] text-white/50">Temsili görsel</span>
          ) : null}
        </div>
        <div className="relative mx-auto max-w-[1304px] px-5 pb-[clamp(72px,7vw,120px)] pt-[clamp(40px,5vw,88px)] sm:px-8">
          <BreadcrumbNav
            items={[
              { label: "Anasayfa", href: "/" },
              { label: "Tedavilerimiz", href: "/hizmetler" },
              { label: shortTitle },
            ]}
          />
          <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-light">
            {BUSINESS.brandName} tedavileri
          </p>
          <h1 className="mt-3 max-w-[760px] font-heading text-[clamp(40px,5.4vw,72px)] font-bold leading-[1.0] tracking-display text-white">
            {content.h1}
          </h1>
          <p className="mt-6 max-w-[600px] text-[16px] leading-[1.75] text-white/75 sm:text-[17px]">
            {content.lead}
          </p>
        </div>
      </div>

      {/* Bilgi şeridi */}
      <div className="relative z-10 mx-auto -mt-12 max-w-[1304px] px-5 sm:px-8">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: ClipboardList, k: "Planlama", v: "Muayene sonrası yazılı plan" },
            {
              Icon: Stethoscope,
              k: "Hekim",
              v: doctors.length ? doctors.map((d) => d.name).join(", ") : "Klinik hekim kadrosu",
            },
            { Icon: MapPin, k: "Konum", v: `Sultan Murat Cd., ${BUSINESS.address.district}` },
            { Icon: CalendarCheck, k: "Randevu", v: "WhatsApp veya telefonla" },
          ].map(({ Icon, k, v }) => (
            <li
              key={k}
              className="flex items-center gap-4 rounded-[18px] border border-brand-line bg-[#0F1420]/95 px-5 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-white/[0.06] text-brand-accent">
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-[10.5px] font-extrabold uppercase tracking-[0.18em] text-brand-faint">
                  {k}
                </span>
                <span className="mt-0.5 block text-[13.5px] font-bold leading-snug text-brand-light">{v}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-[1304px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
          {/* Sol: içindekiler + iletişim */}
          <aside className="order-2 space-y-5 lg:sticky lg:top-[164px] lg:order-1 lg:self-start">
            <nav aria-label="Sayfa içeriği" className="hidden rounded-[22px] border border-brand-line bg-brand-card p-5 lg:block">
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-brand-faint">İçindekiler</p>
              <ol className="mt-4 space-y-1">
                {toc.map((t, i) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-[13px] font-bold text-brand-mid transition-colors hover:bg-white/[0.05] hover:text-brand-light"
                    >
                      <span className="text-[11px] text-brand-faint">{String(i + 1).padStart(2, "0")}</span>
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <ContactCTA
              variant="panel"
              title={`${shortTitle} için ön görüşme`}
              description="Muayene sonrası size özel, yazılı tedavi planı ve fiyat bilgisi paylaşılır."
              message={`Merhaba, ${content.h1} hakkında bilgi almak istiyorum.`}
            />
          </aside>

          {/* Sağ: içerik */}
          <article className="order-1 min-w-0 space-y-6 lg:order-2">
            {content.summary ? (
              <section
                id="kisaca"
                aria-labelledby="kisaca-baslik"
                className="rounded-[22px] border border-brand-accent/40 bg-[linear-gradient(160deg,#1A1B22,#11151F)] p-6 sm:p-8"
              >
                <h2 id="kisaca-baslik" className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-accent">
                  Kısaca: {shortTitle} nedir?
                </h2>
                <p className="mt-4 text-[17px] leading-[1.75] text-brand-light">{content.summary}</p>
                {content.facts?.length ? (
                  <dl className="mt-6 grid gap-px overflow-hidden rounded-[16px] border border-brand-line bg-brand-line sm:grid-cols-2">
                    {content.facts.map((f) => (
                      <div key={f.label} className="flex items-baseline justify-between gap-4 bg-[#121621] px-4 py-3">
                        <dt className="text-[12.5px] text-brand-mid">{f.label}</dt>
                        <dd className="text-right text-[13.5px] font-bold text-brand-light">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                <p className="mt-4 text-[12px] text-brand-faint">
                  Süreler genel bilgidir; size özel plan muayene sonrasında belirlenir. Son güncelleme:{" "}
                  <time dateTime={CONTENT_UPDATED}>{formatPostDate(CONTENT_UPDATED)}</time>
                </p>
              </section>
            ) : null}

            <section id="genel-bilgi" aria-label="Genel bilgi" className={BLOCK}>
              <div className="space-y-4 text-[15.5px] leading-[1.8] text-brand-mid">
                {content.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            <section aria-labelledby="surec-baslik" className={BLOCK}>
              <h2 id="surec-baslik" className={H2}>
                Tedavi süreci
              </h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                {content.steps.map((step, i) => (
                  <li key={i} className="rounded-[16px] border border-brand-line bg-white/[0.02] p-5">
                    <span className="font-heading text-[28px] font-extrabold leading-none tracking-[-0.04em] text-brand-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-[14px] leading-[1.65] text-brand-mid">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            {["implant-tedavisi", "all-on-4-implant", "all-on-6-implant", "hibrit-protez"].includes(content.slug) ? (
              <div className={BLOCK}>
                <ImplantBrands />
              </div>
            ) : null}

            <MedicalDisclaimer />

            <section aria-labelledby="sss-baslik" className={BLOCK}>
              <h2 id="sss-baslik" className={H2}>
                Sık sorulan sorular
              </h2>
              <div className="mt-6">
                <FAQAccordion items={content.faqs} />
              </div>
            </section>

            {doctors.length > 0 ? (
              <section aria-labelledby="hekim-baslik" className={BLOCK}>
                <h2 id="hekim-baslik" className={H2}>
                  Bu tedaviyi uygulayan hekimlerimiz
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {doctors.map((doctor) => (
                    <Link
                      key={doctor.slug}
                      href={`/hekimler/${doctor.slug}`}
                      className="flex items-center gap-4 rounded-[16px] border border-brand-line bg-white/[0.02] p-4 transition-colors hover:border-brand-line-strong"
                    >
                      {doctor.photo ? (
                        <Image
                          src={doctor.photo}
                          alt={`${doctor.name} — ${doctor.title}`}
                          width={64}
                          height={64}
                          className="size-16 shrink-0 rounded-[14px] object-cover object-top"
                        />
                      ) : null}
                      <span className="min-w-0">
                        <span className="block text-[11px] font-bold text-brand-accent">{doctor.specialization}</span>
                        <span className="mt-1 block font-heading text-[18px] font-bold tracking-[-0.02em] text-brand-light">
                          {doctor.name}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {guides.length > 0 ? (
              <section aria-labelledby="rehber-baslik" className={BLOCK}>
                <h2 id="rehber-baslik" className={H2}>
                  {shortTitle} hakkında rehber yazılar
                </h2>
                <ul className="mt-5 divide-y divide-brand-line">
                  {guides.map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/blog/${g.slug}`}
                        className="group flex items-center justify-between gap-4 py-4 text-[15px] font-bold text-brand-light transition-colors hover:text-brand-accent"
                      >
                        <span>
                          {g.title}
                          <span className="mt-1 block text-[12.5px] font-medium text-brand-mid">{g.excerpt}</span>
                        </span>
                        <span aria-hidden className="shrink-0 text-brand-accent">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section aria-labelledby="ilgili-baslik" className="pt-4">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 id="ilgili-baslik" className={H2}>
                  İlgili tedaviler
                </h2>
                <Link
                  href="/hizmetler"
                  className="border-b border-brand-line-strong pb-1 text-[12.5px] font-extrabold text-brand-light hover:text-brand-accent"
                >
                  Tüm Tedaviler ↗
                </Link>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {related.map((s, i) => (
                  <TreatmentCard
                    key={s.slug}
                    slug={s.slug}
                    title={s.title}
                    desc={TREATMENT_BLURBS[s.slug] ?? s.desc}
                    icon={s.icon}
                    index={i + 1}
                    compact
                  />
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
