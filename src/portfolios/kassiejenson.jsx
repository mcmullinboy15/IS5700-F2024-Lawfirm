import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const data = {
    experience: [
        {jobTitle: 'Web Developer Assistant',
        companyName: 'Space Dynamics Laboratory',
        dates: 'Dec 2023 - Present',
        description: [
            'Wrote code utilizing Vue and TCL to enhance program management applications',
            'Communicated effectively with stakeholders via Jira to ensure common understanding',
            'Managed multiple tickets'
        ],
    },
        {jobTitle: 'Web Developer',
        companyName: 'Analytics Solution Center',
        dates: 'Jan 2024 - May 2024',
        description: [
            'testsetsetset Wrote code utilizing Vue and TCL to enhance program management applications',
            'Communicated easdfasdfffectively with stakeholders via Jira to ensure common understanding',
            'asdfadsf'
        ]}
    ]
}

export default function KassieJenson() {
    return (
      <>
        <div className="mt-8 w-full grid grid-cols-3">
          <div className="col-span-2">
            <p className="text-center font-bold text-3xl">Kassie Jenson</p>
            <div className="flex justify-center items-center">
              <div className="flex gap-x-8">
                {/* Linked in  */}
                <a
                  className="text-blue-500"
                  href="https://www.linkedin.com/in/kassandrajenson/"
                >
                  LinkedIn
                </a>
                {/* Email */}
                <a className="text-blue-500" href="mailto:kassandra.jenson@gmail.com">
                  Email
                </a>
                {/* Resume */}
                <a
                  className="text-blue-500"
                  href="RESUME LINK HERE"
                >
                  Resume
                </a>
                {/* GitHub */}
                <a
                  className="text-blue-500"
                  href="https://github.com/kassiejenson"
                >
                  GitHub
                </a>
              </div>
            </div>
            <p>Undergrad student and aspiring software developer</p>
            <p>Northern Utah</p>
            <p className="w-full mt-8">Fun paragraph about me!!!</p>
          </div>
  
          <div className="col-span-1 mx-auto">
            <img
              className="rounded-full"
              src="https://media.licdn.com/dms/image/v2/D5603AQGo9yrlhdiPmA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702005973278?e=1732752000&v=beta&t=zkFSMA04Ff_w-dsiKm7L-PDzKGxVO0UGiUl7-O3LArw"
              height="198"
              width="265"
            />
          </div>
        </div>

        <div className='mt-24'>
            {data.experience.map((exp, index) => (
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <p>
                            {exp.jobTitle} @ {exp.companyName}
                        </p>
                        <p>({exp.dates})</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            {exp.description.map((desc) => (
                                <p>{desc}</p>
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
      </>
    );
  }