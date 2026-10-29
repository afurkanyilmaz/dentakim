import { DOCTORS } from "@/lib/doctors";
import { ArrowLink, Section, SectionHeader } from "@/components/shared/Section";
import { DoctorCard } from "@/components/shared/DoctorCard";

/**
 * Hekim bölümü — referanstaki 288 × 420 dikey portre kartları.
 * Kadroya yalnızca doğrulanmış hekimler eklenir; liste boşsa bölüm gizlenir.
 */
export function DoctorSection() {
  if (DOCTORS.length === 0) return null;

  return (
    <Section id="hekim" labelledBy="hekim-baslik">
      <SectionHeader
        id="hekim-baslik"
        eyebrow="Hekimlerimiz"
        title="Sağlıklı gülüşünüz için deneyimli ekip."
        action={<ArrowLink href="/hekimler">Tüm Hekimler</ArrowLink>}
      />

      <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4">
        {DOCTORS.map((doctor) => (
          <DoctorCard key={doctor.slug} doctor={doctor} />
        ))}
      </div>
    </Section>
  );
}
