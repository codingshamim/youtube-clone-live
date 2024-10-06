export default function AccountModal({ children }) {
  return (
    <div className="top-14 account-modal rounded-md fixed z-50 w-full md:w-[400px] md:right-6 bg-secondaryBgWhite dark:bg-secondaryBg">
      <div className="account-info flex items-center gap-3 p-2">
        <div className="account-img w-[100px] h-[100px]">
          <img
            className="w-full h-full rounded-sm object-cover"
            src="https://yt3.ggpht.com/17ILeKx3l9jcxKRpqdQnPZBoTaBUyxhiVw7_rfVUjEYBTBc65WpsKKrGzWTOfkQv7eobw-Zv=s108-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>
        <div className="account-details">
          <h1>Md Shamim Mia</h1>
          <p className="text-gray-400 text-sm">@codingshamim</p>
          <a href="profile.html" className="text-sm text-primary">
            View your channel
          </a>
        </div>
      </div>
      <hr />
      <div>
        <ul className="mt-2">
          <li className="hover:bg-secondaryBgWhite hover:dark:bg-black flex gap-2 items-center px-4 py-2 cursor-pointer">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 20.7499H6C5.65324 20.7647 5.30697 20.7109 4.98101 20.5917C4.65505 20.4725 4.3558 20.2902 4.10038 20.0552C3.84495 19.8202 3.63837 19.5371 3.49246 19.2222C3.34654 18.9073 3.26415 18.5667 3.25 18.2199V5.77994C3.26415 5.43316 3.34654 5.09256 3.49246 4.77765C3.63837 4.46274 3.84495 4.17969 4.10038 3.9447C4.3558 3.70971 4.65505 3.52739 4.98101 3.40818C5.30697 3.28896 5.65324 3.23519 6 3.24994H9C9.19891 3.24994 9.38968 3.32896 9.53033 3.46961C9.67098 3.61027 9.75 3.80103 9.75 3.99994C9.75 4.19886 9.67098 4.38962 9.53033 4.53027C9.38968 4.67093 9.19891 4.74994 9 4.74994H6C5.70307 4.72412 5.4076 4.81359 5.17487 4.99977C4.94213 5.18596 4.78999 5.45459 4.75 5.74994V18.2199C4.78999 18.5153 4.94213 18.7839 5.17487 18.9701C5.4076 19.1563 5.70307 19.2458 6 19.2199H9C9.19891 19.2199 9.38968 19.299 9.53033 19.4396C9.67098 19.5803 9.75 19.771 9.75 19.9699C9.75 20.1689 9.67098 20.3596 9.53033 20.5003C9.38968 20.6409 9.19891 20.7199 9 20.7199V20.7499Z"
                className="fill-black dark:fill-white"
              />
              <path
                d="M16 16.7499C15.9015 16.7504 15.8038 16.7312 15.7128 16.6934C15.6218 16.6556 15.5392 16.6 15.47 16.5299C15.3296 16.3893 15.2507 16.1987 15.2507 15.9999C15.2507 15.8012 15.3296 15.6105 15.47 15.4699L18.94 11.9999L15.47 8.52991C15.3963 8.46125 15.3372 8.37845 15.2962 8.28645C15.2552 8.19445 15.2332 8.09513 15.2314 7.99443C15.2296 7.89373 15.2482 7.7937 15.2859 7.70031C15.3236 7.60692 15.3797 7.52209 15.451 7.45087C15.5222 7.37965 15.607 7.32351 15.7004 7.28579C15.7938 7.24807 15.8938 7.22954 15.9945 7.23132C16.0952 7.23309 16.1945 7.25514 16.2865 7.29613C16.3785 7.33712 16.4613 7.39622 16.53 7.46991L20.53 11.4699C20.6705 11.6105 20.7493 11.8012 20.7493 11.9999C20.7493 12.1987 20.6705 12.3893 20.53 12.5299L16.53 16.5299C16.4608 16.6 16.3782 16.6556 16.2872 16.6934C16.1962 16.7312 16.0985 16.7504 16 16.7499Z"
                className="fill-black dark:fill-white"
              />
              <path
                d="M20 12.75H9C8.80109 12.75 8.61032 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12C8.25 11.8011 8.32902 11.6103 8.46967 11.4697C8.61032 11.329 8.80109 11.25 9 11.25H20C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12C20.75 12.1989 20.671 12.3897 20.5303 12.5303C20.3897 12.671 20.1989 12.75 20 12.75Z"
                className="fill-black dark:fill-white"
              />
            </svg>
            Sign Out
          </li>
          <li className="hover:bg-secondaryBgWhite hover:dark:bg-black flex gap-2 items-center px-4 py-2 cursor-pointer">
            <div className="flex gap-2 items-center">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                {/* Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools */}
                <g
                  id="🔍-Product-Icons"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="ic_fluent_dark_theme_24_filled"
                    className="fill-black dark:fill-white"
                    fillRule="nonzero"
                  >
                    <path
                      d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20 L12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z"
                      id="🎨-Color"
                    />
                  </g>
                </g>
              </svg>
              Appearance: Device theme
            </div>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                className="stroke-black dark:stroke-white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li className="hover:bg-secondaryBgWhite hover:dark:bg-black flex gap-2 items-center px-4 py-2 cursor-pointer">
            <svg
              className="fill-black dark:fill-white"
              width="20px"
              height="20px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1735.135 0c32.46 0 58.775 26.315 58.775 58.776v1125.587c0 32.46-26.314 58.775-58.775 58.775h-245.278v199.818c0 14.201 11.512 25.714 25.714 25.714h61.463c23.377-65.684 86.101-112.707 159.808-112.707 93.658 0 169.582 75.924 169.582 169.581 0 93.657-75.924 169.582-169.582 169.582-74.315 0-137.465-47.803-160.379-114.337l-59.1.048c-77.131 0-139.628-62.497-139.628-139.592l.033-198.107h-123.405v347.178c66.118 23.143 113.538 86.085 113.538 160.103 0 93.657-75.924 169.581-169.581 169.581-93.657 0-169.581-75.924-169.581-169.581 0-74.018 47.42-136.96 113.538-160.103v-347.178H777.214v347.178c66.118 23.143 113.538 86.085 113.538 160.103 0 93.657-75.924 169.581-169.581 169.581-93.657 0-169.581-75.924-169.581-169.581 0-74.018 47.42-136.96 113.538-160.103v-347.178H541.656l.033 198.107c0 77.095-62.497 139.592-139.592 139.592l-59.136-.048c-22.914 66.534-86.064 114.337-160.38 114.337C88.924 1695.126 13 1619.2 13 1525.544s75.924-169.581 169.581-169.581c73.707 0 136.431 47.023 159.809 112.707h61.463c14.201 0 25.714-11.513 25.714-25.714v-199.818H183.115c-32.461 0-58.776-26.314-58.776-58.775V58.776C124.339 26.315 150.654 0 183.115 0h1552.02ZM1199.67 1694.79c-30.723 0-55.629 24.906-55.629 55.629s24.906 55.629 55.63 55.629c30.722 0 55.628-24.906 55.628-55.63 0-30.722-24.906-55.628-55.629-55.628Zm-477.149 0c-30.723 0-55.629 24.906-55.629 55.629s24.906 55.629 55.629 55.629 55.629-24.906 55.629-55.63c0-30.722-24.906-55.628-55.629-55.628Zm1015.672-224.875c-30.723 0-55.63 24.906-55.63 55.63 0 30.722 24.907 55.628 55.63 55.628 30.723 0 55.628-24.906 55.628-55.629s-24.905-55.629-55.628-55.629Zm-1556.964 0c-30.723 0-55.629 24.906-55.629 55.63 0 30.722 24.906 55.628 55.63 55.628 30.722 0 55.628-24.906 55.628-55.629s-24.906-55.629-55.629-55.629ZM1687.202 1040H231.047v67.099c0 16.23 13.157 29.387 29.388 29.387h1397.38c16.23 0 29.387-13.157 29.387-29.387V1040Zm-29.388-933.333H260.434c-16.23 0-29.387 13.157-29.387 29.387v797.28h1456.155v-797.28c0-16.23-13.157-29.387-29.388-29.387ZM901.047 348.665l220.035 131.796C1133.59 489.628 1141 504.338 1141 520c0 15.662-7.41 30.372-19.918 39.539L901.047 691.335a47.406 47.406 0 0 1-48.007.014c-14.858-8.697-24.02-24.777-24.04-42.189V390.84c.02-17.412 9.182-33.492 24.04-42.19a47.406 47.406 0 0 1 48.007.015Z"
                fill-rule="evenodd"
              />
            </svg>
            Studio
          </li>
        </ul>
      </div>
    </div>
  );
}
