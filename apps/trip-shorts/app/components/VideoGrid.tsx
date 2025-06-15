import { shortFormVideos } from "../../lib/data/prototype-locations";
import { VideoCard } from "./video/VideoCard";

export function VideoGrid() {
  return (
    <div className="px-4 pb-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">추천 여행 숏츠</h2>
        <span className="text-sm text-gray-500">최신순</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {shortFormVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
