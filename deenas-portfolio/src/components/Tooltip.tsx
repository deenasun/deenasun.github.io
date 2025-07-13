import Image from "next/image";
import { PortfolioPages } from "@/constants/PortfolioConstants";

export default function Tooltip({
	tooltipKey,
	x,
	y,
}: {
	tooltipKey: string;
	x: number;
	y: number;
    }) {
	const page = PortfolioPages[tooltipKey as keyof typeof PortfolioPages] || PortfolioPages['home'];
    const text = page.name;
    const image = page.image;

	return (
		<div
			className="absolute z-10 px-3 py-2 text-sm text-white bg-black/80 rounded-lg shadow-lg pointer-events-none"
			style={{ left: x, top: y, transform: "translate(-50%, -120%)" }}
        >
            <Image src={image} alt={text} width={64} height={64} />
			{text}
		</div>
	);
}
