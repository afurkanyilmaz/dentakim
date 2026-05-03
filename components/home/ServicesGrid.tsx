"use client";

import { SERVICES } from "@/lib/constants";
import { getServiceIcon } from "@/lib/service-icons";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { motion } from "framer-motion";

export function ServicesGrid() {
  return (
    <section className="border-b border-border/60 bg-background py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-brand-dark md:text-4xl">
            Hizmetlerimiz
          </h2>
          <p className="mt-3 text-brand-mid">
            Küçükçekmece’de ağız ve diş sağlığınız için geniş bir tedavi yelpazesi.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <ServiceCard
                href={`/hizmetler/${s.slug}`}
                title={s.title}
                description={s.desc}
                Icon={getServiceIcon(s.icon)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
