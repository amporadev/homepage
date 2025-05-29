
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-24 bg-ampora-gradient font-exo">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Keep your rights.<br />
          Keep your royalties.<br />
          Start with Ampora.
        </h2>
        
        <Button 
          size="lg" 
          className="bg-white text-ocean-blue font-bold hover:bg-gray-100 transition-colors px-12 py-6 text-xl"
        >
          Create Your Account
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
