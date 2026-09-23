import Image from "next/image";
import Link from "next/link";

export default function RelatedArticles({ articles, category }) {
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
                <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-border/60 bg-card">
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