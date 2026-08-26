import Image from "next/image";

import CTA from "@/components/pages/home/CTA";
import Hero from "@/components/pages/home/Hero";
import Elements from "@/components/pages/home/Elements";
import Features from "@/components/pages/home/Features";

export default function Home() {
  return (
    <>
    <main className=" bg-background">
      <Hero/>
      <Elements/>
      <Features/>
      <CTA/>
    </main>
    </>
  );
}
