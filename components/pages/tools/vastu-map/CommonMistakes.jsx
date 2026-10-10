import { TriangleAlert, X } from "lucide-react";
import SectionLabel from "../../../ui/SectionLabel";

const mistakes = [
  "Assuming the top of every floor plan is North.",
  "Using the entrance direction as the direction of the entire home.",
  "Mapping zones before establishing a reliable North reference.",
  "Assuming one room's direction represents the whole property.",
  "Treating a simplified 3×3 map as a complete Vastu assessment.",
];

export default function CommonMistakes() {
  return (
    
<section
  aria-labelledby="common-map-mistakes-heading"
  className="bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
>
  <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-16">
    {/* Intro */}
    <div className="lg:col-span-4">
      <div
        aria-hidden="true"
        className="mt-6 flex h-11 w-11 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-accent"
      >
        <TriangleAlert className="h-5 w-5" />
      </div>

      <h2
        id="common-map-mistakes-heading"
        className="section-heading"
      >
        Common map mistakes
      </h2>

      <p className="section-description">
        A correct directional reference matters more than a complicated
        interpretation.
      </p>
    </div>

    {/* Mistakes */}
    <div className="lg:col-span-8">
      <ul className="divide-y divide-border border-y border-border">
        {mistakes.map((mistake, index) => (
          <li
            key={mistake}
            className="flex items-start gap-5 py-5"
          >
            <span
              aria-hidden="true"
              className="shrink-0 font-heading text-lg text-primary/45"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <X
              aria-hidden="true"
              className="mt-1 h-4 w-4 shrink-0 text-orange-400"
            />

            <span className="min-w-0 text-foreground/85">
              {mistake}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

  );
}
