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

import JsonLd from "@/components/seo/JsonLd";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/seo/schemas";
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

export default function SpacesPage() {
  const spacesSchema = getWebPageSchema({
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
    "@graph": [spacesSchema, breadcrumbSchema],
  };

  return (
    <>
      <JsonLd data={pageSchema} />

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
    </>
  );
}
