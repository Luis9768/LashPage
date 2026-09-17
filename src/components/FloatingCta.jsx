import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Calendar, MessageCircle, Sparkles } from 'lucide-react';

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
          <MessageCircle className="w-5 h-5 fill-white" />
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
          {/* WhatsApp Direct Icon Button */}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-md active:scale-90 transition-transform"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
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
