import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { AreasOfPractice } from './components/AreasOfPractice';
import { Testimonials } from './components/Testimonials';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'sobre' | 'contato'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#sobre') {
        setCurrentPage('sobre');
      } else if (hash === '#contato') {
        setCurrentPage('contato');
      } else if (hash.startsWith('#area-') || hash === '#areas' || hash === '#avaliacoes') {
        setCurrentPage('home');
        setTimeout(() => {
          const targetId = hash.replace('#', '');
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (hash === '#home' || hash === '' || hash === '#') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string, anchor?: string) => {
    if (page === 'sobre') {
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

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#211C19] selection:bg-[#B88E5E] selection:text-white flex flex-col">
      {/* Navigation Header */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Hero Section matching the reference layout */}
            <Hero />

            {/* 4 Pillars / Highlights Bar (Desktop Only) */}
            <ValueProposition />

            {/* Areas of Practice */}
            <AreasOfPractice />

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
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Direct WhatsApp Action Button */}
      <WhatsAppFloating />
    </div>
  );
}
