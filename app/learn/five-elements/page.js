import Link from "next/link";
import { ChevronRight } from "lucide-react";

import FiveElementsHero from "@/components/pages/learn/five-elements/FiveElementsHero";
import FiveElementsIntro from "@/components/pages/learn/five-elements/FiveElementsIntro";
import ElementsGrid from "@/components/pages/learn/five-elements/ElementsGrid";
import ElementsRelationship from "@/components/pages/learn/five-elements/ElementsRelationship";
import ElementsInVastu from "@/components/pages/learn/five-elements/ElementsInVastu";
import CourtyardExample from "@/components/pages/learn/five-elements/CourtyardExample";
import LearningNavigation from "@/components/pages/learn/five-elements/LearningNavigation";
import FiveElementsCTA from "@/components/pages/learn/five-elements/FiveElementsCTA";
import FAQ from "@/components/ui/FAQ";
import { faqs } from "@/data/fiveElements";

export default function FiveElementsPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-4 pt-8 sm:px-6 lg:px-8"
      >
        <ol className="mx-auto flex max-w-7xl items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>

          <ChevronRight className="h-3.5 w-3.5 opacity-50" />

          <li>
            <Link href="/learn" className="hover:text-primary">
              Learn
            </Link>
          </li>

          <ChevronRight className="h-3.5 w-3.5 opacity-50" />

          <li aria-current="page" className="font-medium text-foreground">
            Five Elements
          </li>
        </ol>
      </nav>

      <FiveElementsHero />

      <FiveElementsIntro />

      <ElementsGrid />

      <ElementsRelationship />

      <ElementsInVastu />

      <CourtyardExample />

      <FAQ faqs={faqs} />


      <FiveElementsCTA />

    </main>
  );
}