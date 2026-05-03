"use client";

import { usePathname } from "next/navigation";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const pathname = usePathname();
  if (pathname === "/randevu") return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom))] right-4 z-50 md:bottom-6",
        "inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg",
        "animate-pulse-ring transition-transform hover:scale-105"
      )}
      aria-label="WhatsApp ile yazın"
    >
      <svg className="size-7" viewBox="0 0 32 32" aria-hidden>
        <path
          fill="currentColor"
          d="M16.004 2.5C8.914 2.5 3.16 8.252 3.16 15.34c0 2.35.61 4.59 1.77 6.59L2.5 29.5l7.74-2.03a12.9 12.9 0 0 0 5.76 1.43h.01c7.09 0 12.84-5.75 12.84-12.84 0-3.43-1.34-6.65-3.77-9.08A12.78 12.78 0 0 0 16.004 2.5Zm0 2.55c5.68 0 10.3 4.62 10.3 10.29 0 5.68-4.62 10.31-10.31 10.31a10.2 10.2 0 0 1-5.2-1.42l-.37-.22-4.34 1.14 1.16-4.23-.24-.39a10.26 10.26 0 0 1-1.59-5.5c0-5.67 4.63-10.29 10.31-10.29Zm5.84 14.55c-.08-.13-.29-.21-.6-.37-.31-.16-1.84-.9-2.12-1.01-.29-.1-.5-.16-.71.16-.21.31-.82 1-1 1.21-.19.21-.37.23-.68.08-.31-.16-1.32-.49-2.51-1.56-.93-.83-1.56-1.86-1.74-2.18-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.4 4.77.75.32 1.34.52 1.8.66.76.24 1.45.21 2 .13.61-.1 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48Z"
        />
      </svg>
    </a>
  );
}
