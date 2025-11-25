export interface Project {
  name: string;
  tech: string[];
  workplace?: string;
  bitbucket?: string;
  github?: string;
  blog?: string;
  website?: string;
  description: string[];
  selected?: boolean;
  progress: "completed" | "ongoing" | "planned";
}

export const projects: Project[] = [
	{
		name: "Firewall Management System",
		tech: ["Perl", "Mojolicious", "CouchDB", "Shorewall", "Devuan/Linux"],
		workplace: "Built at Udyansh (Team of 2)",
		bitbucket: "https://bitbucket.org/tirveni/fireshorewall/src/master/",
		description: [
			"Web-based firewall management interface with CouchDB authentication.",
			"Supports live control of Shorewall rules, automated backups, and secure user login.",
			"Added diagnostics tools (ping, traceroute, tcpdump) for real-time infra observability across 15–20 nodes.",
		],
		selected: true,
		progress: "completed",
	},
	{
		name: "EagleOwl",
		tech: [
			"Go",
			"PostgreSQL",
			"Redis",
			"TailwindCSS",
			"Google OAuth 2.0",
			"RBAC",
		],
		workplace: "Built at Udyansh",
		bitbucket: "https://bitbucket.org/tirveni/eagleowl/src/master/",
		description: [
			"Full-stack Go web app with Google OAuth, password login, and JWT-based sessions.",
			"Implemented RBAC with 3 roles (admin, editor, reader) and 20+ protected routes.",
			"Redis-backed async email worker for welcome/signup notifications.",
		],
		selected: false,
		progress: "completed",
	},
	{
		name: "Serac",
		tech: ["Rust", "Rocket.rs", "PostgreSQL", "Argon2", "JWT"],
		github: "https://github.com/nishujangra/serac",
		blog: "https://nishujangra27.hashnode.dev/implementing-jwt-authentication-in-rocketrs",
		description: [
			"Built a lightweight JWT authentication system in Rust using Rocket.rs framework.",
			"Implemented Argon2 password hashing, secure cookie-based sessions, and structured User/Register/Login flows.",
			"Followed modular architecture with clear separation of models, routes, and utility functions.",
			"Used sqlx for async PostgreSQL queries (email validation, password verification, token storage).",
			"Deployed full auth flow as boilerplate for secure Rust APIs.",
		],
		selected: false,
		progress: "ongoing",
	},
	{
		name: "BalancerX",
		tech: ["Go", "HTTP/TCP", "Proxy", "Health Check", "Config-driven"],
		github: "https://github.com/nishujangra/balancerx",
		website: "https://nishujangra.github.io/balancerx/",
		description: [
			"Production-grade load balancer with HTTP and TCP support, active health checks, and logging.",
			"Implemented round-robin and random strategies, configurable via config.yaml.",
			"Handles 11-12.5k req/sec with 4-16ms latency under 200 concurrent clients.",
			"Stable under 500-2000 clients, processing ~647k-727k requests in 60s.",
		],
		selected: true,
		progress: "completed",
	},
	{
		name: "debforge",
		tech: ["Bash", "Debian Packaging", "dpkg-deb"],
		github: "https://github.com/nishujangra/debforge?utm_source=chatgpt.com",
		description: [
			"CLI tool to quickly forge .deb packages from binaries.",
			"Automates control files, directory structure, and post-install script generation.",
			"Distributed as a .deb itself, demonstrating self-hosting capability.",
			"Future roadmap: publish via GitHub-hosted APT repository.",
		],
		selected: false,
		progress: "completed",
	},
	{
		name: "Love Calculator",
		tech: [
			"Python",
			"Flask",
			"Web App",
			"ASCII",
			"Fun Project",
			"Deployed",
		],
		github: "https://github.com/nishujangra/Love-Calculator",
		website: "http://nishujangra27.pythonanywhere.com/",
		description: [
			"Web app that calculates compatibility between two names using ASCII value math.",
			"Fun project developed for friends on Valentine's Day.",
			"Simple, interactive, and fully deployed online for testing.",
		],
		selected: false,
		progress: "completed",
	},
	{
		name: "Spooky",
		tech: [
			"Rust",
			"HTTP/3 + QUIC",
			"Proxy",
			"Health Check",
			"Config-driven",
		],
		github: "https://github.com/nishujangra/spooky",
		description: [
			"Developing a load balancer in Rust with HTTP/3 support and TLS.",
			"Implemented static hardcoded response for testing HTTP/3 server.",
		],
		selected: false,
		progress: "ongoing",
	},
];
