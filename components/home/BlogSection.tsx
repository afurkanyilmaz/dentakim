import { BLOG_POSTS } from "@/lib/blog";
import { ArrowLink, Section, SectionHeader } from "@/components/shared/Section";
import { BlogCard } from "@/components/shared/BlogCard";

/** Anasayfa rehber bölümü — en yeni üç yazı. */
export function BlogSection() {
  const posts = [...BLOG_POSTS]
    .sort((a, b) => (b.updatedAt ?? b.date).localeCompare(a.updatedAt ?? a.date))
    .slice(0, 3);

  return (
    <Section labelledBy="blog-baslik">
      <SectionHeader
        id="blog-baslik"
        eyebrow="Blog"
        title="Ağız ve Diş Sağlığı Rehberi"
        action={<ArrowLink href="/blog">Tüm Yazılar</ArrowLink>}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </Section>
  );
}
