import RoomsHero from "@/components/pages/learn/rooms/RoomsHero";
import HomeAsSystem from "@/components/pages/learn/rooms/HomeAsSystem";
import RoomExplorer from "@/components/pages/learn/rooms/RoomExplorer";
import RoomRelationship from "@/components/pages/learn/rooms/RoomRelationship";
import PracticalReading from "@/components/pages/learn/rooms/PracticalReading";
import RoomsVisualBreak from "@/components/pages/learn/rooms/RoomsVisualBreak";
import RoomDeepDive from "@/components/pages/learn/rooms/RoomDeepDive";
import LearnNavigation from "@/components/pages/learn/rooms/LearnNavigation";

import JsonLd from "@/components/seo/JsonLd";
import {
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/seo/schemas";
import { seoConfig } from "@/lib/seo/config";

const pageTitle = "Vastu for Spaces — Room-by-Room Guidance";

const pageDescription =
  "Explore practical Vastu guidance for kitchens, bedrooms, pooja rooms, bathrooms, staircases, studies, and other spaces in the home.";

const canonicalUrl = `${seoConfig.siteUrl}/learn/spaces`;

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/learn/spaces",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/learn/spaces",
    siteName: seoConfig.siteName,
    type: "website",
    locale: seoConfig.locale,
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RoomsPage() {

    const roomsSchema = getWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Vastu for Spaces",
    description: pageDescription,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    {
      name: "Home",
      url: seoConfig.siteUrl,
    },
    {
      name: "Learn",
      url: `${seoConfig.siteUrl}/learn`,
    },
    {
      name: "Vastu for Spaces",
      url: canonicalUrl,
    },
  ]);

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [roomsSchema, breadcrumbSchema],
  };

  return (
    <main>
       <JsonLd data={pageSchema} />
      
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