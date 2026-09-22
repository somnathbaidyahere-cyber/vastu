import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/lib/sanity/client";

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}