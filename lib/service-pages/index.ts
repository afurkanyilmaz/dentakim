import type { ServicePageContent } from "./types";
import { implantTedavisi } from "./implant-tedavisi";
import { disBeyazlatma } from "./dis-beyazlatma";
import { ortodonti } from "./ortodonti";
import { cocukDisHekimligi } from "./cocuk-dis-hekimligi";
import { kanalTedavisi } from "./kanal-tedavisi";
import { protezZirkonyum } from "./protez-zirkonyum";
import { disDolgusu } from "./dis-dolgusu";

export type { ServicePageContent, ServiceFAQ } from "./types";

const ALL: ServicePageContent[] = [
  implantTedavisi,
  disBeyazlatma,
  ortodonti,
  cocukDisHekimligi,
  kanalTedavisi,
  protezZirkonyum,
  disDolgusu,
];

export const SERVICE_CONTENT_BY_SLUG: Record<string, ServicePageContent> =
  Object.fromEntries(ALL.map((c) => [c.slug, c]));

export function getServiceContent(slug: string): ServicePageContent | undefined {
  return SERVICE_CONTENT_BY_SLUG[slug];
}
