import {
  Play,
  User,
  Star,
  Eye,
  Heart,
  MapPin,
  ShoppingCart,
} from "lucide-react";

interface Video {
  thumbnail: string;
  title: string;
  duration: string;
  price: string;
  creator: string;
  rating: number;
  views: string;
  likes: string;
  location: string;
}

interface VideoCardProps {
  video: Video;
}

export const VideoCard = ({ video }: VideoCardProps) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4 transform hover:scale-105 transition-all duration-300">
    <div className="relative">
      <img
        src={video.thumbnail}
        alt={video.title}
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
      <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
        {video.title}
      </h3>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-600 flex items-center">
          <User className="w-4 h-4 mr-1" />
          {video.creator}
        </span>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600 ml-1">{video.rating}</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <Eye className="w-4 h-4 mr-1" />
          <span>{video.views}</span>
        </div>
        <div className="flex items-center">
          <Heart className="w-4 h-4 mr-1" />
          <span>{video.likes}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{video.location}</span>
        </div>
      </div>
      <button className="w-full mt-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
        <ShoppingCart className="w-4 h-4 mr-2" />
        여행코스 구매하기
      </button>
    </div>
  </div>
);
