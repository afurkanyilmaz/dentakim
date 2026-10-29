import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { getPostImage } from "@/lib/blog-images";

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Blog kartı — üstte görsel ve ok kutusu, altta kategori, başlık, özet. */
export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const cover = getPostImage(post, index);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[22px] border border-brand-line bg-brand-card transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-brand-line-strong motion-reduce:transform-none">
      <div className="relative aspect-[397/240] overflow-hidden bg-brand-card">
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transform-none"
          />
        ) : null}
        <span
          aria-hidden
          className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-[10px] border border-white/60 bg-black/25 text-white"
        >
          ↗
        </span>
      </div>
      <div className="flex flex-1 flex-col px-[22px] pb-6 pt-5">
        <p className="text-[11px] font-extrabold tracking-[0.06em] text-brand-accent">
          {post.category ?? "Ağız ve Diş Sağlığı"}
        </p>
        <h3 className="mt-2.5 font-heading text-[20px] font-bold leading-[1.3] tracking-[-0.02em] text-brand-light">
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none group-focus-within:text-brand-accent"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2.5 line-clamp-2 text-[13.5px] leading-[1.6] text-brand-mid">{post.excerpt}</p>
        <p className="mt-auto flex items-center justify-between pt-5 text-[12px] font-bold text-brand-light">
          <span>Devamını oku →</span>
          <span className="font-medium text-brand-faint">
            {formatPostDate(post.date)} · {post.readTime}
          </span>
        </p>
      </div>
    </article>
  );
}
