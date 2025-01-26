import React, { useState } from 'react';
import { ExternalLink, Github, ThumbsUp } from 'lucide-react'; 
import hotelImage from '../images/hotel.jpg';
import travelImage from '../images/travel.jpg';
import supermarket from'../images/Grocery shop.jpg';
import Repositories from './Repositories';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = () => {
  
  const [likes, setLikes] = useState({
    "Hotel Management System": 0,
    "Tour and Travel website": 0,
    "supermarket Management system": 0
  });

  const [liked, setLiked] = useState({
    "Hotel Management System": false,
    "Tour and Travel website": false,
    "supermarketManagement system": false
  });

  const handleLikeToggle = (title) => {
    setLiked(prevLiked => {
      const newLiked = { ...prevLiked, [title]: !prevLiked[title] };
      setLikes(prevLikes => ({
        ...prevLikes,
        [title]: newLiked[title] ? 1 : 0
      }));
      return newLiked;
    });
  };

  const projects = [
    {
      title: "Hotel Managment System",
      description: "A comprehensive hotel management system that includes booking, room management, and guest services.",
      image: hotelImage,
      technologies: ["React", "Node.js"],
      github: "https://github.com",
      live: "https://hotel.com"
    },
    {
      title: "Tour and Travel website",
      description: "A comprehensive tour and travel website offering booking services, itinerary planning, and travel tips",
      technologies: ["React", "Bootstrap"],
      image: travelImage,
      github: "https://github.com",
      live: "https://tour-and-travel.com"
    },
    {
      title: "supermarket Management system",
      description: "A comprehensive platform designed to streamline supermarket operations.",
      image: supermarket,
      technologies: ["c#", "Tailwind"],
      github: "https://github.com",
      live: "https://portfolio.com",
    }
  ];

  return (
    <>

    <section id="projects" className="py-20 dark:bg-black/90 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-[#FFFFA9] text-black text-center mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <motion.div key={index} className="bg-white/5 rounded-lg overflow-hidden group dark:bg-black/90 bg-white shadow-lg"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
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
                <h3 className="text-xl font-semibold dark:text-[#FFFFA9] text-black mb-2">{project.title}</h3>
                <p className="dark:text-white/70 text-black mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 text-sm dark:bg-white/10 text-black rounded-full dark:bg-black/90 bg-white">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 dark:text-white text-black">
                  <button onClick={() => handleLikeToggle(project.title)} className="dark:bg-black/90 bg-white
                   flex items-center dark:text-[#FFFFA9] text-black ">
                    <ThumbsUp size={24} className="mr-2 dark:text-white text-black" />
                    {likes[project.title] > 0 ? "Liked" : "Like"} 
                  </button>
                  <span className="ml-2 dark:text-white/70 text-black">{likes[project.title]} Like(s)</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Repositories/>
    </>
  );
};

export default Projects;
