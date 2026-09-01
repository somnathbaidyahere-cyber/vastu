import CompassHero from "@/components/pages/tools/compass/CompassHero";
import FindCenterSection from "@/components/pages/tools/compass/FindCenterSection";
import CompassInstructions from "@/components/pages/tools/compass/CompassInstructions";
import DirectionExplorer from "@/components/pages/tools/compass/DirectionExplorer";
import CommonMistakes from "@/components/pages/tools/compass/CommonMistakes";
import FreeVsPersonalized from "@/components/pages/tools/compass/FreeVsPersonalized";
import { faqs } from "@/data/vastuCompassData";
import FAQ from "@/components/ui/FAQ";
import ConsultationCTA from "@/components/pages/tools/compass/ConsultationCTA";

export const metadata = {
  title: "Vastu Compass Guide — Find Your Home's Directions | VastuGuru",
  description:
    "Learn how to find your home's center, establish North with your smartphone compass, and understand the eight Vastu directions.",
};

export default function CompassPage() {
  return (
    <div className="min-h-screen bg-background">
      <CompassHero />

      <FindCenterSection />

      <CompassInstructions />

      <DirectionExplorer />

      <CommonMistakes />

      <FreeVsPersonalized />

      <FAQ faqs={faqs} />

      <ConsultationCTA />
    </div>
  );
}
