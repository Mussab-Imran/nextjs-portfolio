import React from 'react';
import { CrossCard } from './ui/CrossCard';
import { Inconsolata } from 'next/font/google';
import BrutalButton from './ui/BrutalButton';

const incon = Inconsolata({ subsets: ['latin'] });

const AboutMe = () => {
    return (
        <div className="container mx-auto max-w-screen-lg px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Left Column */}
                <div className="flex flex-col space-y-8">
                    {/* Title Section */}
                    <div className={incon.className}>
                        <h1 className="text-lime-400 text-7xl text-center md:text-left">
                            About Me
                        </h1>
                    </div>

                    {/* Text Section */}
                    <div className={incon.className}>
                        <p>
                            Hello! My name is Brittany, and I enjoy creating things that live on
                            the internet. My interest in web development started back in 2012
                            when I decided to try editing custom Tumblr themes—turns out hacking
                            together a custom reblog button taught me a lot about HTML & CSS!
                        </p>
                        <br></br>
                        <p>
                            Fast-forward to today, I’ve had the privilege of working at an
                            advertising agency, a start-up, a huge corporation, and a
                            student-led design studio. My main focus these days is building
                            accessible, inclusive products and digital experiences at
                            Upstatement for a variety of clients.
                        </p>
                    </div>
                    
                    <div className='flex flex-row space-x-3 justify-center md:justify-start'>
                        <div>
                            <BrutalButton title={'Instagram'} link='https://www.instagram.com/mussab_imran/'/>
                        </div>
                        <div>
                            <BrutalButton title={'LinkedIn'} link='https://www.linkedin.com/in/mussab-imran/'/>
                        </div>
                        <div>
                            <BrutalButton title={'GitHub'} link='https://github.com/Mussab-Imran'/>
                        </div>
                    </div>
                </div>

                {/* Right Column (Image Section) */}
                <div className=''>
                    <CrossCard
                        position={''}
                        imageUrl="https://gracious-kare-44cbc0.netlify.app/img/11.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
