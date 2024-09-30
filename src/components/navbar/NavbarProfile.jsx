"use client";

import { useState } from "react";
import AccountModal from "../ui/AccountModal";

export default function NavbarProfile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <AccountModal />}

      <div className="profile" onClick={() => setIsOpen(true)}>
        <img
          className="w-full h-full object-cover rounded-sm"
          src="https://yt3.ggpht.com/17ILeKx3l9jcxKRpqdQnPZBoTaBUyxhiVw7_rfVUjEYBTBc65WpsKKrGzWTOfkQv7eobw-Zv=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </div>
    </>
  );
}
