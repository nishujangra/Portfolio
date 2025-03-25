const Skills = () => {
    return (
        <section className="p-8 w-full">
            <h2 className="text-2xl font-bold">&nbsp;Technical Skills</h2>
            <hr className="bg-gold h-1 w-[70vw] md:w-[20vw] lg:w-[20vw] rounded-full" />

            <div className="mt-6 flex flex-col space-y-4 p-4 rounded-lg mx-auto text-sm md:text-base">
                <div className="">
                    <span className="text-gray-400">
                        <strong>Programming Languages: </strong>
                    </span>
                    <span className="text-gray-400">
                        Go, C++, JavaScript, Python, TypeScript
                    </span>
                </div>
                <div className="">
                    <span className="text-gray-400">
                        <strong>Frontend Technologies: </strong>
                    </span>
                    <span className="text-gray-400">
                        HTML5, CSS3, React, Tailwind CSS
                    </span>
                </div>
                <div className="">
                    <span className="text-gray-400">
                        <strong>Backend Technologies: </strong>
                    </span>
                    <span className="text-gray-400">
                        Node.js, Express, Echo, GORM, sqlc, REST APIs, Cron Jobs
                    </span>
                </div>
                <div className="">
                    <span className="text-gray-400">
                        <strong>Databases & Caching: </strong>
                    </span>
                    <span className="text-gray-400">
                        PostgreSQL, MongoDB, KeyDB, Redis
                    </span>
                </div>
                <div className="">
                    <span className="text-gray-400">
                        <strong>DevOps & Tools: </strong>
                    </span>
                    <span className="text-gray-400">
                        cURL, Postman, Git, Github, BitBucket
                    </span>
                </div>
                <div className="">
                    <span className="text-gray-400">
                        <strong>Core Concepts: </strong>
                    </span>
                    <span className="text-gray-400">
                        Data Structures, Algorithms, Networking, Operating Systems, DBMS
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Skills;
