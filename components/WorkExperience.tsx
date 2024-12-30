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
              Special Assistant, Strategic Research
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
              Website Redesign Co-ordinator (CO-OP)
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
              UX Desginer (CO-OP)
            </h1>

            <h2 className='text-xl'>
              May 2022 - August 2022
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
          title: "Unilock",
          content: 
          
          <div>
            
            <h1 className='text-3xl text-lime-400'>
              System Administrator (CO-OP)
            </h1>

            <h2 className='text-xl'>
              September 2021 - December 2021
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
        
    ];

    return(

        <div>
            <Timeline data={TimelineData} />
        </div>

    );
};

export default WorkExperience;