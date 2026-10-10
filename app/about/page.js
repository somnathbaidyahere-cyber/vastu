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

import JsonLd from "@/components/seo/JsonLd";
import { getWebPageSchema } from "@/lib/seo/schemas";
import { seoConfig } from "@/lib/seo/config";

const pageTitle = "About Vastu Guru — Our Approach to Vastu";

const pageDescription =
  "Learn about Vastu Guru, our approach to Vastu, and how we bring traditional principles into a practical understanding of modern homes and living spaces.";

const canonicalUrl = `${seoConfig.siteUrl}/about`;

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/about",
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

export default function AboutPage() {
  const aboutSchema = getWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "About Vastu Guru",
    description: pageDescription,
  });

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [aboutSchema],
  };

  return (
    <>
      <JsonLd data={pageSchema} />

      <main className="min-h-screen bg-background">
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
      </main>
    </>
  );
}
