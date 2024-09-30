"use client";
import { useState } from "react";
import SmallModal from "../ui/SmallModal";

export default function NavbarActionItem({ children, createMode }) {
  const [isOpen, setIsOpen] = useState();
  function handleOpenModal() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {isOpen && <SmallModal />}

      <button
        className="navbar-action-item"
        onClick={createMode && handleOpenModal}
      >
        {children}
      </button>
    </>
  );
}
