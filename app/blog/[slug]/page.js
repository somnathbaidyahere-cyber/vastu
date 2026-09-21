
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  formatBlogDate,
  getArticleHeadings,
  getBlogBySlug,
  getRelatedBlogs,
  getSeoForBlog,
  estimateReadingTime,
  getPublishedBlogs,
} from "@/lib/blog";

/* --------------------------------------------------
   Site Configuration
-------------------------------------------------- */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

const siteName = "VastuVeda";

const organizationId = `${siteUrl}/#organization`;

/* --------------------------------------------------
   Static Params
   Useful when blogs are stored locally.
-------------------------------------------------- */

export function generateStaticParams() {
  return getPublishedBlogs().map((article) => ({
    slug: article.slug,
  }));
}

/* --------------------------------------------------
   Dynamic SEO Metadata
-------------------------------------------------- */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const article = getBlogBySlug(slug);

  if (!article) {
    return {
      title: "Article unavailable | VastuVeda",
      description: "This VastuVeda article is unavailable.",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seo = getSeoForBlog(article);

  const canonicalUrl = `${siteUrl}/blog/${article.slug}`;

  const imageUrl = article.coverImage?.startsWith("http")
    ? article.coverImage
    : `${siteUrl}${article.coverImage}`;

  return {
    title: seo.title,
    description: seo.description,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName,
      type: "article",
      locale: "en_IN",

      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: [article.author],
      section: article.category,

      images: [
        {
          url: imageUrl,
          width: 1536,
          height: 1024,
          alt: article.imageAlt || article.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,

      images: [imageUrl],
    },
  };
}

/* --------------------------------------------------
   JSON-LD Helpers
-------------------------------------------------- */

function getAbsoluteImageUrl(imagePath) {
  if (!imagePath) return `${siteUrl}/og/blog.jpg`;

  return imagePath.startsWith("http")
    ? imagePath
    : `${siteUrl}${imagePath}`;
}

function createStructuredData(article) {
  const canonicalUrl = `${siteUrl}/blog/${article.slug}`;

  const imageUrl = getAbsoluteImageUrl(article.coverImage);

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${siteUrl}/blog`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: article.category,
      item: `${siteUrl}/blog?category=${encodeURIComponent(
        article.category
      )}`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: article.title,
      item: canonicalUrl,
    },
  ];

  return {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
        },
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: breadcrumbItems,
      },

      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,

        headline: article.title,
        description: article.excerpt,
        image: [imageUrl],

        url: canonicalUrl,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },

        author: {
          "@type": "Organization",
          name: article.author || siteName,
          url: siteUrl,
        },

        publisher: {
          "@id": organizationId,
        },

        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,

        articleSection: article.category,
        inLanguage: "en-IN",

        isPartOf: {
          "@type": "Blog",
          "@id": `${siteUrl}/blog#blog`,
          name: `${siteName} Blog`,
          url: `${siteUrl}/blog`,
        },
      },
    ],
  };
}

function StructuredData({ article }) {
  const structuredData = createStructuredData(article);

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

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;

  const article = getBlogBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedBlogs(article);

  const toc = getArticleHeadings(article.content);

  return (
    <>
      <StructuredData article={article} />

      <main className="min-h-screen bg-background">
        <BlogBreadcrumb article={article} />

        <ArticleHero article={article} />

        <ArticleLayout article={article} toc={toc} />

        <RelatedArticles
          articles={relatedArticles}
          category={article.category}
        />

        <ConsultationBridge article={article} />

        <BlogFinalCTA />
      </main>
    </>
  );
}

/* --------------------------------------------------
   Breadcrumb
-------------------------------------------------- */

