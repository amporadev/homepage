
import { Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ampora-gradient-dark py-16 font-exo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">Ampora</div>
            <p className="text-white/80">
              Empowering artists with 100% royalties and complete control.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#terms" className="text-white/80 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#privacy" className="text-white/80 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Ampora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
