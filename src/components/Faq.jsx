import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { ChevronDown } from 'lucide-react';

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
          {/* Editorial Luxury Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-6 sm:w-8 h-[2px] rounded-full bg-gradient-to-r from-rose-500 to-pink-500 shadow-[0_0_8px_rgba(244,63,94,0.4)] flex-shrink-0" />
            <span className={`text-sm sm:text-base font-bold tracking-[0.22em] uppercase ${
              isDark ? 'text-rose-400' : 'text-rose-600'
            }`}>
              Tire Todas as Suas Dúvidas
            </span>
            <span className="w-6 sm:w-8 h-[2px] rounded-full bg-gradient-to-l from-rose-500 to-pink-500 shadow-[0_0_8px_rgba(244,63,94,0.4)] flex-shrink-0" />
          </div>

          <h2 className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight ${
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
                      : 'bg-[#FAF8F5] border-[#A98D51]/50 shadow-md shadow-[#A98D51]/10'
                    : isDark
                    ? 'bg-[#0a0a0c] border-[#1e1e24] hover:border-[#2a2a35]'
                    : 'bg-[#FAF8F5] border-[#A98D51]/25 hover:border-[#A98D51]/50 shadow-sm'
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
