"use client";

import { usePathname, useRouter } from "next/navigation";

export default function ProfileTabItem({ children, link }) {
  const pathName = usePathname();
  const router = useRouter();
  const isActive = link === pathName;

  return (
    <button
      onClick={() => router.push(link)}
      type="button"
      className={`${isActive && "before:bg-primary active-menu"} text-white `}
      id="horizontal-scroll-tab-item-1"
      aria-selected="true"
      data-hs-tab="#horizontal-scroll-tab-preview"
      aria-controls="horizontal-scroll-tab-preview"
      role="tab"
    >
      {children}
    </button>
  );
}
