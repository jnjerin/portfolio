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
          <h2 className="text-[30px] text-white font-bold">Frontend Development</h2>
          <p className="text-[20px] text-gray-200 mb-10">Creating responsive and interactive user interfaces</p>
          <div className="flex flex-row justify-start flex-wrap mt-4 gap-5 items-center max-w-[900px] mx-auto">
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
          <h2 className="text-[30px] text-white font-bold">Backend Development</h2>
          <p className="text-[20px] text-gray-200 mb-10">Building robust and scalable server-side applications</p>
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
          <h2 className="text-[30px] text-white font-bold">Full Stack & DevOps</h2>
          <p className="text-[20px] text-gray-200 mb-10">Bridging frontend and backend, optimizing deployment processes</p>
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