interface Project {
    id: number;
    title: string;
    desc: string;
    img: string;
    iconLists: string[] | undefined;
    demoLink: string;
    githubLink: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="mt-6 space-y-8 p-4 rounded-lg mx-auto text-sm md:text-base bg-[#2b3d63] text-[#e7ebf2] flex justify-between flex-col">
            <div className="space-y-4 flex flex-col justify-between">
                <strong className="text-lg md:text-xl font-semibold text-center">
                    {project.title}
                </strong>
                <div className="flex justify-center">
                    <hr className="h-1 bg-gold rounded-lg w-3/4" />
                </div>
                <p>
                    {project.desc}
                    {/* {
                        project.desc.length > 150
                            ? `${project.desc.slice(0, 150)}`
                            : project.desc
                    }
                    {
                        project.desc.length > 150 ? (
                            <span className="text-blue-500">
                                ...Read More
                            </span>
                        ) : (
                            ""
                        )
                    } */}
                </p>
            </div>
            <div className="flex">
                {project.iconLists?.map((icon, index) => (
                    <img
                        key={index}
                        src={icon}
                        alt="icon"
                        className="w-8 h-8 m-2" // Adjusted size to be consistent
                    />
                ))}
            </div>
            <div className="flex gap-4 justify-between">
                <a
                    href={project.githubLink}
                    className="text-gold hover:text-yellow-400"
                >
                    Github Repo
                </a>
                {project.demoLink && (
                    <a
                        href={project.demoLink}
                        className="text-gold hover:text-yellow-400"
                    >
                        Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
