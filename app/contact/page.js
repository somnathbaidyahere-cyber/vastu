import { ContactProvider } from "@/components/pages/contact/ContactContext";

import Hero from "@/components/pages/contact/Hero";
import TopicSelection from "@/components/pages/contact/TopicSelection";
import ContactFormSection from "@/components/pages/contact/ContactFormSection";
import DirectContactGrid from "@/components/pages/contact/DirectContactGrid";
import ConsultationBridge from "@/components/pages/contact/ConsultationBridge";
import ClosingStatement from "@/components/pages/contact/ClosingStatement";

import JsonLd from "@/components/seo/JsonLd";
import { getWebPageSchema } from "@/lib/seo/schemas";
import { seoConfig } from "@/lib/seo/config";

const pageTitle = "Contact Vastu Guru — Get in Touch";

const pageDescription =
  "Get in touch with Vastu Guru for questions, feedback, general enquiries, or guidance about Vastu and your home.";

const canonicalUrl = `${seoConfig.siteUrl}/contact`;

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/contact",
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

export default function ContactPage() {
  const contactSchema = getWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Contact Vastu Guru",
    description: pageDescription,
  });

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [contactSchema],
  };

  return (
    <>
      <JsonLd data={pageSchema} />
      <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
        <Hero />

        <ContactProvider>
          <TopicSelection />
          <ContactFormSection />
        </ContactProvider>

        <DirectContactGrid />

        <ConsultationBridge />

        <ClosingStatement />
      </main>
    </>
  );
}
