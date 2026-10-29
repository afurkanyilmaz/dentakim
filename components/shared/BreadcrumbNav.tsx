import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function BreadcrumbNav({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[12px] font-semibold text-white/55">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((crumb, idx) => {
          const last = idx === items.length - 1;
          return (
            <li key={`${crumb.label}-${idx}`} className="flex items-center gap-1">
              {idx > 0 && (
                <span className="mx-1 text-white/30" aria-hidden>
                  /
                </span>
              )}
              {!last && crumb.href ? (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-white"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className={last ? "text-brand-accent" : undefined}>
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
