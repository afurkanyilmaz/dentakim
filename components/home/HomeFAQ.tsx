import { HOME_FAQ } from "@/lib/faq";
import { ArrowLink, Section, SectionHeader } from "@/components/shared/Section";

/**
 * Anasayfa SSS — yatay kaydırılan soru kartları.
 *
 * Yanıtlar kart içinde açık durur: sunucu HTML'inde her zaman bulunur
 * (arama motorları ve yapay zekâ tarayıcıları için okunabilir) ve istemci
 * JavaScript'i gerektirmez. FAQPage şeması yalnızca /sss sayfasındadır.
 */
export function HomeFAQ() {
  return (
    <Section labelledBy="sss-baslik" className="overflow-hidden">
      <SectionHeader
        id="sss-baslik"
        eyebrow="Sık sorulan sorular"
        title="Tedavi öncesi merak edilenler."
        action={<ArrowLink href="/sss">Tüm Sorular</ArrowLink>}
      />

      <ul
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8"
        aria-label="Sık sorulan sorular"
      >
        {HOME_FAQ.map((item, i) => (
          <li
            key={item.question}
            className="flex w-[82%] shrink-0 snap-start flex-col rounded-[22px] border border-brand-line bg-brand-card p-6 sm:w-[320px]"
          >
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-brand-accent">
              S.{String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-heading text-[19px] font-bold leading-[1.3] tracking-[-0.02em] text-brand-light">
              {item.question}
            </h3>
            <p className="mt-3 text-[13.5px] leading-[1.65] text-brand-mid">{item.answer}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[12px] text-brand-faint">
        Yanıtlar genel bilgilendirme amaçlıdır; size uygun tedavi muayene sonrasında hekim tarafından belirlenir.
      </p>
    </Section>
  );
}
