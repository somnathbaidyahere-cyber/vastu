import Breadcrumbs from "@/components/pages/learn/fundamentals/Breadcrumbs";
import FundamentalsHero from "@/components/pages/learn/fundamentals/FundamentalsHero";
import IntroductionSection from "@/components/pages/learn/fundamentals/IntroductionSection";
import LearningPathSection from "@/components/pages/learn/fundamentals/LearningPathSection";
import CoreConceptsSection from "@/components/pages/learn/fundamentals/CoreConceptsSection";
import DirectionsSection from "@/components/pages/learn/fundamentals/DirectionsSection";
import InteractiveToolsSection from "@/components/pages/learn/fundamentals/InteractiveToolsSection";
import MoreFundamentalsSection from "@/components/pages/learn/fundamentals/MoreFundamentalsSection";
import FinalCTASection from "@/components/pages/learn/fundamentals/FinalCTASection";
import FAQ from "@/components/ui/FAQ";
import { faqs, learningPath } from "@/data/fundamentals";

import JsonLd from "@/components/seo/JsonLd";
import {
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/seo/schemas";
import { seoConfig } from "@/lib/seo/config";

const pageTitle = "Vastu Shastra Fundamentals — Learn the Basics";

const pageDescription =
  "Learn the fundamentals of Vastu Shastra, including the Vastu Purusha Mandala, Brahmasthan, directional axes, and the basic principles of spatial planning.";

const canonicalUrl = `${seoConfig.siteUrl}/learn/fundamentals`;

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/learn/fundamentals",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/learn/fundamentals",
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

export default function FundamentalsPage() {
    const fundamentalsSchema = getWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Vastu Shastra Fundamentals",
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
      name: "Vastu Shastra Fundamentals",
      url: canonicalUrl,
    },
  ]);

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [fundamentalsSchema, breadcrumbSchema],
  };

  return (
    <>
     <JsonLd data={pageSchema} />

        <main className="min-h-screen bg-background">
      <Breadcrumbs />
      <FundamentalsHero />
      <IntroductionSection />
      <LearningPathSection />
      <CoreConceptsSection />
      <DirectionsSection />
      <InteractiveToolsSection />
      <MoreFundamentalsSection />
      <FAQ faqs={faqs} />
      <FinalCTASection />
    </main>

    </>

  );
}
