"use client";

import React from "react";
import { Search, X, Sparkles } from "lucide-react";
import { LanguageCode } from "@/data/topics";
import { UI_STRINGS } from "@/data/translations";

interface HeroSearchProps {
  currentLang: LanguageCode;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  totalTopics: number;
  filteredTopicsCount: number;
  filteredVideosCount: number;
}

export default function HeroSearch({
  currentLang,
  searchQuery,
  setSearchQuery,
  searchInputRef,
  totalTopics,
  filteredTopicsCount,
  filteredVideosCount,
}: HeroSearchProps) {
  const strings = UI_STRINGS[currentLang];

  return (
    <section className="pt-8 sm:pt-12 pb-6 sm:pb-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 w-full text-center">
      
      {/* Welcome Badge with Warm Glow */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-4 sm:mb-5 shadow-xs">
        <Sparkles className="w-4 h-4 text-amber-700" />
        <span>{strings.welcomeBadge}</span>
      </div>

      {/* Main Title with BIGGER SIZE & VIBRANT COLORS */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-4 max-w-5xl mx-auto">
        <span className="vibrant-gradient-text">
          {strings.welcomeTitle}
        </span>
      </h2>

      {/* Welcome Description: Bro. Geo Nazerath's Teachings from Nazerath Ministry */}
      <p className="text-base sm:text-lg lg:text-xl text-stone-700 max-w-3xl sm:max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
        {strings.welcomeDesc}
      </p>

      {/* Touch-Friendly Mobile-Ready Search Bar */}
      <div className="relative max-w-3xl lg:max-w-4xl mx-auto mb-4">
        <div className="relative flex items-center bg-white border-2 border-amber-900/15 rounded-2xl sm:rounded-3xl shadow-sm hover:border-amber-500 focus-within:border-amber-600 focus-within:ring-4 focus-within:ring-amber-500/15 transition-all overflow-hidden">
          <div className="pl-4 sm:pl-5 pr-2 text-amber-600">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={strings.searchPlaceholder}
            className="w-full py-3.5 sm:py-4.5 px-2 text-base sm:text-lg text-stone-900 placeholder-stone-400 bg-transparent focus:outline-none"
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="p-2 mr-2 text-stone-400 hover:text-stone-800 rounded-xl hover:bg-stone-100 transition active:scale-95"
              title="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          <div className="pr-4 hidden sm:flex items-center">
            <kbd className="px-2.5 py-1 text-xs font-bold text-stone-500 bg-stone-100 border border-stone-200 rounded-md">
              /
            </kbd>
          </div>
        </div>
      </div>

      {/* Results Counter with Bigger Clear Text */}
      <p className="text-sm sm:text-base text-stone-600 font-medium">
        {strings.showingTopics}{" "}
        <span className="font-bold text-amber-800">{filteredTopicsCount}</span>{" "}
        {strings.ofTotal} (
        <span className="font-bold text-rose-700">{filteredVideosCount}</span>{" "}
        {strings.videosIndexed})
      </p>
    </section>
  );
}
