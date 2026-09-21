import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { siteConfig } from '../../config/siteConfig';
import { ArrowLeft, MapPin, Navigation, Compass, Clock, Check, Copy, Car, Train, Calendar, Sparkles } from 'lucide-react';

export default function LocationView({ onBack }) {
  const { isDark } = useTheme();
  const { location } = siteConfig;
  const [copied, setCopied] = useState(false);

  // Scroll to top when view opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleCopyAddress = () => {
    const fullAddress = `${location.address}, ${location.neighborhood} - ${location.city}, CEP ${location.cep}`;
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

          {/* Clean Location Identity */}
          <div className="flex items-center gap-2 text-right">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-rose-300">
              Localização
            </span>
            <span className="text-white/40 text-xs">•</span>
            <span className={`text-[11px] font-medium ${isDark ? 'text-neutral-400' : 'text-white/80'}`}>
              Santo André • SP
            </span>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-6 text-center">
        <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight mb-2.5 text-white">
          Como Chegar ao Studio em Santo André
        </h1>

        <p className={`text-xs sm:text-sm max-w-lg mx-auto leading-relaxed ${
          isDark ? 'text-neutral-400' : 'text-white/85 font-medium'
        }`}>
          Localização de fácil acesso no ABC Paulista, próximo a transporte público e principais vias da cidade.
        </p>
      </div>

      {/* Address Card with Copy Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <div className={`p-6 sm:p-8 rounded-3xl ${
          isDark ? 'bg-[#0d0d11] border border-[#22222a] shadow-black shadow-xl' : 'bg-white border border-black/[0.04] shadow-sm'
        }`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-rose-500/20">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-rose-500">
                Endereço Oficial
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold font-heading mt-0.5">
                {location.address}
              </h2>
              <p className={`text-xs sm:text-sm mt-0.5 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {location.neighborhood} • {location.city} • CEP {location.cep}
              </p>
            </div>

            <button
              onClick={handleCopyAddress}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 ${
                copied
                  ? 'bg-emerald-500 text-white'
                  : isDark
                  ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
                  : 'bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-200'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Endereço</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Nav Route Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6">
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:opacity-95 shadow-md flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Abrir no Google Maps</span>
            </a>

            <a
              href={location.wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold border transition-all flex items-center justify-center gap-2 ${
                isDark ? 'bg-neutral-900 hover:bg-neutral-800 border-neutral-800 text-cyan-300' : 'bg-rose-50 hover:bg-rose-100 border-rose-200 text-cyan-700'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Abrir no Waze</span>
            </a>
          </div>
        </div>
      </div>


      {/* Facilities & Transports */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#0d0d11] border-[#22222a]' : 'bg-white border-white/60 shadow-lg shadow-black/5'
        }`}>
          <div className="flex items-center gap-2 mb-2 text-rose-500 font-bold text-sm">
            <Train className="w-4 h-4" />
            <span>Transporte Público</span>
          </div>
          <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Apenas 7 minutos a pé da Estação Celso Daniel - Santo André (Linha 10-Turquesa da CPTM e Terminal de Ônibus Central).
          </p>
        </div>

        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#0d0d11] border-[#22222a]' : 'bg-white border-white/60 shadow-lg shadow-black/5'
        }`}>
          <div className="flex items-center gap-2 mb-2 text-rose-500 font-bold text-sm">
            <Clock className="w-4 h-4" />
            <span>Horários & Atendimento</span>
          </div>
          <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            {location.hours}. Atendimento pontual com hora marcada para você relaxar sem esperas.
          </p>
        </div>
      </div>
    </div>
  );
}
