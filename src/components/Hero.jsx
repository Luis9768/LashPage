import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Calendar, MessageCircle, MapPin, Sparkles, ChevronDown, CheckCircle2, Star, Eye } from 'lucide-react';

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

  const quickLinks = [
    {
      title: "Agendar Horário Online",
      subtitle: "Escolha dia e técnica direto na agenda",
      href: siteConfig.bookingUrl,
      icon: Calendar,
      isExternal: true,
      highlight: true,
      iconBg: "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md",
    },
    {
      title: "Falar no WhatsApp",
      subtitle: "Dúvidas sobre técnicas e avaliações",
      href: siteConfig.whatsappUrl,
      icon: WhatsAppIcon,
      isExternal: true,
      highlight: false,
      iconBg: "bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40",
    },
    {
      title: "Catálogo de Cílios & Técnicas",
      subtitle: "Volume Brasileiro, Fio a Fio, Russo...",
      view: "catalog",
      icon: Eye,
      isExternal: false,
      highlight: false,
      iconBg: "bg-rose-500/20 text-rose-400 border border-rose-500/30",
    },
    {
      title: "Localização do Studio",
      subtitle: "Rua General Glicério, 926 - Centro Santo André",
      view: "location",
      icon: MapPin,
      isExternal: false,
      highlight: false,
      iconBg: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    },
    {
      title: "Instagram @vittorias.studio",
      subtitle: "Acompanhe resultados diários e novidades",
      href: siteConfig.instagramUrl,
      icon: InstagramIcon,
      isExternal: true,
      highlight: false,
      iconBg: "bg-pink-500/20 text-pink-400 border border-pink-500/30",
    },
  ];



  return (
    <section id="inicio" className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        
        {/* Main Bio Container (Inspirado no design de perfil de alta conversão) */}
        <div
          className={`rounded-3xl overflow-hidden border shadow-2xl transition-all duration-300 ${
            isDark
              ? 'bg-[#0a0a0c] border-[#1e1e24] shadow-black'
              : 'bg-white border-rose-100 shadow-xl shadow-rose-950/10'
          }`}
        >
          {/* Top Studio Banner */}
          <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-950">
            {/* Studio Interior with Chandeliers & Golden Ambient Light */}
            <img
              src="/studio-banner.jpg"
              alt="Vittoria's Studio"
              className="w-full h-full object-cover object-center opacity-85"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/50"></div>
            
            {/* Banner Text - MOVED UP AS REQUESTED (Plenty of clearance above avatar) */}
            <div className="absolute top-4 sm:top-5 inset-x-0 flex flex-col items-center justify-start text-center px-4 z-10 pointer-events-none">
              <span className="px-3.5 py-1 rounded-full text-[10px] tracking-[0.25em] uppercase font-bold text-rose-300 bg-black/70 backdrop-blur-md border border-rose-500/30 mb-1.5 shadow-md">
                STUDIO DE BELEZA & CÍLIOS
              </span>
              <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
                Vittoria's Studio
              </h1>
              <p className="text-[11px] sm:text-xs text-neutral-300 tracking-wider font-light mt-0.5">
                Santo André • SP
              </p>
            </div>
          </div>

          {/* Profile Avatar & Info Card */}
          <div className="relative px-5 sm:px-8 pb-8 pt-0">
            
            {/* Circular Profile Avatar - NO ONLINE BADGE */}
            <div className="flex justify-center -mt-14 sm:-mt-16 mb-4 relative z-20">
              <div className="relative group">
                {/* Glowing border ring */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-rose-500 via-pink-400 to-rose-600 rounded-full blur-sm opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Avatar Image */}
                <div className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 shadow-2xl ${
                  isDark ? 'border-[#0a0a0c] bg-neutral-900' : 'border-white bg-rose-50'
                }`}>
                  <img
                    src={siteConfig.avatarImage}
                    alt={siteConfig.artistName}
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

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



            {/* Action Buttons List (Estilo Linktree Elegante / Bio) */}
            <div className="space-y-3">
              {quickLinks.map((link, idx) => {
                const Icon = link.icon;
                const buttonClasses = `group w-full p-3.5 sm:p-4 rounded-2xl border transition-all duration-150 flex items-center justify-between text-left cursor-pointer active:scale-[0.97] active:ring-2 active:ring-rose-500/40 select-none ${
                  link.highlight
                    ? 'bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white border-rose-400 shadow-lg shadow-rose-600/25 hover:scale-[1.01] active:brightness-90'
                    : isDark
                    ? 'bg-[#121216] border-[#22222b] hover:border-rose-500/50 hover:bg-[#18181f] text-white shadow-sm active:bg-[#1f1f2a] active:border-rose-500'
                    : 'bg-[#faf7f7] border-rose-100 hover:border-rose-300 hover:bg-white text-neutral-800 shadow-sm active:bg-rose-50 active:border-rose-400'
                }`;

                const innerContent = (
                  <>
                    <div className="flex items-center gap-3.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        link.highlight ? 'bg-white/20 text-white' : link.iconBg
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className={`text-xs sm:text-sm font-bold ${
                          link.highlight ? 'text-white' : isDark ? 'text-white' : 'text-neutral-900'
                        }`}>
                          {link.title}
                        </p>
                        <p className={`text-[11px] ${
                          link.highlight ? 'text-rose-100' : isDark ? 'text-neutral-400' : 'text-neutral-500'
                        }`}>
                          {link.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className={`p-1 rounded-full transition-transform group-hover:translate-x-0.5 ${
                      link.highlight ? 'text-white/80' : isDark ? 'text-neutral-500' : 'text-neutral-400'
                    }`}>
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </div>
                  </>
                );

                if (link.view) {
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => onNavigate && onNavigate(link.view)}
                      className={buttonClasses}
                    >
                      {innerContent}
                    </button>
                  );
                }

                return (
                  <a
                    key={idx}
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className={buttonClasses}
                  >
                    {innerContent}
                  </a>
                );
              })}
            </div>


          </div>
        </div>


      </div>
    </section>
  );
}
