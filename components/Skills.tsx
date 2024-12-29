import React from 'react'
import { Inconsolata } from 'next/font/google';

const incon = Inconsolata({ subsets: ['latin'] });

const Skills = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-5 px-4 md:px-8 lg:px-5">
                <div className={incon.className}>
                <h2 className="mb-4 text-lime-400 text-7xl">
                    Skills
                </h2>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 justify-center px-[30vw] md:px-[9vw] md:justify-items-center'>
                <div>
                    <h5 className="mb-4 text-white text-2xl">
                        Languages
                    </h5>
                    <ul>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Python</span>
                        </li>
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
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>PostgreSQL</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>MySQL</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Firebase</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Assembly</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Ada</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Fortran</span>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h5 className="mb-4 mt-[8vh] md:mt-[0vh] text-white text-2xl">
                        Frameworks
                    </h5>

                    <ul>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>React</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Next.js</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Angular</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Flask</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Wordpress</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Docker</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>JUnit</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="mb-4 mt-[8vh] md:mt-[0vh] text-white text-2xl">
                        Tools
                    </h5>

                    <ul>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Figma</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>JustInMind</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Powerapps</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Git & Github</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Google Lighthouse</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Gradle</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Make</span>
                        </li>
                        <li>
                            <span className='text-lime-400'>&gt;</span> <span>Azure DevOps</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Skills