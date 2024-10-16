"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  name: string;
}

const SkillDataProvider = ({ src, width, height, index, name }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

    const animationDelay = 0.2
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        variants={variants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ delay: index * animationDelay }}
        className="flex flex-col items-center justify-center"
      >
        <div className="bg-gray-800 rounded-full px-4 py-2 text-white mb-2">
          {name}
        </div>
        <Image
          src={src}
          width={55}
          height={55}
          alt={`${name} skill`}
          className="mt-2 object-contain"
        />
      </motion.div>
    )
}

export default SkillDataProvider
