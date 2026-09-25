import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import { getWebPageSchema } from "@/lib/seo/schemas";
import { schemaIds } from "@/lib/seo/ids";
import { seoConfig } from "@/lib/seo/config";

import {
  getPublishedBlogs,
  formatBlogDate,
  estimateReadingTime,
} from "@/lib/blog";

import { urlFor } from "@/lib/sanity/image";

/* --------------------------------------------------
   SEO Metadata
-------------------------------------------------- */
const pageTitle =
  "Vastu Blog — Articles, Guides & Practical Insights | VastuGuru";

const pageDescription =
  "Explore Vastu articles, practical guidance, and insights about rooms, directions, elements, and modern Indian homes.";

const canonicalUrl = `${seoConfig.siteUrl}/blog`;

export const metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: pageTitle,

    description: pageDescription,

    url: "/blog",

    siteName: seoConfig.siteName,

    type: "website",

    locale: seoConfig.locale,

    images: [
      {
        url: "/og/blog.jpg",

        width: 1200,

        height: 630,

        alt: "VastuGuru Blog — Articles and practical Vastu guides",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: pageTitle,

    description: pageDescription,

    images: ["/og/blog.jpg"],
  },

  robots: {
    index: true,

    follow: true,
  },
};

export default async function BlogPage() {
  const articles = await getPublishedBlogs();
  console.log(articles)

    const blogSchema = getWebPageSchema({
    id: schemaIds.blog,

    url: canonicalUrl,

    name: "Vastu Blog",

    description:
      "Discover Vastu insights, practical guidance, and helpful articles to understand your home and living spaces better.",
  });

  const pageSchema = {
    "@context": "https://schema.org",

    "@graph": [blogSchema],
  };

  return (
    <>
      <JsonLd data={pageSchema} />

      <main className="min-h-screen bg-surface/80">
        {/* Hero */}
        <section className="bg-ivory-pattern px-4 py-12 sm:px-6 lg:px-8 lg:py-15">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Journal
              </p>

              <h1 className="hero-heading">
                Vastu{" "}<span className="text-gradient-brand">blog</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Editorial guides for reading rooms, directions, elements and
                everyday spaces with calm practical clarity.
              </p>
            </div>

            {/* Article Grid */}
            {articles.length > 0 ? (
    
<div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
  {articles.map((article,index) => {
    const readingTime = estimateReadingTime(article.body || []);

    const imageUrl = article.coverImage
      ? urlFor(article.coverImage)
          .width(1000)
          .quality(85)
          .auto("format")
          .url()
      : null;


    return (
      <Link
        key={article._id}
        href={`/blog/${article.slug}`}
        className="group block"
      >
        <article className="h-full">
          {/* Cover Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 bg-muted">
            {imageUrl ? (
       <Image
  src={imageUrl}
  alt={article.imageAlt || article.title}
  fill
  unoptimized
  loading={index === 0 ? "eager" : "lazy"}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.035]"
/>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                No image available
              </div>
            )}

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* Category and date */}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em]">
            <span className="text-primary">
              {article.category || "Vastu"}
            </span>

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-border"
            />

            <time
              dateTime={article.publishedAt}
              className="text-muted-foreground"
            >
              {formatBlogDate(article.publishedAt)}
            </time>
          </div>

          {/* Title */}
          <h2 className="mt-3 text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
            {article.title}
          </h2>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
              {article.excerpt}
            </p>
          )}

          {/* Bottom metadata */}
          <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
            <span>{readingTime}</span>

            <span className="inline-flex items-center gap-2 font-medium text-foreground transition-colors group-hover:text-primary">
              Read article
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>
        </article>
      </Link>
    );
  })}
</div>
            ) : (
              <p className="mt-14 text-muted-foreground">
                No articles are available at the moment.
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}