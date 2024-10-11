"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("about me");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about me", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY;

      setScrolled(scrollPosition > 50);

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md z-50 px-10 transition-all duration-300 ${
        scrolled ? "bg-[#03001417]" : "bg-transparent"
      }`}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about me" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[100px] hidden md:block text-gray-300 text-xl">
            Joan Njeri Ndegwa
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {["about me", "skills", "projects", "contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`cursor-pointer transition-colors duration-300 ${
                  active === item 
                    ? "text-purple-500" 
                    : "text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-300 hover:to-cyan-600"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActive(item)}
              >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
            ))}
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-2 rounded-full font-semibold"
        >
          Hire Me
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;