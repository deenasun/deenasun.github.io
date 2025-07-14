import SolarSystem from "@/components/SolarSystem";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Deena's Portfolio - Home",
	description: "Deena's Portfolio",
};

export default function Home() {
	return (
		<div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen">
			<main className="flex h-full w-full max-w-screen">
				<SolarSystem />
			</main>
		</div>
	);
}
