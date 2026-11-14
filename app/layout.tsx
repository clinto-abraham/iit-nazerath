import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iit-nazerath.vercel.app"),
  title: {
    default: "Indian Institute of Theology - Nazerath | Bro. Geo Nazerath's Teachings",
    template: "%s | Indian Institute of Theology - Nazerath"
  },
  description: "Official interactive theological knowledge repository and video reference index for Bro. Geo Nazerath's teachings from Nazerath Ministries (NMG). Comprehensive teachings on deliverance, spiritual warfare, end-times, and biblical studies in English and Malayalam.",
  keywords: [
    "IIT",
    "Nazerath",
    "NMG",
    "Nazerath Ministries",
    "Geo Bro.",
    "Geo Nazerath Bro.",
    "Bro. Geo Nazareth",
    "Bro. Geo Nazerath's teachings",
    "NMG Global Connect",
    "NMG Malayalam Connect",
    "Indian Institute of Theology",
    "Indian Institute of Theology - Nazerath",
    "Deliverance Ministry",
    "Spiritual Warfare",
    "Break Generational Curses",
    "Break Serpentine Spirits",
    "Seven Spirits of God",
    "My Hell Encounter",
    "Malayalam Christian Messages",
    "Prophetic Diary",
    "Biblical Hermeneutics"
  ],
  authors: [{ name: "Indian Institute of Theology - Nazerath" }, { name: "Nazerath Ministries (NMG)" }],
  creator: "Indian Institute of Theology - Nazerath",
  publisher: "Nazerath Ministries",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ml_IN", "hi_IN"],
    url: "https://iit-nazerath.vercel.app",
    siteName: "Indian Institute of Theology - Nazerath",
    title: "Indian Institute of Theology - Nazerath | Bro. Geo Nazerath's Teachings",
    description: "Searchable multimedia theological knowledge graph indexing Bro. Geo Nazerath's biblical teachings from Nazerath Ministries (NMG).",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Indian Institute of Theology - Nazerath Logo Crest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Institute of Theology - Nazerath | Bro. Geo Nazerath's Teachings",
    description: "Searchable multimedia theological index for Bro. Geo Nazerath's teachings from Nazerath Ministries (NMG).",
    images: ["/logo.png"],
    creator: "@nmgglobalconnect",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://iit-nazerath.vercel.app/#organization",
        "name": "Indian Institute of Theology - Nazerath",
        "alternateName": ["IIT Nazerath", "Nazerath Ministries", "NMG Global Connect"],
        "url": "https://iit-nazerath.vercel.app",
        "logo": "https://iit-nazerath.vercel.app/logo.png",
        "sameAs": [
          "https://www.youtube.com/@nmgglobalconnect",
          "https://www.youtube.com/@nmgmalayalamconnect"
        ],
        "description": "Theological institution and multimedia knowledge graph indexing Bro. Geo Nazerath's biblical teachings and ministry resources."
      },
      {
        "@type": "WebSite",
        "@id": "https://iit-nazerath.vercel.app/#website",
        "url": "https://iit-nazerath.vercel.app",
        "name": "Indian Institute of Theology - Nazerath",
        "publisher": {
          "@id": "https://iit-nazerath.vercel.app/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://iit-nazerath.vercel.app/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fbf8f3] text-stone-900 selection:bg-amber-200 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
