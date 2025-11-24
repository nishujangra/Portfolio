import type { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<motion.div
			className="bg-space-800 border border-space-700 rounded-xl p-4 flex flex-col justify-between shadow-md hover:shadow-lg transition-all"
			whileHover={{ y: -5 }}
		>
			<div className="flex justify-between items-start mb-2">
				<h3 className="text-lg font-semibold text-neon-400">
					{project.name}
				</h3>
				<span
					className={`px-2 py-1 rounded-full text-xs font-bold ${
						project.progress === "completed"
							? "bg-green-500 text-black"
							: project.progress === "ongoing"
							? "bg-yellow-500 text-black"
							: "bg-blue-500 text-white"
					}`}
				>
					{project.progress.toUpperCase()}
				</span>
			</div>

			{project.workplace && (
				<p className="text-text-secondary italic mb-2">
					{project.workplace}
				</p>
			)}

			<div className="flex flex-wrap gap-2 mb-4">
				{project.tech.map((tech) => (
					<span
						key={tech}
						className="px-1.5 py-0.5 bg-space-900 text-neon-400 text-xs rounded-md"
					>
						{tech}
					</span>
				))}
			</div>

			<ul className="list-disc list-inside space-y-1 mb-4 text-text-primary/90 line-clamp-3">
				{project.description.map((desc, i) => (
					<li key={i}>{desc}</li>
				))}
			</ul>

			<div className="flex gap-4 mt-auto">
				{project.github && (
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="text-neon-400 hover:text-neon-500 hover:underline text-sm font-semibold transition-colors"
					>
						GitHub
					</a>
				)}
				{project.bitbucket && (
					<a
						href={project.bitbucket}
						target="_blank"
						rel="noopener noreferrer"
						className="text-neon-400 hover:text-neon-500 hover:underline text-sm font-semibold transition-colors"
					>
						Bitbucket
					</a>
				)}
				{project.blog && (
					<a
						href={project.blog}
						target="_blank"
						rel="noopener noreferrer"
						className="text-cyber-400 hover:text-cyber-500 hover:underline text-sm font-semibold transition-colors"
					>
						Blog
					</a>
				)}
				{project.website && (
					<a
						href={project.website}
						target="_blank"
						rel="noopener noreferrer"
						className="text-cyber-400 hover:text-cyber-500 hover:underline text-sm font-semibold transition-colors"
					>
						Website
					</a>
				)}
			</div>
		</motion.div>
	);
};

export default ProjectCard;
