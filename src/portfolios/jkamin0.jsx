import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function Jkamin0() {
  return (
    <>
      <div className="mt-8 w-full grid grid-cols-3">
        <div className="col-span-2">
          <p className="text-center font-bold text-3xl">Jacob Smith</p>
          <div className="flex justify-center items-center">
            <div className="flex gap-x-8">
              <a
                className="text-blue-500"
                href="https://www.linkedin.com/in/jacob-h-smith/"
              >
                LinkedIn
              </a>
              <a className="text-blue-500" href="mailto:jkamino@live.com">
                Email
              </a>
              <a className="text-blue-500" href="https://google.com">
                Resume
              </a>
              <a className="text-blue-500" href="https://github.com/Jkamin0">
                GitHub
              </a>
            </div>
          </div>
          <p className="text-center">Software Developer @ Space Dynamics Lab</p>
          <p className="text-center">Logan, Utah</p>
          <p className="text-center w-full mt-8 px-24">
            I am an information systems (IS) major at Utah State University
            through the Jon M. Huntsman School of Business with a minor in
            computer science (CS). My coursework has provided a foundation built
            on software development, data engineering, and business
            intelligence.
          </p>
        </div>

        <div className="col-span-1 mx-auto">
          <img
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/97633474?v=4"
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
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Accordion 3
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}
