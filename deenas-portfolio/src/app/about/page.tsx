import { Metadata } from "next";
import Page from "@/components/Page";
import Card from "@/components/Card";

export const metadata: Metadata = {
	title: "Deena's Portfolio - About",
	description: "About me",
};

export default function About() {
	const description = `def __init__(self):
    self.name = "Deena Sun"
    self.grade = "Junior"
    self.graduation_year = 2027
    self.majors = ["Electrical Engineering and Computer Science", "Business Administration"]
    self.school = "University of California, Berkeley"`;

	const intro =
		"Hello, I'm Deena, a rising junior at UC Berkeley studying Electrical Engineering and Computer Science and Business Administration under the Management, Entrepreneurship, and Technology (M.E.T.) Program.";
	return (
		<div className="flex flex-col w-full items-start p-8 gap-4 max-w-7xl mx-auto">
			<Page image="/me.png" title="About" description={description}>
				<Card content={intro}>
					<p>Here&apos;s what I&apos;ve been up to recently:</p>
					<ul className="indent-bullets list-disc list-inside max-w-5xl space-y-2">
						<li>
							I&apos;m a member of Machine Learning @ Berkeley, UC
							Berkeley&apos;s premier machine learning organization.
						</li>
						<li>
							I&apos;m also a research assistant at Stanford AI Laboratory and
							Berkeley AI Research, where I&apos;m investigating how frontier AI
							agents will shape the future of cybersecurity.
						</li>
						<li>
							This summer, I&apos;m interning at Uber as a software and GenAI
							engineer on the AI Solutions team.
						</li>
						<li>
							In Fall 2025, I&apos;ll be part of CS 189/289 (Introduction to
							Machine Learning) course staff.
						</li>
					</ul>

					<p>
						My current passions are agentic AI, computer vision, and
						astronautics. <br />
						In my free time, I like to play jazz piano, rock climb, and visit
						art museums. I love dinosaurs and space!
					</p>

					<p>
						Thanks for visiting my portfolio! I look forward to sharing more of
						my moonshots with you!
					</p>
				</Card>
			</Page>
		</div>
	);
}
