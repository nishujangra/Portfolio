import ProjectCard from "./components/ProjectCard";
import { projects } from "@/data/projects";

const Project = () => {
  return (
    <div className="relative min-h-screen w-full bg-bg-primary font-mono text-text-primary">
      <div className="relative z-10 mx-auto px-6 py-20 md:px-12 lg:px-24 lg:py-28">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-text-primary md:text-5xl mb-3">
            PROJECTS
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            A showcase of backend, systems, and full-stack projects.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
