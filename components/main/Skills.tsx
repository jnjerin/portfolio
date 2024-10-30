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
        <h1 className="text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Skills & Technologies
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {/* Frontend Section */}
        <motion.div 
          variants={slideInFromLeft(0.5)} 
          className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
        >
          <div className="text-center mb-8">
            {/* <h2 className="text-3xl font-mono font-bold text-purple-700 border-b-2 border-l-2 border-purple-800 pl-4 pb-2">
              Frontend Development
            </h2> */}
            <h2 className="text-3xl  font-bold text-purple-700 px-6 py-2 border border-[#E5E7EB]/20 rounded-lg">
              Frontend Development
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-md text-gray-500 mt-4 ita"
            >
              Creating responsive and interactive user interfaces
            </motion.p>

          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
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

        {/* Backend Section */}
        <motion.div 
          variants={slideInFromRight(0.5)} 
          className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
        >
          <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-purple-700 px-6 py-2 border border-[#E5E7EB]/20 rounded-lg">
              Backend Development
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-md text-gray-500 mt-4 ita"
            >
              Building robust and scalable server-side applications
            </motion.p>
              
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
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

        {/* DevOps Section */}
        <motion.div 
          variants={slideInFromLeft(0.5)} 
          className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
        >
          <div className="text-center mb-8">
          <h2 className=" text-3xl font-bold text-purple-700 px-6 py-2 border border-[#E5E7EB]/20 rounded-lg">
              DevOps
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-md text-gray-500 mt-4 ita"
            >
              Bridging frontend and backend, optimizing deployment process
            </motion.p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default Skills;
