import SubscribeButton from "./SubscribeButton";

export default function ProfileInfo() {
  return (
    <div className="profile-info w-full left-0 flex-col md:flex-row flex md:mt-4 md:ml-4 md:items-center">
      <div className="w-[150px] h-[150px] rounded-[50%]">
        <img
          className="w-full h-full rounded-[50%]"
          src="https://yt3.googleusercontent.com/D9X91qRuvaOSs2L5ai9ydYsfuW8sUYgeMs7gsCuGkbElWYtRmraazV6U9a277kGJ_MHEOTjdtcI=s160-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </div>
      <div className="flex flex-col w-full md:w-[80%]">
        <div className="p-4 md:p-7">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Learn with Sumit - LWS - Bangladesh
          </h3>
          <p className="mt-2 text-gray-500 dark:text-neutral-400">
            @LearnwithSumit • 146K subscribers • 492 videos
          </p>
          <p className="mt-2">
            It's all about teaching Web Development skills and techniques in an
            efficient manner
          </p>
          <SubscribeButton />
        </div>
      </div>
    </div>
  );
}
