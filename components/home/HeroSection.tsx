import Image from "next/image";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { Clock, MapPin, Stethoscope } from "lucide-react";

/**
 * Hero — Claude Design (Dentakim Anasayfa.dc.html) düzeni:
 * iki sütun, serif başlık, altın üst başlık, WhatsApp birincil CTA.
 */
export function HeroSection() {
  return (
    <section className="border-b border-brand-line bg-brand-surface">
      <div className="container mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-[clamp(40px,6vw,72px)] lg:grid-cols-2">
        <div>
          <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-brand-accent">
            İstanbul · {BUSINESS.address.district}
          </p>

          <h1 className="mt-5 font-heading text-[clamp(31px,5.4vw,58px)] font-medium leading-[1.08] text-brand-dark [text-wrap:pretty]">
            Küçükçekmece&apos;de Sağlıklı ve Estetik Gülüşler İçin Modern Diş
            Tedavileri
          </h1>

          <p className="mt-5 max-w-xl text-[16px] leading-[1.65] text-brand-mid [text-wrap:pretty] sm:mt-6 sm:text-[17px] sm:leading-[1.7]">
            Küçükçekmece&apos;deki kliniğimizde implant, zirkonyum ve estetik diş
            tedavilerinde hekim kadromuzla size özel çözümler. Dijital planlama,
            lokal anestezi ile konfor odaklı yaklaşım.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-whatsapp px-5 text-center text-[14px] font-bold text-white transition-colors hover:bg-brand-whatsapp-dark sm:px-7 sm:text-[15px]"
            >
              WhatsApp&apos;tan Bilgi Al
            </a>
            <a
              href={BUSINESS.phone.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand-line-strong px-5 text-[14px] font-semibold text-brand-dark transition-colors hover:border-brand-dark sm:px-7 sm:text-[15px]"
            >
              {BUSINESS.phone.display}
            </a>
          </div>

          {/* Doğrulanabilir güven bilgileri */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {/* Puan/yıldız gösterimi tanıtım kuralları nedeniyle kaldırıldı;
                doğrulanabilir bilgiler gösteriliyor. */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-2 text-[12.5px] text-brand-mid sm:gap-2 sm:px-4 sm:py-2.5 sm:text-[13.5px]">
              <MapPin className="size-4 shrink-0 text-brand-accent" aria-hidden />
              <span className="font-semibold text-brand-dark">
                {BUSINESS.address.district}
              </span>
              · Sultan Murat Cd.
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-2 text-[12.5px] text-brand-mid sm:gap-2 sm:px-4 sm:py-2.5 sm:text-[13.5px]">
              <Clock className="size-4 shrink-0 text-brand-accent" aria-hidden />
              <span className="font-semibold text-brand-dark">
                Hafta içi {BUSINESS.hours.weekdays.opens}–{BUSINESS.hours.weekdays.closes}
              </span>
              · Cmt açık
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-2 text-[12.5px] text-brand-mid sm:gap-2 sm:px-4 sm:py-2.5 sm:text-[13.5px]">
              <Stethoscope className="size-4 shrink-0 text-brand-accent" aria-hidden />
              <span className="font-semibold text-brand-dark">3 hekim</span>
              · protez ve cerrahi
            </span>
          </div>
        </div>

        {/* Klinik görseli */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-brand-line bg-brand-primary-light lg:aspect-[5/6]">
          <Image
            src="/images/klinik/resepsiyon.jpg"
            alt="Dentakim Küçükçekmece kliniği karşılama ve bekleme alanı"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
