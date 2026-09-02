"use client";

import { MandalaProvider } from "./MandalaContext";
import InteractiveMandala from "./InteractiveMandala";
import DirectionalFramework from "./DirectionalFramework";

export default function MandalaFramework() {
  return (
    <MandalaProvider>
      <InteractiveMandala />
      <DirectionalFramework />
    </MandalaProvider>
  );
}