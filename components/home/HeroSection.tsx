import Image from "next/image";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { Clock, MapPin } from "lucide-react";

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

          <h1 className="mt-5 font-heading text-[clamp(36px,5.4vw,58px)] font-medium leading-[1.08] text-brand-dark [text-wrap:pretty]">
            Küçükçekmece&apos;de Sağlıklı ve Estetik Gülüşler İçin Modern Diş
            Tedavileri
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-brand-mid [text-wrap:pretty]">
            Küçükçekmece&apos;deki kliniğimizde implant, zirkonyum ve estetik diş
            tedavilerinde hekim kadromuzla size özel çözümler. Dijital planlama,
            lokal anestezi ile konfor odaklı yaklaşım.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-whatsapp px-7 text-[15px] font-bold text-white transition-colors hover:bg-brand-whatsapp-dark"
            >
              WhatsApp&apos;tan Bilgi Al
            </a>
            <a
              href={BUSINESS.phone.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand-line-strong px-7 text-[15px] font-semibold text-brand-dark transition-colors hover:border-brand-dark"
            >
              {BUSINESS.phone.display}
            </a>
          </div>

          {/* Doğrulanabilir güven bilgileri */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            {/* Puan/yıldız gösterimi tanıtım kuralları nedeniyle kaldırıldı;
                doğrulanabilir bilgiler gösteriliyor. */}
            <p className="flex items-center gap-2 text-sm text-brand-mid">
              <MapPin className="size-4 text-brand-accent" aria-hidden />
              <span className="font-semibold text-brand-dark">
                {BUSINESS.address.district}
              </span>
              Sultan Murat Caddesi üzerinde
            </p>
            <p className="flex items-center gap-2 text-sm text-brand-mid">
              <Clock className="size-4 text-brand-accent" aria-hidden />
              <span className="font-semibold text-brand-dark">
                Hafta içi {BUSINESS.hours.weekdays.opens}–{BUSINESS.hours.weekdays.closes}
              </span>
              · Cumartesi açık
            </p>
          </div>
        </div>

        {/* Klinik görseli */}
        <div className="relative overflow-hidden rounded-card border border-brand-line bg-brand-primary-light">
          <Image
            src="/images/klinik/resepsiyon.jpg"
            alt="Dentakim Küçükçekmece kliniği karşılama ve bekleme alanı"
            width={900}
            height={700}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
