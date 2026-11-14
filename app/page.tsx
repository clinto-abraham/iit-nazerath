"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import WavingBackground from "@/components/WavingBackground";
import Navbar from "@/components/Navbar";
import HeroSearch from "@/components/HeroSearch";
import TopicSection from "@/components/TopicSection";
import VideoPlayerModal from "@/components/VideoPlayerModal";
import { TOPICS_DATA, TopicItem, VideoItem, LanguageCode } from "@/data/topics";
import { UI_STRINGS } from "@/data/translations";
import { SearchX, ArrowUp } from "lucide-react";

export default function Home() {
  // Default language is English
  const [currentLang, setCurrentLang] = useState<LanguageCode>("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [activeTopicTitle, setActiveTopicTitle] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const strings = UI_STRINGS[currentLang];

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut listener (/ to focus search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // SEO & URL Searchable Sync: Read ?q= and ?lang= on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const q = params.get("q");
      const lang = params.get("lang");
      if (q) setSearchQuery(q);
      if (lang && (lang === "en" || lang === "ml" || lang === "hi")) {
        setCurrentLang(lang as LanguageCode);
      }
    }
  }, []);

  // SEO & URL Searchable Sync: Keep URL query string live in sync
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (searchQuery.trim()) {
        url.searchParams.set("q", searchQuery.trim());
      } else {
        url.searchParams.delete("q");
      }
      if (currentLang !== "en") {
        url.searchParams.set("lang", currentLang);
      } else {
        url.searchParams.delete("lang");
      }
      window.history.replaceState({}, "", url.toString());
    }
  }, [searchQuery, currentLang]);

  // Precise search across main topic, sub topic, video titles, subtopics, and notes across all languages
  const filteredTopics = useMemo(() => {
    const rawQuery = searchQuery.trim();
    if (!rawQuery) return TOPICS_DATA;

    const query = rawQuery.toLowerCase();
    const results: TopicItem[] = [];

    TOPICS_DATA.forEach((topic) => {
      // 1. Search over main topic name in all languages
      const topicNameEn = (topic.topicName.en || "").toLowerCase();
      const topicNameMl = (topic.topicName.ml || "").toLowerCase();
      const topicNameHi = (topic.topicName.hi || "").toLowerCase();

      // 2. Search over main topic subtopic in all languages
      const topicSubEn = (topic.subTopic.en || "").toLowerCase();
      const topicSubMl = (topic.subTopic.ml || "").toLowerCase();
      const topicSubHi = (topic.subTopic.hi || "").toLowerCase();

      const mainTopicMatches =
        topicNameEn.includes(query) ||
        topicNameMl.includes(query) ||
        topicNameHi.includes(query) ||
        topicSubEn.includes(query) ||
        topicSubMl.includes(query) ||
        topicSubHi.includes(query);

      // 3. Search over each video's title, subtopic, and notes in all languages
      const matchingVideos = topic.videos.filter((v) => {
        const vTitleEn = (v.title.en || "").toLowerCase();
        const vTitleMl = (v.title.ml || "").toLowerCase();
        const vTitleHi = (v.title.hi || "").toLowerCase();

        const vSubEn = (v.subTopic.en || "").toLowerCase();
        const vSubMl = (v.subTopic.ml || "").toLowerCase();
        const vSubHi = (v.subTopic.hi || "").toLowerCase();

        const vNotesEn = (v.notes?.en || "").toLowerCase();
        const vNotesMl = (v.notes?.ml || "").toLowerCase();
        const vNotesHi = (v.notes?.hi || "").toLowerCase();

        return (
          vTitleEn.includes(query) ||
          vTitleMl.includes(query) ||
          vTitleHi.includes(query) ||
          vSubEn.includes(query) ||
          vSubMl.includes(query) ||
          vSubHi.includes(query) ||
          vNotesEn.includes(query) ||
          vNotesMl.includes(query) ||
          vNotesHi.includes(query)
        );
      });

      // Show ONLY the specific matching videos so unrelated videos are stopped from appearing!
      if (matchingVideos.length > 0) {
        results.push({
          ...topic,
          videos: matchingVideos, // Only relevant matching videos
        });
      } else if (mainTopicMatches) {
        // If the topic heading itself matched (e.g. searching "Curses" or "Crowns"), show the topic
        results.push(topic);
      }
    });

    return results;
  }, [searchQuery]);

  // Total counts
  const totalTopics = TOPICS_DATA.length;
  const filteredVideosCount = useMemo(() => {
    return filteredTopics.reduce((acc, t) => acc + t.videos.length, 0);
  }, [filteredTopics]);

  const handlePlayVideo = (video: VideoItem, topicTitle: string) => {
    setActiveVideo(video);
    setActiveTopicTitle(topicTitle);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fbf8f3] text-stone-900">
      {/* Light Warm Animated Moving Clouds & Stars Waving Background */}
      <WavingBackground />

      {/* Minimalist Top Navbar with Single Translation Switcher */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={(lang) => setCurrentLang(lang)}
      />

      {/* Hero Header with Search Bar */}
      <HeroSearch
        currentLang={currentLang}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchInputRef={searchInputRef}
        totalTopics={totalTopics}
        filteredTopicsCount={filteredTopics.length}
        filteredVideosCount={filteredVideosCount}
      />

      {/* Main Content Area - Full Width Responsive Grid */}
      <main className="flex-1 w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 pb-20">
        {filteredTopics.length === 0 ? (
          <div className="warm-card rounded-2xl p-8 sm:p-12 text-center max-w-lg mx-auto my-12 border border-stone-200">
            <SearchX className="w-12 h-12 text-stone-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-stone-900 mb-1">
              {strings.noResultsTitle}
            </h3>
            <p className="text-sm sm:text-base text-stone-600 mb-6 leading-relaxed">
              {strings.noResultsDesc}
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-5 py-2.5 rounded-xl bg-amber-600 text-white font-bold text-sm hover:bg-amber-700 transition"
            >
              {strings.clearSearch}
            </button>
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {filteredTopics.map((topic) => (
              <TopicSection
                key={topic.id}
                topic={topic}
                currentLang={currentLang}
                searchQuery={searchQuery}
                onPlayVideo={handlePlayVideo}
              />
            ))}
          </div>
        )}
      </main>

      {/* Minimalist Footer */}
      <footer className="w-full border-t border-amber-900/10 bg-[#fbf8f3]/95 backdrop-blur-md py-8 px-4 text-center mt-auto text-xs sm:text-sm text-stone-500">
        <p className="font-semibold text-stone-700 mb-1">
          {strings.footerRights}
        </p>
        <p className="italic text-stone-400">
          {strings.footerMotto}
        </p>
      </footer>

      {/* Back to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-xl transition active:scale-95 touch-manipulation"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* In-App Video Player Modal */}
      <VideoPlayerModal
        video={activeVideo}
        topicTitle={activeTopicTitle}
        currentLang={currentLang}
        onClose={() => {
          setActiveVideo(null);
          setActiveTopicTitle(null);
        }}
      />
    </div>
  );
}
