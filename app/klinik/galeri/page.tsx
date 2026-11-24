import type { Metadata } from "next";
import Image from "next/image";
import { CLINIC_PHOTOS } from "@/lib/clinic-photos.generated";
import { BUSINESS } from "@/lib/business";
import { generateMeta } from "@/lib/seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { InstagramEmbeds } from "@/components/shared/InstagramEmbeds";
import { getIntroReel } from "@/lib/instagram-feed";

/** Fotoğraflardaki alanların açıklamaları — yalnızca klinikte bulunan alanlar. */
const AREAS = [
  {
    title: "Karşılama ve resepsiyon",
    text: "Randevu, kayıt ve tedavi planı bilgilendirmesinin yapıldığı alan. Muayene öncesi kimlik ve varsa önceki röntgenleriniz burada dosyanıza eklenir.",
  },
  {
    title: "Bekleme alanı",
    text: "Randevu saatinize kadar oturabileceğiniz ferah bekleme bölümü. Randevular, bekleme süresini kısa tutacak şekilde planlanır.",
  },
  {
    title: "Tedavi odaları",
    text: "Muayene ve tedavilerin yapıldığı, diş ünitesi bulunan ayrı tedavi odaları. Her hasta sonrası sterilizasyon ve hijyen protokolü uygulanır.",
  },
  {
    title: "Sterilizasyon ve hijyen",
    text: "Tedavide kullanılan aletler her hastadan sonra temizlenir ve sterilizasyon sürecinden geçirilir; tek kullanımlık malzemeler yalnızca bir kez kullanılır. Tedavi odaları hasta aralarında dezenfekte edilir.",
  },
];

export const metadata: Metadata = generateMeta({
  title: "Klinik Galerisi — Tedavi Odaları ve Bekleme Alanı",
  description:
    "Dentakim Küçükçekmece kliniğinin tedavi odaları, bekleme alanı ve karşılama bölümünden fotoğraflar.",
  slug: "klinik/galeri",
});

export default async function GaleriPage() {
  const intro = await getIntroReel();
  return (
    <main className="pb-16">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Anasayfa", item: `${BUSINESS.website}/` },
          { name: "Klinik", item: `${BUSINESS.website}/klinik` },
          { name: "Galeri", item: `${BUSINESS.website}/klinik/galeri` },
        ])}
      />

      <div className="page-hero">
        <div className="mx-auto max-w-[1304px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
          <BreadcrumbNav
            items={[
              { label: "Anasayfa", href: "/" },
              { label: "Klinik", href: "/klinik" },
              { label: "Galeri" },
            ]}
          />
          <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-accent-dark">
            Kliniğimizden
          </p>
          <h1 className="mt-3 font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.02] tracking-display text-white [text-wrap:pretty]">
            Tedavi olacağınız yeri önceden görün
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid">
            {BUSINESS.address.street} adresindeki kliniğimizden kareler.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1304px] px-5 sm:px-8 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLINIC_PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className="relative aspect-[3/4] overflow-hidden rounded-card border border-brand-line bg-brand-primary-light"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                loading={i < 3 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        <section aria-labelledby="galeri-alanlar" className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div>
            <h2 id="galeri-alanlar" className="font-heading text-[clamp(24px,2.8vw,32px)] font-bold tracking-[-0.03em] text-brand-light">
              Kliniğimizde sizi neler bekliyor?
            </h2>
            <dl className="mt-6 space-y-5">
              {AREAS.map((a) => (
                <div key={a.title}>
                  <dt className="font-heading text-[18px] font-bold text-brand-light">{a.title}</dt>
                  <dd className="mt-1 text-[15px] leading-[1.7] text-brand-mid">{a.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          {intro ? (
            <div>
              <p className="mb-2 text-[12px] font-bold text-brand-mid">Klinik tanıtım videosu · Instagram</p>
              <InstagramEmbeds reels={[intro]} bleed={false} />
            </div>
          ) : null}
        </section>

        <div className="mt-12">
          <ContactCTA
            title="Kliniğimizi yerinde görmek ister misiniz?"
            description="Randevu oluşturmadan önce klinik hakkında merak ettiklerinizi WhatsApp'tan sorabilirsiniz."
          />
        </div>
      </div>
    </main>
  );
}
