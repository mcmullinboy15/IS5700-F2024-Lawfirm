import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const data = {
  experience: [
    {
      jobTitle: "Operations Support Specialist",
      companyName: "StoryBound",
      dates: "Aug 2023 - Present",
      description: [
        "Managing employees by assigning tasks and answering questions",
        "Setting up multiple computers/devices to be used by warehouse employees and managers, for research, sales, inventory tracking, and other purposes",
        "Taking on side projects like assembling newly purchased machines and repairing malfunctions with inventory packaging machines",
      ],
    },
    {
      jobTitle: "Database & Inventory Manager",
      companyName: "ATAT Inc.",
      dates: "Feb 2022 - Aug 2023",
      description: [
        "Monitored a relational database for data quality issues and functionality to ensure proper business decisions were being made",
        "Prevented inventory stockouts on hundreds of SKUs by collecting data with a relational database and analyzing it to make decisions on inventory purchase quantities",
        "Built a program in Excel with Visual Basic for employees to look up information on our inventory",
      ],
    },
    {
      jobTitle: "Warehouse Associate",
      companyName: "ATAT Inc.",
      dates: "May 2021 - Feb 2022",
      description: [
        "Sorted, stacked, packaged, and boxed books.",
        "Loaded and unloaded trucks using pallet jacks and forklifts.",
      ],
    },
  ],
};

export default function AaricP() {
  return (
    <>
      <div>
        <h1 className="w-[940px] pt-8 px-3 pb-0">AaricP</h1>
      </div>
      
      <div className="mt-24">
        {data.experience.map((exp, index) => (
          <Accordion>
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
