import React from 'react';
import { Timeline } from './ui/Timeline';
import { Inconsolata } from 'next/font/google';

const incon = Inconsolata({ subsets: ['latin'] });

const WorkExperience = () => {
    
    const TimelineData = [
        {
          title: "Parliament of Canada",
          content: 
          
          <div>
            
            <h1 className='text-3xl text-lime-400'>
              Special Assistant, Strategic Research - Ottawa
            </h1>

            <h2 className='text-xl'>
              May 2024 - Present
            </h2>

            <p>
              As an Open-Source Research Specialist, I conduct comprehensive intelligence research on persons of interest, 
              analyzing publicly available data to assess potential risks and compliance issues. I develop detailed reports 
              that align with organizational objectives, highlighting key information and providing actionable insights for 
              senior management and stakeholders. To enhance research efficiency, I design and maintain custom applications 
              and tools that streamline operations, automate repetitive tasks, and improve data accuracy. Additionally, 
              I prepare and distribute daily newsletters and press summaries, ensuring that senior leadership and colleagues 
              are informed with the latest developments and pertinent information to support critical decision-making processes.
            </p>
          
          </div>,
        },
        {
          title: "University of Guelph",
          content: 
          
          <div>
            
            <h1 className='text-3xl text-lime-400'>
              Website Redesign Co-ordinator - Guelph
            </h1>

            <h2 className='text-xl'>
              June 2023 - September 2023
            </h2>

            <p>
              I led the revamp of websites across the Engineering and Biological Sciences departments 
              to achieve AODA’s AA conformance rating, improving accessibility compliance from 60% to 95%. 
              This work involved updating sites built with WordPress, PHP, and HTML. To streamline repetitive tasks, 
              I developed a Python script for automated adjustments. Additionally, I created PowerApps integrated with 
              SharePoint to optimize departmental workflows and support daily operations effectively.
            </p>
          
          </div>,
        },
        {
          title: "MERAK",
          content: 
          
          <div>
            
            <h1 className='text-3xl text-lime-400'>
              UX Desginer - Guelph
            </h1>

            <h2 className='text-xl'>
              May 2022 - August 2022
            </h2>

            <p>
              Collaborated with my team to redesign and implement a client's case management system. 
              Conducted research to identify pain points in the existing system and worked closely with 
              the client to develop iterative prototypes using JustInMind. Once the prototype was finalized, 
              I developed the solution using Angular, TypeScript, PostgreSQL, and Docker. Worked in an Agile 
              environment to ensure continuous feedback, user testing, and iteration, delivering a system aligned 
              with client goals and optimized for functionality.
            </p>
          
          </div>,
        },
        {
          title: "Unilock",
          content: 
          
          <div>
            
            <h1 className='text-3xl text-lime-400'>
              System Administrator - Georgetown
            </h1>

            <h2 className='text-xl'>
              September 2021 - December 2021
            </h2>

            <p>
              I was responsible for setting up new computers, installing domain-specific software, 
              and configuring network protocols to meet organizational needs. I also resolved IT help 
              desk tickets, addressing software and hardware issues, and maintained office equipment 
              such as printers and scanners. Additionally, I managed server backups, ensuring data integrity 
              and security through regular checks and an organized schedule, contributing to efficient IT operations 
              and user support.
            </p>
          
          </div>,
        },
        
    ];

    return(

        <div>
            <Timeline data={TimelineData} />
        </div>

    );
};

export default WorkExperience;