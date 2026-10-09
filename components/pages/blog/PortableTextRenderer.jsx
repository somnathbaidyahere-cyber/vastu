"use client";

import { PortableText } from "@portabletext/react";
import portableTextComponents from "@/lib/blog/portableTextComponents";

export default function PortableTextRenderer({ value }) {
  return (
    <PortableText
      value={value}
      components={portableTextComponents}
    />
  );
}