import Image from "next/image";
import Link from "next/link";
import { MapPin, Stethoscope } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import type { Doctor } from "@/lib/doctors";

/**
 * Hekim kartı — dikey portre (288 × 420 oranı), altında çalışma alanı,
 * ad, ünvan rozeti, konum/ünvan satırı ve tam genişlik "Profili gör" düğmesi.
 * Yalnızca doğrulanmış bilgiler gösterilir; puan veya deneyim yılı yazılmaz.
 */
export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[22px] border border-brand-line bg-brand-card transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-brand-line-strong motion-reduce:transform-none">
      <div className="relative aspect-[288/420] overflow-hidden bg-[#0C1019]">
        {doctor.photo ? (
          <Image
            src={doctor.photo}
            alt={`${doctor.name} — ${doctor.specialization}`}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 288px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
          />
        ) : (
          <span className="flex size-full items-center justify-center text-brand-accent">
            <Stethoscope className="size-10" aria-hidden />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-[22px] pb-5 pt-5">
        <p className="text-[11px] font-bold text-brand-accent">{doctor.specialization}</p>
        <h3 className="mt-2 font-heading text-[22px] font-bold leading-[1.2] tracking-[-0.03em] text-brand-light">
          {doctor.name}
        </h3>
        <span className="mt-3 inline-flex w-fit rounded-full border border-brand-line bg-white/[0.03] px-3 py-1 text-[11px] font-semibold text-brand-mid">
          {doctor.title}
        </span>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11.5px] text-brand-mid">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-brand-accent" aria-hidden />
            {BUSINESS.address.district}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Stethoscope className="size-3.5 text-brand-accent" aria-hidden />
            {doctor.focusAreas.length || doctor.knowsAbout.length} çalışma alanı
          </span>
        </div>

        <Link
          href={`/hekimler/${doctor.slug}`}
          className="mt-5 flex h-11 items-center justify-center gap-2 rounded-[12px] bg-brand-ink text-[12.5px] font-extrabold text-white transition-colors after:absolute after:inset-0 hover:bg-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
        >
          Profili gör <span aria-hidden>↗</span>
        </Link>
      </div>
    </article>
  );
}
