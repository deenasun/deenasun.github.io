"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PortfolioPages } from "@/constants/PortfolioConstants";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		// for client-side consistency: after component mounts, set mounted to true
		// and use pathnames to render active status on navbar
		setMounted(true);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
			<div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						{!mounted ? (
							<Link
								href="/"
								className="text-xl font-roboto-mono font-bold text-gray-900 hover:text-gray-700 transition-colors"
							>
								Deena Sun
							</Link>
						) : pathname === "/" ? (
							<p className="text-xl font-bold text-gray-900 cursor-default">
								Deena Sun
							</p>
						) : (
							<Link
								href="/"
								className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
							>
								Deena Sun
							</Link>
						)}
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							{!mounted
								? Object.values(PortfolioPages).map((page) => (
										<Link
											href={page.path}
											key={page.name}
											className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
										>
											{page.name}
										</Link>
								  ))
								: Object.values(PortfolioPages).map((page) =>
										pathname === page.path ? (
											<p
												key={page.name}
												className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-default underline underline-offset-4"
											>
												{page.name}
											</p>
										) : (
											<Link
												href={page.path}
												key={page.name}
												className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
											>
												{page.name}
											</Link>
										)
								  )}
						</div>
					</div>

					{/* Mobile menu button, hidden on medium and larger screens */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
							aria-label="Toggle menu"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Navigation, hidden on medium and larger screens */}
				{isMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
							{!mounted
								? Object.values(PortfolioPages).map((page) => (
										<Link
											href={page.path}
											key={page.name}
											className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
										>
											{page.name}
										</Link>
								  ))
								: Object.values(PortfolioPages).map((page) =>
										pathname === page.path ? (
											<p
												key={page.name}
												className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium cursor-default underline underline-offset-4"
											>
												{page.name}
											</p>
										) : (
											<Link
												href={page.path}
												key={page.name}
												className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
											>
												{page.name}
											</Link>
										)
								  )}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
