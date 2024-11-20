import { BookOpen } from "lucide-react"

const Experience = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex gap-5 justify-start items-center">
                <div className="border-gold border-[1px] p-3 rounded-xl">
                    <BookOpen
                        size={24}
                        color="gold"
                    />
                </div>
                <h2 className="text-3xl font-bold flex justify-center items-center">Experience</h2>
            </div>

            <div className="flex">
                <div className="relative left-5">
                    <div className="absolute left-2 transform -translate-x-1/2 h-full w-[1px] bg-gold"></div>
                    <div className="h-4 w-4 rounded-full bg-gold"></div>
                    <div className="h-4 w-4 rounded-full bg-gold mt-48"></div>
                </div>

                <div className="ml-20 flex flex-col gap-9">
                    <div className="">
                        <h3 className="text-xl font-semibold">IEEE YMCA SB</h3>
                        <p className="italic">Backend Developer</p>
                        <p className="text-gray-500">Oct 2023</p>
                        <p className="text-gray-500 mt-2">
                            Designed and Developed Web Server for IEEE YMCA SB, I created the 'HunterXPokemon' web server using Node.js and MongoDB, with managing server hosting for 750+ registrations and enhancing the user experience.
                        </p>
                    </div>

                    <div className="">
                        <h3 className="text-xl font-semibold">For Client</h3>
                        <p className="italic">Web Developer</p>
                        <p className="text-gray-500">Nov 2022 - Feb 2023</p>
                        <p className="text-gray-500 mt-2">
                            Developed a professional resume website for Dr. Rohit Tripathi using HTML, CSS and JavaScript. Ensured a responsive design, cross-browser compatibility, and optimized performance. Collaborated with him for feedback.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
