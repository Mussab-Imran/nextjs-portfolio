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
                            Hi I'm Mussab, a full-stack developer based out of Guelph, ON. I am a University of Guelph 
                            grad with a major in Computer Science with a minor in Geomatics. 
                            I love creating products that solve real world problems and help improve lives.
                        </p>
                        <br></br>
                        <p>
                            Apart from programming I am an avid photographer and videographer (check out my recent work on 
                            instagram). When I am not out taking pictures you can find me laying back and enjoying some video games
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
                        <div>
                            <div>
                                <BrutalButton title={'Resume'} link='/resume.pdf'/>
                            </div>
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
