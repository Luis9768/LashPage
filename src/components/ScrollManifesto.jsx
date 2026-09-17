import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
export default function ScrollManifesto() {
  const { isDark } = useTheme();
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const manifestoText = siteConfig.manifesto.text;
  const words = manifestoText.split(' ');

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When the section comes into view, track progress from 90% viewport to 20%
      const start = windowHeight * 0.9;
      const end = windowHeight * 0.2;
      const current = rect.top;

      let progress = (start - current) / (start - end);
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className={`relative py-24 sm:py-36 px-4 sm:px-6 transition-colors duration-500 overflow-hidden ${
        isDark
          ? 'bg-[#000000] border-y border-[#18181c]'
          : 'bg-[#faf5f6] border-y border-rose-100'
      }`}
    >
      {/* Glow effect behind the text */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[320px] sm:w-[540px] h-[320px] sm:h-[540px] rounded-full bg-rose-500/15 blur-[140px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">


        {/* Scroll Reveal Dynamic Text */}
        <p className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-relaxed sm:leading-relaxed select-none">
          {words.map((word, index) => {
            const wordThreshold = index / words.length;
            const isRevealed = scrollProgress >= wordThreshold;

            const step = 1 / words.length;
            const localProgress = Math.min(
              Math.max((scrollProgress - wordThreshold) / step, 0),
              1
            );

            const isSpecial = [
              'pronta',
              'conquistar',
              'olhar?',
              'autoestima',
              'elegância',
              'medida'
            ].includes(word.toLowerCase().replace(/[.,?]/g, ''));

            return (
              <span
                key={index}
                className="inline-block mx-1 sm:mx-1.5 transition-all duration-200 transform"
                style={{
                  opacity: 0.15 + localProgress * 0.85,
                  color: isRevealed
                    ? isDark
                      ? '#ffffff'
                      : '#18181b'
                    : isDark
                    ? '#52525b'
                    : '#a1a1aa',
                  textShadow:
                    isRevealed && isDark
                      ? '0 0 25px rgba(244, 63, 94, 0.35)'
                      : 'none',
                }}
              >
                {isSpecial && isRevealed ? (
                  <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent underline decoration-rose-500/50 underline-offset-4">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </span>
            );
          })}
        </p>

        {/* Scroll Progress Bar indicator */}
        <div className="mt-12 max-w-xs mx-auto">
          <div className={`w-full h-1 rounded-full overflow-hidden ${
            isDark ? 'bg-neutral-800' : 'bg-rose-200/60'
          }`}>
            <div
              className="h-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-150 rounded-full"
              style={{ width: `${scrollProgress * 100}%` }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
}
