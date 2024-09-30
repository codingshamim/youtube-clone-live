import { HamburgerContext } from "@/context";
import { useContext } from "react";

export default function useHamburger() {
  const { isHamburger, setHamburger } = useContext(HamburgerContext);
  return { isHamburger, setHamburger };
}
