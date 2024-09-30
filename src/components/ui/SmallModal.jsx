export default function SmallModal() {
  return (
    <div className="account-modal pb-2 top-14 rounded-md fixed z-50 w-full md:w-[200px] md:right-12 bg-secondaryBgWhite dark:bg-secondaryBg">
      <div>
        <ul className="mt-2">
          <li className="hover:bg-secondaryBgWhite hover:dark:bg-black px-4 py-2 cursor-pointer">
            <a href="upload.html" className="flex gap-2 items-center">
              <svg
                width="20px"
                height="20px"
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
              Upload Video
            </a>
          </li>
          <li className="hover:bg-secondaryBgWhite hover:dark:bg-black flex gap-2 items-center px-4 py-2 cursor-pointer">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="create-plant"
                  className="fill-black dark:fill-white"
                  fillRule="nonzero"
                >
                  <g id="drop" transform="translate(64.000000, 64.000000)">
                    <path
                      d="M345.333333,144 L410.666667,209.333333 L257.333333,362.666667 L192,362.666667 L192,297.333333 L345.333333,144 Z M320,1.42108547e-14 L320,139.162 L245.829,213.333 L42.6666667,213.333333 L42.6666667,298.666667 L106.666,298.666 L106.666,341.333 L1.27897692e-13,341.333333 L1.27897692e-13,96 L128,170.666667 L128,96 L256,170.666667 L256,1.42108547e-14 L320,1.42108547e-14 Z M303.971,230.599 L224,310.570667 L224,330.666667 L244.053333,330.666667 L324.046,250.673 L303.971,230.599 Z M345.322667,189.248 L326.599,207.971 L346.673,228.046 L365.397333,209.322667 L345.322667,189.248 Z"
                      id="Combined-Shape"
                    />
                  </g>
                </g>
              </g>
            </svg>
            Create Post
          </li>
        </ul>
      </div>
    </div>
  );
}
