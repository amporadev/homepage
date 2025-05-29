
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-exo ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-ocean-blue">
            Ampora
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#company" className="text-gray-900 hover:text-ocean-blue transition-colors">
              Company
            </a>
            <a href="#documentation" className="text-gray-900 hover:text-ocean-blue transition-colors">
              Documentation
            </a>
            <a href="#resources" className="text-gray-900 hover:text-ocean-blue transition-colors">
              Resources
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-900 hover:text-ocean-blue font-semibold">
            Sign In
          </Button>
          <Button className="bg-ampora-gradient text-white font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
