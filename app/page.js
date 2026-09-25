import CTA from "@/components/pages/home/CTA";
import Hero from "@/components/pages/home/Hero";
import Elements from "@/components/pages/home/Elements";
import Features from "@/components/pages/home/Features";


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
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultation & Guidance for Your Home",
    description:
      "Explore Vastu principles, useful tools, and personalized consultation guidance to understand your home better.",
  },
};

export default function Home() {
  return (
    <>
    <main className=" bg-background">
      <Hero/>
      <Elements/>
      <Features/>
      <CTA/>
    </main>
    </>
  );
}
