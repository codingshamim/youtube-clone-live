"use client";

import useHamburger from "@/hooks/useHamburger";

export default function Hamburger() {
  const { isHamburger, setHamburger } = useHamburger();
  return (
    <div
      onClick={() => setHamburger(!isHamburger)}
      className="hamburger  hover:bg-secondaryBgWhite hover:dark:bg-secondaryBg transition-all duration-150 rounded-sm"
    >
      <span className="bg-bgBlack dark:bg-white  after:bg-bgBlack before:bg-bgBlack after:dark:bg-white before:dark:bg-white" />
    </div>
  );
}
