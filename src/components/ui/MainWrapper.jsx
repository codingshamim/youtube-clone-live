"use client";

import useHamburger from "@/hooks/useHamburger";
import { usePathname } from "next/navigation";

export default function MainWrapper({ children }) {
  const pathname = usePathname();

  const { isHamburger } = useHamburger();

  return (
    <div
      className={`w-full ${
        isHamburger ? "md:w-[80%]" : "md:w-[100%]"
      }  mt-2 md:px-4 rounded-md ${pathname === "/watch" && "md:!w-[100%]"} `}
    >
      {children}
    </div>
  );
}
