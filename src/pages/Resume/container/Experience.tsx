import workExperience from "@/data/experience";
import { BookOpen } from "lucide-react"

const Experience = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex gap-5 justify-start items-center">
                <div className="border-gold border-[1px] p-3 rounded-xl">
                    <BookOpen
                        size={16}
                        color="gold"
                    />
                </div>
                <h2 className="text-xl font-bold flex justify-center items-center">Experience</h2>
            </div>

            <div className="flex">
                <div className="relative left-5">
                    <div className="absolute left-2 transform -translate-x-1/2 h-full w-[1px] bg-gold"></div>
                    <div className="h-4 w-4 rounded-full bg-gold"></div>

                    <div className="h-4 w-4 rounded-full bg-gold mt-44"></div>
                    <div className="h-4 w-4 rounded-full bg-gold mt-48"></div>
                </div>

                <div className="ml-20 flex flex-col gap-9">
                    {workExperience.map((exp) => (
                        <div key={exp.id} className="flex gap-1 flex-col">
                            <h3 className="text-md font-semibold">
                                {exp.title}
                            </h3>
                            <p className="italic text-md">
                                Udyansh
                            </p>
                            <p className="text-gray-500 text-sm">Jan 2025 - Present</p>
                            <p className="text-gray-500 mt-2 text-sm">
                                {exp.desc}    
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;
