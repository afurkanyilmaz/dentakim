"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CLINIC } from "@/lib/constants";
import { Award, Stethoscope } from "lucide-react";

const doctor = CLINIC.doctors[0];

export function DoctorSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid items-center gap-10 lg:grid-cols-[320px_1fr]"
        >
          <div className="relative mx-auto w-full max-w-[320px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/70 bg-brand-primary-light shadow-sm">
              <Image
                src={doctor.photo}
                alt={`${doctor.name} — Küçükçekmece Dentakim diş hekimi portre fotoğrafı`}
                width={800}
                height={1000}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
              Klinik ekibi
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-brand-dark md:text-4xl">
              {doctor.name}
            </h2>
            <p className="mt-2 text-lg font-medium text-brand-mid">
              {doctor.title} · {doctor.specialization}
            </p>
            <p className="mt-5 max-w-prose leading-relaxed text-brand-mid">{doctor.bio}</p>
            <ul className="mt-8 space-y-3 text-sm text-brand-dark">
              <li className="flex gap-3">
                <Stethoscope className="mt-0.5 size-5 shrink-0 text-brand-primary" aria-hidden />
                <span>
                  Genel diş hekimliği, implant planlaması ve koruyucu yaklaşımlar.
                </span>
              </li>
              <li className="flex gap-3">
                <Award className="mt-0.5 size-5 shrink-0 text-brand-primary" aria-hidden />
                <span>
                  Hasta odaklı iletişim; tedavi adımları sade dil ile paylaşılır.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
