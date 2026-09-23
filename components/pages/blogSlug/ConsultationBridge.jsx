import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ConsultationBridge({ article }) {
  return (
    <section className="border-y border-border/60 bg-ivory-pattern px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            From article to your home
          </p>

          <h2 className="mt-3 text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Want to understand this for your own{" "}
            {(article?.category || "Vastu").toLowerCase()} context?
          </h2>
        </div>

        <div className="lg:col-span-5">
          <p className="leading-relaxed text-muted-foreground">
            General guidance is a starting point. A consultation reads your
            actual plan, orientation, light and constraints before suggesting
            practical next steps.
          </p>

          <Link
            href="/consultation"
            className="group mt-7 inline-flex items-center rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a consultation{" "}
            <ArrowRight className="h-4 w-4 transition-all duration-150 group-hover:translate-x-1 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}