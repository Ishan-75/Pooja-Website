import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { CONFIG } from '../config';
import { JasmineFlower, JasmineSprig, DoodledHeart } from './JasmineIllustration';

export const LetterSection = forwardRef(function LetterSection(props, ref) {
  return (
    <section 
      ref={ref}
      id="letter-section"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-10"
    >
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#F6DCE0]/30 to-[#EAD4B4]/25 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Section Header Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <JasmineSprig className="mb-3" />
        <h2 className="font-serif text-2xl sm:text-3xl text-[#682D3B] font-semibold tracking-wide">
          A Letter From The Heart
        </h2>
        <p className="font-script text-lg sm:text-xl text-[#C46A7B] mt-1">
          Written just for you, with every honest thought
        </p>
      </motion.div>

      {/* Realistic Paper Letter Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#FFFDF8] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl border border-[#EAD4B4]/60 shadow-[#682D3B]/10 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(#C46A7B 0.35px, transparent 0.35px),
            radial-gradient(#EAD4B4 0.35px, #FFFDF8 0.35px)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      >
        {/* Decorative corner jasmine blossoms */}
        <div className="absolute top-4 left-4 pointer-events-none opacity-80 -rotate-12 hidden sm:block">
          <JasmineFlower className="w-8 h-8" />
        </div>
        <div className="absolute top-4 right-4 pointer-events-none opacity-80 rotate-12 hidden sm:block">
          <JasmineFlower className="w-8 h-8" />
        </div>

        {/* Vintage paper pin / top center accent */}
        <div className="flex items-center justify-center mb-8 opacity-75">
          <div className="h-[1px] w-16 bg-[#C46A7B]/30" />
          <div className="mx-3 flex items-center gap-1.5 text-xs tracking-widest text-[#C46A7B] uppercase font-sans font-medium">
            <Heart className="w-3.5 h-3.5 fill-[#C46A7B]" />
            <span>Personal &amp; Confidential</span>
            <Heart className="w-3.5 h-3.5 fill-[#C46A7B]" />
          </div>
          <div className="h-[1px] w-16 bg-[#C46A7B]/30" />
        </div>

        {/* Letter Body */}
        <div className="space-y-6 text-[#682D3B]">
          {/* Salutation */}
          <div className="font-script text-3xl sm:text-4xl text-[#682D3B] font-bold tracking-wide">
            {CONFIG.letter.salutation}
          </div>

          {/* Paragraphs rendered with comfortable, readable typography */}
          <div className="font-serif text-lg sm:text-[21px] leading-[1.85] text-[#4A1E29] space-y-5">
            {CONFIG.letter.paragraphs.map((p, index) => {
              // Special styling for the key question & "So, Azhagiye…"
              const isHighlight = p.includes("Would you come to our college pooja celebration") || p.includes("So, Azhagiye…");
              
              if (p === "So, Azhagiye…") {
                return (
                  <p 
                    key={index} 
                    className="font-script text-2xl sm:text-3xl text-[#C46A7B] font-semibold pt-2"
                  >
                    {p}
                  </p>
                );
              }

              if (p.includes("Would you come to our college pooja celebration")) {
                return (
                  <div 
                    key={index}
                    className="my-6 p-4 sm:p-5 rounded-2xl bg-[#F6DCE0]/35 border-l-4 border-[#C46A7B] font-serif text-xl sm:text-2xl text-[#682D3B] font-medium italic shadow-sm"
                  >
                    "{p}"
                  </div>
                );
              }

              return (
                <p key={index} className="text-justify sm:text-left">
                  {p}
                </p>
              );
            })}
          </div>

          {/* Letter Sign-off and Signature */}
          <div className="pt-8 sm:pt-10 flex flex-col items-end text-right border-t border-[#EAD4B4]/40">
            <p className="font-serif italic text-lg text-[#682D3B]/80 mb-1">
              {CONFIG.letter.closing}
            </p>
            <div className="flex items-center gap-2">
              <span className="font-script text-3xl sm:text-4xl text-[#C46A7B] font-bold">
                {CONFIG.letter.signature}
              </span>
              <DoodledHeart className="w-5 h-5 text-[#C46A7B]" />
            </div>
          </div>
        </div>

        {/* Bottom subtle paper decoration */}
        <div className="mt-8 pt-4 flex items-center justify-between opacity-50 text-[11px] font-mono text-[#682D3B]/60 border-t border-dashed border-[#C46A7B]/20">
          <span>Written with patience & care</span>
          <span className="flex items-center gap-1">
            <JasmineFlower className="w-3.5 h-3.5" />
            Suganthi &amp; Ishan
          </span>
        </div>
      </motion.div>
    </section>
  );
});
