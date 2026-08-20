import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Diş Sağlığı Blogu",
  description:
    "Diş ağrısı, implant, kanal tedavisi ve diş beyazlatma hakkında hekimlerimizin kaleminden rehberler. Küçükçekmece Dentakim Ağız ve Diş Sağlığı Polikliniği.",
  slug: "blog",
});

export default function BlogPage() {
  return (
    <main className="pb-16">
      <div className="border-b border-brand-line bg-brand-primary-light">
        <div className="container mx-auto max-w-[880px] px-6 py-14">
          <h1 className="font-heading text-[clamp(32px,4.6vw,50px)] font-medium leading-[1.12] text-brand-dark [text-wrap:pretty]">
            Blog
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-brand-mid">
            Diş ağrısından implanta, kanal tedavisinden beyazlatmaya kadar merak edilen
            konuları hekimlerimizin kaleminden, sade bir dille anlatıyoruz.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-[880px] px-6 py-14">
        <ul className="grid gap-6 sm:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <li
              key={post.slug}
              className="flex flex-col gap-3 rounded-card border border-brand-line bg-white p-[26px] transition-colors hover:border-brand-line-strong"
            >
              {post.category ? (
                <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                  {post.category}
                </span>
              ) : null}
              <Link
                href={`/blog/${post.slug}`}
                className="font-heading text-[26px] font-semibold leading-[1.22] text-brand-dark transition-colors hover:text-brand-accent"
              >
                {post.title}
              </Link>
              <p className="text-[14.5px] leading-[1.6] text-brand-mid">{post.excerpt}</p>
              <p className="mt-auto border-t border-brand-line pt-3 text-[13px] text-brand-faint">
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · {post.readTime} okuma
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
