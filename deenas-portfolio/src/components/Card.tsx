export default function Card({ title, content }: { title: string, content: string }) {
	return (
		<div className="flex flex-col gap-4 bg-space-blue rounded-md p-4">
			<h1 className="text-xl font-bold">{title}</h1>
			<p className="">
				{content}
			</p>
		</div>
	);
};
