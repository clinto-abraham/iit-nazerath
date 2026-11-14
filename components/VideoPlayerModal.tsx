"use client";

import React, { useEffect, useState } from "react";
import { X, ExternalLink, Share2, Check, Clock } from "lucide-react";
import { VideoItem, LanguageCode, getVideoUrl, getVideoId } from "@/data/topics";
import { UI_STRINGS } from "@/data/translations";

interface VideoPlayerModalProps {
  video: VideoItem | null;
  topicTitle: string | null;
  currentLang: LanguageCode;
  onClose: () => void;
}

export default function VideoPlayerModal({
  video,
  topicTitle,
  currentLang,
  onClose,
}: VideoPlayerModalProps) {
  const strings = UI_STRINGS[currentLang];
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!video) return null;

  const title = video.title[currentLang] || video.title.en;
  const subTopic = video.subTopic[currentLang] || video.subTopic.en;
  const notes = video.notes ? (video.notes[currentLang] || video.notes.en) : null;
  
  const videoUrl = getVideoUrl(video, currentLang);
  const videoId = getVideoId(video, currentLang);

  const handleCopy = () => {
    navigator.clipboard.writeText(videoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-stone-100 bg-[#fbf8f3]">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-stone-700 truncate">
              {topicTitle}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition min-h-[40px] min-w-[40px] flex items-center justify-center"
            title={strings.modalClose}
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Video Embed */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Details & Actions */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-2xl font-black text-stone-900 leading-snug">
                {title}
              </h2>
              {/* Sub-Topic Below Title without "Sub Topic" prefix */}
              <span className="text-sm sm:text-base font-bold text-rose-700 block mt-1">
                {subTopic}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 pt-1">
              <button
                onClick={handleCopy}
                className="px-3.5 py-2 rounded-xl border-2 border-stone-200 hover:bg-stone-50 text-stone-700 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition min-h-[42px]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>{strings.citationCopied}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-amber-700" />
                    <span>{strings.copyCitation}</span>
                  </>
                )}
              </button>

              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 transition min-h-[42px]"
              >
                <span>{strings.openYouTube}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {notes && (
            <div className="bg-[#fbf8f3] p-4 rounded-2xl border border-amber-900/10 text-sm sm:text-base text-stone-700 leading-relaxed">
              <span className="font-bold text-stone-900 block mb-1">
                {strings.notesLabel}:
              </span>
              {notes}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
