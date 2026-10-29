import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/business";
import { CLINIC_PHOTOS } from "@/lib/clinic-photos.generated";
import { generateMeta } from "@/lib/seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Clock, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = generateMeta({
  title: "Kliniğimiz",
  description:
    "Dentakim Ağız ve Diş Sağlığı Polikliniği: Küçükçekmece Sultan Murat Caddesi'ndeki kliniğimiz, hekim kadromuz, çalışma saatlerimiz ve ulaşım bilgileri.",
  slug: "klinik",
});

const LINKS = [
  { href: "/klinik/galeri", title: "Galeri", desc: "Tedavi odaları, bekleme alanı ve karşılama bölümünden fotoğraflar" },
  { href: "/hakkimizda", title: "Hakkımızda", desc: "Klinik yaklaşımımız ve çalışma prensiplerimiz" },
  { href: "/hekimler", title: "Hekimlerimiz", desc: "Tedavinizi yapacak hekimler ve çalışma alanları" },
  { href: "/iletisim", title: "İletişim ve Ulaşım", desc: "Adres, harita, toplu taşıma ve iletişim bilgileri" },
  { href: "/bolgeler", title: "Hizmet Bölgeleri", desc: "Küçükçekmece ve çevresinden kliniğe ulaşım" },
  { href: "/sss", title: "Sık Sorulan Sorular", desc: "Tedavi, randevu ve ulaşım hakkında merak edilenler" },
];

export default function KlinikPage() {
  const cover = CLINIC_PHOTOS[0];

  return (
    <main className="pb-16">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Anasayfa", item: `${BUSINESS.website}/` },
          { name: "Klinik", item: `${BUSINESS.website}/klinik` },
        ])}
      />

      <div className="page-hero">
        <div className="mx-auto max-w-[1304px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
          <BreadcrumbNav items={[{ label: "Anasayfa", href: "/" }, { label: "Klinik" }]} />
          <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-accent">
            Kliniğimiz
          </p>
          <h1 className="mt-3 font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.02] tracking-display text-white [text-wrap:pretty]">
            {BUSINESS.displayName}
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid [text-wrap:pretty]">
            Küçükçekmece Fevzi Çakmak Mahallesi, Sultan Murat Caddesi üzerindeki
            kliniğimizde implant, protez, estetik diş hekimliği ve ağız cerrahisi
            uygulamaları yürütülmektedir.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1304px] px-5 sm:px-8 py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {cover ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-brand-line">
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          ) : null}

          <div className="flex flex-col gap-6">
            <div className="flex gap-3.5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden />
              <p className="text-[15.5px] leading-[1.7] text-brand-mid">
                {BUSINESS.address.full}
                <br />
                <span className="text-[13.5px] text-brand-faint">
                  Plus Code: {BUSINESS.plusCode}
                </span>
              </p>
            </div>
            <div className="flex gap-3.5">
              <Phone className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden />
              <a
                href={BUSINESS.phone.href}
                className="text-[17px] font-bold text-brand-dark hover:text-brand-accent"
              >
                {BUSINESS.phone.display}
              </a>
            </div>
            <div className="flex gap-3.5">
              <Clock className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden />
              <dl className="w-full max-w-xs space-y-1 text-[15px] text-brand-mid">
                <div className="flex justify-between gap-6">
                  <dt>{BUSINESS.hours.weekdays.days}</dt>
                  <dd className="tabular-nums">
                    {BUSINESS.hours.weekdays.opens} – {BUSINESS.hours.weekdays.closes}
                  </dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt>{BUSINESS.hours.saturday.days}</dt>
                  <dd className="tabular-nums">
                    {BUSINESS.hours.saturday.opens} – {BUSINESS.hours.saturday.closes}
                  </dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt>{BUSINESS.hours.sunday.days}</dt>
                  <dd>Kapalı</dd>
                </div>
              </dl>
            </div>
            <p className="text-[15px] text-brand-mid">
              Klinikte {BUSINESS.team.doctorCount} hekim ({BUSINESS.team.areas}) görev yapmaktadır.{" "}
              <Link href="/hekimler" className="font-bold text-brand-link hover:text-brand-dark">
                Hekimlerimizi tanıyın →
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex flex-col gap-2 rounded-card border border-brand-line bg-brand-card p-[26px] transition-colors hover:border-brand-line-strong"
            >
              <span className="font-heading text-[24px] font-bold leading-[1.2] text-brand-dark">
                {l.title}
              </span>
              <span className="text-[14.5px] leading-[1.6] text-brand-mid">{l.desc}</span>
              <span className="mt-auto pt-2 text-sm font-bold text-brand-link transition-colors group-hover:text-brand-dark">
                Görüntüle →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14">
          <ContactCTA />
        </div>
      </div>
    </main>
  );
}
