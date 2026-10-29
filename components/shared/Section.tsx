import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Bölüm ritmi — referans düzenden ölçülen değerler:
 *   kapsayıcı  1240px içerik, masaüstünde 100px kenar boşluğu (1440 genişlikte)
 *   dikey      112px (masaüstü) → 64px (mobil)
 *   başlık     11px büyük harf üst başlık + 72px / -0.05em sıkı başlık
 */

type Tone = "surface" | "white" | "deep" | "navy" | "grid";

const TONE: Record<Tone, string> = {
  surface: "bg-brand-surface",
  /* "white" eski adlandırma; koyu temada ikincil zemin */
  white: "bg-brand-surface border-t border-brand-line",
  deep: "bg-brand-card",
  navy: "bg-brand-navy",
  grid: "bg-brand-surface bg-grid",
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
          "mx-auto px-5 py-[clamp(64px,7.8vw,112px)] sm:px-8",
          narrow ? "max-w-[944px]" : "max-w-[1304px]"
        )}
      >
        {children}
      </div>
    </section>
  );
}

/** Büyük harf, geniş aralıklı üst başlık. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-light",
        className
      )}
    >
      {children}
    </p>
  );
}

/** Referanstaki dev bölüm başlığı. */
export const DISPLAY_H2 =
  "font-heading text-[clamp(40px,5vw,72px)] font-bold leading-[1.02] tracking-display text-brand-light [text-wrap:balance]";

export function SectionHeader({
  eyebrow,
  title,
  lead,
  id,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  /** Sağ altta "Tümünü gör ↗" bağlantısı. */
  action?: ReactNode;
}) {
  return (
    <div className="mb-[clamp(40px,4.5vw,64px)] flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
      <div className="min-w-0 max-w-[1140px]">
        <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
        <h2 id={id} className={DISPLAY_H2}>
          {title}
        </h2>
        {lead ? (
          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.8] text-brand-mid">{lead}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0 pb-2">{action}</div> : null}
    </div>
  );
}

/** "Tüm Tedaviler ↗" türü alt çizgili küçük bağlantı. */
export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 border-b border-brand-line-strong pb-1.5 text-[12.5px] font-extrabold text-brand-light transition-colors hover:border-brand-accent hover:text-brand-accent"
    >
      {children}
      <span aria-hidden>↗</span>
    </Link>
  );
}

/** Koyu kart: #101521 zemin, 26px yarıçap, ince açık kenarlık. */
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
        "flex flex-col overflow-hidden rounded-card border border-brand-line bg-brand-card shadow-[0_18px_52px_rgba(22,39,73,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-line-strong motion-reduce:hover:translate-y-0",
        className
      )}
    >
      {children}
    </Tag>
  );
}
