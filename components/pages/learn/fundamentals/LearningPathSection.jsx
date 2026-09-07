import SectionHeader from "./SectionHeader";
import { learningPath } from "@/data/fundamentals";

export default function LearningPathSection() {
  return (
    <section
      id="start-learning"
      className="relative scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28 overflow-hidden"
    >
      {/* Subtle Ambient Background Gradient (Optional for depth) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-linear(ellipse_at_top,_var(--tw-linear-stops))] from-primary/5 via-transparent to-transparent opacity-70" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="section-badge">The learning path</span>
    
          <h2 className="section-heading">Five readings, in order</h2>

          <p className="section-description">
            Each one builds on the last. Together they take roughly an evening
            and leave you able to hold a conversation about any plan.
          </p>
        </div>

        {/* Reading List */}
        <ol className="mt-16 divide-y divide-border/60 border-y border-border/60">
          {learningPath.map((item) => (
            <li
              key={item.n}
              className="group relative transition-all duration-300 hover:bg-muted/30"
            >
              {/* Subtle Left Accent Line on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <a
                href={item.href || "#"}
                className="grid gap-4 py-8 px-4 sm:grid-cols-12 sm:items-center sm:gap-8 sm:px-6"
              >
                {/* Numbering */}
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/80 group-hover:text-primary sm:col-span-1">
                  {item.n}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary sm:col-span-4">
                  {item.title}
                </h3>

                {/* Body Description */}
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-200 group-hover:text-foreground/90 sm:col-span-5">
                  {item.body}
                </p>

                {/* Meta & Arrow Indicator */}
                <div className="flex items-center justify-between gap-2 sm:col-span-2 sm:justify-end">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/80 transition-colors group-hover:text-foreground">
                    {item.meta}
                  </span>

                  {/* Animated Trailing Arrow */}
                  <svg
                    className="h-4 w-4 transform text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-primary sm:block hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
