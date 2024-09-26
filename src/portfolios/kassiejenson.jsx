import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import PaletteIcon from '@mui/icons-material/Palette';

import { useState } from 'react';

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
  const [isColorChanged, setIsColorChanged] = useState(false);
  const [color, setColor] = useState('#FFFFFF');

  const toggleColor = () => {
    if (isColorChanged) {
      setColor('#FFFFFF');
    }
    setIsColorChanged(prev => !prev);
  };

  const handleMouseMoving = (event) => {
    if (isColorChanged) {
      const {clientX, clientY } = event;

      const red = Math.floor((clientX / window.innerWidth) * 255);
      const green = Math.floor((clientY / window.innerHeight) * 255);
      const blue = 220;

      setColor(`rgb(${red}, ${green}, ${blue})`);
    }
    
  }

    return (
      <>
        <div onMouseMove={handleMouseMoving} className="mt-8 w-full grid grid-cols-3">
          <div className="col-span-2">
              <p style={{color}} className="text-center font-bold text-5xl">Kassie Jenson</p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <a href="https://www.linkedin.com/in/kassandrajenson/" target="_blank" title="LinkedIn Profile" className="mx-4"><LinkedInIcon fontSize="large"></LinkedInIcon></a>
              <a href="mailto:kassandra.jenson@gmail.com" target="_blank" title="Email" className="mx-4"><AlternateEmailIcon fontSize="large"></AlternateEmailIcon></a>
              <a href="https://www.bmc.org/sites/default/files/Patient_Care/Specialty_Care/Pediatrics-Infectious-Diseases/Fake-Resume.pdf" target="_blank" title="Resume" className="mx-4"><ArticleIcon fontSize="large"></ArticleIcon></a>
              <a href="https://github.com/kassiejenson" target="_blank" title="GitHub" className="mx-4"><GitHubIcon fontSize="large"></GitHubIcon></a>
              <PaletteIcon style={{color}} className="mx-4" fontSize="large" title="Switch it up..." onClick={toggleColor}></PaletteIcon>
            </div>

            <div className='text-center'>
            <p>Undergrad student and aspiring software developer</p>
            <p>Northern Utah</p>
            <p className="w-full mt-8">Insert fun paragraph about me!!!</p>
            </div>
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