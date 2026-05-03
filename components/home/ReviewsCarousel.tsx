"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ReviewCard } from "@/components/shared/ReviewCard";

const REVIEWS = [
  {
    name: "Elif K.",
    text: "Küçükçekmece’de güvendiğim tek adres. İmplant sürecinde her adımı anlattılar, ağrı yönetimi harikaydı.",
  },
  {
    name: "Murat T.",
    text: "Ortodonti tedavim sorunsuz ilerliyor. Metal braket temizliği konusunda çok yardımcı oldular.",
  },
  {
    name: "Ayşe D.",
    text: "Diş beyazlatma sonrası doğal bir parlaklık elde ettim. Hassasiyetim iki günde geçti.",
  },
  {
    name: "Caner Y.",
    text: "Kanal tedavisinden korkuyordum ama seans çok konforlu geçti. Teşekkürler Dentakim.",
  },
  {
    name: "Zeynep A.",
    text: "Çocuğum için ilk muayene deneyimi çok pozitif oldu. Sabırlı ve ilgili bir ekip.",
  },
];

export function ReviewsCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="border-t border-border/60 bg-background py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-dark md:text-4xl">
              Hasta yorumları
            </h2>
            <p className="mt-2 text-brand-mid">
              Google üzerinden bırakılan örnek geri bildirimler (gösterim amaçlı).
            </p>
          </div>
        </motion.div>

        <div
          ref={ref}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="snap-start"
            >
              <ReviewCard name={r.name} text={r.text} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