function BlogBreadcrumb({ article }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="px-4 py-5 sm:px-6 lg:px-8"
    >
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-primary"
          >
            Home
          </Link>
        </li>

        <li aria-hidden="true" className="text-muted-foreground/60">
          /
        </li>

        <li>
          <Link
            href="/blog"
            className="transition-colors hover:text-primary"
          >
            Blog
          </Link>
        </li>

        <li aria-hidden="true" className="text-muted-foreground/60">
          /
        </li>

        <li>
          <Link
            href={`/blog?category=${encodeURIComponent(
              article.category
            )}`}
            className="transition-colors hover:text-primary"
          >
            {article.category}
          </Link>
        </li>

        <li aria-hidden="true" className="text-muted-foreground/60">
          /
        </li>

        <li
          aria-current="page"
          className="max-w-[16rem] truncate font-medium text-foreground sm:max-w-none"
        >
          {article.title}
        </li>
      </ol>
    </nav>
  );
}

/* --------------------------------------------------
   Article Hero
-------------------------------------------------- */

function ArticleHero({ article }) {
  const readingTime =
    article.readingTime || estimateReadingTime(article.content);

  return (
    <header className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-5">
          <span className="inline-flex border-y border-primary/40 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {article.category}
          </span>

          <h1 className="mt-6 text-4xl font-medium leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              {article.author || "VastuVeda"}
            </span>

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-primary/60"
            />

            <time dateTime={article.publishedAt}>
              {formatBlogDate(article.publishedAt)}
            </time>

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-primary/60"
            />

            <span>{readingTime}</span>
          </div>

          {article.updatedAt &&
            article.updatedAt !== article.publishedAt && (
              <p className="mt-3 text-xs text-muted-foreground">
                Updated {formatBlogDate(article.updatedAt)}
              </p>
            )}
        </div>

        <figure className="lg:col-span-7">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/60 bg-card divine-shadow">
            <Image
              src={article.coverImage}
              alt={article.imageAlt || article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>

          {article.imageCaption && (
            <figcaption className="mt-3 text-sm text-muted-foreground">
              {article.imageCaption}
            </figcaption>
          )}
        </figure>
      </div>
    </header>
  );
}

/* --------------------------------------------------
   Article Layout
-------------------------------------------------- */

function ArticleLayout({ article, toc }) {
  return (
    <section className="border-y border-border/60 bg-secondary/25 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <ArticleContent article={article} />

        <ArticleSidebar article={article} toc={toc} />
      </div>
    </section>
  );
}

/* --------------------------------------------------
   Article Content
-------------------------------------------------- */

function ArticleContent({ article }) {
  return (
    <article className="min-w-0 lg:col-span-8">
      <div className="max-w-3xl space-y-8">
        {article.content.map((block, index) => (
          <ContentBlock
            key={`${block.type}-${index}`}
            block={block}
          />
        ))}
      </div>
    </article>
  );
}

function ContentBlock({ block }) {
  if (block.type === "paragraph") {
    return (
      <p className="text-lg leading-8 text-foreground/85">
        {block.text}
      </p>
    );
  }

  if (block.type === "heading") {
    const id = slugifyForPage(block.text);

    if (block.level === 3) {
      return (
        <h3
          id={id}
          className="scroll-mt-28 pt-4 text-2xl font-medium leading-tight text-foreground"
        >
          {block.text}
        </h3>
      );
    }

    return (
      <h2
        id={id}
        className="scroll-mt-28 pt-8 text-3xl font-medium leading-tight text-foreground"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-3 border-l border-primary/35 pl-6 text-base leading-7 text-muted-foreground">
        {block.items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="relative pl-5 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "tip") {
    return (
      <aside className="border-y border-primary/30 bg-background/70 px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {block.title}
        </p>

        <p className="mt-3 text-base leading-7 text-foreground">
          {block.text}
        </p>
      </aside>
    );
  }

  if (block.type === "image") {
    return (
      <figure className="py-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 bg-card">
          <Image
            src={block.src}
            alt={block.alt || ""}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {block.alt && (
          <figcaption className="mt-3 text-sm text-muted-foreground">
            {block.alt}
          </figcaption>
        )}
      </figure>
    );
  }

  if (block.type === "links") {
    return (
      <div className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-3">
        {block.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group bg-card p-5 transition-colors hover:bg-background"
          >
            <span className="text-sm font-medium text-foreground group-hover:text-primary">
              {link.label}
            </span>

            <span className="mt-4 block text-sm text-primary">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    );
  }

  return null;
}

/* --------------------------------------------------
   Table of Contents
-------------------------------------------------- */

function ArticleTableOfContents({ toc }) {
  if (!toc?.length) return null;

  return (
    <nav aria-label="Article sections" className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        In this article
      </p>

      <ol className="space-y-2 text-sm text-muted-foreground">
        {toc.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="transition-colors hover:text-primary"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* --------------------------------------------------
   Sidebar
-------------------------------------------------- */

function ArticleSidebar({ article, toc }) {
  return (
    <aside className="lg:col-span-4">
      <div className="space-y-6 lg:sticky lg:top-28">
        {toc?.length > 0 && (
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <ArticleTableOfContents toc={toc} />
          </div>
        )}

        {article.relatedTool && (
          <SidebarLinkCard
            title={article.relatedTool.label}
            text={article.relatedTool.text}
            href={article.relatedTool.href}
          />
        )}

        {article.relatedGuide && (
          <SidebarLinkCard
            title={article.relatedGuide.label}
            text={article.relatedGuide.text}
            href={article.relatedGuide.href}
          />
        )}

        <div className="rounded-xl bg-primary p-6 text-primary-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            Personal reading
          </p>

          <h2 className="mt-4 text-2xl font-medium">
            Need this read for your own home?
          </h2>

          <p className="mt-3 text-sm leading-6 text-primary-foreground/80">
            Share your floor plan and questions, and get a guided
            interpretation for your actual space.
          </p>

          <Link
            href="/consultation"
            className="mt-6 inline-flex items-center rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-brand-cream"
          >
            Book consultation →
          </Link>
        </div>
      </div>
    </aside>
  );
}

function SidebarLinkCard({ title, text, href }) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-border/60 bg-background p-6 transition-colors hover:bg-card"
    >
      <p className="text-sm font-medium text-foreground group-hover:text-primary">
        {title}
      </p>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {text}
      </p>

      <span className="mt-5 inline-flex text-sm font-medium text-primary">
        Explore →
      </span>
    </Link>
  );
}

/* --------------------------------------------------
   Related Articles
-------------------------------------------------- */

function RelatedArticles({ articles, category }) {
  if (!articles?.length) return null;

  return (
    <section
      aria-labelledby="related-articles-heading"
      className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Related reading
            </p>

            <h2
              id="related-articles-heading"
              className="mt-3 text-3xl font-medium text-foreground sm:text-4xl"
            >
              Continue from the same foundation
            </h2>
          </div>

          <Link
            href={`/blog?category=${encodeURIComponent(category)}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            View {category} articles →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block"
            >
              <article className="h-full border-b border-border/60 pb-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 bg-card">
                  <Image
                    src={article.coverImage}
                    alt={article.imageAlt || article.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.025]"
                  />
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {article.category}
                </p>

                <h3 className="mt-2 text-xl font-medium leading-snug text-foreground group-hover:text-primary">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {article.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   Consultation Bridge
-------------------------------------------------- */

function ConsultationBridge({ article }) {
  return (
    <section className="border-y border-border/60 bg-ivory-pattern px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            From article to your home
          </p>

          <h2 className="mt-3 text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Want to understand this for your own{" "}
            {article.category.toLowerCase()} context?
          </h2>
        </div>

        <div className="lg:col-span-5">
          <p className="leading-relaxed text-muted-foreground">
            General guidance is a starting point. A consultation reads
            your actual plan, orientation, light and constraints before
            suggesting practical next steps.
          </p>

          <Link
            href="/consultation"
            className="mt-7 inline-flex items-center rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a consultation →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   Final CTA
-------------------------------------------------- */

function BlogFinalCTA() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-border/60 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            VastuVeda Journal
          </p>

          <h2 className="mt-3 text-2xl font-medium text-foreground">
            Keep learning with calm, practical Vastu guidance.
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/learn/fundamentals"
            className="inline-flex rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Learn fundamentals
          </Link>

          <Link
            href="/tools"
            className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore tools
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   Utility
-------------------------------------------------- */

function slugifyForPage(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}