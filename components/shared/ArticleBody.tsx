import type { ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

/**
 * Yazı gövdesi ayrıştırıcısı ve içindekiler üreticisi.
 *
 * Satır biçimi:
 *   "## Başlık"  → bölüm başlığı (içindekiler'e girer, çapa alır)
 *   "- Madde"    → madde listesi
 *   "1. Adım"    → numaralı adım
 *   "> Uyarı"    → vurgu kutusu
 *   diğer        → paragraf (ilki giriş paragrafı olarak büyük gösterilir)
 */

export type Heading = { id: string; text: string };

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u")
    .replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** İçindekiler için başlıkları çıkarır. */
export function extractHeadings(raw: string): Heading[] {
  return raw
    .trim()
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("## "))
    .map((l) => ({ text: l.slice(3), id: slugify(l.slice(3)) }));
}

export function ArticleBody({ content }: { content: string }) {
  const out: ReactNode[] = [];
  let bullets: string[] = [];
  let steps: string[] = [];
  let firstParagraphDone = false;
  let sectionCount = 0;

  const flush = (key: string) => {
    if (bullets.length) {
      out.push(
        <ul key={`ul-${key}`} className="flex flex-col gap-3 rounded-panel border border-brand-line bg-white p-6">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3.5">
              <span className="mt-[10px] size-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden />
              <span className="text-[16.5px] leading-[1.7] text-brand-mid">{b}</span>
            </li>
          ))}
        </ul>
      );
      bullets = [];
    }
    if (steps.length) {
      out.push(
        <ol key={`ol-${key}`} className="flex flex-col gap-4">
          {steps.map((b, i) => (
            <li key={i} className="flex gap-4 rounded-panel border border-brand-line bg-white p-5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-primary-light font-heading text-[17px] font-bold text-brand-accent tabular-nums">
                {i + 1}
              </span>
              <span className="pt-1 text-[16.5px] leading-[1.7] text-brand-mid">{b}</span>
            </li>
          ))}
        </ol>
      );
      steps = [];
    }
  };

  content
    .trim()
    .split("\n")
    .forEach((line, i) => {
      const t = line.trim();
      if (!t) return;

      if (t.startsWith("## ")) {
        flush(String(i));
        const text = t.slice(3);
        sectionCount += 1;
        out.push(
          <h2
            key={i}
            id={slugify(text)}
            className="scroll-mt-24 border-t border-brand-line pt-8 font-heading text-[clamp(24px,3.2vw,32px)] font-semibold leading-[1.25] text-brand-dark [text-wrap:pretty] first:border-0 first:pt-0"
          >
            <span className="mb-2 block text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-accent">
              {String(sectionCount).padStart(2, "0")}
            </span>
            {text}
          </h2>
        );
        return;
      }

      if (t.startsWith("> ")) {
        flush(String(i));
        out.push(
          <aside
            key={i}
            className="flex gap-3.5 rounded-panel border border-brand-accent/35 bg-brand-primary-light p-5"
          >
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden />
            <p className="text-[16px] font-medium leading-[1.7] text-brand-dark">{t.slice(2)}</p>
          </aside>
        );
        return;
      }

      if (t.startsWith("- ")) {
        if (steps.length) flush(String(i));
        bullets.push(t.slice(2));
        return;
      }

      const numbered = /^\d+\.\s+(.*)$/.exec(t);
      if (numbered) {
        if (bullets.length) flush(String(i));
        steps.push(numbered[1]);
        return;
      }

      flush(String(i));
      const isLead = !firstParagraphDone;
      firstParagraphDone = true;
      out.push(
        <p
          key={i}
          className={
            isLead
              ? "text-[19px] leading-[1.7] text-brand-dark [text-wrap:pretty]"
              : "text-[17px] leading-[1.78] text-brand-mid [text-wrap:pretty]"
          }
        >
          {t}
        </p>
      );
    });

  flush("end");
  return <div className="flex flex-col gap-6">{out}</div>;
}

/** Yazı başında gösterilen içindekiler kartı. */
export function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length < 3) return null;
  return (
    <nav
      aria-labelledby="icindekiler"
      className="rounded-card border border-brand-line bg-white p-6"
    >
      <p
        id="icindekiler"
        className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-accent"
      >
        Bu yazıda
      </p>
      <ol className="mt-4 flex flex-col gap-2.5">
        {headings.map((h, i) => (
          <li key={h.id} className="flex gap-3">
            <span className="font-heading text-[15px] font-bold text-brand-accent tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${h.id}`}
              className="text-[15.5px] leading-[1.5] text-brand-mid transition-colors hover:text-brand-dark"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
