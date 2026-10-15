import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';
import { JasmineFlower, DoodledHeart } from './JasmineIllustration';

export function HeroSection({ onScrollToLetter }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-6xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 -right-16 w-96 h-96 rounded-full bg-[#F6DCE0]/35 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 -left-16 w-80 h-80 rounded-full bg-[#EAD4B4]/30 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Romantic Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Subtle Tagline */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8F0] border border-[#C46A7B]/25 text-xs font-medium text-[#C46A7B] tracking-wide mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C46A7B]" />
            <span>{CONFIG.hero.tagline}</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1 mb-6">
            {CONFIG.hero.headline.map((line, idx) => (
              <h2 
                key={idx}
                className={`text-4xl sm:text-5xl lg:text-6xl text-[#682D3B] tracking-tight leading-[1.15] ${
                  idx === CONFIG.hero.headline.length - 1
                    ? 'font-script font-bold text-[#C46A7B] pt-1'
                    : 'font-serif font-medium'
                }`}
              >
                {line}
              </h2>
            ))}
          </div>

          {/* Supporting Text */}
          <p className="font-serif italic text-lg sm:text-xl text-[#682D3B]/85 leading-relaxed max-w-xl mb-8">
            "{CONFIG.hero.supportingText}"
          </p>

          {/* Emotional Micro-Interaction */}
          <div className="flex items-center gap-3 py-2 px-4 rounded-xl bg-[#F6DCE0]/30 border border-[#C46A7B]/15">
            <motion.div
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <Heart className="w-5 h-5 text-[#C46A7B] fill-[#C46A7B]" />
            </motion.div>
            <span className="text-xs sm:text-sm font-sans text-[#682D3B]/90 font-medium">
              From Ishan to Suganthi • With sincerity & warmth
            </span>
          </div>
        </motion.div>

        {/* Right Column: Editorial Photograph */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Decorative Photo Frame with paper texture and torn tape */}
          <div className="relative mx-auto max-w-md lg:max-w-none bg-[#FFFDF9] p-3 sm:p-4 rounded-2xl shadow-xl border border-[#EAD4B4]/80 shadow-[#682D3B]/10 rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Washi tape detail */}
            <div 
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#EAD4B4]/75 rounded-sm backdrop-blur-sm -rotate-2 border-t border-b border-white/60 shadow-sm z-20 pointer-events-none"
              aria-hidden="true"
            />

            {/* Campus Photo */}
            <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-[#EAD4B4]/20">
              <img 
                src={CONFIG.hero.campusImage} 
                alt="Our college campus bathed in golden hour sunlight"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              {/* Warm gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#682D3B]/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Photo watermark tag */}
              <div className="absolute bottom-2.5 left-3 text-[11px] font-sans font-medium text-white/95 drop-shadow-md flex items-center gap-1.5">
                <JasmineFlower className="w-3.5 h-3.5 text-white" />
                <span>Our Campus • Golden Hour</span>
              </div>
            </div>

            {/* Editorial Caption below photo */}
            <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#682D3B]/70 font-serif italic">
              <span>{CONFIG.hero.campusImageCaption}</span>
              <DoodledHeart className="w-4 h-4 text-[#C46A7B]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-center cursor-pointer group"
        onClick={onScrollToLetter}
      >
        <button
          type="button"
          onClick={onScrollToLetter}
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-[#C46A7B] font-medium group-hover:text-[#682D3B] transition-colors focus:outline-none"
        >
          <span>Read my letter to you</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-7 h-7 rounded-full border border-[#C46A7B]/40 flex items-center justify-center bg-[#FFF8F0] shadow-sm"
          >
            <ChevronDown className="w-4 h-4 text-[#C46A7B]" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
