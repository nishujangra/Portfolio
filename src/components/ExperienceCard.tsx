import { HoverBorderGradient } from "./ui/hover-border-gradient";

interface props {
    title: string;
    desc: string;
    thumbnail: string;
}

const ExperienceCard = (work: props) => {
    return (
        <div className="my-6 w-full">
            <HoverBorderGradient
                containerClassName="rounded-[2.5rem] md:rounded-[1.75rem]"
                as="button"
            >
                <div className="flex flex-col md:flex-row gap-5 p-4 justify-center items-center">
                    <div className="w-full md:w-2/3 justify-center hidden md:flex">
                        <img src={`/assets/${work.thumbnail}`} alt="" className="w-24 h-24 md:w-36 md:h-36" />
                    </div>
                    <div className='lg:ms-5 text-center md:text-start'>
                        <h1 className='text-xl md:text-2xl font-bold'>
                            {work.title}
                        </h1>
                        <p className='text-white-100 mt-3 font-extralight'>
                            <span className="block md:hidden">{work.desc.substring(0, 50)}...</span>
                            <span className="hidden md:block">{work.desc}</span>
                        </p>
                    </div>
                </div>
            </HoverBorderGradient>
        </div>
    )
};

export default ExperienceCard
