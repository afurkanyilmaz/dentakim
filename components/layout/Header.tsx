"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SERVICES, SERVICE_GROUP_LABEL, type ServiceGroup } from "@/lib/constants";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { DOCTORS } from "@/lib/doctors";
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

const GROUPS: ServiceGroup[] = ["estetik", "implant", "genel"];

const MOBILE_KURUMSAL = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/klinik", label: "Kliniğimiz" },
  { href: "/klinik/galeri", label: "Galeri" },
  { href: "/blog", label: "Blog" },
  { href: "/fiyatlar", label: "Fiyatlar" },
];

const MOBILE_DESTEK = [
  { href: "/randevu", label: "Online Randevu" },
  { href: "/iletisim", label: "İletişim ve Ulaşım" },
  { href: "/sss", label: "Sık Sorulan Sorular" },
];

/**
 * Yazı logosu — "DENTAKIM". Görsel logo dosyası koyu zeminde temiz
 * kesilemediği için şimdilik yalnızca yazı kullanılır. Büyük harf CSS ile
 * yapılmaz: Türkçe dil ayarında "i" harfi "İ" olurdu.
 */
export function TextLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${BUSINESS.brandName} ana sayfa`}
      className={cn(
        "wordmark rounded-sm font-heading text-[23px] font-extrabold leading-none tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent lg:text-[27px]",
        className
      )}
    >
      DENTAKIM
    </Link>
  );
}

/** Mobil menüde açılır-kapanır ana başlık (yerel <details>, JS gerektirmez). */
function MenuGroup({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  return (
    <details open={defaultOpen} className="group border-b border-brand-line">
      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[15px] font-extrabold uppercase tracking-[0.06em] text-brand-light [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown className="size-4 text-brand-accent transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden />
      </summary>
      <div className="pb-4">{children}</div>
    </details>
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
        solid
          ? "bg-brand-surface/90 backdrop-blur-[14px]"
          : "theme-dark bg-gradient-to-b from-black/50 to-transparent"
      )}
    >
      {/* Üst satır */}
      <div className="border-b border-fg/[0.12]">
        <div className="mx-auto flex h-[75px] max-w-[1440px] items-center justify-between gap-6 pl-5 sm:pl-8 lg:h-[86px] lg:pr-8">
          <TextLogo />

          <div className="hidden items-center gap-5 lg:flex">
            <span className="inline-flex h-11 items-center gap-2.5 rounded-full border border-fg/[0.14] bg-fg/[0.06] pl-1.5 pr-4 text-[12px] font-bold text-brand-light">
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
              <ThemeToggle />
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
          <div className="flex h-full items-center">
            <ThemeToggle className="mr-3 lg:hidden" />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="flex h-full w-[75px] items-center justify-center border-l border-fg/[0.12] text-brand-light transition-colors hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand-accent lg:w-auto lg:border-0 lg:pl-2"
                aria-label="Menüyü aç"
              >
                <Menu className="size-7" strokeWidth={1.6} />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex h-dvh w-[min(100vw,420px)] flex-col gap-0 overflow-hidden border-l border-fg/10 bg-brand-surface p-0 text-brand-light data-[side=right]:w-[min(100vw,420px)] data-[side=right]:sm:max-w-[420px]"
              >
                <SheetTitle className="sr-only">Menü</SheetTitle>
                <div className="flex h-[75px] shrink-0 items-center border-b border-brand-line px-6">
                  <TextLogo className="text-[21px]" />
                </div>

                {/* Kaydırılabilir orta alan */}
                <nav aria-label="Mobil menü" className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-6">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="block border-b border-brand-line py-4 text-[15px] font-extrabold uppercase tracking-[0.06em] text-brand-light"
                  >
                    Anasayfa
                  </Link>
                  <MenuGroup title="Tedavilerimiz">
                    {GROUPS.map((g) => (
                      <details key={g} className="group/sub">
                        <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand-accent [&::-webkit-details-marker]:hidden">
                          {SERVICE_GROUP_LABEL[g]}
                          <ChevronDown className="size-3.5 transition-transform group-open/sub:rotate-180" aria-hidden />
                        </summary>
                        <div className="pb-2 pl-3">
                          {SERVICES.filter((s) => s.group === g).map((s) => (
                            <Link
                              key={s.slug}
                              href={`/hizmetler/${s.slug}`}
                              onClick={() => setOpen(false)}
                              className="block py-2 text-[15px] font-semibold text-brand-light transition-colors hover:text-brand-accent"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ))}
                    <Link
                      href="/hizmetler"
                      onClick={() => setOpen(false)}
                      className="mt-1 inline-block text-[13px] font-bold text-brand-accent-dark"
                    >
                      Tüm tedaviler ↗
                    </Link>
                  </MenuGroup>
                  <MenuGroup title="Hekimlerimiz">
                    {DOCTORS.map((d) => (
                      <Link
                        key={d.slug}
                        href={`/hekimler/${d.slug}`}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-[15px] font-semibold text-brand-light transition-colors hover:text-brand-accent"
                      >
                        {d.name}
                        <span className="block text-[12px] font-medium text-brand-mid">{d.specialization}</span>
                      </Link>
                    ))}
                  </MenuGroup>
                  <MenuGroup title="Kurumsal">
                    {MOBILE_KURUMSAL.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-[15px] font-semibold text-brand-light transition-colors hover:text-brand-accent"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </MenuGroup>
                  <MenuGroup title="Destek">
                    {MOBILE_DESTEK.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-[15px] font-semibold text-brand-light transition-colors hover:text-brand-accent"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </MenuGroup>
                  <div className="flex items-center justify-between pt-5">
                    <span className="text-[13px] font-semibold text-brand-mid">Görünüm</span>
                    <ThemeToggle withLabel />
                  </div>
                </nav>

                {/* Sabit alt eylemler */}
                <div className="shrink-0 border-t border-brand-line px-6 pb-[max(16px,env(safe-area-inset-bottom))] pt-4">
                  <Link
                    href="/randevu"
                    onClick={() => setOpen(false)}
                    className="flex h-[50px] items-center justify-between rounded-[2px] bg-brand-accent px-5 text-[15px] font-extrabold text-white"
                  >
                    Randevu Oluştur <span aria-hidden>↗</span>
                  </Link>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 items-center justify-center gap-2 rounded-[12px] bg-brand-whatsapp text-[13px] font-extrabold text-white"
                    >
                      <WhatsAppIcon className="size-4" /> WhatsApp
                    </a>
                    <a
                      href={BUSINESS.phone.href}
                      className="flex h-11 items-center justify-center gap-2 rounded-[12px] border border-fg/20 text-[13px] font-extrabold text-brand-light"
                    >
                      <Phone className="size-4" aria-hidden /> Hemen Ara
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
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
                    className="w-[min(100vw-2rem,900px)] rounded-[22px] border border-fg/10 bg-brand-card p-3 text-brand-light shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
                  >
                    <div className="grid grid-cols-3 gap-2">
                      {GROUPS.map((g) => (
                        <div key={g}>
                          <p className="px-4 pb-1 pt-3 text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-brand-accent">
                            {SERVICE_GROUP_LABEL[g]}
                          </p>
                          {SERVICES.filter((s) => s.group === g).map((s) => (
                            <Link
                              key={s.slug}
                              href={`/hizmetler/${s.slug}`}
                              className="group block rounded-[12px] px-4 py-2.5 outline-none transition-colors hover:bg-fg/[0.05] focus-visible:bg-fg/[0.07]"
                            >
                              <span className="block text-[13.5px] font-extrabold text-brand-light group-hover:text-brand-accent">
                                {s.title}
                              </span>
                              <span className="mt-0.5 block text-[11.5px] leading-snug text-brand-mid">{s.desc}</span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/hizmetler"
                      className="mt-2 flex items-center justify-between rounded-[14px] border-t border-fg/10 px-4 pb-1 pt-4 text-[12px] font-extrabold uppercase tracking-[0.08em] text-brand-accent"
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
              className="inline-flex h-[42px] items-center gap-2 rounded-full border border-fg/[0.14] bg-fg/[0.04] px-4 text-[11.5px] font-bold text-brand-mid transition-colors hover:text-brand-light"
            >
              <span className="size-1.5 rounded-full bg-[#E5484D]" aria-hidden />
              Klinik:
              <span className="font-extrabold text-brand-light">Sultan Murat Cd. No:86 A</span>
            </Link>
            <Link
              href="/randevu"
              className="inline-flex h-[46px] items-center gap-1.5 whitespace-nowrap rounded-full border border-fg/[0.28] px-5 text-[12px] font-extrabold text-brand-light transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-white"
            >
              Randevu Al <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
