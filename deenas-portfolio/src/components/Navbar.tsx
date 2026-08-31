"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { PortfolioPages } from "@/constants/PortfolioConstants";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 px-4 sm:px-8">
			{/* Keep my name and mobile menu button at the top of the page in both desktop + mobile */}
			<div className="flex flex-1 justify-between items-center h-16">
				<div className="flex-shrink-0">
					{pathname === "/" ? (
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

				{/* Desktop navigation for different pages */}
				<div className="hidden md:flex items-center justify-end gap-x-8 ml-auto">
					{Object.values(PortfolioPages).map((page) =>
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
				<div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
						{Object.values(PortfolioPages).map((page) =>
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
			)}
		</nav>
	);
}
