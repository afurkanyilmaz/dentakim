import { BUSINESS } from "@/lib/business";
import { Section, SectionHeader } from "@/components/shared/Section";

/**
 * Konum — çerçeveli büyük harita. Semt sayfaları görünür gezinmede yer
 * almaz; yalnızca footer'daki "Hizmet bölgeleri" bağlantısı, /bolgeler
 * dizini ve site haritası üzerinden taranır (yerel SEO).
 */
export function MapSection() {
  return (
    <Section id="konum" labelledBy="konum-baslik">
      <SectionHeader
        id="konum-baslik"
        eyebrow="Konum ve ulaşım"
        title="Küçükçekmece'nin merkezindeyiz"
      />

      <div className="mx-auto max-w-[1040px] rounded-[26px] border border-brand-line bg-brand-card p-3 shadow-[0_40px_90px_rgba(0,0,0,0.45)] sm:p-4">
        <div className="overflow-hidden rounded-[18px]">
          <iframe
            title={`${BUSINESS.brandName} Küçükçekmece harita — ${BUSINESS.address.street}`}
            src={BUSINESS.google.embedUrl}
            className="block h-[clamp(320px,42vw,520px)] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 px-3 pb-2 pt-5 sm:px-4">
          <div>
            <p className="font-heading text-[18px] font-bold tracking-[-0.02em] text-brand-light">
              {BUSINESS.displayName}
            </p>
            <p className="mt-1 text-[13.5px] text-brand-mid">{BUSINESS.address.full}</p>
          </div>
          <a
            href={BUSINESS.google.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-[12px] border border-white/20 px-5 text-[13px] font-extrabold text-brand-light transition-colors hover:border-brand-accent hover:text-brand-accent"
          >
            Yol tarifi al <span aria-hidden>↗</span>
          </a>
        </div>
      </div>

    </Section>
  );
}
