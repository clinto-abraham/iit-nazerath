/**
 * ==============================================================================
 * INDIAN INSTITUTE OF THEOLOGY - NAZERATH
 * Bro. Geo Nazerath - Nazerath Ministry
 * Comprehensive Video & Playlist Index mapped from:
 *   - English Channel: https://www.youtube.com/@nmgglobalconnect
 *   - Malayalam Channel: https://www.youtube.com/@nmgmalayalamconnect
 * ==============================================================================
 */

export type LanguageCode = "en" | "ml" | "hi";

export interface VideoItem {
  id: string;
  title: {
    en: string;
    ml: string;
    hi: string;
  };
  subTopic: {
    en: string;
    ml: string;
    hi: string;
  };
  youtubeUrl: {
    en: string;
    ml: string;
    hi?: string;
  };
  videoId: {
    en: string;
    ml: string;
    hi?: string;
  };
  duration?: string;
  notes?: {
    en: string;
    ml: string;
    hi: string;
  };
}

export interface TopicItem {
  id: string;
  playlistUrl?: string;
  topicName: {
    en: string;
    ml: string;
    hi: string;
  };
  subTopic: {
    en: string;
    ml: string;
    hi: string;
  };
  videos: VideoItem[];
}

export function getVideoUrl(video: VideoItem, lang: LanguageCode): string {
  if (lang === "ml" && video.youtubeUrl.ml) return video.youtubeUrl.ml;
  if (lang === "hi" && video.youtubeUrl.hi) return video.youtubeUrl.hi;
  return video.youtubeUrl.en || video.youtubeUrl.ml;
}

export function getVideoId(video: VideoItem, lang: LanguageCode): string {
  if (lang === "ml" && video.videoId.ml) return video.videoId.ml;
  if (lang === "hi" && video.videoId.hi) return video.videoId.hi;
  return video.videoId.en || video.videoId.ml;
}

