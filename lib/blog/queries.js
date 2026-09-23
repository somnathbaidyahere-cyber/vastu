
export const blogFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,

  "category": categories[0]->title,

  "coverImage": mainImage.asset->url,
  "imageAlt": coalesce(imageAlt, title),
  imageCaption,

  "author": author->name,

  publishedAt,
  "updatedAt":_updatedAt,
  body,

  relatedArticles[]->{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "category": categories[0]->title,
    "coverImage": mainImage.asset->url,
    "imageAlt": coalesce(imageAlt, title),
    publishedAt
  },

  relatedTool,
  relatedGuide,
  seo
`;

export const publishedBlogsQuery = `
  *[
    _type == "post" &&
    defined(publishedAt) &&
    publishedAt <= now()
  ]
  | order(publishedAt desc) {
    ${blogFields}
  }
`;

export const blogBySlugQuery = `
  *[
    _type == "post" &&
    defined(publishedAt) &&
    publishedAt <= now() &&
    slug.current == $slug
  ][0] {
    ${blogFields}
  }
`;