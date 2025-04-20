const Skills = () => {
    return (
        <section className="p-8 w-full">
            <h2 className="text-2xl font-bold">&nbsp;Technical Skills</h2>
            <hr className="bg-gold h-1 w-[70vw] md:w-[20vw] lg:w-[20vw] rounded-full" />

            <div className="mt-6 flex flex-col space-y-4 p-4 rounded-lg mx-auto text-sm md:text-base">
                <div className="">
                    <span className="text-gray-300">
                        <strong>Programming: </strong>
                    </span>
                    <span className="text-gray-400">
                        Go, C++, Python, JavaScript (TypeScript), Shell
                    </span>
                </div>
                <div className="">
                    <span className="text-gray-300">
                        <strong>Backend & Frameworks: </strong>
                    </span>
                    <span className="text-gray-400">
                        Node.js, Express.js, Echo (Go), REST APIs, JWT, RBAC,
                        Cron Jobs
                    </span>
                </div>
                <div className="">
                    <span className="text-gray-300">
                        <strong>Frontend Technologies: </strong>
                    </span>
                    <span className="text-gray-400">
                        React.js, Vite, Tailwind CSS (basic to intermediate)
                    </span>
                </div>
                <div className="">
                    <span className="text-gray-300">
                        <strong>Databases & Caching: </strong>
                    </span>
                    <span className="text-gray-400">
                        PostgreSQL, MongoDB, KeyDB, Redis
                    </span>
                </div>
                <div className="">
                    <span className="text-gray-300">
                        <strong>DevOps & Tools: </strong>
                    </span>
                    <span className="text-gray-400">
                        Linux (Ubuntu), Shell Scripting, Cron Jobs, Git, GitHub,
                        VS Code, Postman, Bitbucket, cURL, BitBucket
                    </span>
                </div>
                <div className="">
                    <span className="text-gray-300">
                        <strong>
                            Cloud & Deployment (Learning/Exploring):{" "}
                        </strong>
                    </span>
                    <span className="text-gray-400">
                        Docker, Nginx, , OAuth 2.0
                    </span>
                </div>
                <div className="">
                    <span className="text-gray-300">
                        <strong>CS Fundamentals:</strong>
                    </span>
                    <span className="text-gray-400">
                        Data Structures & Algorithms (600+ LeetCode problems),
                        DBMS, OS, Networking Basics
                    </span>
                </div>
                <div>
                    <span className="text-gray-300">
                        <strong>Soft Skills:</strong>
                    </span>
                    <span className="text-gray-400">
                        Technical Blogging, Documentation, Open Source
                        Contributions, Agile Collaboration, Team Communication
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Skills;
