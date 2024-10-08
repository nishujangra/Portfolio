import SkillCard from "@/components/SkillCard";
import skill from "@/data/skill";


const Skills = () => {
  return (
    <section id="skills" className="p-10">
      <div className="max-w-[90vw] mx-auto">
        <h2 className="text-3xl font-bold text-start">Skills & Tools</h2>
        <div className="px-4">
          <ul className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-4">
            {skill.map((s, index) => (
              <SkillCard key={index} skillName={s.name} skillImage={s.image} skillDescription={s.description} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;