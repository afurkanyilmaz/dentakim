import Image from "next/image";
import Link from "next/link";
import { DOCTORS } from "@/lib/doctors";
import { Stethoscope } from "lucide-react";
import { Section, SectionHeader, Card } from "@/components/shared/Section";

/**
 * Hekim bölümü — büyük dikey portreler.
 * Kadroya yalnızca doğrulanmış hekimler eklenir; liste boşsa bölüm gizlenir.
 */
export function DoctorSection() {
  if (DOCTORS.length === 0) return null;

  return (
    <Section id="hekim" labelledBy="hekim-baslik">
      <SectionHeader
        id="hekim-baslik"
        eyebrow="Klinik Ekibi"
        title="Tedavinizi kim yapacak?"
        lead="Hekimlerimizin çalışma alanlarını ve uyguladıkları tedavileri önceden görebilirsiniz."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DOCTORS.map((doctor) => (
          <Card key={doctor.slug} as="article" className="group">
            <Link href={`/hekimler/${doctor.slug}`} className="flex flex-1 flex-col">
              <span className="relative block aspect-[4/5] w-full overflow-hidden bg-brand-primary-light">
                {doctor.photo ? (
                  <Image
                    src={doctor.photo}
                    alt={`${doctor.name} — ${doctor.specialization}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
                  />
                ) : (
                  <span className="flex size-full items-center justify-center text-brand-accent">
                    <Stethoscope className="size-10" aria-hidden />
                  </span>
                )}
              </span>

              <span className="flex flex-1 flex-col gap-2 p-[26px]">
                <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                  {doctor.specialization}
                </span>
                <span className="font-heading text-[26px] font-semibold leading-[1.15] text-brand-dark">
                  {doctor.name}
                </span>
                <span className="mt-auto pt-3 text-sm font-bold text-brand-link transition-colors group-hover:text-brand-dark">
                  Profili görüntüle →
                </span>
              </span>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
