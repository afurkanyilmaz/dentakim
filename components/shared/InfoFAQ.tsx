import { FAQAccordion, type FAQItem } from "@/components/shared/FAQAccordion";
import { JsonLd } from "@/components/shared/JsonLd";
import { getFAQPageSchema } from "@/lib/schema";

/**
 * Sayfa sonu SSS bölümü — görünür yanıtlar + FAQPage şeması.
 * Yanıtlar yalnızca sitede doğrulanmış bilgilerden yazılır.
 */
export function InfoFAQ({ id, title, items, schema = true }: { id: string; title: string; items: FAQItem[]; schema?: boolean }) {
  return (
    <section aria-labelledby={id} className="mt-14">
      {schema ? <JsonLd data={getFAQPageSchema(items)} /> : null}
      <h2 id={id} className="font-heading text-[clamp(24px,2.8vw,32px)] font-bold tracking-[-0.03em] text-brand-light">
        {title}
      </h2>
      <div className="mt-6">
        <FAQAccordion items={items} defaultOpen={1} />
      </div>
    </section>
  );
}
