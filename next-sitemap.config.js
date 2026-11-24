/** @type {import('next-sitemap').IConfig} */

const fs = require("fs");
const path = require("path");

/*
 * Site haritası verileri doğrudan proje dosyalarından okunur (TypeScript
 * dosyaları burada içe aktarılamadığı için basit metin eşleştirmesiyle).
 * Böylece yeni yazı, tedavi veya fotoğraf eklendiğinde harita kendiliğinden
 * güncellenir.
 */
const SITE = "https://dentakim.com";
const read = (f) => {
  try {
    return fs.readFileSync(path.join(__dirname, f), "utf8");
  } catch {
    return "";
  }
};

/** Blog yazılarının yayın / güncelleme tarihleri. */
function blogDates() {
  const src = read("lib/blog.ts");
  const out = {};
  const re = /\n {4}slug: "([^"]+)",([\s\S]*?)(?=\n {4}slug: "|\n\];)/g;
  let m;
  while ((m = re.exec(src))) {
    const date = /\n {4}date: "([\d-]+)"/.exec(m[2]);
    const upd = /\n {4}updatedAt: "([\d-]+)"/.exec(m[2]);
    if (date) out[m[1]] = (upd || date)[1];
  }
  return out;
}

/** Tedavi sayfası içeriklerinin son gözden geçirilme tarihi. */
const SERVICE_UPDATED = (/CONTENT_UPDATED = "([\d-]+)"/.exec(read("components/shared/ServicePageShell.tsx")) || [])[1];

/** lib/stock-photos.ts içindeki bir görsel haritası (anahtar → yol). */
function photoMap(exportName) {
  const src = read("lib/stock-photos.ts");
  const start = src.indexOf(`export const ${exportName}`);
  if (start < 0) return {};
  const block = src.slice(start, src.indexOf("\n};", start));
  const out = {};
  for (const m of block.matchAll(/\n {2}"?([\w-]+)"?: \{ src: "([^"]+)"/g)) out[m[1]] = m[2];
  return out;
}

function blogImages() {
  const T = photoMap("TREATMENT_PHOTOS");
  const B = photoMap("BLOG_PHOTOS");
  const out = {};
  for (const m of read("lib/blog-images.ts").matchAll(/\n {2}"([\w-]+)": ([TB])(?:\["([\w-]+)"\]|\.([\w-]+)),/g)) {
    const key = m[3] || m[4];
    const src = (m[2] === "T" ? T : B)[key];
    if (src) out[m[1]] = src;
  }
  return out;
}

function generatedPaths(file) {
  return [...read(file).matchAll(/"(\/images\/[^"]+)"/g)].map((m) => m[1]);
}

const BLOG_DATES = blogDates();
const TREATMENT_IMAGES = photoMap("TREATMENT_PHOTOS");
const BLOG_IMAGES = blogImages();
const DOCTOR_IMAGES = Object.fromEntries(
  [...read("lib/doctor-photos.generated.ts").matchAll(/"([\w-]+)": "([^"]+)"/g)].map((m) => [m[1], m[2]])
);
const CLINIC_IMAGES = generatedPaths("lib/clinic-photos.generated.ts");

/** Sayfaya ait görseller — Google Görseller için görsel site haritası. */
function imagesFor(p) {
  const list = [];
  const svc = /^\/hizmetler\/([\w-]+)$/.exec(p);
  const blog = /^\/blog\/([\w-]+)$/.exec(p);
  const doc = /^\/hekimler\/([\w-]+)$/.exec(p);
  if (svc && TREATMENT_IMAGES[svc[1]]) list.push(TREATMENT_IMAGES[svc[1]]);
  if (p === "/hizmetler") list.push(...Object.values(TREATMENT_IMAGES));
  if (blog && BLOG_IMAGES[blog[1]]) list.push(BLOG_IMAGES[blog[1]]);
  if (doc && DOCTOR_IMAGES[doc[1]]) list.push(DOCTOR_IMAGES[doc[1]]);
  if (p === "/hekimler") list.push(...Object.values(DOCTOR_IMAGES));
  if (p === "/" || p === "/klinik" || p === "/klinik/galeri") list.push(...CLINIC_IMAGES);
  return [...new Set(list)].map((src) => ({ loc: new URL(src, SITE) }));
}

/** Yalnızca gerçekten bilinen değişiklik tarihi yazılır; bilinmiyorsa boş bırakılır. */
function lastmodFor(p) {
  const blog = /^\/blog\/([\w-]+)$/.exec(p);
  if (blog && BLOG_DATES[blog[1]]) return new Date(BLOG_DATES[blog[1]]).toISOString();
  if (p === "/blog") {
    const latest = Object.values(BLOG_DATES).sort().pop();
    return latest ? new Date(latest).toISOString() : undefined;
  }
  if (p.startsWith("/hizmetler") && SERVICE_UPDATED) return new Date(SERVICE_UPDATED).toISOString();
  return undefined;
}


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
  // Derleme zamanı her sayfaya aynı tarihi yazıyordu; Google bu durumda
  // lastmod'u yok sayar. Yalnızca bilinen tarihler kullanılır.
  autoLastmod: false,
  transform: async (config, p) => ({
    loc: p,
    changefreq: config.changefreq,
    priority: priorityFor(p),
    lastmod: lastmodFor(p),
    images: imagesFor(p),
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
