import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/shared/Section";

/**
 * Tedavi kartı — Claude Design ölçüleri:
 * 26px dolgu, Cormorant 26px başlık, 14.5px/1.6 gövde, altta mavi bağlantı.
 */
export function ServiceCard({
  href,
  title,
  description,
  Icon,
}: {
  href: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}) {
  return (
    <Card as="article" className="group">
      <div className="flex flex-1 flex-col gap-2.5 p-[26px] pb-6">
        <span className="mb-1 inline-flex size-11 items-center justify-center rounded-panel bg-brand-primary-light text-brand-accent">
          <Icon className="size-5" aria-hidden />
        </span>

        <h3 className="font-heading text-[26px] font-semibold leading-[1.2] text-brand-dark">
          {title}
        </h3>

        <p className="flex-1 text-[14.5px] leading-[1.6] text-brand-mid">{description}</p>

        <Link
          href={href}
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-brand-link transition-colors group-hover:text-brand-dark"
        >
          Detayları gör
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </Card>
  );
}
