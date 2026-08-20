import { HeartPulse, Shield, Sparkles, Wallet } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/Section";

/**
 * Kartsız sunum — sayfadaki kart ızgarası tekrarını kırmak için
 * ince ayırıcılarla dört sütun.
 */
const ITEMS = [
  { title: "Deneyimli Ekip", desc: "Protez ve ağız cerrahisi alanlarında ayrı hekimlerle planlı tedavi.", Icon: Shield },
  { title: "Modern Teknoloji", desc: "Dijital ölçü ve radyoloji ile doğru tanı, öngörülebilir süreç.", Icon: Sparkles },
  { title: "Konfor Odaklı Yaklaşım", desc: "Lokal anestezi ve sakin iletişim ile rahat seanslar.", Icon: HeartPulse },
  { title: "Şeffaf Planlama", desc: "Muayene sonrası yazılı tedavi planı ve kalem kalem bilgilendirme.", Icon: Wallet },
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

      <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ title, desc, Icon }) => (
          <div key={title} className="border-t border-brand-line pt-6">
            <Icon className="size-6 text-brand-accent" aria-hidden />
            <dt className="mt-4 font-heading text-[24px] font-semibold leading-[1.2] text-brand-dark">
              {title}
            </dt>
            <dd className="mt-2 text-[14.5px] leading-[1.65] text-brand-mid">{desc}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
