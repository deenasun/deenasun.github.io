"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Tooltips, Links } from "../constants/GalaxyConstants";
import { useRouter } from "next/navigation";

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
  const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 });
  const router = useRouter();

  // handle container resize safely
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height
        });
      }
    };

    // set initial dimensions
    updateDimensions();

    // add event listener for window resize
    window.addEventListener('resize', updateDimensions);

    // cleanup
    return () => window.removeEventListener('resize', updateDimensions);
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
		camera.position.set(0, 20, 50); // x, y, z
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
		const stars = getStars();
		stars.name = "stars";
		scene.add(stars);

		const sunGroup = new THREE.Group();
		sunGroup.name = "sunGroup";
		const sun = getSun(4);
		sun.name = "sun";
		const { corona, animateCorona } = getCorona(5);
		corona.name = "corona";
		sunGroup.add(sun);
		sunGroup.add(corona);
    scene.add(sunGroup);
    
    const interactableObjects = [sunGroup];

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
        setTooltip({
          show: true,
          text: Tooltips[intersects[0].object.name as keyof typeof Tooltips],
          x: x,
          y: y
        });
			} else {
				// Hide tooltip when not hovering over anything
				setTooltip(prev => ({ ...prev, show: false }));
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
        router.push(Links[intersects[0].object.name as keyof typeof Links]);
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
			stars.rotation.y += 0.0001; // rotate the stars around the y-axis
			renderer.render(scene, camera);
		}
		renderer.setAnimationLoop(animate); // calls animate function 60 times per second

		// cleanup
		return () => {
			renderer.setAnimationLoop(null);
			renderer.domElement.removeEventListener("mousemove", onMouseMove);
			renderer.domElement.removeEventListener("click", handleMouseClick);
		};
	}, [dimensions.width, dimensions.height]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative"
      style={{ width: '100%', height: '100%' }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Tooltip */}
      {tooltip.show && (
        <div
          className="absolute z-10 px-3 py-2 text-sm text-white bg-black/80 rounded-lg shadow-lg pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translate(-50%, -120%)'
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}

function getSun(radius: number = 18) {
    const sunGeometry = new THREE.SphereGeometry(radius, 32, 32);
		const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc66 });
		const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    return sun;
}

function getCorona(radius: number = 22) {
	const coronaGeometry = new THREE.SphereGeometry(radius, 32, 32);
	const positionAttribute = coronaGeometry.getAttribute("position"); // gets the position attribute of the geometry
	const originalPositions: [number, number, number][] = [];  // stores original x, y, z coordinates of each vertex
	const randomOffsets: number[] = []; // stores a random "spikiness" for each vertex
	for (let i = 0; i < positionAttribute.count; i++) { // iterates through all the vertices
		const x = positionAttribute.getX(i);
		const y = positionAttribute.getY(i);
		const z = positionAttribute.getZ(i);
		originalPositions.push([x, y, z]);
		randomOffsets.push(Math.random() * 0.7 + 0.3); // each vertex gets a random "spikiness"
	}
	const coronaMaterial = new THREE.MeshBasicMaterial({
		color: 0xffee88,
		transparent: true,
		opacity: 0.5,
		side: THREE.DoubleSide,
	});
  const corona = new THREE.Mesh(coronaGeometry, coronaMaterial);

  // create a custom bounding box for the corona
  corona.geometry.computeBoundingBox();
  const bbox = corona.geometry.boundingBox!.clone();
  const expandBy = bbox.getSize(new THREE.Vector3()).multiplyScalar(0.05); // 5% bigger in each direction
  bbox.expandByVector(expandBy);
  corona.geometry.boundingBox = bbox;
  
  const animateCorona = (t: number) => {
    for (let i = 0; i < positionAttribute.count; i++) { // iterates through all the vertices
      const [x, y, z] = originalPositions[i];
      const scale = 1 + 0.15 * Math.sin(t * 2 + i) * randomOffsets[i]; // calculates the scale of the vertex
      positionAttribute.setXYZ(i, x * scale, y * scale, z * scale); // sets the new position of the vertex
    }
    positionAttribute.needsUpdate = true; // tells Three.js to update the position attribute of the geometry
  }
  return {corona, animateCorona};
}

function getStars(numStars: number = 1000) {
	const geometry = new THREE.BufferGeometry();
	const positions = new Float32Array(numStars * 3); // 3 coordinates per star

	// generate random star positions in a sphere
	for (let i = 0; i < numStars * 3; i += 3) {
		// calculate spherical coordinates for star i
		const radius = Math.random() * 200 + 50; // star positions will be in a radius of 50-250
		const theta = Math.random() * Math.PI * 2; // star i will be located at longitude angle theta
		const phi = Math.acos(2 * Math.random() - 1); // star i will be located at latitude angle phi

		positions[i] = radius * Math.sin(phi) * Math.cos(theta); // x coordinate = radius * cos(theta) * sin(phi)
		positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta); // y coordinate = radius * sin(theta) * sin(phi)
		positions[i + 2] = radius * Math.cos(phi); // z coordinate = radius * cos(phi)
	}

	// set positions of the stars in the star bufferGeometry
	geometry.setAttribute(
		"position",
		new THREE.BufferAttribute(positions, 3) // tells bufferGeometry to read 3 values per star
	);

	// create star material (white points)
	const starMaterial = new THREE.PointsMaterial({
		color: 0xffffff,
		size: 1,
		transparent: true,
		opacity: 0.8,
	});

  const stars = new THREE.Points(geometry, starMaterial);
  return stars;
}
