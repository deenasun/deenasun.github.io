export default function Tooltip({
	text,
	x,
	y,
}: {
	text: string;
	x: number;
	y: number;
}) {
	return (
		<div
			className="flex flex-col items-center absolute z-10 px-3 py-2 text-sm text-cream text-center bg-black/70 rounded-lg shadow-lg pointer-events-none max-w-xs"
			style={{ left: x, top: y, transform: "translate(-50%, -120%)" }}
		>
			{text}
		</div>
	);
}
