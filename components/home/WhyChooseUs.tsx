"use client";

import { motion } from "framer-motion";
import { HeartPulse, Shield, Sparkles, Wallet } from "lucide-react";

const ITEMS = [
  {
    title: "Deneyimli Ekip",
    desc: "Dr. Musa Burak Sakar öncülüğünde güvenilir ve planlı tedavi.",
    Icon: Shield,
  },
  {
    title: "Modern Teknoloji",
    desc: "Dijital ölçü ve radyoloji ile doğru tanı ve öngörülebilir süreç.",
    Icon: Sparkles,
  },
  {
    title: "Ağrısız Tedavi",
    desc: "Konfor odaklı anestezi ve sakin iletişim ile rahat seanslar.",
    Icon: HeartPulse,
  },
  {
    title: "Uygun Fiyat",
    desc: "Şeffaf planlama ve aşamalı tedavi ile bütçe dostu seçenekler.",
    Icon: Wallet,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl font-bold text-brand-dark md:text-4xl"
        >
          Neden Dentakim?
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-border/70 bg-brand-surface/40 p-6"
            >
              <item.Icon className="size-9 text-brand-primary" aria-hidden />
              <h3 className="mt-4 font-heading text-lg font-semibold text-brand-dark">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-mid">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
