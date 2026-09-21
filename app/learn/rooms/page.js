import RoomsHero from "@/components/pages/learn/rooms/RoomsHero";
import HomeAsSystem from "@/components/pages/learn/rooms/HomeAsSystem";
import RoomExplorer from "@/components/pages/learn/rooms/RoomExplorer";
import RoomRelationship from "@/components/pages/learn/rooms/RoomRelationship";
import PracticalReading from "@/components/pages/learn/rooms/PracticalReading";
import RoomsVisualBreak from "@/components/pages/learn/rooms/RoomsVisualBreak";
import RoomDeepDive from "@/components/pages/learn/rooms/RoomDeepDive";
import LearnNavigation from "@/components/pages/learn/rooms/LearnNavigation";

export default function RoomsPage() {
  return (
    <main>
      
      <RoomsHero />
      <HomeAsSystem />
      <RoomExplorer />
      <RoomRelationship />
      <PracticalReading />
      <RoomsVisualBreak />
      <RoomDeepDive />
      <LearnNavigation />
    </main>
  );
}