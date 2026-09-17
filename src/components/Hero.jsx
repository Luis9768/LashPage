import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Calendar, MessageCircle, MapPin, Sparkles, ChevronDown, CheckCircle2, Star, Eye } from 'lucide-react';

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
      icon: MessageCircle,
      isExternal: true,
      highlight: false,
      iconBg: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
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
                const buttonClasses = `group w-full p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between text-left cursor-pointer ${
                  link.highlight
                    ? 'bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white border-rose-400 shadow-lg shadow-rose-600/25 hover:scale-[1.01] active:scale-98'
                    : isDark
                    ? 'bg-[#121216] border-[#22222b] hover:border-rose-500/50 hover:bg-[#18181f] text-white shadow-sm'
                    : 'bg-[#faf7f7] border-rose-100 hover:border-rose-300 hover:bg-white text-neutral-800 shadow-sm'
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