export const TOPICS_DATA: TopicItem[] = [
  {
    "id": "topic-break-generational-curses",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLcNKff7ql77YhQXdYwbirUZ6-2zSr0iwl",
    "topicName": {
      "en": "Break Generational Curses",
      "ml": "പാരമ്പര്യ ശാപങ്ങൾ അഴിക്കുന്ന ശുശ്രൂഷ (Generational Curses)",
      "hi": "पीढ़ीगत श्रापों को तोड़ने की सेवकाई"
    },
    "subTopic": {
      "en": "Breaking idol curses, sacrificial curses, womb curses, and spoken pronouncements in Jesus' Name",
      "ml": "വിഗ്രഹ ശാപങ്ങൾ, ബലി ശാപങ്ങൾ, ഗർഭപാത്ര ശാപങ്ങൾ എന്നിവയിൽ നിന്നുള്ള പൂർണ്ണ വിടുതൽ",
      "hi": "मूर्ति पूजा, बलिवेदी के श्रापों और नकारात्मक वचनों से यीशु के नाम में छुटकारा"
    },
    "videos": [
      {
        "id": "gen-curse-1",
        "title": {
          "en": "LIVE: Generational Curse Breaking (Part 1) - Breaking Idol Curses",
          "ml": "പാരമ്പര്യ ശാപങ്ങൾ - Part 1",
          "hi": "LIVE: Generational Curse Breaking (Part 1) - Breaking Idol Curses"
        },
        "subTopic": {
          "en": "Deliverance from ancestral idol covenants, sacrificial offerings, and spoken curses",
          "ml": "പൂർവ്വിക ശാപങ്ങളിൽ നിന്നും ദുഷ്ട ബന്ധനങ്ങളിൽ നിന്നുമുള്ള വിടുതൽ",
          "hi": "पीढ़ीगत श्रापों और बंधनों से पूर्ण छुटकारा"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=uCkJGHSWo9I",
          "ml": "https://www.youtube.com/watch?v=5t9yYaNli-w",
          "hi": "https://www.youtube.com/watch?v=uCkJGHSWo9I"
        },
        "videoId": {
          "en": "uCkJGHSWo9I",
          "ml": "5t9yYaNli-w",
          "hi": "uCkJGHSWo9I"
        },
        "duration": "1 hr 45m"
      },
      {
        "id": "gen-curse-2",
        "title": {
          "en": "LIVE: Generational Curse Breaking (Part 2) - Breaking Sacrificial Curses",
          "ml": "പാരമ്പര്യ ശാപങ്ങൾ - Part 2",
          "hi": "LIVE: Generational Curse Breaking (Part 2) - Breaking Sacrificial Curses"
        },
        "subTopic": {
          "en": "Deliverance from ancestral idol covenants, sacrificial offerings, and spoken curses",
          "ml": "പൂർവ്വിക ശാപങ്ങളിൽ നിന്നും ദുഷ്ട ബന്ധനങ്ങളിൽ നിന്നുമുള്ള വിടുതൽ",
          "hi": "पीढ़ीगत श्रापों और बंधनों से पूर्ण छुटकारा"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=M4H3O3Fe0aQ",
          "ml": "https://www.youtube.com/watch?v=9EAYvpBHCEs",
          "hi": "https://www.youtube.com/watch?v=M4H3O3Fe0aQ"
        },
        "videoId": {
          "en": "M4H3O3Fe0aQ",
          "ml": "9EAYvpBHCEs",
          "hi": "M4H3O3Fe0aQ"
        },
        "duration": "1 hr 45m"
      },
      {
        "id": "gen-curse-3",
        "title": {
          "en": "LIVE: Generational Curse Breaking (Part 3) - Breaking Womb Curses",
          "ml": "പാരമ്പര്യ ശാപങ്ങൾ - Part 3",
          "hi": "LIVE: Generational Curse Breaking (Part 3) - Breaking Womb Curses"
        },
        "subTopic": {
          "en": "Deliverance from ancestral idol covenants, sacrificial offerings, and spoken curses",
          "ml": "പൂർവ്വിക ശാപങ്ങളിൽ നിന്നും ദുഷ്ട ബന്ധനങ്ങളിൽ നിന്നുമുള്ള വിടുതൽ",
          "hi": "पीढ़ीगत श्रापों और बंधनों से पूर्ण छुटकारा"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=DcQ78LmR1tQ",
          "ml": "https://www.youtube.com/watch?v=VlfhWFYRG8c",
          "hi": "https://www.youtube.com/watch?v=DcQ78LmR1tQ"
        },
        "videoId": {
          "en": "DcQ78LmR1tQ",
          "ml": "VlfhWFYRG8c",
          "hi": "DcQ78LmR1tQ"
        },
        "duration": "1 hr 45m"
      },
      {
        "id": "gen-curse-4",
        "title": {
          "en": "LIVE: Generational Curse Breaking (Part 4) - STOP WITCHCRAFT Patterns",
          "ml": "പാരമ്പര്യ ശാപങ്ങൾ - Part 4",
          "hi": "LIVE: Generational Curse Breaking (Part 4) - STOP WITCHCRAFT Patterns"
        },
        "subTopic": {
          "en": "Deliverance from ancestral idol covenants, sacrificial offerings, and spoken curses",
          "ml": "പൂർവ്വിക ശാപങ്ങളിൽ നിന്നും ദുഷ്ട ബന്ധനങ്ങളിൽ നിന്നുമുള്ള വിടുതൽ",
          "hi": "पीढ़ीगत श्रापों और बंधनों से पूर्ण छुटकारा"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=fkAi3CfqWAA",
          "ml": "https://www.youtube.com/watch?v=qEQIYfDfD7k",
          "hi": "https://www.youtube.com/watch?v=fkAi3CfqWAA"
        },
        "videoId": {
          "en": "fkAi3CfqWAA",
          "ml": "qEQIYfDfD7k",
          "hi": "fkAi3CfqWAA"
        },
        "duration": "1 hr 45m"
      },
      {
        "id": "gen-curse-5",
        "title": {
          "en": "LIVE: Breaking Spoken Curses (Deliverance Prayer That Works)",
          "ml": "അയക്കപ്പെട്ട ശാപവാക്കുകളെ CANCEL ചെയ്യുന്ന ശുശ്രുഷ  | CANCEL SPOKEN CURSES",
          "hi": "LIVE: Breaking Spoken Curses (Deliverance Prayer That Works)"
        },
        "subTopic": {
          "en": "Breaking destructive spoken curses, negative declarations, and witchcraft hexes",
          "ml": "അയക്കപ്പെട്ട ശാപവാക്കുകളെയും മന്ത്രവാദ വാക്കുകളെയും റദ്ദാക്കുന്നു",
          "hi": "नकारात्मक वचनों और श्रापों के प्रभाव को नष्ट करना"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=zwZw7UjvR48",
          "ml": "https://www.youtube.com/watch?v=heJ_PaK2bzA",
          "hi": "https://www.youtube.com/watch?v=zwZw7UjvR48"
        },
        "videoId": {
          "en": "zwZw7UjvR48",
          "ml": "heJ_PaK2bzA",
          "hi": "zwZw7UjvR48"
        },
        "duration": "1 hr 45m"
      },
      {
        "id": "gen-curse-6",
        "title": {
          "en": "LIVE: Break Sudden Anxiety & Spiritual Heaviness (Now!)",
          "ml": "തിരസ്കരണത്തിന്റെ (Rejection)  ബന്ധനങ്ങളിൽ നിന്നുള്ള വിടുതൽ  |  CANCEL REJECTION",
          "hi": "LIVE: Break Sudden Anxiety & Spiritual Heaviness (Now!)"
        },
        "subTopic": {
          "en": "Overcoming unexplained panic attacks and spiritual heart palpitations in Jesus Name",
          "ml": "കാരണമില്ലാതെ പെട്ടെന്നുണ്ടാകുന്ന ഉത്കണ്ഠകളിൽ നിന്നുള്ള വിടുതൽ",
          "hi": "अकारण चिंता और घबराहट से यीशु के नाम में छुटकारा"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=h3U3Jybd-Dg",
          "ml": "https://www.youtube.com/watch?v=EAqcRQeuwZw",
          "hi": "https://www.youtube.com/watch?v=h3U3Jybd-Dg"
        },
        "videoId": {
          "en": "h3U3Jybd-Dg",
          "ml": "EAqcRQeuwZw",
          "hi": "h3U3Jybd-Dg"
        },
        "duration": "1 hr 45m"
      },
      {
        "id": "gen-curse-7",
        "title": {
          "en": "LIVE: Cancel the Spirit of Rejection in Family, Marriage & Ministry",
          "ml": "LIVE: Cancel the Spirit of Rejection in Family, Marriage & Ministry",
          "hi": "LIVE: Cancel the Spirit of Rejection in Family, Marriage & Ministry"
        },
        "subTopic": {
          "en": "Cancelling the spirit of rejection in family, marriage, career, and ministry",
          "ml": "കുടുംബത്തിലും ദാമ്പത്യത്തിലും ഉണ്ടാകുന്ന തിരസ്കരണങ്ങളിൽ നിന്നുള്ള വിടുതൽ",
          "hi": "तिरस्कार और उपेक्षा की आत्मा के बंधनों से मुक्ति"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=UyHrPiVV-6g",
          "ml": "https://www.youtube.com/watch?v=UyHrPiVV-6g",
          "hi": "https://www.youtube.com/watch?v=UyHrPiVV-6g"
        },
        "videoId": {
          "en": "UyHrPiVV-6g",
          "ml": "UyHrPiVV-6g",
          "hi": "UyHrPiVV-6g"
        },
        "duration": "1 hr 45m"
      }
    ]
  },
  {
    "id": "topic-break-strongman-witchcraft",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLcNKff7ql77YLYlVLEWzp6wjPfXC2brHl",
    "topicName": {
      "en": "Break Strongman, Witchcraft & Delay",
      "ml": "ശക്തനെ കെട്ടുക, ആഭിചാരവും തടസ്സങ്ങളും മാറ്റുക",
      "hi": "बलवान को बांधना, जादू-टोना और रुकावटों का खात्मा"
    },
    "subTopic": {
      "en": "Binding the strongman, exposing 40 types of witchcraft, and breaking spirits of stagnation",
      "ml": "സാത്താന്റെ ശക്തനായ കാവൽക്കാരനെ കെട്ടുകയും 40 തരം ആഭിചാരങ്ങളിൽ നിന്ന് വിടുതൽ നേടുകയും ചെയ്യുക",
      "hi": "घर के बलवान को बांधना, 40 प्रकार के जादू-टोने की पहचान और विलंब की आत्मा से मुक्ति"
    },
    "videos": [
      {
        "id": "strong-1",
        "title": {
          "en": "Binding the Strongman Service : Taking Back What the Enemy Stole! | Bro Geo Nazareth",
          "ml": "Binding the Strongman Service : Taking Back What the Enemy Stole! | Bro Geo Nazareth",
          "hi": "Binding the Strongman Service : Taking Back What the Enemy Stole! | Bro Geo Nazareth"
        },
        "subTopic": {
          "en": "Binding the strongman, exposing witchcraft, and breaking delay",
          "ml": "ശക്തനെ കെട്ടുക, ആഭിചാര വഴികൾ അടയ്ക്കുക, കാലതാമസം മാറ്റുക",
          "hi": "बलवान को बांधना और रुकावटों को तोड़ना"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=Hu_yWC3NubE",
          "ml": "https://www.youtube.com/watch?v=Hu_yWC3NubE",
          "hi": "https://www.youtube.com/watch?v=Hu_yWC3NubE"
        },
        "videoId": {
          "en": "Hu_yWC3NubE",
          "ml": "Hu_yWC3NubE",
          "hi": "Hu_yWC3NubE"
        },
        "duration": "1 hr 50m"
      },
      {
        "id": "strong-2",
        "title": {
          "en": "The Lord Revealed — How to Break the Bloodline Strongman! | Bro Geo Nazareth",
          "ml": "The Lord Revealed — How to Break the Bloodline Strongman! | Bro Geo Nazareth",
          "hi": "The Lord Revealed — How to Break the Bloodline Strongman! | Bro Geo Nazareth"
        },
        "subTopic": {
          "en": "Binding the strongman, exposing witchcraft, and breaking delay",
          "ml": "ശക്തനെ കെട്ടുക, ആഭിചാര വഴികൾ അടയ്ക്കുക, കാലതാമസം മാറ്റുക",
          "hi": "बलवान को बांधना और रुकावटों को तोड़ना"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=Cnx3jvA_QR4",
          "ml": "https://www.youtube.com/watch?v=Cnx3jvA_QR4",
          "hi": "https://www.youtube.com/watch?v=Cnx3jvA_QR4"
        },
        "videoId": {
          "en": "Cnx3jvA_QR4",
          "ml": "Cnx3jvA_QR4",
          "hi": "Cnx3jvA_QR4"
        },
        "duration": "1 hr 50m"
      },
      {
        "id": "strong-3",
        "title": {
          "en": "40 Types of WITCHCRAFT explained | Christians MUST watch",
          "ml": "40 Types of WITCHCRAFT explained | Christians MUST watch",
          "hi": "40 Types of WITCHCRAFT explained | Christians MUST watch"
        },
        "subTopic": {
          "en": "Binding the strongman, exposing witchcraft, and breaking delay",
          "ml": "ശക്തനെ കെട്ടുക, ആഭിചാര വഴികൾ അടയ്ക്കുക, കാലതാമസം മാറ്റുക",
          "hi": "बलवान को बांधना और रुकावटों को तोड़ना"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=6Do7NDJonyI",
          "ml": "https://www.youtube.com/watch?v=6Do7NDJonyI",
          "hi": "https://www.youtube.com/watch?v=6Do7NDJonyI"
        },
        "videoId": {
          "en": "6Do7NDJonyI",
          "ml": "6Do7NDJonyI",
          "hi": "6Do7NDJonyI"
        },
        "duration": "1 hr 50m"
      },
      {
        "id": "strong-4",
        "title": {
          "en": "15 Alarming Signs WITCHCRAFT is attacking your life",
          "ml": "15 Alarming Signs WITCHCRAFT is attacking your life",
          "hi": "15 Alarming Signs WITCHCRAFT is attacking your life"
        },
        "subTopic": {
          "en": "Binding the strongman, exposing witchcraft, and breaking delay",
          "ml": "ശക്തനെ കെട്ടുക, ആഭിചാര വഴികൾ അടയ്ക്കുക, കാലതാമസം മാറ്റുക",
          "hi": "बलवान को बांधना और रुकावटों को तोड़ना"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=6YO0IhG-XY4",
          "ml": "https://www.youtube.com/watch?v=6YO0IhG-XY4",
          "hi": "https://www.youtube.com/watch?v=6YO0IhG-XY4"
        },
        "videoId": {
          "en": "6YO0IhG-XY4",
          "ml": "6YO0IhG-XY4",
          "hi": "6YO0IhG-XY4"
        },
        "duration": "1 hr 50m"
      },
      {
        "id": "strong-5",
        "title": {
          "en": "30 Signs the Spirit of DELAY affecting your life | Stagnation & Block",
          "ml": "30 Signs the Spirit of DELAY affecting your life | Stagnation & Block",
          "hi": "30 Signs the Spirit of DELAY affecting your life | Stagnation & Block"
        },
        "subTopic": {
          "en": "Binding the strongman, exposing witchcraft, and breaking delay",
          "ml": "ശക്തനെ കെട്ടുക, ആഭിചാര വഴികൾ അടയ്ക്കുക, കാലതാമസം മാറ്റുക",
          "hi": "बलवान को बांधना और रुकावटों को तोड़ना"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=eVWWFFD5BjA",
          "ml": "https://www.youtube.com/watch?v=eVWWFFD5BjA",
          "hi": "https://www.youtube.com/watch?v=eVWWFFD5BjA"
        },
        "videoId": {
          "en": "eVWWFFD5BjA",
          "ml": "eVWWFFD5BjA",
          "hi": "eVWWFFD5BjA"
        },
        "duration": "1 hr 50m"
      },
      {
        "id": "strong-6",
        "title": {
          "en": "No More Delays! Prayer to Break Stagnation and Move Forward",
          "ml": "No More Delays! Prayer to Break Stagnation and Move Forward",
          "hi": "No More Delays! Prayer to Break Stagnation and Move Forward"
        },
        "subTopic": {
          "en": "Binding the strongman, exposing witchcraft, and breaking delay",
          "ml": "ശക്തനെ കെട്ടുക, ആഭിചാര വഴികൾ അടയ്ക്കുക, കാലതാമസം മാറ്റുക",
          "hi": "बलवान को बांधना और रुकावटों को तोड़ना"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=9fuh95Jpqvg",
          "ml": "https://www.youtube.com/watch?v=9fuh95Jpqvg",
          "hi": "https://www.youtube.com/watch?v=9fuh95Jpqvg"
        },
        "videoId": {
          "en": "9fuh95Jpqvg",
          "ml": "9fuh95Jpqvg",
          "hi": "9fuh95Jpqvg"
        },
        "duration": "1 hr 50m"
      }
    ]
  },
  {
    "id": "topic-break-serpentine-spirits",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLcNKff7ql77ZBHAKdEy2pOCXiG5wB9sBS",
    "topicName": {
      "en": "Break Serpentine Spirits",
      "ml": "സർപ്പ ആത്മാക്കൾക്കെതിരെയുള്ള പോരാട്ടം (പൈതൺ, ലെവിയാത്തൻ)",
      "hi": "सर्पिलाकार दुष्टात्माओं पर विजय (पायथन, लेवियाथन)"
    },
    "subTopic": {
      "en": "Overcoming the spirits of Python, Leviathan, Hydra, and spiritual suffocation",
      "ml": "ശ്വാസം മുട്ടിക്കുന്ന പൈതൺ ആത്മാവ്, അഹങ്കാരത്തിന്റെ ലെവിയാത്തൻ എന്നിവയ്ക്കെതിരെയുള്ള ജയം",
      "hi": "प्रार्थना को दबाने वाली पायथन आत्मा और लेवियाथन पर मसीह की सामर्थ्य से विजय"
    },
    "videos": [
      {
        "id": "serp-1",
        "title": {
          "en": "Spirit of Python Explained | Mysteries of the Serpentine Kingdom of Satan | PART-3",
          "ml": "Spirit of Python Explained | Mysteries of the Serpentine Kingdom of Satan | PART-3",
          "hi": "Spirit of Python Explained | Mysteries of the Serpentine Kingdom of Satan | PART-3"
        },
        "subTopic": {
          "en": "Overcoming the spirits of Python, Leviathan, Hydra, and spiritual suffocation",
          "ml": "ശ്വാസം മുട്ടിക്കുന്ന പൈതൺ ആത്മാവ്, അഹങ്കാരത്തിന്റെ ലെവിയാത്തൻ എന്നിവയ്ക്കെതിരെയുള്ള ജയം",
          "hi": "पायथन और लेवियाथन की दुष्टात्माओं पर मसीह की सामर्थ्य से विजय"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=Gnvl4U-qlGc",
          "ml": "https://www.youtube.com/watch?v=Gnvl4U-qlGc",
          "hi": "https://www.youtube.com/watch?v=Gnvl4U-qlGc"
        },
        "videoId": {
          "en": "Gnvl4U-qlGc",
          "ml": "Gnvl4U-qlGc",
          "hi": "Gnvl4U-qlGc"
        },
        "duration": "1 hr 35m"
      },
      {
        "id": "serp-2",
        "title": {
          "en": "7 Signs the Leviathan Spirit Is Attacking Your Life | Meaning of the 7 Heads of Leviathan",
          "ml": "7 Signs the Leviathan Spirit Is Attacking Your Life | Meaning of the 7 Heads of Leviathan",
          "hi": "7 Signs the Leviathan Spirit Is Attacking Your Life | Meaning of the 7 Heads of Leviathan"
        },
        "subTopic": {
          "en": "Overcoming the spirits of Python, Leviathan, Hydra, and spiritual suffocation",
          "ml": "ശ്വാസം മുട്ടിക്കുന്ന പൈതൺ ആത്മാവ്, അഹങ്കാരത്തിന്റെ ലെവിയാത്തൻ എന്നിവയ്ക്കെതിരെയുള്ള ജയം",
          "hi": "पायथन और लेवियाथन की दुष्टात्माओं पर मसीह की सामर्थ्य से विजय"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=17tjWYv_BqI",
          "ml": "https://www.youtube.com/watch?v=17tjWYv_BqI",
          "hi": "https://www.youtube.com/watch?v=17tjWYv_BqI"
        },
        "videoId": {
          "en": "17tjWYv_BqI",
          "ml": "17tjWYv_BqI",
          "hi": "17tjWYv_BqI"
        },
        "duration": "1 hr 35m"
      },
      {
        "id": "serp-3",
        "title": {
          "en": "Spiritual Meaning of Multi-Headed, Coiled & Coloured Serpents in your Dream or Vision",
          "ml": "Spiritual Meaning of Multi-Headed, Coiled & Coloured Serpents in your Dream or Vision",
          "hi": "Spiritual Meaning of Multi-Headed, Coiled & Coloured Serpents in your Dream or Vision"
        },
        "subTopic": {
          "en": "Overcoming the spirits of Python, Leviathan, Hydra, and spiritual suffocation",
          "ml": "ശ്വാസം മുട്ടിക്കുന്ന പൈതൺ ആത്മാവ്, അഹങ്കാരത്തിന്റെ ലെവിയാത്തൻ എന്നിവയ്ക്കെതിരെയുള്ള ജയം",
          "hi": "पायथन और लेवियाथन की दुष्टात्माओं पर मसीह की सामर्थ्य से विजय"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=_H8l94sxZig",
          "ml": "https://www.youtube.com/watch?v=_H8l94sxZig",
          "hi": "https://www.youtube.com/watch?v=_H8l94sxZig"
        },
        "videoId": {
          "en": "_H8l94sxZig",
          "ml": "_H8l94sxZig",
          "hi": "_H8l94sxZig"
        },
        "duration": "1 hr 35m"
      },
      {
        "id": "serp-4",
        "title": {
          "en": "FALSE MANIFESTATION OF ST.MARY IS GOING TO INCREASE | SPIRIT OF HYDRA | PROPHETIC MESSAGE",
          "ml": "FALSE MANIFESTATION OF ST.MARY IS GOING TO INCREASE | SPIRIT OF HYDRA | PROPHETIC MESSAGE",
          "hi": "FALSE MANIFESTATION OF ST.MARY IS GOING TO INCREASE | SPIRIT OF HYDRA | PROPHETIC MESSAGE"
        },
        "subTopic": {
          "en": "Overcoming the spirits of Python, Leviathan, Hydra, and spiritual suffocation",
          "ml": "ശ്വാസം മുട്ടിക്കുന്ന പൈതൺ ആത്മാവ്, അഹങ്കാരത്തിന്റെ ലെവിയാത്തൻ എന്നിവയ്ക്കെതിരെയുള്ള ജയം",
          "hi": "पायथन और लेवियाथन की दुष्टात्माओं पर मसीह की सामर्थ्य से विजय"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=HZFYJrbcpL8",
          "ml": "https://www.youtube.com/watch?v=HZFYJrbcpL8",
          "hi": "https://www.youtube.com/watch?v=HZFYJrbcpL8"
        },
        "videoId": {
          "en": "HZFYJrbcpL8",
          "ml": "HZFYJrbcpL8",
          "hi": "HZFYJrbcpL8"
        },
        "duration": "1 hr 35m"
      },
      {
        "id": "serp-5",
        "title": {
          "en": "Seeing a SNAKE in your dream? WARNING! This is What It Really Means",
          "ml": "Seeing a SNAKE in your dream? WARNING! This is What It Really Means",
          "hi": "Seeing a SNAKE in your dream? WARNING! This is What It Really Means"
        },
        "subTopic": {
          "en": "Overcoming the spirits of Python, Leviathan, Hydra, and spiritual suffocation",
          "ml": "ശ്വാസം മുട്ടിക്കുന്ന പൈതൺ ആത്മാവ്, അഹങ്കാരത്തിന്റെ ലെവിയാത്തൻ എന്നിവയ്ക്കെതിരെയുള്ള ജയം",
          "hi": "पायथन और लेवियाथन की दुष्टात्माओं पर मसीह की सामर्थ्य से विजय"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=Sqe9RbFgsjM",
          "ml": "https://www.youtube.com/watch?v=Sqe9RbFgsjM",
          "hi": "https://www.youtube.com/watch?v=Sqe9RbFgsjM"
        },
        "videoId": {
          "en": "Sqe9RbFgsjM",
          "ml": "Sqe9RbFgsjM",
          "hi": "Sqe9RbFgsjM"
        },
        "duration": "1 hr 35m"
      },
      {
        "id": "serp-6",
        "title": {
          "en": "How to overcome Serpentine Spirits: Python, Cobra, Anaconda, Leviathan, Viper ? - PART 1",
          "ml": "How to overcome Serpentine Spirits: Python, Cobra, Anaconda, Leviathan, Viper ? - PART 1",
          "hi": "How to overcome Serpentine Spirits: Python, Cobra, Anaconda, Leviathan, Viper ? - PART 1"
        },
        "subTopic": {
          "en": "Overcoming the spirits of Python, Leviathan, Hydra, and spiritual suffocation",
          "ml": "ശ്വാസം മുട്ടിക്കുന്ന പൈതൺ ആത്മാവ്, അഹങ്കാരത്തിന്റെ ലെവിയാത്തൻ എന്നിവയ്ക്കെതിരെയുള്ള ജയം",
          "hi": "पायथन और लेवियाथन की दुष्टात्माओं पर मसीह की सामर्थ्य से विजय"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=JywA_UIxq0s",
          "ml": "https://www.youtube.com/watch?v=JywA_UIxq0s",
          "hi": "https://www.youtube.com/watch?v=JywA_UIxq0s"
        },
        "videoId": {
          "en": "JywA_UIxq0s",
          "ml": "JywA_UIxq0s",
          "hi": "JywA_UIxq0s"
        },
        "duration": "1 hr 35m"
      }
    ]
  },
  {
    "id": "topic-crowns-scrolls-keys",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLcNKff7ql77Zlg7CFnAY1bqMShAybdu-b",
    "topicName": {
      "en": "Crowns, Scrolls, Keys",
      "ml": "സ്വർഗ്ഗീയ കിരീടങ്ങൾ, പുസ്തകച്ചുരുളുകൾ, താക്കോലുകൾ",
      "hi": "स्वर्गीय मुकुट, जीवन की पुस्तकें और आत्मिक कुंजियां"
    },
    "subTopic": {
      "en": "Spiritual crowns of dunamis power, heavenly scrolls handed in prayer, and keys of the Kingdom",
      "ml": "പ്രാർത്ഥനയിൽ വെളിപ്പെടുന്ന ദർശനങ്ങളിലെ കിരീടങ്ങളും ചുരുളുകളും രാജ്യത്തിന്റെ താക്കോലുകളും",
      "hi": "प्रार्थना में मिलने वाली स्वर्गीय कुंजियां, मुकुट और जीवन की योजनाओं की पुस्तकें"
    },
    "videos": [
      {
        "id": "csk-1",
        "title": {
          "en": "Spiritual Meaning of Crowns. Different types of Spiritual Crowns. The Secrets of Dunamis Power.",
          "ml": "Spiritual Meaning of Crowns. Different types of Spiritual Crowns. The Secrets of Dunamis Power.",
          "hi": "Spiritual Meaning of Crowns. Different types of Spiritual Crowns. The Secrets of Dunamis Power."
        },
        "subTopic": {
          "en": "Spiritual meaning of heavenly crowns, scrolls in prayer, and keys of the Kingdom",
          "ml": "സ്വർഗ്ഗീയ കിരീടങ്ങൾ, പുസ്തകച്ചുരുളുകൾ, സ്വർഗ്ഗരാജ്യത്തിന്റെ താക്കോലുകൾ",
          "hi": "आत्मिक मुकुट, जीवन की पुस्तकें और स्वर्ग के राज्य की कुंजियां"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=o5ZIRouew_o",
          "ml": "https://www.youtube.com/watch?v=o5ZIRouew_o",
          "hi": "https://www.youtube.com/watch?v=o5ZIRouew_o"
        },
        "videoId": {
          "en": "o5ZIRouew_o",
          "ml": "o5ZIRouew_o",
          "hi": "o5ZIRouew_o"
        },
        "duration": "1 hr 15m"
      },
      {
        "id": "csk-2",
        "title": {
          "en": "Spiritual Meaning of Keys. Various types of Spiritual Keys. Secrets of Dunamis Power",
          "ml": "Spiritual Meaning of Keys. Various types of Spiritual Keys. Secrets of Dunamis Power",
          "hi": "Spiritual Meaning of Keys. Various types of Spiritual Keys. Secrets of Dunamis Power"
        },
        "subTopic": {
          "en": "Spiritual meaning of heavenly crowns, scrolls in prayer, and keys of the Kingdom",
          "ml": "സ്വർഗ്ഗീയ കിരീടങ്ങൾ, പുസ്തകച്ചുരുളുകൾ, സ്വർഗ്ഗരാജ്യത്തിന്റെ താക്കോലുകൾ",
          "hi": "आत्मिक मुकुट, जीवन की पुस्तकें और स्वर्ग के राज्य की कुंजियां"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=6pqW33-_vpg",
          "ml": "https://www.youtube.com/watch?v=6pqW33-_vpg",
          "hi": "https://www.youtube.com/watch?v=6pqW33-_vpg"
        },
        "videoId": {
          "en": "6pqW33-_vpg",
          "ml": "6pqW33-_vpg",
          "hi": "6pqW33-_vpg"
        },
        "duration": "1 hr 15m"
      },
      {
        "id": "csk-3",
        "title": {
          "en": "Visions and Dreams of Scrolls. What is the Meaning of it? Mysteries of Spiritual Scrolls.",
          "ml": "Visions and Dreams of Scrolls. What is the Meaning of it? Mysteries of Spiritual Scrolls.",
          "hi": "Visions and Dreams of Scrolls. What is the Meaning of it? Mysteries of Spiritual Scrolls."
        },
        "subTopic": {
          "en": "Spiritual meaning of heavenly crowns, scrolls in prayer, and keys of the Kingdom",
          "ml": "സ്വർഗ്ഗീയ കിരീടങ്ങൾ, പുസ്തകച്ചുരുളുകൾ, സ്വർഗ്ഗരാജ്യത്തിന്റെ താക്കോലുകൾ",
          "hi": "आत्मिक मुकुट, जीवन की पुस्तकें और स्वर्ग के राज्य की कुंजियां"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=YUO9NXX0jnY",
          "ml": "https://www.youtube.com/watch?v=YUO9NXX0jnY",
          "hi": "https://www.youtube.com/watch?v=YUO9NXX0jnY"
        },
        "videoId": {
          "en": "YUO9NXX0jnY",
          "ml": "YUO9NXX0jnY",
          "hi": "YUO9NXX0jnY"
        },
        "duration": "1 hr 15m"
      },
      {
        "id": "csk-4",
        "title": {
          "en": "Seeing visions of Scrolls in prayer ? What is the meaning of it ?",
          "ml": "Seeing visions of Scrolls in prayer ? What is the meaning of it ?",
          "hi": "Seeing visions of Scrolls in prayer ? What is the meaning of it ?"
        },
        "subTopic": {
          "en": "Spiritual meaning of heavenly crowns, scrolls in prayer, and keys of the Kingdom",
          "ml": "സ്വർഗ്ഗീയ കിരീടങ്ങൾ, പുസ്തകച്ചുരുളുകൾ, സ്വർഗ്ഗരാജ്യത്തിന്റെ താക്കോലുകൾ",
          "hi": "आत्मिक मुकुट, जीवन की पुस्तकें और स्वर्ग के राज्य की कुंजियां"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=cIrXjVgq1PM",
          "ml": "https://www.youtube.com/watch?v=cIrXjVgq1PM",
          "hi": "https://www.youtube.com/watch?v=cIrXjVgq1PM"
        },
        "videoId": {
          "en": "cIrXjVgq1PM",
          "ml": "cIrXjVgq1PM",
          "hi": "cIrXjVgq1PM"
        },
        "duration": "1 hr 15m"
      },
      {
        "id": "csk-5",
        "title": {
          "en": "Significance of Scrolls in the End Time. How does scrolls are handed over to us ?",
          "ml": "Significance of Scrolls in the End Time. How does scrolls are handed over to us ?",
          "hi": "Significance of Scrolls in the End Time. How does scrolls are handed over to us ?"
        },
        "subTopic": {
          "en": "Spiritual meaning of heavenly crowns, scrolls in prayer, and keys of the Kingdom",
          "ml": "സ്വർഗ്ഗീയ കിരീടങ്ങൾ, പുസ്തകച്ചുരുളുകൾ, സ്വർഗ്ഗരാജ്യത്തിന്റെ താക്കോലുകൾ",
          "hi": "आत्मिक मुकुट, जीवन की पुस्तकें और स्वर्ग के राज्य की कुंजियां"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=ndhsNJy4PsU",
          "ml": "https://www.youtube.com/watch?v=ndhsNJy4PsU",
          "hi": "https://www.youtube.com/watch?v=ndhsNJy4PsU"
        },
        "videoId": {
          "en": "ndhsNJy4PsU",
          "ml": "ndhsNJy4PsU",
          "hi": "ndhsNJy4PsU"
        },
        "duration": "1 hr 15m"
      }
    ]
  },
  {
    "id": "topic-seven-spirits",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL9aydrBgxQszD6JVBk6wdA0GJxlvHauP6",
    "topicName": {
      "en": "Seven Spirits of God & The Eyes of the Lamb",
      "ml": "Seven Spirits of God | കുഞ്ഞാടിന്റെ ഏഴു കണ്ണുകളുടെ അർഥം",
      "hi": "परमेश्वर की सात आत्माएं और मेमने की आंखें"
    },
    "subTopic": {
      "en": "Deep revelation on the sevenfold ministry and divine wisdom of the Holy Spirit",
      "ml": "പരിശുദ്ധാത്മാവിന്റെ ഏഴു ആത്മീയ തലങ്ങളും ജ്ഞാനവും ദൈവീക സാന്നിധ്യവും",
      "hi": "पवित्र आत्मा की सात गुना सामर्थ्य और ईश्वरीय ज्ञान"
    },
    "videos": [
      {
        "id": "seven-1",
        "title": {
          "en": "Seven Spirits of God (Part 1) — Meaning of the Seven Eyes of the Lamb",
          "ml": "PART 1 - കുഞ്ഞാടിന്റെ ഏഴു കണ്ണുകളുടെ അർഥം | Seven Spirits of God | #NazarethMinistries",
          "hi": "परमेश्वर की सात आत्माएं (भाग 1)"
        },
        "subTopic": {
          "en": "Revelation 5:6 — The Seven Spirits of God sent out into all the earth",
          "ml": "വെളിപ്പാട് 5:6 — ഭൂമിയിലേക്കു ഒക്കെയും അയച്ചിരിക്കുന്ന ദൈവത്തിന്റെ ഏഴു ആത്മാക്കൾ",
          "hi": "प्रकाशितवाक्य 5:6 — परमेश्वर की सात आत्माएं जो सारी पृथ्वी पर भेजी गई हैं"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=cP5kEdLPxDQ",
          "ml": "https://www.youtube.com/watch?v=cP5kEdLPxDQ",
          "hi": "https://www.youtube.com/watch?v=cP5kEdLPxDQ"
        },
        "videoId": {
          "en": "cP5kEdLPxDQ",
          "ml": "cP5kEdLPxDQ",
          "hi": "cP5kEdLPxDQ"
        },
        "duration": "45 mins"
      },
      {
        "id": "seven-2",
        "title": {
          "en": "Seven Spirits of God (Part 2) — Meaning of the Seven Eyes of the Lamb",
          "ml": "PART 2 - കുഞ്ഞാടിന്റെ ഏഴു കണ്ണുകളുടെ അർഥം | Seven Spirits of God | #NazarethMinistries",
          "hi": "परमेश्वर की सात आत्माएं (भाग 2)"
        },
        "subTopic": {
          "en": "Revelation 5:6 — The Seven Spirits of God sent out into all the earth",
          "ml": "വെളിപ്പാട് 5:6 — ഭൂമിയിലേക്കു ഒക്കെയും അയച്ചിരിക്കുന്ന ദൈവത്തിന്റെ ഏഴു ആത്മാക്കൾ",
          "hi": "प्रकाशितवाक्य 5:6 — परमेश्वर की सात आत्माएं जो सारी पृथ्वी पर भेजी गई हैं"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=vkgA9S5DXTs",
          "ml": "https://www.youtube.com/watch?v=vkgA9S5DXTs",
          "hi": "https://www.youtube.com/watch?v=vkgA9S5DXTs"
        },
        "videoId": {
          "en": "vkgA9S5DXTs",
          "ml": "vkgA9S5DXTs",
          "hi": "vkgA9S5DXTs"
        },
        "duration": "45 mins"
      },
      {
        "id": "seven-3",
        "title": {
          "en": "Seven Spirits of God (Part 3) — Meaning of the Seven Eyes of the Lamb",
          "ml": "PART 3 - കുഞ്ഞാടിന്റെ ഏഴു കണ്ണുകളുടെ അർഥം | Seven Spirits of God | #NazarethMinistries",
          "hi": "परमेश्वर की सात आत्माएं (भाग 3)"
        },
        "subTopic": {
          "en": "Revelation 5:6 — The Seven Spirits of God sent out into all the earth",
          "ml": "വെളിപ്പാട് 5:6 — ഭൂമിയിലേക്കു ഒക്കെയും അയച്ചിരിക്കുന്ന ദൈവത്തിന്റെ ഏഴു ആത്മാക്കൾ",
          "hi": "प्रकाशितवाक्य 5:6 — परमेश्वर की सात आत्माएं जो सारी पृथ्वी पर भेजी गई हैं"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=CrXKbdubqrg",
          "ml": "https://www.youtube.com/watch?v=CrXKbdubqrg",
          "hi": "https://www.youtube.com/watch?v=CrXKbdubqrg"
        },
        "videoId": {
          "en": "CrXKbdubqrg",
          "ml": "CrXKbdubqrg",
          "hi": "CrXKbdubqrg"
        },
        "duration": "45 mins"
      },
      {
        "id": "seven-4",
        "title": {
          "en": "Seven Spirits of God (Part 4) — Meaning of the Seven Eyes of the Lamb",
          "ml": "PART 4 - കുഞ്ഞാടിന്റെ ഏഴു കണ്ണുകളുടെ അർഥം | Seven Spirits of God | #NazarethMinistries",
          "hi": "परमेश्वर की सात आत्माएं (भाग 4)"
        },
        "subTopic": {
          "en": "Revelation 5:6 — The Seven Spirits of God sent out into all the earth",
          "ml": "വെളിപ്പാട് 5:6 — ഭൂമിയിലേക്കു ഒക്കെയും അയച്ചിരിക്കുന്ന ദൈവത്തിന്റെ ഏഴു ആത്മാക്കൾ",
          "hi": "प्रकाशितवाक्य 5:6 — परमेश्वर की सात आत्माएं जो सारी पृथ्वी पर भेजी गई हैं"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=aHaMuHjjRNk",
          "ml": "https://www.youtube.com/watch?v=aHaMuHjjRNk",
          "hi": "https://www.youtube.com/watch?v=aHaMuHjjRNk"
        },
        "videoId": {
          "en": "aHaMuHjjRNk",
          "ml": "aHaMuHjjRNk",
          "hi": "aHaMuHjjRNk"
        },
        "duration": "45 mins"
      },
      {
        "id": "seven-5",
        "title": {
          "en": "Seven Spirits of God (Part 5) — Meaning of the Seven Eyes of the Lamb",
          "ml": "PART 5 - കുഞ്ഞാടിന്റെ ഏഴു കണ്ണുകളുടെ അർഥം | Seven Spirits of God | #NazarethMinistries",
          "hi": "परमेश्वर की सात आत्माएं (भाग 5)"
        },
        "subTopic": {
          "en": "Revelation 5:6 — The Seven Spirits of God sent out into all the earth",
          "ml": "വെളിപ്പാട് 5:6 — ഭൂമിയിലേക്കു ഒക്കെയും അയച്ചിരിക്കുന്ന ദൈവത്തിന്റെ ഏഴു ആത്മാക്കൾ",
          "hi": "प्रकाशितवाक्य 5:6 — परमेश्वर की सात आत्माएं जो सारी पृथ्वी पर भेजी गई हैं"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=fc4DByvxRCs",
          "ml": "https://www.youtube.com/watch?v=fc4DByvxRCs",
          "hi": "https://www.youtube.com/watch?v=fc4DByvxRCs"
        },
        "videoId": {
          "en": "fc4DByvxRCs",
          "ml": "fc4DByvxRCs",
          "hi": "fc4DByvxRCs"
        },
        "duration": "45 mins"
      }
    ]
  },
  {
    "id": "topic-must-watch-deliverance",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL9aydrBgxQsw8I69isloDc6waWOz9oMX0",
    "topicName": {
      "en": "Must Watch Before Deliverance (Essential Preparation)",
      "ml": "ഡെലിവെറൻസിനു മുൻപ് ഇത് കാണണം | Must Watch Before Deliverance",
      "hi": "छुटकारे से पहले अवश्य देखें (अनिवार्य तैयारी)"
    },
    "subTopic": {
      "en": "Crucial teachings on demonic exit points, overcoming fear, and preventing re-entry of spirits",
      "ml": "ദുരാത്മാക്കൾ വിട്ടുപോകുന്ന വഴികൾ, വിടുതലിന് മുൻപും ശേഷവുമുള്ള ആത്മീയ ജാഗ്രത",
      "hi": "दुष्टात्माओं के निकलने के मार्ग और छुटकारे के बाद आत्मिक सुरक्षा"
    },
    "videos": [
      {
        "id": "deliv-prep-1",
        "title": {
          "en": "ദുരാത്മാക്കൾ വിട്ടുപോകുന്ന 25 വ്യത്യസ്ത രീതികൾ | DEMONIC EXIT POINTS",
          "ml": "ദുരാത്മാക്കൾ വിട്ടുപോകുന്ന 25 വ്യത്യസ്ത രീതികൾ | DEMONIC EXIT POINTS",
          "hi": "ദുരാത്മാക്കൾ വിട്ടുപോകുന്ന 25 വ്യത്യസ്ത രീതികൾ | DEMONIC EXIT POINTS"
        },
        "subTopic": {
          "en": "25 different ways demonic spirits manifest and exit during deliverance",
          "ml": "വിടുതൽ വേളയിൽ ദുരാത്മാക്കൾ വിട്ടുപോകുന്ന 25 വ്യത്യസ്ത രീതികൾ",
          "hi": "दुष्टात्माओं के शरीर छोड़ने के 25 अलग-अलग तरीके"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=9HbwLn4l4pM",
          "ml": "https://www.youtube.com/watch?v=9HbwLn4l4pM",
          "hi": "https://www.youtube.com/watch?v=9HbwLn4l4pM"
        },
        "videoId": {
          "en": "9HbwLn4l4pM",
          "ml": "9HbwLn4l4pM",
          "hi": "9HbwLn4l4pM"
        },
        "duration": "50 mins"
      },
      {
        "id": "deliv-prep-2",
        "title": {
          "en": "ദുരാത്മാക്കൾ നിങ്ങളെ കബളിപ്പിക്കുന്ന രീതികൾ | Tricks of Demons During Deliverance",
          "ml": "ദുരാത്മാക്കൾ നിങ്ങളെ കബളിപ്പിക്കുന്ന രീതികൾ | Tricks of Demons During Deliverance",
          "hi": "ദുരാത്മാക്കൾ നിങ്ങളെ കബളിപ്പിക്കുന്ന രീതികൾ | Tricks of Demons During Deliverance"
        },
        "subTopic": {
          "en": "Exposing deceptive tricks and lies used by evil spirits during prayer",
          "ml": "പ്രാർത്ഥനാ വേളയിൽ പിശാച് വിശ്വാസികളെ കബളിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന തന്ത്രങ്ങൾ",
          "hi": "छुटकारे के समय दुष्टात्माओं द्वारा बोले जाने वाले झूठ और धोखे"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=U3zZwQ0TrDE",
          "ml": "https://www.youtube.com/watch?v=U3zZwQ0TrDE",
          "hi": "https://www.youtube.com/watch?v=U3zZwQ0TrDE"
        },
        "videoId": {
          "en": "U3zZwQ0TrDE",
          "ml": "U3zZwQ0TrDE",
          "hi": "U3zZwQ0TrDE"
        },
        "duration": "50 mins"
      },
      {
        "id": "deliv-prep-3",
        "title": {
          "en": "ഭയത്തെ തോൽപ്പിക്കാനുള്ള താക്കോലുകൾ | Keys to overcome FEAR permanently",
          "ml": "ഭയത്തെ തോൽപ്പിക്കാനുള്ള താക്കോലുകൾ | Keys to overcome FEAR permanently",
          "hi": "ഭയത്തെ തോൽപ്പിക്കാനുള്ള താക്കോലുകൾ | Keys to overcome FEAR permanently"
        },
        "subTopic": {
          "en": "Biblical keys and authority in Christ to overcome anxiety, panic, and fear",
          "ml": "ഭയം, പരിഭ്രാന്തി, ഉത്കണ്ഠ എന്നിവയിൽ നിന്ന് ശാശ്വത വിടുതൽ നേടാനുള്ള താക്കോലുകൾ",
          "hi": "भय और घबराहट पर मसीह के अधिकार से स्थायी विजय"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=1efzOZ9fwWo",
          "ml": "https://www.youtube.com/watch?v=1efzOZ9fwWo",
          "hi": "https://www.youtube.com/watch?v=1efzOZ9fwWo"
        },
        "videoId": {
          "en": "1efzOZ9fwWo",
          "ml": "1efzOZ9fwWo",
          "hi": "1efzOZ9fwWo"
        },
        "duration": "50 mins"
      },
      {
        "id": "deliv-prep-4",
        "title": {
          "en": "സാത്താന്റെ തിന്മകളെ അനുദിനം പ്രതിരോധിക്കേണ്ടത് എങ്ങനെയാണ് ?",
          "ml": "സാത്താന്റെ തിന്മകളെ അനുദിനം പ്രതിരോധിക്കേണ്ടത് എങ്ങനെയാണ് ?",
          "hi": "സാത്താന്റെ തിന്മകളെ അനുദിനം പ്രതിരോധിക്കേണ്ടത് എങ്ങനെയാണ് ?"
        },
        "subTopic": {
          "en": "Daily spiritual armor and practical steps to resist demonic attacks",
          "ml": "ശത്രുവിന്റെ അനുദിന ആക്രമണങ്ങളെ ദൈവവചനത്താൽ ചെറുത്തുതോൽപ്പിക്കുക",
          "hi": "प्रतिदिन शैतान के तीरों का सामना करने के आत्मिक उपाय"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=8h4o3rJldHg",
          "ml": "https://www.youtube.com/watch?v=8h4o3rJldHg",
          "hi": "https://www.youtube.com/watch?v=8h4o3rJldHg"
        },
        "videoId": {
          "en": "8h4o3rJldHg",
          "ml": "8h4o3rJldHg",
          "hi": "8h4o3rJldHg"
        },
        "duration": "50 mins"
      },
      {
        "id": "deliv-prep-5",
        "title": {
          "en": "വ്യഭിചാരത്തിന്റെ ആത്മീയ പ്രശ്നങ്ങൾ എന്തൊക്കെയാണ് ?",
          "ml": "വ്യഭിചാരത്തിന്റെ ആത്മീയ പ്രശ്നങ്ങൾ എന്തൊക്കെയാണ് ?",
          "hi": "വ്യഭിചാരത്തിന്റെ ആത്മീയ പ്രശ്നങ്ങൾ എന്തൊക്കെയാണ് ?"
        },
        "subTopic": {
          "en": "Spiritual soul ties, defilement, and demonic legal access caused by sexual sins",
          "ml": "വ്യഭിചാര പാപങ്ങൾ ആത്മീയ ജീവിതത്തിൽ ഉണ്ടാക്കുന്ന വിള്ളലുകളും ബന്ധനങ്ങളും",
          "hi": "यौन पापों के कारण आत्मा और जीवन पर पड़ने वाले प्रभाव"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=QbZIHwtYS8Q",
          "ml": "https://www.youtube.com/watch?v=QbZIHwtYS8Q",
          "hi": "https://www.youtube.com/watch?v=QbZIHwtYS8Q"
        },
        "videoId": {
          "en": "QbZIHwtYS8Q",
          "ml": "QbZIHwtYS8Q",
          "hi": "QbZIHwtYS8Q"
        },
        "duration": "50 mins"
      },
      {
        "id": "deliv-prep-6",
        "title": {
          "en": "ലൈംഗിക പാപങ്ങളെ എങ്ങനെ മറികടക്കാം?|The Enchantress | goddess of sexual immorality| Prophetic Message",
          "ml": "ലൈംഗിക പാപങ്ങളെ എങ്ങനെ മറികടക്കാം?|The Enchantress | goddess of sexual immorality| Prophetic Message",
          "hi": "ലൈംഗിക പാപങ്ങളെ എങ്ങനെ മറികടക്കാം?|The Enchantress | goddess of sexual immorality| Prophetic Message"
        },
        "subTopic": {
          "en": "Overcoming sexual immorality, breaking the enchantress spirit, and total cleansing",
          "ml": "ലൈംഗിക പാപങ്ങളെ ജയിക്കാനും മോഹവലയങ്ങളിൽ നിന്ന് മോചനം നേടാനുമുള്ള സന്ദേശം",
          "hi": "यौन अनैतिकता की आत्मा पर विजय और मन की पूर्ण पवित्रता"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=ljdZQpUuSHQ",
          "ml": "https://www.youtube.com/watch?v=ljdZQpUuSHQ",
          "hi": "https://www.youtube.com/watch?v=ljdZQpUuSHQ"
        },
        "videoId": {
          "en": "ljdZQpUuSHQ",
          "ml": "ljdZQpUuSHQ",
          "hi": "ljdZQpUuSHQ"
        },
        "duration": "50 mins"
      },
      {
        "id": "deliv-prep-7",
        "title": {
          "en": "നിങ്ങളുടെ ഉള്ളിലുള്ള ശത്രുക്കൾ  | The enemies with in you",
          "ml": "നിങ്ങളുടെ ഉള്ളിലുള്ള ശത്രുക്കൾ  | The enemies with in you",
          "hi": "നിങ്ങളുടെ ഉള്ളിലുള്ള ശത്രുക്കൾ  | The enemies with in you"
        },
        "subTopic": {
          "en": "Conquering internal enemies: bitterness, unforgiveness, secret resentment, and pride",
          "ml": "ഉള്ളിൽ ഒളിഞ്ഞിരിക്കുന്ന ശത്രുക്കളെ തിരിച്ചറിഞ്ഞ് ക്രിസ്തുവിൽ ശുദ്ധീകരിക്കപ്പെടുക",
          "hi": "भीतर के गुप्त शत्रुओं: कड़वाहट और क्रोध पर विजय"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=cTkctK0OMyA",
          "ml": "https://www.youtube.com/watch?v=cTkctK0OMyA",
          "hi": "https://www.youtube.com/watch?v=cTkctK0OMyA"
        },
        "videoId": {
          "en": "cTkctK0OMyA",
          "ml": "cTkctK0OMyA",
          "hi": "cTkctK0OMyA"
        },
        "duration": "50 mins"
      }
    ]
  },
  {
    "id": "topic-first-lessons",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL9aydrBgxQswPQKHA4TaXRJkPiMRE40wr",
    "topicName": {
      "en": "First Lessons in Spirituality & Spiritual Growth",
      "ml": "ആത്മീയതയുടെ ആദ്യപാഠങ്ങൾ | First Lessons of Spirituality",
      "hi": "आत्मिकता के प्राथमिक पाठ और आत्मिक उन्नति"
    },
    "subTopic": {
      "en": "Foundational teachings on how the human soul and spiritual body grow in Christ",
      "ml": "ആത്മീയ മനുഷ്യന്റെ വളർച്ചയും ദൈവവുമായുള്ള ആഴമേറിയ ബന്ധവും",
      "hi": "मनुष्य की आत्मा का रूप और प्रभु में परिपक्व होने की दिशा"
    },
    "videos": [
      {
        "id": "first-1",
        "title": {
          "en": "ആത്മീയ വളർച്ച സംഭവിക്കണമെങ്കിൽ എന്ത് ചെയ്യണം ? | How to grow in the Spirit?",
          "ml": "ആത്മീയ വളർച്ച സംഭവിക്കണമെങ്കിൽ എന്ത് ചെയ്യണം ? | How to grow in the Spirit?",
          "hi": "ആത്മീയ വളർച്ച സംഭവിക്കണമെങ്കിൽ എന്ത് ചെയ്യണം ? | How to grow in the Spirit?"
        },
        "subTopic": {
          "en": "How to grow in the spirit, knowing God's will, spiritual body, and spiritual ranking",
          "ml": "ആത്മീയ വളർച്ച, ദൈവഹിതം അറിയൽ, ആത്മീയ ശരീരം, ആത്മീയ റാങ്കിങ്",
          "hi": "आत्मिक विकास, परमेश्वर की इच्छा जानना और आत्मिक देह"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=pWgCorrrmg8",
          "ml": "https://www.youtube.com/watch?v=pWgCorrrmg8",
          "hi": "https://www.youtube.com/watch?v=pWgCorrrmg8"
        },
        "videoId": {
          "en": "pWgCorrrmg8",
          "ml": "pWgCorrrmg8",
          "hi": "pWgCorrrmg8"
        },
        "duration": "45 mins"
      },
      {
        "id": "first-2",
        "title": {
          "en": "നിങ്ങളെക്കുറിച്ചുള്ള ദൈവഹിതം അറിയാൻ എന്ത് ചെയ്യണം ?",
          "ml": "നിങ്ങളെക്കുറിച്ചുള്ള ദൈവഹിതം അറിയാൻ എന്ത് ചെയ്യണം ?",
          "hi": "നിങ്ങളെക്കുറിച്ചുള്ള ദൈവഹിതം അറിയാൻ എന്ത് ചെയ്യണം ?"
        },
        "subTopic": {
          "en": "How to grow in the spirit, knowing God's will, spiritual body, and spiritual ranking",
          "ml": "ആത്മീയ വളർച്ച, ദൈവഹിതം അറിയൽ, ആത്മീയ ശരീരം, ആത്മീയ റാങ്കിങ്",
          "hi": "आत्मिक विकास, परमेश्वर की इच्छा जानना और आत्मिक देह"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=RYrANbDOR0s",
          "ml": "https://www.youtube.com/watch?v=RYrANbDOR0s",
          "hi": "https://www.youtube.com/watch?v=RYrANbDOR0s"
        },
        "videoId": {
          "en": "RYrANbDOR0s",
          "ml": "RYrANbDOR0s",
          "hi": "RYrANbDOR0s"
        },
        "duration": "45 mins"
      },
      {
        "id": "first-3",
        "title": {
          "en": "നിങ്ങളെക്കുറിച്ചു നിങ്ങൾക്കറിയാത്ത ചില വെളിപ്പാടുകൾ.",
          "ml": "നിങ്ങളെക്കുറിച്ചു നിങ്ങൾക്കറിയാത്ത ചില വെളിപ്പാടുകൾ.",
          "hi": "നിങ്ങളെക്കുറിച്ചു നിങ്ങൾക്കറിയാത്ത ചില വെളിപ്പാടുകൾ."
        },
        "subTopic": {
          "en": "How to grow in the spirit, knowing God's will, spiritual body, and spiritual ranking",
          "ml": "ആത്മീയ വളർച്ച, ദൈവഹിതം അറിയൽ, ആത്മീയ ശരീരം, ആത്മീയ റാങ്കിങ്",
          "hi": "आत्मिक विकास, परमेश्वर की इच्छा जानना और आत्मिक देह"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=DLEER3jU8bI",
          "ml": "https://www.youtube.com/watch?v=DLEER3jU8bI",
          "hi": "https://www.youtube.com/watch?v=DLEER3jU8bI"
        },
        "videoId": {
          "en": "DLEER3jU8bI",
          "ml": "DLEER3jU8bI",
          "hi": "DLEER3jU8bI"
        },
        "duration": "45 mins"
      },
      {
        "id": "first-4",
        "title": {
          "en": "മനുക്ഷ്യ ആത്മാവിന്റെ രൂപം എങ്ങനെയാണ് ഇരിക്കുന്നത് ? | How to grow in the Spirit?",
          "ml": "മനുക്ഷ്യ ആത്മാവിന്റെ രൂപം എങ്ങനെയാണ് ഇരിക്കുന്നത് ? | How to grow in the Spirit?",
          "hi": "മനുക്ഷ്യ ആത്മാവിന്റെ രൂപം എങ്ങനെയാണ് ഇരിക്കുന്നത് ? | How to grow in the Spirit?"
        },
        "subTopic": {
          "en": "How to grow in the spirit, knowing God's will, spiritual body, and spiritual ranking",
          "ml": "ആത്മീയ വളർച്ച, ദൈവഹിതം അറിയൽ, ആത്മീയ ശരീരം, ആത്മീയ റാങ്കിങ്",
          "hi": "आत्मिक विकास, परमेश्वर की इच्छा जानना और आत्मिक देह"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=Y4OQAZ5iq9o",
          "ml": "https://www.youtube.com/watch?v=Y4OQAZ5iq9o",
          "hi": "https://www.youtube.com/watch?v=Y4OQAZ5iq9o"
        },
        "videoId": {
          "en": "Y4OQAZ5iq9o",
          "ml": "Y4OQAZ5iq9o",
          "hi": "Y4OQAZ5iq9o"
        },
        "duration": "45 mins"
      },
      {
        "id": "first-5",
        "title": {
          "en": "നിങ്ങളുടെ ആത്മീയ ശരീരത്തെക്കുറിച്ചു അറിയേണ്ട കാര്യങ്ങൾ | Your spiritual body",
          "ml": "നിങ്ങളുടെ ആത്മീയ ശരീരത്തെക്കുറിച്ചു അറിയേണ്ട കാര്യങ്ങൾ | Your spiritual body",
          "hi": "നിങ്ങളുടെ ആത്മീയ ശരീരത്തെക്കുറിച്ചു അറിയേണ്ട കാര്യങ്ങൾ | Your spiritual body"
        },
        "subTopic": {
          "en": "How to grow in the spirit, knowing God's will, spiritual body, and spiritual ranking",
          "ml": "ആത്മീയ വളർച്ച, ദൈവഹിതം അറിയൽ, ആത്മീയ ശരീരം, ആത്മീയ റാങ്കിങ്",
          "hi": "आत्मिक विकास, परमेश्वर की इच्छा जानना और आत्मिक देह"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=rtXVZ-gJShA",
          "ml": "https://www.youtube.com/watch?v=rtXVZ-gJShA",
          "hi": "https://www.youtube.com/watch?v=rtXVZ-gJShA"
        },
        "videoId": {
          "en": "rtXVZ-gJShA",
          "ml": "rtXVZ-gJShA",
          "hi": "rtXVZ-gJShA"
        },
        "duration": "45 mins"
      },
      {
        "id": "first-6",
        "title": {
          "en": "ആത്മീയ റാങ്കിങ് (Spiritual Ranking) എന്നാൽ എന്താണ് ?",
          "ml": "ആത്മീയ റാങ്കിങ് (Spiritual Ranking) എന്നാൽ എന്താണ് ?",
          "hi": "ആത്മീയ റാങ്കിങ് (Spiritual Ranking) എന്നാൽ എന്താണ് ?"
        },
        "subTopic": {
          "en": "How to grow in the spirit, knowing God's will, spiritual body, and spiritual ranking",
          "ml": "ആത്മീയ വളർച്ച, ദൈവഹിതം അറിയൽ, ആത്മീയ ശരീരം, ആത്മീയ റാങ്കിങ്",
          "hi": "आत्मिक विकास, परमेश्वर की इच्छा जानना और आत्मिक देह"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=V0px25iyoAI",
          "ml": "https://www.youtube.com/watch?v=V0px25iyoAI",
          "hi": "https://www.youtube.com/watch?v=V0px25iyoAI"
        },
        "videoId": {
          "en": "V0px25iyoAI",
          "ml": "V0px25iyoAI",
          "hi": "V0px25iyoAI"
        },
        "duration": "45 mins"
      },
      {
        "id": "first-7",
        "title": {
          "en": "ആത്മീയതയുടെ ആദ്യപാഠങ്ങൾ എന്തൊക്കെയാണ് ?  First lessons of Spiritulity",
          "ml": "ആത്മീയതയുടെ ആദ്യപാഠങ്ങൾ എന്തൊക്കെയാണ് ?  First lessons of Spiritulity",
          "hi": "ആത്മീയതയുടെ ആദ്യപാഠങ്ങൾ എന്തൊക്കെയാണ് ?  First lessons of Spiritulity"
        },
        "subTopic": {
          "en": "How to grow in the spirit, knowing God's will, spiritual body, and spiritual ranking",
          "ml": "ആത്മീയ വളർച്ച, ദൈവഹിതം അറിയൽ, ആത്മീയ ശരീരം, ആത്മീയ റാങ്കിങ്",
          "hi": "आत्मिक विकास, परमेश्वर की इच्छा जानना और आत्मिक देह"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=OIoJPSV3-yY",
          "ml": "https://www.youtube.com/watch?v=OIoJPSV3-yY",
          "hi": "https://www.youtube.com/watch?v=OIoJPSV3-yY"
        },
        "videoId": {
          "en": "OIoJPSV3-yY",
          "ml": "OIoJPSV3-yY",
          "hi": "OIoJPSV3-yY"
        },
        "duration": "45 mins"
      }
    ]
  },
  {
    "id": "topic-divorces-marriage",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL9aydrBgxQsx8kHpISHpQrJcxiSWWHkac",
    "topicName": {
      "en": "Marriage Healing & Overcoming Divorces",
      "ml": "വിവാഹമോചനത്തിന്റെ കാരണങ്ങൾ | പരിഹാരങ്ങൾ | Divorces & Solutions",
      "hi": "विवाह की चंगाई और पारिवारिक पुनर्स्थापना"
    },
    "subTopic": {
      "en": "Spiritual roots of separation, overcoming anger, and restoring covenant love in homes",
      "ml": "കുടുംബത്തിൽ സമാധാനവും പരസ്പര സ്നേഹവും വീണ്ടെടുക്കാനുള്ള പ്രായോഗിക വഴികൾ",
      "hi": "परिवार में मेल-मिलाप और प्रेम की पुनर्स्थापना के उपाय"
    },
    "videos": [
      {
        "id": "divorce-1",
        "title": {
          "en": "Reasons for Divorces & Biblical Solutions (Part 1)",
          "ml": "Part 1 - വിവാഹമോചനത്തിന്റെ കാരണങ്ങൾ എന്തൊക്കെയാണ് | പരിഹാരങ്ങൾ | Reasons of Divorces | Solutions",
          "hi": "तलाक के कारण और समाधान (भाग 1)"
        },
        "subTopic": {
          "en": "Root causes of marital breakdown and spiritual keys to healing families",
          "ml": "വിവാഹബന്ധങ്ങളിലെ തകർച്ചകളുടെ ആത്മീയ കാരണങ്ങളും പരിഹാരങ്ങളും",
          "hi": "वैवाहिक जीवन में आने वाली दरारों के कारण और ईश्वरीय समाधान"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=C5iV51lxdeI",
          "ml": "https://www.youtube.com/watch?v=C5iV51lxdeI",
          "hi": "https://www.youtube.com/watch?v=C5iV51lxdeI"
        },
        "videoId": {
          "en": "C5iV51lxdeI",
          "ml": "C5iV51lxdeI",
          "hi": "C5iV51lxdeI"
        },
        "duration": "55 mins"
      },
      {
        "id": "divorce-2",
        "title": {
          "en": "Reasons for Divorces & Biblical Solutions (Part 2)",
          "ml": "Part 2 - വിവാഹമോചനത്തിന്റെ കാരണങ്ങൾ എന്തൊക്കെയാണ് | പരിഹാരങ്ങൾ | Divorces",
          "hi": "तलाक के कारण और समाधान (भाग 2)"
        },
        "subTopic": {
          "en": "Root causes of marital breakdown and spiritual keys to healing families",
          "ml": "വിവാഹബന്ധങ്ങളിലെ തകർച്ചകളുടെ ആത്മീയ കാരണങ്ങളും പരിഹാരങ്ങളും",
          "hi": "वैवाहिक जीवन में आने वाली दरारों के कारण और ईश्वरीय समाधान"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=JFSGOEmKkP4",
          "ml": "https://www.youtube.com/watch?v=JFSGOEmKkP4",
          "hi": "https://www.youtube.com/watch?v=JFSGOEmKkP4"
        },
        "videoId": {
          "en": "JFSGOEmKkP4",
          "ml": "JFSGOEmKkP4",
          "hi": "JFSGOEmKkP4"
        },
        "duration": "55 mins"
      },
      {
        "id": "divorce-3",
        "title": {
          "en": "Reasons for Divorces & Biblical Solutions (Part 3)",
          "ml": "Part 3 - വിവാഹമോചനത്തിന്റെ കാരണങ്ങൾ എന്തൊക്കെയാണ് | പരിഹാരങ്ങൾ | Divorces",
          "hi": "तलाक के कारण और समाधान (भाग 3)"
        },
        "subTopic": {
          "en": "Root causes of marital breakdown and spiritual keys to healing families",
          "ml": "വിവാഹബന്ധങ്ങളിലെ തകർച്ചകളുടെ ആത്മീയ കാരണങ്ങളും പരിഹാരങ്ങളും",
          "hi": "वैवाहिक जीवन में आने वाली दरारों के कारण और ईश्वरीय समाधान"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=Q-en07iRWDE",
          "ml": "https://www.youtube.com/watch?v=Q-en07iRWDE",
          "hi": "https://www.youtube.com/watch?v=Q-en07iRWDE"
        },
        "videoId": {
          "en": "Q-en07iRWDE",
          "ml": "Q-en07iRWDE",
          "hi": "Q-en07iRWDE"
        },
        "duration": "55 mins"
      }
    ]
  },
  {
    "id": "topic-my-hell-encounter",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL9aydrBgxQsxvav7RFObo1euKvX7rJqP_",
    "topicName": {
      "en": "My Hell Encounter & Reality of Eternity",
      "ml": "നരകത്തെ സംബന്ധിക്കുന്ന വെളിപ്പാടുകൾ (My Hell Encounter)",
      "hi": "नरक का प्रत्यक्ष दर्शन और अनंतकाल की सच्चाई"
    },
    "subTopic": {
      "en": "Solemn spiritual revelations on the different compartments of hell and urgent call to repentance",
      "ml": "നരകത്തിന്റെ ഭീകരതയും മനുഷ്യന്റെ നിത്യമായ രക്ഷയും ഓർമ്മിപ്പിക്കുന്ന സന്ദേശം",
      "hi": "मनफिराव और उद्धार का गंभीर बुलावा"
    },
    "videos": [
      {
        "id": "hell-1",
        "title": {
          "en": "My Hell Encounter (Part 1) — Compartments & Punishments in Hell",
          "ml": "Part 1 - നരകത്തെ സംബന്ധിക്കുന്ന ചില വെളിപ്പാടുകൾ | Different Compartments of Hell",
          "hi": "नरक का प्रत्यक्ष अनुभव (भाग 1)"
        },
        "subTopic": {
          "en": "Eyewitness spiritual revelations of the reality of hell and eternity without Christ",
          "ml": "നരകത്തിലെ ശിക്ഷാരീതികളും നിത്യജീവന്റെ പ്രാധാന്യവും വ്യക്തമാക്കുന്ന വെളിപ്പാട്",
          "hi": "नरक की वास्तविकता और मसीह के बिना अनंत दंड की चेतावनी"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=Sbedypguxgs",
          "ml": "https://www.youtube.com/watch?v=Sbedypguxgs",
          "hi": "https://www.youtube.com/watch?v=Sbedypguxgs"
        },
        "videoId": {
          "en": "Sbedypguxgs",
          "ml": "Sbedypguxgs",
          "hi": "Sbedypguxgs"
        },
        "duration": "1 hr 10m"
      },
      {
        "id": "hell-2",
        "title": {
          "en": "My Hell Encounter (Part 2) — Compartments & Punishments in Hell",
          "ml": "Part 2 - നരകത്തിലെ ശിക്ഷാരീതികൾ എങ്ങനെയാണ് | How are sinners punished in hell?",
          "hi": "नरक का प्रत्यक्ष अनुभव (भाग 2)"
        },
        "subTopic": {
          "en": "Eyewitness spiritual revelations of the reality of hell and eternity without Christ",
          "ml": "നരകത്തിലെ ശിക്ഷാരീതികളും നിത്യജീവന്റെ പ്രാധാന്യവും വ്യക്തമാക്കുന്ന വെളിപ്പാട്",
          "hi": "नरक की वास्तविकता और मसीह के बिना अनंत दंड की चेतावनी"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=zw27874-gHQ",
          "ml": "https://www.youtube.com/watch?v=zw27874-gHQ",
          "hi": "https://www.youtube.com/watch?v=zw27874-gHQ"
        },
        "videoId": {
          "en": "zw27874-gHQ",
          "ml": "zw27874-gHQ",
          "hi": "zw27874-gHQ"
        },
        "duration": "1 hr 10m"
      },
      {
        "id": "hell-3",
        "title": {
          "en": "My Hell Encounter (Part 3) — Compartments & Punishments in Hell",
          "ml": "Part 3 - നരകത്തിലെ ശിക്ഷാരീതികൾ എങ്ങനെയാണ് ? | Kinds of punishment in Hell.",
          "hi": "नरक का प्रत्यक्ष अनुभव (भाग 3)"
        },
        "subTopic": {
          "en": "Eyewitness spiritual revelations of the reality of hell and eternity without Christ",
          "ml": "നരകത്തിലെ ശിക്ഷാരീതികളും നിത്യജീവന്റെ പ്രാധാന്യവും വ്യക്തമാക്കുന്ന വെളിപ്പാട്",
          "hi": "नरक की वास्तविकता और मसीह के बिना अनंत दंड की चेतावनी"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=X6FLn5erdBc",
          "ml": "https://www.youtube.com/watch?v=X6FLn5erdBc",
          "hi": "https://www.youtube.com/watch?v=X6FLn5erdBc"
        },
        "videoId": {
          "en": "X6FLn5erdBc",
          "ml": "X6FLn5erdBc",
          "hi": "X6FLn5erdBc"
        },
        "duration": "1 hr 10m"
      },
      {
        "id": "hell-4",
        "title": {
          "en": "My Hell Encounter (Part 4) — Compartments & Punishments in Hell",
          "ml": "Part 4 - നരകത്തിലെ ശിക്ഷാരീതികൾ എങ്ങനെയാണ് ? | Kinds of punishment in Hell.",
          "hi": "नरक का प्रत्यक्ष अनुभव (भाग 4)"
        },
        "subTopic": {
          "en": "Eyewitness spiritual revelations of the reality of hell and eternity without Christ",
          "ml": "നരകത്തിലെ ശിക്ഷാരീതികളും നിത്യജീവന്റെ പ്രാധാന്യവും വ്യക്തമാക്കുന്ന വെളിപ്പാട്",
          "hi": "नरक की वास्तविकता और मसीह के बिना अनंत दंड की चेतावनी"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=ZSHQ0RB_pKA",
          "ml": "https://www.youtube.com/watch?v=ZSHQ0RB_pKA",
          "hi": "https://www.youtube.com/watch?v=ZSHQ0RB_pKA"
        },
        "videoId": {
          "en": "ZSHQ0RB_pKA",
          "ml": "ZSHQ0RB_pKA",
          "hi": "ZSHQ0RB_pKA"
        },
        "duration": "1 hr 10m"
      }
    ]
  },
  {
    "id": "topic-end-time-messages",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL9aydrBgxQswPzxok-5DMRjKlmdnCGDUb",
    "topicName": {
      "en": "End Time Related Messages & Global Prophecy",
      "ml": "അന്ത്യകാല സന്ദേശങ്ങൾ | End Time Related Messages",
      "hi": "अंतिम दिनों की भविष्यवाणियां और वैश्विक संकेत"
    },
    "subTopic": {
      "en": "The final war between good and evil, discerning false prophets, and standing firm in faith",
      "ml": "സാത്താനുമായുള്ള നേരിട്ടുള്ള യുദ്ധം, രക്തസാക്ഷിത്വം, ക്രിസ്തുവിലുള്ള അചഞ്ചലമായ വിശ്വാസം",
      "hi": "सच्चे विश्वासियों की परीक्षा और जय पाने वालों का प्रतिफल"
    },
    "videos": [
      {
        "id": "endtime-1",
        "title": {
          "en": "സമയം അടുത്തിരിക്കുന്നു | Final War between good and evil",
          "ml": "സമയം അടുത്തിരിക്കുന്നു | Final War between good and evil",
          "hi": "സമയം അടുത്തിരിക്കുന്നു | Final War between good and evil"
        },
        "subTopic": {
          "en": "Cashless society, AI, one world religion, and preparing for the final war",
          "ml": "അന്ത്യകാല അടയാളങ്ങൾ, ഏകലോക മതം, ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്, സാത്താനുമായുള്ള നേരിട്ടുള്ള യുദ്ധം",
          "hi": "अंतिम समय की घटनाएं, झूठे भविष्यद्वक्ता और विश्वासी की तैयारी"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=DI4EmlxTl2Y",
          "ml": "https://www.youtube.com/watch?v=DI4EmlxTl2Y",
          "hi": "https://www.youtube.com/watch?v=DI4EmlxTl2Y"
        },
        "videoId": {
          "en": "DI4EmlxTl2Y",
          "ml": "DI4EmlxTl2Y",
          "hi": "DI4EmlxTl2Y"
        },
        "duration": "1 hr 00m"
      },
      {
        "id": "endtime-2",
        "title": {
          "en": "സാത്താനുമായി നേരിട്ടൊരു യുദ്ധം നിങ്ങൾക്ക് വരുന്നു | Are you getting ready ? | Bro Geo Nazareth",
          "ml": "സാത്താനുമായി നേരിട്ടൊരു യുദ്ധം നിങ്ങൾക്ക് വരുന്നു | Are you getting ready ? | Bro Geo Nazareth",
          "hi": "സാത്താനുമായി നേരിട്ടൊരു യുദ്ധം നിങ്ങൾക്ക് വരുന്നു | Are you getting ready ? | Bro Geo Nazareth"
        },
        "subTopic": {
          "en": "Cashless society, AI, one world religion, and preparing for the final war",
          "ml": "അന്ത്യകാല അടയാളങ്ങൾ, ഏകലോക മതം, ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്, സാത്താനുമായുള്ള നേരിട്ടുള്ള യുദ്ധം",
          "hi": "अंतिम समय की घटनाएं, झूठे भविष्यद्वक्ता और विश्वासी की तैयारी"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=K1yX6jSoaC4",
          "ml": "https://www.youtube.com/watch?v=K1yX6jSoaC4",
          "hi": "https://www.youtube.com/watch?v=K1yX6jSoaC4"
        },
        "videoId": {
          "en": "K1yX6jSoaC4",
          "ml": "K1yX6jSoaC4",
          "hi": "K1yX6jSoaC4"
        },
        "duration": "1 hr 00m"
      },
      {
        "id": "endtime-3",
        "title": {
          "en": "വ്യാജപ്രവാചകനെ തിരിച്ചറിയാനുള്ള 7 അടയാളങ്ങൾ | ആരാണ് വ്യാജപ്രവാചകൻ ? | Bro Geo Nazareth",
          "ml": "വ്യാജപ്രവാചകനെ തിരിച്ചറിയാനുള്ള 7 അടയാളങ്ങൾ | ആരാണ് വ്യാജപ്രവാചകൻ ? | Bro Geo Nazareth",
          "hi": "വ്യാജപ്രവാചകനെ തിരിച്ചറിയാനുള്ള 7 അടയാളങ്ങൾ | ആരാണ് വ്യാജപ്രവാചകൻ ? | Bro Geo Nazareth"
        },
        "subTopic": {
          "en": "Cashless society, AI, one world religion, and preparing for the final war",
          "ml": "അന്ത്യകാല അടയാളങ്ങൾ, ഏകലോക മതം, ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്, സാത്താനുമായുള്ള നേരിട്ടുള്ള യുദ്ധം",
          "hi": "अंतिम समय की घटनाएं, झूठे भविष्यद्वक्ता और विश्वासी की तैयारी"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=L4hMjYlq6vQ",
          "ml": "https://www.youtube.com/watch?v=L4hMjYlq6vQ",
          "hi": "https://www.youtube.com/watch?v=L4hMjYlq6vQ"
        },
        "videoId": {
          "en": "L4hMjYlq6vQ",
          "ml": "L4hMjYlq6vQ",
          "hi": "L4hMjYlq6vQ"
        },
        "duration": "1 hr 00m"
      },
      {
        "id": "endtime-4",
        "title": {
          "en": "Illuminati System of the Devil | സാത്താന്റെ പ്രവർത്തന രീതികൾ | വഞ്ചന നിറഞ്ഞ സമയം വരുന്നു",
          "ml": "Illuminati System of the Devil | സാത്താന്റെ പ്രവർത്തന രീതികൾ | വഞ്ചന നിറഞ്ഞ സമയം വരുന്നു",
          "hi": "Illuminati System of the Devil | സാത്താന്റെ പ്രവർത്തന രീതികൾ | വഞ്ചന നിറഞ്ഞ സമയം വരുന്നു"
        },
        "subTopic": {
          "en": "Cashless society, AI, one world religion, and preparing for the final war",
          "ml": "അന്ത്യകാല അടയാളങ്ങൾ, ഏകലോക മതം, ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്, സാത്താനുമായുള്ള നേരിട്ടുള്ള യുദ്ധം",
          "hi": "अंतिम समय की घटनाएं, झूठे भविष्यद्वक्ता और विश्वासी की तैयारी"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=-THWEZXKEns",
          "ml": "https://www.youtube.com/watch?v=-THWEZXKEns",
          "hi": "https://www.youtube.com/watch?v=-THWEZXKEns"
        },
        "videoId": {
          "en": "-THWEZXKEns",
          "ml": "-THWEZXKEns",
          "hi": "-THWEZXKEns"
        },
        "duration": "1 hr 00m"
      },
      {
        "id": "endtime-5",
        "title": {
          "en": "വിശ്വസ്തത തെളിയിക്കേണ്ട ദിനങ്ങൾ വരുന്നു | Are you ready ? | Bro Geo Nazareth",
          "ml": "വിശ്വസ്തത തെളിയിക്കേണ്ട ദിനങ്ങൾ വരുന്നു | Are you ready ? | Bro Geo Nazareth",
          "hi": "വിശ്വസ്തത തെളിയിക്കേണ്ട ദിനങ്ങൾ വരുന്നു | Are you ready ? | Bro Geo Nazareth"
        },
        "subTopic": {
          "en": "Cashless society, AI, one world religion, and preparing for the final war",
          "ml": "അന്ത്യകാല അടയാളങ്ങൾ, ഏകലോക മതം, ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്, സാത്താനുമായുള്ള നേരിട്ടുള്ള യുദ്ധം",
          "hi": "अंतिम समय की घटनाएं, झूठे भविष्यद्वक्ता और विश्वासी की तैयारी"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=7FpeUArvKLI",
          "ml": "https://www.youtube.com/watch?v=7FpeUArvKLI",
          "hi": "https://www.youtube.com/watch?v=7FpeUArvKLI"
        },
        "videoId": {
          "en": "7FpeUArvKLI",
          "ml": "7FpeUArvKLI",
          "hi": "7FpeUArvKLI"
        },
        "duration": "1 hr 00m"
      },
      {
        "id": "endtime-6",
        "title": {
          "en": "Prophetic Message 2023 | Cashless Society | One World Religion | Open AI | World into Crisis",
          "ml": "Prophetic Message 2023 | Cashless Society | One World Religion | Open AI | World into Crisis",
          "hi": "Prophetic Message 2023 | Cashless Society | One World Religion | Open AI | World into Crisis"
        },
        "subTopic": {
          "en": "Cashless society, AI, one world religion, and preparing for the final war",
          "ml": "അന്ത്യകാല അടയാളങ്ങൾ, ഏകലോക മതം, ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്, സാത്താനുമായുള്ള നേരിട്ടുള്ള യുദ്ധം",
          "hi": "अंतिम समय की घटनाएं, झूठे भविष्यद्वक्ता और विश्वासी की तैयारी"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=YEJT377pTyE",
          "ml": "https://www.youtube.com/watch?v=YEJT377pTyE",
          "hi": "https://www.youtube.com/watch?v=YEJT377pTyE"
        },
        "videoId": {
          "en": "YEJT377pTyE",
          "ml": "YEJT377pTyE",
          "hi": "YEJT377pTyE"
        },
        "duration": "1 hr 00m"
      },
      {
        "id": "endtime-7",
        "title": {
          "en": "രക്തസാക്ഷിയാകാൻ ഒരുക്കപ്പെടുന്നവർ  |   രക്തം ചൊരിയേണ്ടതിന്റെ ആവശ്യം എന്ത് ?",
          "ml": "രക്തസാക്ഷിയാകാൻ ഒരുക്കപ്പെടുന്നവർ  |   രക്തം ചൊരിയേണ്ടതിന്റെ ആവശ്യം എന്ത് ?",
          "hi": "രക്തസാക്ഷിയാകാൻ ഒരുക്കപ്പെടുന്നവർ  |   രക്തം ചൊരിയേണ്ടതിന്റെ ആവശ്യം എന്ത് ?"
        },
        "subTopic": {
          "en": "Cashless society, AI, one world religion, and preparing for the final war",
          "ml": "അന്ത്യകാല അടയാളങ്ങൾ, ഏകലോക മതം, ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്, സാത്താനുമായുള്ള നേരിട്ടുള്ള യുദ്ധം",
          "hi": "अंतिम समय की घटनाएं, झूठे भविष्यद्वक्ता और विश्वासी की तैयारी"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=sRBwecv4SBs",
          "ml": "https://www.youtube.com/watch?v=sRBwecv4SBs",
          "hi": "https://www.youtube.com/watch?v=sRBwecv4SBs"
        },
        "videoId": {
          "en": "sRBwecv4SBs",
          "ml": "sRBwecv4SBs",
          "hi": "sRBwecv4SBs"
        },
        "duration": "1 hr 00m"
      },
      {
        "id": "endtime-8",
        "title": {
          "en": "വിശ്വാസം പരീക്ഷിക്കപ്പെടുന്ന നാളുകൾ വരുന്നു | Are you ready ?",
          "ml": "വിശ്വാസം പരീക്ഷിക്കപ്പെടുന്ന നാളുകൾ വരുന്നു | Are you ready ?",
          "hi": "വിശ്വാസം പരീക്ഷിക്കപ്പെടുന്ന നാളുകൾ വരുന്നു | Are you ready ?"
        },
        "subTopic": {
          "en": "Cashless society, AI, one world religion, and preparing for the final war",
          "ml": "അന്ത്യകാല അടയാളങ്ങൾ, ഏകലോക മതം, ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്, സാത്താനുമായുള്ള നേരിട്ടുള്ള യുദ്ധം",
          "hi": "अंतिम समय की घटनाएं, झूठे भविष्यद्वक्ता और विश्वासी की तैयारी"
        },
        "youtubeUrl": {
          "en": "https://www.youtube.com/watch?v=k6dU8A3ljeY",
          "ml": "https://www.youtube.com/watch?v=k6dU8A3ljeY",
          "hi": "https://www.youtube.com/watch?v=k6dU8A3ljeY"
        },
        "videoId": {
          "en": "k6dU8A3ljeY",
          "ml": "k6dU8A3ljeY",
          "hi": "k6dU8A3ljeY"
        },
        "duration": "1 hr 00m"
      }
    ]
  }
];
