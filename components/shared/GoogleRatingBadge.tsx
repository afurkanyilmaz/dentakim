import { Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { cn } from "@/lib/utils";

/**
 * Google puan rozeti — Google İşletme Profili'ndeki puanı ve yorum sayısını
 * gösterir ve yorumların kendisi için profile bağlanır.
 *
 * Yorum metinleri sitede yayınlanmaz (sağlık tanıtım kuralları: hasta beyanı
 * ve teşekkür mesajı yayınlanmaz). Puan schema'ya aggregateRating olarak
 * YAZILMAZ; kaynak açıkça "Google" olarak belirtilir.
 * Değerler lib/business.ts → google.rating içinden gelir; elle güncellenir.
 */
export function GoogleRatingBadge({ className }: { className?: string }) {
  const { value, count } = BUSINESS.google.rating;
  const score = value.toFixed(1).replace(".", ",");

  return (
    <a
      href={BUSINESS.google.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Google'da ${score} puan, ${count} yorum — yorumları Google'da okuyun`}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full border border-fg/15 bg-fg/[0.04] py-2 pl-3 pr-4 transition-colors hover:border-brand-accent",
        className
      )}
    >
      <GoogleG className="size-5 shrink-0" />
      <span className="font-heading text-[16px] font-extrabold leading-none text-brand-light">{score}</span>
      <span className="flex gap-0.5" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="size-3.5 fill-[#FBBC04] text-[#FBBC04]" />
        ))}
      </span>
      <span className="text-[12.5px] font-semibold text-brand-mid transition-colors group-hover:text-brand-accent-dark">
        {count} Google yorumu <span aria-hidden>↗</span>
      </span>
    </a>
  );
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}
