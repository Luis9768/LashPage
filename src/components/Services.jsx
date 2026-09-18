import React, { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Clock, Calendar, Sparkles, ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

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

  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
  };

  return (
    <section id="tecnicas" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            isDark
              ? 'bg-rose-950/40 text-rose-300 border border-rose-800/40'
              : 'bg-rose-100 text-rose-800 border border-rose-200'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Técnicas em Destaque</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            Escolha o estilo ideal para o seu olhar
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
                const isLastPhoto = index === featuredServices.length - 1;

                return (
                  <div
                    key={service.id}
                    className="w-full flex-shrink-0 px-2 sm:px-4 box-border flex flex-col"
                  >
                    <div
                      className={`rounded-3xl overflow-hidden border shadow-2xl transition-all duration-300 flex flex-col md:grid md:grid-cols-12 h-[500px] sm:h-[480px] md:h-[400px] flex-1 ${
                        isDark
                          ? 'bg-[#0d0d11] border-[#22222a] shadow-black'
                          : 'bg-white border-rose-100 shadow-xl shadow-rose-950/5'
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Tag */}
                        <div className="absolute top-3.5 left-3.5">
                          <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md">
                            {service.badge}
                          </span>
                        </div>

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

                          {/* Link de convite rápido ao lado da última foto */}
                          {isLastPhoto && (
                            <button
                              type="button"
                              onClick={onOpenCatalog}
                              className="w-full mt-2 py-1 text-center text-xs font-semibold text-rose-400 hover:text-rose-300 transition-all flex items-center justify-center gap-1.5 active:scale-95 active:text-white"
                            >
                              <span>Ver todas as opções no Catálogo Completo</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Slide 5: Card de Catálogo com exatamente o mesmo tamanho e proporção */}
              <div className="w-full flex-shrink-0 px-2 sm:px-4 box-border flex flex-col">
                <div
                  className={`rounded-3xl overflow-hidden border shadow-2xl transition-all duration-300 flex flex-col md:grid md:grid-cols-12 h-[500px] sm:h-[480px] md:h-[400px] flex-1 ${
                    isDark
                      ? 'bg-gradient-to-br from-[#131118] via-[#0d0d11] to-[#0a0a0c] border-rose-500/30 shadow-black'
                      : 'bg-gradient-to-br from-rose-50 via-white to-rose-100/40 border-rose-200 shadow-xl shadow-rose-950/5'
                  }`}
                >
                  {/* Image Side */}
                  <div className="md:col-span-5 lg:col-span-5 relative h-48 sm:h-52 md:h-full overflow-hidden flex-shrink-0 bg-neutral-950">
                    <img
                      src="/studio-banner.jpg"
                      alt="Catálogo de Procedimentos"
                      className="w-full h-full object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md">
                        Tabela Completa
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white text-[11px]">
                      <p className="font-semibold text-rose-300">Vittoria's Studio</p>
                      <p className="text-[10px] text-neutral-300">Técnicas sob medida</p>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="md:col-span-7 lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between flex-1 overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500">
                          Catálogo Completo
                        </span>
                        <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${
                          isDark ? 'bg-neutral-800 text-neutral-300' : 'bg-rose-50 text-rose-800'
                        }`}>
                          Studio Vittoria
                        </span>
                      </div>

                      <h3 className={`font-heading text-xl sm:text-2xl font-bold mb-1 tracking-tight ${
                        isDark ? 'text-white' : 'text-neutral-900'
                      }`}>
                        Explore Todos os Serviços & Técnicas
                      </h3>

                      <p className="text-xs font-semibold text-rose-400 mb-2">
                        Volume Russo, Híbrido, Lifting, Cuidados e Manutenções
                      </p>

                      <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 md:line-clamp-none mb-3 ${
                        isDark ? 'text-neutral-300' : 'text-neutral-600'
                      }`}>
                        Acesse nossa tela dedicada com a lista completa de procedimentos, tempos de atendimento, dicas de durabilidade e agendamento instantâneo.
                      </p>

                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium border flex items-center gap-1 ${
                          isDark ? 'bg-neutral-900/80 border-neutral-800 text-neutral-300' : 'bg-white border-rose-200 text-neutral-700'
                        }`}>
                          <CheckCircle2 className="w-3 h-3 text-rose-500" />
                          +6 Procedimentos
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium border flex items-center gap-1 ${
                          isDark ? 'bg-neutral-900/80 border-neutral-800 text-neutral-300' : 'bg-white border-rose-200 text-neutral-700'
                        }`}>
                          <CheckCircle2 className="w-3 h-3 text-rose-500" />
                          Guia de Cuidados
                        </span>
                      </div>
                    </div>

                    <div className="pt-2.5">
                      <button
                        type="button"
                        onClick={onOpenCatalog}
                        className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:opacity-95 shadow-lg shadow-rose-600/30 transition-all flex items-center justify-center gap-2 active:scale-95 active:brightness-90 select-none"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Acessar Catálogo de Procedimentos</span>
                        <ArrowRight className="w-4 h-4" />
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
            className={`absolute top-1/2 -left-3 sm:-left-6 -translate-y-1/2 w-11 h-11 rounded-full border shadow-xl flex items-center justify-center transition-all z-10 ${
              isDark
                ? 'bg-[#121216]/90 border-[#2b2b36] text-white hover:bg-neutral-800'
                : 'bg-white/95 border-rose-200 text-neutral-800 hover:bg-rose-50'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próximo serviço"
            className={`absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 w-11 h-11 rounded-full border shadow-xl flex items-center justify-center transition-all z-10 ${
              isDark
                ? 'bg-[#121216]/90 border-[#2b2b36] text-white hover:bg-neutral-800'
                : 'bg-white/95 border-rose-200 text-neutral-800 hover:bg-rose-50'
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
                    : 'w-2 bg-rose-200 hover:bg-rose-300'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
