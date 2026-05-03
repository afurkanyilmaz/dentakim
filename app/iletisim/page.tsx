import type { Metadata } from "next";
import { CLINIC } from "@/lib/constants";
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

      <div className="border-b border-border/60 bg-brand-primary-light/40">
        <div className="container mx-auto max-w-6xl px-4 py-10">
          <BreadcrumbNav
            items={[{ label: "Anasayfa", href: "/" }, { label: "İletişim" }]}
          />
          <h1 className="mt-4 font-heading text-3xl font-bold text-brand-dark md:text-4xl">
            İletişim
          </h1>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
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
                href={`tel:${CLINIC.phoneRaw}`}
                className="font-semibold text-brand-primary hover:underline"
              >
                +90 553 313 78 88
              </a>
            </p>
            <p className="mt-2 text-brand-mid">
              <span className="font-medium text-brand-dark">E-posta:</span>{" "}
              <a href={`mailto:${CLINIC.email}`} className="text-brand-primary hover:underline">
                {CLINIC.email}
              </a>
            </p>
            <p className="mt-6 text-sm text-brand-mid">
              <a
                href={WA_DEEP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#25D366] px-4 py-2 font-semibold text-white hover:opacity-95"
              >
                WhatsApp ile yazın
              </a>
            </p>

            <div className="mt-10 space-y-3 text-sm text-brand-mid">
              <h3 className="font-heading text-lg font-semibold text-brand-dark">
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

          <div className="overflow-hidden rounded-2xl border border-border/70 shadow-sm">
            <iframe
              title="Dentakim Google Haritalar — Küçükçekmece Sultan Murat Caddesi"
              src={CLINIC.googleMapsEmbed}
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
