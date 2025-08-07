import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: '📱',
      title: 'الهاتف المحمول',
      subtitle: 'Mobile Phone',
      details: ['01206155748', '01000254960'],
      gradient: 'bg-electromagnetic'
    },
    {
      icon: '📞',
      title: 'الهاتف الأرضي',
      subtitle: 'Landline',
      details: ['01107383197', '01107383198'],
      gradient: 'bg-quantum'
    },
    {
      icon: '🔗',
      title: 'رقم إضافي',
      subtitle: 'Additional Contact',
      details: ['01020442907'],
      gradient: 'bg-circuit'
    },
    {
      icon: '📍',
      title: 'الموقع',
      subtitle: 'Location',
      details: ['Alexandria, Egypt'],
      gradient: 'bg-wave'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-physics-navy/5 to-physics-purple/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-physics-purple rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-physics-teal rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-physics-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-physics-navy mb-6">
            Get in Touch
          </h2>
          <h3 className="font-cairo text-3xl md:text-4xl font-semibold text-electromagnetic mb-4">
            تواصل معنا
          </h3>
          <div className="w-24 h-1 bg-physics-gold mx-auto mb-6 rounded-full"></div>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to excel in physics? Contact Engineer Ahmed Salah for professional secondary physics education 
            and unlock your potential in the fascinating world of physics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-cairo text-2xl font-bold text-physics-navy mb-8">
              معلومات الاتصال
            </h3>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="physics-card group border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className={`w-16 h-16 ${method.gradient} rounded-full flex items-center justify-center shadow-quantum`}>
                      <span className="text-2xl">{method.icon}</span>
                    </div>
                    <div className="flex-1 text-right">
                      <h4 className="font-cairo text-lg font-bold text-physics-navy">
                        {method.title}
                      </h4>
                      <p className="font-inter text-sm text-physics-purple mb-2">
                        {method.subtitle}
                      </p>
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="font-mono text-physics-navy font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Professional Quote */}
            <Card className="physics-card border-0 mt-8">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-physics-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">💡</span>
                  </div>
                  <p className="font-cairo text-lg font-medium text-physics-navy mb-2">
                    "التميز في تعليم الفيزياء"
                  </p>
                  <p className="font-inter text-sm italic text-gray-600">
                    "Excellence in Physics Education"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="font-cairo text-2xl font-bold text-physics-navy mb-8">
              أرسل رسالة
            </h3>
            
            <Card className="physics-card border-0">
              <CardHeader>
                <CardTitle className="font-cairo text-xl text-physics-navy text-center">
                  نموذج التواصل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-cairo text-sm font-medium text-physics-navy mb-2">
                      الاسم / Name
                    </label>
                    <Input 
                      className="circuit-border bg-white/50 focus:bg-white transition-colors" 
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  <div>
                    <label className="block font-cairo text-sm font-medium text-physics-navy mb-2">
                      الهاتف / Phone
                    </label>
                    <Input 
                      className="circuit-border bg-white/50 focus:bg-white transition-colors" 
                      placeholder="رقم الهاتف"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-cairo text-sm font-medium text-physics-navy mb-2">
                    البريد الإلكتروني / Email
                  </label>
                  <Input 
                    type="email"
                    className="circuit-border bg-white/50 focus:bg-white transition-colors" 
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block font-cairo text-sm font-medium text-physics-navy mb-2">
                    الرسالة / Message
                  </label>
                  <Textarea 
                    className="circuit-border bg-white/50 focus:bg-white transition-colors min-h-[120px]" 
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                
                <Button className="w-full btn-electromagnetic text-lg py-3 font-cairo font-semibold">
                  إرسال الرسالة
                </Button>
              </CardContent>
            </Card>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="btn-circuit py-3 font-cairo font-semibold"
              >
                حجز موعد للاستشارة
              </Button>
              <Button 
                variant="outline" 
                className="btn-circuit py-3 font-cairo font-semibold"
              >
                استفسار عن الدورات
              </Button>
            </div>
          </div>
        </div>

        {/* Physics Achievement Banner */}
        <div className="mt-16 physics-card p-8 text-center">
          <h3 className="font-playfair text-2xl font-bold text-physics-navy mb-4">
            Engineering Excellence in Physics Education
          </h3>
          <p className="font-cairo text-lg text-physics-purple mb-4">
            الكمال في تعليم الفيزياء - Alexandria, Egypt
          </p>
          <div className="flex justify-center items-center space-x-8 space-x-reverse">
            <div className="text-center">
              <p className="font-mono text-2xl font-bold text-physics-teal">5+</p>
              <p className="font-cairo text-sm text-gray-600">سنوات خبرة</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-2xl font-bold text-physics-purple">100+</p>
              <p className="font-cairo text-sm text-gray-600">طالب متفوق</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-2xl font-bold text-physics-gold">99%</p>
              <p className="font-cairo text-sm text-gray-600">معدل النجاح</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;