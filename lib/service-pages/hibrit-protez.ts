import type { ServicePageContent } from "./types";

/**
 * KLİNİSYEN ONAYI BEKLİYOR: Genel hasta bilgilendirmesi; materyal
 * seçenekleri ve kullanım ömrü ifadeleri hekim tarafından gözden
 * geçirilmelidir.
 */
export const hibritProtez: ServicePageContent = {
  slug: "hibrit-protez",
  metaTitle: "Hibrit Protez — İstanbul Küçükçekmece",
  metaDescription:
    "Hibrit protez: implantlara vidalanan sabit tam çene protezi. Materyal seçenekleri, bakım ve tedavi süreci. Dentakim Küçükçekmece’de muayene ve yazılı plan.",
  h1: "Hibrit Protez",
  procedureType: "NoninvasiveProcedure",
  summary:
    "Hibrit protez, dişsiz çenede implantlara vidalanan ve dişlerle birlikte kayıp dişeti dokusunu da tamamlayan sabit tam çene protezidir. Hasta tarafından çıkarılmaz; bakım ve kontrol için hekim tarafından sökülebilir. Genellikle All-on-4 veya All-on-6 planlarının protez aşamasında kullanılır.",
  facts: [
    { label: "Dayanak", value: "4–6 implant" },
    { label: "Materyal", value: "Akrilik/kompozit dişler veya zirkonyum" },
    { label: "Çıkarılabilirlik", value: "Hasta tarafından çıkarılmaz" },
    { label: "Bakım", value: "Ara yüz fırçası, düzenli kontrol" },
  ],
  guideSlugs: ["all-on-4-mu-all-on-6-mi", "dis-protezi-cesitleri"],
  lead:
    "Hibrit protez, dişsiz bir çenede implantlara vidalanarak sabitlenen, dişleri ve kaybolan dişeti dokusunu birlikte taklit eden tam çene protezidir. Dentakim’de All-on-4 ve All-on-6 gibi implant planlarının protez aşamasında değerlendirilir.",
  paragraphs: [
    "Klasik hibrit protezde metal veya fiber güçlendirilmiş bir alt yapı üzerine akrilik ya da kompozit dişler ve pembe dişeti bölümü yerleştirilir. Protez implantlara vidalandığı için hasta tarafından çıkarılmaz; bakım ve kontrol amacıyla hekim tarafından sökülebilir.",
    "Hibrit protez, uzun süredir dişsiz olan ve kemik ile dişeti kaybı yaşamış hastalarda dudak ve yanak desteğini geri kazandırmaya yardımcı olabilir. Kayıp dokunun pembe protez bölümüyle tamamlanması, yalnızca dişlerden oluşan köprülere göre farklı bir estetik çözüm sunar.",
    "Materyal seçenekleri arasında akrilik dişli hibrit protez, kompozit dişli versiyonlar ve monolitik zirkonyum köprüler yer alır. Akrilik ve kompozit dişler zamanla aşınabilir ve yenilenmesi gerekebilir; zirkonyum ise farklı bir maliyet ve onarım profiline sahiptir. Seçenekler muayenede yan yana anlatılır.",
    "Protezin ömrü; ağız hijyeni, diş sıkma alışkanlığı, karşı çenedeki dişler ve düzenli kontrollere bağlıdır. Protez altında yiyecek birikimini önlemek için ara yüz fırçaları veya ağız duşu kullanılması ve periyodik profesyonel temizlik önerilir.",
    "Dentakim’de hibrit protez planlaması, protez alanında çalışan hekimimiz tarafından; implant cerrahisi ise ağız-diş-çene cerrahımız tarafından yürütülür.",
  ],
  steps: [
    "Muayene ve görüntüleme ile implant sayısı ve konumu planlanır; protez materyali seçenekleri yazılı olarak sunulur.",
    "İmplantlar yerleştirilir; uygun vakalarda geçici sabit protez takılır.",
    "İyileşme sonrası ölçü, kapanış kaydı ve diş dizimi provası yapılır.",
    "Hibrit protez implantlara vidalanarak teslim edilir; kontrol ve bakım randevuları planlanır.",
  ],
  faqs: [
    {
      question: "Hibrit protez çıkarılabilir mi?",
      answer:
        "Hasta tarafından çıkarılmaz; implantlara vidalı sabit bir protezdir. Kontrol ve bakım sırasında hekim tarafından sökülebilir.",
    },
    {
      question: "Hibrit protez ile zirkonyum köprü arasındaki fark nedir?",
      answer:
        "Hibrit protezde genellikle akrilik veya kompozit dişler ve pembe dişeti bölümü bulunur; zirkonyum köprü daha sert bir seramik materyalden üretilir. Estetik, onarım kolaylığı ve maliyet farklıdır; seçim muayenede yapılır.",
    },
    {
      question: "Hibrit protez ne kadar dayanır?",
      answer:
        "Süre; ağız hijyeni, diş sıkma, kapanış kuvvetleri ve kontrol sıklığına göre kişiden kişiye değişir. Akrilik dişlerde zamanla aşınma görülebilir ve yenileme gerekebilir.",
    },
    {
      question: "Kaç implant gerekir?",
      answer:
        "Genellikle dört ile altı implant üzerine yapılır (All-on-4 veya All-on-6). Kesin sayı kemik yapısına ve protez tasarımına göre belirlenir.",
    },
  ],
  relatedSlugOrder: ["all-on-4-implant", "all-on-6-implant", "implant-tedavisi", "protez-zirkonyum"],
};
