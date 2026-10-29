import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { DoctorSection } from "@/components/home/DoctorSection";
import { RegionsSection } from "@/components/home/RegionsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ClinicStrip } from "@/components/home/ClinicStrip";
import { MapSection } from "@/components/home/MapSection";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { generateMeta } from "@/lib/seo";

/* Başlık ~60 karakter: Google'ın kestiği sınırın altında, birincil sorgu başta. */
export const metadata: Metadata = generateMeta({
  title: "Küçükçekmece Diş Kliniği — İmplant ve Zirkonyum",
  description:
    "Küçükçekmece Sultan Murat Caddesi'nde Dentakim: implant, zirkonyum kaplama, ortodonti ve estetik diş tedavileri. Muayene sonrası yazılı tedavi planı.",
  slug: "",
});

/*
 * Bölüm ritmi: koyu hero → beyaz (yaklaşım) → koyu (tedaviler) → krem (hekimler)
 * → fotoğraf şeridi → koyu (süreç) → beyaz (SSS) → krem (bölgeler) → beyaz (konum)
 * → koyu kapanış. Aynı tonda iki bölüm art arda gelmez.
 */
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <ServicesGrid />
      <DoctorSection />
      <ClinicStrip />
      <ProcessSection />
      <HomeFAQ />
      <RegionsSection />
      <MapSection />
      <ContactCTA variant="band" />
    </main>
  );
}
