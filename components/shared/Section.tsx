import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Claude Design bölüm ritmi.
 *
 * Tasarımdaki ölçüler (Dentakim Anasayfa.dc.html):
 *   kapsayıcı  max-width 1240px, yatay dolgu 24px
 *   dikey      clamp(56px,8vw,104px) üst / clamp(48px,7vw,96px) alt
 *   başlık     altın üst başlık + Cormorant h2, sağda isteğe bağlı açıklama
 */

type Tone = "surface" | "white" | "deep";

const TONE: Record<Tone, string> = {
  surface: "bg-brand-surface",
  white: "bg-white border-t border-brand-line",
  deep: "bg-brand-deep",
};

export function Section({
  children,
  tone = "surface",
  className,
  id,
  labelledBy,
  narrow = false,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  labelledBy?: string;
  /** SSS gibi dar bloklar için 880px kapsayıcı. */
  narrow?: boolean;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn(TONE[tone], className)}>
      <div
        className={cn(
          "mx-auto px-6 pb-[clamp(48px,7vw,96px)] pt-[clamp(56px,8vw,104px)]",
          narrow ? "max-w-[880px]" : "max-w-[1240px]"
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  id,
  onDeep = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  onDeep?: boolean;
}) {
  return (
    <div className="mb-14 flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
      <div>
        <p className="mb-3.5 text-[12.5px] font-bold uppercase tracking-[0.16em] text-brand-accent">
          {eyebrow}
        </p>
        <h2
          id={id}
          className={cn(
            "font-heading text-[clamp(32px,4vw,44px)] font-semibold leading-[1.15] [text-wrap:pretty]",
            onDeep ? "text-brand-surface" : "text-brand-dark"
          )}
        >
          {title}
        </h2>
      </div>
      {lead ? (
        <p
          className={cn(
            "max-w-[380px] text-[15.5px] leading-[1.6]",
            onDeep ? "text-brand-on-deep" : "text-brand-mid"
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/** Tasarımdaki beyaz kart: 1px #ECE7DD kenarlık, 20px yarıçap. */
export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "flex flex-col overflow-hidden rounded-card border border-brand-line bg-white transition-colors hover:border-brand-line-strong",
        className
      )}
    >
      {children}
    </Tag>
  );
}
