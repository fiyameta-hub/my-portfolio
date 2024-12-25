import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';
import about from "../images/about.jpg";
import { GraduationCap } from 'lucide-react';
const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFA9] text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={about}
              alt="Workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <p className=" text-[#FFFFA9] text-lg  ">
I’m a creative and detail-oriented full-stack developer with a flair for design and a passion for crafting seamless digital
 experiences.
My goal is to build meaningful connections between technology and people through innovative and clean code.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="p-6 bg-white/5 rounded-lg w-full">
              <GraduationCap className="text-[#FFFFA9] mb-6" size={35} />
                <h3 className="text-[#FFFFA9] font-semibold mb-2">Education</h3>
                <p className="text-white/70">Currently pursuing a BSc in Information Science and hold a high school diploma</p>
              </div>
              
              <div className="p-6 bg-white/5 rounded-lg w-full">
                <Palette className="text-[#FFFFA9] mb-4" size={35} />
                <h3 className="text-[#FFFFA9] font-semibold mb-2">Design</h3>
                <p className="text-white/70">Beautiful and intuitive interfaces</p>
              </div>
              
              <div className="p-6 bg-white/5 rounded-lg w-full">
              <Code className="text-[#FFFFA9] mr-3" size={35} />
              <h3 className="text-[#FFFFA9] font-semibold mb-2">Skills</h3>
              <ul className="text-white/70 list-disc pl-4 space-y-1 leading-tight text-sm">
              <li class="text-white/70">
    <span class="text-[#FFFFA9] font-semibold">Programming Languages:</span> Python, JavaScript, C#,Java
  </li>
  <li class="text-white/70">
    <span class="text-[#FFFFA9] font-semibold">Data Analysis:</span> Python (Pandas, NumPy), SQL
  </li>
  <li class="text-white/70">
    <span class="text-[#FFFFA9] font-semibold">Web Development:</span> HTML, CSS, React.js, Node.js
  </li>
  </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;