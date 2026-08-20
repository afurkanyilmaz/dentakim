"use client";

import { usePathname } from "next/navigation";
import { whatsappUrl } from "@/lib/business";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

/** Yüzen WhatsApp butonu — Claude Design'daki nabız animasyonlu yeşil daire. */
export function WhatsAppButton() {
  const pathname = usePathname();
  // Mobilde alt sabit çubuk zaten WhatsApp ve telefon sunuyor; yüzen buton
  // yalnızca masaüstünde görünür (bkz. StickyCallBar md:hidden).
  // İletişim sayfasında ise sayfa içi buton belirgin olduğu için gizlenir.
  if (pathname === "/iletisim") return null;

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan yazın"
      className="fixed bottom-[22px] right-[22px] z-[80] hidden size-[60px] md:flex animate-pulse-ring items-center justify-center rounded-full bg-brand-whatsapp text-white transition-colors hover:bg-brand-whatsapp-dark motion-reduce:animate-none"
    >
      <WhatsAppIcon className="size-[30px]" />
    </a>
  );
}
