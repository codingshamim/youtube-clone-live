import SuggestVideoCard from "@/components/videos/SuggestVideoCard";
import VideoWrapper from "@/components/videos/VideoWrapper";

export default function layout() {
  return (
    <div className="custom-container py-[50px] flex flex-col lg:flex-row justify-between gap-2">
      <VideoWrapper />
      <div className="suggest-list lg:w-[40%]">
        <ul>
          <SuggestVideoCard />
        </ul>
      </div>
    </div>
  );
}
