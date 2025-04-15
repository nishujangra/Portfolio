import { Button } from "@/components/ui/button";
import projects from "@/data/projects";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
    const { id } = useParams();
    const idInt = parseInt(id as string, 10);

    return (
        <main className="min-h-screen">
            {projects.map((project) => {
                {
                    if (project.id === idInt) {
                        return (
                            <section className="p-8" key={project.id}>
                                <h2 className="text-lg md:text-2xl font-bold">
                                    &nbsp; {project.title}
                                </h2>
                                <hr
                                    style={{
                                        width: `${project.title.length + 10}vw`,
                                    }}
                                    className="rounded-full h-1 bg-gold"
                                />
                                <div className="mt-6 space-y-4 p-4 rounded-lg mx-auto text-sm md:text-base">
                                    <div className="flex flex-col justify-center space-y-4">
                                        <div className="flex justify-center">
                                            <img
                                                src={project.img}
                                                alt={project.title}
                                                className="w-1/2 h-auto object-contain rounded-lg shadow-lg mb-4 max-h-72"
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-4 justify-center">
                                            <p className="text-gray-400">
                                                {project.desc}
                                            </p>
                                            <div className="flex flex-wrap justify-center space-x-2">
                                                <a 
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className=""
                                                >
                                                    <Button
                                                        variant="outline"
                                                        className="mt-4"
                                                    >
                                                        View Code
                                                    </Button>
                                                </a>

                                                <a
                                                    href={project.demoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className=""
                                                >
                                                    <Button
                                                        variant="outline"
                                                        className="mt-4"
                                                    >
                                                        View Demo
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );
                    } else {
                        return null;
                    }
                }
            })}
        </main>
    );
};

export default ProjectPage;
