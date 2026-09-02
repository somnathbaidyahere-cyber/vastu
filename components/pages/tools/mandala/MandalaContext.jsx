"use client";

import { createContext, useContext, useState } from "react";

const MandalaContext = createContext(null);

export function MandalaProvider({ children }) {
  const [selectedZone, setSelectedZone] = useState("CENTER");
  const [selectedElement, setSelectedElement] = useState("Space");

  return (
    <MandalaContext.Provider
      value={{
        selectedZone,
        setSelectedZone,
        selectedElement,
        setSelectedElement,
      }}
    >
      {children}
    </MandalaContext.Provider>
  );
}

export function useMandala() {
  const context = useContext(MandalaContext);

  if (!context) {
    throw new Error("useMandala must be used inside MandalaProvider");
  }

  return context;
}