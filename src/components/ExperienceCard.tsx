import { HoverBorderGradient } from "./ui/hover-border-gradient";

interface props {
    title: string;
    desc: string;
    thumbnail: string;
}

const ExperienceCard = ( work : props) => {
    return (
        <div className="m-6">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
            >
                <div className="flex gap-5 p-4 justify-center items-center">
                    <div className="w-2/3">
                        <img src={`/src/assets/${work.thumbnail}`} alt="" className="w-36 h-36" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-semibold">
                            {work.title}
                        </h3>
                        <p className="font-extralight">
                            {work.desc}
                        </p>
                    </div>
                </div>
            </HoverBorderGradient>
        </div>
    )
};

export default ExperienceCard
