import { Metadata } from "next";
import Page from "@/components/Page";
import { PortfolioPages } from "@/constants/PortfolioConstants";
import Card from "@/components/Card";

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
	return (
		<div className="flex flex-col w-full items-start p-8 gap-4 max-w-7xl mx-auto">
			<Page
				image={PortfolioPages.projects.image}
				title="Projects"
				description={description}
			>
				<Card title="Coming soon" content="This page is still a work in progress. I&apos;ll link my projects here soon!" />
			</Page>
		</div>
	);
}
