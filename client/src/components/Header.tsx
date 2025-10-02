import React, { useEffect, useState, useRef } from 'react';
import newLogo from '@assets/green_logo_1759348887630.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const currentScrollY = window.scrollY;
      
      setIsScrolled(scrollTop > 50);
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header 
      id="navbar" 
      className={`fixed w-full py-2 md:py-3 bg-black shadow-md z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <div className="h-10 md:h-10 lg:h-14">
            <img src={newLogo} alt="Shoe & Watch Repair" className="h-full object-contain" />
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-end space-x-4">
          <a href="#about" className="nav-link font-body pb-2 text-white hover:text-[#FDDB3A] transition-colors">About</a>
          <a href="#services" className="nav-link font-body pb-2 text-white hover:text-[#FDDB3A] transition-colors">Services</a>
          <a href="#prices" className="nav-link font-body pb-2 text-white hover:text-[#FDDB3A] transition-colors">Prices</a>
          <a href="#testimonials" className="nav-link font-body pb-2 text-white hover:text-[#FDDB3A] transition-colors">Testimonials</a>
          <a href="#contact" className="bg-[#FDDB3A] text-[#41444B] px-4 py-2 rounded hover:bg-opacity-90 transition-colors shadow-md">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          id="mobile-menu-button" 
          ref={buttonRef}
          className={`md:hidden p-2 rounded-md ${isMenuOpen ? 'bg-[#9AFF00] text-black' : 'bg-[#9AFF00] text-black'} transition-all duration-300 focus:outline-none`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div id="mobile-menu" ref={menuRef} className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <a 
              href="#about" 
              className="font-body text-[#41444B] hover:bg-[#F6F4E6] hover:text-[#FDDB3A] transition-all py-4 px-3 border-b border-gray-200 text-lg font-medium flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="w-1.5 h-1.5 bg-[#FDDB3A] rounded-full mr-3"></span>
              About
            </a>
            <a 
              href="#services" 
              className="font-body text-[#41444B] hover:bg-[#F6F4E6] hover:text-[#FDDB3A] transition-all py-4 px-3 border-b border-gray-200 text-lg font-medium flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="w-1.5 h-1.5 bg-[#FDDB3A] rounded-full mr-3"></span>
              Services
            </a>
            <a 
              href="#prices" 
              className="font-body text-[#41444B] hover:bg-[#F6F4E6] hover:text-[#FDDB3A] transition-all py-4 px-3 border-b border-gray-200 text-lg font-medium flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#prices")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="w-1.5 h-1.5 bg-[#FDDB3A] rounded-full mr-3"></span>
              Prices
            </a>

            <a 
              href="#testimonials" 
              className="font-body text-[#41444B] hover:bg-[#F6F4E6] hover:text-[#FDDB3A] transition-all py-4 px-3 border-b border-gray-200 text-lg font-medium flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#testimonials")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="w-1.5 h-1.5 bg-[#FDDB3A] rounded-full mr-3"></span>
              Testimonials
            </a>
            <div className="p-3 my-2">
              <a 
                href="#contact" 
                className="bg-[#FDDB3A] text-[#41444B] font-medium px-4 py-3 rounded hover:bg-opacity-90 transition-colors text-center block w-full text-lg shadow-md" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  closeMenu();
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
