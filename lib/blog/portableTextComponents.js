import Image from "next/image";
import { urlFor } from "../sanity/image";
import { slugifyHeading } from "@/lib/sanity/headingId";

import ChecklistBlock from "@/components/pages/blog/blocks/ChecklistBlock";
import TableBlock from "@/components/pages/blog/blocks/TableBlock";
import FAQBlock from "@/components/pages/blog/blocks/FAQBlock";
import CalloutBlock from "@/components/pages/blog/blocks/CalloutBlock";

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-3 md:mb-4 lg:mb-5 text-lg leading-8 text-foreground/85">{children}</p>
    ),

    h2: ({ children, value }) => {
      const text = (value?.children || [])
        .map((child) => child.text || "")
        .join("");

      return (
        <h2
          id={slugifyHeading(text)}
          className="scroll-mt-28 pt-4 md:pt-6 lg:pt-8 text-2xl md:text-3xl font-medium leading-tight text-foreground"
        >
          {children}
        </h2>
      );
    },

    h3: ({ children, value }) => {
      const text = (value?.children || [])
        .map((child) => child.text || "")
        .join("");

      return (
        <h3
          id={slugifyHeading(text)}
          className="scroll-mt-28 pt-4 md:pt-5 lg:pt-6 text-xl md:text-2xl font-medium leading-tight text-foreground mb-2 pl-1"
        >
          {children}
        </h3>
      );
    },

    h4: ({ children, value }) => {
      const text = (value?.children || [])
        .map((child) => child.text || "")
        .join("");

      return (
        <h4
          id={slugifyHeading(text)}
          className="scroll-mt-28 pt-3 md:pt-4 lg:pt-5 text-lg md:text-xl font-medium leading-tight text-foreground mb-1 pl-2"
        >
          {children}
        </h4>
      );
    },

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
    checklist: ChecklistBlock,
    table: TableBlock,
    faq: FAQBlock,
    callout: CalloutBlock,
  },
};
export default portableTextComponents;
