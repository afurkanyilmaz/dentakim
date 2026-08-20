import { HeartPulse, Shield, Sparkles, Wallet } from "lucide-react";
import { Section, SectionHeader, Card } from "@/components/shared/Section";

const ITEMS = [
  {
    title: "Deneyimli Ekip",
    desc: "Dr. Musa Burak Sakar öncülüğünde güvenilir ve planlı tedavi.",
    Icon: Shield,
  },
  {
    title: "Modern Teknoloji",
    desc: "Dijital ölçü ve radyoloji ile doğru tanı ve öngörülebilir süreç.",
    Icon: Sparkles,
  },
  {
    title: "Konfor Odaklı Yaklaşım",
    desc: "Konfor odaklı anestezi ve sakin iletişim ile rahat seanslar.",
    Icon: HeartPulse,
  },
  {
    title: "Şeffaf Planlama",
    desc: "Muayene sonrası yazılı tedavi planı ve kalem kalem fiyat teklifi.",
    Icon: Wallet,
  },
];

export function WhyChooseUs() {
  return (
    <Section tone="white" labelledBy="neden-baslik">
      <SectionHeader
        id="neden-baslik"
        eyebrow="Neden Dentakim"
        title="Kliniğimizde Standart Uygulamalar"
        lead="Tedavi kadar süreci de önemsiyoruz: ne yapılacağını, ne kadar süreceğini ve ne kadar tutacağını baştan biliyorsunuz."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ title, desc, Icon }) => (
          <Card key={title} className="p-[26px] pb-6">
            <span className="mb-4 inline-flex size-11 items-center justify-center rounded-panel bg-brand-primary-light text-brand-accent">
              <Icon className="size-5" aria-hidden />
            </span>
            <h3 className="font-heading text-[26px] font-semibold leading-[1.2] text-brand-dark">
              {title}
            </h3>
            <p className="mt-2.5 text-[14.5px] leading-[1.6] text-brand-mid">{desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
