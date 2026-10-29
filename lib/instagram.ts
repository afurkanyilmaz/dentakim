/**
 * Instagram videoları (@dentakim.istanbul). Videolar indirilmez; Instagram'ın
 * resmi gömme koduyla Instagram sunucularından oynatılır. Yeni bir reel
 * eklemek için kısa kodunu listenin başına yazmanız yeterlidir.
 */
export const INSTAGRAM_PROFILE = "https://www.instagram.com/dentakim.istanbul/";
export const INSTAGRAM_HANDLE = "@dentakim.istanbul";

export const INSTAGRAM_REELS: string[] = [
  "DdEWirAKxKB",
  "DfCWzcNKgLq",
  "Dety2OXqxOY",
  "Dei_rxDKVph",
  "DebvQq6K8BZ",
  "DeUNrUBqdDr",
  "DeOyfaCKefu",
];

export const reelUrl = (code: string) => `https://www.instagram.com/reel/${code}/`;
