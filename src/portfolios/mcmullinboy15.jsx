import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const data = {
  experience: [
    {
      jobTitle: "Full-Stack Engineer",
      companyName: "Origin",
      dates: "December 2023 - Present",
      description: [
        "Origin is an award-winning Creative Technology company whose zero code CTV ad formats enable marketers to deliver dynamic and responsive ad experiences in the living room and outside the home.",
        "With unparalleled creative capabilities and proprietary ad serving technology, Origin’s off-the-shelf and custom solutions are trusted by agencies, brands, creative teams and programmatic platforms who want the ads they run to get the attention, engagement and outcomes they deserve.",
        "Founded by media veterans Stephen Strong and Fred Godfrey, Origin is driven by the belief that to win a viewer today, we must look beyond how it was done yesterday.",
        "Learn more at: originmedia.tv",
      ],
    },
    {
      jobTitle: "Full-Stack Engineer",
      companyName: "Freelance",
      dates: "June 2020 - Present",
      description: [
        "Project Lead at Podcast Automation Startup, 3rd-party API integration in React, Express, DynamoDB: podflow.ai",
        "Automated Payroll for GoalHome LLC. 4+ hours to 5 minutes. Factoring in overtime and unique day/night pay",
        "Nonprofit Frontend UI (bwbutah.org), highlighting mission and initiatives. (Vue, Custom CSS, Google Firebase)",
        "Secure Video Streaming (videojs) webpage. Instructional videos for textbook supplementation: prclinks.com",
      ],
    },
    {
      jobTitle: "Backend Engineer",
      companyName: "Rakemail (Startup)",
      dates: "May 2024 - Present",
      description: [
        "Rakemail is a startup that is focused on making email marketing easier for small businesses.",
        "We are building a platform that will allow businesses to easily create send email campaigns to their customers,",
        "with the add ability to interact with their abandoned carts within the email.",
      ],
    },
  ],
};

export default function McMullinBoy15() {
  return (
    <>
      <div className="mt-8 w-full grid grid-cols-3">
        <div className="col-span-2">
          <p className="text-center font-bold text-3xl">Andrew McMullin</p>
          <div className="flex justify-center items-center">
            <div className="flex gap-x-8">
              <a
                className="text-blue-500"
                href="https://www.linkedin.com/in/andrew-mcmullin/"
              >
                LinkedIn
              </a>
              <a className="text-blue-500" href="mailto:mcmullinand@gmail.com">
                Email
              </a>
              <a
                className="text-blue-500"
                href="https://portfolio.mcmullin.app/resume"
              >
                Resume
              </a>
              <a
                className="text-blue-500"
                href="https://github.com/mcmullinboy15"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="text-center">Software Developer @ OriginMedia</p>
          <p className="text-center">Greater Salt Lake City Area</p>
          <p className="text-center w-full mt-8 px-24">
            Passionate Software Engineer with a love for continuous learning and
            a deep interest in Automation, Optimizations, Machine Learning, and
            most of all Software/Full Stack Engineering. From my first semester
            at the community college, I discovered my passion for software
            engineering, and since then, I've been dedicated to expanding my
            knowledge and expertise in all software concepts.
          </p>
        </div>

        <div className="col-span-1 mx-auto">
          <img
            className="rounded-full"
            src="https://portfolio.mcmullin.app/assets/profile_pic_face.jpg"
            height="198"
            width="265"
          />
        </div>
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
