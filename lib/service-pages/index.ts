import type { ServicePageContent } from "./types";
import { implantTedavisi } from "./implant-tedavisi";
import { disBeyazlatma } from "./dis-beyazlatma";
import { ortodonti } from "./ortodonti";
import { cocukDisHekimligi } from "./cocuk-dis-hekimligi";
import { kanalTedavisi } from "./kanal-tedavisi";
import { protezZirkonyum } from "./protez-zirkonyum";
import { disDolgusu } from "./dis-dolgusu";
import { agizDisCeneCerrahisi } from "./agiz-dis-cene-cerrahisi";
import { allOn4Implant } from "./all-on-4-implant";
import { allOn6Implant } from "./all-on-6-implant";
import { hibritProtez } from "./hibrit-protez";
import { gulusTasarimi } from "./gulus-tasarimi";
import { laminaVeneer } from "./lamina-veneer";
import { kemikGreftiSinusLifting } from "./kemik-grefti-sinus-lifting";
import { gecePlagiBruksizm } from "./gece-plagi-bruksizm";

export type { ServicePageContent, ServiceFAQ } from "./types";

const ALL: ServicePageContent[] = [
  implantTedavisi,
  disBeyazlatma,
  ortodonti,
  cocukDisHekimligi,
  kanalTedavisi,
  protezZirkonyum,
  disDolgusu,
  agizDisCeneCerrahisi,
  allOn4Implant,
  allOn6Implant,
  hibritProtez,
  gulusTasarimi,
  laminaVeneer,
  kemikGreftiSinusLifting,
  gecePlagiBruksizm,
];

export const SERVICE_CONTENT_BY_SLUG: Record<string, ServicePageContent> =
  Object.fromEntries(ALL.map((c) => [c.slug, c]));

export function getServiceContent(slug: string): ServicePageContent | undefined {
  return SERVICE_CONTENT_BY_SLUG[slug];
}
