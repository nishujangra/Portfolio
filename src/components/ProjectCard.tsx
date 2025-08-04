interface Project {
    id: number;
    title: string;
    desc: string;
    iconLists: string[] | undefined;
    demoLink: string;
    githubLink: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors duration-200 border border-gray-700 h-full flex flex-col">
            <div className="flex-1 space-y-4">
                <h3 className="text-lg font-semibold text-gray-100 mb-2 line-clamp-2">
                    {project.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-4">
                    {project.desc}
                </p>
            </div>
            
            {project.iconLists && project.iconLists.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.iconLists.map((icon, index) => (
                        <img
                            key={index}
                            src={icon}
                            alt="technology icon"
                            className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity duration-200"
                        />
                    ))}
                </div>
            )}
            
            <div className="flex gap-4 justify-between items-center pt-4 border-t border-gray-700">
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 flex items-center"
                >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                </a>
                {project.demoLink && (
                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-200 flex items-center"
                    >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
