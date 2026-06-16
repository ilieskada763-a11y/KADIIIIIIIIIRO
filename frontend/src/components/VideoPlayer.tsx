'use client';

import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize, SkipForward, Settings, VolumeX, FastForward } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  onNext?: () => void;
  introEnd?: number; // Time in seconds where intro ends
}

export default function VideoPlayer({ videoUrl, onNext, introEnd = 90 }: { videoUrl: string, onNext?: () => void, introEnd?: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSkipIntro, setShowSkipIntro] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  const skipIntro = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = introEnd;
      setShowSkipIntro(false);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);

      // Show "Skip Intro" between 0 and introEnd
      if (video.currentTime < introEnd && video.currentTime > 5) {
        setShowSkipIntro(true);
      } else {
        setShowSkipIntro(false);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      switch(e.key.toLowerCase()) {
        case ' ':
        case 'k':
          e.preventDefault();
          togglePlay();
          break;
        case 'f':
          e.preventDefault();
          handleFullscreen();
          break;
        case 'm':
          toggleMute();
          break;
        case 'arrowright':
          video.currentTime += 10;
          break;
        case 'arrowleft':
          video.currentTime -= 10;
          break;
      }
    };

    const handleEnded = () => {
      if (onNext) onNext();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlaying, isMuted, onNext, introEnd]);

  return (
    <div ref={containerRef} className="relative group w-full h-full bg-black overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-contain"
        onClick={togglePlay}
      />

      {/* Skip Intro Button */}
      {showSkipIntro && (
        <button
          onClick={skipIntro}
          className="absolute bottom-24 left-10 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-lg text-sm font-black uppercase tracking-widest hover:bg-anime-red transition-all z-20"
        >
          Skip Intro
        </button>
      )}

      {/* Overlay controls */}
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">

        {/* Progress Bar */}
        <div
          className="w-full h-1.5 bg-white/10 rounded-full mb-6 cursor-pointer overflow-hidden group/bar hover:h-2 transition-all"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            if (videoRef.current) videoRef.current.currentTime = pos * videoRef.current.duration;
          }}
        >
          <div className="h-full bg-anime-red relative" style={{ width: `${progress}%` }}>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-anime-red rounded-full shadow-[0_0_15px_rgba(255,26,26,0.8)] opacity-0 group-hover/bar:opacity-100" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={togglePlay} className="text-white hover:text-anime-red transition-colors">
              {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
            </button>
            <button onClick={onNext} className="text-white hover:text-anime-red transition-colors">
              <SkipForward size={28} fill="currentColor" />
            </button>
            <div className="flex items-center gap-3 group/volume">
               <button onClick={toggleMute} className="text-white hover:text-anime-red transition-colors">
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
               </button>
               <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setVolume(val);
                  if (videoRef.current) {
                    videoRef.current.volume = val;
                    videoRef.current.muted = val === 0;
                    setIsMuted(val === 0);
                  }
                }}
                className="w-0 group-hover/volume:w-20 transition-all accent-anime-red"
               />
            </div>
            <span className="text-sm font-mono text-white/60">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <select
              value={playbackSpeed}
              onChange={(e) => {
                const speed = parseFloat(e.target.value);
                setPlaybackSpeed(speed);
                if (videoRef.current) videoRef.current.playbackRate = speed;
              }}
              className="bg-transparent text-xs font-bold uppercase tracking-widest outline-none cursor-pointer"
            >
              <option value="0.5" className="bg-deep-black">0.5x</option>
              <option value="1" className="bg-deep-black">1.0x</option>
              <option value="1.5" className="bg-deep-black">1.5x</option>
              <option value="2" className="bg-deep-black">2.0x</option>
            </select>
            <button className="text-xs font-black bg-white/5 border border-white/10 px-3 py-1 rounded hover:border-anime-red transition-colors">
              1080P
            </button>
            <button className="text-white hover:text-anime-red transition-colors">
              <Settings size={24} className="hover:rotate-90 transition-transform duration-500" />
            </button>
            <button onClick={handleFullscreen} className="text-white hover:text-anime-red transition-colors">
              <Maximize size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
