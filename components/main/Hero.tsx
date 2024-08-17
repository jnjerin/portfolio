import React from 'react'

export const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video
            autoPlay
            muted
            loop
            className='rotate-100 absolute top-[-340px] left-0-z-[-1] object-cover w-full h-full'
        >
            <source src='/blackhole.webm' type='video/webm' />
        </video>

    </div>
  )
}
