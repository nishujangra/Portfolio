export interface Blog {
	title: string;
	description: string;
	url: string;
	tags: string[];
}

export interface BlogCategory {
	title: string;
	blogs: Blog[];
}

const programming_development: BlogCategory = {
	title: "Programming & Development",
	blogs: [
		{
			title: "Implementing JWT Authentication in Rocket.rs with Argon2 Password Hashing",
			description:
				"Step-by-step Rocket.rs walkthrough wiring Argon2 password hashing with JWT auth guards for hardened APIs.",
			url: "https://nishujangra27.hashnode.dev/implementing-jwt-authentication-in-rocketrs",
			tags: ["Rust", "JWT", "Security", "Backend", "Rocket.rs"],
		},
		{
			title: "How to Use Tera Templates with Axum (Rust)",
			description:
				"Practical guide for rendering dynamic HTML in Axum by integrating Tera templates, context injection, and routing.",
			url: "https://nishujangra27.hashnode.dev/tera-templates-axum-rust",
			tags: ["Rust", "Axum", "Tera", "Web", "Templates"],
		},
		{
			title: "Why Rust Forces Immutability?",
			description:
				"A plain-language breakdown of Rust’s immutability defaults, safety guarantees, and when mutability makes sense.",
			url: "https://medium.com/@nishujangra27/why-rust-forces-immutability-04e40cbf2e46",
			tags: ["Rust", "Concepts", "Immutability", "Safety"],
		},
		{
			title: "Why Do We Need Lifetimes in Rust?",
			description:
				"Explains lifetime annotations, the borrow checker, and how they prevent dangling references.",
			url: "https://medium.com/@nishujangra27/why-do-we-need-lifetimes-in-rust-16f12173c30a",
			tags: ["Rust", "Lifetimes", "Memory"],
		},
		{
			title: "Implementing Middleware in Rocket.rs",
			description:
				"Demonstrates using request guards as Rocket middleware for JWT verification and request-scoped context.",
			url: "https://nishujangra27.hashnode.dev/implementing-middleware-in-rocketrs-rust",
			tags: ["Rust", "Rocket.rs", "Middleware", "JWT"],
		},
		{
			title: "Getting Started with Rocket Fairings: Implementing a Logger",
			description:
				"Shows how to hook into Rocket fairings to log incoming requests and outgoing responses cleanly.",
			url: "https://nishujangra27.hashnode.dev/getting-started-with-rocket-fairings-implementing-a-logger",
			tags: ["Rust", "Rocket.rs", "Fairings", "Logging"],
		},
	],
};

const system_administration_linux: BlogCategory = {
	title: "System Administration & Linux Basics",
	blogs: [
		{
			title: "How to Add a User to the Sudoers in Devuan Linux (Daedalus 5.0)",
			description:
				"Walkthrough for safely granting sudo privileges via visudo on a Devuan workstation.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Sudoers",
			tags: ["Linux", "Devuan", "Sudo", "Access Control"],
		},
		{
			title: "How to Run C/C++ Code in Devuan Linux (Daedalus 5.0)",
			description:
				"Setting up toolchains and compiling first C/C++ programs on a Devuan machine.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/C++",
			tags: ["Linux", "Devuan", "C", "C++", "Tooling"],
		},
		{
			title: "Reading Root-Protected Files with Sudo — No Password Prompt",
			description:
				"Explains sudo privilege tuning to allow file reads without repeated password prompts.",
			url: "https://blog.devops.dev/reading-root-protected-files-with-sudo-no-password-prompt-f70a9bdd8ca7",
			tags: ["Linux", "Sudo", "Security"],
		},
		{
			title: "Fixing DNS Resolution Errors in Linux: A Simple Troubleshooting Guide",
			description:
				"Checklist for resolv.conf, systemd-resolved, and network restarts when DNS breaks.",
			url: "https://blog.devops.dev/fixing-dns-resolution-errors-in-linux-a-simple-troubleshooting-guide-d1212a298e46",
			tags: ["Linux", "DNS", "Troubleshooting"],
		},
		{
			title: "Fixing Brave Browser Snap Error on Ubuntu",
			description:
				"Notes on resolving common Snap sandbox issues affecting Brave browser on Ubuntu.",
			url: "https://medium.com/@nishujangra27/fixing-brave-browser-snap-error-on-ubuntu-647fc2e61a84",
			tags: ["Ubuntu", "Snap", "Debugging"],
		},
		{
			title: "Setting up My Own Mail Server (Postfix + Dovecot)",
			description:
				"Full-stack mail server setup with Postfix, Dovecot, and TLS hardening on Devuan.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Setup-Own-Mail-Server",
			tags: ["Mail", "Postfix", "Dovecot", "Linux"],
		},
	],
};

