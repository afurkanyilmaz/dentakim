import Link from "next/link";
import { ClipboardCheck, Layers, ListChecks, Phone } from "lucide-react";
import { whatsappUrl } from "@/lib/business";
import { Eyebrow } from "@/components/shared/Section";

/**
 * Fiyatlandırma yaklaşımı — rakam, kampanya veya taksit vaadi içermez
 * (sağlık tanıtım kuralları). İçerik /fiyatlar sayfasıyla tutarlıdır.
 */
const CARDS = [
  { big: "Yazılı", sub: "Teklif", desc: "Muayene sonrası plan ve tutar yazılı olarak paylaşılır.", Icon: ClipboardCheck },
  { big: "Kalem", sub: "Kalem", desc: "Her işlem ve seans ayrı satırda gösterilir.", Icon: ListChecks },
  { big: "Malzeme", sub: "Seçimi", desc: "İmplant sistemi ve kaplama türü seçenekleri yan yana anlatılır.", Icon: Layers },
  { big: "Ödeme", sub: "Bilgisi", desc: "Güncel ödeme seçeneklerini telefonla veya randevuda sorabilirsiniz.", Icon: Phone },
];

const FACTORS = [
  ["Tanı", "Muayene ve görüntüleme bulguları"],
  ["Materyal", "İmplant sistemi, zirkonyum, kompozit"],
  ["Süre", "Seans sayısı ve iyileşme takvimi"],
];

export function PricingSection() {
  return (
    <section aria-labelledby="fiyat-baslik" className="bg-brand-surface">
      <div className="mx-auto grid max-w-[1304px] gap-12 px-5 py-[clamp(64px,6vw,82px)] sm:px-8 lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:gap-16">
        <div>
          <Eyebrow className="mb-5">Şeffaf fiyatlandırma</Eyebrow>
          <h2
            id="fiyat-baslik"
            className="font-heading text-[clamp(40px,5vw,72px)] font-bold leading-[1.02] tracking-display text-brand-light"
          >
            Fiyatı <span className="text-brand-accent">tahmin etmeyin</span>, yazılı öğrenin.
          </h2>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.8] text-brand-mid sm:text-[18px]">
            Tedavi ücreti tanıya, kullanılan materyale ve seans sayısına göre
            değişir. İnternetteki tek bir rakam yerine size özel planı muayene
            sonrası paylaşıyoruz.
          </p>

          <div className="mt-8 max-w-[560px] rounded-[22px] border border-brand-line bg-[linear-gradient(160deg,#141A28,#0D121C)] p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-brand-mid">
                Fiyatı belirleyen etkenler
              </p>
              <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[10.5px] font-bold text-brand-mid">
                Muayene sonrası netleşir
              </span>
            </div>
            <dl className="mt-5 grid gap-4 sm:grid-cols-3">
              {FACTORS.map(([k, v]) => (
                <div key={k}>
                  <dt className="font-heading text-[24px] font-extrabold tracking-[-0.04em] text-brand-light">{k}</dt>
                  <dd className="mt-1 text-[12.5px] leading-[1.5] text-brand-mid">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappUrl("Merhaba, tedavi ücretleri hakkında bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[54px] items-center gap-2 rounded-[14px] bg-brand-ink px-7 text-[15px] font-extrabold text-white transition-colors hover:bg-brand-accent"
            >
              Bilgi Al <span aria-hidden>↗</span>
            </a>
            <Link
              href="/fiyatlar"
              className="inline-flex h-[54px] items-center rounded-[14px] border border-white/20 px-7 text-[15px] font-extrabold text-brand-light transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              Fiyatlandırma
            </Link>
          </div>
        </div>

        <ul className="grid content-center gap-4 sm:grid-cols-2">
          {CARDS.map(({ big, sub, desc, Icon }, i) => (
            <li
              key={big}
              className={
                "relative flex min-h-[260px] flex-col rounded-[22px] border p-6 lg:min-h-[300px] " +
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
