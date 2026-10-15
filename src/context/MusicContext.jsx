import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { ROMANCE_CONFIG } from '../config/romanceConfig';

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const musicConfig = ROMANCE_CONFIG.music;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(musicConfig.initialVolume ?? 0.75);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isUsingSynth, setIsUsingSynth] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const audioRef = useRef(null);
  const synthCtxRef = useRef(null);
  const synthTimerRef = useRef(null);
  const synthGainRef = useRef(null);

  // Soothing acoustic piano / music box chords for graceful fallback
  const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 523.25, 587.33, 659.25];
  const melodyPattern = [
    { note: 2, dur: 0.6 },
    { note: 4, dur: 0.6 },
    { note: 5, dur: 0.8 },
    { note: 6, dur: 1.2 },
    { note: 5, dur: 0.6 },
    { note: 4, dur: 0.6 },
    { note: 3, dur: 1.0 },
    { note: 2, dur: 1.2 },
    { note: 1, dur: 0.6 },
    { note: 2, dur: 0.6 },
    { note: 4, dur: 0.8 },
    { note: 5, dur: 1.2 },
    { note: 4, dur: 0.6 },
    { note: 2, dur: 0.6 },
    { note: 1, dur: 1.0 },
    { note: 0, dur: 1.6 },
  ];

  const playSynthNote = (freq, noteDuration) => {
    if (!synthCtxRef.current || isMuted) return;
    try {
      const ctx = synthCtxRef.current;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const targetVol = volume * 0.12;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(targetVol, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + noteDuration);
    } catch {
      // Ignore audio synthesis errors
    }
  };

  const startSynth = () => {
    if (!musicConfig.synthFallbackEnabled) return;
    if (!window.AudioContext && !window.webkitAudioContext) return;
    
    if (!synthCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      synthCtxRef.current = new AudioCtx();
    }
    if (synthCtxRef.current.state === 'suspended') {
      synthCtxRef.current.resume();
    }

    setIsUsingSynth(true);
    let step = 0;
    const playNext = () => {
      const item = melodyPattern[step % melodyPattern.length];
      const freq = notes[item.note % notes.length];
      playSynthNote(freq, item.dur);
      step++;
      synthTimerRef.current = setTimeout(playNext, item.dur * 850);
    };

    playNext();
  };

  const stopSynth = () => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    setIsUsingSynth(false);
  };

  // Play audio
  const play = () => {
    if (!musicConfig.musicEnabled) return;
    setHasUserInteracted(true);

    const audio = audioRef.current;
    if (audio && musicConfig.audioSrc) {
      audio.volume = isMuted ? 0 : volume;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsUsingSynth(false);
          })
          .catch(() => {
            // If local audio file is missing or blocked, fall back to soft synth
            startSynth();
            setIsPlaying(true);
          });
      }
    } else {
      startSynth();
      setIsPlaying(true);
    }
  };

  // Pause audio
  const pause = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
    }
    stopSynth();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }
  };

  const changeVolume = (newVol) => {
    const clamped = Math.max(0, Math.min(1, newVol));
    setVolume(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const seek = (newTime) => {
    if (audioRef.current && Number.isFinite(newTime)) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Audio element listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleEnded = () => {
      // Loop is enabled, but in case
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };
    const handleError = () => {
      // Fallback to synth if custom track fails
      if (isPlaying) {
        startSynth();
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [isPlaying]);

  // Clean up synth on unmount
  useEffect(() => {
    return () => {
      stopSynth();
      if (synthCtxRef.current && synthCtxRef.current.state !== 'closed') {
        synthCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        isMuted,
        volume,
        currentTime,
        duration,
        progressPercent: duration > 0 ? (currentTime / duration) * 100 : 0,
        isUsingSynth,
        hasUserInteracted,
        songTitle: musicConfig.songTitle,
        artistName: musicConfig.artistName,
        isPlayerVisible: musicConfig.isPlayerVisible,
        musicEnabled: musicConfig.musicEnabled,
        play,
        pause,
        togglePlay,
        toggleMute,
        changeVolume,
        seek,
      }}
    >
      {children}
      {/* Hidden persistent audio element that plays continuously across sections */}
      {musicConfig.musicEnabled && musicConfig.audioSrc && (
        <audio
          ref={audioRef}
          src={musicConfig.audioSrc}
          loop
          preload="auto"
        />
      )}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}
