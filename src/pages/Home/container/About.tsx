const About = () => {
    return (
        <section className="p-8 w-full flex space-x-4 flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col w-full">
                <h2 className="text-lg md:text-2xl font-bold">
                    &nbsp;About Me
                </h2>
                <hr className="bg-gold h-1 w-[35vw] md:w-[20vw] lg:w-[15vw] rounded-full" />

                <div className="mt-6 space-y-4 p-4 rounded-lg mx-auto text-sm md:text-base">
                    <strong className="text-lg md:text-xl font-semibold">
                        Hi, I&apos;m Nishant
                    </strong>{" "}
                    , a backend developer focused on building secure and
                    efficient web services with{" "}
                    <strong className="text-blue-600">Golang</strong>. I
                    specialize in{" "}
                    <strong className="text-blue-600">
                        PostgreSQL, caching (KeyDB, Redis), and server
                        management
                    </strong>
                    , with experience in Echo, GORM, and sqlc. I&apos;m always
                    learning—right now, I'm diving deeper into networking, web
                    security, and reverse proxy servers (SAM).
                    <br />
                    <br />
                    I&apos;m a passionate Software Engineer with hands-on
                    experience in building scalable backend systems and
                    full-stack applications. I specialize in Go, Node.js, and
                    React with a strong foundation in data structures,
                    algorithms, and system design. I&apos;ve developed and
                    optimized microservices capable of handling high-traffic
                    requests, implemented secure authentication systems (JWT,
                    RBAC), andworked extensively with databases like PostgreSQL
                    and MongoDB.
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
