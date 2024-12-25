import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import hotelImage from '../images/hotel.jpg'; 
import travelImage from '../images/travel.jpg';
 
const Projects = () => {
  const projects = [
    {
      title: "Hotel Managment System",
      description: "A comprehensive hotel management system that includes booking, room management, and guest services.",
      image: hotelImage, 
      technologies: ["React", "Node.js" ],
      github: "https://github.com",
      live: "https://hotel.com"
    }
  ,

    {
      title: "Tour and Travel website",
      description: "A comprehensive tour and travel website offering booking services, itinerary planning, and travel tips" ,
      technologies: ["React", "bootstrap"],
      image: travelImage, 
      github: "https://github.com",
      live: "https://Tour and Travel.com"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["React js", "Tailwind" ],
      github: "https://github.com",
      live: "https://portfolio.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFA9] text-center mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFFFA9]">
                    <Github size={24} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFFFA9]">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#FFFFA9] mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 text-sm bg-white/10 text-white/90 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;