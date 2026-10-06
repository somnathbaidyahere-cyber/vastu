import CompassHero from "@/components/pages/tools/compass/CompassHero";
import FindCenterSection from "@/components/pages/tools/compass/FindCenterSection";
import CompassInstructions from "@/components/pages/tools/compass/CompassInstructions";
import DirectionExplorer from "@/components/pages/tools/compass/DirectionExplorer";
import CommonMistakes from "@/components/pages/tools/compass/CommonMistakes";
import FreeVsPersonalized from "@/components/pages/tools/compass/FreeVsPersonalized";
import { faqs } from "@/data/vastuCompassData";
import FAQ from "@/components/ui/FAQ";
import ConsultationCTA from "@/components/pages/tools/compass/ConsultationCTA";

import JsonLd from "@/components/seo/JsonLd";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/seo/schemas";
import { seoConfig } from "@/lib/seo/config";

const pageTitle = "Vastu Compass — Find Directions for Your Home";

const pageDescription =
  "Use the Vastu Compass to identify true north and explore the sixteen directional zones of your property.";

const canonicalUrl = `${seoConfig.siteUrl}/tools/compass`;

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/tools/compass",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/tools/compass",
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

export default function CompassPage() {
  const compassSchema = getWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Vastu Compass",
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
      name: "Vastu Compass",
      url: canonicalUrl,
    },
  ]);

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [compassSchema, breadcrumbSchema],
  };
  return (
    <>
      <JsonLd data={pageSchema} />

      <main className="min-h-screen bg-background">
        <CompassHero />

        <FindCenterSection />

        <CompassInstructions />

        <DirectionExplorer />

        <CommonMistakes />

        <FreeVsPersonalized />

        <FAQ faqs={faqs} />

        <ConsultationCTA />
      </main>
    </>
  );
}
