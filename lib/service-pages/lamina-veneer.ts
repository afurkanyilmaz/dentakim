import type { ServicePageContent } from "./types";

/** KLİNİSYEN ONAYI BEKLİYOR: Genel hasta bilgilendirmesi. */
export const laminaVeneer: ServicePageContent = {
  slug: "lamina-veneer",
  metaTitle: "Lamina Veneer (Porselen Lamina) — İstanbul Küçükçekmece",
  metaDescription:
    "Lamina veneer: ön dişlere uygulanan ince porselen yaprakçıklar. Kimlere uygun, aşındırma miktarı, E-max seçenekleri, süre ve bakım. Dentakim Küçükçekmece.",
  h1: "Lamina Veneer",
  alternateNames: ["Porselen lamina", "Yaprak porselen", "Veneer", "E-max lamina"],
  procedureType: "NoninvasiveProcedure",
  summary:
    "Lamina veneer, ön dişlerin görünen yüzeyine yapıştırılan yaklaşık 0,3–0,7 mm kalınlığında porselen yaprakçıklardır. Renk, form ve hafif diziliş bozukluklarını tam kaplamaya göre çok daha az diş aşındırarak düzeltir. Dentakim’de lamina uygulamalarını protez ve estetik diş hekimliği alanında çalışan hekimlerimiz yürütür.",
  facts: [
    { label: "Kalınlık", value: "Yaklaşık 0,3–0,7 mm" },
    { label: "Seans sayısı", value: "Genellikle 2–3 randevu" },
    { label: "Toplam süre", value: "Çoğu vakada 1–2 hafta" },
    { label: "Materyal", value: "Cam seramik (ör. lityum disilikat / E-max)" },
  ],
  lead:
    "Lamina veneer, sağlam diş dokusunu büyük ölçüde koruyarak gülüşün rengini ve formunu değiştirmeyi amaçlar. Küçükçekmece’deki kliniğimizde uygunluk, dişlerin ve dişetinin muayenesi sonrası belirlenir.",
  paragraphs: [
    "Lamina veneerler genellikle lityum disilikat (E-max gibi) veya feldspatik cam seramiklerden üretilir. Bu materyallerin ışık geçirgenliği doğal mineye yakın olduğu için özellikle ön dişlerde doğal görünüm elde edilebilir. Porselen yüzey leke tutmaya kompozite göre daha dirençlidir.",
    "Lamina; renk değişiklikleri (beyazlatmaya yanıt vermeyen lekeler), küçük kırıklar, diş aralıkları, form bozuklukları ve hafif çapraşıklıklar için uygun bir seçenektir. Diş dokusunun büyük kısmı kaybedilmişse, kanal tedavili kırılgan dişlerde veya ileri diziliş bozukluklarında zirkonyum kaplama ya da ortodonti daha uygun olabilir.",
    "Uygulama sırasında dişin ön yüzünden genellikle mine sınırları içinde kalan, milimetrenin altında bir aşındırma yapılır; bazı vakalarda aşındırmasız (no-prep) lamina da değerlendirilebilir. Aşındırma geri dönüşsüz olduğu için karar, dijital tasarım ve prova sonrasında verilir.",
    "Ciddi diş sıkma (bruksizm) laminaların kırılma riskini artırabilir. Bu hastalarda gece plağı kullanımı önerilir. Düzenli fırçalama, diş ipi ve 6 ayda bir kontrol lamina ve dişeti sağlığının korunmasına yardımcı olur.",
  ],
  steps: [
    "Muayene, fotoğraf ve dijital tasarım; uygunluk ve renk seçenekleri değerlendirilir.",
    "Prova (mock-up) sonrası onayınızla dişler minimal düzeyde hazırlanır ve ölçü alınır.",
    "Laboratuvar aşamasında geçici laminalar kullanılır.",
    "Kalıcı laminalar prova edilir, renk uyumu kontrol edilerek yapıştırılır.",
  ],
  faqs: [
    {
      question: "Lamina için dişler kesilir mi?",
      answer:
        "Çoğu vakada dişin ön yüzünden milimetrenin altında, minimal bir aşındırma yapılır. Bazı uygun vakalarda aşındırmasız lamina da değerlendirilebilir.",
    },
    {
      question: "Lamina mı zirkonyum mu?",
      answer:
        "Diş büyük ölçüde sağlamsa ve sorun renk ya da form ise lamina daha koruyucudur. Diş madde kaybetmiş, kırık veya kanal tedavili ise zirkonyum tam kaplama daha uygun olabilir.",
    },
    {
      question: "E-max lamina nedir?",
      answer:
        "E-max, lityum disilikat cam seramiğin bilinen bir ticari adıdır. Lamina veneerlerde sık kullanılan, ışık geçirgenliği yüksek bir materyaldir.",
    },
    {
      question: "Lamina sonrası nelere dikkat etmeliyim?",
      answer:
        "Sert cisimleri (kalem, çekirdek) ısırmaktan kaçının, düzenli fırçalama ve diş ipi kullanın, diş sıkma varsa gece plağı takın ve kontrollerinizi aksatmayın.",
    },
  ],
  relatedSlugOrder: ["gulus-tasarimi", "protez-zirkonyum", "dis-beyazlatma", "gece-plagi-bruksizm"],
  guideSlugs: ["lamina-mi-zirkonyum-mu", "hollywood-smile-nedir", "estetik-dis-hekimligi-nedir"],
};
