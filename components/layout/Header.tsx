"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CLINIC, SERVICES } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";

function ToothLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 2C9.2 2 7 4.1 7 7.2c0 1.2.3 2.3.8 3.2-.4 1.4-.8 3.1-.8 5.1 0 2.2 1.1 4.5 2.7 5.5.6.4 1.3.6 2 .6.9 0 1.7-.3 2.3-.9.6.6 1.4.9 2.3.9.7 0 1.4-.2 2-.6 1.6-1 2.7-3.3 2.7-5.5 0-2-.4-3.7-.8-5.1.5-.9.8-2 .8-3.2C17 4.1 14.8 2 12 2Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M12 2.5C9.45 2.5 7.5 4.35 7.5 7.1c0 1.05.25 2 .7 2.85-.45 1.35-.85 3.05-.85 5.05 0 2.05 1 4.15 2.45 5.05.55.35 1.15.55 1.8.55.75 0 1.45-.25 2-.75.55.5 1.25.75 2 .75.65 0 1.25-.2 1.8-.55 1.45-.9 2.45-3 2.45-5.05 0-2-.4-3.7-.85-5.05.45-.85.7-1.8.7-2.85 0-2.75-1.95-4.6-4.5-4.6Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function BrandLogo() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <ToothLogo className="size-8 text-brand-primary" />;
  }
  return (
    <Image
      src="/images/logo-dentakim.svg"
      alt="Dentakim logo"
      width={32}
      height={32}
      className="size-8"
      onError={() => setFailed(true)}
      priority={false}
    />
  );
}

const NAV = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors",
        scrolled
          ? "border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
          : "border-transparent bg-background"
      )}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-xl font-bold text-brand-primary"
        >
          <BrandLogo />
          <span className="leading-none">{CLINIC.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Ana menü">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "inline-flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium text-brand-dark outline-none",
                "hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              Hizmetler
              <ChevronDown className="size-4 opacity-70" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[min(100vw-2rem,560px)] p-3">
              <DropdownMenuLabel className="text-brand-mid">
                Tüm hizmetler
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="grid gap-1 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/hizmetler/${s.slug}`}
                    className="rounded-md px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="font-medium text-brand-dark">{s.title}</span>
                    <span className="mt-0.5 block text-xs text-brand-mid">{s.desc}</span>
                  </Link>
                ))}
              </div>
              <DropdownMenuSeparator />
              <Link
                href="/hizmetler"
                className="block rounded-md px-2 py-2 text-sm font-medium text-brand-primary hover:bg-brand-primary-light"
              >
                Hizmetler sayfası
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-brand-dark hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/randevu"
            className={cn(
              buttonVariants({ variant: "default" }),
              "ml-2 bg-brand-accent text-brand-dark hover:bg-brand-accent/90"
            )}
          >
            Randevu Al
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "border-brand-primary/30"
              )}
              aria-label="Menüyü aç"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100vw-2rem,420px)] px-4"
            >
              <SheetHeader>
                <SheetTitle className="font-heading text-brand-dark">Menü</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1 pb-6">
                <p className="px-2 text-xs font-semibold uppercase tracking-wide text-brand-mid">
                  Hizmetler
                </p>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/hizmetler/${s.slug}`}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-brand-dark hover:bg-muted"
                  >
                    {s.title}
                  </Link>
                ))}
                <Link
                  href="/hizmetler"
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-brand-primary hover:bg-brand-primary-light"
                >
                  Tüm hizmetler
                </Link>
                <div className="my-3 h-px bg-border" />
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-brand-dark hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/randevu"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "mt-4 bg-brand-accent text-brand-dark hover:bg-brand-accent/90"
                  )}
                >
                  Randevu Al
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
