import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { AreasOfPractice } from './components/AreasOfPractice';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#211C19] selection:bg-[#B88E5E] selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      <main>
        {/* Hero Section matching the reference layout */}
        <Hero />

        {/* 4 Pillars / Highlights Bar (Desktop Only) */}
        <ValueProposition />

        {/* Areas of Practice */}
        <AreasOfPractice />

        {/* Verified Reviews / Testimonials */}
        <Testimonials />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Direct WhatsApp Action Button */}
      <WhatsAppFloating />
    </div>
  );
}
