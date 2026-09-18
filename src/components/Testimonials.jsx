import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Star, Sparkles, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonials = siteConfig.testimonials;
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Suporte a swipe por toque (touch gestures para mobile)
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX || !touchEndX) return;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
  };

  // Autoplay com pausa ao interagir (a cada 3 segundos)
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  return (
    <section 
      id="depoimentos" 
      className="py-20 sm:py-28 relative overflow-hidden"
      aria-label="Depoimentos de clientes"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            isDark
              ? 'bg-rose-950/60 text-rose-300 border border-rose-800/40'
              : 'bg-rose-100 text-rose-800 border border-rose-200'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Experiência das Nossas Clientes</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            Quem faz uma vez, não vive mais sem
          </h2>

          <p className={`text-sm sm:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Veja a opinião de quem confiou e transformou o olhar em nosso estúdio.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-roledescription="carousel"
        >
          {/* Card Slider Track */}
          <div className="overflow-hidden rounded-3xl touch-pan-y">
            <div 
              className="flex transition-transform duration-500 ease-out items-stretch"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-1 sm:px-2 box-border"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} de ${totalSlides}`}
                >
                  <div
                    className={`p-7 sm:p-10 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 min-h-[310px] sm:min-h-[280px] ${
                      isDark
                        ? 'bg-[#0d0d11] border-[#22222a] shadow-xl shadow-black/40'
                        : 'bg-white border-[#E2DAD0] shadow-lg shadow-stone-900/5'
                    }`}
                  >
                    {/* Watermark Quote Icon */}
                    <Quote 
                      className="w-20 h-20 sm:w-28 sm:h-28 absolute right-4 sm:right-8 top-4 sm:top-6 pointer-events-none text-rose-500/10" 
                      aria-hidden="true"
                    />

                    <div>
                      {/* 5 Stars Rating */}
                      <div className="flex items-center gap-1.5 mb-5 text-rose-500" aria-label="Avaliação 5 estrelas">
                        {[...Array(item.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-500 text-rose-500" />
                        ))}
                      </div>

                      {/* Testimonial Quote Text */}
                      <p className={`text-base sm:text-lg italic leading-relaxed mb-6 sm:mb-8 relative z-10 ${
                        isDark ? 'text-neutral-200' : 'text-neutral-700'
                      }`}>
                        "{item.text}"
                      </p>
                    </div>

                    {/* Author & Technique Footer */}
                    <div className="pt-5 border-t border-dashed border-rose-500/20 flex flex-wrap items-center justify-between gap-3 relative z-10">
                      <div>
                        <h3 className={`text-base font-bold tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                          {item.name}
                        </h3>
                        <p className="text-xs text-rose-500 font-medium mt-0.5">
                          {item.tag}
                        </p>
                      </div>

                      <span className={`text-xs px-3.5 py-1.5 rounded-full font-medium tracking-wide ${
                        isDark 
                          ? 'bg-neutral-800 text-rose-300 border border-neutral-700' 
                          : 'bg-rose-50 text-rose-800 border border-rose-200'
                      }`}>
                        {item.technique}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Bar (Arrows + Dots + Counter) */}
          <div className="mt-8 flex items-center justify-between gap-4 px-2 sm:px-4">
            
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              aria-label="Depoimento anterior"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all active:scale-90 ${
                isDark
                  ? 'border-neutral-800 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-700'
                  : 'border-[#E2DAD0] text-neutral-700 hover:bg-white hover:text-rose-600 shadow-sm'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Indicators & Slide Counter */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4">
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Ir para o depoimento ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? 'w-7 sm:w-8 bg-gradient-to-r from-rose-500 to-pink-500 shadow-sm shadow-rose-500/50'
                        : isDark
                          ? 'w-2.5 bg-neutral-700 hover:bg-neutral-600'
                          : 'w-2.5 bg-[#D5CCC0] hover:bg-[#BDB2A4]'
                    }`}
                  />
                ))}
              </div>

              <span className={`text-[11px] font-mono tracking-widest ${
                isDark ? 'text-neutral-500' : 'text-neutral-500 font-semibold'
              }`}>
                0{currentIndex + 1} / 0{totalSlides}
              </span>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Próximo depoimento"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all active:scale-90 ${
                isDark
                  ? 'border-neutral-800 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-700'
                  : 'border-[#E2DAD0] text-neutral-700 hover:bg-white hover:text-rose-600 shadow-sm'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
