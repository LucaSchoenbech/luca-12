import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface OfficeVideoProps {
  src?: string;
  fallbackImage?: string;
  className?: string;
}

export const OfficeVideo: React.FC<OfficeVideoProps> = ({
  src = "/office.mp4",
  fallbackImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=1600",
  className = ""
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoError, setVideoError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  return (
    <div className={`relative overflow-hidden group bg-ink text-paper ${className}`}>
      {/* Video Element */}
      {!videoError ? (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setVideoError(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : null}

      {/* Fallback image when video is loading or if office.mp4 is not yet in public folder */}
      {(!isLoaded || videoError) && (
        <img
          src={fallbackImage}
          alt="Schoenbech Advisory Office"
          className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-85"
        />
      )}

      {/* Subtle architectural overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

      {/* Header Tag */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-medium text-white/90 drop-shadow-sm">
          Advisory Space
        </span>
      </div>

      {/* Interactive Controls Overlay */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
        {!videoError && isLoaded && (
          <>
            <button
              onClick={togglePlay}
              type="button"
              aria-label={isPlaying ? "Pausa video" : "Riproduci video"}
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200"
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
            </button>
            <button
              onClick={toggleMute}
              type="button"
              aria-label={isMuted ? "Attiva audio" : "Disattiva audio"}
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200"
            >
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
          </>
        )}
      </div>

      {/* Notice if video file is pending upload */}
      {videoError && (
        <div className="absolute bottom-4 left-4 right-16 z-10 pointer-events-none">
          <p className="text-[10px] text-white/70 font-mono tracking-wider">
            Sede & Studio Schoenbech
          </p>
        </div>
      )}
    </div>
  );
};
export default OfficeVideo;
