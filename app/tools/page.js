import ToolsHero from "@/components/pages/tools/ToolsHero";

import Features from "@/components/pages/tools/Features";
import Tools from "@/components/pages/tools/Tools";

import JsonLd from "@/components/seo/JsonLd";
import { getWebPageSchema } from "@/lib/seo/schemas";
import { schemaIds } from "@/lib/seo/ids";
import { seoConfig } from "@/lib/seo/config";

//  SEO
const pageTitle = "Vastu Tools — Explore Your Home Better | VastuGuru";

const pageDescription =
  "Explore practical Vastu tools to understand directions, spaces, and essential Vastu concepts for your home.";

const canonicalUrl = `${seoConfig.siteUrl}/tools`;

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/tools",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/tools",
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

export const tools = [
  {
    slug: "compass",
    href: "/tools/compass",
    icon: "compass",
    name: "Vastu Compass",
    sanskrit: "Dik Nirnaya",
    description:
      "Find and understand the directions of your property — true north and the sixteen directional zones, read from a calibrated digital compass.",
    highlights: ["16-zone overlay", "True vs magnetic north", "Save readings"],
    badge: "Most used",
  },
  {
    slug: "map",
    href: "/tools/vastu-map",
    icon: "map",
    name: "Interactive Vastu Map",
    sanskrit: "Kshetra Darshana",
    description:
      "Explore Vastu zones across your property on an interactive plan and see which rooms fall in auspicious or afflicted sectors.",
    highlights: [
      "Zone-wise overlay",
      "Room placement hints",
      "Works on your floor plan",
    ],
  },
  {
    slug: "mandala",
    href: "/tools/mandala",
    icon: "mandala",
    name: "Mandala",
    sanskrit: "Vastu Purusha Mandala",
    description:
      "Understand the Vastu Purusha Mandala — the 81-pada grid, its presiding deities, and how the body of Vastu Purusha maps onto your home.",
    highlights: ["81-pada grid", "Deity of each pada", "Marma-point guidance"],
  },
];

export default function ToolsPage() {
  const toolsSchema = getWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Vastu Tools",
    description: pageDescription,
  });

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [toolsSchema],
  };

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={pageSchema} />

      <ToolsHero />

      <Tools />

      <Features />
    </div>
  );
}
