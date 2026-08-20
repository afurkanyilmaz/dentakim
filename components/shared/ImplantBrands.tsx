import { IMPLANT_BRANDS, getUsedBrands } from "@/lib/implant-brands";
import { Card } from "@/components/shared/Section";

/**
 * İmplant sistemleri bölümü.
 *
 * Klinikte uygulandığı onaylanmış sistem varsa onlar gösterilir; yoksa
 * hastaya sistem seçiminde nelere bakıldığı anlatılır. Marka onayı
 * gelmeden hiçbir sistem "kullanıyoruz" diye yayınlanmaz.
 */
export function ImplantBrands() {
  const used = getUsedBrands();
  const list = used.length > 0 ? used : IMPLANT_BRANDS;

  return (
    <section aria-labelledby="implant-sistemleri">
      <h2
        id="implant-sistemleri"
        className="font-heading text-[clamp(24px,3.2vw,32px)] font-semibold leading-[1.25] text-brand-dark"
      >
        {used.length > 0
          ? "Kliniğimizde uygulanan implant sistemleri"
          : "İmplant sistemleri hakkında"}
      </h2>

      <p className="mt-4 text-[17px] leading-[1.78] text-brand-mid [text-wrap:pretty]">
        {used.length > 0
          ? "Aşağıdaki sistemler kliniğimizde uygulanmaktadır. Hangi sistemin sizin için uygun olduğu; çene kemiği hacminiz, eksik diş bölgesi ve protetik plan değerlendirildikten sonra belirlenir."
          : "İmplant seçiminde belirleyici olan marka adı değil, sistemin sizin ağız yapınıza uygunluğu ve yedek parça sürekliliğidir. Aşağıda yaygın kullanılan sistemlerin nesnel özellikleri yer alıyor; hangisinin uygun olduğu muayene sonrasında birlikte kararlaştırılır."}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {list.map((brand) => (
          <Card key={brand.slug} className="p-[26px]">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-heading text-[22px] font-semibold text-brand-dark">
                {brand.name}
              </h3>
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand-accent">
                {brand.origin}
              </span>
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {brand.characteristics.map((c) => (
                <li key={c} className="flex gap-3 text-[14.5px] leading-[1.6] text-brand-mid">
                  <span
                    className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand-accent"
                    aria-hidden
                  />
                  {c}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <p className="mt-5 text-[14px] leading-[1.7] text-brand-faint">
        Sistemler arasında üstünlük sıralaması yapılmamaktadır. Her sistemin
        kullanım alanı ve endikasyonu farklıdır; seçim klinik muayene ve
        radyolojik değerlendirme sonrasında yapılır.
      </p>
    </section>
  );
}
