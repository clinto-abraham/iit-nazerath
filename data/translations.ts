import { LanguageCode } from "./topics";

export interface UITranslation {
  siteTitle: string;
  siteSubtitle: string;
  welcomeBadge: string;
  welcomeTitle: string;
  welcomeDesc: string;
  searchPlaceholder: string;
  showingTopics: string;
  ofTotal: string;
  videosIndexed: string;
  watchInApp: string;
  openYouTube: string;
  copyCitation: string;
  citationCopied: string;
  subTopicLabel: string;
  notesLabel: string;
  noResultsTitle: string;
  noResultsDesc: string;
  clearSearch: string;
  footerRights: string;
  footerMotto: string;
  modalClose: string;
  keyScripture: string;
  searchMatchBadge: string;
  allDetailsLabel: string;
}

export const UI_STRINGS: Record<LanguageCode, UITranslation> = {
  en: {
    siteTitle: "Indian Institute of Theology",
    siteSubtitle: "Nazerath",
    welcomeBadge: "Teaching & Reference Index",
    welcomeTitle: "Nazerath Ministry Biblical Teaching Index",
    welcomeDesc: "A searchable digital reference library for Bro. Geo Nazerath's teachings and theological studies from Nazerath Ministry for easy study, reference, and spiritual growth.",
    searchPlaceholder: "Search topics, sub-topics, scriptures, or keywords...",
    showingTopics: "Showing",
    ofTotal: "topics",
    videosIndexed: "teachings indexed",
    watchInApp: "Watch Teaching",
    openYouTube: "Open YouTube",
    copyCitation: "Copy Link",
    citationCopied: "Copied!",
    subTopicLabel: "Sub-Topic",
    notesLabel: "Reference Notes & Key Scripture",
    noResultsTitle: "No teachings found",
    noResultsDesc: "Try searching with different keywords or clear your search to view all topics.",
    clearSearch: "Clear Search",
    footerRights: "Indian Institute of Theology - Nazerath • Nazerath Ministry Teachings",
    footerMotto: "Truth, Light & Wisdom",
    modalClose: "Close",
    keyScripture: "Study Scripture",
    searchMatchBadge: "✦ Search Result Match",
    allDetailsLabel: "All Associated Study Details"
  },
  ml: {
    siteTitle: "ഇന്ത്യൻ ഇൻസ്റ്റിറ്റ്യൂട്ട് ഓഫ് തിയോളജി",
    siteSubtitle: "നസ്രേത്ത്",
    welcomeBadge: "ഉപദേശങ്ങളും പഠനങ്ങളും",
    welcomeTitle: "നസ്രേത്ത് മിനിസ്ട്രി വചന പഠന സൂചിക",
    welcomeDesc: "നസ്രേത്ത് മിനിസ്ട്രിയിൽ നിന്നുള്ള ബ്രദർ ജിയോ നസ്രേത്തിന്റെ (Bro. Geo Nazerath's teachings) വചന പഠനങ്ങളും തിരുവചന വെളിപ്പാടുകളും എളുപ്പത്തിൽ തിരയാനും പഠിക്കാനുമുള്ള റഫറൻസ് ലൈബ്രറി.",
    searchPlaceholder: "വിഷയങ്ങൾ, ഉപവിഷയങ്ങൾ, വാക്യങ്ങൾ എന്നിവ തിരയുക...",
    showingTopics: "ലഭ്യമായത്",
    ofTotal: "വിഷയങ്ങൾ",
    videosIndexed: "വീഡിയോ പഠനങ്ങൾ",
    watchInApp: "വീഡിയോ കാണുക",
    openYouTube: "യൂട്യൂബിൽ കാണുക",
    copyCitation: "ലിങ്ക് പകർത്തുക",
    citationCopied: "പകർത്തി!",
    subTopicLabel: "ഉപവിഷയം",
    notesLabel: "പ്രധാന തിരുവചന കുറിപ്പുകൾ",
    noResultsTitle: "പഠനങ്ങൾ ഒന്നും കണ്ടെത്താനായില്ല",
    noResultsDesc: "മറ്റു വാക്കുകൾ ഉപയോഗിച്ച് തിരയുക അല്ലെങ്കിൽ തിരച്ചിൽ ഒഴിവാക്കുക.",
    clearSearch: "തിരച്ചിൽ ഒഴിവാക്കുക",
    footerRights: "ഇന്ത്യൻ ഇൻസ്റ്റിറ്റ്യൂട്ട് ഓഫ് തിയോളജി - നസ്രേത്ത് • നസ്രേത്ത് മിനിസ്ട്രി",
    footerMotto: "സത്യം, വെളിച്ചം, ജ്ഞാനം",
    modalClose: "അടയ്ക്കുക",
    keyScripture: "തിരുവചനം",
    searchMatchBadge: "✦ തിരച്ചിൽ ഫലം",
    allDetailsLabel: "പൂർണ്ണ വിവരങ്ങൾ ലഭ്യമാണ്"
  },
  hi: {
    siteTitle: "इंडियन इंस्टीट्यूट ऑफ थियोलॉजी",
    siteSubtitle: "नासरत",
    welcomeBadge: "शिक्षा और संदर्भ सूचकांक",
    welcomeTitle: "नासरत मिनिस्ट्री वचन अध्ययन सूचकांक",
    welcomeDesc: "नासरत मिनिस्ट्री से ब्रो. जियो नासरत (Bro. Geo Nazerath's teachings) की बाइबिल शिक्षाओं और धर्मशास्त्रीय वचनों को आसानी से खोजने और अध्ययन करने के लिए यह संदर्भ पुस्तकालय।",
    searchPlaceholder: "विषय, उप-विषय, वचन या मुख्य शब्द खोजें...",
    showingTopics: "उपलब्ध",
    ofTotal: "विषय",
    videosIndexed: "वीडियो शिक्षाएं",
    watchInApp: "वीडियो देखें",
    openYouTube: "यूट्यूब पर खोलें",
    copyCitation: "लिंक कॉपी करें",
    citationCopied: "कॉपी किया गया!",
    subTopicLabel: "उप-विषय",
    notesLabel: "संदर्भ टिप्पणी और वचन",
    noResultsTitle: "कोई शिक्षा नहीं मिली",
    noResultsDesc: "अन्य शब्द खोजें या सारे विषय देखने के लिए खोज साफ़ करें।",
    clearSearch: "खोज साफ़ करें",
    footerRights: "इंडियन इंस्टीट्यूट ऑफ थियोलॉजी - नासरत • नासरत मिनिस्ट्री",
    footerMotto: "सत्य, ज्योति और ज्ञान",
    modalClose: "बंद करें",
    keyScripture: "पवित्र शास्त्र",
    searchMatchBadge: "✦ खोज परिणाम",
    allDetailsLabel: "सभी जुड़े हुए विवरण"
  }
};
