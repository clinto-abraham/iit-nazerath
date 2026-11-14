import json

with open("data/extracted_8_playlists.json", "r", encoding="utf-8") as f:
    en_playlists = json.load(f)

with open("data/extracted_ml_playlists.json", "r", encoding="utf-8") as f:
    ml_playlists = json.load(f)

# Build topics array
topics = []

# 1. Break Generational Curses (ALL 7 English + Malayalam counterparts)
gen_curses_en = en_playlists.get("Break Generational Curses", [])
gen_curses_ml = ml_playlists.get("വിടുതൽ ശുശ്രുഷകൾ (LIVE)", [])

vids_gen = []
for idx, en_v in enumerate(gen_curses_en):
    ml_v = gen_curses_ml[idx] if idx < len(gen_curses_ml) else None
    vids_gen.append({
        "id": f"gen-curse-{idx+1}",
        "title": {
            "en": en_v["title"],
            "ml": ml_v["title"] if ml_v else en_v["title"],
            "hi": en_v["title"]
        },
        "subTopic": {
            "en": "Deliverance from ancestral idol covenants, sacrificial offerings, and spoken curses",
            "ml": "പൂർവ്വിക ശാപങ്ങളിൽ നിന്നും ദുഷ്ട ബന്ധനങ്ങളിൽ നിന്നുമുള്ള വിടുതൽ",
            "hi": "पीढ़ीगत श्रापों और बंधनों से पूर्ण छुटकारा"
        },
        "youtubeUrl": {
            "en": en_v["url"],
            "ml": ml_v["url"] if ml_v else en_v["url"],
            "hi": en_v["url"]
        },
        "videoId": {
            "en": en_v["videoId"],
            "ml": ml_v["videoId"] if ml_v else en_v["videoId"],
            "hi": en_v["videoId"]
        },
        "duration": "1 hr 45m"
    })

topics.append({
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
    "videos": vids_gen
})

# 2. Break Strongman, Witchcraft & Delay
strong_en = en_playlists.get("Break Strongman, Witchcraft & Delay", [])
vids_strong = []
for idx, en_v in enumerate(strong_en):
    vids_strong.append({
        "id": f"strong-{idx+1}",
        "title": {
            "en": en_v["title"],
            "ml": en_v["title"],
            "hi": en_v["title"]
        },
        "subTopic": {
            "en": "Binding the strongman, exposing witchcraft, and breaking delay",
            "ml": "ശക്തനെ കെട്ടുക, ആഭിചാര വഴികൾ അടയ്ക്കുക, കാലതാമസം മാറ്റുക",
            "hi": "बलवान को बांधना और रुकावटों को तोड़ना"
        },
        "youtubeUrl": {
            "en": en_v["url"],
            "ml": en_v["url"],
            "hi": en_v["url"]
        },
        "videoId": {
            "en": en_v["videoId"],
            "ml": en_v["videoId"],
            "hi": en_v["videoId"]
        },
        "duration": "1 hr 50m"
    })

topics.append({
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
    "videos": vids_strong
})

# 3. Break Serpentine Spirits
serp_en = en_playlists.get("Break Serpentine Spirits", [])
vids_serp = []
for idx, en_v in enumerate(serp_en):
    vids_serp.append({
        "id": f"serp-{idx+1}",
        "title": {
            "en": en_v["title"],
            "ml": en_v["title"],
            "hi": en_v["title"]
        },
        "subTopic": {
            "en": "Overcoming the spirits of Python, Leviathan, Hydra, and spiritual suffocation",
            "ml": "ശ്വാസം മുട്ടിക്കുന്ന പൈതൺ ആത്മാവ്, അഹങ്കാരത്തിന്റെ ലെവിയാത്തൻ എന്നിവയ്ക്കെതിരെയുള്ള ജയം",
            "hi": "पायथन और लेवियाथन की दुष्टात्माओं पर मसीह की सामर्थ्य से विजय"
        },
        "youtubeUrl": {
            "en": en_v["url"],
            "ml": en_v["url"],
            "hi": en_v["url"]
        },
        "videoId": {
            "en": en_v["videoId"],
            "ml": en_v["videoId"],
            "hi": en_v["videoId"]
        },
        "duration": "1 hr 35m"
    })

