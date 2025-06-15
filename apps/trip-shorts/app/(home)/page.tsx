"use client";

import {
  Bookmark,
  Compass,
  Heart,
  Home,
  Search,
  Settings,
  User,
} from "lucide-react";

import { useState } from "react";
import { popularDestinations } from "../../lib/constants/locations";
import { categories } from "../../lib/constants/categories";
import { shortFormVideos } from "../../lib/data/prototype-locations";
import { VideoCard } from "../../components/video/VideoCard";
import Image from "next/image";
import { NAV_ITEMS } from "../../lib/constants/nav";

export default function TripShortsHome() {
  const [activeTab, setActiveTab] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-white text-xl font-bold">TripShorts</h1>
          <div className="flex space-x-2">
            <Heart className="w-6 h-6 text-white" />
            <Settings className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="어디로 여행가고 싶나요?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-3">인기 여행지</h2>
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {popularDestinations.map((dest, index) => (
            <div key={index} className="flex-shrink-0 text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-2 ring-2 ring-blue-200">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs text-gray-600">{dest.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mb-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
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

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {NAV_ITEMS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-blue-500 bg-blue-50"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <tab.icon className="w-6 h-6 mb-1" />
              <span className="text-xs">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
