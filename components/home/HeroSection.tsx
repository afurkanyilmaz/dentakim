import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

/** Sağdaki fotoğraf kartları — yalnızca kliniğin kendi fotoğrafları. */
const RAIL = [
  {
    src: "/images/klinik/bekleme-alani.jpg",
    alt: "Dentakim Küçükçekmece bekleme alanı",
    caption: "Ferah bekleme alanı",
  },
  {
    src: "/images/klinik/tedavi-odasi-1.jpg",
    alt: "Dentakim tedavi odası ve diş ünitesi",
    caption: "Dijital donanımlı tedavi odası",
  },
  {
    src: "/images/klinik/tedavi-odasi-2.jpg",
    alt: "Dentakim ikinci tedavi odası",
    caption: "Hijyen odaklı çalışma alanı",
  },
];

/**
 * Hero — tam ekran, bulanık klinik fotoğrafı üzerinde sol blok başlık + bronz
 * CTA, sağda fotoğraf kartı dizisi. Header bu bölümün üzerine biner
 * (bkz. negatif üst boşluk).
 */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-baslik"
      className="relative isolate -mt-[75px] overflow-hidden bg-[#090C13] lg:-mt-[140px]"
    >
      <Image
        src="/images/klinik/resepsiyon.jpg"
        alt=""
        fill
        sizes="100vw"
        priority
        className="-z-20 scale-105 object-cover opacity-70 blur-[3px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,12,19,0.92)_0%,rgba(9,12,19,0.72)_45%,rgba(9,12,19,0.45)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-brand-surface to-transparent"
      />

      <div className="mx-auto grid min-h-[100svh] max-w-[1304px] items-center gap-10 px-5 pb-16 pt-[120px] sm:px-8 lg:min-h-[900px] lg:grid-cols-[minmax(0,620px)_1fr] lg:gap-12 lg:pb-12 lg:pt-[170px]">
        <div className="lg:pl-5">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-light">
            {BUSINESS.brandName}
          </p>
          <h1
            id="hero-baslik"
            className="mt-4 font-heading text-[clamp(42px,5vw,74px)] font-bold leading-[0.96] tracking-[-0.055em] text-white"
          >
            Küçükçekmece&apos;de modern diş kliniği
          </h1>
          <p className="mt-6 max-w-[540px] text-[16px] leading-[1.7] text-white/[0.78] sm:text-[18px]">
            İmplant, zirkonyum ve estetik diş tedavilerinde muayene, dijital
            görüntüleme ve yazılı tedavi planıyla ilerliyoruz.
          </p>
          <Link
            href="/randevu"
            className="mt-9 flex h-[58px] w-full items-center justify-between rounded-[2px] bg-brand-accent px-6 text-[16px] font-extrabold text-white transition-[filter] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-[300px]"
          >
            Randevu Oluştur
            <span aria-hidden className="text-[18px]">
              ↗
            </span>
          </Link>
        </div>

        {/* Fotoğraf kartı dizisi */}
        <div className="relative mx-auto flex w-full max-w-[640px] items-end justify-center gap-4 lg:mx-0 lg:justify-start lg:gap-7">
          {RAIL.map((item, i) => (
            <figure
              key={item.src}
              className={
                i === 0
                  ? "w-[46%] shrink-0 lg:w-[270px]"
                  : i === 1
                    ? "w-[38%] shrink-0 opacity-70 lg:w-[230px]"
                    : "hidden shrink-0 opacity-35 2xl:block 2xl:w-[180px]"
              }
            >
              <figcaption className="mb-2.5 text-[11px] font-bold text-white/70">
                {i === 0 ? BUSINESS.brandName : BUSINESS.address.district}
              </figcaption>
              <div
                className={
                  "relative overflow-hidden rounded-[22px] border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.45)] " +
                  (i === 0 ? "aspect-[292/373]" : "aspect-[260/340]")
                }
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 45vw, 292px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-[13px] font-extrabold text-white sm:text-[14px]">
                {item.caption}
              </p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
