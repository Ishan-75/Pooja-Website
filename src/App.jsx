import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Flower2, Mail } from 'lucide-react';
import { CONFIG } from './config';
import { MusicProvider } from './context/MusicContext';
import { FloatingPetals } from './components/FloatingPetals';
import { EnvelopeOpening } from './components/EnvelopeOpening';
import { HeroSection } from './components/HeroSection';
import { LetterSection } from './components/LetterSection';
import { InvitationCard } from './components/InvitationCard';
import { RomanceSection } from './components/RomanceSection';
import { BigQuestion } from './components/BigQuestion';
import { FooterSection } from './components/FooterSection';
import { AudioPlayer } from './components/AudioPlayer';

function MainAppContent() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [petalsEnabled, setPetalsEnabled] = useState(true);
  const letterRef = useRef(null);

  const handleEnvelopeComplete = () => {
    setEnvelopeOpened(true);
    // Smooth scroll down slightly into hero after transition
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
  };

  const scrollToLetter = () => {
    if (letterRef.current) {
      letterRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('letter-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToQuestion = () => {
    const el = document.getElementById('big-question-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReopenEnvelope = () => {
    setEnvelopeOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#FFF8F0] text-[#682D3B] font-sans selection:bg-[#F6DCE0] selection:text-[#682D3B]">
      {/* Background Floating Petals */}
      <FloatingPetals enabled={petalsEnabled} />

      {/* Persistent Floating Audio Pill (available across sections once opened) */}
      {envelopeOpened && <AudioPlayer isFloating={true} />}

      {/* Main Experience View */}
      <AnimatePresence mode="wait">
        {!envelopeOpened ? (
          <motion.div
            key="envelope-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <EnvelopeOpening onOpenComplete={handleEnvelopeComplete} />
          </motion.div>
        ) : (
          <motion.div
            key="main-view"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {/* Elegant Minimal Header */}
            <header className="sticky top-0 z-30 bg-[#FFF8F0]/85 backdrop-blur-md border-b border-[#EAD4B4]/40 py-3 px-4 sm:px-8 transition-all">
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#C46A7B] fill-[#C46A7B]" />
                  <span className="font-serif italic text-base sm:text-lg text-[#682D3B] font-medium tracking-wide">
                    Oru Chinna Aasai… Unnodu ❤️
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 text-xs font-medium">
                  {/* Jump directly to the big question */}
                  <button
                    onClick={scrollToQuestion}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#682D3B] text-[#FFF8F0] hover:bg-[#C46A7B] transition-colors shadow-sm cursor-pointer"
                  >
                    <span>The Question</span>
                    <Heart className="w-3 h-3 text-[#F6DCE0]" />
                  </button>

                  {/* Toggle floating petals */}
                  <button
                    onClick={() => setPetalsEnabled(!petalsEnabled)}
                    className="p-1.5 rounded-full text-[#682D3B]/70 hover:text-[#682D3B] hover:bg-[#F6DCE0]/40 transition-colors cursor-pointer"
                    title={petalsEnabled ? "Pause floating petals" : "Resume floating petals"}
                    aria-label="Toggle floating petals"
                  >
                    <Flower2 className={`w-4 h-4 ${petalsEnabled ? 'text-[#C46A7B]' : 'text-gray-400'}`} />
                  </button>

                  {/* View envelope button */}
                  <button
                    onClick={handleReopenEnvelope}
                    className="p-1.5 rounded-full text-[#682D3B]/70 hover:text-[#682D3B] hover:bg-[#F6DCE0]/40 transition-colors cursor-pointer"
                    title="View envelope"
                    aria-label="View envelope"
                  >
                    <Mail className="w-4 h-4 text-[#C46A7B]" />
                  </button>
                </div>
              </div>
            </header>

            {/* Main Content Sections */}
            <main>
              {/* Section 2: Romantic Hero */}
              <HeroSection onScrollToLetter={scrollToLetter} />

              {/* Section 3: A Letter From The Heart */}
              <LetterSection ref={letterRef} />

              {/* Section 4: The Floating Invitation Card */}
              <InvitationCard />

              {/* Section 5: A Little Tamil Romance */}
              <RomanceSection />

              {/* Section 6: The Big Question */}
              <BigQuestion />
            </main>

            {/* Section 7: Final Sign-off Footer */}
            <FooterSection 
              onScrollToTop={scrollToTop} 
              onReopenEnvelope={handleReopenEnvelope}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <MusicProvider>
      <MainAppContent />
    </MusicProvider>
  );
}
