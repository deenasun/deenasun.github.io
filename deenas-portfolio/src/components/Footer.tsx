import Image from "next/image";

export default function Footer() {
	return (
		<footer className="w-full border-t-2 border-cream flex p-4 gap-[24px] flex-wrap items-center justify-center mt-auto">
			<a
				className="flex items-center gap-2 underline-links"
				href="https://github.com/deenasun"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					aria-hidden
					src="/github.svg"
					alt="GitHub icon"
					width={16}
					height={16}
					className="svg-cream"
				/>
				GitHub
			</a>

			<a
				className="flex items-center gap-2 underline-links"
				href="https://www.linkedin.com/in/deenasun/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					aria-hidden
					src="/linkedin.svg"
					alt="LinkedIn icon"
					width={16}
					height={16}
					className="svg-cream"
				/>
				LinkedIn
			</a>
		</footer>
	);
}
