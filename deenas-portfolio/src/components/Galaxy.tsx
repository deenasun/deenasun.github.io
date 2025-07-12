"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

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
    const camera = new THREE.PerspectiveCamera(75, dimensions.width / dimensions.height, 0.1, 1000);
    camera.position.set(0, 20, 50); // x, y, z
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(dimensions.width, dimensions.height);
    if (typeof window !== 'undefined') {
      renderer.setPixelRatio(window.devicePixelRatio);
    }
    rendererRef.current = renderer;

    // create stars object
    const stars = getStars();
    scene.add(stars);

    const sunGroup = new THREE.Group();
    const sun = getSun(4);
    const {corona, animateCorona} = getCorona(5);
    sunGroup.add(sun);
    sunGroup.add(corona);
    scene.add(sunGroup);


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
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full"
      style={{ width: '100%', height: '100%' }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
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