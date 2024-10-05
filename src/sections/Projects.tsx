import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";
import { Terminal } from "lucide-react";


const Projects = () => {
  return (
    <section id="projects" className="p-10 max-w-[90vw] mx-auto h-full">
      <h2 className="text-3xl font-bold">
        <Terminal className="h-8 w-8 inline mr-3" />
        Projects
      </h2>
      <div className="grid gap-5 mt-5 mx-4 w-full md:grid-cols-2 grid-cols-1 max-h-fit ">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.desc}
            img={project.img}
            iconLists={project.iconLists}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;