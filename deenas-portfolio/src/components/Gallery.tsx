"use client";

import Image from "next/image";
import { useState } from "react";
import { PortfolioImages } from "@/constants/PortfolioConstants";
import Tooltip from "./Tooltip";

interface Image {
	src: string;
	description: string;
}

export default function Gallery({
	images = PortfolioImages,
	width = "100%",
}: {
	images?: Image[];
	width?: string;
}) {
	const [hoveredImage, setHoveredImage] = useState<string | null>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseEnter = (imageSrc: string) => {
		setHoveredImage(imageSrc);
	};

	const handleMouseLeave = () => {
		setHoveredImage(null);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		setMousePosition({ x: e.clientX, y: e.clientY });
	};

	return (
		<div
			className="flex flex-row overflow-x-clip self-center"
			style={{ width: width }}
		>
			<div
				className={`flex flex-row p-4 gap-4 overflow-x-scroll bg-space-blue rounded-md w-full`}
			>
				{images.map((image) => (
					<Image
						key={image.src}
						src={image.src}
						alt={image.description}
						width={200}
						height={200}
						className="rounded-md flex-shrink-0 object-cover w-auto h-[150px] sm:h-[200px] transition-opacity"
						onMouseEnter={() => handleMouseEnter(image.src)}
						onMouseLeave={handleMouseLeave}
						onMouseMove={handleMouseMove}
					/>
				))}
			</div>
			{hoveredImage && (
				<Tooltip
					text={
						images.find((img) => img.src === hoveredImage)?.description || ""
					}
					x={mousePosition.x}
					y={mousePosition.y}
				/>
			)}
		</div>
	);
}
