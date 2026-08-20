import { BUSINESS, whatsappUrl } from "@/lib/business";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
  /** WhatsApp'a önceden yazılacak mesaj; sayfa bağlamına göre özelleştirilir. */
  message?: string;
  /** "card" sayfa içi kutu, "panel" kenar çubuğu, "band" tam genişlik koyu şerit. */
  variant?: "card" | "panel" | "band";
};

/**
 * Sitedeki tek dönüşüm bileşeni: birincil WhatsApp, ikincil telefon.
 * Randevu formu kullanılmıyor — talepler doğrudan iletişime yönlendirilir.
 *
 * "band" varyantı Claude Design'daki koyu lacivert, ortalanmış kapanış bloğudur.
 */
export function ContactCTA({
  title = "Hayalinizdeki Gülüş İçin İlk Adımı Atın",
  description = "Muayene sonrasında size özel tedavi planı ve yazılı bilgilendirme paylaşılır. WhatsApp'tan yazabilir veya telefonla ulaşabilirsiniz.",
  message,
  variant = "card",
}: Props) {
  const wa = whatsappUrl(message);
  const onDeep = variant === "band";

  if (onDeep) {
    return (
      <section className="bg-brand-deep" aria-labelledby="iletisim-cta">
        <div className="mx-auto max-w-[840px] px-6 py-[clamp(64px,9vw,110px)] text-center">
          <p className="mb-4 text-[12.5px] font-bold uppercase tracking-[0.16em] text-brand-accent">
            Randevu
          </p>
          <h2
            id="iletisim-cta"
            className="font-heading text-[clamp(36px,5vw,54px)] font-semibold leading-[1.12] text-brand-surface [text-wrap:balance]"
          >
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-[1.65] text-brand-on-deep">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-whatsapp px-[34px] py-[18px] text-[16.5px] font-bold text-white transition-colors hover:bg-brand-whatsapp-dark"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp&apos;tan Randevu
            </a>
            <a
              href={BUSINESS.phone.href}
              className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(252,251,249,0.26)] bg-[rgba(252,251,249,0.1)] px-[34px] py-[18px] text-[16.5px] font-semibold text-brand-surface transition-colors hover:bg-[rgba(252,251,249,0.18)]"
            >
              <Phone className="size-5" aria-hidden />
              {BUSINESS.phone.display}
            </a>
          </div>
          <p className="mt-8 text-sm text-brand-on-deep">
            {BUSINESS.hours.weekdays.days}: {BUSINESS.hours.weekdays.opens} –{" "}
            {BUSINESS.hours.weekdays.closes} · {BUSINESS.hours.saturday.days}:{" "}
            {BUSINESS.hours.saturday.opens} – {BUSINESS.hours.saturday.closes}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "rounded-card border p-[26px]",
        variant === "panel"
          ? "border-brand-line bg-white"
          : "border-brand-line bg-brand-primary-light"
      )}
      aria-labelledby="iletisim-cta"
    >
      <h2
        id="iletisim-cta"
        className="font-heading text-[24px] font-semibold leading-[1.2] text-brand-dark"
      >
        {title}
      </h2>
      <p className="mt-2.5 text-[14.5px] leading-[1.6] text-brand-mid">{description}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-whatsapp px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-whatsapp-dark"
        >
          <WhatsAppIcon className="size-4" />
          WhatsApp&apos;tan Bilgi Al
        </a>
        <a
          href={BUSINESS.phone.href}
          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-brand-line-strong px-6 text-[15px] font-semibold text-brand-dark transition-colors hover:border-brand-dark"
        >
          <Phone className="size-4" aria-hidden />
          Hemen Ara
        </a>
      </div>

      <p className="mt-4 text-xs text-brand-faint">
        {BUSINESS.hours.weekdays.days}: {BUSINESS.hours.weekdays.opens} –{" "}
        {BUSINESS.hours.weekdays.closes} · {BUSINESS.hours.saturday.days}:{" "}
        {BUSINESS.hours.saturday.opens} – {BUSINESS.hours.saturday.closes}
      </p>
    </section>
  );
}
