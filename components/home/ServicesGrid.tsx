import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { getServiceIcon } from "@/lib/service-icons";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Section, SectionHeader, Card } from "@/components/shared/Section";

/** Öne çıkarılan tedavi — ızgarada iki sütun kaplar. */
const FEATURED_SLUG = "implant-tedavisi";

export function ServicesGrid() {
  const featured = SERVICES.find((s) => s.slug === FEATURED_SLUG);
  const rest = SERVICES.filter((s) => s.slug !== FEATURED_SLUG);
  const FeaturedIcon = featured ? getServiceIcon(featured.icon) : null;

  return (
    <Section tone="white" id="tedaviler" labelledBy="tedaviler-baslik">
      <SectionHeader
        id="tedaviler-baslik"
        eyebrow="Tedavilerimiz"
        title="Size Özel Planlanan Tedaviler"
        lead="Küçükçekmece'deki kliniğimizde implanttan estetik diş hekimliğine kadar geniş bir tedavi yelpazesi sunuyoruz."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured && FeaturedIcon ? (
          <Card as="article" className="group sm:col-span-2">
            <div className="flex flex-1 flex-col gap-4 p-9">
              <span className="inline-flex size-14 items-center justify-center rounded-panel bg-brand-primary-light text-brand-accent">
                <FeaturedIcon className="size-7" aria-hidden />
              </span>
              <h3 className="font-heading text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.15] text-brand-dark">
                {featured.title}
              </h3>
              <p className="max-w-[46ch] text-[16.5px] leading-[1.7] text-brand-mid">
                Eksik dişlerin kalıcı olarak tamamlanması. Cerrahi fazı ağız-diş-çene
                cerrahımız, protez fazı protez alanında çalışan hekimimiz yürütür;
                iki aşama aynı takvimde planlanır.
              </p>
              <Link
                href={`/hizmetler/${featured.slug}`}
                className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[15px] font-bold text-brand-link transition-colors group-hover:text-brand-dark"
              >
                İmplant tedavisini inceleyin
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </Card>
        ) : null}

        {rest.map((s) => (
          <ServiceCard
            key={s.slug}
            href={`/hizmetler/${s.slug}`}
            title={s.title}
            description={s.desc}
            Icon={getServiceIcon(s.icon)}
          />
        ))}
      </div>
    </Section>
  );
}
