'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaFileDownload } from 'react-icons/fa'

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
          className="bg-[#0300145e] p-8 rounded-xl border border-[#7042f861] backdrop-blur-md w-[90%] max-w-[500px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          
        >
            <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
                <motion.div
                whileHover={{ rotate: 90 }}
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
          <h2 className="text-2xl font-bold text-white mb-4">Let's Connect!</h2>
          
          <div className="space-y-4">
            <a 
              href="/resume/JoanNdegwa_Resume.pdf" 
              download
              className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
                
            >
              <Image src="/resumeicon.png" alt="Resume" width={24} height={24} />
              <span>Download Resume</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/joannjerin" 
              target="_blank"
              className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
            >
              <Image src="/linkedinicon2.png" alt="LinkedIn" width={24} height={24} />
              <span>LinkedIn Profile</span>
            </a>
            
            <a 
              href="https://github.com/jnjerin" 
              target="_blank"
              className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
            >
              <Image src="/githubcolor.png" alt="GitHub" width={24} height={24} />
              <span>GitHub Profile</span>
            </a>
            
            <a 
              href="mailto:njerijoan24@gmail.com" 
              className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
            >
              <Image src="/emailicon.png" alt="Email" width={24} height={24} />
              <span>Email Me</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HireModal;
