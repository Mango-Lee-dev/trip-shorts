import { Heart, Search, Settings } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-white text-xl font-bold">TripShorts</h1>
        <div className="flex space-x-2">
          <Heart className="w-6 h-6 text-white" />
          <Settings className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="어디로 여행가고 싶나요?"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
    </div>
  );
}