topics.append({
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
    "videos": vids_serp
})

# 4. Crowns, Scrolls, Keys
csk_en = en_playlists.get("Crowns, Scrolls, Keys", [])
vids_csk = []
for idx, en_v in enumerate(csk_en):
    vids_csk.append({
        "id": f"csk-{idx+1}",
        "title": {
            "en": en_v["title"],
            "ml": en_v["title"],
            "hi": en_v["title"]
        },
        "subTopic": {
            "en": "Spiritual meaning of heavenly crowns, scrolls in prayer, and keys of the Kingdom",
            "ml": "സ്വർഗ്ഗീയ കിരീടങ്ങൾ, പുസ്തകച്ചുരുളുകൾ, സ്വർഗ്ഗരാജ്യത്തിന്റെ താക്കോലുകൾ",
            "hi": "आत्मिक मुकुट, जीवन की पुस्तकें और स्वर्ग के राज्य की कुंजियां"
        },
        "youtubeUrl": {
            "en": en_v["url"],
            "ml": en_v["url"],
            "hi": en_v["url"]
        },
        "videoId": {
            "en": en_v["videoId"],
            "ml": en_v["videoId"],
            "hi": en_v["videoId"]
        },
        "duration": "1 hr 15m"
    })

topics.append({
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
    "videos": vids_csk
})

# 5. Seven Spirits of God | കുഞ്ഞാടിന്റെ ഏഴു കണ്ണുകളുടെ അർഥം (Malayalam Exclusive)
seven_ml = ml_playlists.get("Seven Spirits of God | കുഞ്ഞാടിന്റെ ഏഴു കണ്ണുകളുടെ അർഥം", [])
vids_seven = []
for idx, ml_v in enumerate(seven_ml):
    vids_seven.append({
        "id": f"seven-{idx+1}",
        "title": {
            "en": f"Seven Spirits of God (Part {idx+1}) — Meaning of the Seven Eyes of the Lamb",
            "ml": ml_v["title"],
            "hi": f"परमेश्वर की सात आत्माएं (भाग {idx+1})"
        },
        "subTopic": {
            "en": "Revelation 5:6 — The Seven Spirits of God sent out into all the earth",
            "ml": "വെളിപ്പാട് 5:6 — ഭൂമിയിലേക്കു ഒക്കെയും അയച്ചിരിക്കുന്ന ദൈവത്തിന്റെ ഏഴു ആത്മാക്കൾ",
            "hi": "प्रकाशितवाक्य 5:6 — परमेश्वर की सात आत्माएं जो सारी पृथ्वी पर भेजी गई हैं"
        },
        "youtubeUrl": {
            "en": ml_v["url"],
            "ml": ml_v["url"],
            "hi": ml_v["url"]
        },
        "videoId": {
            "en": ml_v["videoId"],
            "ml": ml_v["videoId"],
            "hi": ml_v["videoId"]
        },
        "duration": "45 mins"
    })

topics.append({
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
    "videos": vids_seven
})

# 6. Must Watch Before Deliverance | ഡെലിവെറൻസിനു മുൻപ് ഇത് കാണണം
deliv_ml = ml_playlists.get("ഡെലിവെറൻസിനു മുൻപ് ഇത് കാണണം | Must Watch", [])
vids_deliv_prep = []
for idx, ml_v in enumerate(deliv_ml):
    vids_deliv_prep.append({
        "id": f"deliv-prep-{idx+1}",
        "title": {
            "en": ml_v["title"],
            "ml": ml_v["title"],
            "hi": ml_v["title"]
        },
        "subTopic": {
            "en": "Demonic exit points, tricks of deception, and keys to overcome fear permanently",
            "ml": "ദുരാത്മാക്കളുടെ കബളിപ്പിക്കലുകൾ, ഭയം മാറ്റാനുള്ള താക്കോലുകൾ, ആത്മീയ ഒരുക്കം",
            "hi": "दुष्टात्माओं की चालों को पहचानना और भय पर स्थायी विजय"
        },
        "youtubeUrl": {
            "en": ml_v["url"],
            "ml": ml_v["url"],
            "hi": ml_v["url"]
        },
        "videoId": {
            "en": ml_v["videoId"],
            "ml": ml_v["videoId"],
            "hi": ml_v["videoId"]
        },
        "duration": "50 mins"
    })