const ebpf_kernel_programming: BlogCategory = {
	title: "eBPF & Kernel Programming",
	blogs: [
		{
			title: "Getting Started with eBPF and XDP: A Simple Hello World in Ubuntu",
			description:
				"Compiles and runs the first XDP hook while explaining toolchains, clang flags, and bpftool usage.",
			url: "https://medium.com/@nishujangra27/getting-started-with-ebpf-and-xdp-a-simple-hello-world-in-ubuntu-c0e94e29221a",
			tags: ["eBPF", "XDP", "Kernel", "Networking"],
		},
	],
};

const networking_infrastructure: BlogCategory = {
	title: "Networking & Infrastructure",
	blogs: [
		{
			title: "How to Set Up a Virtual Gateway with NAT in VirtualBox",
			description:
				"Configures a Devuan gateway VM that NATs traffic for an isolated VirtualBox lab network.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Setting-Up-a-Virtual-Gateway-with-NAT-in-VirtualBox",
			tags: ["Networking", "VirtualBox", "NAT", "Devuan"],
		},
		{
			title: "How to Set Up a Local DNS Server Using dnsmasq",
			description:
				"Shows dnsmasq installation, zone files, and DHCP integration for a home lab DNS.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Setting-Up-a-Local-DNS-Server-Using-dnsmasq",
			tags: ["DNS", "dnsmasq", "Linux"],
		},
		{
			title: "Building VyOS From Source and Running in VirtualBox",
			description:
				"End-to-end VyOS build steps, ISO creation, and VirtualBox deployment process.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/VyOS-Building-and-Running",
			tags: ["VyOS", "Networking", "Build"],
		},
		{
			title: "VyOS Quick Setup and Persistent Configuration Guide",
			description:
				"Screenshots and commands to get core routing services configured and persisted on VyOS.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/VyOS-Quick-Setup",
			tags: ["VyOS", "Routing", "Guides"],
		},
		{
			title: "Creating a Virtual Network in VirtualBox (Linux Host)",
			description:
				"Defines host-only adapters, DHCP ranges, and VM wiring to simulate a multi-node lab.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Virtual-Network-VirtualBox",
			tags: ["VirtualBox", "Networking", "Labs"],
		},
	],
};

const juju_devops: BlogCategory = {
	title: "Juju & DevOps",
	blogs: [
		{
			title: "Juju: Deploy PostgreSQL",
			description:
				"Deploys the PostgreSQL charm with storage primitives and relation wiring.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Juju-Deploy-PostgreSQL",
			tags: ["Juju", "PostgreSQL", "DevOps"],
		},
		{
			title: "Juju: PostgreSQL Clustering & Replication",
			description:
				"Shows how to scale PostgreSQL units behind Juju, enable replication, and monitor status.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Juju-PostgreSQL-Clustering",
			tags: ["Juju", "PostgreSQL", "HA"],
		},
		{
			title: "Juju: Enable SSL for PostgreSQL",
			description:
				"Configures TLS certs for PostgreSQL charms to secure traffic across relations.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Juju-Enable-SSL-Postgres",
			tags: ["Juju", "PostgreSQL", "Security"],
		},
		{
			title: "Getting Started with Juju",
			description:
				"Primer on charms, models, controllers, and basic deployment commands.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Getting-Started-Juju",
			tags: ["Juju", "DevOps", "Guides"],
		},
		{
			title: "Juju Deployment: Deploying Nginx on Ubuntu Server",
			description:
				"Uses the Nginx charm to publish a web service on Ubuntu with relations and config.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Juju-Deploy-Nginx-Ubuntu-Server",
			tags: ["Juju", "Nginx", "Ubuntu"],
		},
		{
			title: "Juju Troubleshooting",
			description:
				"Collects common Juju errors, log commands, and fixes for stalled units.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Juju-Troubleshooting",
			tags: ["Juju", "Troubleshooting"],
		},
		{
			title: "Granting Permissions to a PostgreSQL User",
			description:
				"SQL snippets for granting granular privileges to Postgres users in production.",
			url: "https://medium.com/@nishujangra27/granting-permissions-to-a-postgresql-user-4768f923f96e",
			tags: ["PostgreSQL", "SQL", "Permissions"],
		},
	],
};

