import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import Script from "next/script";
import { JsonLd } from "@/components/shared/JsonLd";
import { getDentistSchema } from "@/lib/schema";
import { CLINIC } from "@/lib/constants";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dentakim.com"),
  title: {
    default: `${CLINIC.shortName} — ${CLINIC.name}`,
    template: `%s | ${CLINIC.shortName}`,
  },
  description:
    "Küçükçekmece’de güvenilir diş kliniği Dentakim. İmplant, ortodonti, estetik diş ve çocuk diş hekimliği.",
  openGraph: {
    siteName: CLINIC.name,
    locale: "tr_TR",
    type: "website",
    url: "https://dentakim.com",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={cn(plusJakarta.variable, dmSans.variable)}>
      <body className="min-h-screen font-sans antialiased">
        <JsonLd data={getDentistSchema()} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-dentakim" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <Header />
        <div className="pb-24 md:pb-0">{children}</div>
        <Footer />
        <WhatsAppButton />
        <StickyCallBar />
      </body>
    </html>
  );
}
