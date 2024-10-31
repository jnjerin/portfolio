import React from 'react'
import Introduction from '@/components/sub/Introduction'
import AboutMe from '@/components/sub/AboutMe'

export const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <Introduction />
        <AboutMe />
    </div>
  )
}


// 'use client'

// import React from 'react'
// import HeroContent from '../sub/HeroContent'

// export const Hero = () => {
//   return (
//     <div id="hero" className='relative flex flex-col h-full w-full'>
//         <HeroContent />
//     </div>
//   )
// }
