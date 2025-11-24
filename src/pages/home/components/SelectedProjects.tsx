import { projects } from "@/data/projects";

const SelectedProjects = () => {
  const selectedProjects = projects.filter((p) => p.selected);

  return (
    <section className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-neon-400 mb-12 tracking-wider uppercase">
        Featured Projects
      </h2>

      <div className="flex flex-col gap-8 md:gap-12">
        {selectedProjects.map((proj) => (
          <div
            key={proj.name}
            className="border border-neon-400/20 rounded-xl p-6 hover:bg-neon-400/10 transition-all shadow-md"
          >
            {/* Header: Name + Progress */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl md:text-2xl text-neon-400 font-semibold">
                {proj.name}
              </h3>
              <span
                className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-sm font-medium ${
                  proj.progress === "completed"
                    ? "bg-green-600/30 text-green-400"
                    : proj.progress === "ongoing"
                    ? "bg-yellow-600/30 text-yellow-400"
                    : "bg-gray-600/30 text-gray-300"
                }`}
              >
                {proj.progress.charAt(0).toUpperCase() + proj.progress.slice(1)}
              </span>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm rounded-md bg-space-800 text-text-secondary border border-space-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <ul className="list-disc list-inside text-text-primary/90 space-y-1">
              {proj.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {/* Links */}
            <div className="mt-4 flex flex-wrap gap-4">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  className="px-3 py-1 text-sm rounded-md border border-neon-400 hover:bg-neon-400/10 transition-all"
                >
                  GitHub
                </a>
              )}
              {proj.blog && (
                <a
                  href={proj.blog}
                  target="_blank"
                  className="px-3 py-1 text-sm rounded-md border border-neon-400 hover:bg-neon-400/10 transition-all"
                >
                  Blog
                </a>
              )}
              {proj.bitbucket && (
                <a
                  href={proj.bitbucket}
                  target="_blank"
                  className="px-3 py-1 text-sm rounded-md border border-neon-400 hover:bg-neon-400/10 transition-all"
                >
                  BitBucket
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedProjects;
