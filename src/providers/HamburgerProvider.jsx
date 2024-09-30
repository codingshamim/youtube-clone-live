"use client";
import { HamburgerContext } from "@/context";
import { useState } from "react";

export default function HamburgerProvider({ children }) {
  const [isHamburger, setHamburger] = useState(true);

  return (
    <HamburgerContext.Provider value={{ isHamburger, setHamburger }}>
      {children}
    </HamburgerContext.Provider>
  );
}
