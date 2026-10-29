import type { ServicePageContent } from "./types";

/**
 * KLİNİSYEN ONAYI BEKLİYOR: Genel hasta bilgilendirmesi; uygunluk ve
 * süreler hekim tarafından gözden geçirilmelidir.
 */
export const allOn6Implant: ServicePageContent = {
  slug: "all-on-6-implant",
  metaTitle: "All-on-6 İmplant — İstanbul Küçükçekmece",
  metaDescription:
    "All-on-6 implant: dişsiz çenede altı implant üzerine sabit protez. Kemik uygunluğu, All-on-4 ile farkı ve tedavi süreci. Dentakim Küçükçekmece.",
  h1: "All-on-6 İmplant",
  procedureType: "SurgicalProcedure",
  alternateNames: ["All on six", "Altı implant üzeri sabit protez"],
  summary:
    "All-on-6, tamamen dişsiz bir çenede altı implant üzerine sabit protez yapılmasıdır. Çiğneme kuvveti daha fazla implanta dağıtılır; bu nedenle kemik hacmi yeterli olan hastalarda tercih edilebilir. Uygunluk muayene, röntgen ve gerektiğinde tomografi sonrası belirlenir.",
  facts: [
    { label: "İmplant sayısı", value: "Çene başına 6" },
    { label: "Cerrahi", value: "Genellikle tek seans" },
    { label: "Kemik gereksinimi", value: "Arka bölgelerde de yeterli kemik" },
    { label: "Kalıcı protez", value: "İyileşme sonrası (birkaç ay)" },
  ],
  guideSlugs: ["all-on-4-mu-all-on-6-mi", "dis-protezi-cesitleri"],
  lead:
    "All-on-6, tamamen dişsiz bir çenede altı implant üzerine sabit protez yapılmasıdır. Kemik hacmi yeterli olan hastalarda yükün daha fazla implanta dağıtılması amaçlanır. Dentakim’de karar muayene ve röntgen ile, gerektiğinde görüntüleme merkezinde çekilen tomografi sonrası verilir.",
  paragraphs: [
    "Altı implant, protezin taşıdığı çiğneme kuvvetini daha geniş bir alana yayar. Bu nedenle özellikle üst çenede veya kapanış kuvvetleri yüksek hastalarda, kemik izin veriyorsa tercih edilebilir. Daha fazla implant, protez tasarımında da (örneğin daha uzun köprü bölümleri) esneklik sağlayabilir.",
    "All-on-6 için arka bölgelerde de yeterli kemik bulunması gerekir. Kemik hacmi yetersizse kemik grefti veya sinüs tabanı yükseltme gibi ek işlemler, ya da daha az implantla yapılan All-on-4 gibi alternatifler değerlendirilir. Her seçeneğin süresi ve ek işlem gereksinimi muayenede yazılı olarak anlatılır.",
    "Uygun vakalarda implant cerrahisinin ardından geçici sabit protez takılması planlanabilir; bu, implantların başlangıç stabilitesine bağlıdır. Kalıcı protez, iyileşme ve kemik kaynaşması döneminden sonra yapılır.",
    "Kalıcı üst yapı; hibrit protez (metal veya fiber destekli akrilik/kompozit dişler) ya da zirkonyum esaslı köprü olarak tasarlanabilir. Estetik, dayanıklılık ve bakım beklentileri seçeneklerle birlikte değerlendirilir.",
    "Cerrahi fazı ağız-diş-çene cerrahımız, protez fazını protez alanında çalışan hekimimiz yürütür. Tedavi sonrasında düzenli kontroller ve profesyonel temizlik önerilir.",
  ],
  steps: [
    "Muayene, röntgen (gerekirse tomografi) ve genel sağlık değerlendirmesi; uygunsa All-on-6 ve alternatifleri yazılı olarak sunulur.",
    "Gerekli çekimler ve altı implantın yerleştirilmesi planlanan cerrahi seansta yapılır.",
    "Stabilite uygunsa geçici sabit protez takılır; iyileşme döneminde kontroller yapılır.",
    "Kemik kaynaşmasının ardından ölçü alınır ve kalıcı sabit protez teslim edilir.",
  ],
  faqs: [
    {
      question: "All-on-6 mı All-on-4 mü daha iyi?",
      answer:
        "Biri diğerinden her durumda daha iyi değildir. Kemik hacmi, çene (alt/üst), kapanış kuvvetleri ve protez tasarımı birlikte değerlendirilerek hekim size uygun seçeneği önerir.",
    },
    {
      question: "Kemik yetersizse All-on-6 yapılabilir mi?",
      answer:
        "Kemik grefti veya sinüs işlemleriyle kemik hacmi artırılabilir ya da daha az implant gerektiren seçenekler önerilebilir. Bu ek işlemler tedavi süresini uzatabilir.",
    },
    {
      question: "Tedavi ne kadar sürer?",
      answer:
        "Cerrahi aşama genellikle tek seansta tamamlanır; kalıcı protez için birkaç aylık iyileşme dönemi beklenir. Kesin takvim muayene sonrası yazılı plana göre belirlenir.",
    },
    {
      question: "Bakımı nasıl yapılır?",
      answer:
        "Günlük fırçalama, ara yüz fırçaları veya ağız duşu ile protez altı temizlenir; düzenli kontrol randevularında profesyonel temizlik yapılır.",
    },
  ],
  relatedSlugOrder: ["all-on-4-implant", "hibrit-protez", "implant-tedavisi", "protez-zirkonyum"],
};
