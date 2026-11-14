# Indian Institute of Theology - Nazerath
### Multimedia Theological Knowledge Graph & Video Teaching Index
**Bro. Geo Nazerath • Nazerath Ministries (NMG)**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-amber?style=flat-square)](LICENSE)

---

## 📖 About The Application

The **Indian Institute of Theology - Nazerath** web portal is a modern, searchable digital reference library and knowledge index dedicated to cataloging and studying **Bro. Geo Nazerath's** biblical teachings, spiritual warfare expositions, deliverance ministry sessions, and prophetic insights from **Nazerath Ministries (NMG)**.

This portal bridges and unifies the content from two primary ministry channels:
1. **[NMG Global Connect](https://www.youtube.com/@nmgglobalconnect)** (English Channel)
2. **[NMG Malayalam Connect](https://www.youtube.com/@nmgmalayalamconnect)** (Malayalam Channel)

It allows believers, theology students, researchers, and pastors worldwide to quickly search, cross-reference, and study teachings across themes like **Breaking Generational Curses**, **Spiritual Warfare**, **Seven Spirits of God**, **Midnight Prayer**, and **Prophetic Declarations** without having to manually search through hundreds of scattered YouTube uploads.

---

## ✨ Key Features

### 1. 📱 Mobile-First Responsive Design
- Optimized from the ground up for smartphones (tested across small and large mobile viewports), tablets, and high-resolution desktop displays.
- Large touch-friendly controls (minimum 44px tap targets) for **Watch Teaching**, **Open YouTube**, and **Copy Link** buttons.
- Fluid typography and responsive layout that wraps smoothly on any screen size without horizontal scrolling.

### 2. 🌅 Warm Waving Background with Moving Clouds & Starlight
- A light, elegant, warm-toned aesthetic (parchment, honey amber, and soft peach).
- Smooth ambient background animations featuring **billowing clouds drifting across the sky**, undulating harmonic horizon waves, and gentle twinkling celestial stars.

### 3. 🌐 Single Top-Right Language Switcher (Zero Duplication)
- Clean language toggle in the top-right header: **English | മലയാളം (Malayalam) | हिंदी (Hindi)**.
- Switching language instantly updates all topic names, sub-topics, video titles, and notes across the entire page with **zero content duplication**.
- When Malayalam is selected, videos link directly to the Malayalam channel counterparts ([@nmgmalayalamconnect](https://www.youtube.com/@nmgmalayalamconnect)).

### 4. 🔍 Precision Multilingual & Multi-Field Search
- Instant, real-time search across:
  - **Main Topic Titles** (English, Malayalam, Hindi)
  - **Main Topic Sub-Themes** (English, Malayalam, Hindi)
  - **Individual Video Titles** (English, Malayalam, Hindi)
  - **Individual Video Sub-Topics** (English, Malayalam, Hindi)
  - **Reference Notes & Scripture Citations** (English, Malayalam, Hindi)
- **Strict Video-Level Isolation**: When searching specific keywords (e.g. `Sexual`, `Anxiety`, `Python`, or `ശാപം`), the search engine hides unrelated videos within the playlist and displays **only the matching teachings**.

### 5. 📳 Attention-Drawing Search Shake Animation
- When a search is performed, matching topic and video cards execute a gentle, noticeable shake animation (`animate-search-shake`) and illuminate with an amber highlight ring.
- Instantly directs the user's eye to the exact matching cards.

### 6. 🎬 In-App Video Player Modal
- Click **Watch Teaching** to view any video inside a clean, responsive in-app modal powered by the YouTube Iframe API.
- Includes quick-copy citation button, video duration, and scripture notes.
- Press `Esc` or tap outside to close.

### 7. 🔗 Shareable Search URLs & SEO Optimization
- Live URL synchronization: searching automatically updates the URL query string (`?q=keyword&lang=en|ml|hi`) without refreshing.
- You can copy and share direct searchable links (e.g., `https://domain.com/?q=anxiety` or `https://domain.com/?lang=ml`).
- Comprehensive metadata, OpenGraph tags, Twitter cards, `sitemap.xml`, `robots.txt`, and **Schema.org JSON-LD** structured data for Google Search indexing.

---

## 🛠️ Technology Stack & Architecture

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | Modern React framework with Turbopack, Server Components, and static page optimization |
| **React 19** | Latest React version with optimized hooks (`useMemo`, `useState`, `useEffect`, `useId`) |
| **Tailwind CSS v4** | Utility-first CSS engine with custom `@keyframes` for moving clouds, ribbon waves, and search shake |
| **TypeScript** | Type-safe data models (`TopicItem`, `VideoItem`, `LanguageCode`) and compile-time verification |
| **Lucide React** | Lightweight, responsive SVG icons |
| **YouTube Iframe API** | Embed and stream YouTube video lectures securely inside the web application |
| **Schema.org & JSON-LD** | Rich structured data for search engine crawlers and educational knowledge graph indexing |
| **Python 3 Scripts** | Automated scraping utilities for fetching and synchronizing videos from YouTube channels |

---

## 📂 Project Directory Structure

```
iit-nazerath/
├── app/
│   ├── globals.css            # Tailwind v4, custom animations (driftClouds, warmWave, searchShake)
│   ├── layout.tsx             # Root layout with SEO metadata, keywords, and JSON-LD structured data
│   ├── page.tsx               # Main page (URL sync, multilingual search engine, video modals)
│   ├── robots.ts              # Search engine robots configuration
│   └── sitemap.ts             # Dynamic XML sitemap generation
├── components/
│   ├── HeroSearch.tsx         # Mobile-friendly hero section with prominent search bar
│   ├── Navbar.tsx             # Header with logo branding and single language toggle (En/Ml/Hi)
│   ├── TopicSection.tsx       # Topic card with subtopic below title, shake effect & video grid
│   ├── VideoPlayerModal.tsx   # Responsive YouTube player modal with copy citation
│   └── WavingBackground.tsx   # Moving sky, drifting clouds, and twinkling stars background
├── data/
│   ├── topics.ts              # Central database of topics, subtopics, and multilingual YouTube URLs
│   ├── translations.ts        # UI localization dictionary for English, Malayalam, and Hindi
│   └── extracted_*.json       # Cached video datasets from NMG channels
├── public/
│   └── logo.png               # Institutional crest logo
├── scripts/
│   ├── extract_channel_videos.py  # Python utility to scrape YouTube channel uploads
│   └── build_topics.py            # Automated builder script to generate topics.ts from playlists
└── package.json               # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.18+ or 20+ installed
- **npm** or **pnpm** or **yarn**

### Installation

1. Navigate to the project directory:
   ```bash
   cd "iit-nazerath"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔄 Updating & Adding Content in Code (Vercel Ready)

All video links, topic titles, and sub-topics are defined in [data/topics.ts](file:///Users/clinto.chippy/Developer/ADONAI%20YESHUA/NMZ%20Geo%20George/Software%20Programming/iit-nazerath/data/topics.ts).

You can manually edit, add, or customize content directly on GitHub or in Vercel:

```typescript
{
  id: "topic-break-generational-curses",
  playlistUrl: "https://www.youtube.com/playlist?list=PLcNKff7ql77YhQXdYwbirUZ6-2zSr0iwl",
  topicName: {
    en: "Break Generational Curses",
    ml: "പാരമ്പര്യ ശാപങ്ങൾ അഴിക്കുന്ന ശുശ്രൂഷ",
    hi: "पीढ़ीगत श्रापों को तोड़ने की सेवकाई"
  },
  subTopic: {
    en: "Breaking idol curses, sacrificial curses, and womb curses in Jesus' Name",
    ml: "വിഗ്രഹ ശാപങ്ങൾ, ബലി ശാപങ്ങൾ, ഗർഭപാത്ര ശാപങ്ങൾ എന്നിവയിൽ നിന്നുള്ള പൂർണ്ണ വിടുതൽ",
    hi: "मूर्ति पूजा, बलिवेदी के श्रापों और नकारात्मक वचनों से छुटकारा"
  },
  videos: [
    {
      id: "v-gen-1",
      title: {
        en: "LIVE: Generational Curse Breaking (Part 1)",
        ml: "പാരമ്പര്യ ശാപങ്ങൾ അഴിക്കൽ (ഭാഗം 1)",
        hi: "पीढ़ीगत श्राप तोड़ना (भाग 1)"
      },
      subTopic: {
        en: "Deliverance from ancestral covenants and dedicated items",
        ml: "പൂർവ്വിക വിഗ്രഹ സമർപ്പണങ്ങളിൽ നിന്നുള്ള വിടുതൽ പ്രാർത്ഥന",
        hi: "पूर्वजों के गुप्त समझौतों से छुटकारे की प्रार्थना"
      },
      youtubeUrl: {
        en: "https://www.youtube.com/watch?v=uCkJGHSWo9I",
        ml: "https://www.youtube.com/watch?v=azgXjKAflzo"
      },
      videoId: {
        en: "uCkJGHSWo9I",
        ml: "azgXjKAflzo"
      },
      duration: "1 hr 45m"
    }
  ]
}
```

### Automated YouTube Video Sync
To fetch newly uploaded videos from **@nmgglobalconnect**:
```bash
python3 scripts/extract_channel_videos.py
```

---

## 🌐 SEO & Search Engine Keywords

The application is optimized for search engines with the following targeted keywords:
- **Institutions & Ministries**: `IIT`, `Nazerath`, `NMG`, `Nazerath Ministries`, `Indian Institute of Theology - Nazerath`
- **Speakers**: `Geo Bro.`, `Geo Nazerath Bro.`, `Bro. Geo Nazareth`, `Bro. Geo Nazerath's teachings`
- **Channels**: `NMG Global Connect`, `NMG Malayalam Connect`
- **Core Topics**: `Break Generational Curses`, `Spiritual Warfare`, `Seven Spirits of God`, `My Hell Encounter`, `Prophetic Messages`, `Deliverance Ministry`

---

## 📄 License
This project is open-source and maintained under the **MIT License**.

© 2026 **Indian Institute of Theology - Nazerath • Nazerath Ministries (NMG)**.  
*Veritas, Lux et Sapientia — Truth, Light & Wisdom.*
