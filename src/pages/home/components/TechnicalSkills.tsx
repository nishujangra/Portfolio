import { skills } from "@/data/skills";

const TechnicalSkills = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-12 tracking-wider">
        TECHNICAL SKILLS
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((category) => (
          <div
            key={category.title}
            className="
              bg-bg-secondary 
              border border-border-primary 
              p-7 rounded-xl 
              shadow-[0_0_12px_rgba(255,255,255,0.04)] 
              hover:shadow-[0_0_18px_rgba(255,255,255,0.07)]
              hover:-translate-y-1
              transition-all duration-200
            "
          >
            <h3 className="text-xl font-semibold mb-5 text-accent tracking-wide">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <span
                  key={skill.name}
                  className={`
                    px-3.5 py-1.5 
                    rounded-md 
                    text-sm tracking-wide
                    border transition-all duration-200
                    ${
                      skill.primary
                        ? "bg-bg-tertiary text-accent border-accent shadow-[0_0_6px_rgba(255,255,255,0.15)] hover:shadow-[0_0_10px_rgba(255,255,255,0.25)]"
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
