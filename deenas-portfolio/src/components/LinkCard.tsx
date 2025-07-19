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
		<div className={`flex flex-row gap-4 items-center bg-space-blue rounded-md p-4 ${width}`}>
			<div className="flex flex-col gap-4 flex-1">
				{title && <h1 className="text-xl font-bold">{title}</h1>}
				{content && <p className="">{content}</p>}
				{link && (
					<div className="flex flex-row gap-2">
						<p>Check it out: </p>
						<a href={link} className="text-cream/70 underline-links hover:text-cream" target="_blank" rel="noopener noreferrer">
							{link}
						</a>
					</div>
				)}
				{github && (
					<div className="flex flex-row gap-2">
						<p>Github: </p>
						<a href={github} className="text-cream/70 underline-links hover:text-cream" target="_blank" rel="noopener noreferrer">
							{github}
						</a>
					</div>
				)}
				{children}
			</div>
			{image && <Image src={image} alt={title} width={200} height={200} className="rounded-md flex-shrink-0 object-cover w-[200px] h-[200px]" />}
		</div>
	);
}
