import React from "react";
import Image from "next/image";


export default function ImageComp() {
  return (
    <section className="relative w-full aspect-video overflow-hidden">
      <Image
        src="/backgrounds/indian-scriptures.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
    </section>
  );
}

