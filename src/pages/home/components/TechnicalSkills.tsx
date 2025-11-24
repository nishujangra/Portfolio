import { skills } from "@/data/skills";

const TechnicalSkills = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-electric-400 mb-12 tracking-wider">
        TECHNICAL SKILLS
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category) => (
          <div
            key={category.title}
            className="bg-space-800 border border-space-700 p-6 rounded-xl shadow-[0_0_10px_rgba(0,255,65,0.1)] hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] transition-all"
          >
            <h3 className="text-xl font-semibold mb-4 text-electric-400 flex items-center gap-2">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1 rounded-md text-sm ${
                    skill.primary
                      ? "bg-space-900 text-neon-400 border border-neon-400 shadow-[0_0_8px_#2aff2a]"
                      : "bg-space-800 text-text-secondary"
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
