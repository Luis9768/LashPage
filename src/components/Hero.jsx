import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Calendar, MapPin, Sparkles, CheckCircle2, Star, Eye } from 'lucide-react';

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.4C4.55 15.16 4.14 13.56 4.14 11.92C4.14 7.38 7.84 3.67 12.04 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.24C8.15 12.4 9.74 14.86 12.18 15.91C12.76 16.16 13.21 16.31 13.57 16.43C14.16 16.61 14.7 16.59 15.12 16.52C15.6 16.45 16.59 15.92 16.8 15.34C17.01 14.76 17.01 14.26 16.95 14.15C16.89 14.05 16.73 13.99 16.49 13.87C16.24 13.75 15.03 13.15 14.81 13.07C14.58 12.99 14.42 12.95 14.25 13.2C14.09 13.45 13.62 14.01 13.48 14.17C13.34 14.33 13.2 14.35 12.96 14.23C12.71 14.11 11.92 13.85 10.98 13.01C10.25 12.36 9.75 11.55 9.61 11.31C9.47 11.06 9.6 10.93 9.72 10.81C9.83 10.7 9.97 10.52 10.1 10.37C10.22 10.22 10.26 10.12 10.34 9.95C10.42 9.79 10.38 9.64 10.32 9.52C10.26 9.4 9.78 8.23 9.58 7.74C9.39 7.27 9.19 7.33 9.04 7.33C8.89 7.33 8.71 7.33 8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Hero({ onNavigate }) {
  const { isDark } = useTheme();

  const quickActions = [
    {
      title: "Agendar Horário Online",
      shortLabel: "Agendar",
      href: siteConfig.bookingUrl,
      icon: Calendar,
      isExternal: true,
      highlight: true,
      iconColor: "text-white",
    },
    {
      title: "Falar no WhatsApp",
      shortLabel: "WhatsApp",
      href: siteConfig.whatsappUrl,
      icon: WhatsAppIcon,
      isExternal: true,
      highlight: false,
      iconColor: "text-[#25D366]",
    },
    {
      title: "Catálogo de Cílios & Técnicas",
      shortLabel: "Catálogo",
      view: "catalog",
      icon: Eye,
      isExternal: false,
      highlight: false,
      iconColor: "text-rose-500",
    },
    {
      title: "Localização do Studio",
      shortLabel: "Local",
      view: "location",
      icon: MapPin,
      isExternal: false,
      highlight: false,
      iconColor: "text-amber-500",
    },
    {
      title: "Instagram @vittorias.studio",
      shortLabel: "Instagram",
      href: siteConfig.instagramUrl,
      icon: InstagramIcon,
      isExternal: true,
      highlight: false,
      iconColor: "text-pink-500",
    },
  ];



  return (
    <section id="inicio" className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        
        {/* Main Bio Container (Editorial Minimalist Profile) */}
        <div
          className={`rounded-3xl overflow-hidden transition-all duration-300 ${
            isDark
              ? 'bg-[#0a0a0c] border border-[#1e1e24] shadow-black/60 shadow-2xl'
              : 'bg-white border border-neutral-200/90 shadow-[0_14px_36px_-6px_rgba(0,0,0,0.20),0_4px_14px_-2px_rgba(0,0,0,0.10)]'
          }`}
        >
          {/* Top Client Photo Banner (Editorial Minimalist Frame - 100% natural, sem neblina ou degradê forçado) */}
          <div className="p-3 sm:p-4 pb-0">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-950 border border-black/[0.04] dark:border-white/[0.06]">
              <img
                src={siteConfig.heroImage || "/vittoria-hero.jpg"}
                alt={siteConfig.artistName}
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
          </div>

          {/* Profile Info Card */}
          <div className="relative px-5 sm:px-8 pb-8 pt-6">

            {/* Title & Bio - Restored exact preferred format */}
            <div className="text-center mb-6">
              <h2 className={`font-heading text-2xl sm:text-3xl font-bold tracking-tight mb-1.5 ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}>
                Vittoria Amorim • Lash Designer
              </h2>
              
              <p className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest mb-3">
                LASH DESIGNER & ESPECIALISTA EM REALCE DO OLHAR
              </p>

              <p className={`text-xs sm:text-sm leading-relaxed max-w-md mx-auto ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                Cílios e sobrancelhas saudáveis, duradouros e feitos sob medida.
              </p>

              {/* Badges row */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium border flex items-center gap-1 ${
                  isDark
                    ? 'bg-neutral-900/80 border-neutral-800 text-neutral-300'
                    : 'bg-rose-50 border-rose-200 text-neutral-700'
                }`}>
                  <Star className="w-3 h-3 text-rose-500 fill-rose-500" />
                  +1.200 Atendimentos
                </span>

                <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium border flex items-center gap-1 ${
                  isDark
                    ? 'bg-neutral-900/80 border-neutral-800 text-neutral-300'
                    : 'bg-rose-50 border-rose-200 text-neutral-700'
                }`}>
                  <CheckCircle2 className="w-3 h-3 text-rose-500" />
                  Fios 100% Saudáveis
                </span>

                <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium border flex items-center gap-1 ${
                  isDark
                    ? 'bg-neutral-900/80 border-neutral-800 text-neutral-300'
                    : 'bg-rose-50 border-rose-200 text-neutral-700'
                }`}>
                  <Sparkles className="w-3 h-3 text-rose-500" />
                  Alta Durabilidade
                </span>
              </div>
            </div>



            {/* Ícones de Ações Rápidas Alinhados Horizontalmente (Abaixo de Alta Durabilidade) */}
            <div className="pt-5 mt-5 border-t border-neutral-200/70 dark:border-neutral-800/70">
              <div className="flex items-center justify-between sm:justify-center sm:gap-6 px-1 sm:px-2">
                {quickActions.map((action, idx) => {
                  const Icon = action.icon;
                  const buttonContent = (
                    <div className="group flex flex-col items-center gap-1.5 cursor-pointer select-none">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border transition-all duration-200 active:scale-90 shadow-sm ${
                          action.highlight
                            ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white border-rose-400 hover:brightness-105 hover:shadow-md hover:shadow-rose-500/20'
                            : isDark
                            ? 'bg-[#121216] border-[#22222b] text-neutral-200 hover:border-rose-500/50 hover:bg-[#181820] hover:text-white'
                            : 'bg-neutral-50/80 border-neutral-200/80 text-neutral-700 shadow-sm hover:border-rose-300 hover:bg-white hover:text-rose-600 hover:shadow-md'
                        }`}
                        title={action.title}
                      >
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:scale-110 ${action.iconColor || ''}`} />
                      </div>
                      <span
                        className={`text-[10px] sm:text-[11px] font-medium tracking-tight transition-colors text-center ${
                          action.highlight
                            ? 'text-rose-500 font-semibold'
                            : isDark
                            ? 'text-neutral-400 group-hover:text-neutral-200'
                            : 'text-neutral-600 group-hover:text-neutral-900'
                        }`}
                      >
                        {action.shortLabel}
                      </span>
                    </div>
                  );

                  if (action.view) {
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => onNavigate && onNavigate(action.view)}
                        aria-label={action.title}
                        className="focus:outline-none"
                      >
                        {buttonContent}
                      </button>
                    );
                  }

                  return (
                    <a
                      key={idx}
                      href={action.href}
                      target={action.isExternal ? "_blank" : undefined}
                      rel={action.isExternal ? "noopener noreferrer" : undefined}
                      aria-label={action.title}
                      className="focus:outline-none"
                    >
                      {buttonContent}
                    </a>
                  );
                })}
              </div>
            </div>


          </div>
        </div>


      </div>
    </section>
  );
}
