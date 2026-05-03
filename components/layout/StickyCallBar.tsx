import { CLINIC, WHATSAPP_URL } from "@/lib/constants";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="grid grid-cols-2 gap-0 border-t border-border/60 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
        <a
          href={`tel:${CLINIC.phoneRaw}`}
          className="flex items-center justify-center gap-1 bg-brand-primary py-4 text-center text-sm font-semibold text-white"
        >
          <span aria-hidden>📞</span>
          {CLINIC.phone}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 bg-[#25D366] py-4 text-center text-sm font-semibold text-white"
        >
          <span aria-hidden>💬</span>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
