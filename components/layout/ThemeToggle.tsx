"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const THEME_STORAGE_KEY = "dentakim-theme";

type Theme = "dark" | "light";

/**
 * Açık / koyu tema anahtarı. Seçim localStorage'a yazılır; ilk boyamada
 * tema app/layout.tsx'teki satır içi betikle uygulanır (yanıp sönme olmaz).
 */
export function ThemeToggle({ className, withLabel = false }: { className?: string; withLabel?: boolean }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* gizli sekme vb. — tercih yalnızca bu oturumda geçerli */
    }
  };

  const label = theme === "light" ? "Koyu temaya geç" : "Açık temaya geç";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-fg/[0.14] bg-fg/[0.05] text-brand-light transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
        withLabel ? "h-11 px-4 text-[13px] font-bold" : "size-9",
        className
      )}
    >
      {theme === "light" ? <Moon className="size-4" aria-hidden /> : <Sun className="size-4" aria-hidden />}
      {withLabel ? <span>{theme === "light" ? "Koyu tema" : "Açık tema"}</span> : null}
    </button>
  );
}
