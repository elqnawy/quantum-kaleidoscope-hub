import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExpertiseSection: React.FC = () => {
  const expertiseAreas = [
    {
      title: 'تحليل الدوائر الكهربائية',
      subtitle: 'Circuit Analysis Mastery',
      icon: '🔌',
      description: 'المقاومات، المكثفات، والملفات مع التطبيقات العملية',
      details: 'Series/parallel combinations, voltage dividers, power calculations',
      gradient: 'bg-electromagnetic'
    },
    {
      title: 'الكهرومغناطيسية المتقدمة',
      subtitle: 'Advanced Electromagnetism',
      icon: '🧲',
      description: 'المجالات المغناطيسية وقوانين فاراداي ولنز',
      details: 'Magnetic flux, induced currents, transformer principles',
      gradient: 'bg-quantum'
    },
    {
      title: 'فيزياء الكم والذرة',
      subtitle: 'Quantum & Atomic Physics',
      icon: '⚛️',
      description: 'التأثير الكهروضوئي والطيف الذري',
      details: 'Photoelectric effect, electron transitions, energy levels',
      gradient: 'bg-circuit'
    },
    {
      title: 'الموجات والاهتزازات',
      subtitle: 'Waves & Oscillations',
      icon: '〰️',
      description: 'التداخل والحيود والرنين',
      details: 'Interference patterns, standing waves, resonance phenomena',
      gradient: 'bg-wave'
    },
    {
      title: 'البصريات المتقدمة',
      subtitle: 'Advanced Optics',
      icon: '🔍',
      description: 'انكسار الضوء والمرايا والعدسات',
      details: 'Refraction, reflection, lens systems, optical instruments',
      gradient: 'bg-electromagnetic'
    },
    {
      title: 'الديناميكا الحرارية',
      subtitle: 'Thermodynamics',
      icon: '🌡️',
      description: 'قوانين الحرارة والغازات المثالية',
      details: 'Heat engines, entropy, ideal gas laws, thermal equilibrium',
      gradient: 'bg-quantum'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Physics Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-physics-purple rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-physics-teal rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-physics-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-physics-navy mb-6">
            Physics Expertise
          </h2>
          <h3 className="font-cairo text-3xl md:text-4xl font-semibold text-electromagnetic mb-4">
            مجالات التخصص في الفيزياء
          </h3>
          <div className="w-24 h-1 bg-physics-gold mx-auto mb-6 rounded-full"></div>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive secondary physics education covering all major domains from classical mechanics 
            to modern quantum phenomena, designed for academic excellence and university preparation.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={index} 
              className="physics-card group cursor-pointer border-0 overflow-hidden"
            >
              <CardHeader className="relative">
                <div className={`absolute inset-0 ${area.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-physics-purple to-physics-teal rounded-full flex items-center justify-center mb-4 mx-auto shadow-quantum">
                    <span className="text-2xl">{area.icon}</span>
                  </div>
                  <CardTitle className="text-center">
                    <h3 className="font-cairo text-xl font-bold text-physics-navy mb-2">
                      {area.title}
                    </h3>
                    <p className="font-inter text-sm font-medium text-physics-purple">
                      {area.subtitle}
                    </p>
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="font-cairo text-gray-700 mb-3 text-center leading-relaxed">
                  {area.description}
                </p>
                <p className="font-inter text-sm text-gray-500 text-center italic">
                  {area.details}
                </p>
                
                {/* Interactive Element */}
                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-electromagnetic w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Physics Equations Showcase */}
        <div className="mt-20 physics-card p-8 text-center">
          <h3 className="font-playfair text-2xl font-bold text-physics-navy mb-6">
            Key Physics Equations Mastery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-lg">
            <div className="p-4 bg-gray-50 rounded-lg">
              <span className="text-physics-purple font-bold">E = mc²</span>
              <p className="font-cairo text-sm mt-2 text-gray-600">تكافؤ الكتلة والطاقة</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <span className="text-physics-teal font-bold">F = qE + q(v × B)</span>
              <p className="font-cairo text-sm mt-2 text-gray-600">قوة لورنتز</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <span className="text-physics-gold font-bold">ΔE = hf - φ</span>
              <p className="font-cairo text-sm mt-2 text-gray-600">التأثير الكهروضوئي</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;