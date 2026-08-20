import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

/**
 * Tıbbi sorumluluk reddi.
 *
 * Sağlık içeriği barındıran her sayfada gösterilir. Amaç, içeriğin
 * bilgilendirme niteliğinde olduğunu ve muayene yerine geçmediğini açıkça
 * belirtmektir; tanı ve tedavi vaadi izlenimini önler.
 */
export function MedicalDisclaimer({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "flex gap-3.5 rounded-panel border border-brand-line bg-brand-primary-light/60 p-5",
        className
      )}
      aria-label="Tıbbi bilgilendirme"
    >
      <Info className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden />
      <p className="text-[14px] leading-[1.7] text-brand-mid">
        Bu sayfadaki bilgiler yalnızca genel bilgilendirme amaçlıdır; muayene, tanı ve
        tedavi yerine geçmez. Her hastanın durumu farklıdır ve uygulanacak tedavi ancak
        klinik muayene ve gerekli görüntülemeler sonrasında belirlenebilir. Şikâyetiniz
        varsa bir diş hekimine başvurunuz.
      </p>
    </aside>
  );
}
