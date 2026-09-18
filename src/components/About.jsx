import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Sparkles, Award, Heart, CheckCircle2, Calendar } from 'lucide-react';

export default function About() {
  const { isDark } = useTheme();

  return (
    <section id="sobre" className={`py-20 sm:py-28 relative transition-colors border-y ${
      isDark ? 'bg-[#08080c] border-[#1c1c24]' : 'bg-[#FAF8F5] border-[#E2DAD0]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 bg-gradient-to-tr from-rose-500 to-pink-600 rounded-3xl opacity-30 blur-lg"></div>
              
              <div className={`relative rounded-3xl overflow-hidden border shadow-2xl ${
                isDark ? 'bg-[#0d0d11] border-[#22222a]' : 'bg-white border-[#E2DAD0]'
              }`}>

                <img
                  src="/vittoria-profile.jpg"
                  alt="Vittoria Amorim - Lash Designer Especialista"
                  className="w-full h-[450px] object-cover object-top"
                />
                
                {/* Professional Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl backdrop-blur-md bg-black/75 border border-white/10 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-rose-400" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-rose-300">
                      Certificação Profissional
                    </span>
                  </div>
                  <p className="text-sm font-bold">Vittoria Amorim • Lash Artist</p>
                  <p className="text-xs text-neutral-300">Especialista em Volume Fox Eyes & Visagismo</p>
                </div>

              </div>
            </div>
          </div>

          {/* Bio & Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
              isDark
                ? 'bg-rose-950/60 text-rose-300 border border-rose-800/40'
                : 'bg-rose-100 text-rose-800 border border-rose-200'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>Conheça a Profissional</span>
            </div>

            <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Dedicação, técnica refinada e amor por valorizar você
            </h2>

            <div className={`space-y-4 text-sm sm:text-base leading-relaxed mb-8 ${
              isDark ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              <p>
                Olá! Meu compromisso é entregar não apenas um procedimento estético, mas uma transformação que eleve sua autoestima e torne a sua rotina muito mais prática e leve.
              </p>
              <p>
                Trabalho com constante aperfeiçoamento em técnicas internacionais de acoplagem, química dos adesivos e visagismo ocular. Cada cliente recebe um atendimento único, respeitando o formato dos olhos e principalmente a integridade física dos fios naturais.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              {[
                "Atendimento pontual e individualizado",
                "Espaço aconchegante e higienizado",
                "Fios levíssimos e confortáveis",
                "Avaliação e mapping sem custo extra"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-rose-500 to-pink-600 shadow-md shadow-rose-500/20 hover:shadow-rose-500/35 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar com a Vittoria</span>
            </a>


          </div>

        </div>
      </div>
    </section>
  );
}
