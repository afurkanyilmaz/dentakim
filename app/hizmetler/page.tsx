import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import { whatsappUrl } from "@/lib/business";
import { getServiceIcon } from "@/lib/service-icons";
import { ServiceCard } from "@/components/shared/ServiceCard";

export const metadata: Metadata = generateMeta({
  title: "Diş Tedavileri ve Hizmetler",
  description:
    "Dentakim Küçükçekmece hizmetleri: implant, beyazlatma, ortodonti, çocuk diş hekimliği, kanal tedavisi, zirkonyum protez ve dolgu.",
  slug: "hizmetler",
});

export default function HizmetlerPage() {
  return (
    <main className="pb-16">
      <div className="border-b border-brand-line bg-brand-primary-light">
        <div className="container mx-auto max-w-[1240px] px-6 py-14">
          <h1 className="font-heading text-[clamp(32px,4.6vw,50px)] font-medium leading-[1.12] text-brand-dark [text-wrap:pretty]">
            Hizmetlerimiz
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid [text-wrap:pretty]">
            Küçükçekmece Sultan Murat Caddesi’ndeki kliniğimizde sunduğumuz başlıca
            tedaviler. Detaylı bilgi için kartlara tıklayın.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-[1240px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.slug}
              href={`/hizmetler/${s.slug}`}
              title={s.title}
              description={s.desc}
              Icon={getServiceIcon(s.icon)}
            />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-brand-mid">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-primary underline"
          >
            WhatsApp&apos;tan bilgi alın
          </a>{" "}
          veya{" "}
          <Link href="/iletisim" className="font-medium text-brand-primary underline">
            iletişime geçin
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
