"use client";

import { motion } from "framer-motion";
import { CLINIC, WHATSAPP_URL } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTABanner() {
  return (
    <section className="bg-brand-primary py-14 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
        >
          <h2 className="max-w-xl font-heading text-2xl font-bold md:text-3xl">
            Sağlıklı Gülüşünüz İçin Hemen Randevu Alın
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "bg-[#25D366] text-white hover:bg-[#1ebe5d]"
              )}
            >
              WhatsApp
            </a>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/70 bg-transparent text-white hover:bg-white/10"
              )}
            >
              {CLINIC.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
