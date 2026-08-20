import Link from "next/link";
import { getFeaturedRegions, REGIONS } from "@/lib/regions";
import { Section, SectionHeader } from "@/components/shared/Section";
import { MapPin } from "lucide-react";

/**
 * Anasayfadan bölge sayfalarına iç bağlantı.
 * Bu bölüm eklenmeden önce 12 bölge sayfası sitede hiçbir yerden link almıyordu.
 */
export function RegionsSection() {
  const featured = getFeaturedRegions();
  const others = REGIONS.filter((r) => !r.featured);

  return (
    <Section labelledBy="bolgeler-baslik">
      <SectionHeader
        id="bolgeler-baslik"
        eyebrow="Hizmet Bölgelerimiz"
        title="Küçükçekmece ve çevresinden kolay ulaşım"
        lead="Bölgenize özel ulaşım bilgisi, sık uygulanan tedaviler ve randevu önerileri için bölge sayfamıza göz atın."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((region) => (
          <Link
            key={region.slug}
            href={`/${region.slug}`}
            className="group flex flex-col gap-2.5 rounded-card border border-brand-line bg-white p-[26px] transition-colors hover:border-brand-line-strong"
          >
            <MapPin className="size-5 text-brand-accent" aria-hidden />
            <span className="font-heading text-[24px] font-semibold leading-[1.2] text-brand-dark">
              {region.name}
            </span>
            <span className="text-[14px] leading-[1.6] text-brand-mid">
              {region.proximity}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] text-brand-mid">
        <span className="font-semibold text-brand-dark">Ayrıca:</span>
        {others.map((region, i) => (
          <span key={region.slug}>
            <Link
              href={`/${region.slug}`}
              className="text-brand-link transition-colors hover:text-brand-dark"
            >
              {region.name}
            </Link>
            {i < others.length - 1 ? <span className="text-brand-faint"> ·</span> : null}
          </span>
        ))}
      </div>

      <p className="mt-6">
        <Link href="/bolgeler" className="text-sm font-bold text-brand-link hover:text-brand-dark">
          Tüm hizmet bölgelerimiz →
        </Link>
      </p>
    </Section>
  );
}
