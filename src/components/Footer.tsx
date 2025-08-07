import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-physics-navy text-white py-12 relative overflow-hidden">
      {/* Background Physics Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Circuit pattern */}
          <div className="absolute top-4 left-4 w-16 h-16 border border-physics-teal"></div>
          <div className="absolute top-8 left-20 w-8 h-8 rounded-full border border-physics-gold"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border border-physics-purple"></div>
          <div className="absolute bottom-8 right-20 w-6 h-6 rounded-full border border-physics-teal"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Brand */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-3 space-x-reverse mb-4">
              <div className="w-12 h-12 rounded-lg bg-electromagnetic flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-lg">ENG. AHMED SALAH</span>
                <span className="font-cairo text-physics-gold text-sm">Perfection in Physics</span>
              </div>
            </div>
            <p className="font-cairo text-gray-300 text-sm leading-relaxed">
              التميز في تعليم الفيزياء للمرحلة الثانوية
              <br />
              Engineering Excellence in Secondary Physics Education
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-cairo text-lg font-bold mb-4 text-physics-gold">
              روابط سريعة
            </h3>
            <ul className="space-y-2 font-cairo">
              <li>
                <a href="#home" className="text-gray-300 hover:text-physics-teal transition-colors">
                  الصفحة الرئيسية
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-gray-300 hover:text-physics-teal transition-colors">
                  مجالات التخصص
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-physics-teal transition-colors">
                  تواصل معنا
                </a>
              </li>
              <li>
                <a href="#courses" className="text-gray-300 hover:text-physics-teal transition-colors">
                  الدورات التدريبية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-cairo text-lg font-bold mb-4 text-physics-gold">
              معلومات الاتصال
            </h3>
            <div className="space-y-2 font-cairo text-sm text-gray-300">
              <p className="flex items-center justify-center md:justify-start space-x-2 space-x-reverse">
                <span>📍</span>
                <span>Alexandria, Egypt</span>
              </p>
              <p className="flex items-center justify-center md:justify-start space-x-2 space-x-reverse">
                <span>📱</span>
                <span className="font-mono">01206155748</span>
              </p>
              <p className="flex items-center justify-center md:justify-start space-x-2 space-x-reverse">
                <span>📞</span>
                <span className="font-mono">01107383197</span>
              </p>
              <p className="flex items-center justify-center md:justify-start space-x-2 space-x-reverse">
                <span>🔗</span>
                <span className="font-mono">01020442907</span>
              </p>
            </div>
          </div>
        </div>

        {/* Physics Equations Border */}
        <div className="mt-8 pt-8 border-t border-physics-purple/30">
          <div className="flex flex-wrap justify-center items-center space-x-8 space-x-reverse mb-6">
            <span className="font-mono text-physics-teal text-sm">E = mc²</span>
            <span className="font-mono text-physics-gold text-sm">F = ma</span>
            <span className="font-mono text-physics-purple-light text-sm">P = VI</span>
            <span className="font-mono text-physics-teal text-sm">λf = c</span>
            <span className="font-mono text-physics-gold text-sm">E = hf</span>
          </div>

          {/* Quranic Verse */}
          <div className="text-center mb-6">
            <p className="font-cairo text-physics-gold text-lg mb-2">
              وَأَنَّ سَعْيَهُ سَوْفَ يُرَىٰ
            </p>
            <p className="font-inter text-gray-300 text-sm italic">
              "And that his effort will surely be seen"
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="font-inter text-gray-400 text-sm">
              © 2024 Eng. Ahmed Salah - Perfection in Physics. All rights reserved.
            </p>
            <p className="font-cairo text-gray-400 text-xs mt-1">
              جميع الحقوق محفوظة - التميز في تعليم الفيزياء
            </p>
          </div>
        </div>
      </div>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-physics-purple via-physics-teal to-physics-gold"></div>
    </footer>
  );
};

export default Footer;