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
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-16">

        {/* Intro */}
        <div className="lg:col-span-4">
          {/* <SectionLabel number="07">
            Read carefully
          </SectionLabel> */}

          <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-accent">
            <TriangleAlert className="h-5 w-5" />
          </div>

          <h2 className="section-heading">
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
                className="group flex items-center gap-5 py-5"
              >
                {/* Number */}
                <span className="w-7 shrink-0 font-heading text-lg text-primary/30 transition-colors group-hover:text-primary/60">
                  0{index + 1}
                </span>

                {/* Icon */}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-primary-foreground">
                  <X className="h-3.5 w-3.5 group-hover:text-orange-400" />
                </span>

                {/* Text */}
                <span className="text-sm leading-relaxed text-foreground/85 sm:text-base">
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