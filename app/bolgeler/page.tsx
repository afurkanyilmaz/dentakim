import type { Metadata } from "next";
import Link from "next/link";
import { REGIONS, GROUP_LABEL, getRegionsByGroup } from "@/lib/regions";
import { GEO_BY_SLUG } from "@/lib/geo-content";
import { BUSINESS } from "@/lib/business";
import { generateMeta } from "@/lib/seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { getBreadcrumbSchema, getRegionPageSchema } from "@/lib/schema";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { MapPin } from "lucide-react";

export const metadata: Metadata = generateMeta({
  title: "Hizmet Bölgelerimiz — Küçükçekmece ve Çevresi",
  description:
    "Dentakim'e Küçükçekmece, Halkalı, Sefaköy, Atakent, Avcılar, Bağcılar, Esenyurt ve çevresinden ulaşım. Bölgenizden kliniğe nasıl geleceğinizi öğrenin.",
  slug: "bolgeler",
});

const GROUPS = ["ilce-ici", "cevre-ilce"] as const;

export default function BolgelerPage() {
  return (
    <main className="pb-16">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Anasayfa", item: `${BUSINESS.website}/` },
          { name: "Bölgeler", item: `${BUSINESS.website}/bolgeler` },
        ])}
      />
      <JsonLd
        data={getRegionPageSchema({
          name: "Hizmet Bölgelerimiz — Küçükçekmece ve Çevresi",
          areaServed: REGIONS.map((r) => r.name),
          description:
            "Küçükçekmece Fevzi Çakmak Mahallesi'ndeki Dentakim Ağız ve Diş Sağlığı Polikliniği, Küçükçekmece ve çevre ilçelerden gelen hastalara hizmet vermektedir.",
          url: `${BUSINESS.website}/bolgeler`,
        })}
      />

      <div className="border-b border-brand-line bg-brand-primary-light">
        <div className="container mx-auto max-w-[1240px] px-6 py-12">
          <BreadcrumbNav items={[{ label: "Anasayfa", href: "/" }, { label: "Bölgeler" }]} />
          <p className="mt-6 text-[12.5px] font-bold uppercase tracking-[0.16em] text-brand-accent">
            Hizmet Bölgelerimiz
          </p>
          <h1 className="mt-3 font-heading text-[clamp(32px,4.6vw,50px)] font-medium leading-[1.12] text-brand-dark [text-wrap:pretty]">
            Küçükçekmece ve çevresinden Dentakim&apos;e ulaşım
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid [text-wrap:pretty]">
            Kliniğimiz {BUSINESS.address.street} adresindedir. Aşağıdaki bölgelerden gelen
            hastalarımız için ulaşım bilgilerini, en sık uygulanan tedavileri ve randevu
            önerilerini ayrı ayrı hazırladık.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-[1240px] px-6 py-14">
        {GROUPS.map((group) => {
          const regions = getRegionsByGroup(group);
          if (!regions.length) return null;

          return (
            <section key={group} className="mb-14 last:mb-0" aria-labelledby={`grup-${group}`}>
              <h2
                id={`grup-${group}`}
                className="mb-8 font-heading text-[clamp(26px,3.4vw,36px)] font-semibold leading-[1.2] text-brand-dark"
              >
                {GROUP_LABEL[group]}
              </h2>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {regions.map((region) => {
                  const content = GEO_BY_SLUG[region.slug];
                  return (
                    <Link
                      key={region.slug}
                      href={`/${region.slug}`}
                      className="group flex flex-col gap-3 rounded-card border border-brand-line bg-white p-[26px] transition-colors hover:border-brand-line-strong"
                    >
                      <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                        <MapPin className="size-4" aria-hidden />
                        {region.proximity}
                      </span>
                      <span className="font-heading text-[26px] font-semibold leading-[1.2] text-brand-dark">
                        {region.name}
                      </span>
                      {content ? (
                        <span className="text-[14.5px] leading-[1.6] text-brand-mid">
                          {content.areaServed.slice(0, 4).join(" · ")}
                        </span>
                      ) : null}
                      <span className="mt-auto pt-2 text-sm font-bold text-brand-link transition-colors group-hover:text-brand-dark">
                        Bölge sayfasına git →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}

        <div className="mt-14">
          <ContactCTA
            title="Bölgenizden nasıl geleceğinizi soralım mı?"
            description="Randevu saatinizden önce WhatsApp'tan yazın; size en uygun ulaşım rotasını ve saati birlikte belirleyelim."
            message="Merhaba, kliniğe ulaşım hakkında bilgi almak istiyorum."
          />
        </div>
      </div>
    </main>
  );
}
