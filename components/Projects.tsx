"use client";
import React from 'react'
import { HoverEffect } from '@/components/ui/CardHover'
import { Inconsolata } from 'next/font/google';

const incon = Inconsolata({ subsets: ['latin'] });

const Projects = () => {

    const projects = [
        {
            title: "exif_extractor",
            description:
              "A chrome extension that allows users to extract exif data from images using a URL or stored locally on a PC",
            link: "https://github.com/Mussab-Imran/exif_extension",
          },
          {
            title: "email_leak_tracker",
            description:
              "A python script that checks to see if your email address has been shared between mailing lists without your consent or knowledge",
            link: "https://github.com/Mussab-Imran/email_leak_tracker",
          },
          {
            title: "nextjs-portfolio",
            description:
              "The website you are on right now! Built in Next.js with Tailwind and Aceternity UI",
            link: "https://github.com/Mussab-Imran/nextjs-portfolio",
          },
          {
            title: "Rentr",
            description:
              "An app that allows users to lend or rent items to make passive income on the side and help promote circular economy",
            link: "https://github.com/rehan-code/GH-team-23",
          },
    ];

    return (
        <div>
            <div>
            <div className="max-w-7xl mx-auto py-5 px-4 md:px-8 lg:px-5">
                <div className={incon.className}>
                <h2 className="mb-4 text-lime-400 text-7xl">
                    Projects
                </h2>
                </div>
                <div className={incon.className}>
                <p className="text-white text-sm md:text-base max-w-sm">
                    Some of the projects I have worked on over the years. You can find
                    more on my Github profile!
                </p>
                </div>
            </div>
            </div>
            <div className="max-w-7xl mx-auto py-5 px-4 md:px-8 lg:px-5">
                <HoverEffect items={projects}/>
            </div>
        </div>
    );
};

export default Projects