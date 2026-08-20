import { WHATSAPP_URL } from "@/lib/constants";
import { BUSINESS } from "@/lib/business";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="grid grid-cols-2 gap-0 border-t border-border/60 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
        <a
          href={BUSINESS.phone.href}
          className="flex items-center justify-center gap-1 bg-brand-dark py-4 text-center text-sm font-semibold text-white"
        >
          <span aria-hidden>📞</span>
          {BUSINESS.phone.display}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 bg-brand-whatsapp py-4 text-center text-sm font-semibold text-white"
        >
          <span aria-hidden>💬</span>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
