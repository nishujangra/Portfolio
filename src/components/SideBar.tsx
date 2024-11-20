import { Linkedin, Mail, MapPin, Smartphone } from "lucide-react"


const SideBar = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 py-10 rounded-xl">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="bg-background p-6 border-[1px] border-gold rounded-xl flex flex-col justify-center items-center">
          <img
            src="/nishujangra27.jpg"
            alt="Nishant"
            className="rounded-full"
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-xl font-bold">Nishant </h1>
          <h1 className="bg-background px-4 py-2 rounded-xl text-lg text-light">Web Developer</h1>
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-8 border-y-[1px] py-5 border-light max-w-[80%] overflow-hidden">
        {/* Email */}
        <div className="flex flex-row gap-9 items-center">
          <div className="bg-background p-4 rounded-xl">
            <Mail
              color="gold"
              size={24}
            />
          </div>
          <div>
            <a href="mailto:ndjangra1027@gmail.com">ndjangra1027@.....</a>
          </div>
        </div>


        {/* Phone Number */}
        <div className="flex flex-row gap-9 items-center">
          <div className="bg-background p-4 rounded-xl">
            <Smartphone
              color="gold"
              size={24}
            />
          </div>
          <div>
            <a href="">+91 9896774495</a>
          </div>
        </div>


        {/* Location */}
        <div className="flex flex-row gap-9 items-center">
          <div className="bg-background p-4 rounded-xl">
            <MapPin
              color="gold"
              size={24}
            />
          </div>
          <div>
            <p className="max-w-[80%]">
              Faridabad, Haryana, India
            </p>
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="flex flex-row gap-4 justify-center items-center">
        <a
          href="https://github.com/nishujangra"
          className="hover:scale-105 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/git.svg" alt="GitHub" color="gold" className="h-7 w-7 inline" />
        </a>
        <a
          href="https://buymeacoffee.com/nishujangra27"
          className="hover:scale-105 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/bmc.svg" alt="Buy Me A Coffee" className="h-7 w-7 inline" />
        </a>
        <a
          href="https://www.linkedin.com/in/nishujangra27/"
          className="hover:scale-105 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            size={24}
            color="white"
          />
        </a>
      </div>
    </div>
  )
}

export default SideBar
