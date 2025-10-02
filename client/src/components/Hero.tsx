import React, { useRef, useEffect, useState } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import heroTablet from '@assets/herotablet_1750564990408.png';
import heroMobileVideo from '@assets/222 - SD 480p_1750565211009.mp4';

interface ScrambleOptions {
  chars?: string;
  speed?: number;
}

const useTextScramble = (options: ScrambleOptions = {}) => {
  const [displayText, setDisplayText] = useState('WE FIX ZIPPERS');
  const { chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' } = options;
  const frameRef = useRef<number>();
  const queueRef = useRef<any[]>([]);
  const frameCountRef = useRef(0);

  const scrambleText = (newText: string): Promise<void> => {
    return new Promise((resolve) => {
      const oldText = displayText;
      const length = Math.max(oldText.length, newText.length);
      queueRef.current = [];

      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 8);
        const end = start + Math.floor(Math.random() * 8);
        queueRef.current.push({ from, to, start, end });
      }

      frameCountRef.current = 0;
      
      const update = () => {
        let output = '';
        let complete = 0;
        
        for (let i = 0; i < queueRef.current.length; i++) {
          let { from, to, start, end, char } = queueRef.current[i];
          
          if (frameCountRef.current >= end) {
            complete++;
            output += to;
          } else if (frameCountRef.current >= start) {
            if (!char || Math.random() < 0.28) {
              char = chars[Math.floor(Math.random() * chars.length)];
              queueRef.current[i].char = char;
            }
            output += char;
          } else {
            output += from;
          }
        }
        
        setDisplayText(output);
        
        if (complete === queueRef.current.length) {
          resolve();
        } else {
          frameCountRef.current++;
          frameRef.current = setTimeout(() => {
            requestAnimationFrame(update);
          }, 50) as unknown as number;
        }
      };
      
      update();
    });
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        clearTimeout(frameRef.current);
      }
    };
  }, []);

  return { displayText, scrambleText };
};

const ScrambleText: React.FC = () => {
  const { displayText, scrambleText } = useTextScramble();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const phrases = [
    "WE FIX ZIPPERS",
    "WE REPAIR WATCHES", 
    "WE RESTORE LEATHER",
    "WE CLEAN SNEAKERS"
  ];

  useEffect(() => {
    const cycle = async () => {
      await scrambleText(phrases[currentIndex]);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    };
    
    cycle();
  }, [currentIndex]);

  return (
    <h1 className="font-bold text-[#FDDB3A] leading-tight
                   text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl
                   max-w-full whitespace-nowrap overflow-hidden
                   min-h-[5rem] sm:min-h-[7rem] md:min-h-[7rem] lg:min-h-[8rem]"
        style={{ 
          fontFamily: 'Oswald, sans-serif',
          fontWeight: 700, 
          letterSpacing: '-0.03em',
          textTransform: 'uppercase'
        }}>
      {displayText}
    </h1>
  );
};

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen flex items-center relative overflow-hidden" 
      style={!isMobile ? {
        backgroundImage: `url(${heroTablet})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0,0,0,0.65)',
        backgroundBlendMode: 'overlay'
      } : {}}
    >
      {isMobile && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
            className="absolute inset-0 w-full h-full object-cover"
            onLoadStart={() => console.log('Video load started')}
            onCanPlay={() => console.log('Video can play')}
            onError={(e) => console.error('Video error:', e)}
          >
            <source src={heroMobileVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-65"></div>
        </>
      )}
      <div className="container mx-auto px-4 mt-36 relative z-10">
        <div className="max-w-3xl">
          {/* Scramble Text Animation */}
          <div className="-mb-1 md:-mb-6 fade-in">
            <ScrambleText />
          </div>
          
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 fade-in stagger-delay-1" style={{ fontFamily: 'Playfair Display, serif' }}>
            Professional Shoe Repair in Brooklyn
          </h1>
          
          <p className="font-body text-lg md:text-xl text-gray-200 mb-8 max-w-2xl fade-in stagger-delay-2">
            Same-day service. 10+ years experience. Your favorite shoes restored like new.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 fade-in stagger-delay-3">
            <a 
              href="#prices" 
              className="bg-[#FDDB3A] text-[#41444B] font-heading font-semibold px-8 py-3 rounded text-center hover:bg-opacity-90 transition-colors"
            >
              Price List
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white font-heading font-semibold px-8 py-3 rounded text-center hover:bg-[#FDDB3A] hover:text-[#41444B] hover:border-[#FDDB3A] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
