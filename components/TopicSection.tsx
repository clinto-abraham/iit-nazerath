"use client";

import React, { useState, useEffect } from "react";
import { Play, ExternalLink, Share2, Check, Clock, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import { TopicItem, VideoItem, LanguageCode, getVideoUrl, getVideoId } from "@/data/topics";
import { UI_STRINGS } from "@/data/translations";

interface TopicSectionProps {
  topic: TopicItem;
  currentLang: LanguageCode;
  searchQuery: string;
  onPlayVideo: (video: VideoItem, topicTitle: string) => void;
}

export default function TopicSection({
  topic,
  currentLang,
  searchQuery,
  onPlayVideo,
}: TopicSectionProps) {
  const strings = UI_STRINGS[currentLang];
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [shakeKey, setShakeKey] = useState(0);

  const isSearchActive = Boolean(searchQuery.trim());
  const query = searchQuery.trim().toLowerCase();

  const topicTitle = topic.topicName[currentLang] || topic.topicName.en;
  const topicSubTopic = topic.subTopic[currentLang] || topic.subTopic.en;

  // Trigger shake animation when search query changes
  useEffect(() => {
    if (isSearchActive) {
      setShakeKey((prev) => prev + 1);
    }
  }, [searchQuery, isSearchActive]);

  const handleCopy = (url: string, id: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <article 
      key={`topic-${topic.id}-${shakeKey}`}
      className={`warm-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 border transition-all ${
        isSearchActive
          ? "border-amber-500/70 shadow-lg shadow-amber-500/10 ring-2 ring-amber-400/30 animate-search-shake"
          : "border-amber-900/15"
      }`}
    >
      
      {/* Search Found Badge if query is active */}
      {isSearchActive && (
        <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{strings.searchMatchBadge}</span>
        </div>
      )}

      {/* Main Topic Title (Large & Vibrant) */}
      <div className="mb-6 pb-5 border-b border-stone-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-900 leading-snug">
            <span className="vibrant-blue-amber-text">
              {topicTitle}
            </span>
          </h3>

          {topic.playlistUrl && (
            <a
              href={topic.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-800 hover:text-amber-950 bg-amber-100/70 hover:bg-amber-100 border border-amber-300 px-3 py-1.5 rounded-xl transition self-start sm:self-center flex-shrink-0"
              title="Open full series playlist on YouTube"
            >
              <span>Playlist Series</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Subtitle DIRECTLY BELOW the Main Topic without 'Sub Topic' prefix */}
        <div className="mt-2.5 flex items-start gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-600 flex-shrink-0 mt-2" />
          <p className="text-base sm:text-lg lg:text-xl font-medium text-amber-800 leading-relaxed">
            {topicSubTopic}
          </p>
        </div>
      </div>

      {/* Videos Grid - Full Width Responsive Grid (1 col mobile, 2 col tablet, 3-4 col desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-6">
        {topic.videos.map((video) => {
          const videoTitle = video.title[currentLang] || video.title.en;
          const videoSubTopic = video.subTopic[currentLang] || video.subTopic.en;
          const videoNotes = video.notes ? (video.notes[currentLang] || video.notes.en) : null;
          
          // Get language-specific video URL and video ID (English from @nmgglobalconnect, Malayalam from @nmgmalayalamconnect)
          const videoUrl = getVideoUrl(video, currentLang);
          const videoId = getVideoId(video, currentLang);
          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

          const videoMatches = isSearchActive && (
            videoTitle.toLowerCase().includes(query) ||
            videoSubTopic.toLowerCase().includes(query) ||
            (videoNotes && videoNotes.toLowerCase().includes(query)) ||
            video.title.en.toLowerCase().includes(query)
          );

          return (
            <div
              key={video.id}
              className={`bg-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all group ${
                videoMatches
                  ? "border-2 border-amber-500 shadow-md ring-2 ring-amber-400/20"
                  : "border-2 border-stone-200/90 hover:border-amber-400 hover:shadow-md"
              }`}
            >
              <div>
                {/* Thumbnail Container */}
                <div 
                  className="relative aspect-video rounded-xl overflow-hidden bg-stone-100 mb-4 cursor-pointer group/thumb"
                  onClick={() => onPlayVideo(video, topicTitle)}
                >
                  <img
                    src={thumbnailUrl}
                    alt={videoTitle}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-103"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80`;
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-black/25 group-hover/thumb:bg-black/15 transition-all" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white flex items-center justify-center shadow-lg transform group-hover/thumb:scale-110 transition duration-200">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  {video.duration && (
                    <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {video.duration}
                    </div>
                  )}
                </div>

                {/* Video Title and Sub-Topic Below It without "Sub Topic" prefix */}
                <div className="space-y-1.5 mb-3">
                  <h4 
                    onClick={() => onPlayVideo(video, topicTitle)}
                    className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-amber-800 cursor-pointer leading-snug"
                  >
                    {videoTitle}
                  </h4>

                  {/* Video Subtitle Directly Below Title */}
                  <p className="text-sm sm:text-base font-semibold text-rose-700 leading-snug">
                    {videoSubTopic}
                  </p>
                </div>

                {/* Full Details Shown when Searched or Available */}
                {videoNotes && (
                  <div className={`text-sm sm:text-base mb-4 leading-relaxed p-3.5 rounded-xl border transition-all ${
                    isSearchActive 
                      ? "bg-amber-50/80 border-amber-300 text-stone-900" 
                      : "bg-[#fbf8f3] border-amber-900/10 text-stone-600"
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-amber-950 text-xs uppercase tracking-wider flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                        {strings.notesLabel}:
                      </span>
                      {isSearchActive && (
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Matched
                        </span>
                      )}
                    </div>
                    <p className="mt-1">{videoNotes}</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2.5">
                <button
                  onClick={() => onPlayVideo(video, topicTitle)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition shadow-sm active:scale-98 touch-manipulation min-h-[44px]"
                >
                  <Play className="w-4 h-4 fill-white" />
                  {strings.watchInApp}
                </button>

                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border-2 border-stone-200 hover:border-amber-400 text-stone-600 hover:text-amber-700 transition min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
                  title={strings.openYouTube}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => handleCopy(videoUrl, video.id)}
                  className="p-2.5 rounded-xl border-2 border-stone-200 hover:border-amber-400 text-stone-600 hover:text-amber-700 transition min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
                  title={strings.copyCitation}
                >
                  {copiedId === video.id ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </article>
  );
}
