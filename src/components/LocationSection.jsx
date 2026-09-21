import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { MapPin, Navigation, Clock, ExternalLink, Compass, Train } from 'lucide-react';

export default function LocationSection() {
  const { isDark } = useTheme();
  const { location } = siteConfig;

  return (
    <section id="localizacao" className={`py-20 sm:py-28 relative transition-colors ${
      isDark ? 'bg-[#000000]' : 'bg-[#A38B59]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* Editorial Luxury Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className={`w-6 sm:w-8 h-[2px] rounded-full shadow-[0_0_8px_rgba(244,63,94,0.4)] flex-shrink-0 ${
              isDark ? 'bg-gradient-to-r from-rose-500 to-pink-500' : 'bg-white'
            }`} />
            <span className={`text-sm sm:text-base font-bold tracking-[0.22em] uppercase ${
              isDark ? 'text-rose-400' : 'text-white drop-shadow-sm'
            }`}>
              Fácil Acesso no ABC
            </span>
            <span className={`w-6 sm:w-8 h-[2px] rounded-full shadow-[0_0_8px_rgba(244,63,94,0.4)] flex-shrink-0 ${
              isDark ? 'bg-gradient-to-l from-rose-500 to-pink-500' : 'bg-white'
            }`} />
          </div>

          <h2 className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            Onde estamos localizadas
          </h2>

          <p className={`text-sm sm:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-950/80 font-medium'}`}>
            Espaço climatizado, confortável e com localização privilegiada no Centro de Santo André.
          </p>
        </div>

        {/* Location Content Box */}
        <div className="max-w-2xl mx-auto">
          
          {/* Information Card */}
          <div className={`p-8 sm:p-10 rounded-3xl flex flex-col justify-between ${
            isDark
              ? 'bg-[#0d0d11] border border-[#22222a] shadow-xl shadow-black/60'
              : 'bg-white border border-black/[0.04] shadow-sm'
          }`}>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 text-rose-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`font-heading text-2xl font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {location.title}
                  </h3>
                  <p className="text-xs text-rose-500 font-semibold">{location.city}</p>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-4 mb-8">
                <div className={`p-4 sm:p-5 rounded-2xl border ${
                  isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-neutral-50/90 border-neutral-200/80'
                }`}>
                  <p className={`text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {location.address}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {location.neighborhood} • {location.city} • CEP: {location.cep}
                  </p>
                  <p className="text-xs text-rose-500 mt-2 font-medium">
                    📌 {location.reference}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                        Horários de Atendimento
                      </h4>
                      <p className={`text-xs sm:text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        {location.hours}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                        Transporte Público
                      </h4>
                      <p className={`text-xs sm:text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        7 min da Estação Santo André (CPTM)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Map Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-rose-500/20">
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={location.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all flex items-center justify-center gap-2 ${
                  isDark
                    ? 'border-neutral-700 text-neutral-200 hover:bg-neutral-800'
                    : 'border-[#A98D51]/35 text-neutral-800 hover:bg-[#F4EFE6]'
                }`}
              >
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Abrir no Waze</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
