// components/mandala/mandala-cta.jsx

import { Home, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MandalaCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-secondary/40 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div
        className="absolute bottom-[-18rem] left-1/2 aspect-square w-[620px] -translate-x-1/2 rotate-45 border border-primary/15 sm:w-[760px] lg:left-[75%] lg:w-[900px]"
        aria-hidden="true"
      >
        <div className="absolute inset-[12%] grid grid-cols-3 border border-primary/15">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="border border-primary/10" />
          ))}
        </div>

        <div className="absolute left-[18%] top-[18%] h-[64%] w-[64%] -rotate-45 border-2 border-primary/20">
          <div className="absolute left-[12%] top-[12%] h-[36%] w-[40%] border border-primary/15" />
          <div className="absolute bottom-[12%] right-[12%] h-[36%] w-[40%] border border-primary/15" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Home className="h-8 w-8 text-primary" />

          <h2 className="mt-7 text-4xl font-medium text-foreground sm:text-6xl">
            See your home with a deeper understanding.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Carry this spatial perspective into the plan you have already
            explored.
          </p>

          <Button asChild size="lg" className="mt-9 rounded-full px-7">
            <a href="/tools/map">
              Explore My Home Map
              <MoveUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// NAMED EXPORT