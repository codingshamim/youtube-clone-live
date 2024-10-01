export default function VideoComment() {
  return (
    <>
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
    </>
  );
}
