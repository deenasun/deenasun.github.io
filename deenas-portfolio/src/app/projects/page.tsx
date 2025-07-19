import { Metadata } from "next";
import Introduction from "@/components/Introduction";
import { PortfolioPages } from "@/constants/PortfolioConstants";
import LinkCard from "@/components/LinkCard";
import Information from "@/data/Information.json";

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
	
	const projects = Information["Projects"];
	return (
		<div className="flex flex-col w-full items-start p-8 gap-4 max-w-7xl mx-auto">
			<Introduction
				image={PortfolioPages.projects.image}
				title="Projects"
				description={description}
			>
				{projects.map((project) => (
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
