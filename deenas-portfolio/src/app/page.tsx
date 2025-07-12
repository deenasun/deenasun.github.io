import Galaxy from "../components/Galaxy";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<main className="flex w-full row-start-1 items-stretch">
				<Galaxy />
			</main>
			<Footer />
		</div>
	);
}
