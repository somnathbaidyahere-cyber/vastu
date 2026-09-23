 import Image from "next/image";
 import { urlFor } from "../sanity/image";
 
 const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-lg leading-8 text-foreground/85">{children}</p>
    ),

    h2: ({ children }) => (
      <h2 className="scroll-mt-28 pt-8 text-3xl font-medium leading-tight text-foreground">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="scroll-mt-28 pt-6 text-2xl font-medium leading-tight text-foreground">
        {children}
      </h3>
    ),

    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-primary/50 pl-6 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 space-y-3 pl-6 text-lg leading-8 text-foreground/85">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="mb-6 list-decimal space-y-3 pl-6 text-lg leading-8 text-foreground/85">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,

    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),

    em: ({ children }) => <em>{children}</em>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      const imageUrl = urlFor(value)
        .width(1200)
        .fit("max")
        .auto("format")
        .url();

      const altText = value.alt || "Vastu article image";

      return (
        <figure className="my-10">
          <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl">
            <Image
              src={imageUrl}
              alt={altText}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          {value.caption && (
            <figcaption className="mt-3 text-center text-sm leading-6 text-muted-foreground">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};
export default portableTextComponents