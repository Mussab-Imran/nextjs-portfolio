import React from 'react'
import { TypewriterEffect } from './ui/TypewriterEffect'
import { Inconsolata } from "next/font/google";
import BrutalButton from './ui/BrutalButton';
import { CrossCard } from './ui/CrossCard';

const incon = Inconsolata({ subsets: ['latin'] })

const Hero = () => {
  return (    
    <div className="h-screen w-full bg-black bg-dot-white/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className='flex absolute flex-col lg:left-44 lg:top-96 md:left-28 md:top-96 sm:left-5 sm:top-96'>
            <div className={incon.className}>
                <p className='text-lime-400 relative left-1 text-xl'>
                    Hi, my name is
                </p>
            </div>
            <h1 className='text-white uppercase'>
                <TypewriterEffect words={[{text: "Mussab", className:"text-white text-7xl"}, {text: "Imran", className:"text-white text-7xl"}]} />
            </h1>
        </div>
        {/* <BrutalButton title={'Call to action'} link='https://www.instagram.com/mussab_imran/'/> */}
        <CrossCard position={'top-50 left-50'} />
    </div>
  )
}

export default Hero