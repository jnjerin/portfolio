'use client'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaDiscord } from 'react-icons/fa'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/jnjerin',
    icon: <FaGithub className="text-white text-2xl hover:text-purple-400" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/joannjerin',
    icon: <FaLinkedin className="text-white text-2xl hover:text-purple-400" />,
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/yourusername',
    icon: <FaDiscord className="text-white text-2xl hover:text-purple-400" />,
  },
  {
    name: 'Email',
    url: 'mailto:njerijoan24@gmail.com',
    icon: <FaEnvelope className="text-white text-2xl hover:text-purple-400" />,
  },
]

const Contact = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-20" id="contact">
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

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl px-4">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="backdrop-blur-lg bg-[#0F1624]/40 p-8 rounded-2xl border border-[#2A0E61]/50 shadow-xl"
        >
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-gray-300 text-sm">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A]/40 border border-[#2A0E61]/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300 text-sm">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A]/40 border border-[#2A0E61]/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300 text-sm">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A]/40 border border-[#2A0E61]/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none text-white"
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

        <motion.div
          variants={slideInFromRight(0.5)}
          className="backdrop-blur-lg bg-[#0F1624]/40 p-6 rounded-2xl border border-[#2A0E61]/50 shadow-xl h-fit"
        >
          <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Connect With Me
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center justify-center rounded-xl bg-[#1A1A1A]/40 p-4 hover:bg-[#2A0E61]/50 transition-all duration-300"
              >
                <div className="relative z-10">
                  {social.icon}
                  <p className="mt-2 text-gray-300 text-sm font-medium">{social.name}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
