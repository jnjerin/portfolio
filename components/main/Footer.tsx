'use client'

import React from "react";
import { motion } from "framer-motion";
import {
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#0F172A] text-gray-200 py-12 mt-10 relative"
    >
      {/* Decorative top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connect Section */}
          <div className="backdrop-blur-sm bg-[#1A2333]/30 p-5 rounded-xl border border-gray-800/50 hover:transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-lg font-bold mb-4 text-white">Let&apos;s Connect</h3>
            <div className="space-y-3">
              <Link href="https://github.com/jnjerin" 
                className="flex items-center group hover:text-purple-500 transition-all duration-300 ease-in-out transform hover:translate-x-2">
                <RxGithubLogo className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>Github</span>
              </Link>
              <Link href="https://www.linkedin.com/in/joannjerin/" 
                className="flex items-center group hover:text-purple-500 transition-all duration-300 ease-in-out transform hover:translate-x-2">
                <RxLinkedinLogo className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </Link>
              {/* <Link href="https://twitter.com/joanndegwa_" 
                className="flex items-center group hover:text-purple-500 transition-all duration-300 ease-in-out transform hover:translate-x-2">
                <RxTwitterLogo className="w-5 h-5 mr-3 group-hover:scale- 110 transition-transform" />
                <span>Twitter</span>
              </Link> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-sm bg-[#1A2333]/30 p-5 rounded-xl border border-gray-800/50 hover:transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <div className="space-y-3">
              <Link href="#projects" className="block hover:text-purple-500 transition-all duration-300 hover:translate-x-2">Projects</Link>
              <Link href="#skills" className="block hover:text-purple-500 transition-all duration-300 hover:translate-x-2">Skills</Link>
              {/* <Link href="#experience" className="block hover:text-purple-500 transition-all duration-300 hover:translate-x-2">Experience</Link> */}
              <Link href="/resume.pdf" className="block hover:text-purple-500 transition-all duration-300 hover:translate-x-2">Resume</Link>
            </div>
          </div>

          {/* Location & Time */}
          <div className="backdrop-blur-sm bg-[#1A2333]/30 p-5 rounded-xl border border-gray-800/50 hover:transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-lg font-bold mb-4 text-white">Location</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm">EAT (UTC+3)</span>
              </div>
              <p className="text-gray-400">📍 Nairobi, Kenya</p>
            </div>
          </div>

          {/* Availability */}
          <div className="backdrop-blur-sm bg-[#1A2333]/30 p-5 rounded-xl border border-gray-800/50 hover:transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-lg font-bold mb-4 text-white">Availability</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 before:content-['•'] before:text-purple-500 before:mr-2">Remote/Hybrid work</li>
              <li className="flex items-center space-x-2 before:content-['•'] before:text-purple-500 before:mr-2">Full-time/Part-time opportunities</li>
              <li className="flex items-center space-x-2 before:content-['•'] before:text-purple-500 before:mr-2">Open Source Projects</li>
              <li className="flex items-center space-x-2 before:content-['•'] before:text-purple-500 before:mr-2">Project Partnerships</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-800/50">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Joan Njeri. All rights reserved
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;

