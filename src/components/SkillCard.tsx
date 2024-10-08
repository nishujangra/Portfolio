import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


type SkillProps = {
    skillName: string;
    skillImage: string;
    skillDescription: string;
};

const SkillCard = ({ skillName, skillImage, skillDescription }: SkillProps) => {
    return (
        <Card className="bg-zinc-950 p-6 text-zinc-100 shadow-lg rounded-lg hover:shadow-xl hover:bg-zinc-800 transition duration-300 border-0">
            <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold pb-4">{skillName}</CardTitle>
                <img src={skillImage} alt={`${skillName} logo`} className="rounded-lg w-16 h-16" />
            </CardHeader>
            <CardDescription className="text-sm text-zinc-400 hidden sm:block">{skillDescription}</CardDescription>
        </Card>
    );
}

export default SkillCard;