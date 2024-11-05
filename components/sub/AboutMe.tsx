'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative" id="about me">
        <div className="max-w-4xl px-4 py-8">
            <motion.div
                initial="hidden"
                animate="visible"
                className="space-y-8"
            >
                <motion.h2 
                    variants={slideInFromLeft(0.5)}
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400"
                >
                    About Me
                </motion.h2>

                <motion.div 
                    variants={slideInFromLeft(0.7)}
                    className="grid md:grid-cols-2 gap-8"
                >
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-white">Professional Journey</h3>
                        <p className="text-gray-400">
                            With expertise in full-stack development, I specialize in creating scalable web applications 
                            and implementing efficient development practices. My focus is on delivering high-quality 
                            solutions that drive business growth.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-white">Technical Expertise</h3>
                        <p className="text-gray-400">
                            Proficient in modern web technologies and frameworks, I build responsive interfaces, 
                            develop robust backend systems, and ensure seamless deployment through effective DevOps practices.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    variants={slideInFromLeft(0.9)}
                    className="space-y-4"
                >
                    <h3 className="text-2xl font-semibold text-white">My Approach</h3>
                    <p className="text-gray-400">
                        I believe in writing clean, maintainable code and creating intuitive user experiences. 
                        Every project is an opportunity to innovate and implement best practices while solving 
                        real-world challenges.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutMe

//             <motion.p
//             variants={slideInFromLeft(0.8)}
//             className='text-base md:text-lg text-gray-400 mb-6'
//             >
//                 Passionate fullstack developer crafting end-to-end web solutions. I specialize in building 
//                 responsive and interactive user interfaces, developing robust backend systems, and implementing                 
//                 efficient DevOps practices. With expertise in cloud infrastructure and containerization, I ensure                 
//                 scalable and reliable deployments. I am also skilled in integrating AI technologies to enhance web                  
//                 applications. From concept to execution, I am dedicated to transforming ideas into cutting-edge,                 
//                 scalable digital experiences that make a real impact.
//             </motion.p>