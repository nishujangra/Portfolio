import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

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
                        // <div className="mt-6 space-y-4 p-4 rounded-lg mx-auto text-sm md:text-base">
                        //     <strong className="text-lg md:text-xl font-semibold">
                        //         {project.title}
                        //     </strong>
                        //     <p>{project.desc}</p>
                        // </div>   
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Projects;
