'use client'

import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import ReactTypingEffect from 'react-typing-effect'

const HeroContent = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]' 
    >
        <div id="about me" className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start '>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box flex py-[8px] px-[9px] border border-[#7042f88b] opacity-[5]'
            >
                <h1 className='Welcome-text text-[13px]'>
                    Fullstack Developer Portfolio
                </h1>
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
            >
                <span>
                <ReactTypingEffect
                    text={["Fullstack Developer"]}
                    typingDelay={1000}
                    eraseDelay={2000}
                    cursorClassName="cursor-custom"
                    displayTextRenderer={(text: string, i: number) => {
                        return (
                        <h1 key={i}>
                            {text}
                        </h1>
                        );
                }}
                />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 text-[40px] animate-gradient'> Crafting Digital Experiences </span>
                </span>
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-5 max-w-[600px]'
            >
                Passionate fullstack developer crafting end-to-end web solutions. I specialize in building 
                responsive and interactive user interfaces, developing robust backend systems, and implementing 
                efficient DevOps practices. With expertise in cloud infrastructure and containerization, I ensure 
                scalable and reliable deployments. I am also skilled in integrating AI technologies to enhance web 
                applications. From concept to execution, I am dedicated to transforming ideas into cutting-edge, 
                scalable digital experiences that make a real impact.
            </motion.p>
            <motion.a
                variants={slideInFromLeft(1)}
                href="#contact"
                className='py-2 px-4 button-primary text-center text-white font-semibold cursor-pointer rounded-lg w-44 inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400'
            >
                Connect with me!
            </motion.a>
        </div>

        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
        >
            <Image 
              src='/mainIconsdark.svg'
              alt='work icons'
              height={650}
              width={650}
            />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent