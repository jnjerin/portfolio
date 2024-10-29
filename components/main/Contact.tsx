'use client'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-20" id="contact">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F1624]/50 pointer-events-none" />

      <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col items-center justify-center mb-12'
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Let&apos;s Work Together
        </h1>
        <p className="text-gray-400 text-center mt-4 max-w-md">
          Have a project in mind? Let&apos;s create something amazing together.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
        {/* Contact Form */}
        <motion.div 
          variants={slideInFromLeft(0.5)} 
          className="backdrop-blur-lg bg-[#0F1624]/40 p-8 rounded-2xl border border-[#2A0E61]/50 shadow-xl"
        >
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-gray-300 text-sm">Your Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A]/40 border border-[#2A0E61]/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300 text-sm">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A]/40 border border-[#2A0E61]/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300 text-sm">Message</label>
              <textarea 
                rows={4} 
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A]/40 border border-[#2A0E61]/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-all"
            >
              <span>Send Message</span>
              <FaPaperPlane className="text-sm" />
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          variants={slideInFromRight(0.5)}
          className="space-y-8"
        >
          <div className="backdrop-blur-lg bg-[#0F1624]/40 p-8 rounded-2xl border border-[#2A0E61]/50 shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Connect With Me
            </h3>
            <div className="space-y-6">
              <a href="mailto:njerijoan24@gmail.com" className="flex items-center space-x-4 text-gray-300 hover:text-purple-500 transition-colors">
                <div className="bg-[#1A1A1A]/40 p-3 rounded-lg">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-400">njerijoan24@gmail.com</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/joannjerin" target="_blank" className="flex items-center space-x-4 text-gray-300 hover:text-purple-500 transition-colors">
                <div className="bg-[#1A1A1A]/40 p-3 rounded-lg">
                  <FaLinkedin className="text-xl" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-gray-400">Connect professionally</p>
                </div>
              </a>
              <a href="https://github.com/jnjerin" target="_blank" className="flex items-center space-x-4 text-gray-300 hover:text-purple-500 transition-colors">
                <div className="bg-[#1A1A1A]/40 p-3 rounded-lg">
                  <FaGithub className="text-xl" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-gray-400">Check out my repos</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

// 'use client'
// import { motion } from 'framer-motion'
// import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

// const Contact = () => {
//   return (
//     <div className="flex flex-col items-center justify-center py-20" id="contact">
//       <motion.div
//         variants={slideInFromLeft(0.5)}
//         className='flex flex-col items-center justify-center'
//       >
//         <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//           Let&apos;s connect
//         </h1>
//       </motion.div>

//       {/* Contact Form */}
//       <motion.div variants={slideInFromRight(0.5)} className="w-full max-w-lg mx-auto mb-10">
//         <form className="w-full">
//           <div className="flex flex-wrap mb-6">
//             <input type="text" placeholder="Your Name" className="appearance-none block w-full bg-gray-800 text-white border rounded py-3 px-4 mb-3" />
//             <input type="email" placeholder="Your Email" className="appearance-none block w-full bg-gray-800 text-white border rounded py-3 px-4 mb-3" />
//             <textarea placeholder="Your Message" className="appearance-none block w-full bg-gray-800 text-white border rounded py-3 px-4 mb-3" rows={4} />
//             <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-2 px-4 rounded">
//               Send Message
//             </button>
//           </div>
//         </form>
//       </motion.div>

//       {/* Contact Card */}
//       <motion.div variants={slideInFromLeft(0.5)} className="bg-[#0F1624] p-8 rounded-lg shadow-xl mb-10">
//         <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
//         <div className="space-y-4">
//           <div className="flex items-center space-x-3">
//             <FaEnvelope className="text-purple-500" />
//             <span>njerijoan24@gmail.com</span>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaLinkedin className="text-purple-500" />
//             <span>LinkedIn Profile</span>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaGithub className="text-purple-500" />
//             <span>GitHub Profile</span>
//           </div>
//         </div>
//       </motion.div>

//       {/* Animated Social Buttons */}
//       <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <motion.a
//           href="mailto:njerijoan24@gmail.com"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 rounded-full text-center"
//         >
//           Email Me
//         </motion.a>
//         <motion.a
//           href="https://linkedin.com/in/joannjerin"
//           target="_blank"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 rounded-full text-center"
//         >
//           LinkedIn
//         </motion.a>
//         <motion.a
//           href="https://github.com/jnjerin"
//           target="_blank"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 rounded-full text-center"
//         >
//           GitHub
//         </motion.a>
//       </motion.div>
//     </div>
//   )
// }

// export default Contact