import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Calendar } from 'lucide-react';

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.4C4.55 15.16 4.14 13.56 4.14 11.92C4.14 7.38 7.84 3.67 12.04 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.24C8.15 12.4 9.74 14.86 12.18 15.91C12.76 16.16 13.21 16.31 13.57 16.43C14.16 16.61 14.7 16.59 15.12 16.52C15.6 16.45 16.59 15.92 16.8 15.34C17.01 14.76 17.01 14.26 16.95 14.15C16.89 14.05 16.73 13.99 16.49 13.87C16.24 13.75 15.03 13.15 14.81 13.07C14.58 12.99 14.42 12.95 14.25 13.2C14.09 13.45 13.62 14.01 13.48 14.17C13.34 14.33 13.2 14.35 12.96 14.23C12.71 14.11 11.92 13.85 10.98 13.01C10.25 12.36 9.75 11.55 9.61 11.31C9.47 11.06 9.6 10.93 9.72 10.81C9.83 10.7 9.97 10.52 10.1 10.37C10.22 10.22 10.26 10.12 10.34 9.95C10.42 9.79 10.38 9.64 10.32 9.52C10.26 9.4 9.78 8.23 9.58 7.74C9.39 7.27 9.19 7.33 9.04 7.33C8.89 7.33 8.71 7.33 8.53 7.33Z" />
    </svg>
  );
}

export default function FloatingCta() {
  const { isDark } = useTheme();

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <aside aria-label="Atendimento rápido" className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2">
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366] text-white font-bold shadow-xl shadow-emerald-950/30 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <WhatsAppIcon className="w-5 h-5 text-white" />
          <span className="text-xs font-semibold">Tirar Dúvidas</span>
        </a>

        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar Horário"
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold shadow-xl shadow-rose-950/40 hover:shadow-rose-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-xs font-semibold">Agendar Agora</span>
        </a>
      </aside>

      {/* Mobile Fixed Bottom Bar (Sticky Bar for Mobile Phones) */}
      <aside aria-label="Barra de agendamento mobile" className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 backdrop-blur-xl border-t transition-colors shadow-2xl safe-area-bottom">
        <div
          className={`flex items-center gap-2.5 p-1 rounded-2xl ${
            isDark ? 'bg-black/80 border border-rose-950/60' : 'bg-white/90 border border-rose-200'
          }`}
        >
          {/* WhatsApp Official Logo Button */}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="w-12 h-12 rounded-xl bg-[#25D366] hover:bg-[#22bf5b] text-white flex items-center justify-center flex-shrink-0 shadow-md active:scale-90 transition-transform"
          >
            <WhatsAppIcon className="w-6 h-6 text-white" />
          </a>

          {/* Main Booking Button */}
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-12 rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-500/30 active:scale-95 transition-all uppercase tracking-wide"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Meu Horário</span>
          </a>
        </div>
      </aside>
    </>
  );
}
