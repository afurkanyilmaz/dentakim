import { BUSINESS } from "@/lib/business";
import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/Section";

/** İletişim & konum — Claude Design'daki krem zeminli harita bölümü. */
export function MapSection() {
  return (
    <Section id="iletisim" tone="white" labelledBy="konum-baslik">
      <SectionHeader
        id="konum-baslik"
        eyebrow="İletişim & Konum"
        title="Küçükçekmece'nin merkezinde, ulaşımı kolay"
        lead="Halkalı, Atakent, Sefaköy ve Cennet Mahallesi'nden ortalama 10 dakikada ulaşabilirsiniz."
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col justify-center gap-7 rounded-card border border-brand-line bg-brand-surface p-8">
          <div className="flex gap-3.5">
            <MapPin className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden />
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                Adres
              </p>
              <p className="mt-1.5 text-[15.5px] leading-[1.7] text-brand-mid">
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.postalCode} {BUSINESS.address.district} /{" "}
                {BUSINESS.address.city}
              </p>
            </div>
          </div>

          <div className="flex gap-3.5">
            <Phone className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden />
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                Telefon
              </p>
              <a
                href={BUSINESS.phone.href}
                className="mt-1.5 block text-[17px] font-bold text-brand-dark transition-colors hover:text-brand-accent"
              >
                {BUSINESS.phone.display}
              </a>
            </div>
          </div>

          <div className="flex gap-3.5">
            <ExternalLink className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden />
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                Google
              </p>
              <a
                href={BUSINESS.google.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 block text-[15.5px] font-semibold text-brand-link hover:text-brand-dark"
              >
                İşletme profilimiz · Plus Code {BUSINESS.plusCode.split(" ")[0]}
              </a>
            </div>
          </div>

          <div className="flex gap-3.5">
            <Clock className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden />
            <div className="w-full">
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                Çalışma Saatleri
              </p>
              <dl className="mt-1.5 space-y-1 text-[14.5px] text-brand-mid">
                <div className="flex justify-between gap-4">
                  <dt className="whitespace-nowrap">{BUSINESS.hours.weekdays.days}</dt>
                  <dd className="whitespace-nowrap tabular-nums">
                    {BUSINESS.hours.weekdays.opens} – {BUSINESS.hours.weekdays.closes}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>{BUSINESS.hours.saturday.days}</dt>
                  <dd className="whitespace-nowrap tabular-nums">
                    {BUSINESS.hours.saturday.opens} – {BUSINESS.hours.saturday.closes}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>{BUSINESS.hours.sunday.days}</dt>
                  <dd>Kapalı</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="min-h-[360px] overflow-hidden rounded-card border border-brand-line">
          <iframe
            title="Dentakim Küçükçekmece harita — Fevzi Çakmak, Sultan Murat Cd. No:86 A"
            src={BUSINESS.google.embedUrl}
            className="size-full min-h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
