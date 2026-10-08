import ConsultationHero from "@/components/pages/consultation/ConsultationHero";
import WhatYouGet from "@/components/pages/consultation/WhatYouGet";
import StartWithWhatYouHave from "@/components/pages/consultation/StartWithWhatYouHave";
import ConversationStarter from "@/components/pages/consultation/ConversationStarter";
import FinalCta from "@/components/pages/consultation/FinalCta";

import JsonLd from "@/components/seo/JsonLd";
import { getWebPageSchema } from "@/lib/seo/schemas";
import { seoConfig } from "@/lib/seo/config";

const pageTitle = "Vastu Consultation for Your Home | VastuGuru";

const pageDescription =
  "Start a Vastu consultation for a new build, renovation, move, or existing home. Begin with a simple conversation about your space and get practical guidance.";

const canonicalUrl = `${seoConfig.siteUrl}/consultation`;

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/consultation",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/consultation",
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

export default function ConsultationPage() {
  const consultationSchema = getWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Vastu Consultation",
    description: pageDescription,
  });

  const serviceSchema = {
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    name: "Vastu Consultation",
    description: pageDescription,
    provider: {
      "@type": "Organization",
      name: seoConfig.siteName,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: canonicalUrl,
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [consultationSchema, serviceSchema],
  };

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={pageSchema} />

      <main>
        <ConsultationHero />
        <WhatYouGet />
        <StartWithWhatYouHave />
        <ConversationStarter />
        <FinalCta />
      </main>
    </div>
  );
}