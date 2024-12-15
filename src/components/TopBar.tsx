import { ArrowDown, ArrowUp, Linkedin, Mail, MapPin, Smartphone } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react";

const TopBar = () => {
    const [showProfile, setShowProfile] = useState(false);

    return (
        <div className="flex flex-col justify-between items-center gap-10 w-full py-10 rounded-xl bg-foreground">
            <div className="flex flex-row justify-around items-center gap-5 w-full">
                <div className="flex flex-row justify-center items-center gap-3">
                    <div className="bg-background p-2 border-[1px] rounded-xl flex flex-col justify-center items-center">
                        <img
                            src="/nishujangra27.jpg"
                            alt="Nishant"
                            className="rounded-lg"
                            width={60}
                            height={60}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <h1 className="text-lg font-bold">Nishant </h1>
                        <h1 className="bg-background px-4 py-2 rounded-xl text-md text-light">Web Developer</h1>
                    </div>
                </div>

                <div>
                    <Button className="bg-gold gap-4 text-background hover:bg-background hover:text-gold" onClick={() => setShowProfile(!showProfile)}>
                        Show Contact
                        {showProfile ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                    </Button>
                </div>
            </div>

            {showProfile &&
                <hr className="bg-light w-[90%] h-1 rounded-lg" />
            }


            {showProfile &&
                <div className="flex flex-row gap-5 items-center">
                    <div className="flex flex-col gap-4 py-5 text-sm overflow-hidden">
                        <div className="flex flex-row gap-6 items-center">
                            <div className="bg-background p-3 rounded-xl">
                                <Mail
                                    color="gold"
                                    size={16}
                                />
                            </div>
                            <div>
                                <a href="mailto:ndjangra1027@gmail.com">ndjangra1027@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6 items-center">
                            <div className="bg-background p-3 rounded-xl">
                                <Smartphone
                                    color="gold"
                                    size={16}
                                />
                            </div>
                            <div>
                                <a href="">+91 9896774495</a>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6 items-center">
                            <div className="bg-background p-3 rounded-xl">
                                <MapPin
                                    color="gold"
                                    size={16}
                                />
                            </div>
                            <div>
                                <p className="max-w-[80%]">
                                    Faridabad, Haryana, India
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr className="bg-light h-40 w-1 rounded-lg" />

                    {/* Icons */}
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <a
                            href="https://github.com/nishujangra"
                            className="hover:scale-105 transition duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/assets/git.svg" alt="GitHub" color="gold" className="h-5 w-5 inline" />
                        </a>
                        <a
                            href="https://buymeacoffee.com/nishujangra27"
                            className="hover:scale-105 transition duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/assets/bmc.svg" alt="Buy Me A Coffee" className="h-5 w-5 inline" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nishujangra27/"
                            className="hover:scale-105 transition duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin
                                size={20}
                                color="white"
                            />
                        </a>
                    </div>
                </div>
            }
        </div >
    )
}

export default TopBar