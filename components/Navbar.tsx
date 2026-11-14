"use client";

import React from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import { LanguageCode } from "@/data/topics";
import { UI_STRINGS } from "@/data/translations";

interface NavbarProps {
  currentLang: LanguageCode;
  onSelectLang: (lang: LanguageCode) => void;
}

export default function Navbar({ currentLang, onSelectLang }: NavbarProps) {
  const strings = UI_STRINGS[currentLang];

  const languages: { code: LanguageCode; label: string; native: string }[] = [
    { code: "en", label: "English", native: "English" },
    { code: "ml", label: "Malayalam", native: "മലയാളം" },
    { code: "hi", label: "Hindi", native: "हिंदी" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-[#fbf8f3]/95 border-b border-amber-900/10 shadow-xs">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
        <div className="flex items-center justify-between h-20 sm:h-22 gap-2">
          
          {/* Logo & Title with Vibrant Colors & Bigger Size */}
          <div 
            className="flex items-center gap-2.5 sm:gap-3.5 cursor-pointer select-none min-w-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-white shadow-sm border border-amber-900/15 p-1 flex items-center justify-center flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="IIT Nazerath Logo" 
                width={48} 
                height={48}
                className="object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-amber-700">
                Nazerath Ministry
              </span>
              <h1 className="text-base sm:text-xl lg:text-2xl font-black tracking-tight text-stone-900 truncate">
                <span className="vibrant-gradient-text">
                  {strings.siteTitle}
                </span>{" "}
                <span className="text-xs sm:text-sm px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold border border-amber-200 ml-1">
                  {strings.siteSubtitle}
                </span>
              </h1>
            </div>
          </div>

          {/* SINGLE TRANSLATION BUTTON ON TOP RIGHT (Mobile-Friendly) */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl sm:rounded-2xl border border-amber-900/15 shadow-sm flex-shrink-0">
            <div className="px-1.5 sm:px-2 py-1 text-stone-400 hidden sm:flex items-center gap-1">
              <Globe className="w-4 h-4 text-amber-600" />
            </div>

            {languages.map((item) => {
              const isActive = currentLang === item.code;
              return (
                <button
                  key={item.code}
                  onClick={() => onSelectLang(item.code)}
                  className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 touch-manipulation ${
                    isActive
                      ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-sm"
                      : "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                  title={`Switch to ${item.label}`}
                >
                  {item.native}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </header>
  );
}
