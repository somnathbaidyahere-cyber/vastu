import { seoConfig } from "./config";
import { schemaIds } from "./ids";

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": schemaIds.organization,

    name: seoConfig.siteName,
    url: seoConfig.siteUrl,

    logo: {
      "@type": "ImageObject",
      url: seoConfig.logo,
    },

    sameAs: seoConfig.socialProfiles,
  };
}

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

    about: {
      "@id": schemaIds.organization,
    },

    inLanguage: seoConfig.language,
  };
}