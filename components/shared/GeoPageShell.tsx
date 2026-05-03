import Link from "next/link";
import { CLINIC, SERVICES } from "@/lib/constants";
import type { GeoPageDef } from "@/lib/geo-content";
import { GEO_BY_SLUG } from "@/lib/geo-content";
import { getServiceIcon } from "@/lib/service-icons";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { JsonLd } from "@/components/shared/JsonLd";
import { getLocalBusinessAreaServedSchema, getBreadcrumbSchema } from "@/lib/schema";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/constants";

export function GeoPageShell({ geo }: { geo: GeoPageDef }) {
  const nearby = (geo.nearbySlugs || [])
    .map((s) => GEO_BY_SLUG[s])
    .filter(Boolean);

  const schema = getLocalBusinessAreaServedSchema({
    areaServed: geo.areaServed,
    description: geo.metaDescription,
    url: `https://dentakim.com/${geo.slug}`,
  });
  const crumbs = getBreadcrumbSchema([
    { name: "Anasayfa", item: "https://dentakim.com/" },
    { name: geo.h1.split("|")[0].trim(), item: `https://dentakim.com/${geo.slug}` },
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={crumbs} />

      <div className="border-b border-border/60 bg-brand-primary-light/40">
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <BreadcrumbNav
            items={[
              { label: "Anasayfa", href: "/" },
              { label: geo.h1.replace(/\s*\|\s*Dentakim\s*$/, "") },
            ]}
          />
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            {geo.h1}
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-brand-mid">{geo.intro}</p>
        </div>
      </div>

      <article className="container mx-auto max-w-6xl px-4 py-12">
        <div className="prose prose-neutral max-w-none text-brand-mid prose-p:leading-relaxed">
          {geo.paragraphs.map((p, i) => (
            <p key={i} className="mb-4">
              {p}
            </p>
          ))}
        </div>

        <section className="mt-12" aria-labelledby="geo-hizmetler">
          <h2 id="geo-hizmetler" className="font-heading text-2xl font-bold text-brand-dark">
            Hizmetlerimiz
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

        <section className="mt-14" aria-labelledby="geo-ulasim">
          <h2 id="geo-ulasim" className="font-heading text-2xl font-bold text-brand-dark">
            Ulaşım
          </h2>
          <p className="mt-3 text-brand-mid">{geo.transportNote}</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border/70 shadow-sm">
            <iframe
              title={`Dentakim harita — ${geo.h1}`}
              src={CLINIC.googleMapsEmbed}
              className="h-[320px] w-full md:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {nearby.length > 0 && (
          <section className="mt-14" aria-labelledby="geo-yakin-bolgeler">
            <h2
              id="geo-yakin-bolgeler"
              className="font-heading text-2xl font-bold text-brand-dark"
            >
              Yakın bölgeler
            </h2>
            <p className="mt-3 text-brand-mid">
              Aynı bölgede hizmet verdiğimiz yakındaki sayfalara da göz atın.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/${n.slug}`}
                  className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-colors hover:bg-brand-primary-light/40"
                >
                  <p className="font-heading font-semibold text-brand-dark">
                    {n.h1}
                  </p>
                  <p className="mt-1 text-sm text-brand-mid">{n.metaDescription}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 flex flex-wrap gap-3 rounded-2xl border border-brand-primary/25 bg-brand-primary-light/50 p-6">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "outline" }), "border-brand-primary")}
          >
            Ana sayfa
          </Link>
          <Link
            href="/iletisim"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-brand-accent text-brand-dark hover:bg-brand-accent/90"
            )}
          >
            İletişim
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            WhatsApp
          </a>
        </div>
      </article>
    </>
  );
}
