"use client";

import useHamburger from "@/hooks/useHamburger";
import { usePathname } from "next/navigation";

export default function MainWrapper({ children }) {
  const pathname = usePathname();

  const { isHamburger } = useHamburger();

  return <div className={`w-full `}>{children}</div>;
}
