import type { ServicePageContent } from "./types";

/** KLİNİSYEN ONAYI BEKLİYOR: Genel hasta bilgilendirmesi. */
export const kemikGreftiSinusLifting: ServicePageContent = {
  slug: "kemik-grefti-sinus-lifting",
  metaTitle: "Kemik Grefti ve Sinüs Lifting — İstanbul Küçükçekmece",
  metaDescription:
    "İmplant için kemik yetersizse: kemik grefti (kemik tozu) ve sinüs lifting (sinüs yükseltme). Ne zaman gerekir, iyileşme süresi ve süreç. Dentakim Küçükçekmece.",
  h1: "Kemik Grefti ve Sinüs Lifting",
  alternateNames: ["Kemik tozu", "Sinüs yükseltme", "Kemik ogmentasyonu"],
  procedureType: "SurgicalProcedure",
  summary:
    "Kemik grefti, implant yerleştirilecek bölgede kemik hacmi yetersiz olduğunda kemiğin greft materyaliyle desteklenmesidir. Sinüs lifting ise üst çene arka bölgede sinüs zarının yükseltilip altına greft yerleştirilerek implant için yeterli kemik yüksekliği sağlanmasıdır. Dentakim’de bu işlemleri ağız-diş-çene cerrahımız röntgen ve gerektiğinde görüntüleme merkezinde çekilen tomografi ile planlayarak uygular.",
  facts: [
    { label: "Ne zaman gerekir?", value: "Kemik hacmi implant için yetersizse" },
    { label: "Planlama", value: "Röntgen; gerekirse tomografi" },
    { label: "Anestezi", value: "Lokal anestezi" },
    { label: "İyileşme", value: "Genellikle birkaç ay (vakaya göre)" },
  ],
  lead:
    "Diş kaybından sonra çene kemiği zamanla erir; bu durumda implant için yeterli kemik kalmayabilir. Kemik grefti ve sinüs lifting, implant tedavisini mümkün kılmak için kemik hacmini artırmayı amaçlar.",
  paragraphs: [
    "Greft materyali hastanın kendi kemiğinden (otojen), insan kaynaklı (allogreft), hayvan kaynaklı (ksenogreft) veya sentetik olabilir. Seçim; eksik kemiğin miktarına, bölgeye ve hastanın tercihine göre yapılır ve muayenede seçenekler anlatılır.",
    "Sinüs lifting iki yöntemle yapılabilir. Kapalı (krestal) yöntemde sinüs zarı implant yuvasından az miktarda yükseltilir ve çoğu zaman implant aynı seansta yerleştirilir. Açık (lateral) yöntemde yandan küçük bir pencere açılarak daha fazla kemik kazanılır; implant aynı seansta veya iyileşme sonrası yerleştirilebilir.",
    "Kemiğin greftle kaynaşması için genellikle birkaç aylık iyileşme süresi gerekir. Bu süre implant takvimini uzatır; toplam süre muayene sonrası yazılı planda belirtilir. Kemik yetersizliğinde açılı implantlarla yapılan All-on-4 gibi alternatifler de değerlendirilebilir.",
    "İşlem sonrası birkaç gün şişlik ve hassasiyet görülebilir. Sinüs işlemlerinden sonra bir süre burun sümkürmekten, pipetle içmekten ve ağır egzersizden kaçınılması önerilir. Sigara iyileşmeyi olumsuz etkiler.",
  ],
  steps: [
    "Muayene ve röntgen yapılır; gerekirse görüntüleme merkezinde tomografi çektirilerek kemik ve sinüs anatomisi ölçülür.",
    "Lokal anestezi altında greft uygulanır veya sinüs zarı yükseltilerek greft yerleştirilir.",
    "İyileşme döneminde kontroller yapılır; uygun vakalarda implant aynı seansta yerleştirilmiştir.",
    "Kemik olgunlaştıktan sonra implant ve protez aşamalarına geçilir.",
  ],
  faqs: [
    {
      question: "Her implantta kemik grefti gerekir mi?",
      answer:
        "Hayır. Greft yalnızca implant yerleştirilecek bölgede kemik hacmi yetersizse gerekir. İhtiyaç röntgen ve gerektiğinde tomografi ile belirlenir.",
    },
    {
      question: "Sinüs lifting ağrılı mı?",
      answer:
        "İşlem lokal anestezi altında yapılır. Sonrasında birkaç gün şişlik ve hassasiyet olabilir; hekiminizin önerdiği ilaçlarla kontrol altına alınır.",
    },
    {
      question: "Greft sonrası implant ne zaman yapılır?",
      answer:
        "Bazı vakalarda aynı seansta, bazılarında ise kemiğin olgunlaşması için genellikle birkaç ay bekledikten sonra yapılır. Süre greftin miktarına ve bölgeye göre değişir.",
    },
  ],
  relatedSlugOrder: ["implant-tedavisi", "all-on-4-implant", "agiz-dis-cene-cerrahisi", "all-on-6-implant"],
  guideSlugs: ["implant-ne-kadar-surer", "all-on-4-mu-all-on-6-mi"],
};
