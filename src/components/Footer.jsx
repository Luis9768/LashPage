import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { MessageCircle, MapPin, ArrowUp, Heart } from 'lucide-react';

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}


export default function Footer() {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`pt-16 pb-28 md:pb-16 border-t transition-colors duration-300 ${
      isDark
        ? 'bg-[#000000] border-[#1a1a22] text-neutral-400'
        : 'bg-[#faf4f5] border-rose-100 text-neutral-600'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-rose-500/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#inicio" className="group flex flex-col items-start mb-4">
              <span className="font-heading text-2xl font-bold tracking-tight">
                <span className={isDark ? 'text-white' : 'text-neutral-900'}>Vittoria's</span>
                <span className="text-rose-500 font-serif italic ml-1">Studio</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-rose-500">
                Santo André • SP
              </span>
            </a>


            <p className="text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Studio especializado em extensão de cílios, biossegurança e realce do olhar. Cuidado milimétrico e respeito à saúde dos seus fios naturais.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  isDark
                    ? 'border-neutral-800 text-rose-300 hover:bg-neutral-800 hover:text-white'
                    : 'border-rose-200 text-rose-600 hover:bg-rose-100'
                }`}
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  isDark
                    ? 'border-neutral-800 text-emerald-400 hover:bg-neutral-800 hover:text-white'
                    : 'border-rose-200 text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className={`text-xs font-bold tracking-wider uppercase mb-4 ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#inicio" className="hover:text-rose-500 transition-colors">Início</a></li>
              <li><a href="#tecnicas" className="hover:text-rose-500 transition-colors">Técnicas e Procedimentos</a></li>
              <li><a href="#manifesto" className="hover:text-rose-500 transition-colors">Manifesto</a></li>
              <li><a href="#antes-depois" className="hover:text-rose-500 transition-colors">Antes & Depois</a></li>
              <li><a href="#diferenciais" className="hover:text-rose-500 transition-colors">Diferenciais</a></li>
              <li><a href="#localizacao" className="hover:text-rose-500 transition-colors">Localização em Santo André</a></li>
              <li><a href="#faq" className="hover:text-rose-500 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Location & Booking */}
          <div className="md:col-span-4">
            <h4 className={`text-xs font-bold tracking-wider uppercase mb-4 ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Endereço
            </h4>
            <div className="space-y-2 text-xs sm:text-sm mb-6">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.location.address}, {siteConfig.location.neighborhood} - {siteConfig.location.city}</span>
              </p>
              <p className="text-xs opacity-75 pl-6">{siteConfig.location.hours}</p>
            </div>

            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-rose-500 to-pink-600 shadow-md hover:shadow-rose-500/25 transition-all"
            >
              <span>Agendar no Sistema</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-rose-500 transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
