import type { Metadata } from "next";
import { getServiceContent } from "@/lib/service-pages";
import { generateMeta } from "@/lib/seo";
import { TREATMENT_PHOTOS } from "@/lib/stock-photos";
import { ServiceRoutePage } from "@/components/shared/ServiceRoutePage";

const slug = "all-on-4-implant";
const content = getServiceContent(slug)!;

export const metadata: Metadata = generateMeta({
  title: content.metaTitle,
  description: content.metaDescription,
  slug: `hizmetler/${slug}`,
  image: TREATMENT_PHOTOS[slug]?.src,
});

export default function Page() {
  return <ServiceRoutePage slug={slug} />;
}
