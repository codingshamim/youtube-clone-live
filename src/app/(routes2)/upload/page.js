export default function page() {
  return (
    <main className="upload-wrapper bg-[rgba(0,0,0,0.5)] flex justify-center items-center w-full h-screen fixed left-0 top-0">
      <div className="w-[600px] bg-secondaryBgWhite dark:bg-secondaryBg p-2 rounded-md">
        <header className="flex justify-between items-center">
          <h1 className="text-xl font-medium">Upload videos</h1>
          <svg
            width="20px"
            className="cursor-pointer"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
              className="fill-black dark:fill-white"
            />
          </svg>
        </header>
        <hr className="mt-2" />
        <div className="modal-content hidden">
          <div className="flex flex-col justify-center items-center mt-4">
            <div className="upload-box cursor-pointer bg-black w-[100px] h-[100px] flex justify-center items-center rounded-[50%]">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 17H17.01M15.6 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H8.4M12 15V4M12 4L15 7M12 4L9 7"
                  className="stroke-black dark:stroke-white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="mt-2">
              Your videos will be private until you publish them.
            </p>
            <button className="py-2 px-4 bg-white text-black rounded-sm mt-4">
              Select Files
            </button>
          </div>
        </div>
        {/* steps for video uploading  */}
        <div className="modal-content">
          {/* Stepper */}
          <div
            className="mt-4 px-2"
            data-hs-stepper='{
      "currentIndex": 2
    }'
          >
            {/* Stepper Nav */}
            <ul className="relative flex flex-row gap-x-2">
              <li
                className="flex items-center gap-x-2 shrink basis-0 flex-1 group success"
                data-hs-stepper-nav-item='{
    "index": 1,
    "isCompleted": true
  }'
              >
                <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                  <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600 dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
                    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                      1
                    </span>
                    <svg
                      className="hidden shrink-0 size-3 hs-stepper-success:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="ms-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Step
                  </span>
                </span>
                <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-600 dark:hs-stepper-completed:bg-teal-600" />
              </li>
              <li
                className="flex items-center gap-x-2 shrink basis-0 flex-1 group active"
                data-hs-stepper-nav-item='{
    "index": 2
  }'
              >
                <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                  <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600 dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
                    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                      2
                    </span>
                    <svg
                      className="hidden shrink-0 size-3 hs-stepper-success:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="ms-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Step
                  </span>
                </span>
                <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-600 dark:hs-stepper-completed:bg-teal-600" />
              </li>
              <li
                className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                data-hs-stepper-nav-item='{
    "index": 3
  }'
              >
                <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                  <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600 dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
                    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                      3
                    </span>
                    <svg
                      className="hidden shrink-0 size-3 hs-stepper-success:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="ms-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Step
                  </span>
                </span>
                <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-600 dark:hs-stepper-completed:bg-teal-600" />
              </li>
              {/* End Item */}
            </ul>
            {/* End Stepper Nav */}
            {/* Stepper Content */}
            <div className="mt-5 sm:mt-8">
              {/* First Content */}
              <div className="success">
                <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  <h3 className="text-gray-500 dark:text-neutral-500">
                    First content
                  </h3>
                </div>
              </div>
              {/* End First Content */}
              {/* First Content */}
              <div className="active" style={{ display: "none" }}>
                <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  <h3 className="text-gray-500 dark:text-neutral-500">
                    Second content
                  </h3>
                </div>
              </div>
              {/* End First Content */}
              {/* First Content */}
              <div style={{ display: "none" }}>
                <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  <h3 className="text-gray-500 dark:text-neutral-500">
                    Third content
                  </h3>
                </div>
              </div>
              {/* End First Content */}
              {/* Final Content */}
              <div style={{ display: "none" }}>
                <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  <h3 className="text-gray-500 dark:text-neutral-500">
                    Final content
                  </h3>
                </div>
              </div>
              {/* End Final Content */}
              {/* Button Group */}
              <div className="mt-5 flex justify-between items-center gap-x-2">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-stepper-back-btn=""
                >
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
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-stepper-next-btn=""
                >
                  Next
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
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-stepper-finish-btn=""
                  style={{ display: "none" }}
                >
                  Finish
                </button>
                <button
                  type="reset"
                  className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-stepper-reset-btn=""
                  style={{ display: "none" }}
                >
                  Reset
                </button>
              </div>
              {/* End Button Group */}
            </div>
            {/* End Stepper Content */}
          </div>
          {/* End Stepper */}
        </div>
      </div>
    </main>
  );
}
