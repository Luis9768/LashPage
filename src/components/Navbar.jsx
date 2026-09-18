import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Menu, X, Calendar, Sparkles, Moon, Sun } from 'lucide-react';

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
            : 'bg-white/95 backdrop-blur-xl border-b border-rose-100 shadow-md shadow-rose-950/5 py-2.5 sm:py-3'
          : isDark
            ? 'bg-[#000000]/80 backdrop-blur-md border-b border-white/5 py-3 sm:py-4 md:py-5'
            : 'bg-[#fffafb]/80 backdrop-blur-md border-b border-rose-100/50 py-3 sm:py-4 md:py-5'
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
        </div>

        {/* Mobile Hamburger & Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Alternar Tema"
            className={`p-2 rounded-full border transition-all duration-200 ${
              isDark
                ? 'border-neutral-800 text-rose-300'
                : 'border-rose-200 text-rose-700'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir Menu"
            className={`p-2 rounded-xl border transition-colors ${
              isDark
                ? 'border-neutral-800 text-neutral-200 hover:bg-neutral-800'
                : 'border-rose-200 text-neutral-800 hover:bg-rose-50'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`absolute inset-x-0 top-full p-4 transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
      >
        <div
          className={`rounded-2xl p-6 shadow-2xl border backdrop-blur-xl flex flex-col gap-4 ${
            isDark
              ? 'bg-[#0d0d11]/98 border-[#22222a] shadow-black'
              : 'bg-white/95 border-rose-200 shadow-rose-950/10'
          }`}

        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`py-2 text-base font-medium transition-colors border-b last:border-b-0 ${
                  isDark
                    ? 'text-neutral-200 border-neutral-800/80 hover:text-rose-400'
                    : 'text-neutral-700 border-rose-100 hover:text-rose-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="w-full mt-2 py-3.5 rounded-xl text-center text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-rose-500 to-pink-600 shadow-md flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Meu Horário</span>
          </a>
        </div>
      </div>
    </header>
  );
}
