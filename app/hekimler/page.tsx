import type { Metadata } from "next";
import Link from "next/link";
import { DOCTORS } from "@/lib/doctors";
import { SERVICES } from "@/lib/constants";
import { BUSINESS } from "@/lib/business";
import { generateMeta } from "@/lib/seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { DoctorCard } from "@/components/shared/DoctorCard";
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

      <div className="page-hero">
        <div className="mx-auto max-w-[1304px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
          <BreadcrumbNav items={[{ label: "Anasayfa", href: "/" }, { label: "Hekimler" }]} />
          <h1 className="mt-5 font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.02] tracking-display text-white [text-wrap:pretty]">
            Hekimlerimiz
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid [text-wrap:pretty]">
            Küçükçekmece&apos;deki kliniğimizde protez ve ağız cerrahisi alanlarında hasta
            kabul eden hekimlerimiz. Tedavinizi kimin yapacağını önceden bilirsiniz.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1304px] px-5 sm:px-8 py-14">
        <div className="grid gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>

        <section aria-labelledby="hekim-tedavi" className="mt-16">
          <h2 id="hekim-tedavi" className="font-heading text-[clamp(24px,2.8vw,32px)] font-bold tracking-[-0.03em] text-brand-light">
            Hangi hekim hangi tedaviyi uygular?
          </h2>
          <p className="mt-3 max-w-[760px] text-[15.5px] leading-[1.75] text-brand-mid">
            Kliniğimizde {BUSINESS.team.doctorCount} hekim {BUSINESS.team.areas} alanlarında
            çalışır. İmplant tedavilerinde cerrahi ve protez aşamaları farklı hekimler
            tarafından aynı takvimde planlanır; estetik tedavilerde renk ve form seçimi
            muayenede birlikte yapılır.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {DOCTORS.map((d) => (
              <div key={d.slug} className="rounded-[18px] border border-brand-line bg-brand-card p-5">
                <Link href={`/hekimler/${d.slug}`} className="font-heading text-[19px] font-bold text-brand-light hover:text-brand-accent-dark">
                  {d.name}
                </Link>
                <p className="mt-1 text-[12.5px] font-bold text-brand-accent-dark">{d.specialization}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {d.serviceSlugs.map((slug) => {
                    const sv = SERVICES.find((x) => x.slug === slug);
                    return sv ? (
                      <li key={slug}>
                        <Link
                          href={`/hizmetler/${slug}`}
                          className="inline-block rounded-full border border-brand-line px-3 py-1 text-[12.5px] font-semibold text-brand-mid transition-colors hover:border-brand-accent hover:text-brand-light"
                        >
                          {sv.title}
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

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
