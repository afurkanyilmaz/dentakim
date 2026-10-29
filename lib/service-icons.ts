import {
  Anchor,
  Baby,
  Gem,
  Grid2x2,
  Grid3x2,
  Scissors,
  Crown,
  Drill,
  Laugh,
  Layers,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  implant: Anchor,
  "all-on-4": Grid2x2,
  "all-on-6": Grid3x2,
  hybrid: Layers,
  zirconia: Gem,
  whitening: Sparkles,
  ortho: Laugh,
  child: Baby,
  "root-canal": Stethoscope,
  crown: Crown,
  filling: Drill,
  surgery: Scissors,
};

export function getServiceIcon(iconKey: string): LucideIcon {
  return MAP[iconKey] ?? Stethoscope;
}
