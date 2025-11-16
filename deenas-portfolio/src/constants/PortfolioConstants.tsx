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
	},
};

export const PortfolioPageToPlanet = {
	about: {
		name: "about",
		radius: 2.5,
		color: 0x0b1c42, //earth blue
		texturePath: "/textures/earth_map.jpg",
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
		texturePath: "/textures/mars_map.jpg",
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
		texturePath: "/textures/saturn_map.jpg",
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
		texturePath: "/textures/uranus_map.jpg",
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

export const PortfolioImages = [
	{
		src: "/gallery/hackathon.jpeg",
		description: "Me and my team at the 2025 Berkeley AI Hackathon",
	},
	{
		src: "/gallery/umbrella.jpeg",
		description: "Staying dry in the rain",
	},
	{
		src: "/gallery/blackstone.jpeg",
		description: "Touring the NYC Blackstone office with M.E.T.!",
	},
	{
		src: "/gallery/moma.jpeg",
		description: "Visiting MOMA during an M.E.T. class capstone trip to NYC",
	},
	{
		src: "/gallery/arc_de_triomphe.jpeg",
		description:
			"Taking point-fives at the Arc de Triomphe with my mom and my brother",
	},
	{
		src: "/gallery/big_game.jpeg",
		description: "Rushing the field after Cal won the Big Game",
	},
	{
		src: "/gallery/bagel.jpeg",
		description: "Munching on a tomato bagel from Apollo Bagels",
	},
	{
		src: "/gallery/penguin.jpeg",
		description: "Posing with my penguin buddy at the Central Park Zoo",
	},
	{
		src: "/gallery/endeavour.jpeg",
		description:
			"Seeing the Endeavour space shuttle at the California Science Center",
	},
	{
		src: "/gallery/oski.jpeg",
		description: "Me and Oski! Go Bears!",
	},
	{
		src: "/gallery/chem_lab.jpeg",
		description: "Safety first",
	},
];

export const CurrentAdventures = [
	{
		title:
			"Researcher at Berkeley AI Research",
		description:
			"diving into mechanistic interpretability to measure, analyze, and steer ambiguity in LLMs",
	},
	{
		title:
			"Researcher at Stanford AI Laboratory",
		description:
			"investigating how frontier AI will shape the future of cybersecurity",
	},
	{
		title: "CS 189/289 Teaching Assistant",
		description:
			"teaching CS 189/289 (Introduction to Machine Learning) at Berkeley on the content, discussion, and exam teams",
	},
	{
		title: "Machine Learning @ Berkeley Research and External Officer",
		description:
			"planning hackathons, career fairs, workshops, and more with Machine Learning @ Berkeley, UC Berkeley's premier machine learning organization",
	},
	{
		title: "Accel Scholar",
		description:
			"exploring the startup and venture capital ecosystem alongside a small, tight-knit community of fellow scholars and mentors",
	},
];

export const Experience = [
	{
		title: "Uber AI Solutions Software Engineering Intern",
		description:
			"launched a contextual search engine leveraging CLIP image-text models, KNN algorithms, and vector databases that let clients search over 100k+ images using natural language",
	},
	{
		title: "VectorShift Software Engineering Intern",
		description:
			"implemented LLMOps evaluations platform and revamped marketplace, spurring a 230% growth in daily active users over a month",
	},
	{
		title: "Project Manager for Venture Strategy Solutions/Power My Analytics",
		description:
			"led a team of 7 consultants to implement an AI coding agent with a test-driven ReAct approach to accelerate the development of new 3rd-party connectors for Power My Analytics",
	},
	{
		title:
			"Software Developer for Blueprint/Alliance for Clean Energy New York",
		description:
			"built and deployed an automated webscraper on Google Cloud to collect information on over 2,000 renewable energy projects in New York for a public web app with a searchable map, filters, and data aggregation",
	},
	{
		title: "Berkeley SkyDeck Technical Intern",
		description:
			"automated 250+ office hour sign-ups, mentor matchings, and event RSVPs using scripts to save 80+ hours/week for program admins",
	},
	{
		title: "Consultant for Venture Strategy Solutions/BetterUp",
		description:
			"coded an auditing dashboard to extract data on 600 courses and provide LLM-powered insights to improve learner outcomes for 4,000+ coaches",
	},
];

export const ProjectInfo = [
	{
		title: "AI-SL",
		description:
			"For the 2025 Berkeley AI Hackathon, I built a web app and Chrome extension that turns natural language English into custom ASL animations with my friends. We used an LLM (Claude 3.5 Sonnet) to convert English into ASL gloss, encoded the ASL tokens for similarity lookup in a vector database, then used MediaPipe to turn clips of humans signing ASL into a continuous video with a customized bear avatar. You can try out the backend API of our app on HuggingFace!",
		link: "https://huggingface.co/spaces/deenasun/ai-sl-api",
		image: "/ai-sl.png",
		github: "https://github.com/deenasun/ai-sl",
	},
	{
		title: "Alliance for Clean Energy New York",
		description:
			"My team built and deployed a public web app that displays an interactive map of 2,000 renewable energy projects throughout the state of New York. I built the backend that powers our app! The backend comprises a webscraper that collects data from four different online databases of clean energy projects, validates the data, reverse geocodes the projects for coordinates and Congressional district information, parses descriptions into standardized schemas, merges duplicate projects, and handles complex logic for custom milestones. I set up the backend to run every month on Google Cloud, with robust backup storage and monitoring. By consolidating information on clean energy projects in New York, we aim to make renewable energy data more accessible and engaging for the public!",
		link: "https://ace-ny.vercel.app/",
		image: "/ace-ny.png",
		github: "https://github.com/calblueprint/ace-ny",
	},
	{
		title: "Guesscasso",
		description:
			"A funky spin on skribbl.io where players race against the clock to guess what a diffusion model is generating as its output is slowly denoised. I built this with a team of friends for the Spring 2025 Machine Learning at Berkeley Hackathon, where our project won 1st place!",
		link: "https://guesscasso.onrender.com/",
		image: "/guesscasso.png",
		github: "https://github.com/deenasun/guesscasso",
	},
];
