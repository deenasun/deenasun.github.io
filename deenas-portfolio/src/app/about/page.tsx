import { Metadata } from "next";
import Introduction from "@/components/Introduction";
import Card from "@/components/Card";
import Gallery from "@/components/Gallery";
import { CurrentAdventures, Experience } from "@/constants/PortfolioConstants";

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

	const current = CurrentAdventures;
	const experience = Experience;

	return (
		<div className="flex flex-col w-full items-start p-8 gap-4 max-w-7xl mx-auto">
			<Introduction image="/me.png" title="About" description={description}>
				<Gallery width="100%" />
				<Card content={intro}>
					<p>
						I&apos;m passionate about agentic AI, computer vision, and
						astronautics.
					</p>
					<p>
						In my free time, I like to play jazz piano, rock climb, and visit
						art museums. I love dinosaurs, space, and books by Ernest Hemingway
						and Kurt Vonnegut!
					</p>
					<p>
						Thanks for visiting my portfolio. I look forward to sharing more of
						my moonshots with you!
					</p>
				</Card>
				<Card title={"What I'm currently up to..."} width="w-full">
					<ul className="indent-bullets list-disc list-inside max-w-5xl space-y-2">
						{current.map((item) => (
							<li key={item.title}>
								<b>{item.title}</b>: {item.description}
							</li>
						))}
					</ul>
				</Card>

				<Card title={"Experience"} width="w-full">
					<ul className="indent-bullets list-disc list-inside max-w-5xl space-y-2">
						{experience.map((item) => (
							<li key={item.title}>
								<b>{item.title}</b>: {item.description}
							</li>
						))}
					</ul>
				</Card>
			</Introduction>
		</div>
	);
}
