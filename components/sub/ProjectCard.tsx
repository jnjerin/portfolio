'use client'

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { useState } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink: string;
  index: number;
}

const ProjectCard = ({ src, title, description, technologies, demoLink, githubLink, index }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div 
      variants={index % 2 === 0 ? slideInFromLeft(index * 0.2) : slideInFromRight(index * 0.2)}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden rounded-lg border-2 border-[#2A0E61] bg-[#0300145e] backdrop-blur-xl transform transition-all duration-300 ease-in-out
      hover:scale-[1.05] 
      hover:bg-[#0300149f] 
      hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] 
      hover:border-purple-500
      cursor-pointer flex flex-col"
    >

      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-cover h-48 transition-transform duration-300 hover:scale-110"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-600 mb-2">{title}</h1>
        {/* <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3 font-inter tracking-tight">
          {title}
        </h1> */}

        <p className="text-gray-300 mb-4 flex-grow">
          {isExpanded ? description : description.slice(0, 150)}
          {description.length > 140 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-slate-500 hover:text-cyan-600 font-sm"
            >
              {isExpanded ? "See Less" : "...See More"}
            </button>
          )}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
            // <span className="px-3 py-1 bg-[#ffffff10] backdrop-blur-md border border-[#ffffff30] text-white text-sm rounded-full transition-all duration-300 hover:animate-shake">
            //  {tech}
            // </span>
              <span key={index} className="px-3 py-1 border border-[#38bdf880] text-[#38bdf880] text-sm rounded-full transition-all duration-300 hover:bg-[#38bdf810] hover:border-[#38bdf8] hover:text-[#38bdf8]">
                {tech}
              </span>          
            ))}
          </div>

          <div className="flex justify-between">
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-gradient-to-r from-cyan-700 to-cyan-600 text-white rounded-full transition-all duration-300 flex items-center justify-center hover:from-cyan-600 hover:to-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <span className="mr-2">Live Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-purple-800 text-white rounded-full hover:bg-purple-500 transition-colors duration-300 flex items-center justify-center">
              <span className="mr-2">GitHub Repo</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
