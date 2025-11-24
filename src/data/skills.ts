export interface SkillItem {
	name: string;
	primary?: boolean;
}

export interface SkillCategory {
	title: string;
	icon?: string;
	items: SkillItem[];
}

/* -------------------- Languages -------------------- */

const languages: SkillCategory = {
	title: "Languages",
	items: [
		{ name: "Go", primary: true }, // 7/10 — 1.2 years
		{ name: "Rust" }, // 6/10 — 8-9 months
		{ name: "C/C++" }, // 5/10 — 2-3 years
		{ name: "Python" }, // 3/10 — 3-4 months
		{ name: "TypeScript" }, // 5/10 — 1-2 years
		{ name: "JavaScript" }, // 6/10 — 2-3 years
		{ name: "Java" }, // Basic only
		{ name: "PHP" }, // 1-2 months
	],
};

/* -------------------- Backend / Infra -------------------- */

const backend_infra: SkillCategory = {
	title: "Backend/Infra",
	items: [
		{ name: "REST APIs", primary: true },
		{ name: "Go Templates" },
		{ name: "Concurrent ETL Pipelines" },
		{ name: "RBAC" },
		{ name: "OAuth 2.0" },
		{ name: "JWT" },
		{ name: "WebSockets" },
	],
};

/* -------------------- Databases & Caching -------------------- */

const database_caching: SkillCategory = {
	title: "Databases & Caching",
	items: [
		{ name: "PostgreSQL" }, // 7/10 — 1.2 years
		{ name: "Redis" }, // Clustering, KeyDB multi-master
		{ name: "KeyDB" },
		{ name: "MongoDB" }, // 4-5 months
		{ name: "MySQL" }, // 2-3 months
		{ name: "Clustering" },
		{ name: "Replication" },
		{ name: "Database Indexing", primary: true },
	],
};

/* -------------------- Systems & Networking -------------------- */

const system_networking: SkillCategory = {
	title: "Systems/Networking",
	items: [
		{ name: "Linux", primary: true }, // 8/10 — daily driver
		{ name: "Linux Administration" },
		{ name: "iptables" },
		{ name: "nftables" },
		{ name: "NAT" },
		{ name: "dnsmasq" },
		{ name: "tcpdump" },
		{ name: "Shorewall" },
		{ name: "Debian/Devuan" },
		{ name: "Shell Scripting" },
		{ name: "Cron" },
		{ name: "Virtualization (VirtualBox)" },
	],
};

/* -------------------- DevOps / Tools -------------------- */

const devops_tools: SkillCategory = {
	title: "DevOps & Tools",
	items: [
		{ name: "Docker" },
		{ name: "CI/CD (GitHub Actions)" },
		{ name: "Ansible" },
		{ name: "Juju" }, // used for clustering
		{ name: "Git" },
		{ name: "GitHub" },
		{ name: "Bitbucket" },
		{ name: "Postman" },
		{ name: "cURL" },
		{ name: "VS Code" },
	],
};

/* -------------------- Cloud & Deployment -------------------- */

const cloud_deployment: SkillCategory = {
	title: "Cloud & Deployment",
	items: [
		{ name: "OVHCloud" }, // real experience
		{ name: "SSL/TLS" },
		{ name: "Domain Setup" },
		{ name: "Load Balancing" },
		{ name: "Distributed Systems" },
		{ name: "Nginx" },
		{ name: "Kubernetes (theory only)" }, // 1 month
	],
};

/* -------------------- CS Fundamentals -------------------- */

const cs_fundamentals: SkillCategory = {
	title: "CS Fundamentals",
	items: [
		{ name: "Data Structures & Algorithms (600+)" },
		{ name: "OS", primary: true },
		{ name: "DBMS", primary: true },
		{ name: "Networking", primary: true },
		{ name: "OOP" },
		{ name: "System Design", primary: true },
		{ name: "Algorithms" },
	],
};

/* -------------------- Soft Skills -------------------- */

const soft_skills: SkillCategory = {
	title: "Soft Skills",
	items: [
		{ name: "Technical Blogging", primary: true },
		{ name: "Documentation" },
		{ name: "Open Source" },
		{ name: "Team Communication" },
		{ name: "Agile" },
	],
};

/* -------------------- Frontend -------------------- */

const frontend: SkillCategory = {
	title: "Frontend",
	items: [{ name: "React.js" }, { name: "Vite" }, { name: "Tailwind CSS" }],
};

export const skills: SkillCategory[] = [
	languages,
	backend_infra,
	database_caching,
	system_networking,
	devops_tools,
	cloud_deployment,
	cs_fundamentals,
	soft_skills,
	frontend,
];
