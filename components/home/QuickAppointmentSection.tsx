"use client";

import { motion } from "framer-motion";
import { AppointmentForm } from "@/components/shared/AppointmentForm";
import { CLINIC, WHATSAPP_URL } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock, MapPin, Phone } from "lucide-react";

export function QuickAppointmentSection() {
  return (
    <section className="border-t border-border/60 bg-background py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start"
        >
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-dark md:text-4xl">
              Hızlı Randevu
            </h2>
            <p className="mt-3 max-w-prose text-brand-mid">
              Küçükçekmece Sultan Murat Caddesi üzerindeki kliniğimiz için formu
              doldurun; ekibimiz en kısa sürede sizi arayıp randevunuzu
              netleştirsin.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/70 bg-white p-5 shadow-sm">
                <p className="flex items-start gap-2 font-heading font-semibold text-brand-dark">
                  <Phone className="mt-0.5 size-5 text-brand-primary" aria-hidden />
                  Telefon
                </p>
                <a
                  href={`tel:${CLINIC.phoneRaw}`}
                  className="mt-2 block text-lg font-bold text-brand-primary hover:underline"
                >
                  {CLINIC.phone}
                </a>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "bg-[#25D366] text-white hover:bg-[#1ebe5d]"
                    )}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border/70 bg-white p-5 shadow-sm">
                <p className="flex items-start gap-2 font-heading font-semibold text-brand-dark">
                  <Clock className="mt-0.5 size-5 text-brand-primary" aria-hidden />
                  Çalışma saatleri
                </p>
                <p className="mt-2 text-sm text-brand-mid">
                  Hafta içi: {CLINIC.hours.weekdays}
                  <br />
                  Cumartesi: {CLINIC.hours.saturday}
                  <br />
                  Pazar: {CLINIC.hours.sunday}
                </p>
                <p className="mt-4 flex gap-2 text-sm text-brand-mid">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-primary" aria-hidden />
                  <span>{CLINIC.address.full}</span>
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm text-brand-mid">
              Yakın sayfalar:{" "}
              <a className="font-medium text-brand-primary underline" href="/fevzi-cakmak-dis-klinigi">
                Fevzi Çakmak
              </a>
              ,{" "}
              <a className="font-medium text-brand-primary underline" href="/sevakoy-dis-klinigi">
                Sefaköy
              </a>
              ,{" "}
              <a className="font-medium text-brand-primary underline" href="/halkali-dis-klinigi">
                Halkalı
              </a>
              .
            </p>
          </div>

          <div className="lg:sticky lg:top-24">
            <AppointmentForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

