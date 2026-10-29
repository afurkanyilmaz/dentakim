import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import { generateMeta } from "@/lib/seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { getContactPageSchema, getBreadcrumbSchema } from "@/lib/schema";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";

export const metadata: Metadata = generateMeta({
  title: "İletişim — Dentakim Küçükçekmece",
  description:
    "Dentakim Ağız ve Diş Sağlığı Polikliniği iletişim: Fevzi Çakmak, Sultan Murat Cd. No:86 A, 34295 Küçükçekmece/İstanbul. Telefon +90 553 313 78 88.",
  slug: "iletisim",
});

const WA_DEEP =
  "https://wa.me/905533137888?text=Merhaba, randevu almak istiyorum.";

export default function IletisimPage() {
  return (
    <main className="pb-16">
      <JsonLd data={getContactPageSchema()} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Anasayfa", item: "https://dentakim.com/" },
          { name: "İletişim", item: "https://dentakim.com/iletisim" },
        ])}
      />

      <div className="page-hero">
        <div className="mx-auto max-w-[1304px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
          <BreadcrumbNav
            items={[{ label: "Anasayfa", href: "/" }, { label: "İletişim" }]}
          />
          <h1 className="mt-5 font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.02] tracking-display text-white [text-wrap:pretty]">
            İletişim
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1304px] px-5 sm:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold text-brand-dark">
              Dentakim Ağız ve Diş Sağlığı Polikliniği
            </h2>
            <p className="mt-4 text-brand-mid leading-relaxed">
              <span className="font-medium text-brand-dark">Adres:</span>
              <br />
              Fevzi Çakmak, Sultan Murat Cd. No:86 A, 34295 Küçükçekmece/İstanbul,
              Türkiye
            </p>
            <p className="mt-4 text-brand-mid">
              <span className="font-medium text-brand-dark">Telefon:</span>{" "}
              <a
                href={BUSINESS.phone.href}
                className="font-semibold text-brand-primary hover:underline"
              >
                +90 553 313 78 88
              </a>
            </p>
            <p className="mt-2 text-brand-mid">
              <span className="font-medium text-brand-dark">Plus Code:</span>{" "}
              <span className="tabular-nums">{BUSINESS.plusCode}</span>
            </p>
            <p className="mt-2 text-brand-mid">
              <span className="font-medium text-brand-dark">Google:</span>{" "}
              <a
                href={BUSINESS.google.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-link hover:underline"
              >
                İşletme profilimiz
              </a>
            </p>
            <p className="mt-2 text-brand-mid">
              <span className="font-medium text-brand-dark">E-posta:</span>{" "}
              <a href={`mailto:${BUSINESS.email}`} className="text-brand-primary hover:underline">
                {BUSINESS.email}
              </a>
            </p>
            <p className="mt-6 text-sm text-brand-mid">
              <a
                href={WA_DEEP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-full bg-brand-whatsapp px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-whatsapp-dark"
              >
                WhatsApp ile yazın
              </a>
            </p>

            <div className="mt-8 rounded-panel border border-brand-line bg-brand-primary-light/50 p-5 text-sm text-brand-mid">
              <p className="font-semibold text-brand-dark">Kuruluş bilgileri</p>
              <dl className="mt-3 space-y-1.5">
                <div className="flex gap-2">
                  <dt className="shrink-0">Resmi unvan:</dt>
                  <dd>{BUSINESS.legalName}</dd>
                </div>
                {BUSINESS.legal.responsibleManager ? (
                  <div className="flex gap-2">
                    <dt className="shrink-0">Mesul müdür:</dt>
                    <dd>{BUSINESS.legal.responsibleManager}</dd>
                  </div>
                ) : null}
                {BUSINESS.legal.licenseNumber ? (
                  <div className="flex gap-2">
                    <dt className="shrink-0">Faaliyet izni:</dt>
                    <dd>
                      {BUSINESS.legal.licenseNumber} — {BUSINESS.legal.licenseAuthority}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>

            <div className="mt-8 space-y-3 text-sm text-brand-mid">
              <h3 className="font-heading text-lg font-bold text-brand-dark">
                Toplu taşıma
              </h3>
              <p>
                Marmaray Halkalı hattı ve metrobüs bağlantıları ile Küçükçekmece içi
                ulaşım mümkündür. Sultan Murat Caddesi üzerindeki konumumuz, Fevzi
                Çakmak Mahallesi ve çevre mahallelerden yön bulmayı kolaylaştırır. Yakın
                çevredeki ana arterler üzerinden çıkış yaparak caddeyi takip
                edebilirsiniz.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-card border border-border/70 shadow-sm">
            <iframe
              title="Dentakim Google Haritalar — Küçükçekmece Sultan Murat Caddesi"
              src={BUSINESS.google.embedUrl}
              className="h-[360px] w-full lg:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
