import type { ReactNode } from "react";
import { BUSINESS } from "@/lib/business";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { JsonLd } from "@/components/shared/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

type Props = {
  title: string;
  slug: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalPageShell({ title, slug, updatedAt, children }: Props) {
  return (
    <main className="pb-16">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Anasayfa", item: `${BUSINESS.website}/` },
          { name: title, item: `${BUSINESS.website}/${slug}` },
        ])}
      />
      <div className="page-hero">
        <div className="container mx-auto max-w-[880px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
          <BreadcrumbNav items={[{ label: "Anasayfa", href: "/" }, { label: title }]} />
          <h1 className="mt-5 font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.02] tracking-display text-white [text-wrap:pretty]">
            {title}
          </h1>
          <p className="mt-3 text-sm text-brand-mid">Son güncelleme: {updatedAt}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[944px] px-5 sm:px-8 py-14">
        <div className="space-y-6 leading-relaxed text-brand-mid [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-dark [&_h2]:pt-4 [&_li]:mb-2 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>

      </div>
    </main>
  );
}
