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
                    ,a self-taught Backend Developer focused on building secure
                    and efficient web services with{" "}
                    <strong className="text-blue-400">Golang</strong>. I
                    specialize in{" "}
                    <strong className="text-blue-400">
                        PostgreSQL, caching (KeyDB, Redis), and server
                        management
                    </strong>
                    , with experience in Echo, GORM, and sqlc. I&apos;m always
                    learning—right now, I'm diving deeper into networking, web
                    security, and reverse proxy servers.
                    <br />
                    <br />
                    Currently interning as a Backend Developer at Udyansh, I
                    work on everything from API integrations and cron jobs to
                    JWT-based RBAC systems. I&apos;ve also authored detailed
                    technical blogs on Bitbucket Wiki, focusing on clear
                    documentation and developer experience. I enjoy solving
                    complex backend challenges, automating workflows, and
                    writing clean, scalable code. I thrive in Linux-based
                    environments where performance and precision matter. My
                    approach to building is simple:{" "}
                    <strong className="text-blue-400">
                        keep it fast, secure, and well-documented.
                    </strong>{" "}
                    When I&apos;m not coding, I&apos;m probably writing about it
                    or improving my understanding of systems, networks, or cloud
                    infrastructure. Let&apos;s build something awesome.
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
