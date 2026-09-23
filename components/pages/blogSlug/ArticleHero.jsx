import Image from "next/image";
import { formatBlogDate, estimateReadingTime } from "@/lib/blog";

export default function ArticleHero({ article }) {
  const readingTime = estimateReadingTime(article.body || []);

  return (
    <header className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-5">
          <span className="inline-flex border-y border-primary/40 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {article.category || "Vastu"}
          </span>

          <h1 className="hero-heading">{article.title}</h1>

          {article.excerpt && (
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              {article.author || "VastuGuru"}
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

          {article.updatedAt && article.updatedAt !== article.publishedAt && (
            <p className="mt-3 text-xs text-muted-foreground">
              Updated {formatBlogDate(article.updatedAt)}
            </p>
          )}
        </div>

        <figure className="lg:col-span-7">
          <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-border/60 bg-muted">
            {article.coverImage ? (
              <Image
                src={article.coverImage}
                alt={article.imageAlt || article.title}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
                priority
              />
            ) : (
              <div className="flex h-full min-h-64 items-center justify-center text-sm text-muted-foreground">
                No image available
              </div>
            )}
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
