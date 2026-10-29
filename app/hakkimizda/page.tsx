import type { Metadata } from "next";
import Link from "next/link";
import { generateMeta } from "@/lib/seo";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = generateMeta({
  title: "Hakkımızda — Dentakim Küçükçekmece",
  description:
    "Dentakim Ağız ve Diş Sağlığı Polikliniği: Küçükçekmece’de güvenilir diş tedavisi, deneyimli ekip ve hasta odaklı yaklaşım.",
  slug: "hakkimizda",
});

export default function HakkimizdaPage() {
  return (
    <main className="pb-16">
      <div className="page-hero">
        <div className="mx-auto max-w-[944px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
          <h1 className="font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.02] tracking-display text-white [text-wrap:pretty]">
            Hakkımızda
          </h1>
          <p className="mt-3 text-lg text-brand-mid">
            {BUSINESS.displayName} olarak Küçükçekmece’de şeffaf, güvenli ve konforlu diş
            hekimliği sunuyoruz.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[944px] px-5 sm:px-8 py-14">
        <div className="space-y-4 text-brand-mid leading-relaxed">
          <p>
            Dentakim; Fevzi Çakmak Mahallesi, Sultan Murat Caddesi üzerinde
            konumlanan, ailelerin ve çalışanların kolayca ulaşabildiği bir ağız ve
            diş sağlığı polikliniğidir. Amacımız, tanı ve tedavi süreçlerini sade
            bir dille anlatmak, her hastanın hedeflerine uygun kişisel planlar
            oluşturmak ve modern diş hekimliği standartlarını erişilebilir kılmaktır.
          </p>
          <p>
            Klinik içi akışımız; muayene, radyoloji ihtiyacının belirlenmesi, risklerin
            konuşulması ve onam sonrası uygulama adımlarıyla ilerler. İmplant,
            ortodonti, endodonti, pedodonti ve estetik restorasyonlar gibi farklı
            branşlarda koordineli çalışarak “tek elden” planlama sunmayı hedefleriz.
          </p>
          <p>
            Dr. Musa Burak Sakar liderliğindeki ekip, özellikle ağrı kontrolü ve
            hasta iletişimi konularında hassas bir çizgi izler. Çocuk hastalarda
            pozitif deneyim oluşturmak, yetişkin hastalarda ise iş ve aile temposuna
            uygun randevu düzeni sağlamak önceliklerimizdendir.
          </p>
          <p>
            Sterilizasyon, sarf malzeme izlenebilirliği ve radyasyon güvenliği gibi
            konularda prosedürlerimiz güncel önerilerle uyumludur. Şeffaf fiyat
            özetleri ve yazılı tedavi planları ile sürpriz yaşanmaması için çaba
            gösteririz.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-brand-accent text-brand-dark hover:bg-brand-accent/90"
            )}
          >
            WhatsApp&apos;tan Bilgi Al
          </a>
          <Link href="/iletisim" className={buttonVariants({ variant: "outline" })}>
            İletişim
          </Link>
        </div>
      </div>
    </main>
  );
}
