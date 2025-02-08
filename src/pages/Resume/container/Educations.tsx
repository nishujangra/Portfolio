import { BookOpen } from "lucide-react"

const Educations = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex gap-5 justify-start items-center">
                <div className="border-gold border-[1px] p-3 rounded-xl">
                    <BookOpen
                        size={16}
                        color="gold"
                    />
                </div>
                <h2 className="text-xl font-bold flex justify-center items-center">Education</h2>
            </div>

            <div className="flex">
                <div className="relative left-5">
                    <div className="absolute left-2 transform -translate-x-1/2 h-full w-[1px] bg-gold"></div>
                    <div className="h-4 w-4 rounded-full bg-gold"></div>
                    <div className="h-4 w-4 rounded-full bg-gold mt-40"></div>
                </div>

                <div className="ml-20 flex flex-col gap-7">
                    <div className="">
                        <h3 className="text-md font-semibold">J.C. Bose University of Science and Technology, YMCA</h3>
                        <p className="italic text-md">Bachelor of Technology in Electronics and Communication Engineering</p>
                        <p className="text-gray-500 text-sm">Nov 2021 - June 2025</p>
                        <p className="text-gray-500 mt-2 text-sm">
                            Focused on technical skills in web development, DSA, and programming, while exploring core
                            electronics and communication subjects.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-md font-semibold">R.E.D. Sr. Secondary School, CHK, Jhajjar</h3>
                        <p className="italic text-md">High School</p>
                        <p className="text-gray-500 mt-2 text-sm">
                            Emphasized foundational subjects in mathematics and science, with a focus on analytical thinking
                            and problem-solving.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Educations
