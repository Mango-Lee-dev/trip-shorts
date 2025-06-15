"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { PopularDestinations } from "./components/PopularDestinations";
import { Categories } from "./components/Categories";
import { VideoGrid } from "./components/VideoGrid";
import { BottomNavigation } from "./components/BottomNavigation";
import { NAV_ITEMS } from "../lib/constants/nav";
import { CATEGORIES } from "../lib/constants/categories";
import { Category } from "../types/constants.types";

export default function TripShortsHome() {
  const [activeTab, setActiveTab] = useState(NAV_ITEMS[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<Category>(CATEGORIES[0] as Category);

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <PopularDestinations />
      <Categories category={category} setCategory={setCategory} />
      <VideoGrid />
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
