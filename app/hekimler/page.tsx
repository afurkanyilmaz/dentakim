import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Stethoscope } from "lucide-react";
import { DOCTORS } from "@/lib/doctors";
import { BUSINESS } from "@/lib/business";
import { generateMeta } from "@/lib/seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { ContactCTA } from "@/components/shared/ContactCTA";

export const metadata: Metadata = generateMeta({
  title: "Hekimlerimiz — Protez, Estetik ve Ağız Cerrahisi",
  description:
    "Dentakim hekim kadrosu: protez ve estetik diş hekimliği alanında Dr. Musa Burak Sakar ve Dr. Berna Kalkan Yardım, ağız-diş-çene cerrahisi alanında Dr. Ahmet Emin Kırıktaş. Küçükçekmece Sultan Murat Caddesi.",
  slug: "hekimler",
});

export default function HekimlerPage() {
  return (
    <main className="pb-16">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Anasayfa", item: `${BUSINESS.website}/` },
          { name: "Hekimler", item: `${BUSINESS.website}/hekimler` },
        ])}
      />

      <div className="border-b border-brand-line bg-brand-primary-light">
        <div className="container mx-auto max-w-[1240px] px-6 py-12">
          <BreadcrumbNav items={[{ label: "Anasayfa", href: "/" }, { label: "Hekimler" }]} />
          <h1 className="mt-5 font-heading text-[clamp(32px,4.6vw,50px)] font-medium leading-[1.12] text-brand-dark [text-wrap:pretty]">
            Hekimlerimiz
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid [text-wrap:pretty]">
            Küçükçekmece&apos;deki kliniğimizde protez ve ağız cerrahisi alanlarında hasta
            kabul eden hekimlerimiz. Tedavinizi kimin yapacağını önceden bilirsiniz.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-[1240px] px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((doctor) => (
            <Link
              key={doctor.slug}
              href={`/hekimler/${doctor.slug}`}
              className="group flex flex-col overflow-hidden rounded-card border border-brand-line bg-white transition-colors hover:border-brand-line-strong"
            >
              <span className="relative block aspect-[4/5] w-full overflow-hidden bg-brand-primary-light">
                {doctor.photo ? (
                  <Image
                    src={doctor.photo}
                    alt={`${doctor.name} — ${doctor.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <span className="flex size-full items-center justify-center text-brand-accent">
                    <Stethoscope className="size-10" aria-hidden />
                  </span>
                )}
              </span>
              <span className="flex flex-1 flex-col gap-3 p-[26px]">
              <span className="font-heading text-[26px] font-semibold leading-[1.2] text-brand-dark">
                {doctor.name}
              </span>
              <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-accent">{doctor.specialization}</span>
              <span className="text-[14.5px] leading-[1.6] text-brand-mid">{doctor.summary}</span>
                <span className="mt-auto pt-2 text-sm font-bold text-brand-link transition-colors group-hover:text-brand-dark">
                  Profili görüntüle →
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <ContactCTA
            title="Hangi hekimden randevu almak istediğinizi biliyor musunuz?"
            description="WhatsApp'tan yazın, uygun gün ve saati birlikte belirleyelim."
          />
        </div>
      </div>
    </main>
  );
}
