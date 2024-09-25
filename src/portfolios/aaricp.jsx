// Accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Search Bar
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

// vvv Search Bar vvv
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
// ^^^ Search Bar ^^^

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
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>

      <div>
        <h1 className="text-center font-bold text-3xl">Aaric Putt</h1>
        <div className="flex gap-x-8 text-blue-500 justify-center">
          <a href="https://google.com">Resume</a>
          <a href="https://github.com/AaricP">GitHub</a>
          <a href="mailto:a02279785@aggies.usu.edu">Email</a>
        </div>
        <p className="text-center">Student at Utah State University</p>
        <p className="text-center w-full mt-8">
          I'm doing my undergrad in Information Systems: Web Development
          Ephasis. I enjoy fixing things and learning. I especially love
          learning programming languages and writing programs that automate
          tasks.
        </p>
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
