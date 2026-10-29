import type { ServicePageContent } from "./types";

/**
 * KLİNİSYEN ONAYI BEKLİYOR: Genel hasta bilgilendirmesi.
 *
 * MARKA NOTU: Invisalign vb. tescilli markalar yalnızca bilgilendirme
 * bağlamında anılır. Klinikte uygulanan sistem(ler) teyit edildiğinde
 * "Kliniğimizde ... uygulanmaktadır" cümlesi eklenebilir; o zamana kadar
 * belirli bir markanın uygulandığı iddia edilmez.
 */
export const seffafPlakTedavisi: ServicePageContent = {
  slug: "seffaf-plak-tedavisi",
  metaTitle: "Şeffaf Plak (Clear Aligner) Tedavisi — İstanbul Küçükçekmece",
  metaDescription:
    "Şeffaf plak (clear aligner, görünmez diş teli) tedavisi: nasıl çalışır, kimlere uygun, kaç ay sürer, Invisalign gibi sistemler hakkında bilgi. Dentakim ortodonti.",
  h1: "Şeffaf Plak (Clear Aligner) Tedavisi",
  alternateNames: ["Şeffaf plak", "Clear aligner", "Görünmez diş teli", "Şeffaf ortodonti"],
  procedureType: "NoninvasiveProcedure",
  summary:
    "Şeffaf plak tedavisi, dişlerin kişiye özel üretilen bir dizi şeffaf ve çıkarılabilir plakla kademeli olarak hareket ettirildiği ortodonti yöntemidir. Plaklar genellikle 1–2 haftada bir değiştirilir ve günde 20–22 saat takılır. Invisalign gibi farklı markalar bu yöntemin bilinen sistemleridir; hangi sistemin uygun olduğu ortodontik muayene sonrası belirlenir.",
  facts: [
    { label: "Kullanım süresi", value: "Günde 20–22 saat" },
    { label: "Plak değişimi", value: "Genellikle 1–2 haftada bir" },
    { label: "Toplam süre", value: "Vakaya göre birkaç ay – 2 yıl" },
    { label: "Sonrası", value: "Pekiştirme plağı (retainer)" },
  ],
  lead:
    "Şeffaf plaklar, metal braket kullanmadan dişleri hizalamayı amaçlayan, neredeyse görünmez ve çıkarılabilir ortodonti apareyleridir. Dentakim’de şeffaf plak uygunluğu ortodontik muayene ve dijital planlama sonrası değerlendirilir.",
  paragraphs: [
    "Tedavi, ağız içi tarama veya ölçü ile başlar. Dijital ortamda dişlerin başlangıç konumundan hedef konuma kadar hareketi aşama aşama planlanır ve her aşama için ayrı bir plak üretilir. Bazı vakalarda plakların dişlere daha iyi kuvvet uygulaması için dişlere küçük, diş renginde kompozit tutucular (attachment) yapıştırılır.",
    "Şeffaf plaklar hafif ve orta düzey çapraşıklık, diş aralıkları, bazı kapanış bozuklukları ve önceki ortodonti tedavisi sonrası oluşan nüksler için uygun olabilir. İskeletsel çene uyumsuzlukları veya karmaşık diş hareketleri gerektiren vakalarda sabit braketler veya kombine tedaviler daha uygun olabilir. Karar ortodontik muayene ve röntgen sonrası verilir.",
    "Piyasada Invisalign, ClearCorrect, Spark gibi farklı şeffaf plak sistemleri bulunur. Sistemler malzeme, planlama yazılımı ve üretim süreci açısından farklılık gösterebilir; tedavinin başarısında hastanın plakları önerilen süre boyunca takması ve düzenli kontroller belirleyici rol oynar. Markalar arasında üstünlük sıralaması yapılmaz.",
    "Plaklar yemek yerken ve su dışındaki içecekleri içerken çıkarılır; ardından dişler fırçalanıp plaklar yeniden takılır. Plakların sıcak suyla temizlenmemesi, kutusunda saklanması ve kaybedilmemesi önemlidir. Tedavi bittikten sonra dişlerin eski konumuna dönmemesi için pekiştirme plağı (retainer) kullanılır.",
  ],
  steps: [
    "Ortodontik muayene, fotoğraf ve röntgen; şeffaf plak uygunluğu değerlendirilir.",
    "Ağız içi tarama veya ölçü alınır, diş hareketleri dijital olarak planlanır.",
    "Plaklar teslim edilir; gerekirse dişlere küçük tutucular (attachment) yapıştırılır.",
    "Plaklar planlanan aralıklarla değiştirilir, kontrollerle ilerleme takip edilir; tedavi sonunda pekiştirme plağı verilir.",
  ],
  faqs: [
    {
      question: "Şeffaf plak tedavisi kaç ay sürer?",
      answer:
        "Süre çapraşıklığın derecesine göre değişir; hafif vakalarda birkaç ay, kapsamlı vakalarda 1–2 yıl sürebilir. Kesin süre dijital planlama sonrası belirlenir.",
    },
    {
      question: "Şeffaf plak mı tel mi?",
      answer:
        "Şeffaf plak estetik ve çıkarılabilir olduğu için günlük yaşamda daha az fark edilir; ancak günde 20–22 saat takılması gerekir. Karmaşık diş hareketlerinde sabit braketler daha uygun olabilir. Seçim muayenede yapılır.",
    },
    {
      question: "Invisalign ile şeffaf plak aynı şey mi?",
      answer:
        "Invisalign, şeffaf plak sistemlerinin bilinen bir markasıdır. Şeffaf plak ise yöntemin genel adıdır; farklı firmaların benzer prensiple çalışan sistemleri bulunur.",
    },
    {
      question: "Şeffaf plak takarken konuşma etkilenir mi?",
      answer:
        "İlk birkaç gün hafif peltek konuşma olabilir; çoğu kişide kısa sürede alışılır.",
    },
  ],
  relatedSlugOrder: ["ortodonti", "gulus-tasarimi", "dis-beyazlatma", "lamina-veneer"],
  guideSlugs: ["invisalign-nedir-seffaf-plak-markalari", "seffaf-plak-mi-tel-mi"],
};
