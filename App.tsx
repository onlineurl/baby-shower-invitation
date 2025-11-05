
import React, { useState, useRef } from 'react';
import ParallaxBackground from './components/ParallaxBackground.tsx';
import HeaderSection from './components/HeaderSection.tsx';
import WelcomeSection from './components/WelcomeSection.tsx';
import DetailsSection from './components/DetailsSection.tsx';
import RsvpSection from './components/RsvpSection.tsx';
import MapSection from './components/MapSection.tsx';
import GiftSuggestionsSection from './components/GiftSuggestionsSection.tsx';
import FooterSection from './components/FooterSection.tsx';
import IntroAnimation from './components/IntroAnimation.tsx';
import BrandingFooter from './components/BrandingFooter.tsx';
import MusicPlayer from './components/MusicPlayer.tsx';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  
  // SOLUCIÓN DEFINITIVA: Apuntar a un archivo de audio local relativo.
  // Al quitar la barra inicial ('/'), la ruta se resuelve correctamente
  // dentro de la subcarpeta definida en `vite.config.ts` (base: '/baby-shower-invitation/').
  const combinedAudioUrl = 'background.mp3';

  const handleEnter = () => {
    // Esta función se llama con la interacción del usuario, por que es seguro reproducir audio.
    audioRef.current?.play().catch(e => console.error("Error playing audio:", e));

    setShowIntro(false);
    setIsMusicPlaying(true);
  };

  const toggleMusic = () => {
    if (isMusicPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(e => console.error("Error playing audio:", e));
    }
    setIsMusicPlaying(prev => !prev);
  };

  return (
    <>
      <IntroAnimation isVisible={showIntro} onEnter={handleEnter} />
      <div className="relative scroll-wrapper">
        <ParallaxBackground />
        <main className="relative z-10">
          <HeaderSection />
          <div className="shadow-lg">
            <WelcomeSection />
            <DetailsSection />
            <RsvpSection />
            <MapSection />
            <GiftSuggestionsSection />
            <FooterSection />
          </div>
        </main>
        <BrandingFooter />
      </div>
      {/* El reproductor de música solo se muestra después de la introducción */}
      {!showIntro && <MusicPlayer isPlaying={isMusicPlaying} onToggle={toggleMusic} />}
      
      {/* Elemento de audio único gestionado por el componente principal */}
      <audio ref={audioRef} src={combinedAudioUrl} loop preload="auto" />
    </>
  );
};

export default App;