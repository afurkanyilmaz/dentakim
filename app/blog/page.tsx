import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { generateMeta } from "@/lib/seo";
import { BlogCard } from "@/components/shared/BlogCard";

export const metadata: Metadata = generateMeta({
  title: "Diş Sağlığı Blogu",
  description:
    "Diş ağrısı, implant, kanal tedavisi ve diş beyazlatma hakkında hekimlerimizin kaleminden rehberler. Küçükçekmece Dentakim Ağız ve Diş Sağlığı Polikliniği.",
  slug: "blog",
});

export default function BlogPage() {
  return (
    <main className="pb-16">
      <div className="page-hero">
        <div className="mx-auto max-w-[1304px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
          <h1 className="font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.02] tracking-display text-white [text-wrap:pretty]">
            Blog
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid">
            Diş ağrısından implanta, kanal tedavisinden beyazlatmaya kadar merak edilen
            konuları hekimlerimizin kaleminden, sade bir dille anlatıyoruz.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1304px] px-5 py-[clamp(56px,6vw,96px)] sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date)).map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
