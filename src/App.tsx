import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { AreasOfPractice } from './components/AreasOfPractice';
import { Testimonials } from './components/Testimonials';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PracticeAreaPage } from './components/PracticeAreaPage';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export type AppPage = 'home' | 'sobre' | 'contato' | 'familia' | 'sucessoes' | 'imobiliario' | 'regularizacao';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');

  useEffect(() => {
    const handleRouteChange = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      // Practice Areas Routes
      if (
        hash === '#familia' ||
        hash === '#area-familia' ||
        path.includes('/familia') ||
        path.includes('/direito-de-familia')
      ) {
        setCurrentPage('familia');
      } else if (
        hash === '#sucessoes' ||
        hash === '#area-sucessoes' ||
        path.includes('/sucessoes') ||
        path.includes('/inventario')
      ) {
        setCurrentPage('sucessoes');
      } else if (
        hash === '#imobiliario' ||
        hash === '#area-imobiliario' ||
        path.includes('/imobiliario') ||
        path.includes('/direito-imobiliario')
      ) {
        setCurrentPage('imobiliario');
      } else if (
        hash === '#regularizacao' ||
        hash === '#area-regularizacao' ||
        path.includes('/regularizacao') ||
        path.includes('/regularizacao-de-imoveis')
      ) {
        setCurrentPage('regularizacao');
      } else if (hash === '#sobre' || path.endsWith('/sobre') || path.endsWith('/sobre/')) {
        setCurrentPage('sobre');
      } else if (hash === '#contato' || path.endsWith('/contato') || path.endsWith('/contato/')) {
        setCurrentPage('contato');
      } else if (hash === '#areas' || hash === '#avaliacoes') {
        setCurrentPage('home');
        setTimeout(() => {
          const targetId = hash.replace('#', '');
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (hash === '#home' || hash === '' || hash === '#' || path.endsWith('/') || path.endsWith('/index.html')) {
        setCurrentPage('home');
      }
    };

    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleNavigate = (page: string, anchor?: string) => {
    const validAreaPages: AppPage[] = ['familia', 'sucessoes', 'imobiliario', 'regularizacao'];

    if (validAreaPages.includes(page as AppPage)) {
      setCurrentPage(page as AppPage);
      window.history.pushState(null, '', `#${page}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'sobre') {
      setCurrentPage('sobre');
      window.history.pushState(null, '', '#sobre');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'contato') {
      setCurrentPage('contato');
      window.history.pushState(null, '', '#contato');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      if (anchor) {
        window.history.pushState(null, '', `#${anchor}`);
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.history.pushState(null, '', '#');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const isPracticeAreaPage = ['familia', 'sucessoes', 'imobiliario', 'regularizacao'].includes(currentPage);

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#211C19] selection:bg-[#B88E5E] selection:text-white flex flex-col">
      {/* Navigation Header */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero onNavigate={handleNavigate} />

            {/* 4 Pillars / Highlights Bar */}
            <ValueProposition />

            {/* Areas of Practice Summary Cards with Links to Full Pages */}
            <AreasOfPractice onNavigate={handleNavigate} />

            {/* Verified Reviews / Testimonials */}
            <Testimonials />
          </>
        )}

        {currentPage === 'sobre' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contato' && (
          <ContactPage onNavigate={handleNavigate} />
        )}

        {isPracticeAreaPage && (
          <PracticeAreaPage slug={currentPage} onNavigate={handleNavigate} />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Direct WhatsApp Action Button */}
      <WhatsAppFloating />
    </div>
  );
}
