'use client'

import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {sparklesIcon} from 


const HeroContent = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-row items-center px-20 mt-40 w-full z-[20]' 
    >
        <div  className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start '>
            <motion.div
            variants={slideInFromTop}
            className='welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]'
            >
                <sparklesIcon className='text-[#b49bff] mr-[] h-5 w-5' />
                <h1 className='welcome-text text-[13px]'>Fullstack Developer Portfolio</h1>
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
            >
                providing
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>the best</span>
                project experience
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-5 max-w-[600px]'
            >
                I am a full stack software engineer with experience in website,
                mobile and software development. Check out my project and skills
            </motion.p>
            <motion.a
            variants={slideInFromLeft(1)}
            className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w[200px]'
            >
                Learn More!
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