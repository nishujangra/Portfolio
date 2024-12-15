import NavBar from "@/components/NavBar"
import projects from "@/data/projects"
import { FolderCode } from "lucide-react"

const Portfolio = () => {
    return (
        <div className="bg-foreground w-full h-full rounded-lg py-8 md:p-0">
            <NavBar />

            <h2 className="text-2xl pl-10 font-extrabold">Portfolio</h2>

            <hr className="bg-gold h-2 w-1/4 rounded-lg ml-6 mt-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-background rounded-lg p-5 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col gap-8 justify-between"
                    >
                        <div className="flex justify-center items-center w-full h-full">
                            {project.img ? (
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-40 object-contain rounded-lg"
                                />
                            ): (
                                <FolderCode size={64} className="text-gold mx-auto" />
                            )}
                        </div>
                        <div className="leading-1 flex flex-col justify-between w-full">
                            <h3 className="text-lg text-light text-center font-bold mb-2">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-4 text-xs">
                                {project.desc}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            {project.demoLink && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Live Demo
                                </a>
                            )}
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                <img
                                    src="/assets/git.svg"
                                    alt="github"
                                    className="w-6 h-6"
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
