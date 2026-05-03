import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

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
    <Card className="group flex flex-col overflow-hidden border-border/70 bg-card shadow-sm transition-shadow hover:shadow-md">
      <CardHeader className="space-y-3">
        <div className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-primary-light text-brand-primary">
          <Icon className="size-5" aria-hidden />
        </div>
        <CardTitle className="font-heading text-lg text-brand-dark group-hover:text-brand-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <p className="text-sm leading-relaxed text-brand-mid">{description}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full border-brand-primary text-brand-primary hover:bg-brand-primary-light"
          )}
        >
          Detayları gör
        </Link>
      </CardFooter>
    </Card>
  );
}
