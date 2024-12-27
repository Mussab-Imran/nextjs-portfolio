"use client";
import React from 'react'
import { HoverEffect } from '@/components/ui/CardHover'
import { Inconsolata } from 'next/font/google';

const incon = Inconsolata({ subsets: ['latin'] });

const Projects = () => {

    const projects = [
        {
            title: "Stripe",
            description:
              "A technology company that builds economic infrastructure for the internet.",
            link: "https://stripe.com",
          },
          {
            title: "Stripe",
            description:
              "A technology company that builds economic infrastructure for the internet.",
            link: "https://stripe.com",
          },
          {
            title: "Stripe",
            description:
              "A technology company that builds economic infrastructure for the internet.",
            link: "https://stripe.com",
          },
          {
            title: "Stripe",
            description:
              "A technology company that builds economic infrastructure for the internet.",
            link: "https://stripe.com",
          },
          {
            title: "Stripe",
            description:
              "A technology company that builds economic infrastructure for the internet.",
            link: "https://stripe.com",
          },
          {
            title: "Stripe",
            description:
              "A technology company that builds economic infrastructure for the internet.",
            link: "https://stripe.com",
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
                    I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
                    a timeline of my journey.
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