import Link from "next/link";
import { CLINIC, SERVICES } from "@/lib/constants";
import { Phone } from "lucide-react";

const INFO_LINKS = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/randevu", label: "Randevu" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-xl font-bold text-brand-primary">
              {CLINIC.shortName}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-mid">
              Küçükçekmece&apos;nin Güvenilen Diş Kliniği
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={CLINIC.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-brand-dark hover:bg-muted"
                aria-label="Instagram"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.25-.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                </svg>
              </a>
              <a
                href={CLINIC.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-brand-dark hover:bg-muted"
                aria-label="Facebook"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.3c0-.9.25-1.5 1.5-1.5H17V4.1A21 21 0 0 0 14.6 4C12 4 10.2 5.6 10.2 8v2H8v3h2.2V21h3.3Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold text-brand-dark">Hizmetler</p>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="text-brand-mid hover:text-brand-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold text-brand-dark">Bilgi</p>
            <ul className="mt-4 space-y-2 text-sm">
              {INFO_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-brand-mid hover:text-brand-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-sm text-brand-mid">
              <p className="font-medium text-brand-dark">İletişim</p>
              <p>
                Fevzi Çakmak, Sultan Murat Cd. No:86 A, 34295 Küçükçekmece/İstanbul
              </p>
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="inline-flex items-center gap-2 font-semibold text-brand-primary hover:underline"
              >
                <Phone className="size-4" aria-hidden />
                {CLINIC.phone}
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-border/60 pt-8 text-center text-xs text-brand-mid">
          © 2024 {CLINIC.name}
        </p>
      </div>
    </footer>
  );
}
