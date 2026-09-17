import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { MessageCircle, MapPin, ArrowUp, Heart } from 'lucide-react';

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
                <WhatsAppIcon className="w-5 h-5" />
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
