import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SERVICE_GROUP_LABEL } from "@/lib/constants";
import { JsonLd } from "@/components/shared/JsonLd";
import { getServiceListSchema } from "@/lib/schema";
import { generateMeta } from "@/lib/seo";
import { whatsappUrl } from "@/lib/business";
import { TREATMENT_BLURBS, TreatmentCard } from "@/components/shared/TreatmentCard";

export const metadata: Metadata = generateMeta({
  title: "Diş Tedavileri ve Hizmetler",
  description:
    "Dentakim Küçükçekmece tedavileri: gülüş tasarımı (Hollywood Smile), implant, zirkonyum, lamina veneer, All-on-4, All-on-6, hibrit protez, beyazlatma, ortodonti ve daha fazlası.",
  slug: "hizmetler",
});

export default function HizmetlerPage() {
  return (
    <main className="pb-16">
      <JsonLd data={getServiceListSchema(SERVICES.map((s) => ({ slug: s.slug, title: s.title })))} />
      <div className="page-hero">
        <div className="mx-auto max-w-[1304px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
          <h1 className="font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.02] tracking-display text-white [text-wrap:pretty]">
            Tedavilerimiz
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid [text-wrap:pretty]">
            Küçükçekmece Sultan Murat Caddesi’ndeki kliniğimizde sunduğumuz başlıca
            tedaviler. Detaylı bilgi için kartlara tıklayın.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1304px] px-5 py-[clamp(56px,6vw,96px)] sm:px-8">
        {(["estetik", "implant", "genel"] as const).map((g) => (
          <section key={g} aria-labelledby={`grup-${g}`} className="mb-16 last:mb-0">
            <h2
              id={`grup-${g}`}
              className="mb-8 font-heading text-[clamp(28px,3.2vw,44px)] font-bold leading-[1.05] tracking-display text-brand-light"
            >
              {SERVICE_GROUP_LABEL[g]}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.filter((s) => s.group === g).map((s, i) => (
                <TreatmentCard
                  key={s.slug}
                  slug={s.slug}
                  title={s.title}
                  desc={TREATMENT_BLURBS[s.slug] ?? s.desc}
                  icon={s.icon}
                  index={i + 1}
                />
              ))}
            </div>
          </section>
        ))}
        <p className="mt-10 text-center text-sm text-brand-mid">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand-accent underline underline-offset-4"
          >
            WhatsApp&apos;tan bilgi alın
          </a>{" "}
          veya{" "}
          <Link href="/iletisim" className="font-bold text-brand-accent underline underline-offset-4">
            iletişime geçin
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
