"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Play, Pause, RotateCcw, RotateCw,
  Volume2, VolumeX, Maximize, Settings,
  SkipForward, Subtitles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  onNext?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, title, onNext }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      setIsPlaying((prev) => {
        if (prev) videoRef.current?.pause();
        else videoRef.current?.play();
        return !prev;
      });
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  const skipIntro = () => {
    if (videoRef.current) videoRef.current.currentTime += 85;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      } else if (e.code === "ArrowRight") {
        if (videoRef.current) videoRef.current.currentTime += 10;
      } else if (e.code === "ArrowLeft") {
        if (videoRef.current) videoRef.current.currentTime -= 10;
      } else if (e.code === "KeyF") {
        if (containerRef.current) {
           if (document.fullscreenElement) {
             document.exitFullscreen();
           } else {
             containerRef.current.requestFullscreen();
           }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [togglePlay]);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video bg-black rounded-[2rem] overflow-hidden group border border-white/5"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-contain"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={togglePlay}
      />

      {/* Overlay UI */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-500 flex flex-col justify-end p-6 md:p-10",
        showControls ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        {/* Top Info */}
        <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
           <div>
              <h2 className="text-xl font-black tracking-tight uppercase">{title}</h2>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mt-1">Episode 01 &bull; Streaming in 4K</p>
           </div>
           <button
            onClick={skipIntro}
            className="px-6 py-3 glass hover:bg-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest border border-white/10"
           >
            Skip Intro
           </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 group/progress relative">
           <input
             type="range"
             min="0"
             max={duration}
             value={currentTime}
             onChange={handleSeek}
             className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-anime-red"
           />
           <div
             className="absolute left-0 top-0 h-1.5 bg-anime-red rounded-full pointer-events-none neon-glow-red"
             style={{ width: `${(currentTime / duration) * 100}%` }}
           />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-5">
              <button onClick={() => { if(videoRef.current) videoRef.current.currentTime -= 10 }} className="hover:text-anime-red transition-colors"><RotateCcw size={22}/></button>
              <button onClick={togglePlay} className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                {isPlaying ? <Pause className="fill-current" size={24}/> : <Play className="fill-current ml-1" size={24}/>}
              </button>
              <button onClick={() => { if(videoRef.current) videoRef.current.currentTime += 10 }} className="hover:text-anime-red transition-colors"><RotateCw size={22}/></button>
            </div>

            <div className="hidden md:flex items-center gap-4 text-sm font-bold font-mono">
              <span>{formatTime(currentTime)}</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">{formatTime(duration)}</span>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button onClick={() => setIsMuted(!isMuted)} className="hover:text-anime-red transition-colors">
                {isMuted || volume === 0 ? <VolumeX size={20}/> : <Volume2 size={20}/>}
              </button>
              <input
                type="range" min="0" max="1" step="0.1" value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="hover:text-anime-red transition-colors flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block text-white/40">Subtitles</span>
              <Subtitles size={20}/>
            </button>
            <button className="hover:text-anime-red transition-colors"><Settings size={20}/></button>
            <button onClick={onNext} className="p-3 bg-white/10 hover:bg-anime-red rounded-xl transition-all group/next">
               <SkipForward size={20} className="fill-transparent group-hover/next:fill-white" />
            </button>
            <button onClick={() => {
               if (containerRef.current) {
                 if (document.fullscreenElement) document.exitFullscreen();
                 else containerRef.current.requestFullscreen();
               }
            }} className="hover:text-anime-red transition-colors"><Maximize size={20}/></button>
          </div>
        </div>
      </div>
    </div>
  );
};
