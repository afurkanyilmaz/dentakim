import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { DOCTORS } from "@/lib/doctors";
import { ArrowRight, Clock, MapPin, Phone, Stethoscope } from "lucide-react";

/**
 * Hero — fotoğraf öncelikli tam genişlik düzen.
 *
 * Klinik fotoğrafı arka planda, üzerinde mürekkep lacivert degrade; başlık
 * ve CTA'lar sol altta. Altındaki bilgi şeridi doğrulanabilir bilgileri
 * (adres, saat, kadro) taşır — puan veya istatistik gösterilmez.
 */
export function HeroSection() {
  return (
    <section aria-labelledby="hero-baslik" className="bg-brand-deep">
      <div className="relative isolate overflow-hidden">
        <Image
          src="/images/klinik/resepsiyon.jpg"
          alt="Dentakim Küçükçekmece kliniği karşılama ve bekleme alanı"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-[60%_center]"
          priority
        />
        {/* Okunabilirlik için iki katmanlı degrade */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(14,42,61,0.25)_0%,rgba(14,42,61,0.78)_42%,rgba(14,42,61,0.96)_70%)] md:bg-[linear-gradient(100deg,rgba(14,42,61,0.94)_0%,rgba(14,42,61,0.82)_42%,rgba(14,42,61,0.35)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-brand-deep/80 to-transparent"
        />

        <div className="mx-auto flex min-h-[clamp(540px,82vh,760px)] max-w-[1240px] flex-col justify-end px-6 pb-[clamp(40px,7vw,88px)] pt-44 md:pt-[clamp(96px,14vw,160px)]">
          <p className="flex items-center gap-3 text-[12.5px] font-bold uppercase tracking-[0.18em] text-brand-accent">
            <span className="h-px w-10 bg-brand-accent" aria-hidden />
            İstanbul · {BUSINESS.address.district}
          </p>

          <h1
            id="hero-baslik"
            className="mt-6 max-w-[17ch] font-heading text-[clamp(38px,6.2vw,72px)] font-medium leading-[1.04] text-brand-surface [text-wrap:balance]"
          >
            Küçükçekmece&apos;de sağlıklı ve estetik gülüşler için diş kliniği
          </h1>

          <p className="mt-6 max-w-[54ch] text-[16.5px] leading-[1.7] text-[#C9D4DC] sm:text-[18px]">
            İmplant, zirkonyum kaplama ve estetik diş tedavilerinde muayene,
            dijital görüntüleme ve yazılı tedavi planıyla ilerliyoruz. Hangi
            hekimin tedavinizi yapacağını baştan biliyorsunuz.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/randevu"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand-accent px-7 text-[15px] font-bold text-brand-deep transition-colors hover:bg-[#CBA86E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-surface"
            >
              Randevu Oluştur
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                aria-hidden
              />
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-[15px] font-semibold text-brand-surface backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-surface"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp&apos;tan Yazın
            </a>
            <a
              href={BUSINESS.phone.href}
              className="hidden min-h-[52px] items-center justify-center gap-2 px-3 text-[15px] font-semibold text-brand-surface underline-offset-4 sm:inline-flex transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-surface"
            >
              <Phone className="size-4 text-brand-accent" aria-hidden />
              {BUSINESS.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Doğrulanabilir bilgi şeridi */}
      <div className="border-t border-white/10">
        <dl className="mx-auto grid max-w-[1240px] gap-px bg-white/10 sm:grid-cols-3">
          <HeroFact Icon={MapPin} label="Adres">
            Sultan Murat Cd. No:86 A, {BUSINESS.address.district}
          </HeroFact>
          <HeroFact Icon={Clock} label="Çalışma saatleri">
            Hafta içi {BUSINESS.hours.weekdays.opens}–{BUSINESS.hours.weekdays.closes} · Cmt{" "}
            {BUSINESS.hours.saturday.opens}–{BUSINESS.hours.saturday.closes}
          </HeroFact>
          <HeroFact Icon={Stethoscope} label="Hekim kadrosu">
            {DOCTORS.length} hekim · protez ve ağız cerrahisi
          </HeroFact>
        </dl>
      </div>
    </section>
  );
}

function HeroFact({
  Icon,
  label,
  children,
}: {
  Icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3.5 bg-brand-deep px-6 py-5">
      <Icon className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden />
      <div>
        <dt className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-on-deep">
          {label}
        </dt>
        <dd className="mt-1 text-[14.5px] font-semibold text-brand-surface">{children}</dd>
      </div>
    </div>
  );
}
