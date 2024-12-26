import React from 'react'
import { TypewriterEffect } from './ui/TypewriterEffect'
import { Inconsolata } from "next/font/google";
import BrutalButton from './ui/BrutalButton';

const incon = Inconsolata({ subsets: ['latin'] })

const Hero = () => {
  return (    
    <div className='flex flex-col'>
        <div className={incon.className}>
            <p className='text-lime-400 relative left-1 text-xl'>
                Hi, my name is
            </p>
        </div>
        <h1 className='text-white uppercase'>
            <TypewriterEffect words={[
                {text: "Mussab", className:"text-white text-7xl"},
                {text: "Imran", className:"text-white text-7xl"}
            ]} />
        </h1>
        {/* <BrutalButton title={'Call to action'} link='https://www.instagram.com/mussab_imran/'/> */}
    </div>
  )
}

export default Hero