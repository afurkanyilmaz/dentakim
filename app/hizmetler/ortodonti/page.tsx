import type { Metadata } from "next";
import { getServiceContent } from "@/lib/service-pages";
import { generateMeta } from "@/lib/seo";
import { ServiceRoutePage } from "@/components/shared/ServiceRoutePage";

const slug = "ortodonti";
const content = getServiceContent(slug)!;

export const metadata: Metadata = generateMeta({
  title: content.metaTitle,
  description: content.metaDescription,
  slug: `hizmetler/${slug}`,
});

export default function Page() {
  return <ServiceRoutePage slug={slug} />;
}
