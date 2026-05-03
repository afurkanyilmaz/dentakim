import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
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
      <div className="border-b border-border/60 bg-brand-primary-light/40">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <h1 className="font-heading text-3xl font-bold text-brand-dark md:text-4xl">
            Hizmetlerimiz
          </h1>
          <p className="mt-3 max-w-2xl text-brand-mid">
            Küçükçekmece Sultan Murat Caddesi’ndeki kliniğimizde sunduğumuz başlıca
            tedaviler. Detaylı bilgi için kartlara tıklayın.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl px-4 py-12">
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
          <Link href="/randevu" className="font-medium text-brand-primary underline">
            Randevu al
          </Link>{" "}
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
