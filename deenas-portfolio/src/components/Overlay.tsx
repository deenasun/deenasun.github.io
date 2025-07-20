import Link from "next/link";
import Image from "next/image";
import { PortfolioPages } from "@/constants/PortfolioConstants";

interface OverlayProps {
	isMobile: boolean;
}

export default function Overlay({ isMobile }: OverlayProps) {
	return (
		<div
			className={`absolute z-10 text-cream font-roboto-mono ${
				isMobile ? "top-2 left-2 right-4 max-w-none" : "top-8 left-8 max-w-xs"
			}`}
		>
			<p
				className={`opacity-80 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 ${
					isMobile ? "text-sm" : "text-base"
				}`}
			>
				Click on the orbiting planets to explore my portfolio&apos;s universe!
			</p>
			<div
				className={`flex w-fit mt-2 ${
					isMobile ? "flex-row flex-wrap gap-2" : "flex-col"
				}`}
			>
				{Object.values(PortfolioPages).map((page) => {
					switch (page.name) {
						case "home":
							return null;
						default:
							return (
								<Link 
									key={page.path} 
									href={page.path} 
									className={`flex items-center underline-links ${
										isMobile ? "text-xs" : "mx-2"
									}`}
								>
									<Image 
										src={page.image} 
										alt={page.name} 
										width={isMobile ? 16 : 20} 
										height={isMobile ? 16 : 20} 
										className="inline-block mr-2 align-middle" 
									/>
									{page.name}
								</Link>
							);
					}
				})}
			</div>
		</div>
	);
} 