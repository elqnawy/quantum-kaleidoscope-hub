import React from 'react';
import PhysicsBackground from '@/components/PhysicsBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Physics Background Animation */}
      <PhysicsBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ExpertiseSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
