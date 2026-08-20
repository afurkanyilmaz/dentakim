"use client";

import { usePathname } from "next/navigation";
import { whatsappUrl } from "@/lib/business";

/** Yüzen WhatsApp butonu — Claude Design'daki nabız animasyonlu yeşil daire. */
export function WhatsAppButton() {
  const pathname = usePathname();
  // İletişim sayfasında zaten belirgin WhatsApp butonu var; yüzen buton gizlenir.
  if (pathname === "/iletisim") return null;

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan yazın"
      className="fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom))] right-[22px] z-[80] flex size-[60px] animate-pulse-ring items-center justify-center rounded-full bg-brand-whatsapp text-white transition-colors hover:bg-brand-whatsapp-dark motion-reduce:animate-none md:bottom-[22px]"
    >
      <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.79.96-.97 1.16-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.15-.15.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.37 2.98 1.17 2.98.78 3.52.73.54-.05 1.75-.71 2-1.4.25-.68.25-1.27.17-1.39-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 01-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.37 9.37 0 01-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.34 9.34 0 016.65 2.76 9.32 9.32 0 012.75 6.65c0 5.19-4.22 9.41-9.41 9.41zM20.5 3.49A11.32 11.32 0 0012.04.01C5.81.01.75 5.07.75 11.29c0 1.99.52 3.93 1.5 5.64L.6 23.4l6.63-1.74a11.27 11.27 0 004.81 1.23h.01c6.22 0 11.28-5.06 11.29-11.28a11.2 11.2 0 00-3.3-7.98z" />
      </svg>
    </a>
  );
}
