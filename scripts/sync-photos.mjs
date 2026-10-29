/**
 * Fotoğraf senkronizasyonu.
 *
 * Ne yapar:
 *   1. public/images/hekimler/ ve public/images/klinik/ klasörlerini tarar
 *   2. Dosya adlarını düzeltir (baştaki/sondaki boşluk, büyük harf)
 *   3. Fotoğraf makinesi orijinallerini web boyutuna küçültür
 *      (orijinali silmez — fotograf-orijinalleri/ klasörüne taşır)
 *   4. lib/*.generated.ts eşleme dosyalarını üretir
 *
 * Böylece fotoğrafı klasöre atmanız yeterli olur; boyut/isim ile
 * uğraşmanız gerekmez.
 *
 * Çalıştırma: npm run fotograf
 *
 * NOT: Bu betik build zincirine BAĞLI DEĞİLDİR. Ürettiği .generated.ts
 * dosyaları depoda tutulur; deploy sırasında görsel işleme yapılmaz.
 * Fotoğraf ekledikten sonra bir kez çalıştırmanız yeterlidir.
 */
import { readdirSync, renameSync, mkdirSync, statSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { join, extname, basename } from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const ORIGINALS = join(ROOT, "fotograf-orijinalleri");

/** Web için üst sınırlar — aşan dosyalar küçültülür. */
const MAX_EDGE = 1600;      // en uzun kenar (piksel)
const MAX_BYTES = 600 * 1024; // 600 KB
const QUALITY = 84;

const IMAGE_EXT = [".jpg", ".jpeg", ".png", ".webp"];

/** sips yalnızca macOS'ta bulunur; yoksa küçültme atlanır, eşleme yine üretilir. */
let HAS_SIPS = true;
try {
  execFileSync("sips", ["--version"], { stdio: "ignore" });
} catch {
  HAS_SIPS = false;
  console.warn("[foto] sips bulunamadı — otomatik küçültme atlanacak (macOS dışı sistem)");
}
const EXT_ORDER = IMAGE_EXT;

/** Dosya adını normalize eder: boşlukları at, küçük harfe çevir. */
function normalizeName(name) {
  const ext = extname(name).toLowerCase();
  const stem = basename(name, extname(name)).trim().toLowerCase().replace(/\s+/g, "-");
  return `${stem}${ext}`;
}

function isImage(name) {
  return IMAGE_EXT.includes(extname(name).toLowerCase());
}

/** Klasörü tarar, adları düzeltir, büyük dosyaları küçültür. */
async function processFolder(folder, label) {
  const dir = join(ROOT, "public", "images", folder);
  if (!existsSync(dir)) {
    console.warn(`[foto] Klasör yok: ${dir}`);
    return [];
  }

  for (const raw of readdirSync(dir)) {
    if (!isImage(raw)) continue;

    // 1) Ad düzeltme
    let name = raw;
    const fixed = normalizeName(raw);
    if (fixed !== raw) {
      renameSync(join(dir, raw), join(dir, fixed));
      console.log(`  ↻ ad düzeltildi: "${raw}" → "${fixed}"`);
      name = fixed;
    }

    // 2) Boyut kontrolü
    const filePath = join(dir, name);
    const bytes = statSync(filePath).size;
    let longEdge = 0;
    try {
      const out = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", filePath], {
        encoding: "utf8",
      });
      const w = Number(/pixelWidth:\s*(\d+)/.exec(out)?.[1] ?? 0);
      const h = Number(/pixelHeight:\s*(\d+)/.exec(out)?.[1] ?? 0);
      longEdge = Math.max(w, h);
    } catch {
      console.warn(`  ⚠ ${name} boyutu okunamadı, olduğu gibi bırakılıyor`);
      continue;
    }
    if (longEdge <= MAX_EDGE && bytes <= MAX_BYTES) continue;
    if (!HAS_SIPS) continue;

    // 3) Orijinali sakla, küçültülmüşü yerine yaz
    const originalDir = join(ORIGINALS, folder);
    mkdirSync(originalDir, { recursive: true });
    const originalPath = join(originalDir, name);
    renameSync(filePath, originalPath);

    // sips macOS ile birlikte gelir; EXIF yönünü uygular ve en uzun kenarı sınırlar.
    execFileSync("sips", [
      "-Z", String(MAX_EDGE),
      "-s", "format", "jpeg",
      "-s", "formatOptions", String(QUALITY),
      originalPath,
      "--out", filePath,
    ], { stdio: "ignore" });

    const newBytes = statSync(filePath).size;
    console.log(
      `  ⤓ ${name} küçültüldü: ${longEdge}px/${Math.round(bytes / 1024)}KB → ` +
        `${MAX_EDGE}px/${Math.round(newBytes / 1024)}KB  (orijinal: fotograf-orijinalleri/${folder}/)`
    );
  }

  return readdirSync(dir).filter(isImage).sort();
}

