"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { initStars } from "@/components/SpaceObjects";

export default function Galaxy({
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

	useEffect(() => {
		if (!canvasRef.current) return;

		// store ref in variable to avoid cleanup issues
		const canvas = canvasRef.current;

		// scene setup
		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0x0e1728);
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
		const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
		renderer.setSize(dimensions.width, dimensions.height);
		if (typeof window !== "undefined") {
			renderer.setPixelRatio(window.devicePixelRatio);
		}
		rendererRef.current = renderer;
		// create stars object
		const stars = initStars();
		stars.name = "stars";
		scene.add(stars);

		// animation
		function animate() {
			stars.rotation.y += 0.0001; // rotate the stars around the y-axis
			renderer.render(scene, camera);
		}
		renderer.setAnimationLoop(animate); // calls animate function 60 times per second

		// cleanup
		return () => {
			renderer.setAnimationLoop(null);
		};
	}, [dimensions.width, dimensions.height]);

	return (
		<div
			ref={containerRef}
			className="inset-0 fixed -z-10"
			style={{ width: "100%", height: "100%" }}
		>
			<canvas
				ref={canvasRef}
				className="w-full h-full"
				style={{ width: "100%", height: "100%" }}
			/>
		</div>
	);
}
