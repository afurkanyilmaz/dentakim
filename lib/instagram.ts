/**
 * Instagram videoları (@dentakim.istanbul). Videolar indirilmez; Instagram'ın
 * resmi gömme koduyla Instagram sunucularından oynatılır.
 *
 * Yeni reel eklemek: kısa kodunu listenin başına yazın. Videoda bir hekim
 * yer alıyorsa `doctorSlug` (lib/doctors.ts) ekleyin; video o hekimin profil
 * sayfasında da gösterilir.
 */
export const INSTAGRAM_PROFILE = "https://www.instagram.com/dentakim.istanbul/";
export const INSTAGRAM_HANDLE = "@dentakim.istanbul";

export type InstagramReel = { code: string; doctorSlug?: string };

export const INSTAGRAM_REELS: InstagramReel[] = [
  { code: "DdEWirAKxKB" },
  { code: "DfCWzcNKgLq" },
  { code: "Dety2OXqxOY" },
  { code: "Dei_rxDKVph" },
  { code: "DebvQq6K8BZ" },
  { code: "DeUNrUBqdDr" },
  { code: "DeOyfaCKefu" },
];

export const reelUrl = (code: string) => `https://www.instagram.com/reel/${code}/`;

export function getReelsForDoctor(slug: string): InstagramReel[] {
  return INSTAGRAM_REELS.filter((r) => r.doctorSlug === slug);
}
