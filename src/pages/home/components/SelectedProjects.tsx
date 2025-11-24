import { projects } from "@/data/projects";

const SelectedProjects = () => {
  const selectedProjects = projects.filter((p) => p.selected);

  return (
    <section className="py-12">
      <h2 className="text-xl md:text-2xl font-bold text-accent mb-8 tracking-wide uppercase">
        Featured Projects
      </h2>

      <div className="flex flex-col gap-6">
        {selectedProjects.map((proj) => (
          <div
            key={proj.name}
            className="
              border border-border-primary rounded-lg p-4
              bg-bg-secondary/60 backdrop-blur-sm
              hover:bg-bg-tertiary/70 transition-all
              shadow-[0_0_8px_rgba(0,0,0,0.2)]
              hover:shadow-[0_0_12px_rgba(0,0,0,0.3)]
            "
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
              <h3 className="text-lg md:text-xl text-accent font-semibold">
                {proj.name}
              </h3>

              <span
                className={`
                  mt-2 md:mt-0 px-2 py-0.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wide
                  ${
                    proj.progress === "completed"
                      ? "bg-green-600/20 text-green-300"
                      : proj.progress === "ongoing"
                      ? "bg-yellow-600/20 text-yellow-300"
                      : "bg-gray-600/20 text-gray-300"
                  }
                `}
              >
                {proj.progress[0].toUpperCase() + proj.progress.slice(1)}
              </span>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-3">
              {proj.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-2 py-0.5 text-xs md:text-[11px] rounded-md
                    bg-bg-tertiary/60 text-text-secondary
                    border border-border-secondary/30
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <ul className="list-disc list-inside text-text-primary/90 space-y-1 mb-3 text-sm md:text-[14px]">
              {proj.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-1">
              {proj.github && (
                <LinkButton href={proj.github}>GitHub</LinkButton>
              )}
              {proj.blog && <LinkButton href={proj.blog}>Blog</LinkButton>}
              {proj.bitbucket && (
                <LinkButton href={proj.bitbucket}>BitBucket</LinkButton>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-2 py-0.5 text-sm rounded-md
      border border-accent text-text-primary
      hover:bg-accent/10 transition-all
    "
  >
    {children}
  </a>
);

export default SelectedProjects;
