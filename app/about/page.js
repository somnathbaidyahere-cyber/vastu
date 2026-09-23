import Hero from "@/components/pages/about/Hero";
import OurBeginning from "@/components/pages/about/OurBeginning";
import VastuReframed from "@/components/pages/about/VastuReframed";
import FiveElementsSpectrum from "@/components/pages/about/FiveElementsSpectrum";
import OurApproach from "@/components/pages/about/OurApproach";
import ConversionOne from "@/components/pages/about/ConversionOne";
import AncientContemporary from "@/components/pages/about/AncientContemporary";
import Philosophy from "@/components/pages/about/Philosophy";
import SpacesWeExplore from "@/components/pages/about/SpacesWeExplore";
import ContinueExploring from "@/components/pages/about/ContinueExploring";
import FinalConversion from "@/components/pages/about/FinalConversion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <OurBeginning />

      <VastuReframed />

      <FiveElementsSpectrum />

      <OurApproach />

      <ConversionOne />

      <AncientContemporary />

      <Philosophy />

      <SpacesWeExplore />

      <ContinueExploring />

      <FinalConversion />
    </div>
  );
}
