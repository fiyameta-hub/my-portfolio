import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">© 2024 flem. All rights reserved.</p>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFFFA9] transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFFFA9] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="text-white hover:text-[#FFFFA9] transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;