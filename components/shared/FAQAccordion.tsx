"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQItem = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <Accordion className="flex w-full flex-col gap-3">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={`faq-${index}`}
          className="overflow-hidden rounded-panel border border-brand-line bg-brand-surface"
        >
          <AccordionTrigger className="px-[26px] py-[22px] text-left text-[16.5px] font-bold text-brand-dark hover:no-underline [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-brand-accent">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-[26px] pb-6 text-[15px] leading-[1.7] text-brand-mid">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
