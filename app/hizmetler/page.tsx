import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import { whatsappUrl } from "@/lib/business";
import { TREATMENT_BLURBS, TreatmentCard } from "@/components/shared/TreatmentCard";

export const metadata: Metadata = generateMeta({
  title: "Diş Tedavileri ve Hizmetler",
  description:
    "Dentakim Küçükçekmece tedavileri: implant, All-on-4, All-on-6, hibrit protez, zirkonyum, ortodonti, beyazlatma, kanal tedavisi, çocuk diş hekimliği ve dolgu.",
  slug: "hizmetler",
});

export default function HizmetlerPage() {
  return (
    <main className="pb-16">
      <div className="page-hero">
        <div className="mx-auto max-w-[1304px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
          <h1 className="font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.02] tracking-display text-white [text-wrap:pretty]">
            Hizmetlerimiz
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid [text-wrap:pretty]">
            Küçükçekmece Sultan Murat Caddesi’ndeki kliniğimizde sunduğumuz başlıca
            tedaviler. Detaylı bilgi için kartlara tıklayın.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1304px] px-5 py-[clamp(56px,6vw,96px)] sm:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
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
