import ConsultationHero from "@/components/pages/consultation/ConsultationHero";
import ConsultationRelevance from "@/components/pages/consultation/ConsultationRelevance";
import ConsultationScope from "@/components/pages/consultation/ConsultationScope";
import ConsultationApproach from "@/components/pages/consultation/ConsultationApproach";
import ConsultationPreparation from "@/components/pages/consultation/ConsultationPreparation";
import ConsultationProcess from "@/components/pages/consultation/ConsultationProcess";
import ConsultationConversation from "@/components/pages/consultation/ConsultationConversation"

import JsonLd from "@/components/seo/JsonLd";
import { getWebPageSchema } from "@/lib/seo/schemas";
import { seoConfig } from "@/lib/seo/config";

const pageTitle = "Vastu Consultation — Personalized Guidance for Your Home";

const pageDescription =
  "Get personalized Vastu consultation and guidance for your home. Discuss your space, understand its Vastu considerations, and explore practical recommendations.";

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

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [consultationSchema],
  };

  return (
    <>
    <JsonLd data={pageSchema} />
    <main className="min-h-screen bg-background">
      <ConsultationHero />

      <ConsultationRelevance />

      <ConsultationScope />

      <ConsultationApproach />

      <ConsultationPreparation />

      <ConsultationProcess />

      <ConsultationConversation/>

    </main>
    </>
    
  );
}