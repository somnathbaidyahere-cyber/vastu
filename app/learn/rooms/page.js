import RoomsHero from "@/components/learn/rooms/RoomsHero";
import HomeAsSystem from "@/components/learn/rooms/HomeAsSystem";
import RoomExplorer from "@/components/learn/rooms/RoomExplorer";
import RoomRelationship from "@/components/learn/rooms/RoomRelationship";
import PracticalReading from "@/components/learn/rooms/PracticalReading";
import RoomsVisualBreak from "@/components/learn/rooms/RoomsVisualBreak";
import RoomDeepDive from "@/components/learn/rooms/RoomDeepDive";
import LearnNavigation from "@/components/learn/rooms/LearnNavigation";

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