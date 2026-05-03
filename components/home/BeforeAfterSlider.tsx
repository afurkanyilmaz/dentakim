"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const EXAMPLES = [
  {
    beforeSrc: "/images/ba-before-1.webp",
    afterSrc: "/images/ba-after-1.webp",
    altBefore:
      "Küçükçekmece Dentakim öncesi diş estetiği örneği — önce görünüm",
    altAfter:
      "Küçükçekmece Dentakim sonrası diş estetiği örneği — sonra görünüm",
  },
  {
    beforeSrc: "/images/ba-before-2.webp",
    afterSrc: "/images/ba-after-2.webp",
    altBefore: "Küçükçekmece diş kliniği öncesi gülüş hattı",
    altAfter: "Küçükçekmece diş kliniği sonrası gülüş hattı",
  },
  {
    beforeSrc: "/images/ba-before-3.webp",
    afterSrc: "/images/ba-after-3.webp",
    altBefore: "Dentakim öncesi diş rengi ve form düzeni",
    altAfter: "Dentakim sonrası diş rengi ve form düzeni",
  },
];

function CompareCard({
  beforeSrc,
  afterSrc,
  altBefore,
  altAfter,
}: (typeof EXAMPLES)[number]) {
  const [pct, setPct] = useState(50);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      // safety: no-op (kept for future extensions)
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/70 bg-muted select-none"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        const rect = e.currentTarget.getBoundingClientRect();
        const update = (cx: number) => {
          const x = Math.min(Math.max(cx - rect.left, 0), rect.width);
          setPct(Math.round((x / rect.width) * 100));
        };
        update(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!ref.current) return;
        if ((e.buttons & 1) === 0) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
        setPct(Math.round((x / rect.width) * 100));
      }}
      onPointerUp={(e) => {
        try {
          e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
          // ignore
        }
      }}
      role="img"
      aria-label="Önce ve sonra karşılaştırması — dokunarak sürükleyin"
    >
      <Image
        src={afterSrc}
        alt={altAfter}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        loading="lazy"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={altBefore}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
          priority={false}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow"
        style={{ left: `${pct}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-brand-primary text-xs font-bold text-white shadow"
        style={{ left: `${pct}%` }}
      >
        ⇆
      </div>
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-2 py-1 text-[10px] font-semibold text-white">
        Önce
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/55 px-2 py-1 text-[10px] font-semibold text-white">
        Sonra
      </span>
    </div>
  );
}

export function BeforeAfterSlider() {
  return (
    <section className="border-y border-border/60 bg-brand-primary-light/30 py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-brand-dark md:text-4xl">
            Önce & Sonra
          </h2>
          <p className="mt-3 text-brand-mid">
            Örnek vakalar — karşılaştırmayı kaydırarak inceleyin.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {EXAMPLES.map((ex) => (
            <CompareCard key={ex.beforeSrc} {...ex} />
          ))}
        </div>
      </div>
    </section>
  );
}
