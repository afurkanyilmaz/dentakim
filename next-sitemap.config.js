/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dentakim.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.8,
  exclude: ["/api/*"],
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
    additionalSitemaps: ["https://dentakim.com/sitemap.xml"],
  },
};
