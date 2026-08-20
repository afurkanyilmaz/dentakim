import {
  Baby,
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
  implant: Layers,
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
