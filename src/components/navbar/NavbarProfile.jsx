"use client";

import { useState } from "react";
import AccountModal from "../ui/AccountModal";
import useCommonState from "@/hooks/useCommonState";

export default function NavbarProfile() {
  const { commonState, setCommonState } = useCommonState();
  return (
    <>
      {commonState?.profileOption && <AccountModal />}

      <div
        className="profile"
        onClick={() =>
          setCommonState({
            ...commonState,
            createOption: false,
            profileOption: !commonState?.profileOption,
            notificationOption: false,
          })
        }
      >
        <img
          className="w-full h-full object-cover rounded-sm"
          src="https://yt3.ggpht.com/17ILeKx3l9jcxKRpqdQnPZBoTaBUyxhiVw7_rfVUjEYBTBc65WpsKKrGzWTOfkQv7eobw-Zv=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </div>
    </>
  );
}