const redis_keydb: BlogCategory = {
	title: "Redis & KeyDB",
	blogs: [
		{
			title: "How to Install Redis on Devuan Linux (Daedalus 5.0)",
			description:
				"Installs Redis from source, configures service files, and tests connectivity.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Redis-Installation",
			tags: ["Redis", "Devuan", "Install"],
		},
		{
			title: "Redis Cluster: What It Is and How to Set It Up on Devuan",
			description:
				"Covers slot allocation, cluster meet commands, and testing failover locally.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Redis-Cluster",
			tags: ["Redis", "Cluster", "High Availability"],
		},
		{
			title: "How to Install KeyDB Server in Debian 12 Using PPA Repositories",
			description:
				"Uses upstream PPAs to install KeyDB on Bookworm with systemd service tuning.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/KeyDB-Setup",
			tags: ["KeyDB", "Debian", "Install"],
		},
		{
			title: "How to Setup KeyDB Servers with Multi-Master in Debian 12",
			description:
				"Configures KeyDB active-active replication and verifies conflict resolution.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/KeyDB-Multi-Master",
			tags: ["KeyDB", "Replication", "HA"],
		},
		{
			title: "Setting Up Samaritan Proxy to Load Balance Two KeyDB Servers",
			description:
				"Shows how to insert Samaritan proxy in front of KeyDB instances for load balancing.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/SAM-Proxy",
			tags: ["KeyDB", "Proxy", "Load Balancing"],
		},
	],
};

const other_devops_tools: BlogCategory = {
	title: "Other DevOps & Tools",
	blogs: [
		{
			title: "Ansible Lab Setup on Devuan",
			description:
				"Bootstraps control nodes and managed hosts to practice Ansible playbooks locally.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Ansible-Lab",
			tags: ["Ansible", "DevOps", "Lab"],
		},
		{
			title: "How to Install Apache CouchDB on Debian",
			description:
				"Details CouchDB repository setup, clustering enablement, and admin user creation.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Install-Apache-CouchDB-on-Debian",
			tags: ["CouchDB", "Debian", "Databases"],
		},
	],
};

const deployment: BlogCategory = {
	title: "Deployment",
	blogs: [
		{
			title: "Setting up a Domain Name and Sub-Domain using Nginx on Debian 13",
			description:
				"Configures Nginx server blocks, DNS records, and TLS for Debian 13 hosts.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Setup-Domain-Name-Nginx",
			tags: ["Nginx", "Domains", "Debian"],
		},
	],
};

const ai_llm: BlogCategory = {
	title: "AI & LLM",
	blogs: [
		{
			title: "Setting Up LlamaEdge on Devuan with DeepSeek R1 1.5B",
			description:
				"Runs the LlamaEdge runtime on Devuan, deploys DeepSeek weights, and exposes an API endpoint.",
			url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Setup-LlamaEdge",
			tags: ["AI", "LLM", "LlamaEdge", "Devuan"],
		},
	],
};

const virtualization_hypervisor: BlogCategory = {
	title: "Virtualization & Hypervisor",
	blogs: [
		{
			title: "How to Fix 'VT-x is Being Used by Another Hypervisor' Error in VirtualBox (Linux)",
			description:
				"Diagnoses KVM conflicts, disables competing services, and restores VirtualBox VT-x support.",
			url: "https://medium.com/@nishujangra27/how-to-fix-vt-x-is-being-used-by-another-hypervisor-error-in-virtualbox-linux-2a6d35e57075",
			tags: ["VirtualBox", "VT-x", "Linux"],
		},
	],
};

export const blogs: BlogCategory[] = [
	programming_development,
	system_administration_linux,
	ebpf_kernel_programming,
	networking_infrastructure,
	juju_devops,
	redis_keydb,
	other_devops_tools,
	deployment,
	ai_llm,
	virtualization_hypervisor,
];
