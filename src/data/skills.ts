// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "html",
		name: "HTML5",
		description: "Web markup language for structuring web pages.",
		icon: "logos:html-5",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 12 },
		color: "#E34F26",
	},
	{
		id: "css",
		name: "CSS3",
		description: "Styling language for web pages, including modern CSS features.",
		icon: "logos:css-3",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 12 },
		color: "#1572B6",
	},
	{
		id: "javascript",
		name: "JavaScript",
		description: "Modern JavaScript development, including ES6+ syntax and asynchronous programming.",
		icon: "logos:javascript",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 10 },
		color: "#F7DF1E",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description: "Type-safe superset of JavaScript for better code quality.",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#3178C6",
	},
	{
		id: "vue",
		name: "Vue.js",
		description: "Progressive JavaScript framework, including Vue 3 composition API.",
		icon: "logos:vue",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 8 },
		color: "#4FC08D",
	},
	{
		id: "bootstrap",
		name: "Bootstrap",
		description: "Popular CSS framework for responsive web design.",
		icon: "logos:bootstrap",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 8 },
		color: "#7952B3",
	},

	// Backend Skills
	{
		id: "python",
		name: "Python",
		description: "General-purpose programming language. Familiar with basic syntax, network programming, concurrent programming.",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 12 },
		color: "#3776AB",
	},
	{
		id: "flask",
		name: "Flask",
		description: "Lightweight Python web framework for building web applications.",
		icon: "logos:flask",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 8 },
		color: "#000000",
	},
	{
		id: "fastapi",
		name: "FastAPI",
		description: "Modern, fast web framework for building APIs with Python based on standard Python type hints.",
		icon: "simple-icons:fastapi",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		color: "#009688",
	},
	{
		id: "go",
		name: "Go",
		description: "Efficient programming language. Familiar with basic syntax, network programming, concurrent programming.",
		icon: "logos:go",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 10 },
		color: "#00ADD8",
	},
	{
		id: "gin",
		name: "Gin",
		description: "Fast HTTP web framework written in Go for building RESTful APIs.",
		icon: "logos:go",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 8 },
		color: "#00ADD8",
	},
	{
		id: "gorm",
		name: "GORM",
		description: "The fantastic ORM library for Golang, providing a developer-friendly way to interact with databases.",
		icon: "logos:go",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 8 },
		color: "#00ADD8",
	},
	{
		id: "c",
		name: "C",
		description: "Low-level systems programming language. Familiar with basic syntax.",
		icon: "logos:c",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#A8B9CC",
	},

	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description: "Popular open-source relational database management system.",
		icon: "logos:mysql-icon",
		category: "database",
		level: "intermediate",
		experience: { years: 0, months: 10 },
		color: "#4479A1",
	},
	{
		id: "redis",
		name: "Redis",
		description: "High-performance in-memory data structure store, used as database and cache.",
		icon: "logos:redis",
		category: "database",
		level: "intermediate",
		experience: { years: 0, months: 8 },
		color: "#DC382D",
	},

	// Tools
	{
		id: "git",
		name: "Git",
		description: "Distributed version control system for code management and collaboration.",
		icon: "logos:git-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 12 },
		color: "#F05032",
	},
	{
		id: "linux",
		name: "Linux",
		description: "Open-source operating system. Familiar with command line operations.",
		icon: "logos:linux-tux",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 10 },
		color: "#FCC624",
	},
	{
		id: "docker",
		name: "Docker",
		description: "Containerization platform for application deployment and environment management.",
		icon: "logos:docker-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 8 },
		color: "#2496ED",
	},
	{
		id: "postman",
		name: "Postman",
		description: "API development and testing tool for designing, testing, and documenting APIs.",
		icon: "logos:postman-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 8 },
		color: "#FF6C37",
	},
	{
		id: "vscode",
		name: "VS Code",
		description: "Lightweight but powerful code editor with a rich plugin ecosystem.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 12 },
		color: "#007ACC",
	},
	{
		id: "cursor",
		name: "Cursor",
		description: "AI-powered code editor that enhances development productivity with intelligent code assistance.",
		icon: "material-symbols:code",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		color: "#000000",
	},
	{
		id: "ida-pro",
		name: "IDA Pro",
		description: "Professional disassembler and debugger for reverse engineering and malware analysis.",
		icon: "material-symbols:security",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 4 },
		color: "#FF6B00",
	},
	{
		id: "gdb",
		name: "GDB (x86)",
		description: "GNU Debugger for x86 architecture, used for debugging programs at the machine code level.",
		icon: "material-symbols:bug-report",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 4 },
		color: "#4A90E2",
	},

	// AI & Machine Learning
	{
		id: "ollama",
		name: "Ollama",
		description: "Local AI model runner for running large language models locally.",
		icon: "material-symbols:psychology",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 4 },
		color: "#1A1A1A",
	},
	{
		id: "langchain",
		name: "LangChain",
		description: "Framework for developing applications powered by language models.",
		icon: "material-symbols:auto-awesome",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 4 },
		color: "#1C3C3C",
	},
	{
		id: "langgraph",
		name: "LangGraph",
		description: "Library for building stateful, multi-actor applications with LLMs.",
		icon: "material-symbols:account-tree",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 3 },
		color: "#1C3C3C",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate")
			.length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
