"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Clock, Home, MapPin, Menu, Phone } from "lucide-react";

const NAV = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/klinik", label: "Kliniğimiz" },
  { href: "/hizmetler", label: "Tedavilerimiz", dropdown: true },
  { href: "/hekimler", label: "Hekimlerimiz" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
] as const;

const MOBILE_EXTRA = [
  { href: "/sss", label: "Sık Sorulan Sorular" },
  { href: "/fiyatlar", label: "Fiyatlar" },
  { href: "/randevu", label: "Randevu" },
];

/** Logo: altın diş işareti + yazı + küçük alt başlık. */
function Wordmark() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
      aria-label={`${BUSINESS.brandName} ana sayfa`}
    >
      <Image
        src="/images/logo-mark-dark.png"
        alt=""
        width={44}
        height={44}
        className="size-11 shrink-0 lg:size-12"
        priority
      />
      <span className="flex flex-col">
        <span className="font-heading text-[25px] font-bold leading-none tracking-[-0.03em] text-brand-accent lg:text-[28px]">
          {BUSINESS.brandName.toLowerCase()}
        </span>
        <span className="mt-1 text-[8.5px] font-bold uppercase tracking-[0.2em] text-brand-mid">
          Ağız ve Diş Sağlığı Polikliniği
        </span>
      </span>
    </Link>
  );
}

const ROUND =
  "inline-flex size-9 items-center justify-center rounded-full transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent motion-reduce:transform-none";

