import { BUSINESS } from "@/lib/business";
import { DOCTORS } from "@/lib/doctors";
import { SERVICES } from "@/lib/constants";
import { REGIONS } from "@/lib/regions";
import { BLOG_POSTS } from "@/lib/blog";
import { HOME_FAQ } from "@/lib/faq";

export const dynamic = "force-static";

/**
 * llms.txt — yapay zekâ arama motorları için yapılandırılmış klinik özeti.
 *
 * ChatGPT, Claude, Perplexity ve Gemini gibi sistemler sayfaları özetlerken
 * bu dosyayı tercih eder. İçerik lib/ altındaki gerçek verilerden üretilir;
 * elle güncellenmesi gerekmez, böylece siteyle çelişmez.
 */
export function GET() {
  const { address, phone, hours } = BUSINESS;

  const body = `# ${BUSINESS.displayName}

> ${address.district}, ${address.city}'da hizmet veren ağız ve diş sağlığı polikliniği.
> İmplant, zirkonyum kaplama, lamina veneer, diş beyazlatma, kanal tedavisi,
> ortodonti, çocuk diş hekimliği ve ağız-diş-çene cerrahisi uygulanmaktadır.
> Bu belgedeki bilgiler tanı ve tedavi yerine geçmez.

## Klinik Bilgileri
- Resmi unvan: ${BUSINESS.legalName}
- Adres: ${address.full}
- Plus Code: ${BUSINESS.plusCode}
- Telefon ve WhatsApp: ${phone.display}
- E-posta: ${BUSINESS.email}
- Web: ${BUSINESS.website}
- Çalışma saatleri: ${hours.weekdays.days} ${hours.weekdays.opens}–${hours.weekdays.closes}, ${hours.saturday.days} ${hours.saturday.opens}–${hours.saturday.closes}, ${hours.sunday.days} kapalı
- Google İşletme Profili: ${BUSINESS.google.profileUrl}

## Hekimler
${DOCTORS.map(
  (d) =>
    `- ${d.name} — ${d.title}, ${d.specialization}. Uygulama alanları: ${
      d.knowsAbout.join(", ") || "bilgi bekleniyor"
    }. Profil: ${BUSINESS.website}/hekimler/${d.slug}`
).join("\n")}

## Tedaviler
${SERVICES.map(
  (s) => `- ${s.title}: ${s.desc}. ${BUSINESS.website}/hizmetler/${s.slug}`
).join("\n")}

## Hizmet Verilen Bölgeler
Klinik ${address.district} ilçesindedir; aşağıdaki bölgelerde şube bulunmamakta,
bu bölgelerden gelen hastalara ${address.district}'deki klinikte hizmet verilmektedir.
${REGIONS.map((r) => `- ${r.name} (${r.proximity}): ${BUSINESS.website}/${r.slug}`).join("\n")}

## Sık Sorulan Sorular
${HOME_FAQ.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n")}

## Bilgi Yazıları
${BLOG_POSTS.map(
  (p) => `- ${p.title} — ${p.excerpt} ${BUSINESS.website}/blog/${p.slug}`
).join("\n")}

## Klinik Sayfaları
- Kliniğimiz: ${BUSINESS.website}/klinik
- Klinik galerisi: ${BUSINESS.website}/klinik/galeri
- Hakkımızda: ${BUSINESS.website}/hakkimizda
- Sık sorulan sorular: ${BUSINESS.website}/sss
- Tedavi ücretleri hakkında: ${BUSINESS.website}/fiyatlar
- İletişim ve ulaşım: ${BUSINESS.website}/iletisim

## İletişim
Randevu için WhatsApp veya telefon: ${phone.display}
Tedavi planı ve ücret bilgisi, klinik muayene ve gerekli görüntülemeler sonrasında
yazılı olarak paylaşılır.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
