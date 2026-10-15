import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Disc } from 'lucide-react';
import { useMusic } from '../context/MusicContext';

// Format seconds into m:ss
function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function AudioPlayer({ isFloating = false }) {
  const {
    isPlaying,
    isMuted,
    volume,
    currentTime,
    duration,
    progressPercent,
    isUsingSynth,
    songTitle,
    artistName,
    isPlayerVisible,
    musicEnabled,
    togglePlay,
    toggleMute,
    changeVolume,
    seek,
  } = useMusic();

  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  if (!musicEnabled || !isPlayerVisible) return null;

  // Floating Corner Pill
  if (isFloating) {
    return (
      <aside 
        aria-label="Background music controls"
        className="fixed bottom-5 right-5 z-40 transition-transform duration-300 hover:scale-[1.02]"
      >
        <div className="flex items-center gap-2.5 bg-[#FFF8F0]/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#C46A7B]/30 shadow-lg shadow-[#682D3B]/10 transition-all hover:border-[#C46A7B]/60">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#682D3B] text-[#FFF8F0] hover:bg-[#C46A7B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C46A7B] cursor-pointer"
            aria-label={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>
          
          {/* Spinning Vinyl / Music Note */}
          <div className="flex items-center gap-2 px-1 cursor-pointer" onClick={togglePlay}>
            <Disc className={`w-4 h-4 text-[#C46A7B] ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[11px] font-semibold text-[#682D3B] leading-tight line-clamp-1 max-w-[120px]">
                {songTitle}
              </span>
              <span className="text-[9px] text-[#682D3B]/70 leading-tight">
                {isUsingSynth ? "Soft piano melody" : artistName}
              </span>
            </div>
          </div>

          {/* Equalizer animation bars */}
          {isPlaying && (
            <div className="flex items-end gap-0.5 h-3 px-1">
              <span className="w-0.5 h-3 bg-[#C46A7B] animate-pulse rounded-full" />
              <span className="w-0.5 h-2 bg-[#C46A7B] animate-pulse rounded-full delay-75" />
              <span className="w-0.5 h-3 bg-[#C46A7B] animate-pulse rounded-full delay-150" />
            </div>
          )}

          {/* Mute / Unmute Button */}
          <button
            onClick={toggleMute}
            className="p-1 rounded-full text-[#682D3B]/70 hover:text-[#682D3B] transition-colors cursor-pointer"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </aside>
    );
  }

  // Inline Section Player with Progress Bar & Time
  return (
    <div className="w-full max-w-md bg-[#FFF8F0]/95 backdrop-blur-sm p-4 rounded-2xl border border-[#C46A7B]/30 shadow-md shadow-[#682D3B]/5 transition-all">
      <div className="flex items-center justify-between gap-3">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-[#682D3B] text-[#FFF8F0] hover:bg-[#C46A7B] transition-all transform hover:scale-105 active:scale-95 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C46A7B] cursor-pointer shrink-0"
          aria-label={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        {/* Track Info & Time */}
        <div className="flex-1 min-w-0 text-left">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 truncate">
              <Disc className={`w-3.5 h-3.5 text-[#C46A7B] shrink-0 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }} />
              <p className="text-xs font-semibold text-[#682D3B] truncate">
                {songTitle}
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#682D3B]/60 shrink-0">
              {duration > 0 ? `${formatTime(currentTime)} / ${formatTime(duration)}` : isUsingSynth ? 'Melody' : 'Ready'}
            </span>
          </div>

          {/* Thin Animated Progress Bar */}
          <div 
            className="relative w-full h-1.5 bg-[#EAD4B4]/40 rounded-full mt-2 overflow-hidden cursor-pointer group"
            onClick={(e) => {
              if (duration > 0) {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newPercent = clickX / rect.width;
                seek(newPercent * duration);
              }
            }}
          >
            <div 
              className="h-full bg-gradient-to-r from-[#C46A7B] to-[#682D3B] rounded-full transition-all duration-150"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <p className="text-[10px] text-[#682D3B]/70 mt-1 truncate">
            {artistName ? `${artistName} • Touch to play` : "Touch to play"}
          </p>
        </div>

        {/* Volume & Mute Controls */}
        <div className="flex items-center gap-1.5 shrink-0 relative">
          <button
            onClick={() => setShowVolumeSlider(!showVolumeSlider)}
            className="p-1.5 rounded-full text-[#682D3B]/70 hover:text-[#682D3B] transition-colors"
            title="Adjust volume"
            aria-label="Adjust volume"
          >
            <span className="text-[10px] font-mono font-medium text-[#C46A7B]">
              {Math.round(volume * 100)}%
            </span>
          </button>

          <button
            onClick={toggleMute}
            className="p-1.5 rounded-full text-[#682D3B]/70 hover:text-[#682D3B] transition-colors cursor-pointer"
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Mini Volume Popover Slider */}
          {showVolumeSlider && (
            <div className="absolute right-0 bottom-full mb-2 bg-[#FFFDF9] border border-[#C46A7B]/30 p-2 rounded-xl shadow-lg flex items-center gap-2 z-20">
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => changeVolume(parseFloat(e.target.value))}
                className="w-20 h-1 accent-[#C46A7B] cursor-pointer"
                aria-label="Volume slider"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
