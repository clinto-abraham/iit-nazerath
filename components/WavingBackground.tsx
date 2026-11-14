"use client";

import React, { useId } from "react";

export default function WavingBackground() {
  const gradCloud1 = useId();
  const gradCloud2 = useId();
  const gradSun = useId();

  // Subtle star coordinates for twinkling sky particles
  const stars = [
    { top: "8%", left: "15%", size: 3, delay: "0s", duration: "3.5s" },
    { top: "14%", left: "75%", size: 4, delay: "1.2s", duration: "4.2s" },
    { top: "22%", left: "45%", size: 2.5, delay: "0.6s", duration: "3.8s" },
    { top: "35%", left: "85%", size: 3.5, delay: "2.1s", duration: "5.1s" },
    { top: "42%", left: "10%", size: 3, delay: "1.8s", duration: "4.5s" },
    { top: "60%", left: "92%", size: 2.5, delay: "0.3s", duration: "3.6s" },
    { top: "72%", left: "28%", size: 3.5, delay: "2.5s", duration: "4.8s" },
    { top: "85%", left: "65%", size: 3, delay: "1.4s", duration: "4.0s" },
    { top: "90%", left: "18%", size: 2.5, delay: "2.8s", duration: "3.9s" },
  ];

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none bg-gradient-to-b from-[#f8f4ec] via-[#fdfbf7] to-[#f6efe4]">
      
      {/* Sky Aura 1: Soft Dawn Amber Sunbeam */}
      <div 
        className="absolute -top-[10%] left-[20%] w-[110%] h-[60%] rounded-full opacity-60 filter blur-[80px] animate-cloud-pulse"
        style={{
          background: "radial-gradient(ellipse at center, rgba(254, 215, 170, 0.5) 0%, rgba(253, 230, 138, 0.35) 40%, rgba(254, 205, 211, 0.2) 70%, transparent 100%)",
        }}
      />

      {/* Sky Aura 2: Soft Rose & Azure Breeze */}
      <div 
        className="absolute top-[30%] -right-[15%] w-[120%] h-[70%] rounded-full opacity-45 filter blur-[95px] animate-drift-slow"
        style={{
          background: "radial-gradient(ellipse at center, rgba(186, 230, 253, 0.45) 0%, rgba(254, 205, 211, 0.35) 45%, rgba(254, 243, 199, 0.2) 75%, transparent 100%)",
        }}
      />

      {/* Drifting Clouds Layer 1 (Warm Peach & Cotton Clouds) */}
      <div className="absolute top-[8%] -left-[15%] w-[130%] h-[45%] opacity-55 filter blur-[60px] animate-drift-slow">
        <div 
          className="w-full h-full rounded-[100%]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255, 237, 213, 0.9) 0%, rgba(254, 215, 170, 0.6) 50%, transparent 80%)",
          }}
        />
      </div>

      {/* Drifting Clouds Layer 2 (Warm Golden Sky Stream) */}
      <div className="absolute top-[48%] -right-[20%] w-[130%] h-[50%] opacity-45 filter blur-[70px] animate-drift-medium">
        <div 
          className="w-full h-full rounded-[100%]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(254, 240, 138, 0.65) 0%, rgba(253, 186, 116, 0.45) 45%, rgba(199, 210, 254, 0.25) 75%, transparent 100%)",
          }}
        />
      </div>

      {/* Waving Clouds & Sky Horizon Ribbon Waves */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-55" 
        preserveAspectRatio="none" 
        viewBox="0 0 1440 900" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`${gradCloud1}-sky`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.22" />
            <stop offset="30%" stopColor="#f43f5e" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.22" />
          </linearGradient>

          <linearGradient id={`${gradCloud2}-cloud`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.25" />
            <stop offset="40%" stopColor="#f472b6" stopOpacity="0.18" />
            <stop offset="80%" stopColor="#60a5fa" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.28" />
          </linearGradient>
        </defs>

        {/* Floating Atmospheric Wave 1 */}
        <path
          d="M -100 240 C 260 140 480 380 820 250 C 1160 130 1360 360 1600 220 L 1600 900 L -100 900 Z"
          fill={`url(#${gradCloud1}-sky)`}
        >
          <animate
            attributeName="d"
            dur="22s"
            repeatCount="indefinite"
            values="
              M -100 240 C 260 140 480 380 820 250 C 1160 130 1360 360 1600 220 L 1600 900 L -100 900 Z;
              M -100 300 C 320 420 580 180 940 330 C 1220 440 1420 190 1600 310 L 1600 900 L -100 900 Z;
              M -100 200 C 220 270 420 130 780 230 C 1120 340 1320 160 1600 210 L 1600 900 L -100 900 Z;
              M -100 240 C 260 140 480 380 820 250 C 1160 130 1360 360 1600 220 L 1600 900 L -100 900 Z
            "
          />
        </path>

        {/* Counter Billowing Cloud Wave 2 */}
        <path
          d="M -100 420 C 380 520 680 280 1020 430 C 1320 540 1490 340 1600 450 L 1600 900 L -100 900 Z"
          fill={`url(#${gradCloud2}-cloud)`}
        >
          <animate
            attributeName="d"
            dur="28s"
            repeatCount="indefinite"
            values="
              M -100 420 C 380 520 680 280 1020 430 C 1320 540 1490 340 1600 450 L 1600 900 L -100 900 Z;
              M -100 360 C 290 260 600 460 940 330 C 1240 220 1440 440 1600 370 L 1600 900 L -100 900 Z;
              M -100 470 C 420 390 730 540 1080 390 C 1370 290 1520 500 1600 420 L 1600 900 L -100 900 Z;
              M -100 420 C 380 520 680 280 1020 430 C 1320 540 1490 340 1600 450 L 1600 900 L -100 900 Z
            "
          />
        </path>
      </svg>

      {/* Gentle Twinkling Stars in Sky */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, idx) => (
          <div
            key={idx}
            className="absolute rounded-full bg-amber-400 shadow-sm shadow-amber-300 animate-star-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Subtle Vignette for Soft Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f3]/40 via-transparent to-[#fbf8f3]/70 pointer-events-none" />
    </div>
  );
}
