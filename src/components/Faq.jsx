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
        <div className="text-left max-w-2xl mb-8 sm:mb-12">
          <h2 className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-2.5 tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            Dúvidas Frequentes
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
                      : 'bg-white border-rose-300 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.18),0_4px_10px_-2px_rgba(0,0,0,0.08)]'
                    : isDark
                    ? 'bg-[#0a0a0c] border-[#1e1e24] hover:border-[#2a2a35]'
                    : 'bg-white border-neutral-200/90 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.10),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:border-neutral-300 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.16)]'
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
                      : 'bg-neutral-100 text-neutral-600'
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
