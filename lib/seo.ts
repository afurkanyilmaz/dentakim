import type { Metadata } from "next";

export type MetaProps = {
  title: string;
  description: string;
  slug: string;
  image?: string;
};

export function generateMeta({
  title,
  description,
  slug,
  image,
}: MetaProps): Metadata {
  const fullTitle = `${title} | Küçükçekmece Diş Kliniği — Dentakim`;
  const path = slug ? `/${slug}` : "";
  const url = `https://dentakim.com${path}`;
  return {
    title: fullTitle,
    description,
    metadataBase: new URL("https://dentakim.com"),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Dentakim Ağız ve Diş Sağlığı Polikliniği",
      images: [{ url: image || "/og/default.jpg", width: 1200, height: 630 }],
      locale: "tr_TR",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}