// ─────────────────────────────────────────────────────────────
// 1. Hekim fotoğrafları — dosya adı hekim slug'ı ile eşleşmeli
// ─────────────────────────────────────────────────────────────
console.log("[foto] Hekim fotoğrafları");
const doctorFiles = await processFolder("hekimler", "hekim");

const doctorsSrc = readFileSync(join(ROOT, "lib", "doctors.ts"), "utf8");
const slugs = [...doctorsSrc.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]);

const doctorMap = {};
const missingDoctors = [];
for (const slug of slugs) {
  const found = EXT_ORDER.map((e) => `${slug}${e}`).find((n) => doctorFiles.includes(n));
  if (found) doctorMap[slug] = `/images/hekimler/${found}`;
  else missingDoctors.push(slug);
}
const known = new Set(slugs.flatMap((s) => EXT_ORDER.map((e) => `${s}${e}`)));
const orphans = doctorFiles.filter((f) => !known.has(f));

for (const [slug, p] of Object.entries(doctorMap)) console.log(`  ✓ ${slug}`);
for (const s of missingDoctors) console.log(`  · ${s} — fotoğraf yok (yer tutucu)`);
for (const f of orphans) console.warn(`  ⚠ ${f} — hiçbir hekim slug'ı ile eşleşmiyor`);

writeFileSync(
  join(ROOT, "lib", "doctor-photos.generated.ts"),
  `// OTOMATİK ÜRETİLDİ — elle düzenlemeyin. Kaynak: public/images/hekimler/\n` +
    `export const DOCTOR_PHOTOS: Record<string, string> = ${JSON.stringify(doctorMap, null, 2)};\n`,
  "utf8"
);

// ─────────────────────────────────────────────────────────────
// 2. Klinik fotoğrafları — galeri klasördekileri gösterir
// ─────────────────────────────────────────────────────────────
console.log("[foto] Klinik fotoğrafları");
const clinicFiles = await processFolder("klinik", "klinik");

/** Dosya adından okunabilir açıklama üretir: tedavi-odasi-1 → "Tedavi odası 1" */
/**
 * Dosya adları ASCII tutulduğu için Türkçe karakterler kayboluyor
 * ("bekleme-alani" → "Bekleme alani"). Bilinen dosyalar için doğru açıklama.
 */
const ALT_TEXT = {
  "bekleme-alani": "bekleme alanı",
  resepsiyon: "karşılama ve resepsiyon alanı",
  "tedavi-odasi-1": "tedavi odası ve diş ünitesi",
  "tedavi-odasi-2": "ikinci tedavi odası",
};

function toAlt(file) {
  const known = ALT_TEXT[basename(file, extname(file))];
  if (known) return known;
  const stem = basename(file, extname(file)).replace(/-/g, " ");
  return stem.charAt(0).toUpperCase() + stem.slice(1);
}

const clinicPhotos = clinicFiles.map((f) => ({
  src: `/images/klinik/${f}`,
  alt: `Dentakim Küçükçekmece kliniği — ${toAlt(f)}`,
}));
for (const p of clinicPhotos) console.log(`  ✓ ${basename(p.src)}`);

writeFileSync(
  join(ROOT, "lib", "clinic-photos.generated.ts"),
  `// OTOMATİK ÜRETİLDİ — elle düzenlemeyin. Kaynak: public/images/klinik/\n` +
    `export type ClinicPhoto = { src: string; alt: string };\n` +
    `export const CLINIC_PHOTOS: ClinicPhoto[] = ${JSON.stringify(clinicPhotos, null, 2)};\n`,
  "utf8"
);

console.log(
  `[foto] Tamamlandı — ${Object.keys(doctorMap).length}/${slugs.length} hekim, ${clinicPhotos.length} klinik fotoğrafı`
);
