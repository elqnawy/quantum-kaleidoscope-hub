import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="relative z-10 bg-white/95 backdrop-blur-md border-b border-physics-purple/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-electromagnetic flex items-center justify-center shadow-quantum">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-physics-navy font-playfair font-bold text-lg">
                ENG. AHMED
              </span>
              <span className="text-physics-navy font-playfair font-bold text-lg">
                SALAH
              </span>
            </div>
          </div>

          {/* Navigation Menu - Arabic */}
          <div className="hidden md:flex items-center space-x-8 font-cairo">
            <a 
              href="#home" 
              className="text-physics-navy hover:text-physics-purple transition-colors duration-300 text-lg font-medium"
            >
              الصفحة الرئيسية
            </a>
            <a 
              href="#services" 
              className="text-physics-navy hover:text-physics-purple transition-colors duration-300 text-lg font-medium"
            >
              الخدمات
            </a>
            <a 
              href="#contact" 
              className="text-physics-navy hover:text-physics-purple transition-colors duration-300 text-lg font-medium"
            >
              الإتصال
            </a>
          </div>

          {/* Login Buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="btn-circuit text-sm font-cairo hidden sm:inline-flex"
            >
              تسجيل دخول الطلبة
            </Button>
            <Button 
              className="btn-electromagnetic text-sm font-cairo"
            >
              تسجيل دخول المدرسين
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;