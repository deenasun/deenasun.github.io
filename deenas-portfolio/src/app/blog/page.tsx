import { Metadata } from "next";
import Introduction from "@/components/Introduction";
import { PortfolioPages } from "@/constants/PortfolioConstants";
import Card from "@/components/Card";

export const metadata: Metadata = {
	title: "Deena's Portfolio - Blog",
	description: "Blog",
};

export default function Blog() {
	const description = `def blog(self):
	self.blogs = ["thoughts", "learnings", "stories"]
	for blog in self.blogs:
		self.write(blog)
	`;
	return (
		<div className="flex flex-col w-full items-start p-8 gap-4 max-w-7xl mx-auto">
			<Introduction
				image={PortfolioPages.blog.image}
				title="Blog"
				description={description}
			>
				<Card
					title="Coming soon"
					content="This page is still a work in progress. I'll link my blogs here as I create them!"
				/>
			</Introduction>
		</div>
	);
}