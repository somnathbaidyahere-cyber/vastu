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

const title = "Vastu Fundamentals — Principles, Directions & Core Concepts | VastuGuru";
const description = "A beginner's guide to Vastu Shastra fundamentals: what Vastu is, the five elements, the eight directions, the brahmasthan, and how to read a home plan with clarity.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/learn/fundamentals" },
  openGraph: { title, description, type: "article", url: "/learn/fundamentals" },
  twitter: { card: "summary_large_image", title, description },
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Learn", item: "/learn" },
        { "@type": "ListItem", position: 3, name: "Fundamentals", item: "/learn/fundamentals" },
      ] },
      { "@type": "CollectionPage", name: "Vastu Fundamentals", description, url: "/learn/fundamentals", hasPart: learningPath.map((item) => ({ "@type": "Article", headline: item.title, description: item.body })) },
      { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function FundamentalsPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd />
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
    </div>
  );
}
