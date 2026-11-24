import type { Metadata } from "next";
import Link from "next/link";
import { generateMeta } from "@/lib/seo";
import { preloadPageHero } from "@/lib/page-hero";
import { whatsappUrl } from "@/lib/business";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InfoFAQ } from "@/components/shared/InfoFAQ";

/** Fiyatı belirleyen etkenler — rakam veya kampanya içermez (sağlık tanıtım kuralları). */
const PRICE_FACTORS = [
  {
    title: "İmplant tedavisi",
    href: "/hizmetler/implant-tedavisi",
    items: [
      "Yerleştirilecek implant sayısı",
      "Kullanılan implant sistemi (Medigma, Nucleoss, Bilim İmplant, Osstem)",
      "Kemik grefti veya sinüs lifting gerekip gerekmediği",
      "Üst yapı türü (zirkonyum, porselen, hibrit protez)",
    ],
  },
  {
    title: "Zirkonyum kaplama ve lamina",
    href: "/hizmetler/protez-zirkonyum",
    items: [
      "Kaplanacak diş sayısı",
      "Materyal seçimi (zirkonyum, lamina, E-max)",
      "Öncesinde gereken kanal, dolgu veya diş eti tedavisi",
    ],
  },
  {
    title: "Gülüş tasarımı (Hollywood Smile)",
    href: "/hizmetler/gulus-tasarimi",
    items: [
      "Planın kapsamı (birkaç diş veya tüm ön bölge)",
      "Kullanılan yöntemler (beyazlatma, bonding, lamina, zirkonyum)",
      "Dijital tasarım ve prova aşamaları",
    ],
  },
  {
    title: "Şeffaf plak ve ortodonti",
    href: "/hizmetler/seffaf-plak-tedavisi",
    items: [
      "Çapraşıklığın derecesi ve tahmini tedavi süresi",
      "Plak sayısı veya braket türü",
      "Tedavi sonrası pekiştirme plağı",
    ],
  },
  {
    title: "All-on-4 / All-on-6 ve hibrit protez",
    href: "/hizmetler/all-on-4-implant",
    items: [
      "Çene başına implant sayısı (4 veya 6)",
      "Geçici protez ihtiyacı",
      "Kalıcı protez materyali (akrilik, kompozit veya zirkonyum)",
    ],
  },
  {
    title: "Kanal tedavisi ve dolgu",
    href: "/hizmetler/kanal-tedavisi",
    items: [
      "Dişin kök sayısı ve kanal anatomisi",
      "İlk kez mi yoksa yenileme (tekrar kanal) mi olduğu",
      "Sonrasında dolgu veya kaplama gerekip gerekmediği",
    ],
  },
];

const PRICE_FAQ = [
  {
    question: "Telefonda veya WhatsApp'ta kesin fiyat alabilir miyim?",
    answer:
      "Genel bilgi paylaşabiliriz; ancak kesin tutar, muayene ve gerekiyorsa röntgen sonrasında belirlenir. Aynı tedavi adı altında farklı klinik durumlar bulunduğu için muayenesiz verilen tek bir rakam yanıltıcı olabilir.",
  },
  {
    question: "Tedavi planında hangi bilgiler yer alır?",
    answer:
      "Uygulanacak işlemler, kullanılacak materyal, tahmini seans sayısı ve süre ile her kalemin tutarı yazılı olarak ayrı ayrı gösterilir. Birden fazla seçenek varsa yan yana sunulur.",
  },
  {
    question: "Ödeme seçenekleri var mı?",
    answer:
      "Güncel ödeme seçenekleri hakkında bilgi almak için telefonla veya WhatsApp'tan bize ulaşabilir ya da randevunuz sırasında sorabilirsiniz.",
  },
  {
    question: "Tedavi sırasında fiyat değişir mi?",
    answer:
      "Plan, muayene bulgularına göre hazırlanır. Tedavi sırasında öngörülemeyen bir durum (örneğin ek kanal tedavisi ihtiyacı) ortaya çıkarsa, işleme başlamadan önce size bilgi verilir ve onayınız alınır.",
  },
];

export const metadata: Metadata = generateMeta({
  title: "Fiyatlar ve Ücretlendirme",
  description:
    "Dentakim Küçükçekmece’de şeffaf planlama: tedavi ücretleri vaka bazında değişir. Muayene ön görüşme ile net özet.",
  slug: "fiyatlar",
});

export default function FiyatlarPage() {
  preloadPageHero();
  return (
    <main className="pb-16">
      <div className="page-hero">
        <div className="mx-auto max-w-[944px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
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
              "bg-brand-accent text-brand-dark hover:bg-brand-accent hover:text-brand-ink/90"
            )}
          >
            WhatsApp&apos;tan Bilgi Al
          </a>
          <Link href="/blog/kucukcekmece-dis-fiyatlari" className={buttonVariants({ variant: "outline" })}>
            Blog: Küçükçekmece diş fiyatları
          </Link>
        </div>

        <section aria-labelledby="fiyat-etkenler" className="mt-14">
          <h2 id="fiyat-etkenler" className="font-heading text-[clamp(24px,2.8vw,32px)] font-bold tracking-[-0.03em] text-brand-light">
            Tedaviye göre fiyatı etkileyen etkenler
          </h2>
          <p className="mt-3 text-brand-mid leading-relaxed">
            Aşağıdaki etkenler muayene ve görüntüleme sonrasında netleşir; size özel
            tutar, seçenekler yan yana olacak şekilde yazılı olarak paylaşılır.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {PRICE_FACTORS.map((f) => (
              <li key={f.href} className="rounded-[18px] border border-brand-line bg-brand-card p-5">
                <Link href={f.href} className="font-heading text-[19px] font-bold text-brand-light hover:text-brand-accent-dark">
                  {f.title}
                </Link>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[14px] leading-[1.6] text-brand-mid">
                  {f.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <InfoFAQ id="fiyat-sss" title="Fiyatlandırma hakkında sık sorulanlar" items={PRICE_FAQ} />
      </div>
    </main>
  );
}
