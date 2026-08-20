import Image from "next/image";
import Link from "next/link";
import { CLINIC_PHOTOS } from "@/lib/clinic-photos.generated";

/**
 * Tam genişlik klinik görseli şeridi.
 *
 * Kart ızgaraları arasında görsel nefes alanı açar. Galeri sayfasına
 * yönlendirir; kart düzeni tekrar etmez.
 */
export function ClinicStrip() {
  const photos = CLINIC_PHOTOS.slice(0, 3);
  if (photos.length === 0) return null;

  return (
    <section aria-labelledby="klinik-serit" className="bg-brand-surface">
      <div className="grid gap-1 sm:grid-cols-3">
        {photos.map((photo, i) => (
          <div key={photo.src} className="relative aspect-[4/3] overflow-hidden sm:aspect-[3/4]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-wrap items-baseline justify-between gap-4 px-6 py-8">
        <h2
          id="klinik-serit"
          className="font-heading text-[clamp(22px,2.6vw,28px)] font-semibold text-brand-dark"
        >
          Tedavi olacağınız yeri önceden görün
        </h2>
        <Link
          href="/klinik/galeri"
          className="text-sm font-bold text-brand-link transition-colors hover:text-brand-dark"
        >
          Klinik galerisi →
        </Link>
      </div>
    </section>
  );
}
