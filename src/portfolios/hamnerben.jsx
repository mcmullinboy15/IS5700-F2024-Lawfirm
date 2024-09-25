import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Hamnerben() {
const data ={
    experience: [
        {jobTitle: 'Software Developer',
            company: 'Zendo Health',
            location: 'Pleasant Grove UT',
            date: 'May 2024-Present',
            description: 'Contributed to front-end development of a React-based web application. Implemented UI updates and enhancements, ensuring a responsive and user-friendly design. Performed bug fi xes and optimized existing code for improved performance and maintainability. Collaborated with cross-functional teams to address design and functionality issues. Part-time role maintaining and updating features to align with evolving project requirements. Applied best practices in JavaScript (ES6+), HTML, and React.js to deliver high-quality code.'},
        {jobTitle: 'Software Developer',
            company: 'NERD UNITED DAO LLC',
            location: 'Lehi, UT',
            date: 'May 2023 - August 2023',
            description: 'Led testing eff orts, ensuring quality and functionality of software products. Developed and executed test plans, collaborating with cross-functional teams. Performed regression, functional, usability, performance, and security testing. Used automated testing to improve effi ciency and streamline repetitive tasks. Contributed to Agile processes, participating in planning and retrospectives. Conducted exploratory testing and validated user stories. Maintained test documentation and reviewed requirements for early defect prevention. Improved QA'},
    ]
}

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                <LinkedInIcon />
                </a>
                <a className="text-blue-500" href="mailto:hamnerben@gmail.com">
                  <EmailIcon />
                </a>
            
                <a
                  className="text-blue-500"
                  href="https://github.com/hamnerben"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
            <p className="text-center">Software Developer at Zendo Health</p>
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

        <div className='px-8'>
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

        <div className='px-8'>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
    

      </>
    );
  }
  