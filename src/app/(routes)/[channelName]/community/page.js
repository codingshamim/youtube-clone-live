export default function page() {
  return (
    <div
      id="horizontal-scroll-tab-preview"
      className=""
      role="tabpanel"
      aria-labelledby="horizontal-scroll-tab-item-1"
    >
      <article className="w-full lg:w-[70%] border rounded-md playlist-item cursor-pointer transition-all duration-150 aritcle-container p-2">
        <div className="flex gap-2">
          <img
            className="w-[40px] h-[40px] rounded-[50%] object-cover"
            src="https://yt3.googleusercontent.com/D9X91qRuvaOSs2L5ai9ydYsfuW8sUYgeMs7gsCuGkbElWYtRmraazV6U9a277kGJ_MHEOTjdtcI=s48-c-k-c0x00ffffff-no-rj-mo"
            alt=""
          />
          <div>
            <h2>
              Learn with Sumit - LWS - Bangladesh
              <span className="text-gray-400 text-xs">5 hour ago</span>
            </h2>
            <p className="text-sm mt-2">
              পরের ব্যাচ কবে আসবে বা আদৌ আসবে কিনা জানিনা! তাই এই ব্যাচেই এনরোল
              করে ফেলুন। আর মাত্র ২ দিন বাকি আছে। এনরোলমেন্টের লিংক এবং
              বিস্তারিত নিচে দেয়া হয়েছে।
            </p>
          </div>
        </div>
        <div>
          <img
            className=""
            src="https://yt3.ggpht.com/iOt_gKq5qDnAlcBuJvwgNnINEQ9QWCNzgpKA-wXcPQo2luU9Ketvxgz5USoyRZNt7oEaL83HAbgaMA=s640-c-fcrop64=1,00000000ffffffff-rw-nd-v1"
            alt=""
          />
        </div>
        <div className="post-actions">
          <div className="post-reaction flex items-center gap-4">
            <span className="flex items-center gap-[2px] text-sm">
              <svg
                className="hover:bg-secondaryBg p-2 rounded-[50%]"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
                  className="stroke-black dark:stroke-white"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              16
            </span>
            <span className="flex items-center gap-[2px] text-sm">
              <svg
                className="hover:bg-secondaryBg p-2 rounded-[50%]"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 14V4M8 14L4 14V4.00002L8 4M8 14L13.1956 20.0615C13.6886 20.6367 14.4642 20.884 15.1992 20.7002L15.2467 20.6883C16.5885 20.3529 17.1929 18.7894 16.4258 17.6387L14 14H18.5604C19.8225 14 20.7691 12.8454 20.5216 11.6078L19.3216 5.60779C19.1346 4.67294 18.3138 4.00002 17.3604 4.00002L8 4"
                  className="stroke-black dark:stroke-white"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              20
            </span>
            <span className="flex items-center gap-[2px] text-sm">
              <svg
                className="hover:bg-secondaryBg p-2 rounded-[50%]"
                width="40px"
                height="40px"
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.47 4.13998C12.74 4.35998 12.28 5.96 12.09 7.91C6.77997 7.91 2 13.4802 2 20.0802C4.19 14.0802 8.99995 12.45 12.14 12.45C12.34 14.21 12.79 15.6202 13.47 15.8202C15.57 16.4302 22 12.4401 22 9.98006C22 7.52006 15.57 3.52998 13.47 4.13998Z"
                  className="stroke-black dark:stroke-white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="flex items-center gap-[2px] text-sm">
              <svg
                className="hover:bg-secondaryBg p-2 rounded-[50%]"
                width="40px"
                height="40px"
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.0001 8.517C8.58589 8.517 8.2501 8.85279 8.2501 9.267C8.2501 9.68121 8.58589 10.017 9.0001 10.017V8.517ZM16.0001 10.017C16.4143 10.017 16.7501 9.68121 16.7501 9.267C16.7501 8.85279 16.4143 8.517 16.0001 8.517V10.017ZM9.8751 11.076C9.46089 11.076 9.1251 11.4118 9.1251 11.826C9.1251 12.2402 9.46089 12.576 9.8751 12.576V11.076ZM15.1251 12.576C15.5393 12.576 15.8751 12.2402 15.8751 11.826C15.8751 11.4118 15.5393 11.076 15.1251 11.076V12.576ZM9.1631 5V4.24998L9.15763 4.25002L9.1631 5ZM15.8381 5L15.8438 4.25H15.8381V5ZM19.5001 8.717L18.7501 8.71149V8.717H19.5001ZM19.5001 13.23H18.7501L18.7501 13.2355L19.5001 13.23ZM18.4384 15.8472L17.9042 15.3207L17.9042 15.3207L18.4384 15.8472ZM15.8371 16.947V17.697L15.8426 17.697L15.8371 16.947ZM9.1631 16.947V16.197C9.03469 16.197 8.90843 16.23 8.79641 16.2928L9.1631 16.947ZM5.5001 19H4.7501C4.7501 19.2662 4.89125 19.5125 5.12097 19.6471C5.35068 19.7817 5.63454 19.7844 5.86679 19.6542L5.5001 19ZM5.5001 8.717H6.25012L6.25008 8.71149L5.5001 8.717ZM6.56175 6.09984L6.02756 5.5734H6.02756L6.56175 6.09984ZM9.0001 10.017H16.0001V8.517H9.0001V10.017ZM9.8751 12.576H15.1251V11.076H9.8751V12.576ZM9.1631 5.75H15.8381V4.25H9.1631V5.75ZM15.8324 5.74998C17.4559 5.76225 18.762 7.08806 18.7501 8.71149L20.2501 8.72251C20.2681 6.2708 18.2955 4.26856 15.8438 4.25002L15.8324 5.74998ZM18.7501 8.717V13.23H20.2501V8.717H18.7501ZM18.7501 13.2355C18.7558 14.0153 18.4516 14.7653 17.9042 15.3207L18.9726 16.3736C19.7992 15.5348 20.2587 14.4021 20.2501 13.2245L18.7501 13.2355ZM17.9042 15.3207C17.3569 15.8761 16.6114 16.1913 15.8316 16.197L15.8426 17.697C17.0201 17.6884 18.1461 17.2124 18.9726 16.3736L17.9042 15.3207ZM15.8371 16.197H9.1631V17.697H15.8371V16.197ZM8.79641 16.2928L5.13341 18.3458L5.86679 19.6542L9.52979 17.6012L8.79641 16.2928ZM6.2501 19V8.717H4.7501V19H6.2501ZM6.25008 8.71149C6.24435 7.93175 6.54862 7.18167 7.09595 6.62627L6.02756 5.5734C5.20098 6.41216 4.74147 7.54494 4.75012 8.72251L6.25008 8.71149ZM7.09595 6.62627C7.64328 6.07088 8.38882 5.75566 9.16857 5.74998L9.15763 4.25002C7.98006 4.2586 6.85413 4.73464 6.02756 5.5734L7.09595 6.62627Z"
                  className="fill-black dark:fill-white"
                />
              </svg>
              20
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
