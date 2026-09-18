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
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            isDark
              ? 'bg-rose-950/60 text-rose-300 border border-rose-800/40'
              : 'bg-rose-100 text-rose-800 border border-rose-200'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Por que escolher nosso atendimento</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            Cuidado milimétrico em cada detalhe
          </h2>

          <p className={`text-sm sm:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Mais do que colocar cílios: uma experiência focada na saúde dos seus olhos, conforto supremo e durabilidade real.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.differentials.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className={`p-7 rounded-3xl border transition-all duration-300 relative group ${
                  isDark
                    ? 'bg-[#0d0d11] border-[#22222a] hover:border-rose-500/50 hover:bg-[#131318]'
                    : 'bg-white border-[#E2DAD0] hover:border-rose-300 shadow-sm hover:shadow-md'
                }`}

              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center mb-5 shadow-md shadow-rose-500/20 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className={`font-heading text-xl font-bold mb-2.5 ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}>
                  {item.title}
                </h3>

                <p className={`text-sm leading-relaxed ${
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
