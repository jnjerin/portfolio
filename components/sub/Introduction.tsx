'use client'

import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import ReactTypingEffect from 'react-typing-effect'
import ParticleBackground from '../effects/ParticleBackground'

const Introduction = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 md:px-20 relative'
    >
        <ParticleBackground />
        
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start z-10'>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-[40px] font-bold text-white max-w-[600px] w-auto h-auto'
            >
                <ReactTypingEffect
                    text={[
                        "Hi, I'm Joan Njeri...",
                        "I Build Software Solutions",
                        "I Build Web Platforms"
                    ]}
                    typingDelay={300}
                    eraseDelay={2000}
                    speed={80}
                    eraseSpeed={60}
                    className='text-transparent font-extrabold text-6xl bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500'
                    
                />
                
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 text-[30px]'> 
                    Full Stack Software Developer 
                </span>
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className='font-mono text-lg text-gray-400 my-5 max-w-[600px]'
            >
                Passionate about creating innovative digital solutions. I specialize in building 
                responsive web applications, developing robust software systems, and implementing 
                efficient development practices.
            </motion.p>
        </div>

        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center mt-10 lg:mt-0 z-10'
        >
            <Image 
                src='/mainIconsdark.svg'
                alt='work icons'
                height={650}
                width={650}
                className='w-[300px] md:w-[650px] h-auto object-contain'
                priority
            />
        </motion.div>
    </motion.div>
  )
}

export default Introduction
