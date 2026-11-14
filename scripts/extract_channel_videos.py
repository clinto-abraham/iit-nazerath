#!/usr/bin/env python3
"""
YouTube Video Extractor for @nmgglobalconnect (Nazerath Ministry)
Extracts all video titles, video IDs, and URLs from the YouTube channel page.

Usage:
    python3 scripts/extract_channel_videos.py
"""

import urllib.request
import re
import json
import html

CHANNEL_URL = "https://www.youtube.com/@nmgglobalconnect/videos"

def extract_channel_videos():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
    }

    print(f"Fetching videos from {CHANNEL_URL}...")
    req = urllib.request.Request(CHANNEL_URL, headers=headers)
    try:
        response = urllib.request.urlopen(req)
        page_html = response.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching channel: {e}")
        return []

    # Regex to capture videoId, duration text, and title
    matches = re.findall(
        r'\"videoId\":\"([a-zA-Z0-9_-]{11})\".*?\"lockupMetadataViewModel\":\{\"title\":\{\"content\":\"(.*?)\"\}',
        page_html
    )

    videos = []
    seen = set()

    for vid, raw_title in matches:
        if vid not in seen:
            seen.add(vid)
            clean_title = html.unescape(raw_title).replace('\\u0026', '&').replace('\\"', '"')
            videos.append({
                "videoId": vid,
                "title": clean_title,
                "youtubeUrl": f"https://www.youtube.com/watch?v={vid}",
                "thumbnail": f"https://img.youtube.com/vi/{vid}/mqdefault.jpg"
            })

    return videos

if __name__ == "__main__":
    extracted = extract_channel_videos()
    print(f"\nSuccessfully extracted {len(extracted)} videos from @nmgglobalconnect:\n")
    
    for idx, v in enumerate(extracted, 1):
        print(f"{idx}. {v['title']}")
        print(f"   URL: {v['youtubeUrl']}\n")

    # Save to JSON file for easy import
    output_path = "data/nmgglobalconnect_videos.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(extracted, f, indent=2, ensure_ascii=False)
    
    print(f"Saved extracted video data to {output_path}")
