import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import { Wrench, Clock, Key, Scissors, Sparkles, Watch } from 'lucide-react';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-[#f42200]" />,
      title: "Leather Restoration",
      description: "Expert restoration of damaged leather using traditional techniques and premium materials."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#f42200]" />,
      title: "Sneaker Cleaning",
      description: "Professional deep cleaning to restore your favorite sneakers to like-new condition."
    },
    {
      icon: <Scissors className="w-8 h-8 text-[#f42200]" />,
      title: "Precision Repairs",
      description: "From designer heels to everyday boots, we handle all types of footwear repairs."
    },
    {
      icon: <Watch className="w-8 h-8 text-[#f42200]" />,
      title: "Watch Battery Replacement",
      description: "Quick battery replacement service completed while you wait."
    },
    {
      icon: <Key className="w-8 h-8 text-[#f42200]" />,
      title: "Key Cutting",
      description: "On-site key cutting service with fast, accurate results."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#f42200]" />,
      title: "Same-Day Service",
      description: "Many repairs completed the same day with our efficient workflow."
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-[#1c1c1c] mb-4 fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Services
          </h2>
          <p className="font-body text-gray-700 max-w-2xl mx-auto fade-in stagger-delay-1">
            Quality craftsmanship and reliable service for all your repair needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="font-heading font-semibold text-xl text-[#1c1c1c] ml-3">
                  {service.title}
                </h3>
              </div>
              <p className="font-body text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;