import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
	timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";

const data = {
	experience: [
		{
			jobTitle: "iOS Instructor",
			companyName: "Mountainland Technical College",
			dates: "October 2018 - Present",
			description: [
				"Taught Mountainland Tech students the essentials of iOS Development, from the basics of the Swift Language to having fully feature-complete apps in the App Store.",
				"Focused on teaching SwiftUI and helping students build practical iOS applications.",
				"Guided students in understanding the fundamentals of mobile app architecture and best practices in iOS development.",
			],
		},
		{
			jobTitle: "Mobile Software Engineer",
			companyName: "Sonos, Inc.",
			dates: "July 2022 - June 2024",
			description: [
				"Contributed to the development of cutting-edge mobile applications at Sonos, with a strong emphasis on SwiftUI.",
				"Collaborated with cross-functional teams to deliver seamless audio experiences across multiple platforms.",
				"Optimized the performance of Sonos' mobile apps and integrated new features, ensuring high-quality user experience.",
			],
		},
		{
			jobTitle: "Senior Mobile Engineer (iOS)",
			companyName: "SoFi",
			dates: "July 2019 - July 2022",
			description: [
				"Developed and maintained key features in SoFi’s mobile application, using Swift and SwiftUI.",
				"Worked closely with product teams to enhance the user interface and improve mobile app performance.",
				"Led the design and implementation of secure, scalable, and reliable mobile solutions for financial services.",
			],
		},
		{
			jobTitle: "iOS Developer",
			companyName: "Software Technology Group",
			dates: "June 2017 - July 2019",
			description: [
				"Developed and supported internationally distributed iOS apps, focusing on performance and scalability.",
				"Designed and maintained reusable libraries and frameworks to streamline app development.",
				"Collaborated with mobile and web architecture teams to align project goals and ensure successful app delivery.",
				"Performed code reviews, refactored existing apps, and ensured compliance with industry standards.",
				"Distributed apps via the App Store and Test Flight, conducting thorough testing and continuous improvement.",
			],
		},
		{
			jobTitle: "iOS Instructor & Mentor",
			companyName: "DevMountain",
			dates: "October 2016 - June 2017",
			description: [
				"Provided instruction and mentorship for students in a 12+ week immersive iOS development program.",
				"Introduced students to UIKit, MVC design patterns, RESTful APIs, and data persistence using CoreData.",
				"Guided students through the process of building and deploying iOS applications to the App Store.",
			],
		},
		{
			jobTitle: "iOS Developer",
			companyName: "DevMountain Student Developers",
			dates: "June 2016 - October 2016",
			description: [
				'Developed "NewMu- for Spotify", an app that generates playlists based on user preferences by integrating with the Spotify SDK using Objective-C and Swift.',
				"Utilized CoreData, AVFoundation, and MediaPlayer frameworks to enhance app functionality and user engagement.",
			],
		},
	],
};

export default function RyanPlitt() {
	return (
		<>
			<div className="mt-8 w-full grid grid-cols-3">
				<div className="col-span-2">
					<p className="text-center font-bold text-3xl">Ryan Plitt</p>
					<div className="flex justify-center items-center">
						<div className="flex gap-x-8">
							<a className="text-blue-500" href="https://www.linkedin.com/in/ryanplitt/">
								LinkedIn
							</a>
							<a className="text-blue-500" href="mailto:ryanplitt@gmail.com">
								Email
							</a>
							<a className="text-blue-500" href="https://github.com/ryanplitt">
								GitHub
							</a>
						</div>
					</div>
					<p className="text-center">Mobile Software Engineer at Fidelity Investments</p>
					<p className="text-center">Salt Lake City</p>
					<p className="text-center w-full mt-8 px-24">
						Experienced iOS Instructor with a demonstrated history of working in iOS. Skilled in
						Swift 6.0, Objective-C, Xcode, Git, JSON Parsing, MVC Design Pattern, CloudKit and
						CoreData. Strong professional graduated from DevMountain iOS Immersive Program.
					</p>
				</div>

				<div className="col-span-1 mx-auto">
					<img
						className="rounded-full"
						src="data:image/jpeg;base64,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"
						height="198"
						width="265"
					/>
				</div>
			</div>
			<div className="py-24 w-4/5">
				<Timeline
					sx={{
						[`& .${timelineOppositeContentClasses.root}`]: {
							flex: 0.5,
						},
					}}
				>
					{data.experience.map((exp) => (
						<TimelineItem>
							<TimelineOppositeContent variant="h6">
								<Typography variant="h7" component="span">
									{exp.companyName}
								</Typography>
								<Typography color="text.secondary">{exp.dates}</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Typography variant="h7" component="span">
									{exp.jobTitle}
								</Typography>
								<Typography color="text.secondary">{exp.description}</Typography>
							</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>
			</div>
		</>
	);
}
