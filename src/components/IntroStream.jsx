import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function IntroStream({ onComplete }) {
  const fullText = "Está pronta para ficar maravilhosa?";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Typewriter streaming effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 45); // Cadência de digitação suave e natural (45ms)
      return () => clearTimeout(timeout);
    } else {
      // Quando termina de digitar
      setIsDoneTyping(true);
      // Auto-revelação suave após 1.4s de leitura ou clique imediato
      const autoCloseTimeout = setTimeout(() => {
        handleEnterSite();
      }, 1600);
      return () => clearTimeout(autoCloseTimeout);
    }
  }, [currentIndex, fullText]);

  const handleEnterSite = () => {
    setIsClosing(true);
    setTimeout(() => {
      onComplete();
    }, 700); // tempo da animação de saída suave
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center px-6 bg-[#000000] text-white transition-all duration-700 select-none ${
        isClosing
          ? 'opacity-0 scale-105 pointer-events-none filter blur-sm'
          : 'opacity-100 scale-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-rose-600/15 blur-[140px] animate-pulse"></div>
      </div>

      {/* Top Branding Pill */}
      <div className="absolute top-8 sm:top-12 flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/20 bg-neutral-900/60 backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-rose-500" />
        <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-rose-200">
          Vittoria's Studio • Santo André
        </span>
      </div>

      {/* Central Typewriter Container */}
      <div className="max-w-2xl text-center relative z-10 my-auto">
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight min-h-[90px] sm:min-h-[140px] flex items-center justify-center flex-wrap">
          <span className="text-white drop-shadow-lg">
            {displayedText}
          </span>
          {/* Blinking Vercel-style streaming cursor */}
          <span className="inline-block w-1 sm:w-1.5 h-8 sm:h-12 bg-rose-500 ml-1.5 animate-pulse rounded-full shadow-[0_0_12px_rgba(244,63,94,0.8)]"></span>
        </h1>

        {/* Subtitle that fades in after typing */}
        <div
          className={`mt-4 sm:mt-6 transition-all duration-500 ${
            isDoneTyping ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <p className="text-xs sm:text-sm text-neutral-400 font-light tracking-wide max-w-md mx-auto">
            Mais do que cílios, uma experiência única de realce e autoestima.
          </p>
        </div>

        {/* Enter Button (Visible immediately after typing, or click anytime) */}
        <div
          className={`mt-8 sm:mt-10 transition-all duration-500 ${
            isDoneTyping ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <button
            onClick={handleEnterSite}
            className="group px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 shadow-xl shadow-rose-600/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            <span>Sim, quero meu novo olhar</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Skip Button in Bottom Right */}
      <button
        onClick={handleEnterSite}
        className="absolute bottom-6 sm:bottom-8 text-xs text-neutral-400 hover:text-white transition-colors tracking-wider uppercase font-medium px-4 py-2"
      >
        Pular introdução →
      </button>
    </div>
  );
}
