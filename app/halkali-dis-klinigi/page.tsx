import type { Metadata } from "next";
import { GEO_BY_SLUG } from "@/lib/geo-content";
import { generateMeta } from "@/lib/seo";
import { GeoPageShell } from "@/components/shared/GeoPageShell";

const slug = "halkali-dis-klinigi";
const geo = GEO_BY_SLUG[slug]!;

export const metadata: Metadata = generateMeta({
  title: geo.metaTitle,
  description: geo.metaDescription,
  slug,
});

export default function Page() {
  return (
    <main>
      <GeoPageShell geo={geo} />
    </main>
  );
}
