import Hero from "./components/Hero";
import SelectedProjects from "./components/SelectedProjects";
import TechnicalSkills from "./components/TechnicalSkills";

const Home = () => {
  return (
    <div className="w-full bg-space-950 text-text-primary font-mono relative overflow-hidden">
      {/* Main Content */}
      <div className="relative mx-auto px-8 md:px-16">
        {/* HERO */}
        <Hero />

        <div className="border-t border-neon-400/20"></div>

        {/* SKILLS */}
        <TechnicalSkills />

        <div className="border-t border-neon-400/20"></div>

        {/* PROJECTS */}
        <SelectedProjects />
      </div>
    </div>
  );
};

export default Home;
