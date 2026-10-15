# Oru Chinna Aasai… Unnodu ❤️
### A Poetic Tamil-Romance Invitation Website from Ishan to Suganthi

A romantic, single-page invitation website designed for Suganthi. The website preserves the complete visual design, warm ivory stationery, delicate jasmine flowers, and interactive envelope surprise, while elevating the storytelling with poetic prose and introducing a flexible background soundtrack system.

---

## 🎵 How to Change the Background Song

The music system is designed so you can replace the song whenever you want **without modifying any React components**.

### Method 1: Use Your Own Audio File (Recommended)

1. Put your audio file into the `public/music/` folder:
   ```
   public/
     music/
       romantic-track.mp3   <-- (supports .mp3, .wav, or .ogg)
   ```
2. Open [`src/config/romanceConfig.js`](file:///c:/Users/Snega/Desktop/Ishan/Websites/Pooja%20celebration/src/config/romanceConfig.js) and update the track details:
   ```javascript
   music: {
     musicEnabled: true,
     isPlayerVisible: true,
     autoStartOnEnvelopeOpen: true,

     // Set your song details here:
     songTitle: "Your Song Name",
     artistName: "Artist / Composer Name",
     audioSrc: "/music/romantic-track.mp3", // path to your file in public/
     initialVolume: 0.75,
   }
   ```
3. That's it! Save the file and the website will automatically load and play your new track.

### Method 2: Use a Direct Audio URL
You can also use a direct link to any legally hosted audio file on the web:
```javascript
audioSrc: "https://example.com/audio/my-romantic-melody.mp3",
```

### Automatic Soft Piano Synth Fallback:
If no audio file is provided (or if the file path is empty/missing), the website automatically falls back to a gentle acoustic piano melody synthesized through the browser's Web Audio API. It will never fail or throw errors.

---

## 📝 Updated Poetic Writing Highlights

### 💌 1. Opening Surprise
- **Badge**: *"A little story, just for you"*
- **Envelope Text**: *"For my Suganthi ❤️"*
- **Inscription**: *"Hey, Azhagiye… I made this little something, just for you."*
- **Button**: *"Open your little surprise 💌"*

### 📸 2. Romantic Hero
- **Tagline**: *"Oru chinna aasai… unnodu"*
- **Main Lines**:
  > *"Pesamale…*  
  > *Naanae varugiren…*  
  > *Azhagiye? ❤️"*
- **Supporting Thought**: *"In between quiet thoughts and busy days, can we make one more beautiful memory together this Friday?"*

### 📜 3. The Letter From The Heart
- Sincere, accountable, and tender:
  > *"First of all, I wanted to say I'm truly sorry for the times I've hurt you, left things unsaid, or made you feel like your feelings weren't held with the care they deserved.*  
  >  
  > *I know an apology on paper cannot magically erase the moments that stung, and I don't want these words to be just pretty sentences. I want to keep learning you, listening better, and showing you through my quiet actions how much you truly mean to me.*  
  >  
  > *There is a strange, quiet magic in how you move through my days. Even the most ordinary moments seem to soften whenever you're near—like a gentle silence where everything finally feels right.*  
  >  
  > *I also wanted to ask you something with an open heart.*  
  >  
  > *I know you originally planned to dedicate Friday to your studies for your Saturday exam, and I completely understood when you said you couldn't make it to the pooja celebration. Your peace of mind and your preparation will always come first.*  
  >  
  > *Still, I found myself hoping for one little moment. Not because I expect you to say yes, but because having you beside me—even for a little while, sharing that sacred morning and making a quiet memory together—would make the celebration something I'd treasure.*  
  >  
  > *And I would be genuinely happy to capture a few lovely photos together to remember tomorrow.*  
  >  
  > *So, Azhagiye…*  
  > *Would you come to our college pooja celebration with me this Friday?*  
  >  
  > *No pressure, no expectations, okay? If you need to study or simply want to rest, my heart will understand completely.*  
  > *I just wanted to ask you softly, in a way that comes straight from my heart.*  
  >  
  > *With all my love and warmth,*  
  > *Ishan ❤️"*

### 🗓️ 4. Floating Invitation Card
- **Date**: This Friday
- **Time**: 10:00 AM Onwards
- **Venue**: Our college campus
- **Caption**: *"The celebration will be lovely on its own, but sharing a little moment of it with you would make it truly meaningful. ❤️"*

### 🎵 5. Tamil Romance & Phrases
- *"Pesamale…" (In the quiet between our words…)*
- *"Naanae varugiren…" (I find myself walking toward you…)*
- *"Azhagiye…" (My dearest, beautiful one…)*
- **Original Poetry**:
  > *"Unnai paarkum neram…*  
  > *Enakku ellame konjam azhagaagidudhu. ❤️"*  
  > *(The moment I see you… everything in this world turns a little more beautiful.)*
- **Theme**: *"Oru chinna aasai… unnodu."*

### 💖 6. The Big Question
- *"So, Suganthi… Will you come and make this little memory with me, Azhagiye? ❤️"*
- **Choice 1 ("Yes, I'll come! ❤️")**:  
  *"You just made my day. ❤️ I'm really looking forward to sharing this moment with you. I'll save you the sweetest spot, some prasadam, and my warmest smile."*
- **Choice 2 ("Maybe… 🌷")**:  
  *"That's okay, Azhagiye. Take your time — no pressure at all. ❤️ Your exams and your comfort always come first. I'm cheering for you no matter what!"*

### 🌸 7. Final Sign-off
- *"Whatever your answer, I'm glad I got to ask you. ❤️"*
- *"With all my love, Ishan"*

---

## 🛠️ Local Development & Build

```bash
# Start development server
npm run dev

# Build for production
npm run build
```
Live local preview URL: [http://localhost:5174/](http://localhost:5174/)
