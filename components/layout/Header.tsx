"use client";

import Link from "next/link";
import { useState } from "react";
import { SERVICES } from "@/lib/constants";
import { DOCTORS } from "@/lib/doctors";
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

/** Marka kilidi — Cormorant Garamond wordmark + altın üst başlık. */
function Wordmark() {
  return (
    <Link href="/" className="flex items-baseline gap-2.5">
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-line bg-[rgba(252,251,249,0.92)] backdrop-blur-[12px]">
      <div className="container mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-3.5">
        <Wordmark />

        {/* Masaüstü menü */}
        <nav
          className="hidden items-center gap-x-[26px] text-[14.5px] font-semibold md:flex"
          aria-label="Ana menü"
        >
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 text-brand-mid outline-none transition-colors hover:text-brand-dark focus-visible:text-brand-dark">
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
              className="text-brand-mid transition-colors hover:text-brand-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Sağ blok: telefon + CTA */}
        <div className="flex items-center gap-3.5">
          <a
            href={BUSINESS.phone.href}
            className="hidden items-center gap-2 text-[14.5px] font-bold text-brand-dark transition-colors hover:text-brand-accent lg:flex"
          >
            <span
              className="inline-block size-2 rounded-full bg-brand-whatsapp"
              aria-hidden
            />
            {BUSINESS.phone.display}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand-dark px-[22px] py-3 text-sm font-bold text-brand-surface transition-colors hover:bg-brand-deep sm:inline-block"
          >
            Randevu Oluştur
          </a>

          {/* Mobil menü */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-full border border-brand-line text-brand-dark md:hidden"
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
                {DOCTORS.length > 0 ? null : null}

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-5 rounded-full bg-brand-dark px-6 py-3.5 text-center text-sm font-bold text-brand-surface"
                  )}
                >
                  Randevu Oluştur
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
