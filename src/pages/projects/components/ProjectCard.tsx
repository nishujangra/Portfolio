import type { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const badgeClass =
    project.progress === "completed"
      ? "bg-green-500 text-black"
      : project.progress === "ongoing"
      ? "bg-yellow-500 text-black"
      : "bg-blue-500 text-white";

  return (
    <motion.div
      className="bg-bg-secondary border border-border-muted rounded-xl p-4 flex flex-col shadow-md hover:shadow-lg transition-all"
      whileHover={{ y: -5 }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-text-primary">
          {project.name}
        </h3>

        <span className={`px-2 py-1 rounded-full text-xs font-bold ${badgeClass}`}>
          {project.progress.toUpperCase()}
        </span>
      </div>

      {/* Workplace */}
      {project.workplace && (
        <p className="text-text-muted italic mb-2">{project.workplace}</p>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-1.5 py-0.5 bg-bg-primary text-highlight text-xs rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <ul className="list-disc list-inside space-y-1 mb-4 text-text-primary/90 line-clamp-3">
        {project.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>

      {/* Links */}
      <div className="flex gap-4 mt-auto">
        {project.github && <LinkButton href={project.github}>GitHub</LinkButton>}
        {project.bitbucket && <LinkButton href={project.bitbucket}>Bitbucket</LinkButton>}
        {project.blog && <LinkButton href={project.blog}>Blog</LinkButton>}
        {project.website && <LinkButton href={project.website}>Website</LinkButton>}
      </div>
    </motion.div>
  );
};

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-text-primary hover:text-highlight hover:underline text-sm font-semibold transition-colors"
  >
    {children}
  </a>
);

export default ProjectCard;
