import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { DOCTORS, getDoctor } from "@/lib/doctors";
import { SERVICES } from "@/lib/constants";
import { BUSINESS } from "@/lib/business";
import { generateMeta } from "@/lib/seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { getBreadcrumbSchema, getDoctorSchema } from "@/lib/schema";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { ContactCTA } from "@/components/shared/ContactCTA";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return DOCTORS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const doctor = getDoctor(params.slug);
  if (!doctor) return {};
  // Başlık çalışma alanı + ilçe hedefler. Korunan ünvan ("uzman") belge
  // olmadan kullanılmaz; bkz. lib/doctors.ts CERTIFIED_TITLES.
  return generateMeta({
    title: `${doctor.name} — ${doctor.titleShort}, Küçükçekmece`,
    omitSuffix: true,
    description: doctor.summary,
    slug: `hekimler/${doctor.slug}`,
    image: doctor.photo ?? undefined,
  });
}

export default function HekimPage({ params }: Props) {
  const doctor = getDoctor(params.slug);
  if (!doctor) notFound();

  const url = `${BUSINESS.website}/hekimler/${doctor.slug}`;

  return (
    <main className="pb-16">
      <JsonLd data={getDoctorSchema(doctor)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Anasayfa", item: `${BUSINESS.website}/` },
          { name: "Hekimler", item: `${BUSINESS.website}/hekimler` },
          { name: doctor.name, item: url },
        ])}
      />

      <div className="border-b border-brand-line bg-brand-primary-light">
        <div className="container mx-auto max-w-[1240px] px-6 py-12">
          <BreadcrumbNav
            items={[
              { label: "Anasayfa", href: "/" },
              { label: "Hekimler", href: "/hekimler" },
              { label: doctor.name },
            ]}
          />
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
            {doctor.photo ? (
              <Image
                src={doctor.photo}
                alt={`${doctor.name} — ${doctor.title}`}
                width={160}
                height={160}
                className="size-40 rounded-card border border-border/70 object-cover object-top"
                priority
              />
            ) : (
              <div className="flex size-40 items-center justify-center rounded-card border border-dashed border-border bg-card text-center text-xs text-brand-mid">
                Profil fotoğrafı
                <br />
                bekleniyor
              </div>
            )}
            <div>
              <h1 className="font-heading text-[clamp(32px,4.6vw,50px)] font-medium leading-[1.12] text-brand-dark [text-wrap:pretty]">
                {doctor.name}
              </h1>
              <p className="mt-3 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                {doctor.specialization}
              </p>
              <p className="mt-4 max-w-2xl text-brand-mid">{doctor.summary}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1240px] px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_min(100%,380px)] lg:items-start">
          <article className="min-w-0 space-y-8">
            {doctor.bio.length > 0 ? (
              <div className="prose prose-neutral max-w-none text-brand-mid">
                {doctor.bio.map((p, i) => (
                  <p key={i} className="mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ) : null}

            {doctor.focusAreas.length > 0 ? (
              <section aria-labelledby="ilgi-alanlari">
                <h2
                  id="ilgi-alanlari"
                  className="font-heading text-xl font-bold text-brand-dark"
                >
                  İlgi alanları
                </h2>
                <ul className="mt-4 space-y-2 text-brand-mid">
                  {doctor.focusAreas.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {doctor.education.length > 0 ? (
              <section aria-labelledby="egitim">
                <h2 id="egitim" className="font-heading text-xl font-bold text-brand-dark">
                  Eğitim
                </h2>
                <ul className="mt-4 space-y-2 text-brand-mid">
                  {doctor.education.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {doctor.pending.length > 0 ? (
              <section
                aria-labelledby="icerik-bekleniyor"
                className="rounded-card border border-dashed border-border bg-card p-6"
              >
                <h2
                  id="icerik-bekleniyor"
                  className="font-heading text-sm font-bold uppercase tracking-wide text-brand-mid"
                >
                  [NEEDS_CONTENT] — klinikten bekleniyor
                </h2>
                <ul className="mt-3 space-y-1 text-sm text-brand-mid">
                  {doctor.pending.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-brand-mid">
                  Bu blok yalnızca içerik tamamlanana kadar görünür; bilgiler geldiğinde
                  kaldırılır. Doğrulanmamış hiçbir bilgi uydurulmamıştır.
                </p>
              </section>
            ) : null}

            {doctor.serviceSlugs.length > 0 ? (
              <section aria-labelledby="uyguladigi-tedaviler">
                <h2
                  id="uyguladigi-tedaviler"
                  className="font-heading text-[clamp(24px,3.2vw,32px)] font-semibold leading-[1.25] text-brand-dark"
                >
                  Uyguladığı tedaviler
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {doctor.serviceSlugs.map((slug) => {
                    const service = SERVICES.find((x) => x.slug === slug);
                    if (!service) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/hizmetler/${slug}`}
                        className="flex flex-col gap-1 rounded-panel border border-brand-line bg-white p-5 transition-colors hover:border-brand-line-strong"
                      >
                        <span className="font-heading text-[20px] font-semibold text-brand-dark">
                          {service.title}
                        </span>
                        <span className="text-[14px] text-brand-mid">{service.desc}</span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ) : null}

            <p className="text-sm text-brand-mid">
              Tüm tedaviler için{" "}
              <Link href="/hizmetler" className="font-medium text-brand-primary underline">
                hizmetler sayfamıza
              </Link>{" "}
              göz atabilirsiniz.
            </p>
          </article>

          <aside className="lg:sticky lg:top-24">
            <ContactCTA
              variant="panel"
              title={`${doctor.name} ile görüşün`}
              description="WhatsApp'tan yazın, uygun gün ve saati birlikte belirleyelim."
              message={`Merhaba, ${doctor.name} ile randevu oluşturmak istiyorum.`}
            />
          </aside>
        </div>
      </div>
    </main>
  );
}
