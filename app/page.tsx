import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { DoctorSection } from "@/components/home/DoctorSection";
import { RegionsSection } from "@/components/home/RegionsSection";
import { MapSection } from "@/components/home/MapSection";
import { ContactCTA } from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title:
    "Küçükçekmece Diş Kliniği | Dentakim — İmplant, Ortodonti, Estetik Diş",
  description:
    "Küçükçekmece'nin güvenilir diş kliniği Dentakim. Sultan Murat Caddesi üzerinde Dr. Musa Burak Sakar ve ekibiyle hizmetinizdeyiz. Bilgi ve randevu: +90 553 313 78 88",
  alternates: { canonical: "https://dentakim.com/" },
  openGraph: {
    url: "https://dentakim.com/",
    title:
      "Küçükçekmece Diş Kliniği | Dentakim — İmplant, Ortodonti, Estetik Diş",
    description:
      "Küçükçekmece'nin güvenilir diş kliniği Dentakim. Sultan Murat Caddesi üzerinde Dr. Musa Burak Sakar ve ekibiyle hizmetinizdeyiz. Bilgi ve randevu: +90 553 313 78 88",
    images: [{ url: "/og/default.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DoctorSection />
      <ServicesGrid />
      <WhyChooseUs />
      <RegionsSection />
      <MapSection />
      <ContactCTA variant="band" />
    </main>
  );
}
