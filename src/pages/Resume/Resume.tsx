import Educations from "./container/Educations"
import Experience from "./container/Experience"
import Skills from "./container/Skills"
import NavBar from "./../../components/NavBar"

const Resume = () => {
  return (
    <div className="bg-foreground w-full h-full rounded-lg py-8 md:p-0">
      <NavBar />

      <h2 className="text-2xl pl-10 font-extrabold">Resume</h2>

      <hr className="bg-gold h-2 w-1/4 rounded-lg ml-6 mt-4" />

      <div className="py-7 px-10 flex flex-col gap-16">
        <Educations />

        <Experience />

        <Skills />
      </div>
    </div>
  )
}

export default Resume
