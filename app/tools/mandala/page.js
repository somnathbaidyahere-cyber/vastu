// /tools/mandala.jsx

import MandalaHero from "@/components/pages/tools/mandala/MandalaHero";
import MandalaIntro from "@/components/pages/tools/mandala/MandalaIntro";
import MandalaFramework from "@/components/pages/tools/mandala/MandalaFramework";
import ElementsSection from "@/components/pages/tools/mandala/ElementsSection";
import Brahmasthan from "@/components/pages/tools/mandala/Brahmasthan";
import MandalaPrinciples from "@/components/pages/tools/mandala/MandalaPrinciples";
import MandalaCTA from "@/components/pages/tools/mandala/MandalaCTA";
import FAQ from "@/components/ui/FAQ";
import { faqs } from "@/data/mandalaData";

import JsonLd from "@/components/seo/JsonLd";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/seo/schemas";
import { seoConfig } from "@/lib/seo/config";

const pageTitle = "Vastu Purusha Mandala — Understand the 81-Pada Grid";

const pageDescription =
  "Explore the Vastu Purusha Mandala, its 81-pada grid, presiding deities, and how its directional zones relate to your home.";

const canonicalUrl = `${seoConfig.siteUrl}/tools/mandala`;

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/tools/mandala",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/tools/mandala",
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

export default function MandalaPage() {
  
  const mandalaSchema = getWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Vastu Purusha Mandala",
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
      name: "Mandala",
      url: canonicalUrl,
    },
  ]);

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [mandalaSchema, breadcrumbSchema],
  };

  return (
    <>
      <JsonLd data={pageSchema} />

      <main className="min-h-screen overflow-hidden bg-background">
        <MandalaHero />

        <MandalaIntro />

        <MandalaFramework />

        <ElementsSection />

        <Brahmasthan />

        <MandalaPrinciples />

        <FAQ faqs={faqs} />

        <MandalaCTA />
      </main>
    </>
  );
}
