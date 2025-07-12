import Image from "next/image";

export default function Footer() {
	return (
		<footer className="w-full border-t-2 border-text-cream row-start-2 flex p-4 gap-[24px] flex-wrap items-center justify-center">
			<a
				className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-text-cream"
				href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					aria-hidden
					src="/globe.svg"
					alt="Globe icon"
					width={16}
					height={16}
				/>
				Visit my GitHub!
			</a>
		</footer>
	);
}
