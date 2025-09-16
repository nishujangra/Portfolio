const Skills = () => {
    return (
        <section className="p-8 w-full">
            <h2 className="text-2xl font-bold">&nbsp;TECHNICAL SKILLS</h2>
            <hr className="bg-gold h-1 w-[70vw] md:w-[20vw] lg:w-[20vw] rounded-full" />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Languages - Backend Focus */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:bg-gray-800/70 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Languages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["Go", "Rust", "C++", "Python", "TypeScript", "Perl", "JavaScript", "Bash"].map((skill, index) => (
                            <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium border ${
                                skill === "Go" || skill === "Rust" || skill === "C++" 
                                    ? "bg-blue-600/30 text-blue-200 border-blue-500/50" 
                                    : "bg-blue-600/20 text-blue-300 border-blue-600/30"
                            }`}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Backend/Infra - Primary Focus */}
                <div className="bg-gray-800/50 rounded-lg p-6 border-2 border-gold/50 hover:bg-gray-800/70 transition-colors duration-200 relative overflow-hidden">
                    <div className="absolute top-2 right-2 bg-gold/20 text-gold text-xs px-2 py-1 rounded-full font-medium">
                        PRIMARY
                    </div>
                    <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        Backend/Infra
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["REST APIs", "WebSockets", "RBAC", "OAuth 2.0", "JWT", "Argon2", "ETL Pipelines", "Load Balancing"].map((skill, index) => (
                            <span key={index} className="bg-green-600/30 text-green-200 px-3 py-1 rounded-full text-sm font-medium border border-green-500/50">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Databases & Caching - Core Backend */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:bg-gray-800/70 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                        </svg>
                        Databases & Caching
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["PostgreSQL", "Redis", "MongoDB", "CouchDB", "MySQL", "KeyDB", "Clustering", "Replication"].map((skill, index) => (
                            <span key={index} className="bg-yellow-600/30 text-yellow-200 px-3 py-1 rounded-full text-sm font-medium border border-yellow-500/50">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Systems/Networking - Infrastructure */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:bg-gray-800/70 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                        </svg>
                        Systems/Networking
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["Linux", "iptables", "NAT", "dnsmasq", "tcpdump", "Shorewall", "Shell", "Cron", "VirtualBox", "Debian/Devuan"].map((skill, index) => (
                            <span key={index} className="bg-indigo-600/30 text-indigo-200 px-3 py-1 rounded-full text-sm font-medium border border-indigo-500/50">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* DevOps/Tools - Backend Operations */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:bg-gray-800/70 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        DevOps/Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["Juju", "Ansible", "Git", "GitHub", "Bitbucket", "cURL", "Postman", "VS Code", "Docker", "Nginx"].map((skill, index) => (
                            <span key={index} className="bg-red-600/30 text-red-200 px-3 py-1 rounded-full text-sm font-medium border border-red-500/50">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Cloud & Deployment */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:bg-gray-800/70 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                        </svg>
                        Cloud & Deployment
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["Docker", "Nginx", "Domain Setup", "SSL/TLS", "Load Balancing", "Microservices", "Distributed Systems"].map((skill, index) => (
                            <span key={index} className="bg-teal-600/30 text-teal-200 px-3 py-1 rounded-full text-sm font-medium border border-teal-500/50">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* System Programming & Performance */}
                {/* <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:bg-gray-800/70 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        System Programming
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["Rocket.rs", "Performance Optimization", "Concurrent Programming", "Memory Management", "CLI Tools", "Load Balancers"].map((skill, index) => (
                            <span key={index} className="bg-pink-600/30 text-pink-200 px-3 py-1 rounded-full text-sm font-medium border border-pink-500/50">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div> */}

                {/* CS Fundamentals */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:bg-gray-800/70 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        CS Fundamentals
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["DSA (600+ problems)", "OS", "DBMS", "Networking", "OOP", "System Design", "Algorithms"].map((skill, index) => (
                            <span key={index} className="bg-orange-600/30 text-orange-200 px-3 py-1 rounded-full text-sm font-medium border border-orange-500/50">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:bg-gray-800/70 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                        Soft Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["Technical Blogging", "Documentation", "Open Source", "Agile", "Team Communication"].map((skill, index) => (
                            <span key={index} className="bg-gray-600/30 text-gray-200 px-3 py-1 rounded-full text-sm font-medium border border-gray-500/50">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Frontend Technologies - Secondary Focus */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-600 hover:bg-gray-800/50 transition-colors duration-200 relative overflow-hidden">
                    <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["React.js", "Vite", "Tailwind CSS"].map((skill, index) => (
                            <span key={index} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-600/30">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
