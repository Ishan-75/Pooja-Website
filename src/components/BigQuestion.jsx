import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';
import { JasmineFlower, JasmineSprig, DoodledHeart } from './JasmineIllustration';

export function BigQuestion() {
  const [response, setResponse] = useState(null); // null | 'yes' | 'maybe'

  const handleYes = () => {
    setResponse('yes');

    // Joyful celebration confetti with rose petals and gold sparkles
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.65 },
      colors: ['#F6DCE0', '#C46A7B', '#EAD4B4', '#682D3B', '#FFD700'],
      ticks: 250,
      gravity: 0.7,
      scalar: 1.2,
    });
  };

  const handleMaybe = () => {
    setResponse('maybe');
  };

  const handleReset = () => {
    setResponse(null);
  };

  return (
    <section 
      id="big-question-section"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-8"
    >
      {/* Background warm radial highlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#F6DCE0]/45 via-[#EAD4B4]/30 to-[#F6DCE0]/45 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#FFFDF9] rounded-3xl p-8 sm:p-14 shadow-2xl border-2 border-[#C46A7B]/30 shadow-[#682D3B]/10 text-center overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(#C46A7B 0.35px, transparent 0.35px),
            radial-gradient(#EAD4B4 0.35px, #FFFDF9 0.35px)
          `,
          backgroundSize: '18px 18px',
          backgroundPosition: '0 0, 9px 9px'
        }}
      >
        {/* Decorative corner jasmine */}
        <div className="absolute top-4 left-4 pointer-events-none opacity-60 hidden sm:block">
          <JasmineFlower className="w-6 h-6" />
        </div>
        <div className="absolute top-4 right-4 pointer-events-none opacity-60 hidden sm:block">
          <JasmineFlower className="w-6 h-6" />
        </div>

        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6DCE0]/50 border border-[#C46A7B]/30 text-xs font-semibold text-[#682D3B] uppercase tracking-widest mb-6 shadow-sm">
          <Heart className="w-3.5 h-3.5 text-[#C46A7B] fill-[#C46A7B]" />
          <span>The Question</span>
        </div>

        {/* The Question Text */}
        <div className="mb-8">
          <p className="font-serif italic text-2xl sm:text-3xl text-[#682D3B]/80 mb-2">
            {CONFIG.bigQuestion.questionIntro}
          </p>
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#682D3B] font-bold tracking-tight">
            {CONFIG.bigQuestion.questionMain}
          </h2>
          <p className="font-serif italic text-sm text-[#682D3B]/60 mt-3">
            {CONFIG.bigQuestion.helperNote}
          </p>
        </div>

        {/* Interactive Response View */}
        <AnimatePresence mode="wait">
          {response === null && (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
            >
              {/* Primary: Yes */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleYes}
                id="answer-yes-btn"
                className="w-full sm:w-auto min-w-[210px] inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#682D3B] text-[#FFF8F0] font-sans text-base font-semibold shadow-lg shadow-[#682D3B]/25 hover:bg-[#C46A7B] transition-all focus:outline-none focus:ring-4 focus:ring-[#C46A7B]/40 cursor-pointer"
              >
                <span>{CONFIG.bigQuestion.yesButtonText}</span>
              </motion.button>

              {/* Secondary: Maybe (Stationary, respectful, accessible) */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleMaybe}
                id="answer-maybe-btn"
                className="w-full sm:w-auto min-w-[180px] inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FFF8F0] text-[#682D3B] font-sans text-base font-medium border-2 border-[#EAD4B4] shadow-sm hover:border-[#C46A7B] hover:bg-[#F6DCE0]/30 transition-all focus:outline-none focus:ring-4 focus:ring-[#EAD4B4]/60 cursor-pointer"
              >
                <span>{CONFIG.bigQuestion.maybeButtonText}</span>
              </motion.button>
            </motion.div>
          )}

          {response === 'yes' && (
            <motion.div
              key="yes-response"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#F6DCE0]/60 to-[#FFF8F0] border border-[#C46A7B]/40 shadow-inner max-w-xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 text-[#C46A7B] mb-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <DoodledHeart className="w-6 h-6 text-[#C46A7B]" />
              </div>

              <h3 className="font-script text-3xl sm:text-4xl text-[#682D3B] font-bold mb-3">
                {CONFIG.bigQuestion.yesResponse.heading}
              </h3>

              <p className="font-serif text-xl sm:text-2xl text-[#682D3B] font-medium leading-relaxed mb-3">
                "{CONFIG.bigQuestion.yesResponse.message}"
              </p>

              <p className="font-serif italic text-sm sm:text-base text-[#682D3B]/75 mb-6">
                {CONFIG.bigQuestion.yesResponse.subtext}
              </p>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="text-xs text-[#C46A7B] hover:text-[#682D3B] underline underline-offset-4 font-sans font-medium transition-colors"
                >
                  Change your answer
                </button>
              </div>
            </motion.div>
          )}

          {response === 'maybe' && (
            <motion.div
              key="maybe-response"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#FFF8F0] to-[#EAD4B4]/30 border border-[#EAD4B4] shadow-inner max-w-xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 text-[#C46A7B] mb-3">
                <Sparkles className="w-5 h-5 text-[#C46A7B]" />
                <JasmineFlower className="w-6 h-6" />
                <Sparkles className="w-5 h-5 text-[#C46A7B]" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#682D3B] font-semibold mb-3">
                {CONFIG.bigQuestion.maybeResponse.heading}
              </h3>

              <p className="font-serif text-lg sm:text-xl text-[#682D3B] leading-relaxed mb-3">
                "{CONFIG.bigQuestion.maybeResponse.message}"
              </p>

              <p className="font-serif italic text-sm sm:text-base text-[#682D3B]/75 mb-6">
                {CONFIG.bigQuestion.maybeResponse.subtext}
              </p>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handleYes}
                  className="px-5 py-2 rounded-full bg-[#682D3B] text-[#FFF8F0] text-xs font-semibold hover:bg-[#C46A7B] transition-colors"
                >
                  Actually, I'll come! ❤️
                </button>
                <button
                  onClick={handleReset}
                  className="text-xs text-[#682D3B]/60 hover:text-[#682D3B] underline underline-offset-4 transition-colors"
                >
                  Reset
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gentle jasmine footer in question card */}
        <div className="mt-8 pt-4 flex justify-center">
          <JasmineSprig className="scale-75 opacity-60" />
        </div>
      </motion.div>
    </section>
  );
}
