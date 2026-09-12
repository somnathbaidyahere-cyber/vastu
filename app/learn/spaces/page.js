import SpacesHero from "@/components/pages/learn/spaces/SpacesHero";
import SpacePrinciples from "@/components/pages/learn/spaces/SpacePrinciples";
import ElementsInSpace from "@/components/pages/learn/spaces/ElementsInSpace";
import SpacesByExperience from "@/components/pages/learn/spaces/SpacesByExperience";
import DirectionSpace from "@/components/pages/learn/spaces/DirectionSpace";
import OutsideIn from "@/components/pages/learn/spaces/OutsideIn";
import SpaceMistakes from "@/components/pages/learn/spaces/SpaceMistakes";
import SpaceSystem from "@/components/pages/learn/spaces/SpaceSystem";
import ExploreMore from "@/components/pages/learn/spaces/ExploreMore";
import SpacesCTA from "@/components/pages/learn/spaces/SpacesCTA";

export const metadata = {
  title: "Spaces — Direction, Elements & Experience | VastuVeda",
  description:
    "Explore how direction, natural light, movement, proportion and the five elements shape the experience of space.",
};

export default function SpacesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SpacesHero />

      <SpacePrinciples />

      <ElementsInSpace />

      <SpacesByExperience />

      <DirectionSpace />

      <OutsideIn />

      <SpaceMistakes />

      <SpaceSystem />

      <ExploreMore />

      <SpacesCTA />
    </main>
  );
}