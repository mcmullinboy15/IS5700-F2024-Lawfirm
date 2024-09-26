import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";

const data = {
  experience: [
    {
      jobTitle: "Software Engineer",
      companyName: "Space Dynamics Lab",
      dates: "September 2023 - Present",
      description: [
        "The Utah State University Space Dynamics Laboratory has been solving the technical challenges faced by the military, science community, and industry for more than six decades",
        "We provide multi-domain mission solutions with expertise in satellites, sensors and instruments, ground systems and data processing, and advanced autonomous systems.",
        "Learn more at: https://www.sdl.usu.edu/",
      ],
    },
    {
      jobTitle: "Database Engineer Intern",
      companyName: "The Church of Jesus Christ of Latter Day Saints",
      dates: "May 2023 - September 2023",
      description: [
        "Engineer on MSSQL team, managing over 50+ machines and DBs",
        "Refactored 15+ existing PowerShell scripts to interface with new MSSQL Servers",
        "Implemented Transparent Data Encryption on 100+ MSSQL Servers",
        "Troubleshot and fixed dozens of server issues, reducing down time by over 30% for affected systems",
      ],
    },
    {
      jobTitle: "Data Engineering Intern",
      companyName: "Walker Edison",
      dates: "May 2022 - September 2022",
      description: [
        "Implemented Python data pipelines to automate data ingestion into Snowflake data warehouse",
        "Resolved bugs and issues on Apache Airflow server, decreasing server downtime by 20%",
        "Produced resilient SQL queries for use by BI team to report on company analytics",
      ],
    },
  ],
};

export default function Jkamin0() {
  return (
    <div className="mt-8 w-full flex justify-center">
      <div className="bg-neutral-800 shadow-lg p-8 rounded-lg max-w-7xl w-full">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <p className="text-center font-bold text-3xl">Jacob Smith</p>
            <div className="flex justify-center items-center mt-4">
              <div className="flex gap-x-8">
                <a
                  className="text-blue-500 flex items-center"
                  href="https://www.linkedin.com/in/jacob-h-smith/"
                >
                  <LinkedInIcon className="mr-2" />
                  LinkedIn
                </a>
                <a
                  className="text-blue-500 flex items-center"
                  href="mailto:jacob_h_smith@outlook.com"
                >
                  <EmailIcon className="mr-2" />
                  Email
                </a>
                <a
                  className="text-blue-500 flex items-center"
                  href="https://google.com"
                >
                  <DescriptionIcon className="mr-2" />
                  Resume
                </a>
                <a
                  className="text-blue-500 flex items-center"
                  href="https://github.com/Jkamin0"
                >
                  <GitHubIcon className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
            <p className="text-center mt-4">
              Software Developer @ Space Dynamics Lab
            </p>
            <p className="text-center">Logan, Utah</p>
            <p className="text-center w-full mt-8 px-24">
              I am an MDATA Master's student at Utah State University through
              the Jon M. Huntsman School of Business. My coursework has provided
              a foundation built on software development, data engineering, and
              business intelligence.
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
        </div>

        <div className="mt-24">
          {data.experience.map((exp, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p>
                  {exp.jobTitle} @ {exp.companyName}
                </p>
                <p>({exp.dates})</p>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  {exp.description.map((desc, idx) => (
                    <p key={idx}>{desc}</p>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
