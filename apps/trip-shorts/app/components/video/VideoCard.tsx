import {
  Play,
  User,
  Star,
  Eye,
  Heart,
  MapPin,
  ShoppingCart,
} from "lucide-react";
import { Video } from "../../../types/video.types";
import Image from "next/image";

interface VideoCardProps {
  video: Video;
}

export const VideoCard = ({ video }: VideoCardProps) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4 transform hover:scale-105 transition-all duration-300 relative min-h-[480px] max-h-[550px]">
    <div className="relative">
      <Image
        src={video.thumbnail}
        alt={video.title}
        width={192}
        height={108}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <Play className="w-12 h-12 text-white" fill="white" />
      </div>
      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
        {video.duration}
      </div>
      <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
        {video.price}
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-start justify-center h-[50px]">
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
          {video.title}
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center w-1/2">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="truncate">{video.location}</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{video.rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 flex items-center">
            <User className="w-4 h-4 mr-1" />
            {video.creator}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 w-full">
          <div className="flex items-center flex-row w-full">
            <Eye className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0" />
            <span className="truncate">{video.views}</span>
          </div>
          <div className="flex items-center flex-row w-full">
            <Heart className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0" />
            <span className="truncate">{video.likes}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-black font-bold text-md">🚀 한 줄 평 </span>
          <span className="text-gray-500 text-sm line-clamp-2">
            {video.oneLineComment}
          </span>
        </div>
      </div>
      <button className="w-[90%] bottom-4 left-1/2 -translate-x-1/2 absolute flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
        여행코스 구매하기
      </button>
    </div>
  </div>
);
