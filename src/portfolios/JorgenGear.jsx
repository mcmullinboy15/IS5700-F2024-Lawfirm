import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const data = {
    experience: [
        {jobTitle: "Lorem Ipsum",
            companyName: "Finibus Bonorum et Malorum",
            dates: "May 2021 - Present",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
        },
        {jobTitle: "Lorem Ipsum",
            companyName: "Finibus Bonorum et Malorum",
            dates: "May 2021 - Present",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
        },
        {jobTitle: "Lorem Ipsum",
            companyName: "Finibus Bonorum et Malorum",
            dates: "May 2021 - Present",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
        },
    ]
}

export default function Rhett() {
    return (
        <>
            <div className="mt-8 w-full grid grid-cols-3">
                <div className="col-span-2">
                    <p className="text-center font-bold text-3xl">Rhett Jorgensen</p>
                    <div className="flex justify-center items-center">
                        <div className="flex gap-x-8">
                            {/* Linked in  */}
                            <a
                                className="text-blue-500"
                                href="https://www.linkedin.com/in/rhett-jorgensen/"
                            >
                                LinkedIn
                            </a>
                            {/* Email */}
                            <a className="text-blue-500" href="mailto:rhettjorg@gmail.com">
                                Email
                            </a>
                            {/* Resume */}
                            <a
                                className="text-blue-500"
                                href="https://www.linkedin.com/in/rhett-jorgensen/"
                            >
                                Resume
                            </a>
                            {/* GitHub */}
                            <a
                                className="text-blue-500"
                                href="https://github.com/JorgenGear"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                    <p className="text-center">Graduate Student at Utah State University</p>
                    <p className="text-center">Logan, Utah</p>
                    <p className="text-center w-full mt-8 px-24">
                        I am currently a student at USU Working towards my Master's of Management of Information Systems.
                        I have a wide foundation of skills in information systems. I am always looking to grow deeper into
                        my skillset. I have a passion for designing new products. My designs are always centered around
                        functionality. I am currently working on certifications in data engineering and full stack development.
                    </p>
                </div>

                <div className="col-span-1 mx-auto">
                    {/* <img
                        className="rounded-full"
                        src="put source to photo here"
                        height="198"
                        width="265"
                    /> */}
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
                            {exp.jobTitle} @ {exp.companyName} ({exp.dates})
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    ))}
                </div>
        </>
    );
}