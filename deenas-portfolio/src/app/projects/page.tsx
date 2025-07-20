import { Metadata } from "next";
import Introduction from "@/components/Introduction";
import { PortfolioPages } from "@/constants/PortfolioConstants";
import LinkCard from "@/components/LinkCard";
import { ProjectInfo } from "@/constants/PortfolioConstants";

interface Project {
	title: string;
	description: string;
	link: string;
	image: string;
	github: string;
}

export const metadata: Metadata = {
	title: "Deena's Portfolio - Projects",
	description: "Projects",
};

export default function Projects() {
	const description = `def get_projects(self):
	while True:
		self.learn()
		self.build()
		self.launch()`;
	
	const projects = ProjectInfo;
	
	return (
		<div className="flex flex-col w-full items-start p-8 gap-4 max-w-7xl mx-auto">
			<Introduction
				image={PortfolioPages.projects.image}
				title="Projects"
				description={description}
			>
				{projects.map((project: Project) => (
					<LinkCard
						key={project.title}
						title={project.title}
						content={project.description}
						link={project.link}
						image={project.image}
						github={project.github}
					/>
				))}
			</Introduction>
		</div>
	);
}
