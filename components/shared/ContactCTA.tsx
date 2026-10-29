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
  title = "Sağlıklı gülüşünüz için ilk adımı atın",
  description = "Muayene sonrasında size özel tedavi planı ve yazılı bilgilendirme paylaşılır. WhatsApp'tan yazabilir veya telefonla ulaşabilirsiniz.",
  message,
  variant = "card",
}: Props) {
  const wa = whatsappUrl(message);
  const onDeep = variant === "band";

  if (onDeep) {
    /*
     * Kapanış bölümü — solda başlık, sağda form görünümlü iletişim satırları.
     * Sitede form kullanılmıyor (KVKK: kişisel veri toplanmaz); satırlar
     * doğrudan telefon, WhatsApp ve harita bağlantılarıdır.
     */
    const rows = [
      { label: "Telefon", value: BUSINESS.phone.display, href: BUSINESS.phone.href },
      { label: "WhatsApp", value: "Mesaj gönderin", href: wa, external: true },
      { label: "Adres", value: BUSINESS.address.full, href: BUSINESS.google.profileUrl, external: true },
      {
        label: "Çalışma saatleri",
        value: `Hafta içi ${BUSINESS.hours.weekdays.opens}–${BUSINESS.hours.weekdays.closes} · Cumartesi ${BUSINESS.hours.saturday.opens}–${BUSINESS.hours.saturday.closes}`,
      },
    ];

    return (
      <section className="bg-brand-card" aria-labelledby="iletisim-cta">
        <div className="mx-auto grid max-w-[1304px] gap-12 px-5 py-[clamp(64px,7.8vw,112px)] sm:px-8 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-24">
          <div>
            <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-light">
              {BUSINESS.brandName} {BUSINESS.address.district}
            </p>
            <h2
              id="iletisim-cta"
              className="font-heading text-[clamp(40px,5vw,72px)] font-bold leading-[1.02] tracking-display text-brand-light"
            >
              {title}
            </h2>
            <p className="mt-6 max-w-[460px] text-[15px] leading-[1.7] text-brand-mid">{description}</p>
          </div>

          <div>
            <dl>
              {rows.map((row) => (
                <div key={row.label} className="border-b border-white/[0.14] pb-4 pt-5 first:pt-0">
                  <dt className="text-[11.5px] font-semibold text-brand-mid">{row.label}</dt>
                  <dd className="mt-2 text-[15.5px] font-bold text-brand-light">
                    {row.href ? (
                      <a
                        href={row.href}
                        {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="transition-colors hover:text-brand-accent"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center justify-center gap-2 rounded-full bg-[#D9C6B0] text-[15px] font-extrabold text-[#151A24] transition-[filter] hover:brightness-105"
              >
                <WhatsAppIcon className="size-[18px]" />
                WhatsApp&apos;tan Randevu <span aria-hidden>↗</span>
              </a>
              <a
                href={BUSINESS.phone.href}
                className="flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-8 text-[15px] font-extrabold text-brand-light transition-colors hover:border-brand-accent"
              >
                <Phone className="size-4" aria-hidden />
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "rounded-[22px] border border-brand-line p-[26px]",
        variant === "panel"
          ? "bg-[linear-gradient(160deg,#151B29,#0B0F18)]"
          : "bg-brand-card"
      )}
      aria-labelledby="iletisim-cta"
    >
      <h2
        id="iletisim-cta"
        className="font-heading text-[22px] font-bold leading-[1.25] tracking-[-0.03em] text-brand-light"
      >
        {title}
      </h2>
      <p className="mt-2.5 text-[14.5px] leading-[1.6] text-brand-mid">{description}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-2 rounded-[12px] bg-brand-whatsapp px-5 text-[14px] font-extrabold text-white transition-colors hover:bg-brand-whatsapp-dark"
        >
          <WhatsAppIcon className="size-4" />
          WhatsApp&apos;tan Bilgi Al
        </a>
        <a
          href={BUSINESS.phone.href}
          className="inline-flex min-h-12 items-center gap-2 rounded-[12px] border border-white/20 px-5 text-[14px] font-extrabold text-brand-light transition-colors hover:border-brand-accent"
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
