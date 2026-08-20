import { Section, SectionHeader } from "@/components/shared/Section";

/**
 * "İlk randevuda ne oluyor" bölümü.
 *
 * Diş hekimi kaygısı gerçek bir dönüşüm engelidir; süreci önceden anlatmak
 * belirsizliği azaltır. Koyu zeminde durması sayfa ritmini de kırar.
 */
const STEPS = [
  {
    title: "İlk görüşme",
    desc: "Şikâyetinizi ve beklentinizi dinliyoruz. Bu aşamada hiçbir işlem yapılmaz.",
  },
  {
    title: "Muayene ve görüntüleme",
    desc: "Ağız içi muayene, gerekiyorsa panoramik röntgen veya üç boyutlu tomografi.",
  },
  {
    title: "Yazılı tedavi planı",
    desc: "Seçenekler, tahmini seans sayısı ve süre kalem kalem yazılı olarak paylaşılır.",
  },
  {
    title: "Tedavi ve takip",
    desc: "Onayınızın ardından tedavi uygulanır; kontrol randevuları baştan planlanır.",
  },
];

export function ProcessSection() {
  return (
    <Section tone="deep" labelledBy="surec-baslik">
      <SectionHeader
        id="surec-baslik"
        eyebrow="Nasıl İlerliyoruz"
        title="İlk randevunuzda ne oluyor?"
        lead="Ne yapılacağını bilmemek, tedaviyi ertelemenin en yaygın sebebi. Süreci baştan anlatıyoruz."
        onDeep
      />

      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex flex-col gap-3">
            <span className="font-heading text-[44px] font-semibold leading-none text-brand-accent tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className="block h-px w-full bg-[rgba(252,251,249,0.16)]"
              aria-hidden
            />
            <h3 className="font-heading text-[24px] font-semibold leading-[1.2] text-brand-surface">
              {step.title}
            </h3>
            <p className="text-[14.5px] leading-[1.65] text-brand-on-deep">{step.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
