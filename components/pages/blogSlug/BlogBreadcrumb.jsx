import Link from "next/link";

export default function BlogBreadcrumb({ article }) {
  return (
    <nav aria-label="Breadcrumb" className="px-4 py-5 sm:px-6 lg:px-8">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
        </li>

        <li aria-hidden="true" className="text-muted-foreground/60">
          /
        </li>

        <li>
          <Link href="/blog" className="transition-colors hover:text-primary">
            Blog
          </Link>
        </li>

        <li aria-hidden="true" className="text-muted-foreground/60">
          /
        </li>

        <li>
          <Link
            href={`/blog?category=${encodeURIComponent(article.category)}`}
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