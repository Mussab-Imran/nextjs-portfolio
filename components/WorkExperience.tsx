import React from 'react';
import { Timeline } from './ui/Timeline';

const WorkExperience = () => {
    
    const TimelineData = [
        {
          title: "Started Aceternity",
          content: <p>This is where I began my journey with Aceternity, learning the ropes and setting goals.</p>,
        },
        {
          title: "Released First Version",
          content: <p>After months of hard work, the first version of Aceternity was released, marking a big milestone.</p>,
        },
        {
          title: "Acquired First Customers",
          content: <p>Acquiring the first customers was an exciting step, validating all the effort I had put in so far.</p>,
        },
        
    ];

    return(

        <div>
            <Timeline data={TimelineData} />
        </div>

    );
};

export default WorkExperience;