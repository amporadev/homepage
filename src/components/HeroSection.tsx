
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('how-it-works');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-ampora-gradient flex items-center justify-center relative overflow-hidden font-exo">
      <div className="container mx-auto px-4 text-center text-white animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Power Your Music.<br />
          Control Your Future.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
          Ampora gives you 100% of your royalties, total distribution freedom, 
          instant merch, and effortless marketing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-white text-ocean-blue font-bold hover:opacity-80 transition-opacity px-6 md:px-8 py-4 text-lg"
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-ocean-blue bg-white hover:opacity-80 font-bold px-6 md:px-8 py-4 text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-gentle"
        aria-label="Scroll to next section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
