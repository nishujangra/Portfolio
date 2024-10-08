import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type ProjectCardProps = {
    title: string;
    desc: string;
    img: string;
    iconLists: string[];
    link: string;
    // githubLink: string;
    // siteLink: string;
};

const ProjectCard = ({ title, desc, img, iconLists, link }: ProjectCardProps) => {
    return (
        <Card className="p-6 border-2 mt-4 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <CardHeader className="flex items-center justify-between">
                <img src={`/assets/${img}`} alt="Project Image" className="rounded-lg w-full h-48 object-cover" />
            </CardHeader>
            <CardTitle className="text-xl font-bold pb-4 text-center">
                {title}
            </CardTitle>
            <CardDescription className="text-sm mb-4 text-center">
                {desc}
            </CardDescription>
            <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                    {iconLists.map((icon, index) => (
                        <img key={index} src={`/assets/${icon}`} alt="icon" className="w-8 h-8" />
                    ))}
                </div>
                <div className="flex gap-4">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        <img src="/assets/git.svg" alt="GitHub" className="h-8 w-8 inline" />
                    </a>
                    {/* <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                        GitHub
                    </a> */}
                    {/* <a href={siteLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                        Site
                    </a> */}
                </div>
            </div>
        </Card>
    )
}

export default ProjectCard