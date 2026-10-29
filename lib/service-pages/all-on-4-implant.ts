import type { ServicePageContent } from "./types";

/**
 * KLİNİSYEN ONAYI BEKLİYOR: Bu sayfa genel hasta bilgilendirmesi olarak
 * yazıldı; süreler ve uygunluk kriterleri hekim tarafından gözden
 * geçirilmelidir. Sonuç vaadi veya "aynı gün diş" garantisi içermez.
 */
export const allOn4Implant: ServicePageContent = {
  slug: "all-on-4-implant",
  metaTitle: "Küçükçekmece All-on-4 İmplant",
  metaDescription:
    "All-on-4 implant: tamamen dişsiz çenede dört implant üzerine sabit protez. Kemik değerlendirmesi, uygunluk ve süreç hakkında bilgi. Dentakim Küçükçekmece.",
  h1: "Küçükçekmece All-on-4 İmplant",
  lead:
    "All-on-4, tamamen dişsiz veya dişlerinin çekilmesi planlanan bir çenede dört implant üzerine sabit (hasta tarafından çıkarılmayan) bir protez yapılması yaklaşımıdır. Dentakim’de uygunluk, tomografi ile kemik değerlendirmesi yapıldıktan sonra belirlenir.",
  paragraphs: [
    "Bu yöntemde genellikle öndeki iki implant dik, arkadaki iki implant ise belirli bir açıyla yerleştirilir. Açılı yerleşim, arka bölgede kemik hacmi sınırlı olduğunda sinüs veya sinir kanalı gibi anatomik yapılardan uzak durarak daha uzun implant kullanılmasına olanak tanıyabilir.",
    "All-on-4 her dişsiz hasta için uygun değildir. Kemik yüksekliği ve genişliği, kapanış kuvvetleri, diş sıkma alışkanlığı, genel sağlık durumu ve ağız hijyeni değerlendirilir. Kemik hacmi yeterliyse daha fazla implantla yapılan All-on-6 veya farklı protez seçenekleri de karşılaştırmalı olarak anlatılır.",
    "Uygun vakalarda implantlar yerleştirildikten sonra geçici sabit bir protez takılması planlanabilir; bunun mümkün olup olmadığı, implantların yerleştirme sırasında elde edilen başlangıç stabilitesine bağlıdır ve önceden kesin olarak söylenemez. Kalıcı protez, implantların kemikle kaynaşması için gereken iyileşme döneminin ardından yapılır.",
    "Kalıcı üst yapı seçenekleri arasında akrilik veya kompozit dişli hibrit protezler ile zirkonyum gibi seramik esaslı köprüler bulunur. Seçim; estetik beklenti, karşı çenedeki dişler, bakım kolaylığı ve bütçeye göre muayenede birlikte yapılır.",
    "Dentakim’de cerrahi fazı ağız-diş-çene cerrahımız, protez fazını protez alanında çalışan hekimimiz yürütür. Tedavi sonrası düzenli kontroller ve protezin altının profesyonel temizliği, uzun dönem başarı için önemlidir.",
  ],
  steps: [
    "Muayene, tomografi ile kemik analizi ve genel sağlık değerlendirmesi yapılır; uygunsa seçenekler yazılı olarak sunulur.",
    "Gerekli diş çekimleri ve dört implantın yerleştirilmesi aynı cerrahi seansta planlanabilir.",
    "Başlangıç stabilitesi yeterliyse geçici sabit protez takılır; iyileşme döneminde kontroller yapılır.",
    "İyileşme tamamlandıktan sonra ölçü alınır ve kalıcı sabit protez teslim edilir.",
  ],
  faqs: [
    {
      question: "All-on-4 kimler için uygundur?",
      answer:
        "Tamamen dişsiz veya dişlerinin çoğu kurtarılamayacak durumda olan, kemik yapısı ve genel sağlığı uygun yetişkinler değerlendirilir. Uygunluk tomografi ve muayene sonrası hekim tarafından belirlenir.",
    },
    {
      question: "Aynı gün dişler takılabilir mi?",
      answer:
        "Bazı vakalarda implantlar yerleştirildikten sonra geçici sabit protez takılabilir. Bu, implantların başlangıç stabilitesine bağlıdır; önceden garanti edilemez.",
    },
    {
      question: "All-on-4 ile All-on-6 arasındaki fark nedir?",
      answer:
        "All-on-4’te protez dört, All-on-6’da altı implant üzerine yapılır. Hangisinin uygun olduğu kemik hacmine, kapanış kuvvetlerine ve protez tasarımına göre belirlenir.",
    },
    {
      question: "Protez çıkarılabilir mi?",
      answer:
        "Hasta tarafından çıkarılmaz; sabit bir protezdir. Kontrol ve bakım randevularında gerektiğinde hekim tarafından sökülebilir.",
    },
  ],
  relatedSlugOrder: ["all-on-6-implant", "hibrit-protez", "implant-tedavisi", "protez-zirkonyum"],
};
