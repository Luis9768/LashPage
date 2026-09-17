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
      isDark ? 'bg-[#000000] text-white' : 'bg-[#fffafb] text-neutral-900'
    }`}>
      {/* Top Sticky Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors px-4 py-3.5 ${
        isDark ? 'bg-black/90 border-[#202028]' : 'bg-white/95 border-rose-100'
      }`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              isDark
                ? 'bg-neutral-900 text-neutral-200 hover:bg-neutral-800 border border-neutral-800'
                : 'bg-rose-50 text-rose-900 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Perfil</span>
          </button>

          <span className="font-heading text-sm sm:text-base font-bold tracking-tight">
            Catálogo de Procedimentos
          </span>

          <span className="text-[11px] font-semibold text-rose-500">
            Vittoria's Studio
          </span>
        </div>
      </header>

      {/* Hero Header of Catalog Page */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-6 text-center">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
          isDark
            ? 'bg-rose-950/40 text-rose-300 border border-rose-800/40'
            : 'bg-rose-100 text-rose-800 border border-rose-200'
        }`}>
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>Tabela Oficial de Técnicas</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          Encontre o olhar dos seus sonhos
        </h1>

        <p className={`text-xs sm:text-sm max-w-lg mx-auto ${
          isDark ? 'text-neutral-400' : 'text-neutral-600'
        }`}>
          Trabalhamos exclusivamente com fios premium de alta retenção e lash mapping visagista personalizado.
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
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-rose-200'
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
                : 'bg-white border-rose-100 hover:border-rose-200 shadow-lg shadow-rose-950/5'
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
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 shadow-md hover:shadow-rose-500/25 transition-all flex items-center justify-center gap-2"
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
