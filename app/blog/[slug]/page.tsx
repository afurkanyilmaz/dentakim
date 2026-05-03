import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog";
import { generateMeta } from "@/lib/seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/schema";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return generateMeta({
    title: post.title,
    description: post.excerpt,
    slug: `blog/${post.slug}`,
  });
}

function renderContent(raw: string) {
  const lines = raw.trim().split("\n");
  const out: ReactNode[] = [];
  lines.forEach((line, i) => {
    const t = line.trim();
    if (!t) return;
    if (t.startsWith("## ")) {
      out.push(
        <h2
          key={i}
          className="mt-8 font-heading text-xl font-bold text-brand-dark first:mt-0"
        >
          {t.slice(3)}
        </h2>
      );
      return;
    }
    out.push(
      <p key={i} className="mt-3 leading-relaxed text-brand-mid">
        {t}
      </p>
    );
  });
  return out;
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const url = `https://dentakim.com/blog/${post.slug}`;

  return (
    <main className="pb-16">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Anasayfa", item: "https://dentakim.com/" },
          { name: "Blog", item: "https://dentakim.com/blog" },
          { name: post.title, item: url },
        ])}
      />
      <JsonLd
        data={getBlogPostingSchema({
          headline: post.title,
          description: post.excerpt,
          url,
          datePublished: post.date,
        })}
      />
      <article className="border-b border-border/60 bg-brand-primary-light/40">
        <div className="container mx-auto max-w-3xl px-4 py-12">
          <Link href="/blog" className="text-sm font-medium text-brand-primary hover:underline">
            ← Blog
          </Link>
          <h1 className="mt-4 font-heading text-3xl font-bold text-brand-dark md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-2 text-sm text-brand-mid">
            {post.date} · {post.readTime}
          </p>
        </div>
      </article>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <div className="prose prose-neutral max-w-none">{renderContent(post.content)}</div>
        <div className="mt-12">
          <Link
            href="/randevu"
            className="font-semibold text-brand-primary hover:underline"
          >
            Randevu al →
          </Link>
        </div>
      </div>
    </main>
  );
}
