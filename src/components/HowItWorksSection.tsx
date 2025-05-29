
import { Upload, ShoppingCart, Shirt, Target, Edit } from 'lucide-react';

const steps = [
  { icon: Upload, label: 'Upload music' },
  { icon: ShoppingCart, label: 'Sell digital and physical' },
  { icon: Shirt, label: 'Launch merch instantly' },
  { icon: Target, label: 'Run ad campaigns' },
  { icon: Edit, label: 'Edit Spotify, Apple profiles' },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white font-exo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-ampora-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {step.label}
              </h3>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
