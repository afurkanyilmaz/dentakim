import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { getServiceIcon } from "@/lib/service-icons";
import { Section, SectionHeader } from "@/components/shared/Section";

/** Öne çıkarılan tedavi — fotoğraflı geniş kart. */
const FEATURED_SLUG = "implant-tedavisi";

/**
 * Tedaviler — koyu lacivert zeminde fotoğraflı öne çıkan kart ve
 * numaralı tedavi listesi. Her kart tamamen tıklanabilir.
 */
export function ServicesGrid() {
  const featured = SERVICES.find((s) => s.slug === FEATURED_SLUG);
  const rest = SERVICES.filter((s) => s.slug !== FEATURED_SLUG);

  return (
    <Section tone="deep" id="tedaviler" labelledBy="tedaviler-baslik">
      <SectionHeader
        id="tedaviler-baslik"
        eyebrow="Tedavilerimiz"
        title="Size özel planlanan tedaviler"
        lead="İmplanttan zirkonyum kaplamaya, kanal tedavisinden çocuk diş hekimliğine kadar tüm tedaviler muayene sonrası yazılı planla başlar."
        onDeep
      />

      <div className="grid gap-5 lg:grid-cols-12">
        {featured ? (
          <Link
            href={`/hizmetler/${featured.slug}`}
            className="group relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-card border border-white/10 p-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent sm:p-10 lg:col-span-5 lg:row-span-2"
          >
            <Image
              src="/images/klinik/tedavi-odasi-1.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="-z-10 object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
            />
            <span
              aria-hidden
              className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-deep via-brand-deep/70 to-brand-deep/10"
            />
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-brand-accent">
              Öne çıkan tedavi
            </span>
            <h3 className="mt-3 font-heading text-[clamp(32px,3.6vw,42px)] font-semibold leading-[1.1] text-brand-surface">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-[44ch] text-[15.5px] leading-[1.7] text-[#C9D4DC]">
              Eksik dişlerin kalıcı olarak tamamlanması. Cerrahi fazı ağız-diş-çene
              cerrahımız, protez fazı protez alanında çalışan hekimimiz yürütür; iki
              aşama aynı takvimde planlanır.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-brand-surface">
              İmplant tedavisini inceleyin
              <ArrowRight
                className="size-4 text-brand-accent transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                aria-hidden
              />
            </span>
          </Link>
        ) : null}

        <ul className="grid gap-px overflow-hidden rounded-card border border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-7">
          {rest.map((s, i) => {
            const Icon = getServiceIcon(s.icon);
            return (
              <li key={s.slug} className="bg-brand-deep sm:last:odd:col-span-2">
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="group flex h-full flex-col gap-3 p-7 transition-colors hover:bg-white/[0.04] focus-visible:bg-white/[0.06] focus-visible:outline-none"
                >
                  <span className="flex items-center justify-between">
                    <Icon className="size-6 text-brand-accent" aria-hidden />
                    <span className="font-heading text-[15px] text-brand-on-deep" aria-hidden>
                      {String(i + 2).padStart(2, "0")}
                    </span>
                  </span>
                  <h3 className="mt-2 font-heading text-[24px] font-semibold leading-[1.2] text-brand-surface">
                    {s.title}
                  </h3>
                  <p className="flex-1 text-[14.5px] leading-[1.6] text-brand-on-deep">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-brand-accent">
                    Detaylar
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/hizmetler"
          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-7 text-[14.5px] font-semibold text-brand-surface transition-colors hover:border-brand-accent hover:text-brand-accent"
        >
          Tüm tedaviler
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
