'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HireModal = ({ isOpen, onClose }: HireModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-gradient-to-b from-[#0F0728] to-[#1A0B3E] p-8 rounded-2xl border border-[#7042f861] w-[90%] max-w-[500px] shadow-xl shadow-purple-500/20 relative"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          onClick={e => e.stopPropagation()}
        >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"         
            >
                <motion.div
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.div>
            </button>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mb-6">Connect with me!</h2>
          
          <div className="space-y-4"> 
            <a 
              href="/resume/JoanNdegwa_Resume.pdf" 
              download
              className="flex items-center space-x-3 p-3 rounded-lg bg-[#0300145e] hover:bg-[#342a705e] transition-all duration-300 group border border-[#38090910] hover:border-[#19070720]"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Image src="/resumeicon.png" alt="Resume" width={24} height={24} className="group-hover:scale-110" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Download Resume
              </span>
            </a>
            
            <a 
              href="https://linkedin.com/in/joannjerin" 
              target="_blank"
              className="flex items-center space-x-3 p-3 rounded-lg bg-[#0300145e] hover:bg-[#342a705e] transition-all duration-300 group border border-[#38090910] hover:border-[#19070720]"
            >
               <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Image src="/linkedinicon2.png" alt="LinkedIn" width={24} height={24} className="group-hover:scale-110" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                LinkedIn Profile
              </span>
            </a>
            
            <a 
              href="https://github.com/jnjerin" 
              target="_blank"
              className="flex items-center space-x-3 p-3 rounded-lg bg-[#0300145e] hover:bg-[#342a705e] transition-all duration-300 group border border-[#38090910] hover:border-[#19070720]"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Image src="/githubcolor.png" alt="GitHub" width={24} height={24} className="group-hover:scale-110" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                GitHub Profile
              </span>
            </a>
            
            <a 
              href="mailto:njerijoan24@gmail.com" 
              className="flex items-center space-x-3 p-3 rounded-lg bg-[#0300145e] hover:bg-[#342a705e] transition-all duration-300 group border border-[#38090910] hover:border-[#19070720]"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Image src="/emailicon.png" alt="Email" width={24} height={24} className="group-hover:scale-110" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Email Me
              </span>
            </a>
            <p className="text-gray-400 text-sm mt-6 text-center">
              Looking forward to discussing potential opportunities!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HireModal;
