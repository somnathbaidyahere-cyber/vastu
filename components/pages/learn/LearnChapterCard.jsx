import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LearnChapterCard({
  chapter,
  featured = false,
}) {
  const Icon = chapter.icon;

  return (
    <Link
      href={chapter.href}
      className={[
        "group flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:shadow-divine-glow",
        featured
          ? "border-primary/25 bg-secondary/60 lg:col-span-3 lg:flex-row lg:items-center lg:gap-12"
          : "border-border/60 bg-card hover:border-primary/30 hover:bg-secondary/40",
      ].join(" ")}
    >
      <div className={featured ? "lg:w-1/2" : ""}>
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-5 w-5" />
          </span>

          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {chapter.kicker}
          </span>
        </div>

        <h3
          className={[
            "mt-5 font-medium text-foreground",
            featured ? "text-3xl sm:text-4xl" : "text-xl",
          ].join(" ")}
        >
          {chapter.name}
        </h3>

        <p className="mt-1 text-sm italic text-primary">
          {chapter.sanskrit}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {chapter.blurb}
        </p>
      </div>

      <div
        className={featured ? "mt-8 lg:mt-0 lg:w-1/2" : "mt-6"}
      >
        <ul className={`space-y-2 ${featured? "":"border-t border-border/60"}  pt-5`}>
          {chapter.reads.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
              {item}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Read chapter

          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}