import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';



export default function Hamnerben() {
const data ={
    experience: [
        {jobTitle: 'Software Developer',
            company: 'OriginMedia',
            location: 'Logan',
            date: '2021-Present',
            description: 'Junior software engineer. USU computer Science student.'},
        {jobTitle: 'Software Developer',
            company: 'OriginMedia',
            location: 'Logan',
            date: '2021-Present',
            description: 'Junior software engineer. USU computer Science student.'},
    ]
}

    return (
      <>
        <div className="mt-8 w-full grid grid-cols-3">
          <div className="col-span-2">
            <p className="text-center font-bold text-3xl">Ben Hamner</p>
            <div className="flex justify-center items-center">
              <div className="flex gap-x-8">
                <a
                  className="text-blue-500"
                  href="https://www.linkedin.com/in/ben-hamner-9bb32826b"
                >
                  LinkedIn
                </a>
                <a className="text-blue-500" href="mailto:hamnerben@gmail.com">
                  Email
                </a>
                <a
                  className="text-blue-500"
                  href=""
                >
                  Resume(Not Available)
                </a>
                <a
                  className="text-blue-500"
                  href="https://github.com/hamnerben"
                >
                  GitHub
                </a>
              </div>
            </div>
            <p className="text-center">Software Developer @ OriginMedia</p>
            <p className="text-center">Logan</p>
            <p className="text-center w-full mt-8 px-24">
              Junior software engineer. USU computer Science student.
            </p>
          </div>
  
          <div className="col-span-1 mx-auto">
            <img
              className="rounded-full"
              src=""
              height="198"
              width="265"
            />
          </div>
        </div>

        <div>
            {data.experience.map((exp, index) => (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {exp.jobTitle} at {exp.company}
        </AccordionSummary>
        <AccordionDetails>
            <p>{exp.location}</p>
            <p>{exp.date}</p>
          <p>{exp.description}</p>
        </AccordionDetails>
      </Accordion>

            ))}
        </div>

      </>
    );
  }
  