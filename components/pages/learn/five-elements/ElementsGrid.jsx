import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { elements } from "@/data/fiveElements";

export default function ElementsGrid() {
  return (
    <section
      id="elements"
      className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            The five
          </span>

          <h2 className="mt-3 text-3xl font-medium sm:text-4xl">
            Panchabhutas
          </h2>

          <p className="mt-4 text-muted-foreground">
            Explore each element and how Vastu traditionally understands it.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {elements.map((element) => {
            const Icon = element.icon;

            return (
              <Link
                key={element.slug}
                href={`/learn/elements/${element.slug}`}
                className="group bg-card p-8 transition-colors hover:bg-secondary/60"
              >
                <Icon
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-lg font-medium">
                  {element.name}
                </h3>

                <p className="text-sm italic text-primary">
                  {element.sanskrit}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {element.meaning}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}