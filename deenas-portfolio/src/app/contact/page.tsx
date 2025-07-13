import { Metadata } from "next";
import Page from "@/components/Page";
import { PortfolioPages } from "@/constants/PortfolioConstants";

export const metadata: Metadata = {
	title: "Deena's Portfolio - Contact",
	description: "Contact me",
};

export default function Contact() {
	return <Page image={PortfolioPages.contact.image} title="Contact" description="Here are ways you can reach out to me." />;
}
