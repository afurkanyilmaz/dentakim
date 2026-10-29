"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_PROFILE, INSTAGRAM_REELS, reelUrl } from "@/lib/instagram";
import { Section, SectionHeader } from "@/components/shared/Section";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

/**
 * Instagram videoları — tıklayınca yüklenir.
 *
 * Instagram gömme betiği üçüncü taraf çerezleri kullanabildiği ve sayfayı
 * yavaşlattığı için ziyaretçi "Videoları göster"e basana kadar yüklenmez.
 * Reel bağlantıları her zaman HTML'de bulunur (arama motorları için).
 */
export function InstagramSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const s = document.createElement("script");
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, [loaded]);

  return (
    <Section labelledBy="instagram-baslik" className="overflow-hidden">
      <SectionHeader
        id="instagram-baslik"
        eyebrow="Instagram"
        title="Instagram’da bizi takip edin."
        action={
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-brand-line-strong pb-1.5 text-[12.5px] font-extrabold text-brand-light transition-colors hover:border-brand-accent hover:text-brand-accent"
          >
            {INSTAGRAM_HANDLE} <span aria-hidden>↗</span>
          </a>
        }
      />

      {loaded ? (
        <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8">
          {INSTAGRAM_REELS.map((code) => (
            <li key={code} className="w-[326px] shrink-0 snap-start">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={`${reelUrl(code)}?utm_source=ig_embed`}
                data-instgrm-version="14"
                style={{ margin: 0, minWidth: 326, maxWidth: 326, width: "100%", background: "#fff", border: 0, borderRadius: 18 }}
              >
                <a href={reelUrl(code)} target="_blank" rel="noopener noreferrer">
                  Instagram’da izle
                </a>
              </blockquote>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-[22px] border border-brand-line bg-brand-card p-6 sm:p-8">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {INSTAGRAM_REELS.map((code, i) => (
              <li key={code}>
                <a
                  href={reelUrl(code)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex aspect-[9/16] flex-col items-center justify-center gap-2 rounded-[16px] border border-brand-line bg-panel text-brand-mid transition-colors hover:border-brand-accent hover:text-brand-accent"
                  aria-label={`Instagram videosu ${i + 1}`}
                >
                  <Play className="size-6" aria-hidden />
                  <span className="text-[11px] font-bold">Video {i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[560px] text-[12.5px] leading-[1.6] text-brand-faint">
              Videolar Instagram üzerinden oynatılır. Göster düğmesine bastığınızda
              Instagram içerikleri ve çerezleri yüklenir (bkz. Çerez Politikası).
            </p>
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-[12px] bg-brand-ink px-6 text-[14px] font-extrabold text-white transition-colors hover:bg-brand-accent"
            >
              <Play className="size-4" aria-hidden /> Videoları göster
            </button>
          </div>
        </div>
      )}
    </Section>
  );
}
