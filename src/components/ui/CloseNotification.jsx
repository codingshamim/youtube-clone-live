"use client";

import useCommonState from "@/hooks/useCommonState";

export default function CloseNotification() {
  const { commonState, setCommonState } = useCommonState();
  return (
    <button
      onClick={() =>
        setCommonState({
          ...commonState,
          notificationOption: false,
        })
      }
      type="button"
      className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
      aria-label="Close"
      data-hs-overlay="#hs-slide-down-animation-modal"
    >
      <span className="sr-only">Close</span>
      <svg
        className="shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  );
}
