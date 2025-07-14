import { Metadata } from "next";
import Page from "@/components/Page";
import { PortfolioPages } from "@/constants/PortfolioConstants";

export const metadata: Metadata = {
	title: "Deena's Portfolio - Contact",
	description: "Contact me",
};

export default function Contact() {
	const description = `def greet(self):
	print("Hello world!")`;
	return (
		<div className="flex flex-col w-full items-start p-8 gap-4 max-w-7xl mx-auto">
			<Page
				image={PortfolioPages.contact.image}
				title="Contact"
				description={description}
			/>
			<div className="flex flex-col gap-4 bg-space-blue rounded-md p-4">
				<p>Here are ways you can connect with me:</p>
				<ul className="indent-bullets list-disc list-inside max-w-5xl space-y-2">
					<li>
						<a
							href="mailto:deenasun@berkeley.edu"
							className="underline-links"
						>
							Email: deenasun [at] berkeley [dot] edu
						</a>
					</li>
					<li>
						<a
							href="https://github.com/deenasun"
							className="underline-links"
						>
							GitHub: www.github.com/deenasun
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/deenasun/"
							className="underline-links"
						>
							LinkedIn: www.linkedin.com/in/deenasun
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
