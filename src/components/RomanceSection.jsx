import React from 'react';
import { motion } from 'framer-motion';
import { Music, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';
import { JasmineFlower, JasmineSprig, DoodledHeart } from './JasmineIllustration';
import { AudioPlayer } from './AudioPlayer';

export function RomanceSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      {/* Decorative ambient aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 rounded-full bg-gradient-to-r from-[#F6DCE0]/40 via-[#EAD4B4]/30 to-[#F6DCE0]/40 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Main Music-Inspired Horizontal Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#F6DCE0]/30 rounded-3xl p-8 sm:p-12 shadow-xl border border-[#EAD4B4]/80 shadow-[#682D3B]/5 overflow-hidden"
      >
        {/* Vinyl / Audio Wave Subtle Accent Lines */}
        <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full border-4 border-dashed border-[#C46A7B]/10 pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full border-4 border-dashed border-[#C46A7B]/10 pointer-events-none" />

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-[#EAD4B4]/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#682D3B] text-[#FFF8F0] flex items-center justify-center shadow-md shadow-[#682D3B]/20">
              <Music className="w-5 h-5 text-[#F6DCE0]" />
            </div>
            <div>
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#C46A7B] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#C46A7B]" />
                {CONFIG.romance.tagline}
              </span>
              <h4 className="font-serif text-2xl text-[#682D3B] font-bold">
                Melody of Thoughts
              </h4>
            </div>
          </div>

          {/* Integrated Audio Controller */}
          <div>
            <AudioPlayer isFloating={false} />
          </div>
        </div>

        {/* Three Short Tamil Phrases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-8 text-center">
          {CONFIG.romance.phrases.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-[#FFF8F0]/80 border border-[#C46A7B]/20 shadow-sm flex flex-col items-center justify-center relative group"
            >
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C46A7B]/70 mb-1">
                Track 0{idx + 1}
              </span>
              <p className="font-script text-3xl sm:text-4xl text-[#682D3B] font-bold group-hover:text-[#C46A7B] transition-colors">
                "{item.tamil}"
              </p>
              <span className="font-serif italic text-xs text-[#682D3B]/60 mt-1">
                {item.meaning}
              </span>
              <JasmineFlower className="w-4 h-4 mt-2 opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Central Original Romantic Line */}
        <div className="relative mt-10 pt-8 border-t border-[#EAD4B4]/60 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <JasmineSprig className="scale-90" />
          </div>

          <blockquote className="space-y-2">
            {CONFIG.romance.originalPoem.tamilLines.map((line, idx) => (
              <p 
                key={idx}
                className={`text-2xl sm:text-3xl text-[#682D3B] ${
                  idx === 0 
                    ? 'font-serif font-medium italic' 
                    : 'font-script font-bold text-[#C46A7B] text-3xl sm:text-4xl'
                }`}
              >
                {line}
              </p>
            ))}
          </blockquote>

          <p className="font-serif italic text-sm text-[#682D3B]/70 mt-3 max-w-md mx-auto">
            "{CONFIG.romance.originalPoem.meaning}"
          </p>

          <div className="mt-4 flex items-center justify-center gap-1.5">
            <DoodledHeart className="w-5 h-5 text-[#C46A7B]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
