import { Plus } from "lucide-react";

export type FAQItem = { question: string; answer: string };

/**
 * SSS listesi — yerel <details>/<summary>.
 *
 * Önceki istemci tarafı akordeon kapalı yanıtları HTML'e yazmıyordu;
 * yanıtlar yalnızca JSON-LD içinde kalıyordu. <details> ile her yanıt
 * sunucu HTML'inde bulunur (arama motorları ve yapay zekâ tarayıcıları
 * okuyabilir), JavaScript gerekmez ve klavyeyle erişilebilir.
 */
export function FAQAccordion({ items, defaultOpen = 0 }: { items: FAQItem[]; defaultOpen?: number }) {
  return (
    <div className="flex w-full flex-col gap-3">
      {items.map((item, index) => (
        <details
          key={item.question}
          open={index < defaultOpen}
          className="group overflow-hidden rounded-panel border border-brand-line bg-brand-surface open:border-brand-line-strong"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-5 px-[22px] py-[18px] text-left text-[15.5px] font-bold text-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-accent [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans text-[15.5px] font-bold leading-snug">{item.question}</h3>
            <Plus
              className="mt-0.5 size-5 shrink-0 text-brand-accent transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
              aria-hidden
            />
          </summary>
          <p className="px-[22px] pb-5 text-[14.5px] leading-[1.75] text-brand-mid">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
