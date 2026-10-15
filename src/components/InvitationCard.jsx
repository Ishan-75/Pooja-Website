import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, Check, Bookmark } from 'lucide-react';
import { CONFIG } from '../config';
import { JasmineFlower, DoodledHeart } from './JasmineIllustration';

export function InvitationCard() {
  const [copied, setCopied] = useState(false);

  // Helper to copy details to clipboard or save
  const handleSaveDetails = () => {
    const text = `${CONFIG.invitation.event} with Ishan\nDate: ${CONFIG.invitation.date}\nTime: ${CONFIG.invitation.time}\nVenue: ${CONFIG.invitation.venue}\n"${CONFIG.invitation.caption}"`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#EAD4B4]/30 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Floating Paper Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#FFFDF9] rounded-3xl p-7 sm:p-12 shadow-2xl border-2 border-[#EAD4B4] shadow-[#682D3B]/10 overflow-hidden"
      >
        {/* Ornate Gold & Burgundy Corner Borders */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#C46A7B]/50 rounded-tl-lg pointer-events-none" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#C46A7B]/50 rounded-tr-lg pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#C46A7B]/50 rounded-bl-lg pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#C46A7B]/50 rounded-br-lg pointer-events-none" />

        {/* Top Header Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF8F0] border border-[#C46A7B]/30 text-xs font-semibold tracking-widest text-[#C46A7B] uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C46A7B]" />
            <span>{CONFIG.invitation.badge}</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl text-[#682D3B] font-bold mt-4 tracking-tight">
            {CONFIG.invitation.event}
          </h3>
          <p className="font-script text-xl sm:text-2xl text-[#C46A7B] mt-1">
            An auspicious day, made infinitely sweeter with you
          </p>
        </div>

        {/* Event Details Grid with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-8">
          {/* Date Card */}
          <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#FFF8F0] border border-[#EAD4B4]/70 shadow-sm hover:border-[#C46A7B]/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#F6DCE0]/60 flex items-center justify-center text-[#C46A7B] mb-3">
              <Calendar className="w-6 h-6 text-[#682D3B]" />
            </div>
            <span className="text-xs uppercase tracking-wider text-[#682D3B]/60 font-semibold mb-1">Date</span>
            <span className="font-serif text-lg font-bold text-[#682D3B]">
              {CONFIG.invitation.date}
            </span>
            <span className="text-xs text-[#C46A7B] font-script text-base mt-0.5">Pooja Day</span>
          </div>

          {/* Time Card */}
          <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#FFF8F0] border border-[#EAD4B4]/70 shadow-sm hover:border-[#C46A7B]/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#F6DCE0]/60 flex items-center justify-center text-[#C46A7B] mb-3">
              <Clock className="w-6 h-6 text-[#682D3B]" />
            </div>
            <span className="text-xs uppercase tracking-wider text-[#682D3B]/60 font-semibold mb-1">Time</span>
            <span className="font-serif text-lg font-bold text-[#682D3B]">
              {CONFIG.invitation.time}
            </span>
            <span className="text-xs text-[#C46A7B] font-script text-base mt-0.5">Morning celebration</span>
          </div>

          {/* Venue Card */}
          <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#FFF8F0] border border-[#EAD4B4]/70 shadow-sm hover:border-[#C46A7B]/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#F6DCE0]/60 flex items-center justify-center text-[#C46A7B] mb-3">
              <MapPin className="w-6 h-6 text-[#682D3B]" />
            </div>
            <span className="text-xs uppercase tracking-wider text-[#682D3B]/60 font-semibold mb-1">Venue</span>
            <span className="font-serif text-lg font-bold text-[#682D3B]">
              {CONFIG.invitation.venue}
            </span>
            <span className="text-xs text-[#C46A7B] font-script text-base mt-0.5">Where our paths cross</span>
          </div>
        </div>

        {/* Romantic Caption Box */}
        <div className="relative my-8 p-6 rounded-2xl bg-gradient-to-r from-[#F6DCE0]/40 via-[#FFF8F0] to-[#F6DCE0]/40 border border-[#C46A7B]/25 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <JasmineFlower className="w-4 h-4" />
            <DoodledHeart className="w-5 h-5 text-[#C46A7B]" />
            <JasmineFlower className="w-4 h-4" />
          </div>
          <p className="font-serif text-xl sm:text-2xl text-[#682D3B] font-medium leading-relaxed italic whitespace-pre-line">
            "{CONFIG.invitation.caption}"
          </p>
        </div>

        {/* Copy / Save Details Action */}
        <div className="flex justify-center">
          <button
            onClick={handleSaveDetails}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFF8F0] border border-[#C46A7B]/40 text-xs font-medium text-[#682D3B] hover:bg-[#F6DCE0]/40 transition-all shadow-sm focus:outline-none"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Details copied to clipboard!</span>
              </>
            ) : (
              <>
                <Bookmark className="w-3.5 h-3.5 text-[#C46A7B]" />
                <span>Save pooja celebration details</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
