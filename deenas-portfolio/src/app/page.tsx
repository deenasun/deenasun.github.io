import Galaxy from "../components/Galaxy";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<main className="flex h-full w-full max-w-screen">
				<Galaxy />
			</main>
			<Footer />
		</div>
	);
}
