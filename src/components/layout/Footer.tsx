
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Shashank Mohan Pandey</h3>
            <p className="text-gray-300 mb-4">
              B.Pharmacy | Dedicated to advancing healthcare through pharmaceutical excellence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-300 hover:text-pharma-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-300 hover:text-pharma-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:shashankmohanp@gmail.com" 
                className="text-gray-300 hover:text-pharma-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="text-gray-300 hover:text-pharma-400 transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#strengths" className="text-gray-300 hover:text-white transition-colors">Strengths</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">
              <Mail size={16} className="inline mr-2" />
              shashankmohanp@gmail.com
            </p>
            <p className="text-gray-300">
              <Phone size={16} className="inline mr-2" />
              +91 XXXXXXXXXX
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Shashank Mohan Pandey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
