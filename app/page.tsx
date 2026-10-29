import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { DoctorSection } from "@/components/home/DoctorSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ClinicStrip } from "@/components/home/ClinicStrip";
import { PricingSection } from "@/components/home/PricingSection";
import { BlogSection } from "@/components/home/BlogSection";
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
 * Bölüm sırası referans düzeni izler: hero → tanıtım → tedaviler → hekimler
 * → neden biz (ızgara zemin) → lacivert klinik bandı → fiyatlandırma → blog
 * → konum → SSS → iletişim. Referanstaki yapay zekâ gülüş simülasyonu, taksit
 * hesaplayıcı, sertifika ve Instagram alanlarının yerine Dentakim'in gerçek
 * içerikleri (klinik fotoğrafları, fiyatlandırma yaklaşımı, konum, SSS) konur.
 */
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ServicesGrid />
      <DoctorSection />
      <WhyChooseUs />
      <ClinicStrip />
      <PricingSection />
      <BlogSection />
      <MapSection />
      <HomeFAQ />
      <ContactCTA variant="band" />
    </main>
  );
}
