import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Deena's Portfolio - Home",
	description: "Deena's Portfolio",
};

export default function NotFound() {
	return (
		<div className="flex flex-1 items-center justify-center text-center">
			<p>404 | page ∉ Deena&apos;s portfolio</p>
		</div>
	);
}
