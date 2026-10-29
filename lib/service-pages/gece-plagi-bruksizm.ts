import type { ServicePageContent } from "./types";

/** KLİNİSYEN ONAYI BEKLİYOR: Genel hasta bilgilendirmesi. */
export const gecePlagiBruksizm: ServicePageContent = {
  slug: "gece-plagi-bruksizm",
  metaTitle: "Diş Sıkma (Bruksizm) ve Gece Plağı — İstanbul Küçükçekmece",
  metaDescription:
    "Diş sıkma ve gıcırdatma (bruksizm) belirtileri, dişlere etkisi ve kişiye özel gece plağı. Kaplama ve laminaları korumak için. Dentakim Küçükçekmece.",
  h1: "Diş Sıkma (Bruksizm) ve Gece Plağı",
  alternateNames: ["Bruksizm", "Diş gıcırdatma", "Oklüzal splint", "Gece plağı"],
  procedureType: "NoninvasiveProcedure",
  summary:
    "Bruksizm, özellikle uykuda dişlerin farkında olmadan sıkılması veya gıcırdatılmasıdır. Dişlerde aşınma ve kırıklara, çene ve şakak ağrısına yol açabilir. Kişiye özel ölçüyle hazırlanan gece plağı, dişleri ve varsa kaplamaları bu kuvvetlere karşı korumaya yardımcı olur.",
  facts: [
    { label: "Seans sayısı", value: "Genellikle 2 randevu" },
    { label: "Hazırlık", value: "Ölçü veya dijital tarama" },
    { label: "Kullanım", value: "Uyku sırasında" },
    { label: "Kontrol", value: "Periyodik ayar ve kontrol" },
  ],
  lead:
    "Sabah çene yorgunluğu, baş ağrısı veya dişlerde düzleşme fark ediyorsanız diş sıkıyor olabilirsiniz. Dentakim’de muayene ile bulgular değerlendirilir ve gerekirse kişiye özel gece plağı hazırlanır.",
  paragraphs: [
    "Bruksizmin nedenleri arasında stres, uyku düzensizlikleri, bazı ilaçlar ve kapanış bozuklukları sayılabilir. Çoğu kişi gece diş sıktığını fark etmez; belirtiler genellikle eş veya aile bireylerinin gıcırdatma sesini duyması ya da diş hekimi muayenesinde görülen aşınmalarla ortaya çıkar.",
    "Sık görülen belirtiler: dişlerde aşınma ve düzleşme, minede çatlaklar, sıcak-soğuk hassasiyeti, sabahları çene veya şakak ağrısı, çene ekleminde ses ve yanaklarda iz. Uzun dönemde dolgu, kaplama ve laminalarda kırılmalar görülebilir.",
    "Gece plağı (oklüzal splint), ölçü veya dijital tarama ile kişiye özel hazırlanan, genellikle sert akrilikten yapılmış bir apareydir. Diş sıkmayı tamamen ortadan kaldırmaz; ancak kuvveti dağıtarak dişleri ve restorasyonları korumaya, çene kaslarındaki yükü azaltmaya yardımcı olur.",
    "Gülüş tasarımı, lamina veneer veya zirkonyum kaplama yapılan ve diş sıkma alışkanlığı olan hastalarda gece plağı, restorasyonların ömrünü korumak için önemlidir. Çene ekleminde belirgin ağrı veya kilitlenme varsa ek değerlendirme önerilebilir.",
  ],
  steps: [
    "Muayenede dişlerdeki aşınmalar, çene eklemi ve kaslar değerlendirilir.",
    "Ölçü veya dijital tarama ile plak için kayıt alınır.",
    "Hazırlanan gece plağı ağızda prova edilir ve kapanış ayarı yapılır.",
    "Kullanım ve temizlik anlatılır; kontrol randevularında plak yeniden ayarlanır.",
  ],
  faqs: [
    {
      question: "Gece plağı diş sıkmayı tedavi eder mi?",
      answer:
        "Gece plağı diş sıkmayı tamamen ortadan kaldırmaz; dişleri ve restorasyonları aşınma ve kırılmaya karşı korur, çene kaslarındaki yükü azaltmaya yardımcı olur.",
    },
    {
      question: "Hazır plak kullanabilir miyim?",
      answer:
        "Hazır plaklar kapanışa uyum sağlamayabilir. Kişiye özel ölçüyle hazırlanan ve hekim tarafından ayarlanan plak daha uygun bir seçenektir.",
    },
    {
      question: "Gece plağını nasıl temizlemeliyim?",
      answer:
        "Her sabah ılık su ve yumuşak bir fırçayla temizleyin, sıcak suya koymayın ve kuru, havalandırmalı kabında saklayın.",
    },
  ],
  relatedSlugOrder: ["lamina-veneer", "gulus-tasarimi", "protez-zirkonyum", "dis-dolgusu"],
  guideSlugs: ["dis-sikma-bruksizm-gece-plagi"],
};