topics.append({
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
    "videos": vids_deliv_prep
})

# 7. First Lessons in Spirituality | ആത്മീയതയുടെ ആദ്യപാഠങ്ങൾ
first_ml = ml_playlists.get("ആത്മീയതയുടെ ആദ്യപാഠങ്ങൾ | First Lessons", [])
vids_first = []
for idx, ml_v in enumerate(first_ml):
    vids_first.append({
        "id": f"first-{idx+1}",
        "title": {
            "en": ml_v["title"],
            "ml": ml_v["title"],
            "hi": ml_v["title"]
        },
        "subTopic": {
            "en": "How to grow in the spirit, knowing God's will, spiritual body, and spiritual ranking",
            "ml": "ആത്മീയ വളർച്ച, ദൈവഹിതം അറിയൽ, ആത്മീയ ശരീരം, ആത്മീയ റാങ്കിങ്",
            "hi": "आत्मिक विकास, परमेश्वर की इच्छा जानना और आत्मिक देह"
        },
        "youtubeUrl": {
            "en": ml_v["url"],
            "ml": ml_v["url"],
            "hi": ml_v["url"]
        },
        "videoId": {
            "en": ml_v["videoId"],
            "ml": ml_v["videoId"],
            "hi": ml_v["videoId"]
        },
        "duration": "45 mins"
    })

topics.append({
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
    "videos": vids_first
})

# 8. Divorces & Marriage Restoration | വിവാഹമോചനത്തിന്റെ കാരണങ്ങൾ | പരിഹാരങ്ങൾ
divorce_ml = ml_playlists.get("Divorces | വിവാഹമോചനത്തിന്റെ കാരണങ്ങൾ എന്തൊക്കെയാണ് | പരിഹാരങ്ങൾ |", [])
vids_divorce = []
for idx, ml_v in enumerate(divorce_ml):
    vids_divorce.append({
        "id": f"divorce-{idx+1}",
        "title": {
            "en": f"Reasons for Divorces & Biblical Solutions (Part {idx+1})",
            "ml": ml_v["title"],
            "hi": f"तलाक के कारण और समाधान (भाग {idx+1})"
        },
        "subTopic": {
            "en": "Root causes of marital breakdown and spiritual keys to healing families",
            "ml": "വിവാഹബന്ധങ്ങളിലെ തകർച്ചകളുടെ ആത്മീയ കാരണങ്ങളും പരിഹാരങ്ങളും",
            "hi": "वैवाहिक जीवन में आने वाली दरारों के कारण और ईश्वरीय समाधान"
        },
        "youtubeUrl": {
            "en": ml_v["url"],
            "ml": ml_v["url"],
            "hi": ml_v["url"]
        },
        "videoId": {
            "en": ml_v["videoId"],
            "ml": ml_v["videoId"],
            "hi": ml_v["videoId"]
        },
        "duration": "55 mins"
    })

topics.append({
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
    "videos": vids_divorce
})

# 9. My Hell Encounter (Bro Geo Nazareth Revelation)
hell_ml = ml_playlists.get("My Hell Encounter", [])
vids_hell = []
for idx, ml_v in enumerate(hell_ml):
    vids_hell.append({
        "id": f"hell-{idx+1}",
        "title": {
            "en": f"My Hell Encounter (Part {idx+1}) — Compartments & Punishments in Hell",
            "ml": ml_v["title"],
            "hi": f"नरक का प्रत्यक्ष अनुभव (भाग {idx+1})"
        },
        "subTopic": {
            "en": "Eyewitness spiritual revelations of the reality of hell and eternity without Christ",
            "ml": "നരകത്തിലെ ശിക്ഷാരീതികളും നിത്യജീവന്റെ പ്രാധാന്യവും വ്യക്തമാക്കുന്ന വെളിപ്പാട്",
            "hi": "नरक की वास्तविकता और मसीह के बिना अनंत दंड की चेतावनी"
        },
        "youtubeUrl": {
            "en": ml_v["url"],
            "ml": ml_v["url"],
            "hi": ml_v["url"]
        },
        "videoId": {
            "en": ml_v["videoId"],
            "ml": ml_v["videoId"],
            "hi": ml_v["videoId"]
        },
        "duration": "1 hr 10m"
    })

