/**
 * Instagram videoları (@dentakim.istanbul). Videolar indirilmez; Instagram'ın
 * resmi gömme koduyla Instagram sunucularından oynatılır.
 *
 * Bu liste elle düzenlenen temel listedir. Instagram API bağlantısı
 * kurulduğunda yeni reel'ler haftada bir otomatik eklenir (lib/instagram-feed.ts);
 * burada yazılan konu, hekim ve sayfa eşlemeleri her zaman önceliklidir.
 * Videoda bir hekim yer alıyorsa `doctorSlug` (lib/doctors.ts) ekleyin.
 */
export const INSTAGRAM_PROFILE = "https://www.instagram.com/dentakim.istanbul/";
export const INSTAGRAM_HANDLE = "@dentakim.istanbul";

export type InstagramReel = {
  code: string;
  /** Videonun konusu (Instagram açıklamasından). */
  topic: string;
  /** Videoda yer alan hekim — profil sayfasında gösterilir. */
  doctorSlug?: string;
  /** Videonun gösterileceği blog yazıları ve tedavi sayfaları. */
  blogSlugs?: string[];
  serviceSlugs?: string[];
  /** Klinik tanıtım videosu — "Kliniğimizi yakından görün" bandında. */
  intro?: boolean;
};

export const INSTAGRAM_REELS: InstagramReel[] = [
  { code: "DdEWirAKxKB", topic: "Klinik tanıtımı", intro: true },
  {
    code: "DfCWzcNKgLq",
    topic: "Lamina mı, zirkonyum mu?",
    blogSlugs: ["lamina-mi-zirkonyum-mu", "zirkonyum-mu-porselen-mi", "estetik-dis-hekimligi-nedir"],
    serviceSlugs: ["lamina-veneer", "protez-zirkonyum", "gulus-tasarimi"],
  },
  {
    code: "Dety2OXqxOY",
    topic: "20 yaş dişlerinin hepsi çekilmeli mi?",
    blogSlugs: ["yirmilik-dis-cekimi-sonrasi"],
    serviceSlugs: ["agiz-dis-cene-cerrahisi"],
  },
  {
    code: "Dei_rxDKVph",
    topic: "Eski dolgu mutlaka değişmeli mi?",
    blogSlugs: ["dis-hassasiyeti-neden-olur"],
    serviceSlugs: ["dis-dolgusu"],
  },
  {
    code: "DebvQq6K8BZ",
    topic: "Kanal tedavili diş tekrar ağrır mı?",
    blogSlugs: ["kanal-tedavisi-sonrasi-agri-normal-mi", "kanal-tedavisi-nedir", "dis-agrisi-nasil-gecer"],
    serviceSlugs: ["kanal-tedavisi"],
  },
  {
    code: "DeUNrUBqdDr",
    topic: "Diş sıkma ve gıcırdatma",
    blogSlugs: ["dis-sikma-bruksizm-gece-plagi"],
    serviceSlugs: ["gece-plagi-bruksizm"],
  },
  {
    code: "DeOyfaCKefu",
    topic: "Ağız kokusunun nedenleri",
    blogSlugs: ["agiz-kokusu-neden-olur", "dis-eti-kanamasi-neden-olur"],
  },
];

export const reelUrl = (code: string) => `https://www.instagram.com/reel/${code}/`;
