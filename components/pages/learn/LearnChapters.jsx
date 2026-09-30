import LearnChapterCard from "./LearnChapterCard";
import { learnChapters } from "@/data/learnData";

export default function LearnChapters() {
  return (
    <section className="bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="section-badge">
            The four chapters
          </span>

          <h2 className="section-heading">
            From first principles to the room you sleep in
          </h2>

          <p className="section-description">
            Build a foundation in Vastu Shastra before exploring individual
            directions, elements and rooms.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {learnChapters.map((chapter, index) => (
            <LearnChapterCard
              key={chapter.href}
              chapter={chapter}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}