import { blogs } from "@/data/blogs";

export function getPublishedBlogs() {
  return blogs.filter((blog) => blog.status === "published");
}

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug && blog.status === "published");
}

export function getRelatedBlogs(article, limit = 3) {
  if (!article) return [];

  const preferred = (article.relatedArticles || [])
    .map((slug) => getBlogBySlug(slug))
    .filter(Boolean);

  const categoryFallback = getPublishedBlogs().filter(
    (blog) => blog.slug !== article.slug && blog.category === article.category && !preferred.some((item) => item.slug === blog.slug)
  );

  const generalFallback = getPublishedBlogs().filter(
    (blog) => blog.slug !== article.slug && !preferred.some((item) => item.slug === blog.slug) && !categoryFallback.some((item) => item.slug === blog.slug)
  );

  return [...preferred, ...categoryFallback, ...generalFallback].slice(0, limit);
}

export function formatBlogDate(dateValue) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateValue));
}

export function slugifyText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function getArticleHeadings(content) {
  return content
    .filter((block) => block.type === "heading" && block.level === 2)
    .map((block) => ({ id: slugifyText(block.text), text: block.text }));
}

export function getSeoForBlog(article) {
  return {
    title: article.seo?.title || `${article.title} | VastuVeda`,
    description: article.seo?.description || article.excerpt,
  };
}

export function estimateReadingTime(content) {
  const words = content
    .flatMap((block) => {
      if (block.text) return block.text.split(/\s+/);
      if (block.items) return block.items.flatMap((item) => item.split(/\s+/));
      return [];
    })
    .filter(Boolean);

  return `${Math.max(1, Math.ceil(words.length / 180))} min read`;
}