import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import Script from "next/script";
import { JsonLd } from "@/components/shared/JsonLd";
import { getClinicSchema, getWebSiteSchema } from "@/lib/schema";
import { DOCTORS } from "@/lib/doctors";
import { REGIONS } from "@/lib/regions";
import { BUSINESS } from "@/lib/business";
import { SERVICES } from "@/lib/constants";

/* Tipografi: başlıklarda Plus Jakarta Sans, gövdede Manrope */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

/**
 * Google Analytics yalnızca NEXT_PUBLIC_GA_ID tanımlıysa yüklenir.
 * Eski kodda örnek kimlik (G-XXXXXXXXXX) gömülüydü ve hiçbir şey ölçmüyordu.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://dentakim.com"),
  title: {
    default: `${BUSINESS.brandName} — ${BUSINESS.displayName}`,
    template: `%s | ${BUSINESS.brandName}`,
  },
  description:
    "Küçükçekmece’de güvenilir diş kliniği Dentakim. İmplant, ortodonti, estetik diş ve çocuk diş hekimliği.",
  openGraph: {
    siteName: BUSINESS.displayName,
    locale: "tr_TR",
    type: "website",
    url: "https://dentakim.com",
  },
  robots: { index: true, follow: true },
  // Yerel arama için coğrafi meta etiketleri
  other: {
    "geo.region": BUSINESS.address.region,
    "geo.placename": `${BUSINESS.address.district}, ${BUSINESS.address.city}`,
    "geo.position": `${BUSINESS.coordinates.lat};${BUSINESS.coordinates.lng}`,
    ICBM: `${BUSINESS.coordinates.lat}, ${BUSINESS.coordinates.lng}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={cn(jakarta.variable, manrope.variable)} suppressHydrationWarning>
      <head>
        {/* Tema ilk boyamadan önce uygulanır: kayıtlı tercih, yoksa cihaz ayarı. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("dentakim-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <JsonLd
          data={getClinicSchema(
            DOCTORS,
            REGIONS.map((r) => r.name),
            SERVICES.map((sv) => ({ slug: sv.slug, title: sv.title }))
          )}
        />
        <JsonLd data={getWebSiteSchema()} />
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-dentakim" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}
        <Header />
        {/* Sabit header yüksekliği kadar boşluk; anasayfa hero bu alanın altına uzanır. */}
        <div className="pt-[75px] lg:pt-[140px]">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
