import CTA from "@/components/pages/home/CTA";
import Hero from "@/components/pages/home/Hero";
import Elements from "@/components/pages/home/Elements";
import Features from "@/components/pages/home/Features";

import JsonLd from "@/components/seo/JsonLd";
import { getGlobalSchemaGraph, getHomepageSchema } from "@/lib/seo/schemas";

export const metadata = {
  title: "Vastu Consultation & Guidance for Your Home",
  description:
    "Explore Vastu principles, useful tools, and personalized consultation guidance to understand your home better.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Vastu Consultation & Guidance for Your Home",
    description:
      "Explore Vastu principles, useful tools, and personalized consultation guidance to understand your home better.",
    url: "/",
    siteName: "VastuGuru",
    locale: "en_IN",
    type: "website",
      images: [
    {
      url: "/images/seo/vastu-guru-home.jpg",

      width: 1200,

      height: 630,

      alt: "VastuGuru — Vastu consultation and guidance for your home",
    },
  ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultation & Guidance for Your Home",
    description:
      "Explore Vastu principles, useful tools, and personalized consultation guidance to understand your home better.",
    images: ["/images/seo/vastu-guru-home.jpg"],
  },
};

export default function Home() {
  const homepageSchema = {
    "@context": "https://schema.org",

    "@graph": [getHomepageSchema()],
  };
  return (
    <>
      <JsonLd data={homepageSchema} />

      <main className=" bg-background">
        <Hero />
        <Elements />
        <Features />
        <CTA />
      </main>
    </>
  );
}
