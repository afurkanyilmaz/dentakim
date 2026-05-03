"use client";

import { motion } from "framer-motion";
import { CLINIC } from "@/lib/constants";
import { Clock, MapPin, Phone } from "lucide-react";

export function MapSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-2 lg:items-stretch"
        >
          <div className="overflow-hidden rounded-2xl border border-border/70 shadow-sm">
            <iframe
              title="Dentakim Küçükçekmece harita — Fevzi Çakmak Sultan Murat Cd. No:86 A"
              src={CLINIC.googleMapsEmbed}
              className="h-[320px] w-full lg:h-full lg:min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-border/70 bg-brand-surface/50 p-8">
            <h2 className="font-heading text-2xl font-bold text-brand-dark md:text-3xl">
              Kliniğimize gelin
            </h2>
            <p className="mt-3 flex gap-2 text-brand-mid">
              <MapPin className="mt-1 size-5 shrink-0 text-brand-primary" aria-hidden />
              <span>
                Fevzi Çakmak, Sultan Murat Cd. No:86A Küçükçekmece —{" "}
                <span className="font-medium text-brand-dark">
                  kolay ulaşım, net adres
                </span>
              </span>
            </p>
            <p className="mt-4 flex gap-2 text-brand-mid">
              <Phone className="mt-1 size-5 shrink-0 text-brand-primary" aria-hidden />
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="font-semibold text-brand-primary hover:underline"
              >
                {CLINIC.phone}
              </a>
            </p>
            <div className="mt-6 space-y-2 text-sm text-brand-mid">
              <p className="flex items-start gap-2 font-medium text-brand-dark">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand-primary" aria-hidden />
                Çalışma saatleri
              </p>
              <p>Hafta içi: {CLINIC.hours.weekdays}</p>
              <p>Cumartesi: {CLINIC.hours.saturday}</p>
              <p>Pazar: {CLINIC.hours.sunday}</p>
            </div>
            <p className="mt-6 text-sm text-brand-mid">
              Tam adres: {CLINIC.address.full}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
