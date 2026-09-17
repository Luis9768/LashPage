import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, Moon, Sun } from 'lucide-react';

export default function ThemeSwitcher({ variant = 'floating' }) {
  const { theme, toggleTheme, isDark } = useTheme();

  if (variant === 'inline') {
    return (
      <button
        onClick={toggleTheme}
        aria-label="Alternar paleta de cores"
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          isDark
            ? 'bg-rose-950/60 text-rose-300 border border-rose-800/60 hover:bg-rose-900/60'
            : 'bg-rose-100/80 text-rose-900 border border-rose-200 hover:bg-rose-200/80'
        }`}
      >
        {isDark ? (
          <>
            <Moon className="w-3.5 h-3.5 text-rose-400" />
            <span>Rosa & Preto</span>
          </>
        ) : (
          <>
            <Sun className="w-3.5 h-3.5 text-rose-500" />
            <span>Rosa & Branco</span>
          </>
        )}
      </button>
    );
  }

  // Floating tester widget: fixed at bottom left so it doesn't collide with WhatsApp
  return (
    <div className="fixed bottom-20 left-4 z-40 md:bottom-6 md:left-6">
      <div className={`p-1.5 rounded-full shadow-2xl backdrop-blur-md border transition-all duration-300 flex items-center gap-1.5 ${
        isDark 
          ? 'bg-neutral-900/90 border-rose-500/30 text-rose-200 shadow-rose-950/50' 
          : 'bg-white/95 border-rose-200 text-neutral-800 shadow-rose-200/60'
      }`}>
        <button
          onClick={() => toggleTheme()}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
            isDark
              ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-sm'
              : 'hover:bg-rose-50 text-neutral-600'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-neutral-950 border border-rose-300"></span>
          <span>Rosa & Preto</span>
        </button>

        <button
          onClick={() => toggleTheme()}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
            !isDark
              ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-sm'
              : 'hover:bg-neutral-800 text-neutral-400'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-white border border-rose-300"></span>
          <span>Rosa & Branco</span>
        </button>
      </div>
    </div>
  );
}
