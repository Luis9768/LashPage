import React, { useState, useRef, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/siteConfig';
import { Sparkles, MoveHorizontal, Star, Eye } from 'lucide-react';

export default function BeforeAfter() {
  const { isDark } = useTheme();
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const startDragging = () => {
    isDragging.current = true;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const galleryItems = [
    {
      title: "Volume Brasileiro Marcante",
      subtitle: "Fios tecnológicos em Y • Retenção de 25 dias",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fio a Fio Delicado",
      subtitle: "Efeito rímel super natural e leve",
      image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Volume Russo Glam",
      subtitle: "Densidade e olhar preenchido",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Lash Lifting & Tint",
      subtitle: "Curvatura natural sem extensão",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="antes-depois" className={`py-20 sm:py-28 relative transition-colors ${
      isDark ? 'bg-[#000000]' : 'bg-[#fdf9f9]'
    }`}>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            isDark
              ? 'bg-rose-950/60 text-rose-300 border border-rose-800/40'
              : 'bg-rose-100 text-rose-800 border border-rose-200'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Transformações Reais</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            O poder da transformação no seu olhar
          </h2>

          <p className={`text-sm sm:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Arraste o botão central para comparar o olhar natural com a extensão finalizada.
          </p>
        </div>

        {/* Interactive Before/After Slider */}
        <div className="max-w-3xl mx-auto mb-16">
          <div
            ref={containerRef}
            onMouseDown={startDragging}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[320px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-rose-500/20"
          >
            {/* After Image (Background) */}
            <img
              src="https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1200&q=80"
              alt="Depois: Extensão de Cílios com Volume"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
              Depois (Com Extensão)
            </div>

            {/* Before Image (Clipped Foreground) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80"
                alt="Antes: Olhar natural sem extensão"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                Antes (Sem Extensão)
              </div>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-rose-500 text-white shadow-xl flex items-center justify-center border-2 border-white ring-4 ring-rose-500/30">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4 text-xs font-medium text-rose-500">
            <MoveHorizontal className="w-4 h-4 animate-pulse" />
            <span>Deslize para a esquerda ou direita para comparar</span>
          </div>
        </div>

        {/* Gallery Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden border group transition-all duration-300 ${
                isDark
                  ? 'bg-neutral-900 border-neutral-800'
                  : 'bg-white border-rose-100 shadow-sm'
              }`}
            >
              <div className="h-60 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-xs text-rose-300">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
