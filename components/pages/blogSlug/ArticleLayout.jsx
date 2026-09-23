import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import portableTextComponents from "@/lib/blog/portableTextComponents";

export default function ArticleLayout({ article, toc }) {
  return (
    <section className="border-y border-border/60 bg-foreground-subtle/10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <ArticleContent article={article} />

        <ArticleSidebar article={article} toc={toc} />
      </div>
    </section>
  );
}

function ArticleContent({ article }) {
  if (!article?.body?.length) {
    return (
      <article className="min-w-0 lg:col-span-8">
        <p className="text-muted-foreground">
          This article does not have any content yet.
        </p>
      </article>
    );
  }

  return (
    <article className="min-w-0 lg:col-span-8">
      <div className="max-w-3xl">
        <PortableText
          value={article.body}
          components={portableTextComponents}
        />
      </div>
    </article>
  );
}

function ArticleSidebar({ article, toc }) {
  return (
    <aside className="lg:col-span-4">
      <div className="space-y-6 lg:sticky lg:top-28">
        {toc?.length > 0 && (
          <div className="rounded-xl border border-border-strong/80 bg-card p-6">
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
            Share your floor plan and questions, and get a guided interpretation
            for your actual space.
          </p>

          <Link
            href="/consultation"
            className="group mt-6 inline-flex items-center rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-brand-cream"
          >
            Book consultation{" "}
            <ArrowRight className="h-4 w-4 transition-all duration-150 group-hover:translate-x-1 ml-1" />

          </Link>
        </div>
      </div>
    </aside>
  );
}

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

function SidebarLinkCard({ title, text, href }) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-border/60 bg-background p-6 transition-colors hover:bg-card"
    >
      <p className="text-sm font-medium text-foreground group-hover:text-primary">
        {title}
      </p>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>

      <span className="mt-5 inline-flex text-sm font-medium text-primary">
        Explore →
      </span>
    </Link>
  );
}