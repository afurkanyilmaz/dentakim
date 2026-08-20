import Link from "next/link";
import { getRegionsByGroup, GROUP_LABEL } from "@/lib/regions";
import { Section, SectionHeader } from "@/components/shared/Section";

/**
 * Bölge bağlantıları — kart ızgarası yerine gruplu etiket düzeni.
 * 12 bölge sayfasının tamamına anasayfadan bağlantı verir.
 */
export function RegionsSection() {
  const groups = ["ilce-ici", "cevre-ilce"] as const;

  return (
    <Section labelledBy="bolgeler-baslik">
      <SectionHeader
        id="bolgeler-baslik"
        eyebrow="Hizmet Bölgelerimiz"
        title="Küçükçekmece ve çevresinden kolay ulaşım"
        lead="Bölgenize özel ulaşım bilgisi ve sık uygulanan tedaviler için bölge sayfasına göz atın."
      />

      <div className="flex flex-col gap-8">
        {groups.map((g) => (
          <div key={g}>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-brand-accent">
              {GROUP_LABEL[g]}
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {getRegionsByGroup(g).map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/${r.slug}`}
                    className="inline-block rounded-full border border-brand-line bg-white px-5 py-2.5 text-[15px] font-semibold text-brand-dark transition-colors hover:border-brand-line-strong hover:text-brand-accent"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8">
        <Link href="/bolgeler" className="text-sm font-bold text-brand-link hover:text-brand-dark">
          Tüm hizmet bölgeleri ve ulaşım bilgileri →
        </Link>
      </p>
    </Section>
  );
}
