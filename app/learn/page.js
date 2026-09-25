import LearnHero from "@/components/pages/learn/LearnHero";
import LearnChapters from "@/components/pages/learn/LearnChapters";
import ElementsReference from "@/components/pages/learn/ElementsReference";
import StudyPath from "@/components/pages/learn/StudyPath";
import SutraSection from "@/components/pages/learn/SutraSection";
import LearnCTA from "@/components/pages/learn/LearnCTA";
import FAQ from "@/components/ui/FAQ";
import { faqs } from "@/data/learnData";

import JsonLd from "@/components/seo/JsonLd";
import { getWebPageSchema } from "@/lib/seo/schemas";
import { schemaIds } from "@/lib/seo/ids";
import { seoConfig } from "@/lib/seo/config";

const pageTitle = "Learn Vastu — Principles, Guidance & Insights | VastuGuru";

const pageDescription =
  "Learn the fundamentals of Vastu through practical explanations of directions, elements, rooms, and living spaces.";

const canonicalUrl = `${seoConfig.siteUrl}/learn`;

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/learn",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/learn",
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

export default function LearnPage() {
    const learnSchema = getWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Learn Vastu",
    description: pageDescription,
  });

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [learnSchema],
  };
  return (
    <main className="min-h-screen bg-background">
       <JsonLd data={pageSchema} />
       
      <LearnHero />
      <LearnChapters />
      <ElementsReference />
      <StudyPath />
      <SutraSection />
      <FAQ faqs={faqs} />
      <LearnCTA />
    </main>
  );
}