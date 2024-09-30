export default function page() {
  return (
    <div
      id="horizontal-scroll-tab-preview"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2"
      role="tabpanel"
      aria-labelledby="horizontal-scroll-tab-item-1"
    >
      <article className="playlist-item cursor-pointer rounded-sm transition-all duration-150 aritcle-container">
        <div className="thumbnail overflow-hidden relative transition-all duration-150">
          <img
            className="w-full h-[120px] object-cover transition-all duration-150"
            src="https://i.ytimg.com/vi/JvvJXfWQKBI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDK5DnzWAPRKnFT23PDPz1EFA2lnQ"
            alt=""
          />
          <span className="text-sm px-4 rounded-sm bg-[#282733CC] p-[2px] absolute bottom-0 right-0">
            118 Videos
          </span>
          <div className="playlist-thumb flex gap-2 justify-center items-center text-sm">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2839 11.134C17.9506 11.5189 17.9506 12.4811 17.2839 12.866L6.71601 18.9674C6.04934 19.3523 5.21601 18.8712 5.21601 18.1014L5.21601 5.8986C5.21601 5.1288 6.04934 4.64768 6.71601 5.03258L17.2839 11.134Z"
                className="fill-black dark:fill-white"
              />
            </svg>
            Play All
          </div>
        </div>
        <div className="video-summary">
          <h1 className="font-medium w-full mt-2">Mock Interview season 1</h1>
        </div>
        <div>
          <a className="text-gray-400 text-sm">View full Playlist</a>
        </div>
      </article>
    </div>
  );
}
