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
    className='flex flex-col lg:flex-row items-center justify-center px-4 md:px-20 mt-20 lg:mt-40 w-full z-[20] relative' 
    >
        
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[800px] w-auto h-auto'
            >
                <span>
                <ReactTypingEffect
                    text={[
                      "Hi, I'm Joan Njeri...",
                      "I Engineer Software Solutions...",
                      "I Build Web Platforms..."
                    ]}
                    typingDelay={1000}
                    eraseDelay={2000}
                    cursorClassName="cursor-custom"
                    className='text-transparent font-extrabold text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500'
                    speed={100}
                    eraseSpeed={100}
                />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 text-[30px] md:text-[40px] animate-gradient'> Full-stack Software Engineer  </span>
                </span>
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-base md:text-lg text-gray-400 my-5 max-w-[600px]'
            >
                Passionate fullstack developer crafting end-to-end web solutions. I specialize in building 
                responsive and interactive user interfaces, developing robust backend systems, and implementing                 
                efficient DevOps practices. With expertise in cloud infrastructure and containerization, I ensure                 
                scalable and reliable deployments. I am also skilled in integrating AI technologies to enhance web                  
                applications. From concept to execution, I am dedicated to transforming ideas into cutting-edge,                 
                scalable digital experiences that make a real impact.
            </motion.p>

            <motion.div className="flex gap-4">
                <motion.a
                    variants={slideInFromLeft(1)}
                    href="#contact"
                    className='py-2 px-4 button-primary text-center text-white font-semibold cursor-pointer rounded-lg w-44 inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 backdrop-blur-sm'
                >
                    Connect with me!
                </motion.a>
                
                <motion.div className="flex gap-4">
                    {/* Add social icons here */}
                </motion.div>
            </motion.div>
        </div>

        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center mt-10 lg:mt-0'
        >
            <Image 
              src='/mainIconsdark.svg'
              alt='work icons'
              height={650}
              width={650}
              className='w-[300px] md:w-[650px] h-auto object-contain hover:scale-105 transition-transform duration-300'
              priority
            />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent

// 'use client'

// import React from 'react'
// import Image from 'next/image'
// import {motion} from 'framer-motion'
// import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
// import ReactTypingEffect from 'react-typing-effect'

// const HeroContent = () => {
//   return (
//     <motion.div
//     initial='hidden'
//     animate='visible'
//     className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]' 
//     >
//         <div id="about me" className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start '>
//             <motion.div
//             variants={slideInFromLeft(0.5)}
//             className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
//             >
//                 <span>
//                 <ReactTypingEffect
//                     text={["Hi, I'm Joan Njeri..."]}
//                     typingDelay={1000}
//                     eraseDelay={2000}
//                     cursorClassName="cursor-custom"
//                     className='text-transparent font-extrabold text-7xl bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500'
//                     displayTextRenderer={(text: string, i: number) => {
//                         return (
//                         <h1 key={i}>
//                             {text}
//                         </h1>
//                         );
//                 }}
//                 />
//                     <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 text-[40px] animate-gradient'> Full-stack web developer  </span>
//                 </span>
//             </motion.div>

//             <motion.p
//             variants={slideInFromLeft(0.8)}
//             className='text-lg text-gray-400 my-5 max-w-[600px]'
//             >
//                 Passionate fullstack developer crafting end-to-end web solutions. I specialize in building 
//                 responsive and interactive user interfaces, developing robust backend systems, and implementing 
//                 efficient DevOps practices. With expertise in cloud infrastructure and containerization, I ensure 
//                 scalable and reliable deployments. I am also skilled in integrating AI technologies to enhance web 
//                 applications. From concept to execution, I am dedicated to transforming ideas into cutting-edge, 
//                 scalable digital experiences that make a real impact.
//             </motion.p>
//             <motion.a
//                 variants={slideInFromLeft(1)}
//                 href="#contact"
//                 className='py-2 px-4 button-primary text-center text-white font-semibold cursor-pointer rounded-lg w-44 inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400'
//             >
//                 Connect with me!
//             </motion.a>
//         </div>

//         <motion.div
//         variants={slideInFromRight(0.8)}
//         className='w-full h-full flex justify-center items-center'
//         >
//             <Image 
//               src='/mainIconsdark.svg'
//               alt='work icons'
//               height={650}
//               width={650}
//             />
//         </motion.div>
//     </motion.div>
//   )
// }

// export default HeroContent