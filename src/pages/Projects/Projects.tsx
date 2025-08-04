import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

const Projects = () => {
    return (
        <main className="p-6 bg-[#111827] min-h-screen">
            <div className="flex flex-col justify-center items-center min-h-[80vh]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg p-8 border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
                    <h1 className="text-5xl font-extrabold text-center mb-8">
                        Projects
                    </h1>
                    <p className="text-center mb-8 max-w-2xl mx-auto text-gray-300">
                        A collection of my technical projects showcasing various skills in web development, 
                        system administration, and software engineering.
                    </p>
                    
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
            </div>
        </main>
    );
};

export default Projects;
