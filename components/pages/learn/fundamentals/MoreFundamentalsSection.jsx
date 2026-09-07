import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/fundamentals";

export default function MoreFundamentalsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl"><span className="text-sm font-medium uppercase tracking-widest text-primary">More fundamentals</span><h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">Short reads around the basics</h2></div>
          <Link href="/learn" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">All chapters <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {articles.map((article) => <article key={article.title} className="group"><div className="overflow-hidden rounded-2xl border border-border/60"><Image src={article.img} alt={article.alt} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div><p className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary">{article.kicker}</p><h3 className="mt-2 text-lg font-medium text-foreground">{article.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{article.body}</p></article>)}
        </div>
      </div>
    </section>
  );
}
