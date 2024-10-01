import VideoCommentList from "./VideoCommentList";
import VideoContainer from "./VideoContainer";
import VideoMeta from "./VideoMeta";


export default function VideoWrapper() {
  return (
    <div className="player-wrapper w-full lg:w-[60%] pb-4">
      {/* video player start  */}
      <VideoContainer />
      {/* video player end  */}
      {/* video title  */}
      <VideoMeta />

      <VideoCommentList />
    </div>
  );
}
