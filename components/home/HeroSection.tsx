"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CLINIC } from "@/lib/constants";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-brand-primary-light/50 to-background">
      <div className="container relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
            Küçükçekmece · Sultan Murat Caddesi
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-brand-dark md:text-5xl">
            Küçükçekmece&apos;nin Güvenilen Diş Kliniği
          </h1>
          <p className="mt-5 text-lg text-brand-mid">
            İmplant, ortodonti, estetik diş ve çocuk diş hekimliğinde deneyimli ekip;
            ağrısız yaklaşım ve modern teknoloji ile{" "}
            <span className="font-medium text-brand-dark">Dentakim</span>’de
            buluşuyor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/randevu"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "bg-brand-accent px-6 text-brand-dark hover:bg-brand-accent/90"
              )}
            >
              Randevu Al
            </Link>
            <Link
              href="/hizmetler"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-brand-primary px-6 text-brand-primary hover:bg-brand-primary-light"
              )}
            >
              Hizmetlerimiz
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-white/80 px-4 py-3 text-sm text-brand-dark shadow-sm backdrop-blur">
              <div className="flex text-brand-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brand-accent stroke-brand-accent" />
                ))}
              </div>
              <span className="font-medium">Google 5.0</span>
            </div>
            <div className="rounded-xl border border-border/70 bg-white/80 px-4 py-3 text-sm shadow-sm backdrop-blur">
              <p className="font-heading font-bold text-brand-dark">15+ yıl</p>
              <p className="text-brand-mid">Klinik deneyimi</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-white/80 px-4 py-3 text-sm shadow-sm backdrop-blur">
              <p className="font-heading font-bold text-brand-dark">5000+</p>
              <p className="text-brand-mid">Hasta memnuniyeti</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-white/80 px-4 py-3 text-sm shadow-sm backdrop-blur">
              <p className="font-heading font-bold text-brand-dark">Aynı Gün</p>
              <p className="text-brand-mid">Müsaitliğe göre randevu</p>
            </div>
          </div>
        </motion.div>
        <p className="mt-8 text-xs text-brand-mid">
          Hemen arayın:{" "}
          <a className="font-semibold text-brand-primary" href={`tel:${CLINIC.phoneRaw}`}>
            {CLINIC.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
