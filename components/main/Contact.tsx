'use client'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="contact">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col items-center justify-center'
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Let&apos;s connect
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="flex flex-col gap-4 mt-4 items-center justify-center"
      >
        <a href="njerijoan24@gmail.com" className="text-lg text-gray-400 hover:text-gray-300 transition-colors">
          Email me!
        </a>
        <a href="https://linkedin.com/in/joannjerin" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-gray-300 transition-colors">
          LinkedIn
        </a>
        <a href="https://github.com/jnjerin" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-gray-300 transition-colors">
          GitHub
        </a>
      </motion.div>
    </div>
  )
}

export default Contact
