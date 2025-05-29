
import { Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 font-exo border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-4">Ampora</div>
            <p className="text-gray-600">
              Empowering artists with 100% royalties and complete control.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</a></li>
              <li><a href="#privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 Ampora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