topics.append({
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
    "videos": vids_hell
})

# 10. End Time Related Messages (Malayalam & English)
endtime_ml = ml_playlists.get("End Time Related Messages", [])
vids_endtime = []
for idx, ml_v in enumerate(endtime_ml):
    vids_endtime.append({
        "id": f"endtime-{idx+1}",
        "title": {
            "en": ml_v["title"],
            "ml": ml_v["title"],
            "hi": ml_v["title"]
        },
        "subTopic": {
            "en": "Cashless society, AI, one world religion, and preparing for the final war",
            "ml": "അന്ത്യകാല അടയാളങ്ങൾ, ഏകലോക മതം, ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്, സാത്താനുമായുള്ള നേരിട്ടുള്ള യുദ്ധം",
            "hi": "अंतिम समय की घटनाएं, झूठे भविष्यद्वक्ता और विश्वासी की तैयारी"
        },
        "youtubeUrl": {
            "en": ml_v["url"],
            "ml": ml_v["url"],
            "hi": ml_v["url"]
        },
        "videoId": {
            "en": ml_v["videoId"],
            "ml": ml_v["videoId"],
            "hi": ml_v["videoId"]
        },
        "duration": "1 hr 00m"
    })

topics.append({
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
    "videos": vids_endtime
})

# Generate TypeScript source
ts_code = f"""/**
 * ==============================================================================
 * INDIAN INSTITUTE OF THEOLOGY - NAZERATH
 * Bro. Geo Nazareth - Nazerath Ministry
 * Comprehensive Video & Playlist Index mapped from:
 *   - English Channel: https://www.youtube.com/@nmgglobalconnect
 *   - Malayalam Channel: https://www.youtube.com/@nmgmalayalamconnect
 * ==============================================================================
 */

export type LanguageCode = "en" | "ml" | "hi";

export interface VideoItem {{
  id: string;
  title: {{
    en: string;
    ml: string;
    hi: string;
  }};
  subTopic: {{
    en: string;
    ml: string;
    hi: string;
  }};
  youtubeUrl: {{
    en: string;
    ml: string;
    hi?: string;
  }};
  videoId: {{
    en: string;
    ml: string;
    hi?: string;
  }};
  duration?: string;
  notes?: {{
    en: string;
    ml: string;
    hi: string;
  }};
}}

export interface TopicItem {{
  id: string;
  playlistUrl?: string;
  topicName: {{
    en: string;
    ml: string;
    hi: string;
  }};
  subTopic: {{
    en: string;
    ml: string;
    hi: string;
  }};
  videos: VideoItem[];
}}

export function getVideoUrl(video: VideoItem, lang: LanguageCode): string {{
  if (lang === "ml" && video.youtubeUrl.ml) return video.youtubeUrl.ml;
  if (lang === "hi" && video.youtubeUrl.hi) return video.youtubeUrl.hi;
  return video.youtubeUrl.en || video.youtubeUrl.ml;
}}

export function getVideoId(video: VideoItem, lang: LanguageCode): string {{
  if (lang === "ml" && video.videoId.ml) return video.videoId.ml;
  if (lang === "hi" && video.videoId.hi) return video.videoId.hi;
  return video.videoId.en || video.videoId.ml;
}}

export const TOPICS_DATA: TopicItem[] = {json.dumps(topics, indent=2, ensure_ascii=False)};
"""

with open("data/topics.ts", "w", encoding="utf-8") as f:
    f.write(ts_code)

print(f"Successfully generated data/topics.ts with {len(topics)} comprehensive topics and {sum(len(t['videos']) for t in topics)} videos!")
