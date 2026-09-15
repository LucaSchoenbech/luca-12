import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface OfficeVideoProps {
  src?: string;
  fallbackImage?: string;
  className?: string;
  label?: string;
  showLabel?: boolean;
  overlayGradient?: boolean;
  quote?: string;
}

export const OfficeVideo: React.FC<OfficeVideoProps> = ({
  src = "/Camera_office_editorial_4x5_muted.mp4",
  fallbackImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=1600",
  className = "",
  label = "Ecosistema Organizzativo",
  showLabel = true,
  overlayGradient = true,
  quote
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

      {/* Subtle architectural overlay for contrast (optional, disabled when clean view of background/signage is desired) */}
      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30 pointer-events-none" />
      )}

      {/* Header Tag */}
      {showLabel && label && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-medium text-white/90 drop-shadow-sm">
            {label}
          </span>
        </div>
      )}

      {/* Interactive Controls Overlay - positioned top-right if quote is present, else bottom-right */}
      <div className={`absolute ${quote ? 'top-3.5 right-4' : 'bottom-4 right-4'} z-10 flex items-center gap-2`}>
        {!videoError && isLoaded && (
          <>
            <button
              onClick={togglePlay}
              type="button"
              aria-label={isPlaying ? "Pausa video" : "Riproduci video"}
              className="w-8 h-8 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200"
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
            </button>
            <button
              onClick={toggleMute}
              type="button"
              aria-label={isMuted ? "Attiva audio" : "Disattiva audio"}
              className="w-8 h-8 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200"
            >
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
          </>
        )}
      </div>

      {/* Quote Overlay on video */}
      {quote && (
        <div className="absolute bottom-4 left-4 right-4 sm:left-5 sm:right-5 z-10">
          <div className="bg-black/60 backdrop-blur-md border-l-2 border-accent p-3.5 sm:p-4 rounded-sm shadow-2xl">
            <p className="text-xs sm:text-[13px] font-display font-light italic leading-relaxed text-white/95">
              {quote}
            </p>
          </div>
        </div>
      )}

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
