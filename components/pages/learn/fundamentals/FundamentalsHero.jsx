import { ArrowRight } from "lucide-react";

export default function FundamentalsHero() {
  return (
    <header className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Chapter one</span>
          <h1 className="mt-5 text-4xl font-medium leading-[1.12] text-foreground sm:text-5xl lg:text-6xl">Vastu Fundamentals</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">The vocabulary and reasoning behind Vastu Shastra, explained without mystification. Start here to understand orientation, the five elements, the grid of padas and the open centre — the ideas every other chapter depends on.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#start-learning" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">Start the path <ArrowRight className="h-4 w-4" /></a>
            <a href="#core-concepts" className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary">Jump to concepts</a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div aria-hidden="true" className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border/60 bg-secondary/40">
            <div className="absolute inset-10 rounded-2xl border border-primary/25" />
            <div className="absolute inset-20 rounded-xl border border-primary/20" />
            <div className="absolute inset-x-10 top-1/2 h-px bg-primary/20" />
            <div className="absolute inset-y-10 left-1/2 w-px bg-primary/20" />
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10" />
            <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}
