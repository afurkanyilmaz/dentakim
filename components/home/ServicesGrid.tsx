import { SERVICES } from "@/lib/constants";
import { ArrowLink, Section, SectionHeader } from "@/components/shared/Section";
import { TREATMENT_BLURBS, TreatmentCard } from "@/components/shared/TreatmentCard";

/** Anasayfada gösterilen tedaviler (2 satır × 3). Diğerleri "Tüm Tedaviler"de. */
const HOME_ORDER = [
  "implant-tedavisi",
  "all-on-4-implant",
  "all-on-6-implant",
  "hibrit-protez",
  "protez-zirkonyum",
  "ortodonti",
];

export function ServicesGrid() {
  const items = HOME_ORDER.map((slug) => SERVICES.find((s) => s.slug === slug)).filter(
    Boolean
  ) as (typeof SERVICES)[number][];

  return (
    <Section id="tedaviler" labelledBy="tedaviler-baslik">
      <SectionHeader
        id="tedaviler-baslik"
        eyebrow="Neler yapıyoruz?"
        title="Tedavilerimiz"
        action={<ArrowLink href="/hizmetler">Tüm Tedaviler</ArrowLink>}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => (
          <TreatmentCard
            key={s.slug}
            slug={s.slug}
            title={s.title}
            desc={TREATMENT_BLURBS[s.slug] ?? s.desc}
            icon={s.icon}
            index={i + 1}
          />
        ))}
      </div>
    </Section>
  );
}
