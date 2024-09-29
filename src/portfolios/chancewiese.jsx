import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

export default function Portfolio() {
  const [tabValue, setTabValue] = useState("projects");
  const darkBlue = "#1e3a8a";
  const lightBlue = "#3b82f6";

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const TabPanel = ({ value, index, children }) => (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );

  const AboutSection = () => (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
      <section>
        <h2 className="text-4xl font-bold mb-6">Hello! I'm Chance...</h2>
        <p className="mb-4">
          I'm a student at Utah State University. I'm studying Information
          Systems with an emphasis in Data Engineering. I'm concurrently working
          on a Masters in Managment Information Systems (MMIS) though USU as
          well.
        </p>
        <p className="mb-4">
          In recent years I've worked a lot in SQL and Typescript, but also have
          experience in Python, HTML, CSS, and Tableau.
        </p>
        <p className="mb-4">
          I'm currently working at Datafy as a Data Engineering Intern. I'm
          helping develop tools for geolocation data and marketing purposes. On
          top of that, I query databases for targetted marketing campaigns, and
          market exploration and development.
        </p>
        <div className="space-x-4">
          <a
            href="https://www.linkedin.com/in/chancewiese"
            className={`bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-500`}
            target="_blank"
          >
            View LinkedIn
          </a>
          <a
            href="https://github.com/chancewiese"
            className={`bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-500`}
            target="_blank"
          >
            View GitHub
          </a>
        </div>
      </section>
      <div className="flex justify-center items-center">
        <img
          src="https://ca.slack-edge.com/T01JP8584UE-U06S1N5PZ5J-cecc9107f9ff-512"
          alt="Chance Wiese"
          className="rounded-lg max-w-full h-auto"
        />
      </div>
    </main>
  );

  const Projects = () => (
    <TabPanel value={tabValue} index="projects">
      <h3 className="text-2xl font-bold mb-4">Projects</h3>
      <p>Some of the side projects I'm currently working on:</p>
      {/* Add your projects here */}
    </TabPanel>
  );

  const Experience = () => (
    <TabPanel value={tabValue} index="experience">
      <h3 className="text-2xl font-bold mb-4">Experience</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-semibold">Data Engineering Intern</h4>
          <p className="text-gray-600">Datafy | March 2024 - Present</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Utilize SQL to query databases for marketing campaign targeting
              and backend web development using TypeScript/JavaScript
            </li>
            <li>
              Implement scripts for database data transfer and front-end display
              for marketing analytics
            </li>
            <li>
              Assist in developing web applications and tools for internal use
            </li>
            <li>
              Collaborate with the marketing team to optimize campaign targeting
            </li>
            <li>Continuously update code to improve efficiency</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Customer Success Rep</h4>
          <p className="text-gray-600">Tukios | Sep 2021 - March 2024</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Provided front-line support for customers across multiple
              platforms
            </li>
            <li>
              Managed inbound calls and emails, offering expert guidance on
              platform usage and troubleshooting
            </li>
            <li>
              Utilized website-building platform (Duda) to design and customize
              websites
            </li>
            <li>Conducted customer training on platform adoption and usage</li>
            <li>
              Developed reports and dashboards using Google Sheets, HubSpot, and
              SQL
            </li>
            <li>Resolved financial disputes and managed vendor payouts</li>
            <li>Implemented automated processes to streamline workflows</li>
            <li>
              Provided mentorship to new employees and led team members on
              special projects
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Recreation Employee</h4>
          <p className="text-gray-600">
            South Weber City | Mar 2018 - Sep 2021
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Organized sports teams, managed rentals, and coordinated events
            </li>
            <li>
              Oversaw member accounts and their organization within systems
            </li>
            <li>Assembled, coached, and refereed sports teams</li>
            <li>
              Designed marketing materials to promote events and activities
            </li>
            <li>
              Managed facility and equipment rentals, facility upkeep, and event
              planning
            </li>
          </ul>
        </div>
      </div>
    </TabPanel>
  );

  const Skills = () => (
    <TabPanel value={tabValue} index="skills">
      <h3 className="text-2xl font-bold mb-4">Skills</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-xl font-semibold mb-2">Technical Skills</h4>
          <ul className="list-disc pl-5">
            <li>SQL</li>
            <li>Python</li>
            <li>Excel/Google Sheets</li>
            <li>Database Management Software</li>
            <li>Tableau</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Soft Skills</h4>
          <ul className="list-disc pl-5">
            <li>Customer Service</li>
            <li>Team Collaboration</li>
            <li>Problem Solving</li>
            <li>Project Management</li>
            <li>Communication</li>
            <li>Mentorship</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </TabPanel>
  );

  const Education = () => (
    <TabPanel value={tabValue} index="education">
      <h3 className="text-2xl font-bold mb-4">Education</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-xl font-semibold">Utah State University</h4>
          <p>
            Bachelor's in Information Systems - Emphasis in Data Engineering
          </p>
          <p className="text-gray-600">Expected December 2024</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Weber State University</h4>
          <p>Associate's in General Studies</p>
          <p className="text-gray-600">December 2021</p>
        </div>
      </div>
    </TabPanel>
  );

  const TabNavigator = () => (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="portfolio sections"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: darkBlue,
            transition: "background-color 0.3s",
          },
          "& .MuiTab-root": {
            color: "rgba(0, 0, 0, 0.6)",
            position: "relative",
            "&.Mui-selected": {
              color: darkBlue,
            },
            "&:not(.Mui-selected):hover": {
              color: lightBlue,
              "&::after": {
                content: '""',
                position: "absolute",
                left: "25%",
                bottom: 0,
                width: "50%",
                height: "2px",
                backgroundColor: lightBlue,
                transition: "background-color 0.3s, width 0.3s, left 0.3s",
              },
            },
          },
        }}
      >
        <Tab value="projects" label="Projects" />
        <Tab value="experience" label="Experience" />
        <Tab value="skills" label="Skills" />
        <Tab value="education" label="Education" />
      </Tabs>
    </Box>
  );

  const TabContent = () => (
    <>
      <Projects />
      <Experience />
      <Skills />
      <Education />
    </>
  );

  return (
    <div
      className="min-h-screen flex justify-center items-center p-4 text-black"
      style={{
        backgroundColor: darkBlue,
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-3xl w-full max-w-6xl p-8 flex flex-col">
        <header className="flex justify-between items-center mb-10">
          <h1 className="font-bold text-lg">CHANCE WIESE</h1>
          <nav className="space-x-6">
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </nav>
        </header>
        <AboutSection />
        <TabNavigator />
        <TabContent />
        <footer className="mt-auto py-4">
          <div className="max-w-6xl mx-auto px-4 flex justify-end">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Chance Wiese. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
