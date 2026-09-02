import LearnHero from "@/components/pages/learn/LearnHero";
import LearnChapters from "@/components/pages/learn/LearnChapters";
import ElementsReference from "@/components/pages/learn/ElementsReference";
import StudyPath from "@/components/pages/learn/StudyPath";
import SutraSection from "@/components/pages/learn/SutraSection";
import LearnCTA from "@/components/pages/learn/LearnCTA";
import FAQ from "@/components/ui/FAQ";
import { faqs } from "@/data/learnData";

export const metadata = {
  title: "Learn Vastu — Fundamentals, Elements, Directions & Rooms",
  description:
    "A guided path through Vastu Shastra: core principles, the five elements, the meaning of each direction, and room-by-room guidance for the modern Indian home.",
};

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <LearnHero />
      <LearnChapters />
      <ElementsReference />
      <StudyPath />
      <SutraSection />
      <FAQ faqs={faqs} />
      <LearnCTA />
    </main>
  );
}