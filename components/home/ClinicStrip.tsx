import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const POINTS = [
  "Ayrı tedavi odaları",
  "Sterilizasyon ve hijyen protokolü",
  "Ferah bekleme alanı",
  "Sultan Murat Caddesi üzerinde",
];

/**
 * Lacivert tam genişlik bant — solda başlık ve kontrol listesi, ortada
 * ikiye bölünmüş klinik fotoğrafı, sağda klinik bilgi paneli.
 */
export function ClinicStrip() {
  return (
    <section aria-labelledby="klinik-serit" className="overflow-hidden bg-brand-navy">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,0.62fr)] lg:gap-8 lg:py-12">
        <div>
          <h2
            id="klinik-serit"
            className="font-heading text-[clamp(38px,4.3vw,62px)] font-bold leading-[0.98] tracking-display text-white"
          >
            Kliniğimizi yakından görün.
          </h2>
          <p className="mt-5 max-w-[440px] text-[15px] leading-[1.7] text-white/70">
            Tedavi olacağınız ortamı randevudan önce tanıyın. Fotoğraflar
            kliniğimizde çekilmiştir.
          </p>
          <ul className="mt-6 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[13.5px] font-semibold text-white/85">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/10 text-brand-accent">
                  <Check className="size-3.5" aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/klinik/galeri"
              className="inline-flex h-[50px] items-center gap-2 rounded-[12px] bg-brand-accent px-6 text-[14px] font-extrabold text-white transition-[filter] hover:brightness-110"
            >
              Galeriyi İncele <span aria-hidden>→</span>
            </Link>
            <Link
              href="/klinik"
              className="inline-flex h-[50px] items-center gap-2 rounded-[12px] border border-white/25 px-6 text-[14px] font-extrabold text-white transition-colors hover:border-brand-accent"
            >
              Kliniğimiz <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>

        {/* İkiye bölünmüş fotoğraf çerçevesi */}
        <div className="relative grid aspect-[16/10] grid-cols-2 gap-1 overflow-hidden rounded-[26px] border border-white/15 shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
          <div className="relative">
            <Image
              src="/images/klinik/tedavi-odasi-1.jpg"
              alt="Dentakim tedavi odası ve diş ünitesi"
              fill
              sizes="(max-width: 1024px) 50vw, 26vw"
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/klinik/bekleme-alani.jpg"
              alt="Dentakim bekleme alanı"
              fill
              sizes="(max-width: 1024px) 50vw, 26vw"
              className="object-cover"
            />
          </div>
          <span
            aria-hidden
            className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]"
          />
        </div>

        {/* Bilgi paneli */}
        <div className="rounded-[22px] border border-white/15 bg-white/[0.04] p-5">
          <p className="text-[11px] font-bold text-white/70">Klinik bilgisi</p>
          <dl className="mt-4 space-y-2.5 text-[12.5px]">
            {[
              ["Adres", "Sultan Murat Cd. No:86 A"],
              ["Semt", `Fevzi Çakmak, ${BUSINESS.address.district}`],
              ["Hafta içi", `${BUSINESS.hours.weekdays.opens} – ${BUSINESS.hours.weekdays.closes}`],
              ["Cumartesi", `${BUSINESS.hours.saturday.opens} – ${BUSINESS.hours.saturday.closes}`],
              ["Pazar", "Kapalı"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between gap-3 rounded-[10px] border border-white/10 bg-black/20 px-3 py-2.5"
              >
                <dt className="text-white/60">{k}</dt>
                <dd className="text-right font-bold text-white">{v}</dd>
              </div>
            ))}
          </dl>
          <a
            href={BUSINESS.google.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-[10px] border border-white/15 py-2.5 text-[12px] font-bold text-white/80 transition-colors hover:text-white"
          >
            Google Haritalar&apos;da aç <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
