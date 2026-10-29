import Link from "next/link";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { TextLogo } from "@/components/layout/Header";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { SERVICES, SERVICE_GROUP_LABEL } from "@/lib/constants";
import { DOCTORS } from "@/lib/doctors";
import { Clock, Mail, MapPin, Phone, Play } from "lucide-react";

const KURUMSAL = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/klinik", label: "Kliniğimiz" },
  { href: "/klinik/galeri", label: "Galeri" },
  { href: "/blog", label: "Blog" },
  { href: "/fiyatlar", label: "Fiyatlar" },
  /* Semt sayfaları yalnızca SEO için: görünür menüde yer almaz. */
  { href: "/bolgeler", label: "Hizmet bölgeleri" },
];

const DESTEK = [
  { href: "/randevu", label: "Online Randevu" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/sss", label: "Sık Sorulan Sorular" },
  { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
  { href: "/gizlilik", label: "Gizlilik Politikası" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
];

/** Tedaviler gruplarına göre üç sütunda listelenir (lib/constants.ts). */
const TREATMENT_COLUMNS = (["estetik", "implant", "genel"] as const).map((g, i) => ({
  title: SERVICE_GROUP_LABEL[g],
  match: (group: string) => group === g,
  all: i === 0,
}));

const COL_TITLE = "text-[10.5px] font-extrabold uppercase tracking-[0.22em] text-brand-faint";
const COL_LINK = "text-[13px] text-brand-mid transition-colors hover:text-brand-light";

function ContactBox({
  Icon,
  label,
  value,
  href,
  external,
}: {
  Icon: typeof Phone;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-4 rounded-[14px] border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors hover:border-white/25"
    >
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-white/[0.06] text-brand-light">
        <Icon className="size-4" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-[9.5px] font-extrabold uppercase tracking-[0.18em] text-brand-faint">
          {label}
        </span>
        <span className="block truncate text-[14px] font-extrabold text-brand-light">{value}</span>
      </span>
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="theme-dark bg-brand-deep text-brand-mid">
      <div className="mx-auto max-w-[1304px] px-5 pb-10 pt-[clamp(56px,6vw,88px)] sm:px-8">
        {/* Üst: marka + iletişim | randevu kartı */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-20">
          <div>
            <TextLogo className="text-[34px]" />
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-mid">
              Ağız ve Diş Sağlığı Polikliniği
            </p>
            <p className="mt-6 max-w-[520px] text-[14px] leading-[1.7]">
              {BUSINESS.displayName}, {BUSINESS.address.district} Sultan Murat
              Caddesi&apos;nde muayene, dijital görüntüleme ve yazılı tedavi
              planıyla hizmet verir.
            </p>

            <div className="mt-8 grid max-w-[560px] gap-3 sm:grid-cols-2">
              <ContactBox Icon={Phone} label="Telefon" value={BUSINESS.phone.display} href={BUSINESS.phone.href} />
              <ContactBox
                Icon={WhatsAppIcon as unknown as typeof Phone}
                label="WhatsApp"
                value="Mesaj gönderin"
                href={whatsappUrl()}
                external
              />
              <ContactBox Icon={Mail} label="E-posta" value={BUSINESS.email} href={`mailto:${BUSINESS.email}`} />
              <ContactBox
                Icon={MapPin}
                label="Adres"
                value="Sultan Murat Cd. No:86 A"
                href={BUSINESS.google.profileUrl}
                external
              />
            </div>
          </div>

          {/* Randevu kartı */}
          <div className="h-fit rounded-[26px] border border-white/10 bg-[linear-gradient(160deg,#121A2B,#0A1120)] p-6 sm:p-7">
            <div className="flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] p-3">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-brand-accent text-white">
                <Clock className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-[13px] font-extrabold text-brand-light">
                  {BUSINESS.brandName} · {BUSINESS.address.district}
                </span>
                <span className="mt-0.5 flex items-center gap-1.5 text-[11.5px]">
                  <span className="size-1.5 rounded-full bg-brand-whatsapp" aria-hidden />
                  Hafta içi {BUSINESS.hours.weekdays.opens}–{BUSINESS.hours.weekdays.closes} · Cmt{" "}
                  {BUSINESS.hours.saturday.opens}–{BUSINESS.hours.saturday.closes}
                </span>
              </span>
            </div>
            <p className="mt-6 text-[10.5px] font-extrabold uppercase tracking-[0.22em] text-brand-faint">
              Online randevu
            </p>
            <p className="mt-2 font-heading text-[24px] font-bold leading-[1.2] tracking-[-0.03em] text-brand-light">
              Sağlıklı gülüşünüz için ilk adımı atın
            </p>
            <p className="mt-2 text-[13px] leading-[1.6]">
              Size uygun gün ve saati birlikte planlayalım; muayene sonrası tedavi
              seçenekleri yazılı olarak paylaşılır.
            </p>
            <Link
              href="/randevu"
              className="mt-6 flex h-[52px] items-center justify-center gap-2 rounded-[12px] bg-white text-[14px] font-extrabold text-[#0B1220] transition-colors hover:bg-brand-accent hover:text-white"
            >
              Randevu Al <span aria-hidden>↗</span>
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center rounded-[12px] border border-white/15 text-[13px] font-extrabold text-brand-light transition-colors hover:border-brand-whatsapp"
              >
                WhatsApp
              </a>
              <a
                href={BUSINESS.phone.href}
                className="flex h-11 items-center justify-center rounded-[12px] border border-white/15 text-[13px] font-extrabold text-brand-light transition-colors hover:border-brand-accent"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>

        {/* Bağlantı sütunları */}
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/10 pt-12 md:grid-cols-3 lg:grid-cols-6">
          {TREATMENT_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className={COL_TITLE}>{col.title}</p>
              <ul className="mt-5 space-y-2.5">
                {SERVICES.filter((s) => col.match(s.group)).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/hizmetler/${s.slug}`} className={COL_LINK}>
                      {s.title}
                    </Link>
                  </li>
                ))}
                {col.all ? (
                  <li>
                    <Link href="/hizmetler" className="text-[13px] font-bold text-brand-light hover:text-brand-accent">
                      Tüm Tedaviler ↗
                    </Link>
                  </li>
                ) : null}
              </ul>
            </nav>
          ))}
          <nav aria-label="Hekimlerimiz">
            <p className={COL_TITLE}>Hekimlerimiz</p>
            <ul className="mt-5 space-y-2.5">
              {DOCTORS.map((d) => (
                <li key={d.slug}>
                  <Link href={`/hekimler/${d.slug}`} className={COL_LINK}>
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Kurumsal">
            <p className={COL_TITLE}>Kurumsal</p>
            <ul className="mt-5 space-y-2.5">
              {KURUMSAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={COL_LINK}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Destek">
            <p className={COL_TITLE}>Destek</p>
            <ul className="mt-5 space-y-2.5">
              {DESTEK.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={COL_LINK}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Hızlı eylemler */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: BUSINESS.phone.href, label: "Bize Ulaşın", Icon: Phone },
            { href: "/randevu", label: "Online Randevu", Icon: Clock },
            { href: BUSINESS.google.profileUrl, label: "Yol Tarifi", Icon: MapPin, external: true },
            { href: BUSINESS.social.instagram.url, label: "Instagram", Icon: Play, external: true },
          ].map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 text-[12px] font-bold text-brand-mid transition-colors hover:border-white/25 hover:text-brand-light"
            >
              <Icon className="size-3.5" aria-hidden />
              {label}
            </a>
          ))}
        </div>

        {/* Alt çubuk */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11.5px] text-brand-faint lg:flex-row lg:items-start lg:justify-between">
          <p>
            © {year} {BUSINESS.legalName}. Tüm hakları saklıdır.
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
          <p className="max-w-[64ch] lg:text-right">
            Bu sitedeki bilgiler yalnızca bilgilendirme amaçlıdır; tanı ve tedavi
            yerine geçmez. Tedavi kararı hekim muayenesi sonrasında verilir.
          </p>
        </div>
      </div>
    </footer>
  );
}
