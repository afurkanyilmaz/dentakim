"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { reelUrl, type InstagramReel } from "@/lib/instagram";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const EMBED_SRC = "https://www.instagram.com/embed.js";

/**
 * Instagram reel'lerini resmi gömme koduyla gösterir. Gömme betiği, bölüm
 * ekrana yaklaştığında yüklenir (sayfanın ilk açılışını yavaşlatmaz).
 * Betik yüklenene kadar her video için bağlantılı bir yer tutucu görünür;
 * bağlantılar HTML'de bulunduğu için arama motorları da görür.
 */
export function InstagramEmbeds({ reels, bleed = true }: { reels: InstagramReel[]; /** Kenarlara taşan yatay kaydırma (tam genişlik bölümler için). */ bleed?: boolean }) {
  const ref = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    if (document.querySelector(`script[src="${EMBED_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = EMBED_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, [visible]);

  return (
    <ul
      ref={ref}
      className={
        "no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 " +
        (bleed ? "-mx-5 px-5 sm:-mx-8 sm:px-8" : "")
      }
    >
      {reels.map(({ code }, i) => (
        <li key={code} className="w-[326px] shrink-0 snap-start">
          {visible ? (
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
          ) : (
            <a
              href={reelUrl(code)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[560px] flex-col items-center justify-center gap-2 rounded-[18px] border border-brand-line bg-panel text-brand-mid"
              aria-label={`Instagram videosu ${i + 1}`}
            >
              <Play className="size-7" aria-hidden />
              <span className="text-[12px] font-bold">Instagram videosu</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
