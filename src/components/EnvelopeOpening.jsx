import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Music, Volume2, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';
import { JasmineFlower, DoodledHeart } from './JasmineIllustration';
import { useMusic } from '../context/MusicContext';

export function EnvelopeOpening({ onOpenComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isPlaying, play, togglePlay, isMuted, toggleMute, songTitle, musicEnabled } = useMusic();

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Start music on envelope open if not already playing
    if (musicEnabled && !isPlaying) {
      play();
    }

    // Trigger soft romantic petal/heart confetti
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F6DCE0', '#C46A7B', '#EAD4B4', '#FFF8F0', '#682D3B'],
      shapes: ['circle'],
      scalar: 1.1,
      gravity: 0.8,
      ticks: 200,
    });

    // Gentle timing to allow the animation to unfold before revealing the full page
    setTimeout(() => {
      if (onOpenComplete) {
        onOpenComplete();
      }
    }, 2200);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#F6DCE0]/25 to-[#FFF8F0]">
      {/* Decorative ambient aura */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#F6DCE0]/50 to-[#EAD4B4]/40 blur-3xl pointer-events-none -z-0" 
        aria-hidden="true"
      />

      {/* Top greeting badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center z-10"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF9] border border-[#C46A7B]/20 text-xs font-medium tracking-widest text-[#C46A7B] uppercase shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C46A7B]" />
          {CONFIG.envelope.badge}
        </span>
      </motion.div>

      {/* Main Envelope Presentation */}
      <div className="relative w-full max-w-md sm:max-w-lg z-10 perspective-[1000px]">
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#EAD4B4]/70 shadow-[#682D3B]/10 overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(#C46A7B 0.4px, transparent 0.4px), radial-gradient(#EAD4B4 0.4px, #FFFDF9 0.4px)',
            backgroundSize: '16px 16px',
            backgroundPosition: '0 0, 8px 8px'
          }}
        >
          {/* Vintage Postage Stamp (Top Right) */}
          <div className="absolute top-5 right-5 flex flex-col items-center">
            <div className="w-14 h-16 sm:w-16 sm:h-20 bg-[#FFF8F0] border-2 border-dashed border-[#C46A7B]/60 rounded-sm p-1 flex flex-col items-center justify-between shadow-sm">
              <div className="flex items-center justify-between w-full text-[8px] text-[#C46A7B] font-mono tracking-tighter">
                <span>IN</span>
                <span>2026</span>
              </div>
              <JasmineFlower className="w-7 h-7 text-[#C46A7B]" />
              <span className="text-[7px] text-[#682D3B] font-semibold tracking-widest uppercase">Love</span>
            </div>
            {/* Postmark stamp overlay */}
            <div className="text-[9px] font-mono text-[#682D3B]/50 tracking-widest rotate-[-12deg] mt-1 text-center scale-90">
              COLLEGE POST
            </div>
          </div>

          {/* Envelope Flap Accent Lines */}
          <div className="w-full flex items-center justify-between opacity-30 mb-6">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-[#C46A7B] w-1/3" />
            <DoodledHeart className="w-4 h-4" />
            <div className="h-[1px] bg-gradient-to-l from-transparent to-[#C46A7B] w-1/3" />
          </div>

          {/* Handwritten Envelope Inscription */}
          <div className="text-center my-6 sm:my-8 px-2">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-script text-3xl sm:text-4xl text-[#682D3B] font-semibold mb-3 tracking-wide"
            >
              {CONFIG.envelope.toText}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-serif italic text-base sm:text-lg text-[#682D3B]/80 leading-relaxed max-w-xs mx-auto"
            >
              {CONFIG.envelope.subText}
            </motion.p>
          </div>

          {/* Letter Peek Animation when opening */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.95 }}
                animate={{ y: -15, opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[#FFF8F0] border border-[#C46A7B]/40 rounded-xl p-4 my-4 shadow-md text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <JasmineFlower className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider text-[#C46A7B] font-semibold">Unfolding your letter</span>
                  <JasmineFlower className="w-4 h-4" />
                </div>
                <p className="font-script text-xl text-[#682D3B]">
                  "Azhagiye… this Friday, can we make one more memory?"
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Wax Seal / Interactive Action Button */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center">
            {!isOpen ? (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleOpen}
                id="open-envelope-btn"
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#682D3B] text-[#FFF8F0] font-sans text-sm font-medium tracking-wide shadow-lg shadow-[#682D3B]/25 hover:bg-[#C46A7B] transition-all focus:outline-none focus:ring-4 focus:ring-[#C46A7B]/40 cursor-pointer"
              >
                <span>{CONFIG.envelope.buttonLabel}</span>
                <Heart className="w-4 h-4 text-[#F6DCE0] fill-[#F6DCE0] group-hover:scale-125 transition-transform" />
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-sm text-[#C46A7B] font-serif italic"
              >
                <span className="w-2 h-2 rounded-full bg-[#C46A7B] animate-ping" />
                Opening your special letter…
              </motion.div>
            )}

            {/* Faint wax seal badge */}
            <div className="mt-5 flex items-center gap-1.5 text-xs text-[#682D3B]/50 font-serif">
              <span>Wax sealed with love</span>
              <span>•</span>
              <span className="font-script text-base text-[#C46A7B]">{CONFIG.envelope.waxSealSymbol}</span>
            </div>
          </div>
        </motion.div>

        {/* Floating petals accent around envelope */}
        <div className="absolute -bottom-4 -left-3 pointer-events-none opacity-80 rotate-12">
          <JasmineFlower className="w-8 h-8 text-[#682D3B]" />
        </div>
        <div className="absolute -top-3 -right-2 pointer-events-none opacity-70 -rotate-12">
          <DoodledHeart className="w-6 h-6" />
        </div>
      </div>

      {/* Subtle music option below envelope */}
      {musicEnabled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 flex items-center gap-2 bg-[#FFF8F0]/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#C46A7B]/20 text-xs text-[#682D3B]/70 shadow-sm"
        >
          <button
            onClick={togglePlay}
            className="flex items-center gap-1.5 hover:text-[#C46A7B] transition-colors focus:outline-none"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            <Music className={`w-3.5 h-3.5 text-[#C46A7B] ${isPlaying ? 'animate-bounce' : ''}`} />
            <span>{isPlaying ? "Playing soundtrack" : "Soundtrack ready • Click to preview"}</span>
          </button>
          {isPlaying && (
            <button 
              onClick={toggleMute} 
              className="p-1 hover:text-[#682D3B]"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-3 h-3 text-[#C46A7B]" /> : <Volume2 className="w-3 h-3 text-[#C46A7B]" />}
            </button>
          )}
        </motion.div>
      )}

      {/* Subtle hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-4 text-xs text-[#682D3B]/60 tracking-wider text-center"
      >
        A personalized invitation crafted for Suganthi
      </motion.p>
    </div>
  );
}
