import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <main className="min-h-screen">
            <section className="p-8">
                <h2 className="text-lg md:text-2xl font-bold">
                    &nbsp;Projects
                </h2>
                <hr className="bg-gold h-1 w-[35vw] md:w-[20vw] lg:w-[15vw] rounded-full" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {projects.map((project) => (
                        <Link
                            to={`/projects/${project.id}`}
                            className="w-full h-full flex"
                        >
                            <ProjectCard project={project} />
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Projects;
