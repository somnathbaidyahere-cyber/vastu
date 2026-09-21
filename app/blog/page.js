import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getPublishedBlogs, formatBlogDate } from "@/lib/blog";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

const pageTitle = "Vastu Blog — Articles, Guides & Practical Insights | VastuVeda";

const pageDescription =
  "Read VastuVeda articles on rooms, directions, elements, planning and practical spatial guidance for modern Indian homes.";

const canonicalUrl = `${siteUrl}/blog`;

/* --------------------------------------------------
   SEO Metadata
-------------------------------------------------- */

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "VastuVeda",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/og/blog.jpg`,
        width: 1200,
        height: 630,
        alt: "VastuVeda Blog — Articles and practical Vastu guides",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${siteUrl}/og/blog.jpg`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* --------------------------------------------------
   JSON-LD
-------------------------------------------------- */

function BlogStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${canonicalUrl}#blog`,

    name: "VastuVeda Blog",
    description: pageDescription,
    url: canonicalUrl,

    publisher: {
      "@type": "Organization",
      name: "VastuVeda",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },

    inLanguage: "en-IN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}

/* --------------------------------------------------
   Page
-------------------------------------------------- */

export default function BlogPage() {
  const articles = getPublishedBlogs();

  return (
    <>
      <BlogStructuredData />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-ivory-pattern px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Journal
              </p>

              <h1 className="mt-4 text-5xl font-medium leading-tight text-foreground sm:text-6xl">
                Vastu Blog
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Editorial guides for reading rooms, directions, elements and
                everyday spaces with calm practical clarity.
              </p>
            </div>

            {/* Article Grid */}
            {articles.length > 0 ? (
              <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group block"
                  >
                    <article className="h-full border-b border-border/60 pb-6">
                      {/* Cover Image */}
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 bg-card">
                        <Image
                          src={article.coverImage}
                          alt={article.imageAlt || article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.025]"
                        />
                      </div>

                      {/* Category */}
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        {article.category}
                      </p>

                      {/* Title */}
                      <h2 className="mt-2 text-2xl font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {article.excerpt}
                      </p>

                      {/* Metadata */}
                      <p className="mt-5 text-xs text-muted-foreground">
                        {formatBlogDate(article.publishedAt)}
                        <span aria-hidden="true"> · </span>
                        {article.readingTime}
                      </p>
                    </article>
                  </Link>
                ))}
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