import { client } from "@/lib/sanity/client";

import {
  blogBySlugQuery,
  publishedBlogsQuery,
} from "./queries";

export async function getPublishedBlogs() {
  return client.fetch(publishedBlogsQuery);
}

export async function getBlogBySlug(slug) {
  return client.fetch(blogBySlugQuery, { slug });
}