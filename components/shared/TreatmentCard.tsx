import Image from "next/image";
import Link from "next/link";
import { TREATMENT_PHOTOS } from "@/lib/stock-photos";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getServiceIcon } from "@/lib/service-icons";
import { cn } from "@/lib/utils";

/**
 * Kartlarda kullanılan kısa açıklamalar — hizmet sayfalarındaki
 * içerikten özetlendi (lib/service-pages). Hizmet listesine yeni tedavi
 * eklenirse burada açıklama yoksa SERVICES.desc kullanılır.
 */
export const TREATMENT_BLURBS: Record<string, string> = {
  "seffaf-plak-tedavisi":
    "Kişiye özel şeffaf ve çıkarılabilir plaklarla dişlerin kademeli olarak hizalanması; metal braket görünmez.",
  "gulus-tasarimi":
    "Diş rengi, formu ve dizilimi yüz hatlarınıza göre dijital olarak planlanır; sonuç kalıcı işlemden önce prova edilir.",
  "lamina-veneer":
    "Ön dişlere uygulanan ince porselen yaprakçıklarla renk ve form düzenlemesi; tam kaplamaya göre daha az aşındırma.",
  "kemik-grefti-sinus-lifting":
    "Kemik hacmi yetersiz bölgelerde greft ve sinüs yükseltme ile implant için gerekli kemiğin sağlanması.",
  "gece-plagi-bruksizm":
    "Diş sıkma ve gıcırdatmaya karşı kişiye özel gece plağı; dişleri ve kaplamaları aşınmaya karşı korur.",
  "implant-tedavisi":
    "Eksik dişlerin çene kemiğine yerleştirilen implantlar ve üst yapılarla kalıcı olarak tamamlanması; cerrahi ve protez fazları aynı takvimde planlanır.",
  "all-on-4-implant":
    "Tamamen dişsiz çenede dört implant üzerine sabit protez; uygunluk muayene ve kemik değerlendirmesi sonrası belirlenir.",
  "all-on-6-implant":
    "Kemik hacmi yeterli dişsiz çenelerde altı implant üzerine sabit protez; çiğneme yükü daha fazla implanta dağıtılır.",
  "hibrit-protez":
    "İmplantlara vidalanan, dişleri ve kayıp dişeti dokusunu birlikte tamamlayan sabit tam çene protezi.",
  "protez-zirkonyum":
    "Zirkonyum kron, köprü ve implant üstü protezler; dijital ölçü ve renk eşleştirmesiyle doğal görünüm hedeflenir.",
  ortodonti:
    "Çapraşık dişler ve kapanış bozuklukları için metal, seramik veya şeffaf aparey seçeneklerinin karşılaştırmalı planı.",
  "dis-beyazlatma":
    "Mine ve dişeti sağlığı kontrol edildikten sonra uygulanan klinik tipi veya kademeli ev tipi beyazlatma protokolleri.",
  "kanal-tedavisi":
    "Enfekte veya canlılığını yitirmiş dişte pulpanın temizlenip kök kanallarının sızdırmaz doldurulmasıyla dişin korunması.",
  "cocuk-dis-hekimligi":
    "Süt ve karma dişlenme döneminde koruyucu uygulamalar, çürük tedavisi ve çocuğa uygun iletişimle güvenli muayene.",
  "dis-dolgusu":
    "Erken evre çürük ve mine kayıplarında renk uyumlu kompozit dolgularla diş dokusunu koruyan restorasyon.",
  "agiz-dis-cene-cerrahisi":
    "Gömülü yirmilik diş çekimi ve cerrahi işlemler; radyolojik planlama ile ağız-diş-çene cerrahımız tarafından yürütülür.",
};

/**
 * Tedavi kartı — referans ölçüleri: 26px yarıçap, üstte ~%64 görsel alanı
 * (numara + ok kutusu, alt kenarda başlık), altında rozet, açıklama ve
 * "Uzman hekimle ön görüşme" satırı. Görsel alanında temsili stok fotoğraf
 * (lib/stock-photos.ts) kullanılır; yoksa tedavi simgeli panel gösterilir.
 */
export function TreatmentCard({
  slug,
  title,
  desc,
  icon,
  index,
  className,
  compact = false,
}: {
  slug: string;
  title: string;
  desc: string;
  icon: string;
  index: number;
  className?: string;
  /** İlgili tedaviler gibi dar alanlarda daha kısa görsel alanı. */
  compact?: boolean;
}) {
  const Icon = getServiceIcon(icon);
  const photo = TREATMENT_PHOTOS[slug];
  const href = `/hizmetler/${slug}`;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-card border border-brand-line bg-brand-card shadow-[0_18px_52px_rgba(22,39,73,0.08)] transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-brand-line-strong motion-reduce:transform-none",
        className
      )}
    >
      {/* Kartın tamamı tıklanabilir */}
      <Link
        href={href}
        aria-label={`${title} — tedavi detayları`}
        className="absolute inset-0 z-10 rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-accent"
      />
      {/* Görsel alanı */}
      <div
        className={cn(
          "relative overflow-hidden bg-[radial-gradient(120%_90%_at_70%_20%,#2A2A2E_0%,#151A26_45%,#0C1019_100%)]",
          compact ? "aspect-[397/300]" : "aspect-[397/400] lg:aspect-[397/476]"
        )}
      >
        {photo ? (
          <>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={compact ? "(max-width: 640px) 100vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transform-none"
            />
            {/* Okunabilirlik için üstte hafif koyulaştırma */}
            <span aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />
          </>
        ) : (
          <>
            <span
              aria-hidden
              className="absolute -right-10 top-8 size-[78%] rounded-full border-[18px] border-brand-accent/25 transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
            />
            <span
              aria-hidden
              className="absolute -left-16 bottom-16 size-[46%] rounded-full border-[14px] border-white/[0.06]"
            />
            <Icon
              aria-hidden
              strokeWidth={1.1}
              className="absolute left-1/2 top-[42%] size-[38%] -translate-x-1/2 -translate-y-1/2 text-brand-accent/90"
            />
          </>
        )}
        <span className="absolute left-6 top-5 text-[12px] text-white/90">
          — {String(index).padStart(2, "0")}
        </span>
        <span
          aria-hidden
          className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-[12px] border border-white/60 bg-black/20 text-[18px] text-white"
        >
          ↗
        </span>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pb-5 pt-16">
          <h3 className="font-heading text-[clamp(22px,1.8vw,25px)] font-bold leading-[1.2] tracking-[-0.02em] text-white">
            {title}
          </h3>
          {photo ? <span className="mt-1 block text-[10px] font-medium text-white/55">Temsili görsel</span> : null}
        </div>
      </div>

      {/* Metin alanı */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-[18px]">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-line bg-white/[0.03] px-3 py-1.5 text-[11px] font-bold text-brand-light">
          <span className="size-1.5 rounded-full bg-brand-accent" aria-hidden />
          {BUSINESS.brandName}
        </span>
        <p className="mt-4 flex-1 text-[15px] leading-[1.65] text-brand-mid sm:text-[16px]">{desc}</p>
        <div className="mt-6 flex items-center justify-between border-t border-brand-line pt-4">
          <span className="text-[12px] font-bold text-brand-light">Uzman Hekimle Ön Görüşme</span>
          <span
            aria-hidden
            className="inline-flex size-[42px] items-center justify-center rounded-full bg-white/[0.04] text-brand-light transition-colors group-hover:bg-brand-accent group-hover:text-white"
          >
            <ArrowRight className="size-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
