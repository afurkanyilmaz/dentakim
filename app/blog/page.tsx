import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Blog — Ağız ve Diş Sağlığı Yazıları",
  description:
    "Dentakim blog: Küçükçekmece diş fiyatları, implant süresi, diş beyazlatma ve daha fazlası.",
  slug: "blog",
});

export default function BlogPage() {
  return (
    <main className="pb-16">
      <div className="border-b border-border/60 bg-brand-primary-light/40">
        <div className="container mx-auto max-w-3xl px-4 py-12">
          <h1 className="font-heading text-3xl font-bold text-brand-dark md:text-4xl">
            Blog
          </h1>
          <p className="mt-3 text-brand-mid">
            Ağız ve diş sağlığına dair kısa, okunabilir rehberler.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <ul className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <li
              key={post.slug}
              className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="font-heading text-xl font-semibold text-brand-dark hover:text-brand-primary"
              >
                {post.title}
              </Link>
              <p className="mt-2 text-sm text-brand-mid">{post.excerpt}</p>
              <p className="mt-3 text-xs text-brand-mid">
                {post.date} · {post.readTime} okuma
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
