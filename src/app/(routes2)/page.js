export default function page() {
  return (
    <div className="player-wrapper w-full lg:w-[60%] pb-4">
      {/* video player start  */}
      <div className="video-container bg-black-500 relative">
        <video src="videos/video.mp4" className="w-full" />
        {/* video functions start  */}
        <div className="video-functions bg-[rgba(0,0,0,0.5)] absolute bottom-0 left-0 w-full">
          {/* Progress */}
          <div
            className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
              style={{ width: "25%" }}
            />
          </div>
          {/* End Progress */}
          <div className="controls mt-2 grid grid-cols-2 items-center lg:grid-cols-3">
            {/* volume start  */}
            <div className="flex gap-2">
              <div className="volume flex gap-1 items-center">
                <span className="cursor-pointer">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0012 8.99984H9.1C8.53995 8.99984 8.25992 8.99984 8.04601 9.10883C7.85785 9.20471 7.70487 9.35769 7.60899 9.54585C7.5 9.75976 7.5 10.0398 7.5 10.5998V13.3998C7.5 13.9599 7.5 14.2399 7.60899 14.4538C7.70487 14.642 7.85785 14.795 8.04601 14.8908C8.25992 14.9998 8.53995 14.9998 9.1 14.9998H10.0012C10.5521 14.9998 10.8276 14.9998 11.0829 15.0685C11.309 15.1294 11.5228 15.2295 11.7143 15.3643C11.9305 15.5164 12.1068 15.728 12.4595 16.1512L15.0854 19.3023C15.5211 19.8252 15.739 20.0866 15.9292 20.1138C16.094 20.1373 16.2597 20.0774 16.3712 19.9538C16.5 19.811 16.5 19.4708 16.5 18.7902V5.20948C16.5 4.52892 16.5 4.18864 16.3712 4.04592C16.2597 3.92233 16.094 3.86234 15.9292 3.8859C15.7389 3.9131 15.5211 4.17451 15.0854 4.69733L12.4595 7.84843C12.1068 8.27166 11.9305 8.48328 11.7143 8.63542C11.5228 8.77021 11.309 8.87032 11.0829 8.93116C10.8276 8.99984 10.5521 8.99984 10.0012 8.99984Z"
                      className="stroke-white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input type="range" className="w-[100px] h-2px" />
              </div>
              <div className="time">2:05/4:50</div>
            </div>
            {/* volume end */}
            <div className="justify-center hidden lg:flex cursor-pointer video-playeback items-center gap-4">
              <span>
                <svg
                  width="25px"
                  height="25px"
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
                      id="add"
                      className="fill-white"
                      transform="translate(128.000000, 128.000000)"
                    >
                      <polygon
                        id="Path"
                        points="0 0 0 256 42.6666667 256 42.6666667 128.00512 256 256 256 0 42.6666667 127.989547 42.6666667 0"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <span>
                <svg
                  fill="#fff"
                  width="20px"
                  height="20px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.44 0.576t-0.576 1.44v16.16zM18.016 24.096q0 0.832 0.608 1.408t1.408 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.408 0.576t-0.608 1.44v16.16z" />
                </svg>
              </span>
              <span>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 20L15.3333 12L4 4V20Z" className="fill-white" />
                  <path d="M20 4H17.3333V20H20V4Z" className="fill-white" />
                </svg>
              </span>
            </div>
            <div className="video-actions cursor-pointer justify-end flex gap-4 items-center">
              <span>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V12.2676C18.7058 12.0974 18.3643 12 18 12H14C12.8954 12 12 12.8954 12 14V18C12 18.3643 12.0974 18.7058 12.2676 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"
                    fill="#fff"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14"
                    className="stroke-white"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 2C6.22876 2 4.34315 2 3.17157 3.17157C2.92939 3.41375 2.73727 3.68645 2.58487 4M2 10C2 9.26451 2 8.60074 2.00869 8"
                    className="stroke-white"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10"
                    className="stroke-white"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 22C17.7712 22 19.6569 22 20.8284 20.8284C21.0706 20.5862 21.2627 20.3136 21.4151 20M22 14C22 14.7355 22 15.3993 21.9913 16"
                    className="stroke-white"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        {/* video functions end  */}
      </div>
      {/* video player end  */}
      {/* video title  */}
      <div className="video-title mt-2">
        <h1>
          Benche Thakar Gaan | বেঁচে থাকার গান | Noble Man | Anupam Roy | Rupam
          Islam | Lyrical Video
        </h1>
      </div>
      {/* video title end */}
      {/* video channel info  */}
      <div className="video-channel">
        <div className="channel-container flex justify-between">
          <div className="flex items-center gap-6 mt-2 justify-between w-full">
            <div className="channel-inforomation flex gap-2 justify-between items-center">
              <div className="channelimg w-[40px] h-[40px] rounded-[50%]">
                <img
                  src="https://yt3.ggpht.com/5ozNNrQBUJY8TPt2BYo6fEL-07ilkWHVedWCGFjtvuHU0aYrg1Iop-LJvprodA1_9-MTv7G_YA=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                  className="w-full h-full object-cover rounded-[50%]"
                />
              </div>
              <div className="channel-info">
                <h2 className="text-xs lg:text-base">Zee Music Company</h2>
                <p className="text-gray-400 text-xs lg:text-base">
                  110M subscribers
                </p>
              </div>
            </div>
            <div className="hidden post-reaction md:flex items-center gap-4">
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
            </div>
            <div className="subscribe-button">
              <button className="text-xs py-2 px-4 rounded-sm bg-white text-black outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* reaction start  */}
      <div className="post-reaction md:hidden mt-4 mb-2 flex items-center gap-4">
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
      </div>
      {/* reaction end  */}
      {/* video channel info end */}
      {/* video descriptions  */}
      <div className="video-description w-full py-2 px-4 bg-secondaryBg rounded-sm mt-2">
        <p className="text-xs">
          97,987,744 views Nov 28, 2018 Non Stop ARIJIT SINGH hits 🎤🎵🎶🎼 👉🏻
          SUBSCRIBE to Zee Music Company - <br />
          ...
          <a href="" className="text-primary">
            more
          </a>
        </p>
      </div>
      {/* video descriptions end */}
      {/* video comments header */}
      <div className="video-comments flex justify-between items-center mt-4">
        <h1 className="text-xl font-bold">29,186 Comments</h1>
        <div className="sort-video flex gap-2 cursor-pointer">
          <span>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H14M4 18H9"
                className="stroke-black dark:stroke-white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p>Sort by</p>
        </div>
      </div>
      {/* video comments header end */}
      {/* video comment input  */}
      <div className="add-comment mt-6 flex items-center gap-4">
        <div className="user-img w-[40px] h-[40px] rounded-[50%]">
          <img
            src="https://yt3.ggpht.com/17ILeKx3l9jcxKRpqdQnPZBoTaBUyxhiVw7_rfVUjEYBTBc65WpsKKrGzWTOfkQv7eobw-Zv=s48-c-k-c0x00ffffff-no-rj"
            alt=""
            className="w-full h-full rounded-[50%] object-cover"
          />
        </div>
        <div className="w-full flex justify-between">
          <input
            type="text"
            placeholder="Add Comment..."
            className="w-[60%] md:w-[80%] py-1 border-b border-white outline-none bg-transparent px-2"
          />
          <button className="ml-2 text-xs py-2 px-4 bg-white text-black rounded-sm">
            Comment
          </button>
        </div>
      </div>
      {/* video comment input end */}
      {/* comment list  */}
      <ul className="mt-8 pb-[50px]">
        <li className="flex gap-2 mt-4">
          <div className="user-img w-[40px] h-[40px] rounded-[50%]">
            <img
              src="https://yt3.ggpht.com/17ILeKx3l9jcxKRpqdQnPZBoTaBUyxhiVw7_rfVUjEYBTBc65WpsKKrGzWTOfkQv7eobw-Zv=s48-c-k-c0x00ffffff-no-rj"
              alt=""
              className="w-full h-full rounded-[50%] object-cover"
            />
          </div>
          <div className="desc w-[80%]">
            <h2>
              Md Shamim
              <span className="text-gray-400 text-sm ml-4">4m Ago</span>
            </h2>
            <p className="text-gray-400 text-sm">
              "Tujh me khoya rahu main Mujhme khoyi rahe tu Khudko dhund lenge
              phir kabhi..."️️️ What a music "Tujh me khoya rahu main Mujhme
              khoyi rahe tu Khudko dhund lenge phir kabhi..."️️️ What a music
              "Tujh me khoya rahu main Mujhme khoyi rahe tu Khudko dhund lenge
              phir kabhi..."️️️ What a music
            </p>
          </div>
        </li>
        <li className="flex gap-2 mt-4">
          <div className="user-img w-[40px] h-[40px] rounded-[50%]">
            <img
              src="https://yt3.ggpht.com/17ILeKx3l9jcxKRpqdQnPZBoTaBUyxhiVw7_rfVUjEYBTBc65WpsKKrGzWTOfkQv7eobw-Zv=s48-c-k-c0x00ffffff-no-rj"
              alt=""
              className="w-full h-full rounded-[50%] object-cover"
            />
          </div>
          <div className="desc w-[80%]">
            <h2>
              Md Shamim
              <span className="text-gray-400 text-sm ml-4">4m Ago</span>
            </h2>
            <p className="text-gray-400 text-sm">
              "Tujh me khoya rahu main Mujhme khoyi rahe tu Khudko dhund lenge
              phir kabhi..."️️️ What a music "Tujh me khoya rahu main Mujhme
              khoyi rahe tu Khudko dhund lenge phir kabhi..."️️️ What a music
              "Tujh me khoya rahu main Mujhme khoyi rahe tu Khudko dhund lenge
              phir kabhi..."️️️ What a music
            </p>
          </div>
        </li>
      </ul>
      {/* comment list end */}
    </div>
  );
}
