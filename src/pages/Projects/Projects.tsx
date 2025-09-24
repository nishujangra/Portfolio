import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

const Projects = () => {
    return (
        <main className="w-full h-full py-8 md:p-0">
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-4">Projects</h1>
                    <p className="text-gray-400 text-lg">
                        A collection of my technical projects showcasing various skills in web development, 
                        system administration, and software engineering.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                
                <div className="mt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        Total: {projects.length} projects
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Projects;
