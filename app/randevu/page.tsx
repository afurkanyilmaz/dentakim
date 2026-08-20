import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { generateMeta } from "@/lib/seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { getBreadcrumbSchema, getFAQPageSchema } from "@/lib/schema";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { MedicalDisclaimer } from "@/components/shared/MedicalDisclaimer";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = generateMeta({
  title: "Randevu",
  description:
    "Dentakim Küçükçekmece'de randevu nasıl alınır? WhatsApp ve telefon ile randevu, çalışma saatleri, ilk muayenede izlenen adımlar ve yanınızda getirmeniz gerekenler.",
  slug: "randevu",
});

const FAQS = [
  {
    question: "Randevu nasıl alınır?",
    answer:
      `En hızlı yol WhatsApp: ${BUSINESS.phone.display} numarasına yazın, aynı gün içinde dönüş yapalım. Dilerseniz aynı numaradan telefonla arayabilir veya kliniğe uğrayarak randevu oluşturabilirsiniz.`,
  },
  {
    question: "Randevu için ne kadar önceden aramalıyım?",
    answer:
      "Planlı muayeneler genellikle birkaç gün içinde ayarlanabilir. Ağrı, şişlik veya kırık diş gibi acil durumlarda durumunuzu belirtin; günlük programda öncelik açmaya çalışıyoruz.",
  },
  {
    question: "İlk muayenede ne yapılır?",
    answer:
      "Ağız içi muayene yapılır, gerekiyorsa panoramik röntgen alınır. Şikâyetiniz ve beklentiniz dinlenir, ardından tedavi seçenekleri ve tahmini seans sayısı yazılı olarak paylaşılır. İlk görüşmede genellikle işlem yapılmaz.",
  },
  {
    question: "Yanımda ne getirmeliyim?",
    answer:
      "Kimlik belgeniz yeterlidir. Daha önce çekilmiş röntgeniniz, kullandığınız ilaçların listesi veya kronik hastalığınıza dair raporunuz varsa getirmeniz tedavi planlamasını kolaylaştırır.",
  },
  {
    question: "Randevumu değiştirebilir miyim?",
    answer:
      "Elbette. Gelemeyeceğinizi mümkün olduğunca önceden WhatsApp'tan bildirirseniz saatinizi başka bir hastaya açabilir, size de uygun bir zaman ayarlayabiliriz.",
  },
];

export default function RandevuPage() {
  return (
    <main className="pb-16">
      <JsonLd data={getFAQPageSchema(FAQS)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Anasayfa", item: `${BUSINESS.website}/` },
          { name: "Randevu", item: `${BUSINESS.website}/randevu` },
        ])}
      />

      <div className="border-b border-brand-line bg-brand-primary-light">
        <div className="container mx-auto max-w-[880px] px-6 py-12">
          <BreadcrumbNav items={[{ label: "Anasayfa", href: "/" }, { label: "Randevu" }]} />
          <p className="mt-6 text-[12.5px] font-bold uppercase tracking-[0.16em] text-brand-accent">
            Randevu
          </p>
          <h1 className="mt-3 font-heading text-[clamp(32px,4.6vw,50px)] font-medium leading-[1.12] text-brand-dark [text-wrap:pretty]">
            Küçükçekmece&apos;de diş hekimi randevusu
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid [text-wrap:pretty]">
            Randevu için form doldurmanıza gerek yok. WhatsApp&apos;tan yazın ya da doğrudan
            arayın; uygun günü birlikte belirleyelim.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappUrl("Merhaba, randevu oluşturmak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-whatsapp px-7 text-[15px] font-bold text-white transition-colors hover:bg-brand-whatsapp-dark"
            >
              <MessageCircle className="size-5" aria-hidden />
              WhatsApp&apos;tan Yazın
            </a>
            <a
              href={BUSINESS.phone.href}
              className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-brand-line-strong px-7 text-[15px] font-semibold text-brand-dark transition-colors hover:border-brand-dark"
            >
              <Phone className="size-5" aria-hidden />
              {BUSINESS.phone.display}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[880px] px-6 py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-card border border-brand-line bg-white p-[26px]">
            <Clock className="size-5 text-brand-accent" aria-hidden />
            <h2 className="mt-3 font-heading text-[22px] font-semibold text-brand-dark">
              Çalışma saatleri
            </h2>
            <dl className="mt-3 space-y-1.5 text-[15px] text-brand-mid">
              <div className="flex justify-between gap-4">
                <dt>{BUSINESS.hours.weekdays.days}</dt>
                <dd className="tabular-nums">
                  {BUSINESS.hours.weekdays.opens} – {BUSINESS.hours.weekdays.closes}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>{BUSINESS.hours.saturday.days}</dt>
                <dd className="tabular-nums">
                  {BUSINESS.hours.saturday.opens} – {BUSINESS.hours.saturday.closes}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>{BUSINESS.hours.sunday.days}</dt>
                <dd>Kapalı</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-card border border-brand-line bg-white p-[26px]">
            <MapPin className="size-5 text-brand-accent" aria-hidden />
            <h2 className="mt-3 font-heading text-[22px] font-semibold text-brand-dark">
              Klinik adresi
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-brand-mid">
              {BUSINESS.address.street}
              <br />
              {BUSINESS.address.postalCode} {BUSINESS.address.district} / {BUSINESS.address.city}
            </p>
            <Link
              href="/iletisim"
              className="mt-3 inline-block text-sm font-bold text-brand-link hover:text-brand-dark"
            >
              Harita ve ulaşım →
            </Link>
          </div>
        </div>

        <section className="mt-14" aria-labelledby="randevu-sss">
          <h2
            id="randevu-sss"
            className="mb-6 font-heading text-[clamp(24px,3.2vw,32px)] font-semibold leading-[1.25] text-brand-dark"
          >
            Randevu hakkında sık sorulanlar
          </h2>
          <FAQAccordion items={FAQS} />
        </section>

        <p className="mt-10 text-[15px] text-brand-mid">
          Hangi tedaviye ihtiyacınız olduğundan emin değilseniz{" "}
          <Link href="/hizmetler" className="font-bold text-brand-link hover:text-brand-dark">
            tedavi sayfalarımıza
          </Link>{" "}
          göz atabilir veya{" "}
          <Link href="/hekimler" className="font-bold text-brand-link hover:text-brand-dark">
            hekimlerimizi
          </Link>{" "}
          inceleyebilirsiniz.
        </p>

        <MedicalDisclaimer className="mt-10" />
      </div>
    </main>
  );
}
