"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";

const NAV = [
  { href: "/hekimler", label: "Hekimler" },
  { href: "/bolgeler", label: "Bölgeler" },
  { href: "/klinik", label: "Klinik" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

/** Marka kilidi — logo işareti + Cormorant Garamond wordmark + altın üst başlık. */
function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${BUSINESS.brandName} ana sayfa`}>
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={36}
        height={36}
        className="size-9 shrink-0"
        priority
      />
      <span className="font-heading text-[30px] font-bold leading-none tracking-[0.02em] text-brand-dark">
        {BUSINESS.brandName}
      </span>
      <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-accent sm:inline">
        Ağız ve Diş Sağlığı
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-line bg-[rgba(252,251,249,0.92)] backdrop-blur-[12px]">
      <div className="container mx-auto flex max-w-[1240px] items-center justify-between gap-x-6 px-6 py-3.5">
        <Wordmark />

        {/* Masaüstü menü */}
        <nav
          className="hidden items-center gap-x-[26px] text-[14.5px] font-semibold lg:flex"
          aria-label="Ana menü"
        >
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "inline-flex items-center gap-1 rounded-sm outline-none transition-colors hover:text-brand-dark focus-visible:ring-2 focus-visible:ring-brand-accent data-[popup-open]:text-brand-dark",
                isActive("/hizmetler") ? "text-brand-dark" : "text-brand-mid"
              )}
            >
              Tedaviler
              <ChevronDown className="size-4 opacity-70" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[min(100vw-2rem,540px)] rounded-card border-brand-line bg-white p-4"
            >
              <div className="grid gap-1 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/hizmetler/${s.slug}`}
                    className="rounded-panel px-3 py-2.5 outline-none transition-colors hover:bg-brand-primary-light focus-visible:bg-brand-primary-light"
                  >
                    <span className="block font-heading text-[17px] font-semibold text-brand-dark">
                      {s.title}
                    </span>
                    <span className="mt-0.5 block text-xs font-normal text-brand-mid">
                      {s.desc}
                    </span>
                  </Link>
                ))}
              </div>
              <Link
                href="/hizmetler"
                className="mt-2 block border-t border-brand-line px-3 pt-3 text-sm font-bold text-brand-accent hover:text-brand-dark"
              >
                Tüm tedaviler →
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative rounded-sm py-1 transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
                "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand-accent after:transition-transform hover:after:scale-x-100 motion-reduce:after:transition-none",
                isActive(item.href) ? "text-brand-dark after:scale-x-100" : "text-brand-mid"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Sağ blok: telefon + CTA */}
        <div className="flex items-center gap-3.5">
          <a
            href={BUSINESS.phone.href}
            className="hidden items-center gap-2 whitespace-nowrap text-[14.5px] font-bold text-brand-dark transition-colors hover:text-brand-accent xl:flex"
          >
            <span
              className="inline-block size-2 rounded-full bg-brand-whatsapp"
              aria-hidden
            />
            {BUSINESS.phone.display}
          </a>
          <Link
            href="/randevu"
            className="hidden whitespace-nowrap rounded-full bg-brand-dark px-[22px] py-3 text-sm font-bold text-brand-surface transition-colors hover:bg-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:inline-block"
          >
            Randevu Oluştur
          </Link>

          {/* Mobil menü */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-11 items-center justify-center rounded-full border border-brand-line text-brand-dark lg:hidden"
              aria-label="Menüyü aç"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,400px)] bg-brand-surface px-5">
              <SheetHeader>
                <SheetTitle className="text-left font-heading text-2xl font-semibold text-brand-dark">
                  Menü
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-1 pb-8">
                <p className="px-3 pb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                  Tedaviler
                </p>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/hizmetler/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-panel px-3 py-3 font-heading text-lg font-semibold text-brand-dark hover:bg-brand-primary-light"
                  >
                    {s.title}
                  </Link>
                ))}
                <Link
                  href="/hizmetler"
                  onClick={() => setOpen(false)}
                  className="rounded-panel px-3 py-3 text-sm font-bold text-brand-accent"
                >
                  Tüm tedaviler →
                </Link>

                <div className="my-3 h-px bg-brand-line" />

                <p className="px-3 pb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                  Klinik
                </p>
                {[...NAV, { href: "/fiyatlar", label: "Fiyatlar" }].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-panel px-3 py-3 text-[15px] font-semibold text-brand-mid hover:bg-brand-primary-light hover:text-brand-dark"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/randevu"
                  onClick={() => setOpen(false)}
                  className="mt-5 rounded-full bg-brand-dark px-6 py-3.5 text-center text-sm font-bold text-brand-surface"
                >
                  Randevu Oluştur
                </Link>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-full bg-brand-whatsapp px-6 py-3.5 text-center text-sm font-bold text-white"
                >
                  WhatsApp&apos;tan Yazın
                </a>
                <a
                  href={BUSINESS.phone.href}
                  className="mt-2 rounded-full border border-brand-line px-6 py-3.5 text-center text-sm font-bold text-brand-dark"
                >
                  {BUSINESS.phone.display}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
