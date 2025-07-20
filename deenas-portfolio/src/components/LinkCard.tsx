import Image from "next/image";

export default function LinkCard({
	title = "",
	content = "",
	link = "",
	width = "w-fit",
	image = "",
	github = "",
	children,
}: {
	title?: string;
	content?: string;
	link?: string;
	width?: string;
		image?: string;
	github?: string;
	children?: React.ReactNode;
	}) {
	return (
		<div
			className={`flex flex-col md:flex-row gap-8 md:items-center bg-space-blue rounded-md p-4 w-full max-w-full ${width}`}
		>
			<div className="flex flex-col gap-4 flex-1 min-w-0">
				{title && <h1 className="text-xl font-bold">{title}</h1>}
				{/* Image appears below the title on mobile */}
				{image && (
					<Image
						src={image}
						alt={title}
						width={200}
						height={200}
						className="rounded-md object-contain w-auto h-auto max-w-[200px] sm:max-w-[250px] md:hidden"
					/>
				)}
				{content && <p className="">{content}</p>}
				{link && (
					<div className="flex flex-col sm:flex-row gap-2">
						<p className="flex-shrink-0">Check it out: </p>
						<a
							href={link}
							className="text-cream/75 hover:text-cream underline-links break-all"
							target="_blank"
							rel="noopener noreferrer"
						>
							{link}
						</a>
					</div>
				)}
				{github && (
					<div className="flex flex-col sm:flex-row gap-2">
						<p className="flex-shrink-0">Github: </p>
						<a
							href={github}
							className="text-cream/75 hover:text-cream underline-links break-all"
							target="_blank"
							rel="noopener noreferrer"
						>
							{github}
						</a>
					</div>
				)}
				{children}
			</div>
			{/* Image appears on the right side of the card on desktop */}
			{image && (
				<Image
					src={image}
					alt={title}
					width={200}
					height={200}
					className="rounded-md flex-shrink-0 object-cover w-auto h-[150px] sm:h-[200px] hidden md:block"
				/>
			)}
		</div>
	);
}
