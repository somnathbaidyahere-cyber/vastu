import React from "react";
import Image from "next/image";


export default function ImageComp() {
  return (
    <div className="w-full">
      <Image
        src="/backgrounds/indian-scriptures.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center aspect-video"
      />
    </div>
  );
}

