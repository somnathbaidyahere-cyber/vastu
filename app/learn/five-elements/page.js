import Link from "next/link";
import { ChevronRight } from "lucide-react";

import FiveElementsHero from "@/components/pages/learn/five-elements/FiveElementsHero";
import FiveElementsIntro from "@/components/pages/learn/five-elements/FiveElementsIntro";
import ElementsGrid from "@/components/pages/learn/five-elements/ElementsGrid";
import ElementsRelationship from "@/components/pages/learn/five-elements/ElementsRelationship";
import ElementsInVastu from "@/components/pages/learn/five-elements/ElementsInVastu";
import CourtyardExample from "@/components/pages/learn/five-elements/CourtyardExample";
import LearningNavigation from "@/components/pages/learn/five-elements/LearningNavigation";
import FiveElementsCTA from "@/components/pages/learn/five-elements/FiveElementsCTA";
import FAQ from "@/components/ui/FAQ";
import { faqs } from "@/data/fiveElements";

import JsonLd from "@/components/seo/JsonLd";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/seo/schemas";
import { seoConfig } from "@/lib/seo/config";

const pageTitle = "Five Elements of Vastu — Pancha Bhuta Explained";

const pageDescription =
  "Learn how the five elements of Vastu — Earth, Water, Fire, Air, and Space — relate to directions, spaces, and traditional Vastu principles.";

const canonicalUrl = `${seoConfig.siteUrl}/learn/five-elements`;

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/learn/five-elements",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/learn/five-elements",
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

export default function FiveElementsPage() {
  const elementsSchema = getWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Five Elements of Vastu",
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
      name: "Five Elements",
      url: canonicalUrl,
    },
  ]);

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [elementsSchema, breadcrumbSchema],
  };

  return (
    <>
      <JsonLd data={pageSchema} />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="px-4 pt-8 sm:px-6 lg:px-8">
          <ol className="mx-auto flex max-w-7xl items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>

            <ChevronRight className="h-3.5 w-3.5 opacity-50" />

            <li>
              <Link href="/learn" className="hover:text-primary">
                Learn
              </Link>
            </li>

            <ChevronRight className="h-3.5 w-3.5 opacity-50" />

            <li aria-current="page" className="font-medium text-foreground">
              Five Elements
            </li>
          </ol>
        </nav>

        <FiveElementsHero />

        <FiveElementsIntro />

        <ElementsGrid />

        <ElementsRelationship />

        <ElementsInVastu />

        <CourtyardExample />

        <FAQ faqs={faqs} />

        <FiveElementsCTA />
      </main>
    </>
  );
}
