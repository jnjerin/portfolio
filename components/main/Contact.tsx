'use client'

import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { FaGithub, FaLinkedin, FaPaperPlane, FaFileDownload } from 'react-icons/fa'
import { useState } from 'react'

const resumeLink = {
  name: 'Resume',
  url: '/path-to-your-resume.pdf', 
  icon: <FaFileDownload className="text-white text-2xl group-hover:text-purple-400" />,
}

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
  // {
  //   name: 'Discord',
  //   url: 'https://discord.com/users/yourusername',
  //   icon: <FaDiscord className="text-white text-2xl hover:text-purple-400" />,
  // },
]

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-gray-300 text-sm">Your Name</label>
              <input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A]/40 border border-[#2A0E61]/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300 text-sm">Email Address</label>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A]/40 border border-[#2A0E61]/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300 text-sm">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A]/40 border border-[#2A0E61]/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none text-white"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg flex items-center justify-center space-x-2 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <FaPaperPlane className={`text-sm ${isSubmitting ? 'animate-bounce' : ''}`} />
            </motion.button>

            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </motion.div>

         {/* Social links section    */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="backdrop-blur-lg bg-[#0F1624]/40 p-6 rounded-2xl border border-[#2A0E61]/50 shadow-xl h-fit"
        >
          <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Connect With Me
          </h3>
          <motion.a
            href={resumeLink.url}
            download
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center space-x-3 mb-8 p-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white font-medium transition-all duration-300"
          >
            <FaFileDownload className="text-white text-2xl transition-transform group-hover:rotate-12" />
            <span>Download Resume</span>
          </motion.a>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center justify-center rounded-xl bg-[#1A1A1A]/40 p-6 hover:bg-[#2A0E61]/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3">
                  {social.icon}
                  <p className="text-gray-300 text-sm font-medium">{social.name}</p>
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
