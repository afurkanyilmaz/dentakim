import Link from "next/link";
import { Plus } from "lucide-react";
import { HOME_FAQ } from "@/lib/faq";
import { Section, SectionHeader } from "@/components/shared/Section";

/**
 * Anasayfa SSS özeti.
 *
 * Yerel <details> kullanılır: yanıtlar sunucu HTML'inde her zaman bulunur
 * (arama motorları ve yapay zekâ tarayıcıları için okunabilir) ve istemci
 * tarafı JavaScript gerektirmez. FAQPage şeması yalnızca /sss sayfasında
 * yer alır; aynı soruların iki sayfada işaretlenmesi önlenir.
 */
const COUNT = 5;

export function HomeFAQ() {
  return (
    <Section tone="white" labelledBy="sss-baslik">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div>
          <SectionHeader
            id="sss-baslik"
            eyebrow="Sık Sorulan Sorular"
            title="Tedavi öncesi merak edilenler"
            lead="Yanıtlar genel bilgilendirme amaçlıdır; size uygun tedavi muayene sonrasında hekim tarafından belirlenir."
          />
          <Link
            href="/sss"
            className="-mt-6 inline-flex text-[14.5px] font-bold text-brand-link transition-colors hover:text-brand-dark"
          >
            Tüm soruları görün →
          </Link>
        </div>

        <div className="border-t border-brand-line">
          {HOME_FAQ.slice(0, COUNT).map((item) => (
            <details key={item.question} className="group border-b border-brand-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left font-heading text-[clamp(20px,2.2vw,24px)] font-semibold leading-[1.3] text-brand-dark marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  className="mt-1 size-5 shrink-0 text-brand-accent transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  aria-hidden
                />
              </summary>
              <p className="max-w-[62ch] pb-7 text-[15.5px] leading-[1.75] text-brand-mid">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
