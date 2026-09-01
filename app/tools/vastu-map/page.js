import VastuMapHero from "@/components/pages/tools/vastu-map/VastuMapHero";
import MapIntroduction from "@/components/pages/tools/vastu-map/MapIntroduction";
import OrientHome from "@/components/pages/tools/vastu-map/OrientHome";
import VastuMapExplorer from "@/components/pages/tools/vastu-map/VastuMapExplorer";
import CenterZone from "@/components/pages/tools/vastu-map/CenterZone";
import RoomAssociations from "@/components/pages/tools/vastu-map/RoomAssociations";
import ApplyToYourHome from "@/components/pages/tools/vastu-map/ApplyToYourHome";
import CommonMistakes from "@/components/pages/tools/vastu-map/CommonMistakes";
import FreeVsPersonalized from "@/components/pages/tools/vastu-map/FreeVsPersonalized";
import VastuMapFAQ from "@/components/pages/tools/vastu-map/VastuMapFAQ";
import ConsultationCTA from "@/components/pages/tools/vastu-map/ConsultationCTA";
import MapOrientation from "@/components/pages/tools/vastu-map/MapOrientation";

export const metadata = {
  title: "Vastu Map — Explore the Directions of Your Home | LeadWala",
  description:
    "Explore the eight directional zones of your home and learn traditional Vastu associations with our interactive Vastu Map.",
};

export default function VastuMapPage() {
  return (
    <main>
      <VastuMapHero />

      {/* <MapOrientation/> */}

      {/* <MapIntroduction /> */}

      <OrientHome />

      <VastuMapExplorer />

      <CenterZone />

      <RoomAssociations />

      <ApplyToYourHome />

      <CommonMistakes />

      <FreeVsPersonalized />

      <VastuMapFAQ />

      <ConsultationCTA />
    </main>
  );
}