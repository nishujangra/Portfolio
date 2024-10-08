import ExperienceCard from "@/components/ExperienceCard"
import workExperience from "@/data/experienct";


const Experience = () => {
    return (
        <section id="experience" className="p-10 max-w-[90vw] mx-auto h-full">
            <h2 className="text-3xl font-bold text-start">Experience</h2>
            <div className="mt-4 mx-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                {workExperience.map((exp) => (
                    <ExperienceCard key={exp.id} {...exp} />
                ))}
            </div>
        </section>
    )
}

export default Experience
