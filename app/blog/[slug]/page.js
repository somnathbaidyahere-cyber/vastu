import { notFound } from "next/navigation";

import {
  getArticleHeadings,
  getBlogBySlug,
  getRelatedBlogs,
  getSeoForBlog,
  getPublishedBlogs,
} from "@/lib/blog";

import BlogBreadcrumb from "@/components/pages/blogSlug/BlogBreadcrumb";
import ArticleHero from "@/components/pages/blogSlug/ArticleHero";
import ArticleLayout from "@/components/pages/blogSlug/ArticleLayout";
import RelatedArticles from "@/components/pages/blogSlug/RelatedArticles";
import ConsultationBridge from "@/components/pages/contact/ConsultationBridge";
import BlogFinalCTA from "@/components/pages/blogSlug/function BlogFinalCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

const siteName = "VastuGuru";

const organizationId = `${siteUrl}/#organization`;

// Static Params Useful when blogs are stored locally.

export async function generateStaticParams() {
  const articles = await getPublishedBlogs();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// seo part
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const article = await getBlogBySlug(slug);

  if (!article) {
    return {
      title: "Article unavailable | VastuGuru",
      description: "This VastuGuru article is unavailable.",

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

  //  JSON-LD Helpers
function getAbsoluteImageUrl(imagePath) {
  if (!imagePath) return `${siteUrl}/og/blog.jpg`;

  return imagePath.startsWith("http") ? imagePath : `${siteUrl}${imagePath}`;
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
      item: `${siteUrl}/blog?category=${encodeURIComponent(article.category)}`,
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
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;

  const article = await getBlogBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedBlogs(article);

  const toc = getArticleHeadings(article.body || []);

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

function slugifyForPage(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
