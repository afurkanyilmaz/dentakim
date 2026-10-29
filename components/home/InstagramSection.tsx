import { INSTAGRAM_HANDLE, INSTAGRAM_PROFILE } from "@/lib/instagram";
import { getAllReels } from "@/lib/instagram-feed";
import { Section, SectionHeader } from "@/components/shared/Section";
import { InstagramEmbeds } from "@/components/shared/InstagramEmbeds";

/** Anasayfa Instagram bölümü — reel'ler doğrudan görünür; liste haftalık güncellenir. */
export async function InstagramSection() {
  const reels = await getAllReels();
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
      <InstagramEmbeds reels={reels} />
    </Section>
  );
}
