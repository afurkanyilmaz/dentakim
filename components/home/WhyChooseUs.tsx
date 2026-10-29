import Link from "next/link";
import { ClipboardList, HeartPulse, ScanLine, Users } from "lucide-react";
import { DISPLAY_H2, Eyebrow } from "@/components/shared/Section";

/** Sağdaki 2 × 2 özellik kartları — yalnızca klinikte gerçekten uygulanan süreçler. */
const FEATURES = [
  { big: "Dijital", sub: "Görüntüleme", desc: "Panoramik röntgen ve gerektiğinde tomografi ile tanı.", Icon: ScanLine },
  { big: "Yazılı", sub: "Tedavi Planı", desc: "Seçenekler, seans sayısı ve süre yazılı olarak paylaşılır.", Icon: ClipboardList },
  { big: "Ayrı", sub: "Çalışma Alanları", desc: "Protez ve ağız cerrahisi fazlarını farklı hekimler yürütür.", Icon: Users },
  { big: "Konfor", sub: "Odaklı Seans", desc: "Lokal anestezi ve sakin iletişimle planlanan randevular.", Icon: HeartPulse },
];

const STEPS = ["İlk görüşme", "Muayene ve görüntüleme", "Yazılı tedavi planı", "Tedavi ve takip"];

/**
 * "Neden Dentakim" — ince ızgara zeminli vitrin bölümü: solda başlık,
 * tedavi akışı kartı ve iki düğme; sağda dört özellik kartı.
 */
export function WhyChooseUs() {
  return (
    <section aria-labelledby="neden-baslik" className="bg-grid bg-brand-surface">
      <div className="mx-auto grid max-w-[1304px] gap-12 px-5 py-[clamp(64px,6vw,84px)] sm:px-8 lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:gap-16">
        <div>
          <Eyebrow className="mb-5">Neden Dentakim?</Eyebrow>
          <h2 id="neden-baslik" className={DISPLAY_H2}>
            Planlı, şeffaf ve konforlu bir klinik.
          </h2>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.8] text-brand-mid sm:text-[18px]">
            Muayeneden kontrol randevusuna kadar her aşamayı önceden
            anlatıyoruz: ne yapılacağını, ne kadar süreceğini ve hangi
            hekimin uygulayacağını baştan biliyorsunuz.
          </p>

          {/* Tedavi akışı kartı */}
          <div className="mt-8 max-w-[560px] rounded-[22px] border border-brand-line bg-[linear-gradient(160deg,#141A28,#0D121C)] p-6">
            <p className="text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-brand-mid">
              Tedavi akışı
            </p>
            <p className="mt-3 font-heading text-[19px] font-bold tracking-[-0.02em] text-brand-light">
              İlk randevunuzda ne oluyor?
            </p>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2">
              {STEPS.map((step, i) => (
                <li key={step} className="flex items-baseline gap-3">
                  <span className="font-heading text-[26px] font-extrabold leading-none tracking-[-0.04em] text-brand-accent">
                    {i + 1}
                  </span>
                  <span className="text-[13.5px] font-semibold text-brand-light">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10" aria-hidden>
              <div className="h-full w-3/4 rounded-full bg-brand-light" />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/randevu"
              className="inline-flex h-[54px] items-center gap-2 rounded-[14px] border border-brand-ink bg-brand-ink px-7 text-[15px] font-extrabold text-white transition-colors hover:bg-brand-accent hover:border-brand-accent"
            >
              Randevu Al <span aria-hidden>↗</span>
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex h-[54px] items-center rounded-[14px] border border-white/20 px-7 text-[15px] font-extrabold text-brand-light transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              Tedavileri İncele
            </Link>
          </div>
        </div>

        <ul className="grid content-center gap-4 sm:grid-cols-2">
          {FEATURES.map(({ big, sub, desc, Icon }, i) => (
            <li
              key={big}
              className={
                "relative flex min-h-[260px] flex-col rounded-[22px] border p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] lg:min-h-[300px] " +
                (i === 0
                  ? "border-white/25 bg-[linear-gradient(150deg,#4A4E57,#1A1F2B_55%,#121722)]"
                  : "border-brand-line bg-[linear-gradient(160deg,#151B29,#0B0F18)]")
              }
            >
              <span className="inline-flex size-11 items-center justify-center rounded-[12px] bg-white/[0.06] text-brand-light">
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="absolute right-6 top-7 size-2 rounded-full bg-brand-accent" aria-hidden />
              <p className="mt-auto pt-8 font-heading text-[clamp(30px,2.6vw,38px)] font-extrabold leading-none tracking-[-0.04em] text-brand-light">
                {big}
              </p>
              <p className="mt-1.5 text-[15px] font-bold text-brand-light">{sub}</p>
              <p className="mt-2 text-[13px] leading-[1.55] text-brand-mid">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
