import { client } from "@/lib/sanity/client";

import {
  blogBySlugQuery,
  publishedBlogsQuery,
} from "./blog/queries";

// --------------------------------------------------
// Fetch published articles
// --------------------------------------------------

export async function getPublishedBlogs() {
  return client.fetch(publishedBlogsQuery);
}

// --------------------------------------------------
// Fetch a single article by slug
// --------------------------------------------------

export async function getBlogBySlug(slug) {
  return client.fetch(blogBySlugQuery, { slug });
}

// --------------------------------------------------
// Get related articles
// --------------------------------------------------

export async function getRelatedBlogs(article, limit = 3) {
  if (!article) return [];

  // Related articles are already resolved
  // through relatedArticles[]-> in GROQ.
  const preferred = (article.relatedArticles || [])
    .filter(Boolean)
    .filter((item) => item.slug !== article.slug);

  const publishedBlogs = await getPublishedBlogs();

  const categoryFallback = publishedBlogs.filter(
    (blog) =>
      blog.slug !== article.slug &&
      blog.category === article.category &&
      !preferred.some((item) => item.slug === blog.slug)
  );

  const generalFallback = publishedBlogs.filter(
    (blog) =>
      blog.slug !== article.slug &&
      !preferred.some((item) => item.slug === blog.slug) &&
      !categoryFallback.some((item) => item.slug === blog.slug)
  );

  return [
    ...preferred,
    ...categoryFallback,
    ...generalFallback,
  ].slice(0, limit);
}

// --------------------------------------------------
// Format article date
// --------------------------------------------------

export function formatBlogDate(dateValue) {
  if (!dateValue) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateValue));
}

// --------------------------------------------------
// Create a slug from text
// --------------------------------------------------

export function slugifyText(text = "") {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// --------------------------------------------------
// Extract plain text from a Portable Text block
// --------------------------------------------------

function getBlockText(block) {
  if (!block?.children) return "";

  return block.children
    .map((child) => child.text || "")
    .join("");
}

// --------------------------------------------------
// Get H2 headings for the table of contents
// --------------------------------------------------

export function getArticleHeadings(body = []) {
  const usedIds = new Map();

  return body
    .filter(
      (block) =>
        block?._type === "block" &&
        block.style === "h2"
    )
    .map((block) => {
      const text = getBlockText(block);
      const baseId = slugifyText(text) || "section";

      const count = usedIds.get(baseId) || 0;
      usedIds.set(baseId, count + 1);

      const id =
        count === 0
          ? baseId
          : `${baseId}-${count + 1}`;

      return {
        id,
        text,
      };
    })
    .filter((heading) => heading.text);
}

// --------------------------------------------------
// SEO fallback
// --------------------------------------------------

export function getSeoForBlog(article) {
  return {
    title:
      article.seo?.title ||
      `${article.title} | VastuVeda`,

    description:
      article.seo?.description ||
      article.excerpt ||
      "",
  };
}

// --------------------------------------------------
// Estimate reading time from Portable Text
// --------------------------------------------------

export function estimateReadingTime(body = []) {
  const text = body
    .filter((block) => block?._type === "block")
    .map(getBlockText)
    .join(" ");

  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return `${Math.max(
    1,
    Math.ceil(words.length / 180)
  )} min read`;
}