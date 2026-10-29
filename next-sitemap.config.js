/** @type {import('next-sitemap').IConfig} */

/**
 * Öncelik sırası: anasayfa → tedaviler → hekimler/semt → blog → yasal.
 * Google priority değerini görmezden gelse de diğer tarayıcılar ve
 * dizin araçları için tutarlı bir sinyal bırakılır.
 */
function priorityFor(path) {
  if (path === "/") return 1.0;
  if (path.startsWith("/hizmetler")) return 0.9;
  if (path === "/kucukcekmece-dis-klinigi" || path === "/randevu" || path === "/iletisim") return 0.9;
  if (path.startsWith("/hekimler") || path.endsWith("-dis-klinigi")) return 0.8;
  if (["/kvkk", "/gizlilik", "/cerez-politikasi"].includes(path)) return 0.3;
  return 0.7;
}

module.exports = {
  siteUrl: "https://dentakim.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  // Uygulama simgeleri ve llms.txt HTML sayfası değildir; site haritasında yer almaz.
  exclude: ["/api/*", "/icon.png", "/apple-icon.png", "/llms.txt"],
  transform: async (config, path) => ({
    loc: path,
    changefreq: config.changefreq,
    priority: priorityFor(path),
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  }),
  robotsTxtOptions: {
    // Yapay zekâ arama motorlarına açık erişim (GEO).
    // Bu botlar engellenirse ChatGPT, Perplexity ve Gemini yanıtlarında
    // klinik kaynak olarak gösterilemez.
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    // additionalSitemaps kaldırıldı: next-sitemap sitemap.xml'i zaten
    // robots.txt'e yazıyor; ek kayıt, dizinin kendisini kendi içinde
    // listelemesine (sitemap.xml → sitemap.xml) yol açıyordu.
  },
};
