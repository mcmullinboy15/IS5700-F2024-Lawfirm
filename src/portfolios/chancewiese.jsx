import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function ChanceWiese() {
   return (
      <>
         <div className="mt-8 w-full grid grid-cols-3">
            <div className="col-span-2">
               <p className="text-center font-bold text-3xl">Chance Wiese</p>
               <div className="flex justify-center items-center">
                  <div className="flex gap-x-8">
                     <a
                        className="text-blue-500"
                        href="ttps://www.linkedin.com/in/chancewiese"
                     >
                        LinkedIn
                     </a>
                     <a
                        className="text-blue-500"
                        href="mailto:chancewiese0925@gmail.com"
                     >
                        Email
                     </a>
                     <a className="text-blue-500" href="">
                        Resume
                     </a>
                     <a
                        className="text-blue-500"
                        href="https://github.com/chancewiese"
                     >
                        GitHub
                     </a>
                  </div>
               </div>
               <p className="text-center">Engineering Intern @ Datafy</p>
               <p className="text-center">Ogden Utah Area</p>
               <p className="text-center w-full mt-8 px-24">
                  Passionate Software Engineer with a love for continuous
                  learning and a deep interest in Automation, Optimizations,
                  Machine Learning, and most of all Software/Full Stack
                  Engineering. From my first semester at the community college,
                  I discovered my passion for software engineering, and since
                  then, I've been dedicated to expanding my knowledge and
                  expertise in all software concepts.
               </p>
            </div>

            <div className="col-span-1 mx-auto">
               <img
                  className="rounded-full"
                  src="https://ca.slack-edge.com/T01JP8584UE-U06S1N5PZ5J-cecc9107f9ff-512"
                  height="198"
                  width="265"
               />
            </div>
            <div>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1-content"
                     id="panel1-header"
                  >
                     Accordion 1
                  </AccordionSummary>
                  <AccordionDetails>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse malesuada lacus ex, sit amet blandit leo
                     lobortis eget.
                  </AccordionDetails>
               </Accordion>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel2-content"
                     id="panel2-header"
                  >
                     Accordion 2
                  </AccordionSummary>
                  <AccordionDetails>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse malesuada lacus ex, sit amet blandit leo
                     lobortis eget.
                  </AccordionDetails>
                  <AccordionActions>
                     <Button>Cancel</Button>
                     <Button>Agree</Button>
                  </AccordionActions>
               </Accordion>
            </div>
         </div>
      </>
   );
}
