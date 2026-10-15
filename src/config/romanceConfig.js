// ====================================================================
// ROMANCE & MUSIC CONFIGURATION
// Easily customize songs, letter text, and event details here!
// ====================================================================

export const ROMANCE_CONFIG = {
  // ------------------------------------------------------------------
  // 1. SOUNDTRACK & MUSIC SETTINGS
  // ------------------------------------------------------------------
  music: {
    // Enable or disable music system entirely
    musicEnabled: true,

    // Whether the floating/inline music player is visible
    isPlayerVisible: true,

    // Automatically start playing when Suganthi opens the envelope
    autoStartOnEnvelopeOpen: true,

    // Track details displayed in the player
    songTitle: "Azhagiye ",
    artistName: "A.R.Rahman",

    // Path to your audio file. 
    // You can place your song in: public/music/romantic-track.mp3
    // Supported formats: .mp3, .wav, .ogg, or any valid direct audio URL
    audioSrc: "/music/romantic-track.mp3",

    // Optional album / cover art image path
    coverImage: "",

    // Initial playback volume (0.0 to 1.0)
    initialVolume: 0.75,

    // Built-in romantic acoustic piano synthesizer fallback.
    // If the audio file above is not found, it seamlessly plays a soothing,
    // gentle ambient melody using Web Audio API so it's never silent!
    synthFallbackEnabled: true,
  },

  // ------------------------------------------------------------------
  // 2. NAMES & RECIPIENT
  // ------------------------------------------------------------------
  recipient: {
    name: "Suganthi",
    petName: "Azhagiye",
  },
  sender: {
    name: "Ishan",
  },

  // ------------------------------------------------------------------
  // 3. SECTION 1: THE OPENING ENVELOPE
  // ------------------------------------------------------------------
  envelope: {
    badge: "A little story, just for you",
    toText: "For my Suganthi ❤️",
    subText: "Hey, Azhagiye… I made this little something, just for you.",
    buttonLabel: "Open your little surprise 💌",
    waxSealSymbol: "S & I",
    postmark: "COLLEGE POST • SPECIAL INVITATION • 2026",
  },

  // ------------------------------------------------------------------
  // 4. SECTION 2: THE ROMANTIC HERO
  // ------------------------------------------------------------------
  hero: {
    tagline: "Oru chinna aasai… unnodu",
    headline: [
      "Pesamale…",
      "Naanae varugiren…",
      "Azhagiye? ❤️"
    ],
    supportingText: "In between quiet thoughts and busy days, can we make one more beautiful memory together this Friday?",
    campusImage: "/images/campus.jpg",
    campusImageCaption: "Our campus at golden hour — where every pathway reminds me of you",
  },

  // ------------------------------------------------------------------
  // 5. SECTION 3: THE LETTER FROM THE HEART
  // ------------------------------------------------------------------
  letter: {
    salutation: "Hey Suganthi, ❤️",
    paragraphs: [
      "First of all, I wanted to say I'm truly sorry for the times I've hurt you, left things unsaid, or made you feel like your feelings weren't held with the care they deserved.",
      "I know an apology on paper cannot magically erase the moments that stung, and I don't want these words to be just pretty sentences. I want to keep learning you, listening better, and showing you through my quiet actions how much you truly mean to me.",
      "There is a strange, quiet magic in how you move through my days. Even the most ordinary moments seem to soften whenever you're near—like a gentle silence where everything finally feels right.",
      "I also wanted to ask you something with an open heart.",
      "I know you originally planned to dedicate Friday to your studies for your Saturday exam, and I completely understood when you said you couldn't make it to the pooja celebration.",
      "Your peace of mind and your preparation will always come first.",
      "Still, I found myself hoping for one little moment. Not because I expect you to say yes, but because having you beside me—even for a little while, sharing that sacred morning and making a quiet memory together—would make the celebration something I'd treasure.",
      "And I would be genuinely happy to capture a few lovely photos together to remember tomorrow.",
      "So, Azhagiye…",
      "Would you come to our college pooja celebration with me this Friday?",
      "No pressure, no expectations, okay? If you need to study or simply want to rest, my heart will understand completely.",
      "I just wanted to ask you softly, in a way that comes straight from my heart."
    ],
    closing: "With all my love and warmth,",
    signature: "Ishan ❤️"
  },

  // ------------------------------------------------------------------
  // 6. SECTION 4: THE INVITATION CARD
  // ------------------------------------------------------------------
  invitation: {
    badge: "A Little Invitation",
    event: "College Pooja Celebration",
    date: "This Friday",
    time: "10:00 AM Onwards", // Editable time
    venue: "Our college campus",
    dressCode: "Traditional / Saree / Kurti (Wear whatever makes you smile!)",
    caption: "The celebration will be lovely on its own, but sharing a little moment of it with you would make it truly meaningful. ❤️",
  },

  // ------------------------------------------------------------------
  // 7. SECTION 5: A LITTLE TAMIL ROMANCE & PHRASES
  // ------------------------------------------------------------------
  romance: {
    tagline: "A Little Tamil Romance",
    phrases: [
      { tamil: "Pesamale…", meaning: "In the quiet between our words…" },
      { tamil: "Naanae varugiren…", meaning: "I find myself walking toward you…" },
      { tamil: "Azhagiye…", meaning: "My dearest, beautiful one…" }
    ],
    originalPoem: {
      tamilLines: [
        "Unnai paarkum neram…",
        "Enakku ellame konjam azhagaagidudhu. ❤️"
      ],
      meaning: "The moment I see you… everything in this world turns a little more beautiful."
    },
    footerNote: "Oru chinna aasai… unnodu."
  },

  // ------------------------------------------------------------------
  // 8. SECTION 6: THE BIG QUESTION
  // ------------------------------------------------------------------
  bigQuestion: {
    questionIntro: "So, Suganthi…",
    questionMain: "Will you come and make this little memory with me, Azhagiye? ❤️",
    helperNote: "Tap with your heart — no pressure either way.",
    yesButtonText: "Yes, I'll come! ❤️",
    maybeButtonText: "Maybe… 🌷",
    yesResponse: {
      heading: "You just made my day. ❤️",
      message: "I'm really looking forward to sharing this moment with you.",
      subtext: "I'll save you the sweetest spot, some prasadam, and my warmest smile.",
    },
    maybeResponse: {
      heading: "That's okay, Azhagiye. ❤️",
      message: "Take your time — no pressure at all.",
      subtext: "Your exams and your comfort always come first. I'm cheering for you no matter what!",
    }
  },

  // ------------------------------------------------------------------
  // 9. SECTION 7: FINAL SIGN-OFF
  // ------------------------------------------------------------------
  footer: {
    closingNote: "Whatever your answer, I'm glad I got to ask you. ❤️",
    valediction: "With all my love,",
    senderName: "Ishan",
  }
};
