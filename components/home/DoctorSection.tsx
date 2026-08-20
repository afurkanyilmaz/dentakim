import Image from "next/image";
import Link from "next/link";
import { DOCTORS } from "@/lib/doctors";
import { Stethoscope } from "lucide-react";
import { Section, SectionHeader, Card } from "@/components/shared/Section";

/**
 * Hekim bölümü — lib/doctors.ts'ten okur.
 * Kadroya yalnızca doğrulanmış hekimler eklenir; liste boşsa bölüm gizlenir.
 */
export function DoctorSection() {
  if (DOCTORS.length === 0) return null;

  return (
    <Section id="hekim" labelledBy="hekim-baslik">
      <SectionHeader
        id="hekim-baslik"
        eyebrow="Klinik Ekibi"
        title="Deneyimin Verdiği Güven"
        lead="Tedavinizi kimin yapacağını önceden bilin."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DOCTORS.map((doctor) => (
          <Card key={doctor.slug} as="article" className="group">
            <Link href={`/hekimler/${doctor.slug}`} className="flex gap-5 p-[26px]">
              {doctor.photo ? (
                <Image
                  src={doctor.photo}
                  alt={`${doctor.name} — Küçükçekmece Dentakim diş hekimi`}
                  width={120}
                  height={150}
                  className="h-[150px] w-[120px] shrink-0 rounded-panel object-cover object-top"
                  loading="lazy"
                />
              ) : (
                <span className="flex h-[150px] w-[120px] shrink-0 items-center justify-center rounded-panel border border-dashed border-brand-line-strong bg-brand-primary-light text-brand-accent">
                  <Stethoscope className="size-8" aria-hidden />
                </span>
              )}
              <div className="min-w-0">
                <h3 className="font-heading text-[24px] font-semibold leading-[1.2] text-brand-dark">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-accent">
                  {doctor.specialization}
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-brand-mid">
                  {doctor.summary}
                </p>
                <span className="mt-4 inline-block text-sm font-bold text-brand-link transition-colors group-hover:text-brand-dark">
                  Profili görüntüle →
                </span>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
