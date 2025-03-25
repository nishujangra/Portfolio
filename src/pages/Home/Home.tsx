import Hero from "./container/Hero";
// import Experience from "./container/Experience";
import About from "./container/About";
import Skills from "./container/Skills";

const Home = () => {
    return (
        <main className="min-h-screen">
            <Hero />
            <About />
            {/* <Experience /> */}
            <Skills />
            
        </main>
    );
};

export default Home;
