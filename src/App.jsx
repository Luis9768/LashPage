import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Differentials from './components/Differentials';
import About from './components/About';
import Testimonials from './components/Testimonials';
import LocationSection from './components/LocationSection';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta';
import IntroStream from './components/IntroStream';
import CatalogView from './components/views/CatalogView';
import LocationView from './components/views/LocationView';

function MainContent() {
  const { isDark } = useTheme();
  const [showIntro, setShowIntro] = useState(true);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'catalog' | 'location'

  // Suporte a histórico do navegador (botão voltar do celular)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'catalogo') setCurrentView('catalog');
      else if (hash === 'localizacao-completa') setCurrentView('location');
      else setCurrentView('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view) => {
    // Micro-delay de 100ms para permitir o feedback visual/tátil do clique antes de trocar a tela
    setTimeout(() => {
      if (view === 'catalog') {
        window.location.hash = 'catalogo';
      } else if (view === 'location') {
        window.location.hash = 'localizacao-completa';
      } else {
        window.history.pushState(null, '', window.location.pathname);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setCurrentView(view);
    }, 100);
  };

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-500 selection:bg-rose-500 selection:text-white ${
        isDark ? 'bg-[#000000] text-neutral-100' : 'bg-[#fffafb] text-neutral-900'
      }`}
    >
      {/* Intro Typewriter Stream (Vercel Style) */}
      {showIntro && (
        <IntroStream onComplete={() => setShowIntro(false)} />
      )}

      {/* Sub-tela: Catálogo de Procedimentos Completo */}
      {currentView === 'catalog' && (
        <div key="catalog" className="view-enter">
          <CatalogView onBack={() => navigateTo('home')} />
        </div>
      )}

      {/* Sub-tela: Localização e Rotas Dedicada */}
      {currentView === 'location' && (
        <div key="location" className="view-enter">
          <LocationView onBack={() => navigateTo('home')} />
        </div>
      )}

      {/* Tela Principal (Landing Page) */}
      {currentView === 'home' && (
        <React.Fragment key="home">
          {/* Fixed Navigation Bar */}
          <Navbar onNavigate={navigateTo} />

          <div className="view-enter">
            <main>
              {/* Hero Section com botões de navegação para as sub-telas */}
              <Hero onNavigate={navigateTo} />

              {/* Services & Techniques */}
              <Services onOpenCatalog={() => navigateTo('catalog')} />

              {/* Before & After Interactive Slider & Portfolio */}
              <BeforeAfter />

              {/* Differentials & Safety */}
              <Differentials />

              {/* About the Artist */}
              <About />

              {/* Testimonials */}
              <Testimonials />

              {/* Location in Santo André & Route Maps */}
              <LocationSection onOpenLocationView={() => navigateTo('location')} />

              {/* FAQ */}
              <Faq />
            </main>

            {/* Footer */}
            <Footer onNavigate={navigateTo} />
          </div>
        </React.Fragment>
      )}

      {/* Mobile Fixed Booking Bar & Floating WhatsApp */}
      <FloatingCta />
    </div>
  );
}


export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
