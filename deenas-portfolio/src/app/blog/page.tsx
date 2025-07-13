import { Metadata } from "next";
import Page from "@/components/Page";
import { PortfolioPages } from "@/constants/PortfolioConstants";

export const metadata: Metadata = {
	title: "Deena's Portfolio - Blog",
	description: "Blog",
};

export default function Blog() {
	return (
		<Page image={PortfolioPages.blog.image} title="Blog" description="Some of my thoughts, learnings, and stories.">
			<Card />
		</Page>
	);
}

const Card = () => {
    return (
        <div className="flex flex-col gap-4 bg-space-blue rounded-md p-4">
            <h1 className="text-2xl font-bold">Coming soon</h1>
            <p className="text-lg">This page is still a work in progress. I&apos;ll link my blogs here as I create them!</p>
        </div>
    )
}