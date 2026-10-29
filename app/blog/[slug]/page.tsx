import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog";
import { SERVICES } from "@/lib/constants";
import { getDoctor } from "@/lib/doctors";
import { BUSINESS } from "@/lib/business";
import { generateMeta } from "@/lib/seo";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  getBlogPostingSchema,
  getBreadcrumbSchema,
  getFAQPageSchema,
} from "@/lib/schema";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { ArticleBody, TableOfContents, extractHeadings } from "@/components/shared/ArticleBody";
import { MedicalDisclaimer } from "@/components/shared/MedicalDisclaimer";

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

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const url = `${BUSINESS.website}/blog/${post.slug}`;
  const author = post.authorSlug ? getDoctor(post.authorSlug) : undefined;
  const service = post.serviceSlug
    ? SERVICES.find((s) => s.slug === post.serviceSlug)
    : undefined;
  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category && p.category === post.category
  ).slice(0, 3);
  const headings = extractHeadings(post.content);

  return (
    <main className="pb-16">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Anasayfa", item: `${BUSINESS.website}/` },
          { name: "Blog", item: `${BUSINESS.website}/blog` },
          { name: post.title, item: url },
        ])}
      />
      <JsonLd
        data={getBlogPostingSchema({
          headline: post.title,
          description: post.excerpt,
          url,
          datePublished: post.date,
          dateModified: post.updatedAt,
          author,
        })}
      />
      {post.faqs?.length ? <JsonLd data={getFAQPageSchema(post.faqs)} /> : null}

      <div className="page-hero">
        <div className="container mx-auto max-w-[880px] px-5 py-[clamp(48px,6vw,88px)] sm:px-8">
          <BreadcrumbNav
            items={[
              { label: "Anasayfa", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          {post.category ? (
            <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-accent">
              {post.category}
            </p>
          ) : null}
          <h1 className="mt-3 font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.02] tracking-display text-white [text-wrap:pretty]">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13.5px] text-brand-faint">
            {author ? (
              <Link
                href={`/hekimler/${author.slug}`}
                className="flex items-center gap-2.5 font-semibold text-brand-dark hover:text-brand-accent"
              >
                {author.photo ? (
                  <Image
                    src={author.photo}
                    alt={author.name}
                    width={32}
                    height={32}
                    className="size-8 rounded-full object-cover object-top"
                  />
                ) : null}
                {author.name}
              </Link>
            ) : (
              <span className="font-semibold text-brand-dark">Dentakim Hekim Kadrosu</span>
            )}
            <span className="size-1 rounded-full bg-brand-line-strong" aria-hidden />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("tr-TR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="size-1 rounded-full bg-brand-line-strong" aria-hidden />
            <span>{post.readTime} okuma</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[944px] px-5 sm:px-8 py-14">
        <TableOfContents headings={headings} />

        <article className="mt-10">
          <ArticleBody content={post.content} />
        </article>

        <MedicalDisclaimer className="mt-10" />

        {/* Yazı içi dönüşüm bloğu — WhatsApp birincil, telefon ikincil */}
        <div className="mt-8">
          <ContactCTA
            title="Bu konuda size özel bir değerlendirme yapalım"
            description="Durumunuza uygun tedavi ancak muayene sonrasında belirlenebilir. WhatsApp'tan yazabilir veya telefonla ulaşabilirsiniz."
            message={post.whatsappMessage}
          />
        </div>

        {service ? (
          <div className="mt-8 rounded-card border border-brand-line bg-brand-card p-[26px]">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-accent">
              İlgili tedavi
            </p>
            <Link
              href={`/hizmetler/${service.slug}`}
              className="mt-2 block font-heading text-[26px] font-bold leading-[1.2] text-brand-dark hover:text-brand-accent"
            >
              {service.title}
            </Link>
            <p className="mt-2 text-[14.5px] leading-[1.6] text-brand-mid">{service.desc}</p>
            <Link
              href={`/hizmetler/${service.slug}`}
              className="mt-4 inline-block text-sm font-bold text-brand-link hover:text-brand-dark"
            >
              Tedavi sayfasına git →
            </Link>
          </div>
        ) : null}

        {post.faqs?.length ? (
          <section className="mt-14" aria-labelledby="yazi-sss">
            <h2
              id="yazi-sss"
              className="mb-6 font-heading text-[clamp(24px,3.2vw,32px)] font-bold leading-[1.25] text-brand-dark"
            >
              Sık sorulan sorular
            </h2>
            <FAQAccordion items={post.faqs} />
          </section>
        ) : null}

        {related.length ? (
          <section className="mt-14 border-t border-brand-line pt-10" aria-labelledby="ilgili-yazilar">
            <p
              id="ilgili-yazilar"
              className="mb-6 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-accent"
            >
              İlgili yazılar
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="flex flex-col gap-2 rounded-panel border border-brand-line bg-brand-card p-5 transition-colors hover:border-brand-line-strong"
                >
                  <span className="font-heading text-[19px] font-bold leading-[1.25] text-brand-dark">
                    {r.title}
                  </span>
                  <span className="text-[13px] text-brand-faint">{r.readTime} okuma</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
