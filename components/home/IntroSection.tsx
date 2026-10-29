import { BUSINESS } from "@/lib/business";
import { SERVICES } from "@/lib/constants";
import { DOCTORS } from "@/lib/doctors";
import { DISPLAY_H2, Eyebrow } from "@/components/shared/Section";

/**
 * Klinik tanıtımı — sonuca odaklı mesaj + doğrulanabilir bilgi satırı.
 *
 * Sağlık tanıtım kuralları gereği "başarı oranı", hasta sayısı, yorum veya
 * "en iyi" gibi ifadeler kullanılmaz; yalnızca sitedeki verilerden üretilen,
 * doğrulanabilir bilgiler gösterilir.
 */
export function IntroSection() {
  const facts = [
    { value: String(DOCTORS.length), label: "Hekim · protez, estetik ve cerrahi" },
    { value: String(SERVICES.length), label: "Tedavi alanı tek klinikte" },
    { value: "Dijital", label: "Gülüş tasarımı ve prova" },
    { value: "6 gün", label: `Pzt–Cmt açık · ${BUSINESS.address.district}` },
  ];

  return (
    <section aria-labelledby="tanitim-baslik" className="border-b border-brand-line bg-brand-surface">
      <div className="mx-auto max-w-[1304px] px-5 py-[clamp(64px,7.8vw,112px)] sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,640px)_minmax(0,496px)] lg:items-end lg:justify-between">
          <div>
            <Eyebrow className="mb-5">{BUSINESS.brandName}</Eyebrow>
            <h2 id="tanitim-baslik" className={DISPLAY_H2}>
              Yeni gülüşünüzü tedaviden önce görün.
            </h2>
          </div>
          <p className="text-[16px] leading-[1.8] text-brand-mid sm:text-[18px]">
            Gülüş tasarımı, lamina, zirkonyum ve implant tedavilerinde sonucu
            yüzünüze göre planlıyoruz. Dijital tasarım ve ağız içi prova ile
            renk, form ve boyu kalıcı işleme geçmeden önce birlikte
            kararlaştırıyor; her adımı yazılı plana bağlıyoruz.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-brand-line bg-brand-line lg:grid-cols-4">
          {facts.map((f) => (
            <li key={f.label} className="bg-brand-surface px-5 py-6 sm:px-7">
                <span className="block font-heading text-[clamp(30px,3.4vw,48px)] font-extrabold leading-none tracking-[-0.05em] text-brand-light">
                  {f.value}
                </span>
              <span className="mt-2 block text-[12.5px] font-semibold text-brand-mid">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
