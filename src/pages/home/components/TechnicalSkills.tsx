import { skills } from "@/data/skills";

const TechnicalSkills = () => {
  return (
    <section className="py-12">
      <h2 className="text-xl md:text-2xl font-bold text-accent mb-8 tracking-wide">
        TECHNICAL SKILLS
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category) => (
          <div
            key={category.title}
            className="
              bg-bg-secondary 
              border border-border-primary 
              p-5 rounded-lg 
              shadow-[0_0_8px_rgba(255,255,255,0.04)] 
              hover:shadow-[0_0_12px_rgba(255,255,255,0.07)]
              hover:-translate-y-0.5
              transition-all duration-200
            "
          >
            <h3 className="text-lg font-semibold mb-3 text-accent tracking-wide">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill.name}
                  className={`
                    px-3 py-1 
                    rounded-md 
                    text-sm tracking-wide
                    border transition-all duration-200
                    ${
                      skill.primary
                        ? "bg-bg-tertiary text-accent border-accent shadow-[0_0_4px_rgba(255,255,255,0.15)] hover:shadow-[0_0_8px_rgba(255,255,255,0.25)]"
                        : "bg-bg-secondary text-text-secondary border-border-secondary/40 hover:border-border-primary/70 hover:text-text-primary"
                    }
                  `}
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
