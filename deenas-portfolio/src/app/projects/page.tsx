import { Metadata } from "next";
import Page from "@/components/Page";
import { PortfolioPages } from "@/constants/PortfolioConstants";

export const metadata: Metadata = {
	title: "Deena's Portfolio - Projects",
	description: "Projects",
};

export default function Projects() {
	return (
		<Page image={PortfolioPages.projects.image} title="Projects" description="Learn more about my projects.">
			<Card />
		</Page>
	);
}

const Card = () => {
	return (
		<div className="flex flex-col gap-4 bg-space-blue rounded-md p-4">
			<h1 className="text-2xl font-bold">Coming soon</h1>
			<p className="text-lg">
				This page is still a work in progress. I&apos;ll be linking my projects soon!
			</p>
		</div>
	);
};