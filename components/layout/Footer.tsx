import Link from "next/link";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { SERVICES } from "@/lib/constants";
import { DOCTORS } from "@/lib/doctors";
import { REGIONS } from "@/lib/regions";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const KLINIK_LINKS = [
  { href: "/klinik", label: "Kliniğimiz" },
  { href: "/klinik/galeri", label: "Galeri" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Tedaviler" },
  { href: "/blog", label: "Blog" },
  { href: "/sss", label: "Sık Sorulan Sorular" },
  { href: "/fiyatlar", label: "Fiyatlar" },
  { href: "/iletisim", label: "İletişim" },
];

const LEGAL_LINKS = [
  { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
  { href: "/gizlilik", label: "Gizlilik Politikası" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-[rgba(252,251,249,0.7)]">
      <div className="container mx-auto max-w-[1240px] px-6 py-[clamp(48px,6vw,72px)]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marka + NAP */}
          <div>
            <p className="font-heading text-[30px] font-bold text-brand-surface">
              {BUSINESS.brandName}
            </p>
            <p className="mt-3 text-[14.5px] leading-[1.7]">
              {BUSINESS.displayName}
            </p>
            <p className="mt-4 flex gap-2 text-[14.5px] leading-[1.7]">
              <MapPin className="mt-1 size-4 shrink-0 text-brand-accent" aria-hidden />
              <span>{BUSINESS.address.full}</span>
            </p>
            <a
              href={BUSINESS.phone.href}
              className="mt-4 inline-flex items-center gap-2 text-[15.5px] font-bold text-brand-surface transition-colors hover:text-brand-accent"
            >
              <Phone className="size-4" aria-hidden />
              {BUSINESS.phone.display}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-accent transition-colors hover:text-brand-surface"
            >
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp&apos;tan yazın
            </a>
          </div>

          {/* Tedaviler */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-accent">Tedaviler</p>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="text-[14.5px] text-[rgba(252,251,249,0.7)] transition-colors hover:text-brand-surface"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hekimler + Klinik */}
          <div className="space-y-8">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-accent">Hekimler</p>
              <ul className="mt-4 space-y-2 text-sm">
                {DOCTORS.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/hekimler/${d.slug}`}
                      className="text-[14.5px] text-[rgba(252,251,249,0.7)] transition-colors hover:text-brand-surface"
                    >
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                Bölgeler
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {REGIONS.slice(0, 7).map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/${r.slug}`}
                      className="text-[14.5px] text-[rgba(252,251,249,0.7)] transition-colors hover:text-brand-surface"
                    >
                      {r.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/bolgeler"
                    className="text-[14.5px] font-semibold text-brand-accent transition-colors hover:text-brand-surface"
                  >
                    Tüm bölgeler →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-accent">Klinik</p>
              <ul className="mt-4 space-y-2 text-sm">
                {KLINIK_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[14.5px] text-[rgba(252,251,249,0.7)] transition-colors hover:text-brand-surface">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Çalışma saatleri + hukuki */}
          <div className="space-y-8">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                Çalışma saatleri
              </p>
              <dl className="mt-4 space-y-1.5 text-[14.5px]">
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
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-accent">Yasal</p>
              <ul className="mt-4 space-y-2 text-sm">
                {LEGAL_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[14.5px] text-[rgba(252,251,249,0.7)] transition-colors hover:text-brand-surface">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[rgba(252,251,249,0.12)] pt-6 text-[13px] text-[rgba(252,251,249,0.5)] sm:flex-row sm:justify-between">
          <p>
            © {year} {BUSINESS.legalName}
          </p>
          {BUSINESS.legal.responsibleManager || BUSINESS.legal.licenseNumber ? (
            <p>
              {BUSINESS.legal.responsibleManager
                ? `Mesul Müdür: ${BUSINESS.legal.responsibleManager}`
                : null}
              {BUSINESS.legal.responsibleManager && BUSINESS.legal.licenseNumber ? " · " : null}
              {BUSINESS.legal.licenseNumber
                ? `Faaliyet İzni: ${BUSINESS.legal.licenseNumber} (${BUSINESS.legal.licenseAuthority})`
                : null}
            </p>
          ) : null}
          <p className="max-w-[70ch] sm:text-right">
            Bu sitedeki bilgiler yalnızca bilgilendirme amaçlıdır; tanı ve tedavi yerine
            geçmez. Tedavi kararı hekim muayenesi sonrasında verilir.
          </p>
        </div>
      </div>
    </footer>
  );
}
