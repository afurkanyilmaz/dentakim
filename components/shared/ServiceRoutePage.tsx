import { notFound } from "next/navigation";
import { getServiceContent } from "@/lib/service-pages";
import { ServicePageShell } from "@/components/shared/ServicePageShell";

export function ServiceRoutePage({ slug }: { slug: string }) {
  const content = getServiceContent(slug);
  if (!content) notFound();
  return <ServicePageShell content={content} />;
}
