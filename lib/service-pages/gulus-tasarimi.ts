import type { ServicePageContent } from "./types";

/**
 * KLİNİSYEN ONAYI BEKLİYOR: Genel hasta bilgilendirmesi. Sonuç vaadi,
 * öncesi-sonrası görseli veya hasta yorumu içermez (sağlık tanıtım kuralları).
 */
export const gulusTasarimi: ServicePageContent = {
  slug: "gulus-tasarimi",
  metaTitle: "Gülüş Tasarımı ve Hollywood Smile — İstanbul Küçükçekmece",
  metaDescription:
    "Küçükçekmece’de gülüş tasarımı (Hollywood Smile): dijital planlama, prova (mock-up), lamina veneer ve zirkonyum seçenekleri. Süreç, süre ve uygunluk. Dentakim.",
  h1: "Gülüş Tasarımı (Hollywood Smile)",
  alternateNames: ["Hollywood Smile", "Dijital gülüş tasarımı", "Smile design"],
  procedureType: "NoninvasiveProcedure",
  summary:
    "Gülüş tasarımı; dişlerin rengini, boyunu, formunu ve dizilimini yüz hatları, dudak hareketi ve dişeti seviyesiyle birlikte planlayan estetik tedavi yaklaşımıdır. Hollywood Smile, bu planın genellikle lamina veneer veya zirkonyum kaplamalarla ön dişlerin tamamına uygulandığı halidir. Dentakim’de sonuç, tedaviye başlamadan önce dijital olarak modellenir ve istenirse ağız içinde prova edilir.",
  facts: [
    { label: "Seans sayısı", value: "Genellikle 3–4 randevu" },
    { label: "Toplam süre", value: "Çoğu vakada 1–3 hafta" },
    { label: "Anestezi", value: "Gerekirse lokal anestezi" },
    { label: "Kullanılan yöntemler", value: "Lamina, zirkonyum, beyazlatma, bonding" },
  ],
  lead:
    "Gülüş tasarımı tek bir işlem değil, gülüşün bütününü yüzünüzle uyumlu hale getiren bir planlamadır. Sultan Murat Caddesi’ndeki Dentakim’de dijital fotoğraf ve ölçülerle tasarım yapılır, sonucu kalıcı işleme geçmeden önce birlikte değerlendiririz.",
  paragraphs: [
    "Planlama; yüz ve gülüş fotoğrafları, gerekirse video ve ağız içi ölçülerle başlar. Orta hat, diş boyu-genişlik oranı, dişeti çizgisi ve dudak hareketi birlikte değerlendirilir. Tasarım bilgisayar ortamında hazırlanır ve istenirse geçici bir prova (mock-up) olarak dişlerin üzerine uygulanarak aynada gerçek boyutta görülür.",
    "Hollywood Smile ifadesi genellikle ön bölgedeki 8–10 dişin lamina veneer veya zirkonyum kaplama ile yenilendiği kapsamlı gülüş tasarımları için kullanılır. Ancak her hasta için tüm dişlerin kaplanması gerekmez. Bazı vakalarda beyazlatma, kompozit bonding veya yalnızca birkaç dişte lamina ile benzer bir uyum sağlanabilir.",
    "Hangi yöntemin seçileceği dişlerin mevcut durumuna bağlıdır. Diş dokusu büyük ölçüde sağlamsa minimal aşındırmalı lamina veneer, dişlerde geniş dolgu, kırık veya kanal tedavisi varsa zirkonyum tam kaplama tercih edilebilir. Kapanış bozukluğu veya ileri diziliş sorunu olan hastalarda önce ortodonti önerilebilir.",
    "Doğal görünen bir gülüşte amaç, dişleri olabildiğince beyaz ve tamamen simetrik yapmak değildir. Renk tonu cilt ve göz rengine, diş formu yüz tipine ve yaşa göre seçilir. Aşırı beyaz tonlar ve tek tip formlar yapay algılanabileceği için seçenekler muayenede örneklerle anlatılır.",
    "Tasarım öncesinde çürükler, dişeti iltihabı ve diş taşı tedavi edilir. Diş sıkma (bruksizm) varsa kaplamaları korumak için gece plağı planlanır. Dentakim’de gülüş tasarımı uygulamalarını protez ve estetik diş hekimliği alanında çalışan hekimlerimiz yürütür.",
  ],
  steps: [
    "Muayene, fotoğraf ve ölçü; beklentileriniz ve yüz oranlarınız değerlendirilir.",
    "Dijital gülüş tasarımı hazırlanır; istenirse geçici prova (mock-up) ile ağız içinde denenir.",
    "Onayınızın ardından dişler hazırlanır, ölçü alınır ve geçici kaplamalar takılır.",
    "Lamina veya zirkonyum kaplamalar prova edilip yapıştırılır; kontrol randevusu planlanır.",
  ],
  faqs: [
    {
      question: "Gülüş tasarımı ile Hollywood Smile aynı şey mi?",
      answer:
        "Gülüş tasarımı genel planlama yaklaşımıdır. Hollywood Smile ise bu planın ön dişlerin tamamına lamina veneer veya zirkonyum uygulanarak yapıldığı kapsamlı halini anlatmak için kullanılan bir ifadedir.",
    },
    {
      question: "Sonucu önceden görebilir miyim?",
      answer:
        "Evet. Tasarım dijital olarak modellenir ve istenirse geçici bir prova (mock-up) olarak dişlerinizin üzerine uygulanır. Onayınız olmadan kalıcı işleme geçilmez.",
    },
    {
      question: "Dişlerim kesilecek mi?",
      answer:
        "Yönteme bağlıdır. Beyazlatma ve bonding aşındırma gerektirmez; lamina veneerde minimal, zirkonyum kaplamada daha fazla aşındırma yapılır. Gereken müdahale muayenede netleşir.",
    },
    {
      question: "Gülüş tasarımı ne kadar sürer?",
      answer:
        "Yalnızca kaplama içeren planlar genellikle 1–3 hafta içinde tamamlanır. Ortodonti veya implant gerektiren kapsamlı planlar aylar sürebilir; takvim muayene sonrası yazılı olarak paylaşılır.",
    },
    {
      question: "Gülüş tasarımı kaç yıl kullanılır?",
      answer:
        "Süre; kullanılan materyale, ağız hijyenine, diş sıkma alışkanlığına ve düzenli kontrollere göre kişiden kişiye değişir. Bakım önerileri tedavi sonunda yazılı olarak verilir.",
    },
  ],
  relatedSlugOrder: ["lamina-veneer", "protez-zirkonyum", "dis-beyazlatma", "ortodonti"],
  guideSlugs: ["hollywood-smile-nedir", "gulus-tasarimi-nasil-yapilir", "lamina-mi-zirkonyum-mu", "estetik-dis-hekimligi-nedir"],
};
