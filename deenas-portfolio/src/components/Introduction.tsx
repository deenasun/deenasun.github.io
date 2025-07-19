import Image from "next/image";
import { ReactNode } from "react";

export default function Introduction({
	image,
	title,
	description,
	children,
}: {
	image: string;
	title: string;
	description: string;
	children?: ReactNode;
}) {
	return (
		<main className="flex flex-col w-full items-start p-8 gap-4 max-w-7xl mx-auto">
			{/* on small devices, the title and description go below the image */}
			<div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 p-2 mx-auto w-full h-full">
				<div className="flex-shrink-0 flex items-center justify-center md:items-start md:justify-start">
					<Image
						src={image}
						alt={title}
						width={200}
						height={200}
						className="rounded-lg object-cover"
					/>
				</div>
				<div className="flex flex-col py-4 gap-4 h-full items-center justify-center md:items-start md:justify-start">
					<h1 className="text-3xl font-bold text-cream text-center md:text-left font-tiempos">
						{title}
				  </h1>
				  <pre className="text-cream leading-relaxed text-center whitespace-pre-wrap max-w-xs md:max-w-none md:text-left">
					  {description}
					</pre>
				</div>
			</div>
			{children}
		</main>
	);
}
