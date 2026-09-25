import { seoConfig } from "./config";
import { schemaIds } from "./ids";

// Organization Schema
export function getOrganizationSchema() {
  const organization = {
    "@type": "Organization",

    "@id": schemaIds.organization,

    name: seoConfig.siteName,

    url: seoConfig.siteUrl,

    description: seoConfig.description,
  };

  if (seoConfig.logo) {
    organization.logo = {
      "@type": "ImageObject",
      url: seoConfig.logo,
    };
  }

  if (seoConfig.socialProfiles.length > 0) {
    organization.sameAs = seoConfig.socialProfiles;
  }

  return organization;
}

// Website Schema
export function getWebsiteSchema() {
  return {
    "@type": "WebSite",

    "@id": schemaIds.website,

    url: seoConfig.siteUrl,

    name: seoConfig.siteName,

    description: seoConfig.description,

    publisher: {
      "@id": schemaIds.organization,
    },

    inLanguage: seoConfig.language,
  };
}

// Homepage Schema
export function getHomepageSchema() {
  return {
    "@type": "WebPage",

    "@id": schemaIds.homepage,

    url: seoConfig.siteUrl,

    name: seoConfig.siteName,

    description: seoConfig.description,

    isPartOf: {
      "@id": schemaIds.website,
    },

    publisher: {
      "@id": schemaIds.organization,
    },

    inLanguage: seoConfig.language,
  };
}

// Global Schema
export function getGlobalSchemaGraph() {
  return {
    "@context": "https://schema.org",

    "@graph": [
      getOrganizationSchema(),
      getWebsiteSchema(),
    ],
  };
}

// Breadcrumb Schema
export function getBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => {
      const breadcrumb = {
        "@type": "ListItem",

        position: index + 1,

        name: item.name,
      };

      if (item.url) {
        breadcrumb.item = item.url;
      }

      return breadcrumb;
    }),
  };
}

// Webpage Scehma
export function getWebPageSchema({
  id,
  url,
  name,
  description,
  isPartOf = {
    "@id": schemaIds.website,
  },
}) {
  return {
    "@type": "WebPage",

    "@id": id,

    url,

    name,

    description,

    isPartOf,

    publisher: {
      "@id": schemaIds.organization,
    },

    inLanguage: seoConfig.language,
  };
}