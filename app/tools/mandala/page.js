// /tools/mandala.jsx

import  MandalaHero  from "@/components/pages/tools/mandala/MandalaHero";
import  MandalaIntro  from "@/components/pages/tools/mandala/MandalaIntro";
import MandalaFramework from "@/components/pages/tools/mandala/MandalaFramework";
import  ElementsSection  from "@/components/pages/tools/mandala/ElementsSection";
import  Brahmasthan  from "@/components/pages/tools/mandala/Brahmasthan";
import  MandalaPrinciples  from "@/components/pages/tools/mandala/MandalaPrinciples";
import  MandalaOverview  from "@/components/pages/tools/mandala/MandalaOverview";
import  VastuPerspective  from "@/components/pages/tools/mandala/VastuPerspective";
import  MandalaCTA  from "@/components/pages/tools/mandala/MandalaCTA";
import FAQ from "@/components/ui/FAQ";
import { faqs } from "@/data/mandalaData";

export const metadata = {
  title: "Vastu Purusha Mandala — Spatial Philosophy  | VastuGuru",
  description:
    "Explore the Vastu Purusha Mandala as a contemplative framework connecting direction, elements, spatial zones, and the center of the home.",
};


export default function MandalaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <MandalaHero />

      <MandalaIntro />

      <MandalaFramework />

      <ElementsSection />

      <Brahmasthan />

      <MandalaPrinciples />

      <MandalaOverview />

      {/* <VastuPerspective /> */}

      <FAQ faqs={faqs} />

      <MandalaCTA />
    </main>
  );
}

// IMPORTANT:
// Keep this Route export because TanStack Router uses it.
// You do NOT need a default export.