const About = () => {
    return (
        <section className="p-8 w-full flex space-x-4 flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col w-full">
                <h2 className="text-lg md:text-2xl font-bold">
                    &nbsp;About Me
                </h2>
                <hr className="bg-gold h-1 w-[35vw] md:w-[20vw] lg:w-[15vw] rounded-full" />

                <div className="mt-6 space-y-4 p-4 mx-auto text-sm md:text-base">
                    <strong className="text-lg md:text-xl font-semibold">
                        Hi, I&apos;m Nishant
                    </strong>{" "}  
                    , a Backend Engineer skilled in secure APIs, distributed systems, and Linux tooling. 
                    Currently ranked{" "}
                    <strong className="text-blue-400">Top 11.8% in METI Japan IT Contest 2025</strong>.
                    <br />
                    <br />
                    I specialize in{" "}
                    <strong className="text-blue-400">Go, Redis, and RBAC systems</strong>
                    , with strong open-source contributions. Currently working as a Backend Developer at Udyansh, 
                    I work on API integrations, cron jobs, and JWT-based authentication systems.
                    <br />
                    <br />
                    I enjoy solving complex backend challenges, automating workflows, and writing clean, scalable code. 
                    My approach:{" "}
                    <strong className="text-blue-400">
                        keep it fast, secure, and well-documented.
                    </strong>
                </div>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center w-full">
                <img
                    src="/working.jpeg"
                    alt="Nishant"
                    className="rounded-xl shadow-lg w-[80%] h-auto"
                />
            </div>
        </section>
    );
};

export default About;
