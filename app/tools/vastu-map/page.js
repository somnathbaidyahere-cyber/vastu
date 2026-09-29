import VastuMapHero from "@/components/pages/tools/vastu-map/VastuMapHero";
import OrientHome from "@/components/pages/tools/vastu-map/OrientHome";
import VastuMapExplorer from "@/components/pages/tools/vastu-map/VastuMapExplorer";
import CenterZone from "@/components/pages/tools/vastu-map/CenterZone";
import RoomAssociations from "@/components/pages/tools/vastu-map/RoomAssociations";
import ApplyToYourHome from "@/components/pages/tools/vastu-map/ApplyToYourHome";
import CommonMistakes from "@/components/pages/tools/vastu-map/CommonMistakes";
import FreeVsPersonalized from "@/components/pages/tools/vastu-map/FreeVsPersonalized";
import { faqs } from "@/data/vastuMapData";
import FAQ from "@/components/ui/FAQ";
import ConsultationCTA from "@/components/pages/tools/vastu-map/ConsultationCTA";

import JsonLd from "@/components/seo/JsonLd";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/seo/schemas";
import { seoConfig } from "@/lib/seo/config";

const pageTitle = "Vastu Map — Explore Vastu Zones on Your Floor Plan";

const pageDescription =
  "Explore Vastu zones across your property with the Interactive Vastu Map and understand how rooms align with different directional sectors.";

const canonicalUrl = `${seoConfig.siteUrl}/tools/vastu-map`;

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/tools/vastu-map",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/tools/vastu-map",
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

export default function VastuMapPage() {
  const mapSchema = getWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Interactive Vastu Map",
    description: pageDescription,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    {
      name: "Home",
      url: seoConfig.siteUrl,
    },
    {
      name: "Tools",
      url: `${seoConfig.siteUrl}/tools`,
    },
    {
      name: "Interactive Vastu Map",
      url: canonicalUrl,
    },
  ]);

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [mapSchema, breadcrumbSchema],
  };

  return (
    <>
      <JsonLd data={pageSchema} />

      <main>
        <VastuMapHero />

        <OrientHome />

        <VastuMapExplorer />

        <CenterZone />

        <RoomAssociations />

        <ApplyToYourHome />

        <CommonMistakes />

        <FreeVsPersonalized />

        <FAQ faqs={faqs} />

        <ConsultationCTA />
      </main>
    </>
  );
}
