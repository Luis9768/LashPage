import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function Faq() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            isDark
              ? 'bg-rose-950/60 text-rose-300 border border-rose-800/40'
              : 'bg-rose-100 text-rose-800 border border-rose-200'
          }`}>
            <HelpCircle className="w-3.5 h-3.5 text-rose-500" />
            <span>Tire Todas as Suas Dúvidas</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            Perguntas Frequentes
          </h2>

          <p className={`text-sm sm:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Tudo o que você precisa saber antes de fazer sua extensão de cílios com total segurança.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? isDark
                      ? 'bg-[#0e0e12] border-rose-500/40 shadow-lg shadow-black/50'
                      : 'bg-white border-rose-300 shadow-md'
                    : isDark
                    ? 'bg-[#0a0a0c] border-[#1e1e24] hover:border-[#2a2a35]'
                    : 'bg-white border-rose-100 hover:border-rose-200 shadow-sm'
                }`}

              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 select-none"
                >
                  <span className={`text-base sm:text-lg font-semibold ${
                    isOpen
                      ? 'text-rose-500'
                      : isDark
                      ? 'text-white'
                      : 'text-neutral-900'
                  }`}>
                    {item.question}
                  </span>
                  
                  <div className={`p-1.5 rounded-full transition-transform duration-300 flex-shrink-0 ${
                    isOpen
                      ? 'rotate-180 bg-rose-500/20 text-rose-500'
                      : isDark
                      ? 'bg-neutral-800 text-neutral-400'
                      : 'bg-rose-50 text-rose-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed animate-fadeIn">
                    <p className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
