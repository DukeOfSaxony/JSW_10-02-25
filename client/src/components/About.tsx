import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import joePortrait from '@assets/joe-portrait_1750567255590.jpg';
import storefront from '@assets/storefront_1750567255591.jpg';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="font-bold text-3xl md:text-4xl text-[#41444B] mb-6 slide-from-left" style={{ fontFamily: 'Playfair Display, serif' }}>
              Master Craftsmanship, Neighborhood Trust
            </h2>
            <p className="font-body text-[#52575D] mb-6 slide-from-left stagger-delay-1">
              Joseph brings decades of expertise to every repair at his 178 Smith Street workshop in the heart of Cobble Hill. As a second-generation craftsman, he learned the art of shoe repair from childhood, developing an eye for quality that sets his work apart.
            </p>
            <p className="font-body text-[#52575D] mb-6 slide-from-left stagger-delay-2">
              Serving the Cobble Hill and Boerum Hill communities, Joseph specializes in leather restoration, sneaker cleaning, and precision repairs for everything from designer heels to everyday boots. His workshop also offers watch battery replacement and key cutting on-site - both services completed while you wait with the same friendly, efficient service Brooklyn neighbors have come to expect.
            </p>
            <p className="font-body text-[#52575D] mb-6 slide-from-left stagger-delay-3">
              Located on Smith Street, Joseph's Repair has become the go-to destination for Brooklyn residents who value quality craftsmanship, honest pricing, and fast, convenient service. Whether it's a complex leather restoration, a quick watch battery swap, or cutting a spare key, every customer receives the same meticulous attention and friendly care.
            </p>
            <div className="flex items-center slide-from-left stagger-delay-4">
              <img 
                src={joePortrait} 
                alt="Joseph" 
                className="w-16 h-16 rounded-full object-cover border-2 border-[#FDDB3A]" 
              />
              <div className="ml-4">
                <p className="font-heading font-semibold text-[#41444B]">Joseph</p>
                <p className="text-sm text-[#52575D]">Master Cobbler & Owner</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 slide-from-right">
            <div className="relative">
              <img 
                src={storefront} 
                alt="Joseph's Shoe & Watch Repair at 178 Smith Street" 
                className="rounded-lg shadow-lg w-full" 
              />
              <div className="absolute -bottom-6 -left-6 bg-[#FDDB3A] p-4 rounded shadow-md hidden md:block">
                <p className="font-heading font-bold text-white text-3xl">15+</p>
                <p className="text-white">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
