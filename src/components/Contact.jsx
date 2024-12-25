import React from 'react';
import { FaInstagram,FaTelegram,FaEnvelope,FaPhone ,FaMapMarkerAlt} from 'react-icons/fa';
import { FaE } from 'react-icons/fa6';


const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
    
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Let's talk about your project</h3>
            <p className="text-white/70 mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Drop me a line, and I'll get back to you as soon as possible.
            </p>
            
            <div className="flex flex-col gap-3">
            <a href="mailto:flemberhanu@gmail.com" target="_blank" rel="noreferrer">
              <div className="flex items-center  space-x-4">
                <FaEnvelope className="text-[#FFFFA9] w-7 h-7" />
                <span className="text-white">flemberhanu@gmail.com</span>
              </div>
              </a>
            
              <a href="tel:+251989241208" target="_blank" rel="noreferrer">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-[#FFFFA9] w-7 h-7" />
                <span className="text-white">+251989241208</span>
              </div>
              </a>
              <a href='flemberhanu@gmail.com' target="_blank" rel="noreferrer">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-[#FFFFA9] w-7 h-7"  />
                <span className="text-white">ADDIS ABABA ,ETHIOPIA</span>
              </div>
              </a>
              <a href='https://www.instagram.com/fiyaa_meta/profilecard/?igsh=MXd5ZHo4eXpheXd3bQ==' target="_blank" rel="noreferrer">
              <div className="flex items-center space-x-4">
            <FaInstagram className=' w-8 h-8 text-[#FFFFA9]'/>
            <span className="text-white">flem berhanu</span>
          </div>
          </a>
          <a href='https://t.me/leliit' target="_blank" rel="noreferrer">
          <div className="flex items-center space-x-4">
              <FaTelegram className=' w-8 h-8 text-[#FFFFA9]'/>
              <span className="text-white">fiyameta</span>
                </div>
                </a>
              <div>

                
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#FFFFA9] text-white"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#FFFFA9] text-white"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#FFFFA9] text-white resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FFFFA9] text-black py-3 rounded-lg font-medium hover:bg-[#FFFFA9]/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;