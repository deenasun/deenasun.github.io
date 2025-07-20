"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { PortfolioPages } from "@/constants/PortfolioConstants";
import { useRouter } from "next/navigation";
import GalaxyTooltip from "@/components/GalaxyTooltip";
import { initSunGroup, getPlanets } from "@/components/SpaceObjects";
import Overlay from "@/components/Overlay";

export default function SolarSystem({
	width = 400,
	height = 300,
}: {
	width?: number;
	height?: number;
}) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const sceneRef = useRef<THREE.Scene>(null);
	const rendererRef = useRef<THREE.WebGLRenderer>(null);
	const cameraRef = useRef<THREE.PerspectiveCamera>(null);
	const [dimensions, setDimensions] = useState({ width, height });
	const isMobileRef = useRef(false); // for 3D scene
	const [isMobile, setIsMobile] = useState(false); // for UI overlay re-renders
	const [tooltip, setTooltip] = useState({
		show: false,
		tooltipKey: "",
		x: 0,
		y: 0,
	});
	const router = useRouter();

	// handle container resize safely
	useEffect(() => {
		const updateDimensions = () => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect();
				setDimensions({
					width: rect.width,
					height: rect.height,
				});
			}
		};

		// set initial dimensions
		updateDimensions();

		// add event listener for window resize
		window.addEventListener("resize", updateDimensions);

		// cleanup
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	// determine if we're on mobile based on container width
	useEffect(() => {
		const mobile = dimensions.width < 768;
		isMobileRef.current = mobile; // for 3D scene
		setIsMobile(mobile); // for UI overlay re-renders
	}, [dimensions.width]);

	useEffect(() => {
		if (!canvasRef.current) return;

		// store ref in variable to avoid cleanup issues
		const canvas = canvasRef.current;

		// scene setup
		const scene = new THREE.Scene();
		sceneRef.current = scene;

		// camera setup
		const camera = new THREE.PerspectiveCamera(
			75,
			dimensions.width / dimensions.height,
			0.1,
			1000
		);

		camera.position.set(0, 20, 50);
		camera.lookAt(0, 0, 0);
		cameraRef.current = camera;

		// renderer setup
		// set alpha to true so that the solar system canvas is transparent and galaxy background is visible
		const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
		renderer.setSize(dimensions.width, dimensions.height);
		if (typeof window !== "undefined") {
			renderer.setPixelRatio(window.devicePixelRatio);
		}
		rendererRef.current = renderer;

		// create sun group with appropriate size for mobile/desktop
		const { sunGroup, animateCorona } = isMobileRef.current 
			? initSunGroup(2, 2.5) 
			: initSunGroup(4, 5);
		scene.add(sunGroup);

		// create all the planets
		const planets = getPlanets(isMobileRef.current ? 0.5 : 1);
		const interactableObjects: THREE.Object3D[] = [];
		for (const planet of planets) {
			scene.add(planet.planetGroup);
			interactableObjects.push(planet.planetGroup);
		}

		// raycaster setup
		const raycaster = new THREE.Raycaster();
		const mouse = new THREE.Vector2();

		function onMouseMove(event: MouseEvent) {
			// convert mouse position to normalized device coordinates relative to canvas
			const rect = canvas.getBoundingClientRect(); // get the bounding rectangle of the canvas
			const x = event.clientX - rect.left; // mouse position relative to canvas
			const y = event.clientY - rect.top; // mouse position relative to canvas
			mouse.x = (x / rect.width) * 2 - 1; // normalized device coordinates
			mouse.y = -(y / rect.height) * 2 + 1; // normalized device coordinates

			raycaster.setFromCamera(mouse, camera);
			const intersects = raycaster.intersectObjects(interactableObjects, true); // true = recursive search
			if (intersects.length > 0) {
				console.log("Hovering over:", intersects[0].object.name);
				canvas.style.cursor = 'pointer';
				setTooltip({
					show: true,
					tooltipKey: intersects[0].object.name,
					x: x,
					y: y,
				});
			} else {
				// hide tooltip when not hovering over anything
				canvas.style.cursor = 'default';
				setTooltip((prev) => ({ ...prev, show: false }));
			}
		}

		function handleMouseClick(event: MouseEvent) {
			console.log("CLICK");
			// convert mouse position to normalized device coordinates relative to canvas
			const rect = canvas.getBoundingClientRect(); // get the bounding rectangle of the canvas
			mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1; // mouse position relative to canvas
			mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1; // mouse position relative to canvas

			raycaster.setFromCamera(mouse, camera);
			const intersects = raycaster.intersectObjects(interactableObjects, true); // true = recursive search
			if (intersects.length > 0) {
				console.log("CLICKED:", intersects[0].object.name);
				router.push(
					PortfolioPages[
						intersects[0].object.name as keyof typeof PortfolioPages
					]?.path || "/"
				);
				// You can add click effects here
			} else {
				console.log("Clicked on empty space");
			}
		}

		// add event listener for mouse move
		renderer.domElement.addEventListener("mousemove", onMouseMove);
		renderer.domElement.addEventListener("click", handleMouseClick);

		// animation
		function animate() {
			const t = performance.now() * 0.002; // performance.now() returns the number of milliseconds since the page loaded
			animateCorona(t);
			for (const planet of planets) {
				planet.animatePlanet();
			}
			renderer.render(scene, camera);
		}
		renderer.setAnimationLoop(animate); // calls animate function 60 times per second

		// cleanup
		return () => {
			renderer.setAnimationLoop(null);
			renderer.domElement.removeEventListener("mousemove", onMouseMove);
			renderer.domElement.removeEventListener("click", handleMouseClick);
		};
	}, [router, dimensions.width, dimensions.height]);

	return (
		<div
			ref={containerRef}
			className="w-full h-full relative"
			style={{ width: "100%", height: "100%" }}
		>
			{/* UI Overlay */}
			<Overlay isMobile={isMobile} />
			<canvas
				ref={canvasRef}
				className="w-full h-full"
				style={{ width: "100%", height: "100%" }}
			/>

			{/* Tooltip */}
			{tooltip.show && (
				<GalaxyTooltip tooltipKey={tooltip.tooltipKey} x={tooltip.x} y={tooltip.y} />
			)}
		</div>
	);
}
