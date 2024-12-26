import React from 'react'
import { CrossCard } from './ui/CrossCard';
import { Inconsolata } from "next/font/google";

const incon = Inconsolata({ subsets: ['latin'] })

const AboutMe = () => {
    return (
        <div className="grid grid-rows-2 grid-cols-2">

            <div className="col-span-2">
                <div className={incon.className}>
                    <h1 className="text-lime-400 text-7xl">
                        About Me
                    </h1>
                </div>
            </div>

            <div>
                <p>
                    public/images/: This folder contains all the images. You can organize them however you'd like inside the images directory, e.g., logos, profile pictures, or product images.
                </p>
            </div>

            <div>
                <CrossCard position={'top-15 left-50'} imageUrl="https://gracious-kare-44cbc0.netlify.app/img/11.jpg" />
            </div>

        </div>
    );
};


export default AboutMe