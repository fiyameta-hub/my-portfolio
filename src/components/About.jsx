import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import profile from '../images/7e013461-6a38-44b6-bd3b-2c60aa76649d.jpg';
const About = () => {
  return (
    <section id="about" className="mb-0 pt-24 px-12 relative  dark:bg-black/90 bg-white">
    <div className="h-auto md:h-screen flex items-center justify-around flex-wrap gap-8">
      <div className="mx-auto px-6 relative">
        <div className="text-center">
          <TypeAnimation
            className=" md:text-6xl lg:text-7xl  text-4xl font-bold dark:text-[#FFFFA9] text-black mb-6 fo font-mono"
            sequence={["HELLO, I am Flem Berhanu", 1000, " ", 500]}
            speed={50}
            deleteSpeed={50}
            repeat={Infinity}
            style={{ fontSize: "4em" }}
          />
            <p
            className="dark:text-[#FFFFA9] text-black text-xl md:text-2xl font-bold mt-6 mb-8 max-w-2xl 
            mx-auto  transition-all duration-500 font-mono "
          >
            I am a web developer with a keen eye for detail and a love for creating
            intuitive, user-friendly websites and applications.
          </p>
        </div>
      </div>

        <img 
        src={profile}
        alt='plofile'
        className='w-96 h-96 rounded-full'
        />

    </div>
  </section>
  );
};

export default About;
