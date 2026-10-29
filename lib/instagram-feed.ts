import { INSTAGRAM_REELS, type InstagramReel } from "@/lib/instagram";

/**
 * Instagram reel'lerinin haftalık otomatik güncellenmesi.
 *
 * Instagram Graph API (resmi) kullanılır; profil sayfası taranmaz. Vercel'de
 * şu iki ortam değişkeni tanımlıysa son reel'ler en fazla haftada bir
 * çekilir (Next.js önbelleği, revalidate = 7 gün):
 *   INSTAGRAM_USER_ID      — Instagram işletme hesabının kimliği
 *   INSTAGRAM_ACCESS_TOKEN — süresiz Meta "System User" erişim anahtarı
 * Tanımlı değilse veya istek başarısız olursa lib/instagram.ts'teki elle
 * düzenlenen liste kullanılır; site hiçbir durumda videosuz kalmaz.
 */
const WEEK = 60 * 60 * 24 * 7;
const GRAPH = "https://graph.facebook.com/v21.0";

type GraphMedia = {
  media_type?: string;
  media_product_type?: string;
  permalink?: string;
  caption?: string;
};

/** Açıklamadaki anahtar kelimelere göre yeni reel'i ilgili sayfalara bağlar. */
const KEYWORD_RULES: { re: RegExp; blogSlugs?: string[]; serviceSlugs?: string[] }[] = [
  { re: /all[\s-]?on[\s-]?4/i, blogSlugs: ["all-on-4-mu-all-on-6-mi"], serviceSlugs: ["all-on-4-implant"] },
  { re: /all[\s-]?on[\s-]?6/i, blogSlugs: ["all-on-4-mu-all-on-6-mi"], serviceSlugs: ["all-on-6-implant"] },
  { re: /hibrit/i, serviceSlugs: ["hibrit-protez"] },
  { re: /implant/i, blogSlugs: ["implant-ne-kadar-surer", "implant-mi-kopru-mu"], serviceSlugs: ["implant-tedavisi"] },
  { re: /sin[üu]s|greft/i, blogSlugs: ["sinus-lifting-nedir"], serviceSlugs: ["kemik-grefti-sinus-lifting"] },
  { re: /hollywood|g[üu]l[üu][şs] tasar/i, blogSlugs: ["hollywood-smile-nedir", "gulus-tasarimi-nasil-yapilir"], serviceSlugs: ["gulus-tasarimi"] },
  { re: /lamina|veneer/i, blogSlugs: ["lamina-mi-zirkonyum-mu"], serviceSlugs: ["lamina-veneer"] },
  { re: /zirkonyum/i, blogSlugs: ["zirkonyum-kaplama-kac-gun-surer", "zirkonyum-mu-porselen-mi"], serviceSlugs: ["protez-zirkonyum"] },
  { re: /beyazlat/i, blogSlugs: ["dis-beyazlatma-nasil-yapilir"], serviceSlugs: ["dis-beyazlatma"] },
  { re: /[şs]effaf plak|aligner|invisalign/i, blogSlugs: ["invisalign-nedir-seffaf-plak-markalari", "seffaf-plak-mi-tel-mi"], serviceSlugs: ["seffaf-plak-tedavisi"] },
  { re: /ortodonti|di[şs] teli|braket/i, blogSlugs: ["seffaf-plak-mi-tel-mi"], serviceSlugs: ["ortodonti"] },
  { re: /kanal/i, blogSlugs: ["kanal-tedavisi-nedir"], serviceSlugs: ["kanal-tedavisi"] },
  { re: /dolgu/i, serviceSlugs: ["dis-dolgusu"] },
  { re: /20 ya[şs]|yirmilik|g[öo]m[üu]l[üu]/i, blogSlugs: ["yirmilik-dis-cekimi-sonrasi"], serviceSlugs: ["agiz-dis-cene-cerrahisi"] },
  { re: /s[ıi]kma|g[ıi]c[ıi]rdat|bruksizm|gece plağ/i, blogSlugs: ["dis-sikma-bruksizm-gece-plagi"], serviceSlugs: ["gece-plagi-bruksizm"] },
  { re: /a[ğg][ıi]z koku/i, blogSlugs: ["agiz-kokusu-neden-olur"] },
  { re: /di[şs] eti|kanama/i, blogSlugs: ["dis-eti-kanamasi-neden-olur"] },
  { re: /hassasiyet/i, blogSlugs: ["dis-hassasiyeti-neden-olur"] },
  { re: /[çc]ocuk/i, blogSlugs: ["cocuklarda-dis-curugu-nasil-onlenir"], serviceSlugs: ["cocuk-dis-hekimligi"] },
];

function autoMap(caption = ""): Pick<InstagramReel, "blogSlugs" | "serviceSlugs"> {
  const blogs = new Set<string>();
  const services = new Set<string>();
  for (const rule of KEYWORD_RULES) {
    if (rule.re.test(caption)) {
      rule.blogSlugs?.forEach((b) => blogs.add(b));
      rule.serviceSlugs?.forEach((s) => services.add(s));
    }
  }
  return { blogSlugs: Array.from(blogs), serviceSlugs: Array.from(services) };
}

function firstLine(caption = ""): string {
  // Emoji ve semboller atılır; harf, rakam ve noktalama korunur
  const line = caption
    .split("\n")
    .map((l) => l.replace(/[^0-9A-Za-zÇĞİÖŞÜçğıöşüÂâÎîÛû\s?!.,'’:-]/g, "").trim())
    .find(Boolean);
  return line ? line.slice(0, 80) : "Instagram videosu";
}

/** Güncel reel listesi (en yeni başta). Elle girilen bilgiler önceliklidir. */
export async function getAllReels(): Promise<InstagramReel[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  if (!token || !userId) return INSTAGRAM_REELS;

  try {
    const url = `${GRAPH}/${userId}/media?fields=media_type,media_product_type,permalink,caption&limit=30&access_token=${encodeURIComponent(token)}`;
    const res = await fetch(url, { next: { revalidate: WEEK, tags: ["instagram"] } });
    if (!res.ok) return INSTAGRAM_REELS;
    const json = (await res.json()) as { data?: GraphMedia[] };
    const curated = new Map(INSTAGRAM_REELS.map((r) => [r.code, r]));
    const live: InstagramReel[] = [];
    for (const m of json.data ?? []) {
      if (m.media_product_type !== "REELS" && m.media_type !== "VIDEO") continue;
      const code = m.permalink?.match(/\/(?:reel|reels|p)\/([^/?#]+)/)?.[1];
      if (!code) continue;
      live.push(curated.get(code) ?? { code, topic: firstLine(m.caption), ...autoMap(m.caption) });
    }
    // Elle eklenen ama API'de görünmeyen (ör. tanıtım) videolar korunur
    for (const r of INSTAGRAM_REELS) if (!live.some((l) => l.code === r.code)) live.push(r);
    return live.length > 0 ? live : INSTAGRAM_REELS;
  } catch {
    return INSTAGRAM_REELS;
  }
}

export async function getReelsForBlog(slug: string) {
  return (await getAllReels()).filter((r) => r.blogSlugs?.includes(slug));
}

export async function getReelsForService(slug: string) {
  return (await getAllReels()).filter((r) => r.serviceSlugs?.includes(slug));
}

export async function getReelsForDoctor(slug: string) {
  return (await getAllReels()).filter((r) => r.doctorSlug === slug);
}

export async function getIntroReel() {
  return (await getAllReels()).find((r) => r.intro);
}
