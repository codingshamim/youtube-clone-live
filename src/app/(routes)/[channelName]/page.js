import VideoCard from "@/components/videos/VideoCard";

export default function page() {
  return (
  
      <div
        id="horizontal-scroll-tab-preview"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
        role="tabpanel"
        aria-labelledby="horizontal-scroll-tab-item-1"
      >
        <VideoCard />
      </div>
    
  );
}
