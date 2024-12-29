import React from 'react'
import { Inconsolata } from 'next/font/google';

const incon = Inconsolata({ subsets: ['latin'] });

const Skills = () => {
    return (
        <div>

            <div>
            <div className="max-w-7xl mx-auto py-5 px-4 md:px-8 lg:px-5">
                <div className={incon.className}>
                <h2 className="mb-4 text-lime-400 text-7xl">
                    Skills
                </h2>
                </div>
            </div>
            </div>

            <div className='flex flex-row justify-center gap-x-[15vw]'>
                <div className='flex flex-col'>
                    <h5 className="mb-4 text-white text-2xl">
                        Languages
                    </h5>
                    <ul>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>C</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>C++</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Java</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Python</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Dart</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Javascript</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Typescript</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>HTML</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>CSS</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>R</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Bash</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="mb-4 text-white text-2xl">
                        Frameworks
                    </h5>
                </div>

                <div>
                    <h5 className="mb-4 text-white text-2xl">
                        Tools
                    </h5>
                </div>
            </div>

        </div>
    );
};

export default Skills