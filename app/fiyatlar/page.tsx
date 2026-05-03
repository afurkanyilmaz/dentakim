import type { Metadata } from "next";
import Link from "next/link";
import { generateMeta } from "@/lib/seo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = generateMeta({
  title: "Fiyatlar ve Ücretlendirme",
  description:
    "Dentakim Küçükçekmece’de şeffaf planlama: tedavi ücretleri vaka bazında değişir. Ücretsiz ön görüşme ile net özet.",
  slug: "fiyatlar",
});

export default function FiyatlarPage() {
  return (
    <main className="pb-16">
      <div className="border-b border-border/60 bg-brand-primary-light/40">
        <div className="container mx-auto max-w-3xl px-4 py-12">
          <h1 className="font-heading text-3xl font-bold text-brand-dark md:text-4xl">
            Fiyatlar
          </h1>
          <p className="mt-3 text-brand-mid">
            Diş tedavisi maliyetleri; tanı, kullanılan materyal ve seans sayısına göre
            değişir. Web sitemizde genel aralık yerine, muayene sonrası yazılı plan
            paylaşmayı tercih ediyoruz.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <div className="space-y-4 text-brand-mid leading-relaxed">
          <p>
            İmplant, ortodonti ve protez gibi uzun soluklu tedavilerde ön değerlendirme
            olmadan net rakam vermek yanıltıcı olabilir. Küçükçekmece’deki kliniğimizde
            panoramik röntgen ve klinik muayene sonrası seçenekler yan yana
            sıralanır.
          </p>
          <p>
            Ücretsiz ön görüşme ile hedeflerinizi dinler, gerekiyorsa radyoloji ve
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
          <Link
            href="/randevu"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-brand-accent text-brand-dark hover:bg-brand-accent/90"
            )}
          >
            Randevu al
          </Link>
          <Link href="/blog/kucukcekmece-dis-fiyatlari" className={buttonVariants({ variant: "outline" })}>
            Blog: Küçükçekmece diş fiyatları
          </Link>
        </div>
      </div>
    </main>
  );
}
