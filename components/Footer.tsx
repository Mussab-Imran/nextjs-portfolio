import React from 'react'
import { Inconsolata } from "next/font/google";


const incon = Inconsolata({ subsets: ['latin'] })

const Footer = () => {
    return (
    <div className="flex flex-col justify-center items-center">
        {/* <div className={incon.className}>
            <h1 className="text-lime-400 text-7xl text-center md:text-left">
             
            </h1>
        </div> */}

        <div className={incon.className}>
            <p className='text-s'>made with Next.js</p>
        </div>
    </div>
    );
};

export default Footer