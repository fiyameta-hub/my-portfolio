import React from 'react';
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section
      id="home"
      className="mb-0 py-4 px-12 relative bg-black group"
    >
      <div className="h-auto md:h-screen flex items-center justify-around flex-wrap gap-8">
        <div className="overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/d2/0b/36/d20b362a9cf422dd0e056bf32ddde12c.jpg')",
            }}
          ></div>
        </div>
        <div className="mx-auto px-6 relative">
          <div className="text-center">
          <TypeAnimation
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#FFFFA9] mb-6 fo font-mono"
            sequence={[
              "HELLO, I am Flem Berhanu",
              1000,
              " ",
              500
             
            ]}
            speed={50}
            deleteSpeed={50}
            repeat={5}
            style={{ fontSize: "4em" }}
          />
            
            <p
              className="text-xl md:text-2xl font-bold text-[#FFFFA9] mt-6 mb-8 max-w-2xl mx-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 font-mono"
            >
              I am a web developer with a keen eye for detail and a love for creating
              intuitive, user-friendly websites and applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