/**
 * Header — iki satırlı sabit üst alan (masaüstünde 86 + 54 px, mobilde 75 px).
 * Anasayfada hero görselinin üzerinde saydam başlar, kaydırınca koyulaşır;
 * diğer sayfalarda her zaman koyu zemindedir.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300",
        solid ? "bg-[rgba(8,11,18,0.88)] backdrop-blur-[14px]" : "bg-gradient-to-b from-black/50 to-transparent"
      )}
    >
      {/* Üst satır */}
      <div className="border-b border-white/[0.12]">
        <div className="mx-auto flex h-[75px] max-w-[1440px] items-center justify-between gap-6 pl-5 sm:pl-8 lg:h-[86px] lg:pr-8">
          <Wordmark />

          <div className="hidden items-center gap-5 lg:flex">
            <span className="inline-flex h-11 items-center gap-2.5 rounded-full border border-white/[0.14] bg-white/[0.06] pl-1.5 pr-4 text-[12px] font-bold text-brand-light">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-accent text-brand-surface">
                <Clock className="size-4" aria-hidden />
              </span>
              {BUSINESS.brandName} · {BUSINESS.address.district}
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-mid">
                <span className="size-1.5 rounded-full bg-brand-whatsapp" aria-hidden />
                Cumartesi açık
              </span>
            </span>

            <a href={BUSINESS.phone.href} className="group flex flex-col leading-tight">
              <span className="text-[10.5px] font-semibold text-brand-mid">
                Çalışma {BUSINESS.hours.weekdays.opens}–{BUSINESS.hours.weekdays.closes}
              </span>
              <span className="text-[15px] font-extrabold text-brand-light transition-colors group-hover:text-brand-accent">
                {BUSINESS.phone.display}
              </span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp'tan yazın"
                className={cn(ROUND, "bg-brand-whatsapp text-white")}
              >
                <WhatsAppIcon className="size-[18px]" />
              </a>
              <a href={BUSINESS.phone.href} aria-label="Telefonla arayın" className={cn(ROUND, "bg-brand-accent text-brand-surface")}>
                <Phone className="size-4" aria-hidden />
              </a>
              <a
                href={BUSINESS.google.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Haritalar'da konum"
                className={cn(ROUND, "bg-[#1D5C86] text-white")}
              >
                <MapPin className="size-4" aria-hidden />
              </a>
            </div>
          </div>

          {/* Menü düğmesi — mobilde ana gezinme, masaüstünde tam menü */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="flex h-full w-[75px] items-center justify-center border-l border-white/[0.12] text-brand-light transition-colors hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand-accent lg:w-auto lg:border-0 lg:pl-2"
              aria-label="Menüyü aç"
            >
              <Menu className="size-7" strokeWidth={1.6} />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100vw,420px)] border-l border-white/10 bg-brand-surface px-6 text-brand-light"
            >
              <SheetTitle className="sr-only">Menü</SheetTitle>
              <div className="mt-14 flex flex-col pb-10">
                <p className="pb-3 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-accent">
                  Tedavilerimiz
                </p>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/hizmetler/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/[0.08] py-3 font-heading text-[18px] font-bold tracking-[-0.02em] text-brand-light transition-colors hover:text-brand-accent"
                  >
                    {s.title}
                  </Link>
                ))}

                <p className="pb-3 pt-8 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-accent">
                  Dentakim
                </p>
                {[...NAV.filter((n) => n.href !== "/hizmetler"), ...MOBILE_EXTRA].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-[13px] font-extrabold uppercase tracking-[0.06em] text-brand-mid transition-colors hover:text-brand-light"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/randevu"
                  onClick={() => setOpen(false)}
                  className="mt-8 flex h-[54px] items-center justify-between rounded-[2px] bg-brand-accent px-6 text-[15px] font-extrabold text-white"
                >
                  Randevu Oluştur <span aria-hidden>↗</span>
                </Link>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 items-center justify-center gap-2 rounded-[12px] bg-brand-whatsapp text-[13px] font-extrabold text-white"
                  >
                    <WhatsAppIcon className="size-4" /> WhatsApp
                  </a>
                  <a
                    href={BUSINESS.phone.href}
                    className="flex h-12 items-center justify-center gap-2 rounded-[12px] border border-white/20 text-[13px] font-extrabold text-brand-light"
                  >
                    <Phone className="size-4" aria-hidden /> Hemen Ara
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Gezinme satırı — yalnızca masaüstü */}
      <div className="hidden lg:block">
        <div className="mx-auto flex h-[54px] max-w-[1440px] items-center justify-between gap-6 px-8">
          <nav aria-label="Ana menü" className="flex items-center gap-x-[clamp(18px,2.4vw,40px)]">
            <Link
              href="/"
              aria-label="Anasayfa"
              aria-current={isHome ? "page" : undefined}
              className="text-brand-light transition-colors hover:text-brand-accent"
            >
              <Home className="size-4" aria-hidden />
            </Link>
            {NAV.map((item) =>
              "dropdown" in item ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger
                    className={cn(
                      "inline-flex items-center gap-1 rounded-sm text-[12px] font-extrabold uppercase tracking-[0.03em] outline-none transition-colors hover:text-brand-accent focus-visible:ring-2 focus-visible:ring-brand-accent",
                      isActive(item.href) ? "text-brand-accent" : "text-brand-light"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="size-3.5 opacity-70" aria-hidden />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={14}
                    className="w-[min(100vw-2rem,620px)] rounded-[22px] border border-white/10 bg-brand-card p-3 text-brand-light shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {SERVICES.map((s, i) => (
                        <Link
                          key={s.slug}
                          href={`/hizmetler/${s.slug}`}
                          className="group flex gap-3 rounded-[14px] px-4 py-3 outline-none transition-colors hover:bg-white/[0.05] focus-visible:bg-white/[0.07]"
                        >
                          <span className="pt-0.5 text-[11px] font-bold text-brand-faint">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>
                            <span className="block text-[14px] font-extrabold text-brand-light group-hover:text-brand-accent">
                              {s.title}
                            </span>
                            <span className="mt-0.5 block text-[12px] text-brand-mid">{s.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/hizmetler"
                      className="mt-2 flex items-center justify-between rounded-[14px] border-t border-white/10 px-4 pb-1 pt-4 text-[12px] font-extrabold uppercase tracking-[0.08em] text-brand-accent"
                    >
                      Tüm tedaviler <span aria-hidden>↗</span>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "rounded-sm text-[12px] font-extrabold uppercase tracking-[0.03em] transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
                    isActive(item.href) ? "text-brand-accent" : "text-brand-light"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/iletisim"
              className="inline-flex h-[42px] items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.04] px-4 text-[11.5px] font-bold text-brand-mid transition-colors hover:text-brand-light"
            >
              <span className="size-1.5 rounded-full bg-[#E5484D]" aria-hidden />
              Klinik:
              <span className="font-extrabold text-brand-light">Sultan Murat Cd. No:86 A</span>
            </Link>
            <Link
              href="/randevu"
              className="inline-flex h-[46px] items-center gap-1.5 whitespace-nowrap rounded-full border border-white/[0.28] px-5 text-[12px] font-extrabold text-white transition-colors hover:border-brand-accent hover:bg-brand-accent"
            >
              Randevu Al <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
