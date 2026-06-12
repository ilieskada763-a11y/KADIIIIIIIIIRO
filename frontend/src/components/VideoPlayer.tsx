'use client';

import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize, SkipForward, Settings } from 'lucide-react';

export default function VideoPlayer({ videoUrl }: { videoUrl: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <div className="relative group w-full h-full bg-black">
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-contain"
        onClick={togglePlay}
      />

      {/* Custom Controls */}
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/20 rounded-full mb-6 cursor-pointer overflow-hidden">
          <div className="h-full bg-anime-red" style={{ width: `${progress}%` }} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={togglePlay} className="hover:text-anime-red transition-colors">
              {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
            </button>
            <button className="hover:text-anime-red transition-colors">
              <SkipForward size={24} fill="currentColor" />
            </button>
            <Volume2 size={24} />
            <span className="text-sm font-mono opacity-60">00:00 / 24:00</span>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-xs font-bold bg-white/10 px-2 py-1 rounded border border-white/10">1080P</button>
            <Settings size={24} className="hover:rotate-90 transition-transform" />
            <Maximize size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
