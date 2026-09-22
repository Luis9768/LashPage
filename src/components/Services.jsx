import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Clock, Calendar, ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

export default function Services({ onOpenCatalog }) {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Exibir os 4 serviços no carrossel de destaque
  const featuredServices = siteConfig.services.slice(0, 4);
  const totalSlides = featuredServices.length + 1; // 4 fotos + 1 card de catálogo adjacente

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Suporte a swipe por toque (touch gestures para mobile)
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleTouchStart = (e) => {
    setIsSwiping(true);
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;
      if (diff > 45) {
        nextSlide();
      } else if (diff < -45) {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Autoplay contínuo a cada 3 segundos (reseta o ciclo de 3s a cada transição ou clique)
  useEffect(() => {
    if (isSwiping || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isSwiping, totalSlides]);

  return (
    <section id="tecnicas" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-8 sm:mb-12">
          <h2 className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-2.5 tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            Técnicas de Extensão de Cílios
          </h2>

          <p className={`text-sm sm:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Navegue pelos procedimentos mais procurados no estúdio com isolamento perfeito e durabilidade garantida.
          </p>
        </div>

        {/* Carousel Container (Mobile & Desktop) */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Carousel Card Slider */}
          <div
            className="overflow-hidden rounded-3xl touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-out items-stretch"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* 4 Procedimentos em Destaque com Altura e Proporções Rigorosamente Iguais */}
              {featuredServices.map((service, index) => {
                return (
                  <div
                    key={service.id}
                    className="w-full flex-shrink-0 px-2 sm:px-4 box-border flex flex-col"
                  >
                    <div
                      className={`rounded-3xl overflow-hidden transition-all duration-300 flex flex-col md:grid md:grid-cols-12 h-[500px] sm:h-[480px] md:h-[400px] flex-1 ${
                        isDark
                          ? 'bg-[#0d0d11] border border-[#22222a] shadow-2xl shadow-black'
                          : 'bg-white border border-neutral-200/90 shadow-[0_14px_36px_-6px_rgba(0,0,0,0.20),0_4px_14px_-2px_rgba(0,0,0,0.10)]'
                      }`}
                    >
                      {/* Image Side */}
                      <div className="md:col-span-5 lg:col-span-5 relative h-48 sm:h-52 md:h-full overflow-hidden flex-shrink-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Duration & Retention */}
                        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-[11px]">
                          <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                            <Clock className="w-3.5 h-3.5 text-rose-400" />
                            {service.duration}
                          </span>
                          <span className="text-neutral-200 font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                            {service.retention}
                          </span>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="md:col-span-7 lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between flex-1 overflow-hidden">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            {service.badge ? (
                              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide ${
                                isDark 
                                  ? 'bg-rose-950/60 text-rose-300 border border-rose-800/50' 
                                  : 'bg-rose-50 text-rose-700 border border-rose-200'
                              }`}>
                                {service.badge}
                              </span>
                            ) : <div />}
                            {service.price && (
                              <span className={`text-xs sm:text-sm font-bold px-2.5 py-1 rounded-xl shrink-0 ${
                                isDark 
                                  ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30' 
                                  : 'bg-rose-50 text-rose-700 border border-rose-200'
                              }`}>
                                {service.price}
                              </span>
                            )}
                          </div>

                          <h3 className={`font-heading text-xl sm:text-2xl font-bold mb-1 tracking-tight ${
                            isDark ? 'text-white' : 'text-neutral-900'
                          }`}>
                            {service.title}
                          </h3>

                          <p className="text-xs font-semibold text-rose-400 mb-2">
                            {service.tagline}
                          </p>

                          <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 md:line-clamp-none ${
                            isDark ? 'text-neutral-300' : 'text-neutral-600'
                          }`}>
                            {service.description}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-2.5">
                          <a
                            href={siteConfig.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:opacity-95 shadow-md shadow-rose-600/25 transition-all flex items-center justify-center gap-2 active:scale-95 active:brightness-90 select-none"
                          >
                            <Calendar className="w-4 h-4" />
                            <span>Agendar {service.title}</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>


                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Slide 5: Card de Catálogo com exatamente o mesmo tamanho e proporção */}
              <div className="w-full flex-shrink-0 px-2 sm:px-4 box-border flex flex-col">
                <div
                  className={`rounded-3xl overflow-hidden transition-all duration-300 flex flex-col md:grid md:grid-cols-12 h-[500px] sm:h-[480px] md:h-[400px] flex-1 ${
                    isDark
                      ? 'bg-[#0d0d11] border border-[#22222a] shadow-2xl shadow-black'
                      : 'bg-white border border-neutral-200/90 shadow-[0_14px_36px_-6px_rgba(0,0,0,0.20),0_4px_14px_-2px_rgba(0,0,0,0.10)]'
                  }`}
                >
                  {/* Image Side */}
                  <div className={`md:col-span-5 lg:col-span-5 relative h-48 sm:h-52 md:h-full overflow-hidden flex-shrink-0 transition-colors ${
                    isDark ? 'bg-neutral-950' : 'bg-stone-100'
                  }`}>
                    <img
                      src="/studio-banner-harmony.jpg"
                      alt="Catálogo de Procedimentos"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t pointer-events-none transition-colors ${
                      isDark
                        ? 'from-black/80 to-transparent'
                        : 'from-white/60 to-transparent'
                    }`}></div>

                    <div className="absolute top-3.5 left-3.5">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md transition-colors ${
                        isDark 
                          ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white' 
                          : 'bg-white/95 text-rose-900 border border-rose-200'
                      }`}>
                        Tabela Completa
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-[11px]">
                      <p className={`font-semibold ${isDark ? 'text-rose-300' : 'text-rose-900'}`}>Vittoria's Studio</p>
                      <p className={`text-[10px] ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>Técnicas sob medida</p>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="md:col-span-7 lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between flex-1 overflow-hidden">
                    <div>
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-rose-500 mb-2">
                        Catálogo Completo
                      </span>

                      <h3 className={`font-heading text-xl sm:text-2xl font-bold mb-1 tracking-tight ${
                        isDark ? 'text-white' : 'text-neutral-900'
                      }`}>
                        Explore Todos os Serviços & Técnicas
                      </h3>

                      <p className="text-xs font-semibold text-rose-400 mb-2">
                        Fox Eyes, Wispy, Shine, Sirena, Sobrancelhas e mais
                      </p>

                      <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 md:line-clamp-none mb-3 ${
                        isDark ? 'text-neutral-300' : 'text-neutral-600'
                      }`}>
                        Acesse nossa tela dedicada com a lista completa de procedimentos, fotos reais, tempos de atendimento, dicas de durabilidade e valores.
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {['Clássico', 'Brasileiro', 'Egípcio', 'Fox Eyes', 'Design', 'Lash Lifting'].map((tag) => (
                          <span
                            key={tag}
                            className={`text-[11px] font-medium px-2.5 py-1 rounded-lg border transition-colors ${
                              isDark
                                ? 'bg-neutral-900/80 border-neutral-800 text-neutral-400'
                                : 'bg-neutral-100/80 border-neutral-200 text-neutral-600'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={onOpenCatalog}
                        aria-label="Abrir catálogo completo com todos os serviços"
                        className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:opacity-95 shadow-lg shadow-rose-600/30 transition-all flex items-center justify-center gap-2 active:scale-95 active:brightness-90 select-none"
                      >
                        <Eye className="w-4 h-4 flex-shrink-0" />
                        <span>Acessar Catálogo de Procedimentos</span>
                        <ArrowRight className="w-4 h-4 flex-shrink-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Serviço anterior"
            className={`absolute top-1/2 -left-3 sm:-left-6 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all z-10 ${
              isDark
                ? 'bg-[#121216]/90 border border-[#2b2b36] text-white hover:bg-neutral-800'
                : 'bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 shadow-lg shadow-black/15'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próximo serviço"
            className={`absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all z-10 ${
              isDark
                ? 'bg-[#121216]/90 border border-[#2b2b36] text-white hover:bg-neutral-800'
                : 'bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 shadow-lg shadow-black/15'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Ir para slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx
                    ? 'w-8 bg-rose-500'
                    : isDark
                    ? 'w-2 bg-neutral-700 hover:bg-neutral-600'
                    : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
