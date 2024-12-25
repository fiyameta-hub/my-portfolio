import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  let Links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 fixed  ">
      <nav className="container mx-auto px-6 py-4 ">
        <div className="flex items-center justify-between">
        <a href="#home" className="text-[#FFFFA9] text-2xl font-bold" >Fiyameta</a>
          
          <div className="hidden md:flex items-center space-x-8">
          
          {Links.map((link) => (
                <Link
                  to={link.link}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  activeStyle={{
                    color: '#FFFFA9',
                    transition: 'all 0.3s ease-in-out'
                  }}                                 
                 className="text-white hover:text-[#FFFFA9] duration-500 cursor-pointer"
                
                >
                  {link.name}
                </Link>
              
            ))}
          </div>

         

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              <a href="#home" className="text-white hover:text-[#FFFFA9]" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className="text-white hover:text-[#FFFFA9]" onClick={() => setIsOpen(false)}>About</a>
              <a href="#projects" className="text-white hover:text-[#FFFFA9]" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#contact" className="text-white hover:text-[#FFFFA9]" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;