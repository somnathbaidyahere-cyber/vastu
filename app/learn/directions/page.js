import Link from "next/link";
import { ChevronRight } from "lucide-react";

import DirectionsHero from "@/components/pages/learn/directions/DirectionsHero";
import DirectionOrientation from "@/components/pages/learn/directions/DirectionOrientation";
import EightDirections from "@/components/pages/learn/directions/EightDirections";
import DirectionsAtGlance from "@/components/pages/learn/directions/DirectionsAtGlance";
import DirectionDeepDive from "@/components/pages/learn/directions/DirectionDeepDive";
import DirectionsPanchabhuta from "@/components/pages/learn/directions/DirectionsPanchabhuta";
import DirectionsExploreFurther from "@/components/pages/learn/directions/DirectionsExploreFurther";
import  FAQ  from '@/components/ui/FAQ';
import { faqs } from "@/data/directions";

export default function DirectionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-4 pt-8 sm:px-6 lg:px-8"
      >
        <ol className="mx-auto flex max-w-7xl items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-primary"
            >
              Home
            </Link>
          </li>

          <ChevronRight
            className="h-3.5 w-3.5 opacity-50"
            aria-hidden="true"
          />

          <li>
            <Link
              href="/learn"
              className="transition-colors hover:text-primary"
            >
              Learn
            </Link>
          </li>

          <ChevronRight
            className="h-3.5 w-3.5 opacity-50"
            aria-hidden="true"
          />

          <li
            aria-current="page"
            className="font-medium text-foreground"
          >
            Directions
          </li>
        </ol>
      </nav>

      <DirectionsHero />

      <DirectionOrientation />

      <EightDirections />

      <DirectionsAtGlance />

      <DirectionDeepDive />

      <DirectionsPanchabhuta />

      <DirectionsExploreFurther />

      <FAQ faqs={faqs}/>
    </main>
  );
}