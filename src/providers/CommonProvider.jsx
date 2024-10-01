"use client";

import { CommonContext } from "@/context";
import { useEffect, useState } from "react";

export default function CommonProvider({ children }) {
  const [commonState, setCommonState] = useState({
    createOption: false,
    profileOption: false,
    notificationOption: false,
  });

  // write useEffect for remove modals when click someone to document
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setCommonState({
          ...commonState,
          createOption: false,
          profileOption: false,
          notificationOption: false,
        });
      }
    };
    const handleClick = () => {
      setCommonState({
        ...commonState,
        createOption: false,
        profileOption: false,
        notificationOption: false,
      });
    };

    // Add event listener to the document
    document.addEventListener("click", handleClick);
    // Add event listener for keydown
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [commonState]);

  return (
    <CommonContext.Provider value={{ commonState, setCommonState }}>
      {children}
    </CommonContext.Provider>
  );
}
