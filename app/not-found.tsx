import Link from "next/link";
import { BUSINESS, whatsappUrl } from "@/lib/business";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="container mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-primary">
        404
      </p>
      <h1 className="mt-3 font-heading text-3xl font-bold text-brand-dark md:text-4xl">
        Aradığınız sayfayı bulamadık
      </h1>
      <p className="mt-4 text-brand-mid">
        Sayfa taşınmış veya adres yanlış yazılmış olabilir. Aşağıdaki bağlantılardan devam
        edebilir ya da doğrudan bize yazabilirsiniz.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "default" }), "bg-brand-accent text-brand-dark hover:bg-brand-accent/90")}
        >
          Ana sayfa
        </Link>
        <Link href="/hizmetler" className={buttonVariants({ variant: "outline" })}>
          Tedaviler
        </Link>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "outline" })}
        >
          WhatsApp&apos;tan yazın
        </a>
      </div>

      <p className="mt-10 text-sm text-brand-mid">
        Telefon:{" "}
        <a href={BUSINESS.phone.href} className="font-semibold text-brand-primary">
          {BUSINESS.phone.display}
        </a>
      </p>
    </main>
  );
}
