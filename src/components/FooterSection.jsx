import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail } from 'lucide-react';
import { CONFIG } from '../config';
import { JasmineFlower, JasmineSprig, DoodledHeart } from './JasmineIllustration';

export function FooterSection({ onScrollToTop, onReopenEnvelope }) {
  return (
    <footer className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center overflow-hidden">
      {/* Background ambient warmth */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-t from-[#F6DCE0]/50 to-transparent blur-2xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Decorative Jasmine Sprig */}
      <div className="flex justify-center mb-6">
        <JasmineSprig className="scale-90" />
      </div>

      {/* Glowing Pulsing Heart */}
      <div className="flex justify-center mb-6">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-12 h-12 rounded-full bg-[#C46A7B]/20 blur-md" />
          <Heart className="w-8 h-8 text-[#C46A7B] fill-[#C46A7B] relative z-10" />
        </motion.div>
      </div>

      {/* Handwritten Sign-off */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-4 max-w-lg mx-auto"
      >
        <p className="font-serif italic text-2xl sm:text-3xl text-[#682D3B] font-medium leading-relaxed">
          "{CONFIG.footer.closingNote}"
        </p>

        <div className="pt-2">
          <p className="font-serif italic text-base text-[#682D3B]/70 mb-0.5">
            {CONFIG.footer.valediction}
          </p>
          <p className="font-script text-4xl sm:text-5xl text-[#C46A7B] font-bold tracking-wide">
            {CONFIG.footer.senderName} ❤️
          </p>
        </div>
      </motion.div>

      {/* Reopen Envelope & Scroll Top Quick Actions */}
      <div className="mt-12 pt-8 border-t border-[#EAD4B4]/50 flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-[#682D3B]/70">
        <button
          onClick={onReopenEnvelope}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFF8F0] border border-[#C46A7B]/25 hover:bg-[#F6DCE0]/40 transition-colors shadow-sm"
        >
          <Mail className="w-3.5 h-3.5 text-[#C46A7B]" />
          <span>View Envelope again</span>
        </button>

        <button
          onClick={onScrollToTop}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFF8F0] border border-[#C46A7B]/25 hover:bg-[#F6DCE0]/40 transition-colors shadow-sm"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#C46A7B]" />
          <span>Back to top</span>
        </button>
      </div>

      {/* Copyright / Love watermark */}
      <div className="mt-8 text-[11px] font-mono text-[#682D3B]/50 tracking-wider">
        <p>A quiet little invitation • Made for Suganthi with all my heart</p>
      </div>
    </footer>
  );
}
