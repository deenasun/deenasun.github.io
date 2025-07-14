export default function Card({ title = "", content, width = "w-fit", children }: { title?: string, content: string, width?: string, children?: React.ReactNode }) {
	return (
		<div className={`flex flex-col gap-4 bg-space-blue rounded-md p-4 ${width}`}>
			{title && <h1 className="text-xl font-bold">{title}</h1>}
			<p className="">
				{content}
			</p>
			{children}
		</div>
	);
};
