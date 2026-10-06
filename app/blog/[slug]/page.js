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

import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getBlogPostingSchema } from "@/lib/seo/schemas";
import { seoConfig } from "@/lib/seo/config";

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
      title: "Article unavailable",
      description: "This VastuGuru article is unavailable.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seo = getSeoForBlog(article);
  console.log(seo);
  

  const canonicalUrl = `${seoConfig.siteUrl}/blog/${article.slug}`;

  const imageUrl = article.coverImage
    ? article.coverImage.startsWith("http")
      ? article.coverImage
      : `${seoConfig.siteUrl}${article.coverImage}`
    : `${seoConfig.siteUrl}/og/blog.jpg`;

  return {
    title: seo.title,
    description: seo.description,

    alternates: {
      canonical: `/blog/${article.slug}`,
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

      siteName: seoConfig.siteName,
      type: "article",
      locale: seoConfig.locale,

      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,

      authors: article.author ? [article.author] : undefined,
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

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;

  const article = await getBlogBySlug(slug);
  

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedBlogs(article);

  const toc = getArticleHeadings(article.body || []);

  const canonicalUrl = `${seoConfig.siteUrl}/blog/${article.slug}`;

  const imageUrl = article.coverImage
  ? article.coverImage.startsWith("http")
    ? article.coverImage
    : `${seoConfig.siteUrl}${article.coverImage}`
  : `${seoConfig.siteUrl}/og/blog.jpg`;

  const blogPostingSchema = getBlogPostingSchema({
    article,
    canonicalUrl,
    imageUrl,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    {
      name: "Home",
      url: seoConfig.siteUrl,
    },
    {
      name: "Blog",
      url: `${seoConfig.siteUrl}/blog`,
    },
    {
      name: article.title,
      url: canonicalUrl,
    },
  ]);

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [blogPostingSchema, breadcrumbSchema],
  };

  return (
    <>
      <JsonLd data={pageSchema} />

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
