import { SERVICES } from "@/lib/constants";
import { getServiceIcon } from "@/lib/service-icons";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Section, SectionHeader } from "@/components/shared/Section";

export function ServicesGrid() {
  return (
    <Section id="tedaviler" labelledBy="tedaviler-baslik">
      <SectionHeader
        id="tedaviler-baslik"
        eyebrow="Tedavilerimiz"
        title="Size Özel Planlanan Tedaviler"
        lead="Küçükçekmece'deki kliniğimizde implanttan estetik diş hekimliğine kadar geniş bir tedavi yelpazesi sunuyoruz."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <ServiceCard
            key={s.slug}
            href={`/hizmetler/${s.slug}`}
            title={s.title}
            description={s.desc}
            Icon={getServiceIcon(s.icon)}
          />
        ))}
      </div>
    </Section>
  );
}
