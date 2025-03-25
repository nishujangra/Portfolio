const Experience = () => {
    return (
        <section className="p-8">
            <h2 className="text-2xl font-bold mb-4">Resume</h2>
            <div className="mb-4">
                <h3 className="text-xl font-semibold">Experience</h3>
                <p className="text-gray-300">
                    Senior Software Developer at XYZ Corp (2015 - Present)
                </p>
                <ul className="list-disc list-inside text-gray-400">
                    <li>
                        Led a team of developers to create scalable web
                        applications.
                    </li>
                    <li>
                        Implemented best practices for code quality and
                        performance.
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-gray-300">
                    Bachelor of Science in Computer Science, ABC University
                    (2000 - 2004)
                </p>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-bold">Skills</h3>
                <p className="text-gray-300 mt-2">
                    Go, JavaScript, TypeScript, React, Node.js, MongoDB,
                    PostgreSQL, Tailwind CSS
                </p>
            </div>
        </section>
    );
};

export default Experience;
