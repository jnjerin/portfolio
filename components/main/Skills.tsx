  'use client'

  import React from "react";
  import SkillDataProvider from "../sub/SkillDataProvider";
  import { motion } from "framer-motion";
  import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
  import { Skill_data, Backend_skill, Frontend_skill, Full_stack, Other_skill } from "@/constants";

  const Skills = () => {
    return (
      <section id="skills" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20">
        <motion.div variants={slideInFromTop} className="w-full h-auto flex flex-col items-center justify-center">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Skills
          </h1>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.5)} className="w-full h-auto flex flex-col items-center justify-center">
        <div className="group">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700 mb-1 hover:scale-125 pb-2 relative">
            Frontend Development
            {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-700 mb-1 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span> */}
          </h2>
        </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="cursive text-lg text-gray-500 mb-8"
          >
            Creating responsive and interactive user interfaces
          </motion.p>
          <div className="flex flex-row justify-start flex-wrap mt-4 gap-5 items-start max-w-[900px] mx-auto">
            {Frontend_skill.map((skill, index) => (
              <SkillDataProvider
                key={index}
                src={skill.Image}
                width={skill.width}
                height={skill.height}
                index={index}
                name={skill.skill_name}
              />
            ))}
          </div>
        </motion.div>

        <motion.div variants={slideInFromRight(0.5)} className="w-full h-auto flex flex-col items-center justify-center mt-20">
        <div className="group">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700 mb-1 hover:scale-125 pb-2 relative">
            Backend Development
            {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-700 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span> */}
          </h2>
        </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="cursive text-lg text-gray-500 mb-8"
          >
            Building robust and scalable server-side applications
          </motion.p>
          <div className="flex flex-row justify-start flex-wrap mt-4 gap-5 items-start max-w-[900px] mx-auto">  
            {Backend_skill.map((skill, index) => (
              <SkillDataProvider
                key={index}
                src={skill.Image}
                width={skill.width}
                height={skill.height}
                index={index}
                name={skill.skill_name}
              />
            ))}
          </div>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.5)} className="w-full h-auto flex flex-col items-center justify-center mt-20">
        <div className="group">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700 mb-1 hover:scale-125 pb-2 relative">
            DevOps
            {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-700 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span> */}
          </h2>
        </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="cursive text-lg text-gray-500 mb-8"
          >
            Bridging frontend and backend, optimizing deployment processes
          </motion.p>
          <div className="flex flex-row justify-start flex-wrap mt-4 gap-5 items-start max-w-[900px] mx-auto">
            {[...Full_stack, ...Other_skill].map((skill, index) => (
              <SkillDataProvider
                key={index}
                src={skill.Image}
                width={skill.width}
                height={skill.height}
                index={index}
                name={skill.skill_name}
              />
            ))}
          </div>
        </motion.div>
      </section>
    );
  };

  export default Skills;