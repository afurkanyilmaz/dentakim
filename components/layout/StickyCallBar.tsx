import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { BUSINESS, whatsappUrl } from "@/lib/business";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="grid grid-cols-2 gap-0 border-t border-border/60 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
        <a
          href={BUSINESS.phone.href}
          className="flex items-center justify-center gap-2 bg-brand-dark py-4 text-center text-sm font-semibold text-white"
        >
          <Phone className="size-4 shrink-0" aria-hidden />
          {BUSINESS.phone.display}
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-brand-whatsapp py-4 text-center text-sm font-semibold text-white"
        >
          <WhatsAppIcon className="size-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
