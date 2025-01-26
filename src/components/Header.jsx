import React from 'react';
import { Link } from 'react-router-dom'; 
import { Sun, Moon } from 'lucide-react'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "Home", link: "/" },
    
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="fixed w-full dark:bg-black/90 bg-white z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="dark:text-[#FFFFA9] text-black text-2xl font-bold">
            Fiyameta
          </Link>
         <div className='flex items-center gap-10'>
            
            <ul className= {`md:flex md:items-center gap-8 absolute md:static z-50 left-0 w-full md:w-auto text-center dark:bg-black bg-white  ${
                  open ? "top-12" : "top-[-490px]"
                }`}>
                  {Links.map((link) => (
                    <li className=' text-lg border-b-2 md:border-b-0 px-7 py-3 md:py-0 md:px-0'>
                      <Link
                      to={link.link}
                      className="dark:text-white text-black hover:text-[#FFFFA9] duration-500 cursor-pointer "
                      key={link.name}
                    >
                      {link.name}
                    </Link>
                    </li>

                  ))}
                  </ul>
                  
                  <div className='flex items-center gap-6'>
                    <button className="ml-4 dark:text-white text-black" onClick={toggleDarkMode}>
                    {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                  </button>
                  <div
                  onClick={() => setOpen(!open)}
                  className="cursor-pointer md:hidden w-7 h-7"
                >
                  {open ? (
                    <FaTimes className="dark:text-white text-black w-6 h-6" />
                  ) : (
                    <FaBars className="dark:text-white text-black w-6 h-6" />
                  )}
                </div>
              </div>
         </div>
         
        </div>
      </nav>
    </header>
  );
};

export default Header;
