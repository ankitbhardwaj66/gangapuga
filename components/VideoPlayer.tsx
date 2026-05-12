"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  videoId: string;
  title: string;
  thumbnailUrl?: string;
}

export default function VideoPlayer({ videoId, title, thumbnailUrl }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const thumb = thumbnailUrl ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (playing) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="relative w-full h-full group cursor-pointer"
      aria-label={`Play ${title}`}
    >
      <Image
        src={thumb}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-maroon ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
