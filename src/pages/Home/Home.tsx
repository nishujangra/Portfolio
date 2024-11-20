
import NavBar from "@/components/Navbar"
import { CodeXml, MonitorCog, PersonStanding, Settings } from "lucide-react"

const Home = () => {
  return (
    <div className="bg-foreground w-full h-full rounded-xl">
      <NavBar />
      <h2 className="text-3xl pl-10 font-extrabold">About Me</h2>

      <hr className="bg-gold h-2 w-1/3 rounded-lg ml-6 mt-4" />

      <div className="px-10 py-6 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <p>
            Hi, I&apos;m a passionate Full Stack Developer with a proven ability to transform ideas into dynamic, user-friendly web applications. With a specialization in the MERN stack, I excel at crafting both sleek frontends and powerful backends that deliver seamless user experiences. My technical expertise spans JavaScript, TypeScript, React, and Next.js, enabling me to create responsive, scalable, and efficient solutions tailored to meet diverse needs.
          </p>
          <p>
            Beyond technical skills, I am deeply committed to continuous learning and growth. Staying updated with emerging trends in web development helps me adapt quickly to new challenges and deliver cutting-edge solutions. I am always excited to explore new opportunities, tackle challenging projects, and contribute to innovative solutions. Let&apos;s work together to create something truly amazing and redefine what&apos;s possible with web applications!
          </p>
        </div>

        <div className="py-7">
          <h3 className="text-3xl font-bold pb-10">What I Do</h3>

          <div className="grid grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg bg-background p-3 grid grid-cols-12 border-[1px] border-gold">
              <div className="col-span-3 flex justify-center items-center">
                <CodeXml
                  size={48}
                  color="gold"
                />
              </div>
              <div className="px-2 py-4 col-span-9 flex flex-col justify-center items-center">
                <div className="font-bold text-xl mb-2">Web Development</div>
                <p className="leading-1 text-sm">
                  Building modern, scalable, and feature-rich websites and applications using the MERN stack, React, and Next.js.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg bg-background p-3 grid grid-cols-12 border-[1px] border-gold">
              <div className="col-span-3 flex justify-center items-center">
                <PersonStanding 
                  size={48}
                  color="gold"
                />
              </div>
              <div className="px-2 py-4 col-span-9 flex flex-col justify-center items-center">
                <div className="font-bold text-xl mb-2">Frontend Development</div>
                <p className="leading-1 text-sm">
                  Creating interactive and dynamic interfaces with JavaScript, TypeScript, and Tailwind CSS, ensuring responsiveness and accessibility.
                </p>
              </div>
            </div>


            <div className="rounded-lg overflow-hidden bg-background p-3 grid grid-cols-12 border-[1px] border-gold">
              <div className="col-span-3 flex justify-center items-center">
                <MonitorCog
                  size={48}
                  color="gold"
                />
              </div>
              <div className="px-2 py-4 col-span-9 flex flex-col justify-center items-center">
                <div className="font-bold text-xl mb-2">Backend Development</div>
                <p className="leading-1 text-sm">
                  Developing secure, robust APIs and server-side solutions with Node.js, Express, and MongoDB.
                </p>
              </div>
            </div>


            <div className="rounded-lg overflow-hidden shadow-lg bg-background p-3 grid grid-cols-12 border-[1px] border-gold">
              <div className="col-span-3 flex justify-center items-center">
                <Settings
                  size={48}
                  color="gold"
                />
              </div>
              <div className="px-2 py-4 col-span-9 flex flex-col justify-center items-center">
                <div className="font-bold text-xl mb-2">Custom API Development</div>
                <p className="leading-1 text-sm">
                  Developing RESTful APIs to enable seamless communication between frontend and backend systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
