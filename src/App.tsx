import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import WhoAmI from "./sections/WhoAmI";
import Contact from './sections/Contact';
import Navbar from "./components/Navbar";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <div>
      <Navbar />
      <WhoAmI />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
