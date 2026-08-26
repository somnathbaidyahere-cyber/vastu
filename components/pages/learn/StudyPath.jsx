import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { studyPath } from "@/data/learnData";

export default function StudyPath() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Suggested order
          </span>

          <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">
            A four-step study path
          </h2>

          <p className="mt-4 text-muted-foreground">
            This is the sequence a traditional teacher follows — frame first,
            detail last. Each step takes about an evening.
          </p>
        </div>

        <ol className="lg:col-span-8">
          {studyPath.map((step, index) => (
            <li
              key={step.step}
              className={[
                "flex gap-6 py-7",
                index > 0 ? "border-t border-border/60" : "",
              ].join(" ")}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-medium text-primary">
                {step.step}
              </span>

              <div>
                <h3 className="text-lg font-medium text-foreground">
                  {step.title}
                </h3>

                <p className="mt-1 text-muted-foreground">
                  {step.body}
                </p>

                <Link
                  href={step.href}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Go to chapter
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}