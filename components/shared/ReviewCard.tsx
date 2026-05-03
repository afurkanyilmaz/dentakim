import { Star } from "lucide-react";

export function ReviewCard({
  name,
  text,
}: {
  name: string;
  text: string;
}) {
  return (
    <figure className="min-w-[280px] shrink-0 snap-start rounded-2xl border border-border/70 bg-white p-5 shadow-sm sm:min-w-[320px]">
      <figcaption className="font-heading font-semibold text-brand-dark">{name}</figcaption>
      <div className="mt-2 flex gap-0.5 text-brand-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-brand-accent stroke-brand-accent" aria-hidden />
        ))}
        <span className="sr-only">5 üzerinden 5</span>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-brand-mid">{text}</blockquote>
    </figure>
  );
}
