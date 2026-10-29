import type { Metadata } from "next";
import Link from "next/link";
import { generateMeta } from "@/lib/seo";
import { whatsappUrl } from "@/lib/business";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = generateMeta({
  title: "Fiyatlar ve Ücretlendirme",
  description:
    "Dentakim Küçükçekmece’de şeffaf planlama: tedavi ücretleri vaka bazında değişir. Muayene ön görüşme ile net özet.",
  slug: "fiyatlar",
});

export default function FiyatlarPage() {
  return (
    <main className="pb-16">
      <div className="page-hero">
        <div className="container mx-auto max-w-[880px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
          <h1 className="font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.02] tracking-display text-white [text-wrap:pretty]">
            Fiyatlar
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid">
            Diş tedavisi maliyetleri; tanı, kullanılan materyal ve seans sayısına göre
            değişir. Web sitemizde genel aralık yerine, muayene sonrası yazılı plan
            paylaşmayı tercih ediyoruz.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[944px] px-5 sm:px-8 py-14">
        <div className="space-y-4 text-brand-mid leading-relaxed">
          <p>
            İmplant, ortodonti ve protez gibi uzun soluklu tedavilerde ön değerlendirme
            olmadan net rakam vermek yanıltıcı olabilir. Küçükçekmece’deki kliniğimizde
            panoramik röntgen ve klinik muayene sonrası seçenekler yan yana
            sıralanır.
          </p>
          <p>
            Ön görüşmede hedeflerinizi dinler, gerekiyorsa radyoloji ve
            fotoğraf çekimleriyle tanıyı tamamlarız. Ardından kalemler ve tahmini
            seans takvimi yazılı özetlenir.
          </p>
          <p>
            Sigorta ve kurum anlaşmaları değişkenlik gösterebilir; fatura ve kodlama
            konusunda yardımcı oluruz. Taksit seçenekleri hakkında güncel bilgi için
            lütfen arayın.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={whatsappUrl("Merhaba, tedavi fiyatları hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-brand-accent text-brand-dark hover:bg-brand-accent/90"
            )}
          >
            WhatsApp&apos;tan Bilgi Al
          </a>
          <Link href="/blog/kucukcekmece-dis-fiyatlari" className={buttonVariants({ variant: "outline" })}>
            Blog: Küçükçekmece diş fiyatları
          </Link>
        </div>
      </div>
    </main>
  );
}
