import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Link } from "lucide-react";

type ProjectCardProps = {
    title: string;
    desc: string;
    img: string;
    iconLists: string[];
    link: string;
};


const ProjectCard = ({ title, desc, img, iconLists, link }: ProjectCardProps) => {
    return (
        <Card className="p-6 border-2 mt-4">
            <CardHeader className="flex items-center justify-between">
                <img src={`/src/assets/${img}`} alt="Project Image" className="rounded-lg w-full h-48 object-cover" />
            </CardHeader>
            <CardTitle className="text-xl font-bold pb-4 text-center">
                {title}
            </CardTitle>
            <CardDescription className="text-sm text-blue-300 mb-4">
                {desc}
            </CardDescription>
            <div className="flex justify-between">
                <div className="flex flex-wrap gap-2">
                    {iconLists.map((icon, index) => (
                        <img key={index} src={`/src/assets/${icon}`} alt="icon" className="w-8 h-8" />
                    ))}
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Link className="text-blue-400 hover:text-blue-300">
                    </Link>
                </a>
            </div>
        </Card>

    )
}

export default ProjectCard
