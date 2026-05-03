import type { Metadata } from "next";
import { CLINIC, WHATSAPP_URL } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import { AppointmentForm } from "@/components/shared/AppointmentForm";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = generateMeta({
  title: "Online Randevu Al — Dentakim Küçükçekmece",
  description:
    "Dentakim’de online randevu talebi oluşturun. Telefon: +90 553 313 78 88. Küçükçekmece Sultan Murat Caddesi.",
  slug: "randevu",
});

export default function RandevuPage() {
  return (
    <main className="pb-16">
      <div className="border-b border-border/60 bg-brand-primary-light/40">
        <div className="container mx-auto max-w-3xl px-4 py-12">
          <h1 className="font-heading text-3xl font-bold text-brand-dark md:text-4xl">
            Online Randevu Al — Dentakim Küçükçekmece
          </h1>
          <p className="mt-3 text-brand-mid">
            Formu doldurun, ekibimiz en kısa sürede sizi{" "}
            <a className="font-semibold text-brand-primary" href={`tel:${CLINIC.phoneRaw}`}>
              {CLINIC.phone}
            </a>{" "}
            üzerinden arasın.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <AppointmentForm />
        <div className="mt-10 rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
          <h2 className="font-heading text-lg font-bold text-brand-dark">
            Hızlı iletişim
          </h2>
          <p className="mt-2 text-sm text-brand-mid">
            Hafta içi: {CLINIC.hours.weekdays} · Cumartesi: {CLINIC.hours.saturday} ·
            Pazar: {CLINIC.hours.sunday}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-brand-primary text-white hover:bg-brand-primary/90"
              )}
            >
              {CLINIC.phone}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              WhatsApp
            </a>
            <Link href="/iletisim" className={buttonVariants({ variant: "ghost" })}>
              İletişim sayfası
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
