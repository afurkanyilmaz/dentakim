import { BUSINESS } from "@/lib/business";
import { DISPLAY_H2, Eyebrow } from "@/components/shared/Section";

/** Kısa klinik tanıtımı — solda dev başlık, sağda açıklama. */
export function IntroSection() {
  return (
    <section aria-labelledby="tanitim-baslik" className="border-b border-brand-line bg-brand-surface">
      <div className="mx-auto grid max-w-[1304px] gap-10 px-5 py-[clamp(64px,7.8vw,112px)] sm:px-8 lg:grid-cols-[minmax(0,640px)_minmax(0,496px)] lg:items-end lg:justify-between">
        <div>
          <Eyebrow className="mb-5">{BUSINESS.brandName}</Eyebrow>
          <h2 id="tanitim-baslik" className={DISPLAY_H2}>
            Modern diş hekimliği, planlı ve şeffaf tedavi.
          </h2>
        </div>
        <p className="text-[16px] leading-[1.8] text-brand-mid sm:text-[18px]">
          {BUSINESS.address.district} Sultan Murat Caddesi&apos;ndeki kliniğimizde
          protez ve ağız cerrahisi alanlarında çalışan hekimlerimizle muayene,
          görüntüleme ve yazılı tedavi planı aşamalarını birlikte yürütüyoruz. Her
          hastamızın ihtiyacını ayrı değerlendiriyoruz.
        </p>
      </div>
    </section>
  );
}
