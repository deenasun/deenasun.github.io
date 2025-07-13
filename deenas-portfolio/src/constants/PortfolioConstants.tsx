export const PortfolioPages = {
  home: {
    name: "home",
    path: "/",
    image: "/earth.png",
  },
  about: {
    name: "about",
    path: "/about",
    image: "/earth.png",
  },
  projects: {
    name: "projects",
    path: "/projects",
    image: "/mars.png",
  },
  blog: {
    name: "blog",
    path: "/blog",
    image: "/saturn.png",
  },
  contact: {
    name: "contact",
    path: "/contact",
    image: "/uranus.png",
  }
}

export const PortfolioPageToPlanet = {
	about: {
		name: "about",
		radius: 2.5,
		color: 0x0b1c42, //earth blue
		texturePath: "/earth_map.jpg",
		hasRings: false,
		ringColor: null,
		rotationSpeed: 0.01,
		rotatesClockwise: false,
		angularVelocity: 0.001,
		orbitRadius: 15,
		axisTilt: Math.PI / 6, // earth's axis is tilted 23.4 degrees
	},
	projects: {
		name: "projects",
		radius: 2,
		color: 0xb26346, // mars red
		texturePath: "/mars_map.jpg",
		hasRings: false,
		ringColor: null,
		rotationSpeed: 0.01,
		rotatesClockwise: false,
		angularVelocity: 0.0015,
		orbitRadius: 22,
		axisTilt: Math.PI / 6, // mars' axis is tilted 25.2 degrees
	},
	blog: {
		name: "blog",
		radius: 3,
		color: 0xd5b59c, // saturn peach
		texturePath: "/saturn_map.jpg",
		hasRings: true,
		ringColor: 0xf5c583,
		rotationSpeed: 0.01,
		rotatesClockwise: false,
		angularVelocity: 0.001,
		orbitRadius: 30,
		axisTilt: Math.PI / 6, // saturn's axis is tilted 26.7 degrees
	},
	contact: {
		name: "contact",
		radius: 3,
		color: 0x33568cff, // uranus blue
		texturePath: "/uranus_map.jpg",
		hasRings: false,
		ringColor: null,
		rotationSpeed: 0.01,
		rotatesClockwise: true,
		angularVelocity: 0.001,
		orbitRadius: 38,
		axisTilt: Math.PI / 4, // uranus' axis is tilted 82.2 degrees
	},
	// default: {
	// 	name: "default",
	// 	radius: 2.5,
	// 	color: 0x33568cff,
	// 	texturePath: null,
	// 	hasRings: false,
	// 	ringColor: null,
	// 	rotationSpeed: 0.01,
	// 	rotatesClockwise: true,
	// 	angularVelocity: 0.0005,
	// 	orbitRadius: 25,
	// 	axisTilt: Math.PI / 6,
	// },
};