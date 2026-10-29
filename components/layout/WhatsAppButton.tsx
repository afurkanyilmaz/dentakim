"use client";

import { usePathname } from "next/navigation";
import { whatsappUrl } from "@/lib/business";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

/** Yüzen WhatsApp düğmesi — masaüstünde yazılı hap, mobilde daire. */
export function WhatsAppButton() {
  const pathname = usePathname();
  // İletişim sayfasında sayfa içi düğme belirgin olduğu için gizlenir.
  if (pathname === "/iletisim") return null;

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan yazın"
      className="fixed bottom-[18px] right-[18px] z-[80] flex size-14 items-center justify-center gap-2 rounded-full bg-brand-whatsapp text-white shadow-[0_14px_34px_rgba(37,211,102,0.35)] transition-colors hover:bg-brand-whatsapp-dark sm:bottom-6 sm:right-6 sm:w-auto sm:px-6"
    >
      <WhatsAppIcon className="size-6 sm:size-5" />
      <span className="hidden text-[14px] font-extrabold sm:inline">WhatsApp</span>
    </a>
  );
}
