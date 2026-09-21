import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, Sparkles, HeartHandshake, Eye, Coffee, Gift } from 'lucide-react';

export default function Differentials() {
  const { isDark } = useTheme();

  const iconMap = {
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
    HeartHandshake: HeartHandshake,
    Eye: Eye,
    Coffee: Coffee,
    Gift: Gift,
  };

  return (
    <section id="diferenciais" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          {/* Editorial Luxury Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className={`w-6 sm:w-8 h-[2px] rounded-full shadow-[0_0_8px_rgba(244,63,94,0.4)] flex-shrink-0 ${
              isDark ? 'bg-gradient-to-r from-rose-500 to-pink-500' : 'bg-white'
            }`} />
            <span className={`text-sm sm:text-base font-bold tracking-[0.22em] uppercase ${
              isDark ? 'text-rose-400' : 'text-white drop-shadow-sm'
            }`}>
              Por que escolher nosso atendimento
            </span>
            <span className={`w-6 sm:w-8 h-[2px] rounded-full shadow-[0_0_8px_rgba(244,63,94,0.4)] flex-shrink-0 ${
              isDark ? 'bg-gradient-to-l from-rose-500 to-pink-500' : 'bg-white'
            }`} />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-white drop-shadow-sm">
            Cuidado milimétrico em cada detalhe
          </h2>

          <p className={`text-sm sm:text-base ${isDark ? 'text-neutral-400' : 'text-white/95 font-medium drop-shadow-sm'}`}>
            Mais do que colocar cílios: uma experiência focada na saúde dos seus olhos, conforto supremo e durabilidade real.
          </p>
        </div>

        {/* Cards Grid: 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {siteConfig.differentials.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className={`p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 relative group flex flex-col justify-start active:scale-[0.98] ${
                  isDark
                    ? 'bg-[#0d0d11]/90 border-[#22222a] hover:border-rose-500/40 hover:bg-[#131319] shadow-md shadow-black/40'
                    : 'bg-white border border-black/[0.04] shadow-sm hover:shadow'
                }`}
              >
                {/* Subtle luxury glow indicator on hover */}
                <div className={`absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent ${
                  isDark ? 'via-rose-500/30' : 'via-[#B5B0A5]/45'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon Circle */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center mb-3 sm:mb-4 shadow-sm shadow-rose-500/20 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <h3 className={`font-heading text-xs sm:text-base lg:text-lg font-bold mb-1.5 sm:mb-2.5 leading-snug ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}>
                  {item.title}
                </h3>

                <p className={`text-[11px] sm:text-xs md:text-sm leading-snug sm:leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                }`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
