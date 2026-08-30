import SolarSystem from "@/components/SolarSystem";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Deena's Portfolio - Home",
	description: "Deena's Portfolio",
};

export default function Home() {
	return (
				<div className="flex overflow-hidden h-[calc(100dvh-8rem)] w-full max-w-screen">
				<SolarSystem />
			</div>
	);
}
