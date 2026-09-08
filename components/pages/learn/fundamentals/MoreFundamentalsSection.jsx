import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { articles } from "@/data/fundamentals";

export default function MoreFundamentalsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="section-badge">More fundamentals</span>
            <h2 className="section-heading">Short reads around the basics</h2>
          </div>
          <Link
            href="/learn"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            All chapters{" "}
            <ArrowRight className="h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.title}
              href={`/learn/fundamentals/${article.slug}`}
              className="group flex h-full flex-col"
            >
              <div className="overflow-hidden rounded-2xl border border-border/60">
                <Image
                  src={article.img}
                  alt={article.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-primary">
                {article.kicker}
              </p>

              <h3 className="mt-2 min-h-[3.5rem] text-lg font-medium leading-7 text-foreground">
                {article.title}
              </h3>

              <p className="mt-2 min-h-[5rem] text-sm leading-relaxed text-muted-foreground">
                {article.body}
              </p>

              <span className="pb-3 pt-4 mt-auto inline-flex w-full items-center justify-between gap-2 text-xs md:text-base text-accent border-b border-surface-muted group-hover:border-foreground/30  group-hover:text-primary ">
                Read the article
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
