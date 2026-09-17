import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Star, Sparkles, Quote } from 'lucide-react';

export default function Testimonials() {
  const { isDark } = useTheme();

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            isDark
              ? 'bg-rose-950/60 text-rose-300 border border-rose-800/40'
              : 'bg-rose-100 text-rose-800 border border-rose-200'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Experiência das Nossas Clientes</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            Quem faz uma vez, não vive mais sem
          </h2>

          <p className={`text-sm sm:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Veja a opinião de quem confiou e transformou o olhar em nosso estúdio.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.testimonials.map((item, index) => (
            <div
              key={index}
              className={`p-7 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 ${
                isDark
                  ? 'bg-[#0d0d11] border-[#22222a] hover:border-rose-500/50'
                  : 'bg-white border-rose-100 hover:border-rose-200 shadow-sm hover:shadow-md'
              }`}

            >
              <Quote className="w-8 h-8 text-rose-500/30 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4 text-rose-500">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-rose-500" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className={`text-sm sm:text-base italic leading-relaxed mb-6 flex-1 ${
                isDark ? 'text-neutral-200' : 'text-neutral-700'
              }`}>
                "{item.text}"
              </p>

              {/* Author & Technique */}
              <div className="pt-4 border-t border-dashed border-rose-500/20 flex items-center justify-between">
                <div>
                  <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {item.name}
                  </h4>
                  <p className="text-xs text-rose-500 font-medium">{item.tag}</p>
                </div>
                <span className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${
                  isDark ? 'bg-neutral-800 text-neutral-300' : 'bg-rose-50 text-rose-800'
                }`}>
                  {item.technique}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
