import { CommonContext } from "@/context";
import { useContext } from "react";

export default function useCommonState() {
  const { commonState, setCommonState } = useContext(CommonContext);
  return { commonState, setCommonState };
}
