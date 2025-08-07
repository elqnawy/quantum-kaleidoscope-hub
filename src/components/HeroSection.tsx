import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 physics-gradient-bg opacity-90"></div>
      
      {/* Physics Particles */}
      <div className="absolute inset-0 particle-system"></div>
      
      {/* Wave Animation */}
      <div className="absolute inset-0 wave-animation"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="quantum-entrance">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-4 text-glow">
            ENG. AHMED SALAH
          </h1>
          <div className="w-32 h-1 bg-physics-gold mx-auto mb-6 rounded-full shadow-glow-em"></div>
          <p className="font-cairo text-2xl md:text-3xl font-semibold mb-8 text-physics-gold">
            Perfection in Physics
          </p>
        </div>

        {/* Quranic Verse */}
        <div className="physics-card max-w-3xl mx-auto p-8 mb-12 text-physics-navy">
          <p className="font-cairo text-xl md:text-2xl font-medium mb-4 leading-relaxed">
            وَأَنَّ لَيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ وَأَنَّ سَعْيَهُ سَوْفَ يُرَىٰ
          </p>
          <p className="font-inter text-lg md:text-xl italic mb-2">
            "And that there is nothing for man except what he strives for, and that his effort will surely be seen."
          </p>
          <p className="font-mono text-sm text-physics-purple">
            - Quran 53:39-40
          </p>
        </div>

        {/* Professional Tagline */}
        <div className="mb-12">
          <h2 className="font-inter text-xl md:text-2xl font-medium mb-4 text-white/90">
            Engineering Excellence in Secondary Physics Education
          </h2>
          <p className="font-cairo text-lg md:text-xl text-physics-gold mb-2">
            Alexandria, Egypt
          </p>
          <p className="font-inter text-lg text-white/80">
            Where Physics Concepts Come to Life
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-electromagnetic text-lg px-8 py-4 font-cairo font-semibold"
          >
            ابدأ رحلتك في الفيزياء
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-circuit text-lg px-8 py-4 font-cairo font-semibold"
          >
            استكشف عالم الكهرباء
          </Button>
        </div>

        {/* Physics Specializations */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="physics-card p-6 text-physics-navy">
            <div className="w-16 h-16 bg-electromagnetic rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="font-cairo text-xl font-bold mb-2">الكهرباء والمغناطيسية</h3>
            <p className="font-inter text-sm">Electricity & Magnetism Mastery</p>
          </div>
          
          <div className="physics-card p-6 text-physics-navy">
            <div className="w-16 h-16 bg-quantum rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔬</span>
            </div>
            <h3 className="font-cairo text-xl font-bold mb-2">الفيزياء الحديثة</h3>
            <p className="font-inter text-sm">Modern Physics Exploration</p>
          </div>
          
          <div className="physics-card p-6 text-physics-navy">
            <div className="w-16 h-16 bg-circuit rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🌊</span>
            </div>
            <h3 className="font-cairo text-xl font-bold mb-2">الموجات والضوء</h3>
            <p className="font-inter text-sm">Waves & Optics Excellence</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;