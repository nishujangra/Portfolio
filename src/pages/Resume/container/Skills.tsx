import skill from "@/data/skill"
import { Lightbulb } from "lucide-react"


const Skills = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                <div className="flex gap-5 justify-start items-center">
                    <div className="border-gold border-[1px] p-3 rounded-xl">
                        <Lightbulb
                            size={16}
                            color="gold"
                        />
                    </div>
                    <h2 className="text-xl font-bold flex justify-center items-center">Skills</h2>
                </div>
                <p className="text-gray-400">
                    Here are the technologies and tools I work with:
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skill.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-background rounded-lg p-5 shadow-lg">
                        <img src={item.image} alt={item.name} className="w-10 h-10" />
                        <div className="text-light flex justify-center items-center">
                            <h3 className="text-sm font-bold">{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
