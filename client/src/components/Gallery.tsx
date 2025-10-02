import React, { useRef, useState, useEffect } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import beforeAndBootsImage from '@assets/beforeandboots.jpg';
import beforeAndHeelImage from '@assets/beforeandheel.jpg';
import oxImage from '@assets/ox.jpg';
import vibramImage from '@assets/vibram.jpg';
import heelImage from '@assets/heel.jpg';
import blImage from '@assets/bl.jpg';
import brImage from '@assets/br.jpg';
import slImage from '@assets/sl.jpg';
import srImage from '@assets/sr.jpg';

interface GallerySlide {
  image: string;
  title: string;
  description: string;
}

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = 4;
  
  useAnimationObserver(sectionRef);

  const slides: GallerySlide[] = [
    {
      image: oxImage,
      title: "Leather Restoration",
      description: "Complete restoration of vintage leather oxfords"
    },
    {
      image: vibramImage,
      title: "Sole Replacement",
      description: "Premium Vibram sole replacement on hiking boots"
    },
    {
      image: heelImage,
      title: "Heel Reconstruction",
      description: "Complete rebuild of damaged designer heels"
    },
    {
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Sneaker Restoration",
      description: "Comprehensive cleaning and color restoration"
    }
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.hasFocus()) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-16 md:py-24 bg-[#F6F4E6]">
      <div className="container mx-auto px-4">

        
        {/* Before & After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden fade-in stagger-delay-3">
            <div className="p-4 bg-[#41444B]">
              <h4 className="font-heading font-semibold text-lg text-white text-center">Before & After: Boot Restoration</h4>
            </div>
            <div className="grid grid-cols-2">
              <div className="relative">
                <img 
                  src={blImage} 
                  alt="Boot before restoration" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute top-2 left-2 bg-[#FDDB3A] text-[#41444B] text-xs px-2 py-1 rounded">Before</div>
              </div>
              <div className="relative">
                <img 
                  src={brImage} 
                  alt="Boot after restoration" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute top-2 right-2 bg-[#52575D] text-white text-xs px-2 py-1 rounded">After</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden fade-in stagger-delay-4">
            <div className="p-4 bg-[#41444B]">
              <h4 className="font-heading font-semibold text-lg text-white text-center">Before & After: Sneaker Restore</h4>
            </div>
            <div className="grid grid-cols-2">
              <div className="relative">
                <img 
                  src={srImage} 
                  alt="Sneaker before restoration" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute top-2 left-2 bg-[#FDDB3A] text-[#41444B] text-xs px-2 py-1 rounded">Before</div>
              </div>
              <div className="relative">
                <img 
                  src={slImage} 
                  alt="Sneaker after restoration" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute top-2 right-2 bg-[#52575D] text-white text-xs px-2 py-1 rounded">After</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
