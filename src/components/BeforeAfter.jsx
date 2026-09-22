import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { MoveHorizontal } from 'lucide-react';

export default function BeforeAfter() {
  const { isDark } = useTheme();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

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

  return (
    <section id="antes-depois" className={`py-20 sm:py-28 relative transition-colors ${
      isDark ? 'bg-[#000000]' : 'bg-[#B5B0A5]'
    }`}>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-8 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-2.5 tracking-tight text-white drop-shadow-sm">
            Antes e Depois das Nossas Clientes
          </h2>

          <p className={`text-sm sm:text-base ${isDark ? 'text-neutral-400' : 'text-white/95 font-medium drop-shadow-sm'}`}>
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
            className={`relative h-[320px] sm:h-[440px] rounded-3xl overflow-hidden select-none cursor-ew-resize ${
              isDark ? 'shadow-2xl border border-rose-500/20' : 'shadow-sm border border-black/[0.04]'
            }`}
          >
            {/* After Image (Background) */}
            <img
              src="/after-lash-comparison.jpg"
              alt="Depois: Extensão de Cílios com Volume"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20 whitespace-nowrap min-w-max transition-opacity duration-200 ${
              sliderPosition > 80 ? 'opacity-0' : 'opacity-100'
            }`}>
              Depois (Com Extensão)
            </div>

            {/* Before Image (Clipped Foreground) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/before-lash-comparison.jpg"
                alt="Antes: Olhar natural sem extensão"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
              />
              <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20 whitespace-nowrap min-w-max transition-opacity duration-200 ${
                sliderPosition < 20 ? 'opacity-0' : 'opacity-100'
              }`}>
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

          <div className={`flex items-center justify-center gap-2 mt-4 text-xs font-medium ${
            isDark ? 'text-rose-500' : 'text-white drop-shadow-sm'
          }`}>
            <MoveHorizontal className="w-4 h-4 animate-pulse" />
            <span>Deslize para a esquerda ou direita para comparar</span>
          </div>
        </div>

      </div>
    </section>
  );
}
