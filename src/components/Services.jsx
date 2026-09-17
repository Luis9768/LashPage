import React, { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Clock, Calendar, Sparkles, ChevronLeft, ChevronRight, ArrowUpRight, Plus, Minus } from 'lucide-react';

export default function Services() {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);
  const carouselRef = useRef(null);

  // Exibir no máximo 4 serviços no carrossel de destaque
  const featuredServices = siteConfig.services.slice(0, 4);
  const allServices = siteConfig.services;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === featuredServices.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredServices.length - 1 : prev - 1));
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
            Navegue pelos 4 procedimentos mais procurados no estúdio com isolamento perfeito e durabilidade garantida.
          </p>
        </div>

        {/* Carousel Container (Mobile & Desktop) */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Carousel Card Slider */}
          <div className="overflow-hidden rounded-3xl">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredServices.map((service, index) => (
                <div
                  key={service.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4 box-border"
                >
                  <div
                    className={`rounded-3xl overflow-hidden border shadow-2xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 ${
                      isDark
                        ? 'bg-[#0d0d11] border-[#22222a] shadow-black'
                        : 'bg-white border-rose-100 shadow-xl shadow-rose-950/5'
                    }`}
                  >
                    {/* Image Side */}
                    <div className="md:col-span-6 relative h-64 sm:h-80 md:h-full min-h-[260px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Tag */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wide bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md">
                          {service.badge}
                        </span>
                      </div>

                      {/* Duration & Retention */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                        <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                          <Clock className="w-3.5 h-3.5 text-rose-400" />
                          {service.duration}
                        </span>
                        <span className="text-neutral-200 text-[11px] font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                          {service.retention}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-rose-500">
                            Procedimento 0{index + 1} de 04
                          </span>
                          <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                            isDark ? 'bg-neutral-800 text-neutral-300' : 'bg-rose-50 text-rose-800'
                          }`}>
                            Studio Vittoria
                          </span>
                        </div>

                        <h3 className={`font-heading text-2xl sm:text-3xl font-bold mb-2 ${
                          isDark ? 'text-white' : 'text-neutral-900'
                        }`}>
                          {service.title}
                        </h3>

                        <p className="text-xs font-semibold text-rose-400 mb-4">
                          {service.tagline}
                        </p>

                        <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                          isDark ? 'text-neutral-300' : 'text-neutral-600'
                        }`}>
                          {service.description}
                        </p>
                      </div>

                      {/* Direct Action for this service */}
                      <a
                        href={siteConfig.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:opacity-95 shadow-lg shadow-rose-600/25 transition-all flex items-center justify-center gap-2 active:scale-98"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Agendar {service.title}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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
            {featuredServices.map((_, dotIdx) => (
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

        {/* Action Button: Veja Mais Serviços (Abre catálogo completo ou expande) */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAllServices(!showAllServices)}
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold border transition-all duration-300 shadow-md ${
              isDark
                ? 'bg-[#121216] border-[#292934] text-rose-300 hover:border-rose-500/60 hover:bg-[#181820]'
                : 'bg-white border-rose-200 text-rose-800 hover:bg-rose-50'
            }`}
          >
            {showAllServices ? (
              <>
                <Minus className="w-4 h-4 text-rose-500" />
                <span>Ocultar Catálogo Completo</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-rose-500" />
                <span>Ver Todos os Serviços & Manutenção</span>
              </>
            )}
          </button>
        </div>

        {/* Expanded Full Catalog Section (when clicked) */}
        {showAllServices && (
          <div className="mt-10 pt-10 border-t border-dashed border-rose-500/20 animate-fadeIn">
            <h3 className={`font-heading text-xl sm:text-2xl font-bold text-center mb-8 ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Catálogo Completo de Procedimentos
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                    isDark
                      ? 'bg-[#0e0e12] border-[#22222a] hover:border-rose-900/50'
                      : 'bg-white border-rose-100 hover:border-rose-200 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-3 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                        {service.badge}
                      </span>
                      <span className="text-xs text-neutral-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-rose-400" /> {service.duration}
                      </span>
                    </div>

                    <h4 className={`font-heading text-xl font-bold mb-1 ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {service.title}
                    </h4>

                    <p className="text-xs text-rose-500 font-semibold mb-2">{service.tagline}</p>
                    <p className={`text-xs leading-relaxed mb-4 ${
                      isDark ? 'text-neutral-300' : 'text-neutral-600'
                    }`}>
                      {service.description}
                    </p>
                  </div>

                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-center text-white bg-gradient-to-r from-rose-500 to-pink-600 flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Agendar no Sistema</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
