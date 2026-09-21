import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { siteConfig } from '../../config/siteConfig';
import { ArrowLeft, Clock, Calendar, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function CatalogView({ onBack }) {
  const { isDark } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState('todos');

  // Scroll to top when view opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories = [
    { id: 'todos', label: 'Todos os Procedimentos' },
    { id: 'destaque', label: 'Mais Pedidos' },
    { id: 'manutencao', label: 'Cuidados & Manutenção' },
  ];

  const filteredServices = siteConfig.services.filter((service) => {
    if (selectedFilter === 'todos') return true;
    if (selectedFilter === 'destaque') return service.popular || service.badge.includes('Pedido') || service.badge.includes('Glamour');
    if (selectedFilter === 'manutencao') return service.id.includes('manutencao') || service.id.includes('lifting');
    return true;
  });

  return (
    <div className={`min-h-screen pb-24 transition-colors duration-300 ${
      isDark ? 'bg-[#000000] text-white' : 'bg-[#B5B0A5] text-white'
    }`}>
      {/* Top Sticky Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors px-4 py-3 ${
        isDark ? 'bg-black/85 border-[#1c1c22]' : 'bg-[#B5B0A5]/95 border-white/20'
      }`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {/* Minimalist Back Button */}
          <button
            onClick={onBack}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all active:scale-90 active:bg-rose-500/20 active:border-rose-500/50 ${
              isDark
                ? 'bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-800'
                : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5 text-rose-300" />
            <span>Voltar</span>
          </button>

          {/* Clean Studio Identity */}
          <div className="flex items-center gap-2 text-right">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-rose-300">
              Catálogo
            </span>
            <span className="text-white/40 text-xs">•</span>
            <span className={`text-[11px] font-medium ${isDark ? 'text-neutral-400' : 'text-white/80'}`}>
              Vittoria's Studio
            </span>
          </div>
        </div>
      </header>

      {/* Hero Header of Catalog Page */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-6 text-center">
        <div className="inline-flex items-center justify-center gap-3 mb-2.5">
          <span className={`w-5 sm:w-7 h-[2px] rounded-full flex-shrink-0 ${
            isDark ? 'bg-gradient-to-r from-rose-500 to-pink-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]' : 'bg-white'
          }`} />
          <span className={`text-sm sm:text-base font-bold uppercase tracking-[0.22em] drop-shadow-sm ${
            isDark ? 'text-rose-400' : 'text-white'
          }`}>
            Tabela Oficial de Procedimentos
          </span>
          <span className={`w-5 sm:w-7 h-[2px] rounded-full flex-shrink-0 ${
            isDark ? 'bg-gradient-to-l from-rose-500 to-pink-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]' : 'bg-white'
          }`} />
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight mb-2.5 text-white">
          Catálogo de Técnicas & Cílios
        </h1>

        <p className={`text-xs sm:text-sm max-w-md mx-auto leading-relaxed ${
          isDark ? 'text-neutral-400' : 'text-white/85 font-medium'
        }`}>
          Fios premium de alta retenção, biossegurança e lash mapping visagista personalizado.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === cat.id
                  ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md'
                  : isDark
                  ? 'bg-[#121216] text-neutral-400 hover:text-white border border-[#22222a]'
                  : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services List / Cards */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 mt-4">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className={`rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col md:flex-row ${
                isDark
                  ? 'bg-[#0d0d11] border-[#22222a] hover:border-rose-900/50 shadow-xl shadow-black/50'
                  : 'bg-white border border-black/[0.04] shadow-sm'
              }`}
          >
            {/* Image banner on side */}
            <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md">
                  {service.badge}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="md:w-7/12 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-1">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-rose-500 mb-3">
                  {service.tagline}
                </p>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                }`}>
                  {service.description}
                </p>

                {/* Badges of duration & retention */}
                <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
                  <span className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 border font-medium ${
                    isDark ? 'bg-neutral-900 border-neutral-800 text-neutral-300' : 'bg-rose-50 border-rose-100 text-neutral-700'
                  }`}>
                    <Clock className="w-3.5 h-3.5 text-rose-500" />
                    {service.duration}
                  </span>

                  <span className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 border font-medium ${
                    isDark ? 'bg-neutral-900 border-neutral-800 text-neutral-300' : 'bg-rose-50 border-rose-100 text-neutral-700'
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {service.retention}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-dashed border-rose-500/20 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <span className="text-[11px] text-neutral-400">
                  ✨ Inclui Lash Mapping e Escovinha
                </span>

                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 shadow-md hover:shadow-rose-500/25 active:scale-95 active:brightness-90 transition-all flex items-center justify-center gap-2 select-none"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar {service.title}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Care Guide Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12">
        <div className={`p-6 sm:p-8 rounded-3xl border ${
          isDark ? 'bg-[#0d0d11] border-[#22222a]' : 'bg-rose-50/70 border-rose-200'
        }`}>
          <div className="flex items-center gap-2 mb-2 text-rose-500">
            <Heart className="w-5 h-5 fill-rose-500" />
            <h4 className="text-base font-bold">Dicas de Ouro para Retenção Impecável</h4>
          </div>
          <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Higienize os cílios diariamente com espuma própria ou shampoo neutro, escove delicadamente e evite produtos oleosos diretamente nos olhos para garantir cílios perfeitos até a manutenção!
          </p>
        </div>
      </div>
    </div>
  );
}
