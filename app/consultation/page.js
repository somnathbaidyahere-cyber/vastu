import ConsultationHero from "@/components/pages/consultation/ConsultationHero";
import WhatYouGet from "@/components/pages/consultation/WhatYouGet";
import StartWithWhatYouHave from "@/components/pages/consultation/StartWithWhatYouHave";
import ConversationStarter from "@/components/pages/consultation/ConversationStarter";
import FinalCta from "@/components/pages/consultation/FinalCta";

const title = "Vastu Consultation for Your Home | VastuGuru";

const description =
  "Start a Vastu consultation for a new build, renovation, move, or existing home. No lengthy forms — begin with a simple conversation about your space.";

export const metadata = {
  title,
  description,

  alternates: {
    canonical: "/consultation",
  },

  openGraph: {
    title,
    description,
    type: "website",
    url: "/consultation",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ConsultationPage() {
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Consultation",
        item: "/consultation",
      },
    ],
  };

  const serviceSchema = {
    "@type": "Service",
    name: "Vastu Consultation",
    description,
    provider: {
      "@type": "Organization",
      name: "VastuGuru",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, serviceSchema],
  };

  return (
    <>
      <main>
        <ConsultationHero />
        <WhatYouGet />
        <StartWithWhatYouHave />
        <ConversationStarter />
        <FinalCta />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}