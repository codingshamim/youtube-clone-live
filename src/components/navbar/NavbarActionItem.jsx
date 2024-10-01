"use client";

import NotificationModal from "../ui/NotificationModal";
import SmallModal from "../ui/SmallModal";
import useCommonState from "@/hooks/useCommonState";

export default function NavbarActionItem({
  children,
  createMode,
  isNotification,
}) {
  const { commonState, setCommonState } = useCommonState();
  function handleOpenModal() {
    setCommonState({
      ...commonState,
      createOption: !commonState?.createOption,
      profileOption: false,
      notificationOption: false,
    });
  }
  let defaultHandler;

  if (createMode) {
    defaultHandler = handleOpenModal;
  } else if (isNotification) {
    defaultHandler = () => {
      setCommonState({
        ...commonState,
        createOption: false,
        profileOption: false,
        notificationOption: !commonState?.notificationOption,
      });
    };
  }
  return (
    <>
      {commonState?.createOption && <SmallModal />}
      {commonState?.notificationOption && <NotificationModal />}
      <button className={`navbar-action-item`} onClick={defaultHandler}>
        {children}
      </button>
    </>
  );
}
