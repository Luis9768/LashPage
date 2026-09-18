import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Menu, X, Calendar, Sparkles, Moon, Sun, MapPin, Eye, ChevronRight } from 'lucide-react';

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

export default function Navbar({ onNavigate }) {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    {
      title: "Agendar Horário Online",
      subtitle: "Escolha dia e técnica direto na agenda",
      href: siteConfig.bookingUrl,
      icon: Calendar,
      isExternal: true,
      highlight: true,
      iconBg: "bg-white/20 text-white",
    },
    {
      title: "Falar no WhatsApp",
      subtitle: "Dúvidas sobre técnicas e avaliações",
      href: siteConfig.whatsappUrl,
      icon: WhatsAppIcon,
      isExternal: true,
      highlight: false,
      iconBg: isDark
        ? "bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40"
        : "bg-[#EDF3EC] text-[#25D366] border border-[#25D366]/30",
    },
    {
      title: "Catálogo de Cílios & Técnicas",
      subtitle: "Volume Brasileiro, Fio a Fio, Russo...",
      view: "catalog",
      icon: Eye,
      isExternal: false,
      highlight: false,
      iconBg: isDark
        ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
        : "bg-[#FDEBEC] text-rose-600 border border-rose-200",
    },
    {
      title: "Localização do Studio",
      subtitle: "Rua General Glicério, 926 - Centro Santo André",
      view: "location",
      icon: MapPin,
      isExternal: false,
      highlight: false,
      iconBg: isDark
        ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
        : "bg-[#FBF3DB] text-amber-700 border border-amber-200",
    },
    {
      title: "Instagram @vittorias.studio",
      subtitle: "Acompanhe resultados diários e novidades",
      href: siteConfig.instagramUrl,
      icon: InstagramIcon,
      isExternal: true,
      highlight: false,
      iconBg: isDark
        ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
        : "bg-[#FDEBEC] text-pink-600 border border-pink-200",
    },
  ];

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Técnicas', href: '#tecnicas' },
    { name: 'Antes & Depois', href: '#antes-depois' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#000000]/95 backdrop-blur-xl border-b border-[#202028] shadow-lg shadow-black/80 py-2.5 sm:py-3'
            : 'bg-[#F6F4F0]/95 backdrop-blur-xl border-b border-[#E2DAD0] shadow-sm shadow-stone-900/5 py-2.5 sm:py-3'
          : isDark
            ? 'bg-[#000000]/80 backdrop-blur-md border-b border-white/5 py-3 sm:py-4 md:py-5'
            : 'bg-[#F6F4F0]/85 backdrop-blur-md border-b border-[#E2DAD0]/60 py-3 sm:py-4 md:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#inicio" className="group flex flex-col items-start text-left">
          <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300">
            <span className={isDark ? 'text-white' : 'text-neutral-900'}>Vittoria's</span>
            <span className="text-rose-500 font-serif italic text-lg sm:text-xl ml-1">Studio</span>
          </span>
          <span className={`text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-medium transition-colors ${
            isDark ? 'text-rose-300/70 group-hover:text-rose-300' : 'text-rose-900/70 group-hover:text-rose-900'
          }`}>
            Santo André • SP
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-rose-500 ${
                isDark ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar Tema"
            title={isDark ? "Mudar para Rosa & Branco" : "Mudar para Rosa & Preto"}
            className={`p-2 rounded-full border transition-all duration-200 ${
              isDark
                ? 'border-neutral-800 text-rose-300 hover:bg-neutral-800/80 hover:text-rose-400'
                : 'border-rose-200 text-rose-700 hover:bg-rose-50 hover:text-rose-800'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary CTA */}
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 shadow-md hover:shadow-rose-500/25 hover:shadow-lg transition-all duration-300 transform active:scale-95 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Horário</span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent"></span>
          </a>

          {/* Hamburger Menu & Quick Paths Toggle (Desktop) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir Menu de Atalhos"
            title="Atalhos & Menu"
            className={`p-2 rounded-xl border transition-colors ${
              isDark
                ? 'border-neutral-800 text-neutral-200 hover:bg-neutral-800'
                : 'border-[#E2DAD0] text-neutral-800 hover:bg-white'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Controls (Theme Toggle & 3 Bars Hamburger) */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Alternar Tema"
            className={`p-2 rounded-full border transition-all duration-200 ${
              isDark
                ? 'border-neutral-800 text-rose-300'
                : 'border-[#E2DAD0] text-rose-700 hover:bg-white'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir Menu de Atalhos"
            className={`p-2 rounded-xl border transition-colors ${
              isDark
                ? 'border-neutral-800 text-neutral-200 hover:bg-neutral-800'
                : 'border-[#E2DAD0] text-neutral-800 hover:bg-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer Menu / Dropdown com os 5 Caminhos e Navegação */}
      <div
        className={`absolute top-full right-0 left-0 lg:left-auto lg:right-6 lg:w-[420px] p-3 sm:p-4 z-50 transition-all duration-300 ease-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
      >
        <div
          className={`rounded-3xl p-5 sm:p-6 shadow-2xl border backdrop-blur-2xl flex flex-col max-h-[85vh] overflow-y-auto ${
            isDark
              ? 'bg-[#0d0d11]/98 border-[#22222a] shadow-black text-white'
              : 'bg-[#F6F4F0]/98 border-[#E2DAD0] shadow-2xl shadow-stone-900/15 text-neutral-900'
          }`}
        >
          {/* Header do Drawer */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200/70 dark:border-neutral-800/70">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-500">
                Atalhos & Caminhos
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Os 5 Caminhos Principais */}
          <div className="space-y-2.5 mb-5">
            {quickLinks.map((link, idx) => {
              const Icon = link.icon;
              const buttonClasses = `group w-full p-3 sm:p-3.5 rounded-2xl border transition-all duration-150 flex items-center justify-between text-left cursor-pointer active:scale-[0.98] select-none ${
                link.highlight
                  ? 'bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white border-rose-400 shadow-md shadow-rose-600/20 hover:brightness-105'
                  : isDark
                  ? 'bg-[#121216] border-[#22222b] hover:border-rose-500/50 hover:bg-[#18181f] text-white'
                  : 'bg-white border-[#E2DAD0] hover:border-rose-300 hover:bg-[#FAF8F5] text-neutral-800 shadow-sm'
              }`;

              const innerContent = (
                <>
                  <div className="flex items-center gap-3">
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
                  <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                    link.highlight ? 'text-white/80' : isDark ? 'text-neutral-500' : 'text-neutral-400'
                  }`} />
                </>
              );

              if (link.view) {
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      onNavigate && onNavigate(link.view);
                    }}
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
                  onClick={() => setIsOpen(false)}
                  className={buttonClasses}
                >
                  {innerContent}
                </a>
              );
            })}
          </div>

          {/* Navegação da Página */}
          <div className="pt-3 border-t border-neutral-200/70 dark:border-neutral-800/70">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-2 px-1">
              Navegação da Página
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                    isDark
                      ? 'text-neutral-300 hover:text-rose-400 hover:bg-neutral-800/50'
                      : 'text-neutral-700 hover:text-rose-600 hover:bg-rose-50/60'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
